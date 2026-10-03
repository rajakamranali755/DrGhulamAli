import { VISION } from '@/data/content';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import Reveal from '@/components/ui/Reveal';

/* "Why Choose Ibadat" (image + three reasons) block of the reference site -> academic vision pillars. */
export default function VisionPillars() {
  return (
    <section className="section section--light choose" id="academic-vision">
      <div className="container choose__grid">
        <Reveal className="choose__media" from="left">
          <img src={VISION.pillarsImage} alt="Grammora.AI launch ceremony" loading="lazy" />
          <div className="choose__tag">
            <Icon name="Sparkles" size={22} />
            <span>Grammora.AI</span>
          </div>
        </Reveal>
        <Reveal className="choose__body" from="right">
          <SectionTitle kicker={VISION.kicker} title={VISION.title} align="left" />
          <ul className="choose__list">
            {VISION.pillars.map((p) => (
              <li key={p.title}>
                <span className="choose__icon">
                  <Icon name={p.icon} size={28} strokeWidth={1.75} />
                </span>
                <div>
                  <h5>{p.title}</h5>
                  <p>{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <Button to={VISION.cta.to}>{VISION.cta.label}</Button>
        </Reveal>
      </div>
    </section>
  );
}
