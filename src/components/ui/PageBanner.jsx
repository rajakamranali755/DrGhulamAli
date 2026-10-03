import { Link } from 'react-router-dom';
import Icon from './Icon';

/* Inner-page title banner: photo + navy overlay, page title and breadcrumb. */
export default function PageBanner({ kicker, title, text, image, crumb }) {
  return (
    <section className="banner" style={{ backgroundImage: `url("${image}")` }}>
      <div className="banner__overlay" />
      <div className="container banner__inner">
        {kicker && <span className="banner__kicker">{kicker}</span>}
        <h1 className="banner__title">{title}</h1>
        {text && <p className="banner__text">{text}</p>}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <Icon name="ChevronRight" size={14} strokeWidth={2.5} />
          <span aria-current="page">{crumb || title}</span>
        </nav>
      </div>
    </section>
  );
}
