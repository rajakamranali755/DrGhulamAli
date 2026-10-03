import { useCallback, useEffect, useRef, useState } from 'react';
import Button from './Button';
import Icon from './Icon';

/*
 * Full-width hero slider modelled on the reference site's home slider:
 * photo background + dark overlay, two-line uppercase heading (white / green), text, call-to-action,
 * arrows, bullets and a play/pause control. Autoplays every 6 s, pauses on hover, supports swipe.
 */
export default function HeroSlider({ slides, interval = 6000 }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hover, setHover] = useState(false);
  const touch = useRef(null);
  const count = slides.length;

  const go = useCallback((i) => setIndex(((i % count) + count) % count), [count]);
  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  useEffect(() => {
    if (!playing || hover) return undefined;
    const t = setTimeout(next, interval);
    return () => clearTimeout(t);
  }, [index, playing, hover, next, interval]);

  const onKey = (e) => {
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
  };

  return (
    <section
      className="hero"
      aria-roledescription="carousel"
      aria-label="Highlights"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onKeyDown={onKey}
      onTouchStart={(e) => {
        touch.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touch.current == null) return;
        const dx = e.changedTouches[0].clientX - touch.current;
        if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
        touch.current = null;
      }}
    >
      {slides.map((s, i) => {
        const active = i === index;
        const H = i === 0 ? 'h1' : 'h2';
        return (
             <div
            key={s.id}
            data-slide={s.id}
            className={`hero__slide${active ? ' is-active' : ''}${s.cutout ? ' hero__slide--cutout' : ''}`}
            aria-hidden={!active}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
          >
            {s.cutout ? (
              <div className="hero__bg hero__bg--brand">
                <img className="hero__cutout" src={s.image} alt="Dr. Ghulam Ali" />
              </div>
            ) : (
              <div className="hero__bg" style={{ backgroundImage: `url("${s.image}")` }} />
            )}
            <div className="hero__overlay" />
            <div className="container hero__content">
              <span className="hero__kicker">{s.kicker}</span>
              <H className="hero__title">
                <span className="hero__line1">{s.line1}</span>
                <span className="hero__line2">{s.line2}</span>
              </H>
              <p className="hero__text">{s.text}</p>
              <div className="hero__actions">
                {s.cta && (
                  <Button to={s.cta.to} tabIndex={active ? 0 : -1}>
                    {s.cta.label}
                  </Button>
                )}
                {s.cta2 && (
                  <Button to={s.cta2.to} variant="outline-light" tabIndex={active ? 0 : -1}>
                    {s.cta2.label}
                  </Button>
                )}
              </div>
            </div>
          </div>
        );
      })}

      <button type="button" className="hero__arrow hero__arrow--prev" onClick={prev} aria-label="Previous slide">
        <Icon name="ChevronLeft" size={26} />
      </button>
      <button type="button" className="hero__arrow hero__arrow--next" onClick={next} aria-label="Next slide">
        <Icon name="ChevronRight" size={26} />
      </button>

      <div className="hero__controls">
        <button type="button" className="hero__mini" onClick={prev} aria-label="Previous slide">
          <Icon name="ChevronLeft" size={18} strokeWidth={2.5} />
        </button>
        <div className="hero__bullets">
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              className={`hero__bullet${i === index ? ' is-active' : ''}`}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              onClick={() => go(i)}
            />
          ))}
        </div>
        <button type="button" className="hero__play" onClick={() => setPlaying((p) => !p)} aria-label={playing ? 'Pause slider' : 'Play slider'}>
          <Icon name={playing ? 'Pause' : 'Play'} size={14} strokeWidth={2.5} />
        </button>
        <button type="button" className="hero__mini" onClick={next} aria-label="Next slide">
          <Icon name="ChevronRight" size={18} strokeWidth={2.5} />
        </button>
      </div>
      {playing && !hover && <span key={index} className="hero__progress" style={{ animationDuration: `${interval}ms` }} />}
    </section>
  );
}
