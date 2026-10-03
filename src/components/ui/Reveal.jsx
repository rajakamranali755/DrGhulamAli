import { useEffect, useLayoutEffect, useRef, useState } from 'react';

/*
 * Fades + slides its children in when they scroll into view (like Elementor's entrance animations).
 * Anything already on screen when the page loads is shown straight away, so the first view is never blank.
 */
export default function Reveal({ as: Tag = 'div', className = '', delay = 0, from = 'up', children, ...rest }) {
  const ref = useRef(null);
  const [state, setState] = useState('rest'); // rest (visible, no animation) | pending | shown

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) return;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const top = el.getBoundingClientRect().top;
    if (top > window.innerHeight * 0.92) setState('pending');
  }, []);

  // once the entrance has played, drop the animation classes (so hover effects run without the delay)
  useEffect(() => {
    if (state !== 'shown') return undefined;
    const t = setTimeout(() => setState('rest'), delay + 900);
    return () => clearTimeout(t);
  }, [state, delay]);

  useEffect(() => {
    if (state !== 'pending') return undefined;
    const el = ref.current;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState('shown');
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [state]);

  const cls = state === 'pending' ? ` reveal reveal--${from}` : state === 'shown' ? ` reveal reveal--${from} is-visible` : '';
  return (
    <Tag ref={ref} className={`${className}${cls}`.trim()} style={delay && state !== 'rest' ? { transitionDelay: `${delay}ms` } : undefined} {...rest}>
      {children}
    </Tag>
  );
}
