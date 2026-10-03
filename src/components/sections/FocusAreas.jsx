import { FOCUS_AREAS, SITE } from '@/data/content';
import SectionTitle from '@/components/ui/SectionTitle';
import Icon from '@/components/ui/Icon';
import Reveal from '@/components/ui/Reveal';
import { Link } from 'react-router-dom';

/* "Academics" faculty cards of the reference site -> focus areas. */
export default function FocusAreas() {
  return (
    <section className="section academics" id="focus">
      <div className="container">
        <Reveal>
          <SectionTitle kicker={SITE.tagline} title="Focus Areas" />
        </Reveal>
        <div className="academics__grid">
          {FOCUS_AREAS.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 90}>
              <Link to="/research-and-publication" className="academic">
                <span className="academic__icon">
                  <Icon name={f.icon} size={34} strokeWidth={1.75} />
                </span>
                <span className="academic__body">
                  <h4 className="academic__title">{f.title}</h4>
                  <span className="academic__text">{f.text}</span>
                </span>
                <span className="academic__arrow">
                  <Icon name="ArrowRight" size={18} strokeWidth={2.5} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
