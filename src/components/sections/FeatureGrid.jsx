import SectionTitle from '@/components/ui/SectionTitle';
import Icon from '@/components/ui/Icon';
import Reveal from '@/components/ui/Reveal';

/* "Why IIUI – What Sets Us Apart" card grid of the reference site. */
export default function FeatureGrid({ kicker, title, text, items, id, light = false, numbered = false }) {
  return (
    <section className={`section${light ? ' section--light' : ''}`} id={id}>
      <div className="container">
        <Reveal>
          <SectionTitle kicker={kicker} title={title} text={text} />
        </Reveal>
        <div className={`features${items.length === 4 ? ' features--4' : ''}`}>
          {items.map((it, i) => (
            <Reveal key={it.title} className="feature" delay={(i % (items.length === 4 ? 4 : 3)) * 90}>
              {numbered && <span className="feature__no">{String(i + 1).padStart(2, '0')}</span>}
              <span className="feature__icon">
                <Icon name={it.icon} size={44} strokeWidth={1.75} />
              </span>
              <h3 className="feature__title">{it.title}</h3>
              <p className="feature__text">{it.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
