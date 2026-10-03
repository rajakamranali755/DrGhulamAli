import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';

/* Photo slider with a thumbnail strip underneath (like the reference site's "Our Campus" slider). */
export default function Gallery({ images, interval = 4500 }) {
  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);
  const stripRef = useRef(null);
  const count = images.length;
  const go = (i) => setIndex(((i % count) + count) % count);

  useEffect(() => {
    if (hover) return undefined;
    const t = setTimeout(() => go(index + 1), interval);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, hover]);

  useEffect(() => {
    const strip = stripRef.current;
    const thumb = strip?.children[index];
    if (strip && thumb) {
      const left = thumb.offsetLeft - strip.clientWidth / 2 + thumb.clientWidth / 2;
      strip.scrollTo({ left, behavior: 'smooth' });
    }
  }, [index]);

  return (
    <div className="gallery" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="gallery__stage">
        {images.map((src, i) => (
          <figure key={src} className={`gallery__slide${i === index ? ' is-active' : ''}`} aria-hidden={i !== index}>
            <div className="gallery__blur" style={{ backgroundImage: `url("${src}")` }} />
            <img src={src} alt={`Dr. Ghulam Ali – photo ${i + 1}`} loading={i < 2 ? 'eager' : 'lazy'} />
          </figure>
        ))}
        <button type="button" className="gallery__arrow gallery__arrow--prev" onClick={() => go(index - 1)} aria-label="Previous photo">
          <Icon name="ChevronLeft" size={24} />
        </button>
        <button type="button" className="gallery__arrow gallery__arrow--next" onClick={() => go(index + 1)} aria-label="Next photo">
          <Icon name="ChevronRight" size={24} />
        </button>
        <span className="gallery__count">
          {index + 1} / {count}
        </span>
      </div>
      <div className="gallery__thumbs" ref={stripRef}>
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            className={`gallery__thumb${i === index ? ' is-active' : ''}`}
            onClick={() => go(i)}
            aria-label={`Show photo ${i + 1}`}
          >
            <img src={src} alt="" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
}
