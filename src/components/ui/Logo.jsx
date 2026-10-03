import { Link } from 'react-router-dom';
import { SITE } from '@/data/content';

/* Monogram emblem + name, in the reference site's "crest + university name" arrangement. */
export default function Logo({ light = false, onClick }) {
  return (
    <Link to="/" className={`logo${light ? ' logo--light' : ''}`} aria-label={`${SITE.name} – home`} onClick={onClick}>
      <svg className="logo__mark" viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="31" className="logo__disc" />
        <circle cx="32" cy="32" r="25.5" fill="none" className="logo__ring" strokeWidth="2.5" />
        <path d="M14 42 Q32 50 50 42" fill="none" className="logo__ring" strokeWidth="1.6" strokeLinecap="round" />
        <text x="32" y="38" textAnchor="middle" className="logo__letters">GA</text>
      </svg>
      <span className="logo__text">
        <span className="logo__name">{SITE.logoLine1}</span>
        <span className="logo__sub">{SITE.logoLine2}</span>
      </span>
    </Link>
  );
}
