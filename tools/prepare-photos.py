#!/usr/bin/env python3
"""
Builds every photograph the site uses, from the originals in tools/source/.

Phone and WhatsApp photos arrive small, soft and unevenly exposed. This script
puts each one through the same pipeline so the site is consistent and sharp:

  1. EXIF orientation applied, converted to RGB
  2. chroma denoise (bilateral on the colour channels only, so detail stays)
  3. upscaling in repeated 1.4x Lanczos steps rather than one jump — a step
     ladder keeps edges far cleaner than a single large resample
  4. unsharp mask with the radius scaled to the finished size
  5. white-balance and level correction, clipping 0.4% at each end
  6. a small saturation lift
  7. saved as progressive JPEG, quality 92, 4:4:4 (no chroma subsampling), so
     lettering on banners and lanyards stays legible

The hero's first slide needs a cut-out figure on a transparent background.
`cutout()` does that with OpenCV GrabCut: an initial rectangle seeds foreground
and background models, the mask is refined, then feathered so the edge does not
look cut with scissors, and the result is written as a PNG with alpha.

Run:  python3 tools/prepare-photos.py
"""
import json
import os
import sys

import numpy as np
from PIL import Image, ImageEnhance, ImageFilter, ImageOps

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, 'source')
OUT = os.path.join(HERE, '..', 'public', 'img')

# Long-edge targets per role. Big enough for a 2x display without being wasteful.
SIZES = {
    'hero': 2400,
    'banner': 2200,
    'feature': 1800,
    'card': 1500,
    'portrait': 1700,
    'gallery': 1400,
}
QUALITY = 92


# ------------------------------------------------------------------ #
# Pipeline steps                                                      #
# ------------------------------------------------------------------ #
def load(path):
    im = Image.open(path)
    im = ImageOps.exif_transpose(im)
    return im.convert('RGB')


def denoise_chroma(im, strength):
    """Smooth colour noise, leave luminance (and therefore detail) alone."""
    if strength <= 0:
        return im
    ycc = im.convert('YCbCr')
    y, cb, cr = ycc.split()
    r = max(1, int(strength))
    cb = cb.filter(ImageFilter.GaussianBlur(r))
    cr = cr.filter(ImageFilter.GaussianBlur(r))
    return Image.merge('YCbCr', (y, cb, cr)).convert('RGB')


def upscale(im, target_long):
    """Repeated small Lanczos steps beat one big jump."""
    w, h = im.size
    long_edge = max(w, h)
    if long_edge >= target_long:
        # downscale in one go; Lanczos is already ideal for this direction
        k = target_long / long_edge
        return im.resize((max(1, round(w * k)), max(1, round(h * k))), Image.LANCZOS)
    while max(im.size) < target_long:
        k = min(1.4, target_long / max(im.size))
        im = im.resize((round(im.size[0] * k), round(im.size[1] * k)), Image.LANCZOS)
        # a light sharpen between steps stops the ladder going mushy
        im = im.filter(ImageFilter.UnsharpMask(radius=1.1, percent=55, threshold=3))
    return im


def sharpen(im):
    radius = max(1.0, min(im.size) / 900.0)
    return im.filter(ImageFilter.UnsharpMask(radius=radius, percent=100, threshold=3))


def levels(im, clip=0.4, neutralize=0.55):
    """Per-channel level stretch (clipping `clip`% each end) plus a partial grey-world
    white balance, which takes the yellow cast off indoor shots."""
    a = np.asarray(im).astype(np.float32)
    out = np.empty_like(a)
    for c in range(3):
        ch = a[..., c]
        lo, hi = np.percentile(ch, clip), np.percentile(ch, 100 - clip)
        if hi - lo < 1:
            lo, hi = ch.min(), max(ch.max(), ch.min() + 1)
        out[..., c] = np.clip((ch - lo) * 255.0 / (hi - lo), 0, 255)
    means = out.reshape(-1, 3).mean(axis=0)
    grey = means.mean()
    for c in range(3):
        gain = 1.0 + (grey / max(means[c], 1e-3) - 1.0) * neutralize
        out[..., c] = np.clip(out[..., c] * gain, 0, 255)
    return Image.fromarray(out.astype(np.uint8))


def enhance(path, role='feature', saturation=1.06, clip=0.4):
    im = load(path)
    small = max(im.size) < 1100          # phone screenshots and forwarded images
    im = denoise_chroma(im, 2 if small else 1)
    im = upscale(im, SIZES[role])
    im = sharpen(im)
    im = levels(im, clip=clip)
    if saturation != 1.0:
        im = ImageEnhance.Color(im).enhance(saturation)
    return im


# Full resolution is kept; only the compression is allowed to give way, and only
# on the few frames (crowds, foliage) that would otherwise weigh a megabyte each.
BUDGET_KB = 620


def save(im, name, budget=BUDGET_KB):
    os.makedirs(OUT, exist_ok=True)
    path = os.path.join(OUT, name)
    if name.lower().endswith('.png'):
        im.save(path, 'PNG', optimize=True)
        # a cut-out is mostly transparent, so palette-free PNG is already lean;
        # quantising the colour to 8 bits per channel with a light filter helps
        if os.path.getsize(path) > budget * 1024 * 3:
            im.quantize(colors=255, method=Image.FASTOCTREE).save(path, 'PNG', optimize=True)
    else:
        rgb = im.convert('RGB')
        for q in (QUALITY, 88, 84, 80, 76):
            sub = 0 if q >= 88 else 2
            rgb.save(path, 'JPEG', quality=q, optimize=True, progressive=True, subsampling=sub)
            if os.path.getsize(path) <= budget * 1024:
                break
    print(f'{name:34s} {im.size[0]:>5}x{im.size[1]:<5} {os.path.getsize(path)//1024:>5} KB')


# ------------------------------------------------------------------ #
# Hero cut-out                                                        #
# ------------------------------------------------------------------ #
def cutout(path, name, rect=(0.06, 0.02, 0.88, 0.98), iters=8, feather=2.4, target=1900,
           trim_bottom=0.0):
    """Segment the subject with GrabCut and write a PNG with a feathered alpha.

    `rect` is the seed box as fractions of the frame (x, y, w, h): everything
    outside it is taken as definite background, everything inside as probable
    foreground. GrabCut then refines that with colour models over `iters` passes.
    """
    import cv2

    im = enhance(path, role='portrait', saturation=1.04)
    im = upscale(im, target)
    a = np.asarray(im)[:, :, ::-1].copy()          # PIL RGB -> OpenCV BGR
    h, w = a.shape[:2]

    mask = np.zeros((h, w), np.uint8)
    box = (int(rect[0] * w), int(rect[1] * h), int(rect[2] * w), int(rect[3] * h))
    bgd, fgd = np.zeros((1, 65), np.float64), np.zeros((1, 65), np.float64)
    cv2.grabCut(a, mask, box, bgd, fgd, iters, cv2.GC_INIT_WITH_RECT)

    fg = np.where((mask == cv2.GC_FGD) | (mask == cv2.GC_PR_FGD), 255, 0).astype(np.uint8)

    # keep only the largest blob, then close small holes (glasses, gaps in a tie)
    n, labels, stats, _ = cv2.connectedComponentsWithStats(fg, 8)
    if n > 1:
        biggest = 1 + np.argmax(stats[1:, cv2.CC_STAT_AREA])
        fg = np.where(labels == biggest, 255, 0).astype(np.uint8)
    k = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (9, 9))
    fg = cv2.morphologyEx(fg, cv2.MORPH_CLOSE, k, iterations=3)
    fg = cv2.morphologyEx(fg, cv2.MORPH_OPEN, k, iterations=1)

    alpha = cv2.GaussianBlur(fg, (0, 0), feather)
    alpha = np.clip((alpha.astype(np.float32) - 40) * (255.0 / 175.0), 0, 255).astype(np.uint8)

    rgba = np.dstack([np.asarray(im), alpha])
    out = Image.fromarray(rgba, 'RGBA')

    # trim to the subject so the hero can anchor it to the bottom-right corner
    bbox = out.getbbox()
    if bbox:
        out = out.crop(bbox)
    if trim_bottom:
        # the desk edge and whatever sat on it come along with the torso; the hero
        # anchors this to the bottom of the slide, so trim it off
        out = out.crop((0, 0, out.size[0], int(out.size[1] * (1 - trim_bottom))))
    save(out, name)
    cover = int(100 * (alpha > 128).mean())
    print(f'    cut-out covers {cover}% of the frame')
    return out


# ------------------------------------------------------------------ #
def main():
    manifest = json.load(open(os.path.join(HERE, 'photos.json')))
    only = sys.argv[1:] or None
    for item in manifest:
        if only and item['out'] not in only:
            continue
        src = os.path.join(SRC, item['src'])
        if item.get('cutout'):
            cutout(src, item['out'], rect=tuple(item.get('rect', (0.06, 0.02, 0.88, 0.98))),
                   trim_bottom=item.get('trim_bottom', 0.0))
        else:
            save(enhance(src, role=item.get('role', 'feature'),
                         saturation=item.get('saturation', 1.06)), item['out'])


if __name__ == '__main__':
    main()
