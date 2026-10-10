import { useEffect } from 'react';

const SITE = 'https://drghulamali.com';

function upsert(selector, create) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  return el;
}

export default function useSeo({ title, description, path = '/' }) {
  useEffect(() => {
    document.title = `${title} | Dr. Ghulam Ali – CeLTS, AIOU`;

    upsert('meta[name="description"]', () => {
      const m = document.createElement('meta');
      m.name = 'description';
      return m;
    }).content = description;

    upsert('link[rel="canonical"]', () => {
      const l = document.createElement('link');
      l.rel = 'canonical';
      return l;
    }).href = `${SITE}${path}`;
  }, [title, description, path]);
}