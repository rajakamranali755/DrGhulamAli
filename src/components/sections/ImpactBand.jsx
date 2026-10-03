import { IMPACT } from '@/data/content';
import Counter from '@/components/ui/Counter';
import Icon from '@/components/ui/Icon';

/* Counter strip over a photo (the reference site's statistics band). */
export default function ImpactBand({ title = IMPACT.title, kicker = 'Achievements', items = IMPACT.items, image = IMPACT.background, id }) {
  return (
    <section className="impact" id={id} style={{ backgroundImage: `url("${image}")` }}>
      <div className="impact__overlay" />
      <div className="container impact__inner">
        <div className="impact__head">
          <span className="section-title__kicker">{kicker}</span>
          <h2>{title}</h2>
        </div>
        <ul className={`impact__list impact__list--${items.length}`}>
          {items.map((it) => (
            <li key={it.label} className="impact__item">
              <span className="impact__icon">
                <Icon name={it.icon} size={34} strokeWidth={1.75} />
              </span>
              <Counter value={it.value} suffix={it.suffix} />
              <span className="impact__label">{it.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
