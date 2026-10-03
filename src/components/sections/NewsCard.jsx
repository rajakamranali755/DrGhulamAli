import { Link } from 'react-router-dom';
import Icon from '@/components/ui/Icon';

/* News card of the reference site ("Latest News"): image, tag, title, excerpt, Read More. */
export default function NewsCard({ image, tag, title, text, link, href, contain = false, meta, featured = false }) {
  const more = link ? (
    <Link to={link.to} className="news__more">
      {link.label} <Icon name="ArrowRight" size={15} strokeWidth={2.5} />
    </Link>
  ) : href ? (
    <a href={href} className="news__more" target="_blank" rel="noopener noreferrer">
      Watch <Icon name="Play" size={14} strokeWidth={2.5} />
    </a>
  ) : null;
  return (
    <article className={`news${featured ? ' news--featured' : ''}`}>
      <div className={`news__media${contain ? ' news__media--contain' : ''}`}>
        <img src={image} alt={title} loading="lazy" />
        {tag && <span className="news__tag">{tag}</span>}
        {href && (
          <a className="news__play" href={href} target="_blank" rel="noopener noreferrer" aria-label={`Watch: ${title}`}>
            <Icon name="Play" size={26} strokeWidth={2} fill="currentColor" />
          </a>
        )}
      </div>
      <div className="news__body">
        {meta && (
          <span className="news__meta">
            <Icon name="CalendarDays" size={14} /> {meta}
          </span>
        )}
        <h4 className="news__title">{title}</h4>
        {text && <p className="news__text">{text}</p>}
        {more}
      </div>
    </article>
  );
}
