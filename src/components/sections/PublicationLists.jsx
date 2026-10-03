import { Link } from 'react-router-dom';
import { ENGAGEMENT, PUBLICATIONS } from '@/data/content';
import Icon from '@/components/ui/Icon';
import Reveal from '@/components/ui/Reveal';
import SectionTitle from '@/components/ui/SectionTitle';

function ListCard({ id, icon, data, showMore }) {
  return (
    <div className="plist" id={id}>
      <div className="plist__head">
        <span className="plist__icon">
          <Icon name={icon} size={24} />
        </span>
        <h3>{data.title}</h3>
      </div>
      <ul className="plist__items">
        {data.items.map((it) => (
          <li key={it.title}>
            <span className="plist__date">{it.year ? it.year : <Icon name="Globe" size={18} />}</span>
            <span className="plist__text">{it.title}</span>
          </li>
        ))}
      </ul>
      {showMore && (
        <Link to={data.more.to} className="news__more">
          {data.more.label} <Icon name="ArrowRight" size={15} strokeWidth={2.5} />
        </Link>
      )}
    </div>
  );
}

export default function PublicationLists({ showMore = true, light = true }) {
  return (
    <section className={`section${light ? ' section--light' : ''}`}>
      <div className="container">
        <Reveal>
          <SectionTitle kicker="Scholarship" title="Publications & International Engagement" />
        </Reveal>
        <div className="plist-grid">
          <Reveal from="left">
            <ListCard id="publications" icon="BookOpen" data={PUBLICATIONS} showMore={showMore} />
          </Reveal>
          <Reveal from="right">
            <ListCard id="engagement" icon="Globe" data={ENGAGEMENT} showMore={showMore} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
