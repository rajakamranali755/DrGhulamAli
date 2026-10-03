# Dr Ghulam Ali – website (React) · v2 "IIUI" design

The Dr Ghulam Ali website rebuilt in the design language of **iiui.edu.pk** (IBADAT International University,
Islamabad): navy top bar, white sticky header with dropdown menus and a green call-to-action button, a full-width
photo slider with two-line uppercase headings, green-kicker section titles, "Why IIUI"-style icon cards,
"Academics"-style cards, a "Why choose" image + reasons block, "Latest News"-style image cards, a photo slider with
thumbnails, and a four-column dark footer.

All text, links and photos come from the original site (the WordPress/Elementor export you supplied).

## Run it

```bash
npm install
npm run dev            # http://localhost:5173
npm run build          # production build in dist/
npm run preview        # serve dist/ locally
npm run build:preview  # portable build in dist-preview/ (hash URLs, works from any folder)
```

Requires Node 18+.

## Pages (same URLs as the WordPress site)

| URL                         | Page                    |
| --------------------------- | ----------------------- |
| `/`                         | Home                    |
| `/about`                    | About                   |
| `/research-and-publication` | Research & Publications |
| `/project`                  | Projects                |
| `/media-presence`           | Media Presence          |
| `/contact`                  | Contact                 |
| `/home`, `/home-2`          | redirect to `/`         |

Dropdown menu items jump to sections, e.g. `/project#grammora`, `/about#journey`,
`/research-and-publication#publications`.

## Home page – how the reference layout was mapped

| iiui.edu.pk section                         | Dr Ghulam Ali section                                   |
| ------------------------------------------- | ------------------------------------------------------- |
| Hero slider (5 slides + Apply Now)          | Hero slider (5 slides + Explore My Work / Get In Touch) |
| "since 2021 – We are best"                  | About Us – Academic Biography + 4 roles                 |
| Our Vision & Mission                        | Vision Statement + Mission Statement                    |
| "What Sets Us Apart – Why IIUI" (6 cards)   | Disciplinary Focus – Areas of Expertise (6 cards)       |
| Statistics counters                         | Impact in Numbers                                       |
| Academics (faculty cards)                   | Focus Areas (6 cards)                                   |
| "Why Choose Ibadat" (image + 3 reasons)     | Academic Vision – 3 pillars                             |
| Latest News (6 image cards + Load More)     | Key Initiatives & Projects (6 image cards)              |
| —                                           | Recent Publications + International Engagement         |
| Our Campus (slider with thumbnails)         | Photo Gallery (all 20 photos)                           |
| Apply Now band / footer                     | Collaboration call-to-action / 4-column footer          |

## Editing content

Almost everything lives in **`src/data/content.js`** – names, contact details, menu, slider slides, biography,
expertise, projects, publications, media links, gallery photos. Change a string there and it updates everywhere.

Colours and fonts are CSS variables at the top of **`src/styles/theme.css`**:

```css
--navy: #0b2c5a;   /* header text, headings, footer */
--green: #65b110;  /* IIUI green: buttons, kickers, icons */
--font-head: 'Poppins';
--font-body: 'Roboto';
```

## Project structure

```
src/
  data/content.js              all text, links and image paths
  pages/                       Home, About, Research, Projects, MediaPresence, Contact, NotFound
  components/layout/           TopBar, Header (desktop dropdowns + mobile drawer), Footer, SiteLayout
  components/sections/         reusable page sections (About, Vision & Mission, feature cards, counters, ...)
  components/ui/               HeroSlider, Gallery, PageBanner, SectionTitle, Button, Counter, Icon, Logo, ContactForm
  config/contactForm.js        contact-form delivery (see below)
  styles/theme.css             the whole design system
```

Icons are [lucide-react](https://lucide.dev) line icons (2 px stroke, round caps) – the same outlined
style the reference site uses. Social icons are the original Font Awesome paths.

## Photographs

All the site's photographs are built from the originals by one script. The originals ship in a
separate archive (`dr-ghulam-ali-photo-sources.zip`) to keep this one small — unzip it into
`tools/source/` before running the script. The finished photographs in `public/img/` are already
here, so the site runs without it.

```bash
python3 tools/prepare-photos.py            # rebuild every photo
python3 tools/prepare-photos.py hero-ai.jpg  # or just one
```

`tools/photos.json` is the manifest: each entry names a source file, the file to write, and the
role that sets its size (`hero` 2400 px, `banner` 2200, `portrait`/`feature` 1700–1800, `card` 1500,
`gallery` 1400 on the long edge).

The pipeline, in order: EXIF orientation → chroma-only denoise (colour noise goes, detail stays) →
upscaling in repeated 1.4x Lanczos steps with a light sharpen between them, which holds edges far
better than one big resample → unsharp mask scaled to the finished size → per-channel level
stretch with a partial grey-world white balance, which lifts the yellow cast off indoor shots →
a small saturation lift → progressive JPEG at quality 92 with no chroma subsampling, so lettering
on banners and lanyards stays readable. A size budget re-encodes only the few frames that would
otherwise run past ~620 KB; the resolution is never reduced.

The hero's first slide is a cut-out figure on a transparent background. That is produced by
OpenCV GrabCut: a seed rectangle marks probable foreground, colour models refine it over eight
passes, the largest connected region is kept, small holes are closed, and the mask is feathered
before being written as a PNG with alpha.

**To change a photograph**, drop a new file into `tools/source/`, point the matching entry in
`tools/photos.json` at it, and run the script again. Nothing in `src/` has to change.

## Contact form

A static site has no server, so the form posts to an endpoint you configure. Copy `.env.example` to `.env`:

* `VITE_FORM_ENDPOINT` – where submissions go (e.g. a Formspree, Web3Forms or Getform URL, or your own API).
* `VITE_FORM_MODE` – `json` (default) or `wordpress` (Elementor-style FormData to a WordPress `admin-ajax.php`).

Until an endpoint is set, submitting shows "Your submission failed because of a server error."

## Deploying

`npm run build` creates `dist/` – upload its contents to any static host. The host must serve `index.html` for
unknown URLs (so `/about` works on refresh):

* **Apache / cPanel** – `.htaccess` (included in `public/`)
* **Netlify / Cloudflare Pages** – `_redirects` (included)
* **Nginx** – `try_files $uri /index.html;`
* **Vercel** – `vercel.json` with `{ "rewrites": [{ "source": "/(.*)", "destination": "/" }] }`

If you cannot configure rewrites, use `npm run build:preview` instead: its URLs look like `/#/about` and it works
from any folder without server configuration.

## Notes

* The logo is a "GA" monogram drawn in SVG (`src/components/ui/Logo.jsx`) – swap in a real logo file any time.
* Every photograph is one of your own, processed locally; the site loads nothing from an outside image
  host (only Google Fonts come from outside).
* `lucide-react` was imported by `src/components/ui/Icon.jsx` but missing from `package.json`, so a clean
  `npm install && npm run build` failed. It is now declared as a dependency.
* The old "Bilingual Idiom Glossary" card repeated the PPSC Rules paragraph by mistake; it now uses the glossary
  description from the old "home 2" page.
