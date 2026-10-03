import { BIO } from '@/data/content';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import Reveal from '@/components/ui/Reveal';

/* "since 2021 / We are best" block of the reference site -> Academic Biography. */
export default function AboutSection({ image = BIO.homeImage, full = true, id = 'biography', button = true }) {
  return (
    <section className="section about" id={id}>
      <div className="container about__grid">
        <Reveal className="about__media" from="left">
          <div className="about__frame">
            <img src={image} alt="Dr. Ghulam Ali" loading="lazy" />
          </div>
          <div className="about__badge">
            <strong>20+</strong>
            <span>Years of Academic Excellence</span>
          </div>
        </Reveal>
        <Reveal className="about__body" from="right">
          <SectionTitle kicker={BIO.kicker} title={BIO.title} align="left" />
          <div className="about__text">
            {(full ? BIO.paragraphs : BIO.short).map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <ul className="roles">
            {BIO.roles.map((r) => (
              <li key={r.title} className="roles__item">
                <span className="roles__icon">
                  <Icon name={r.icon} size={26} />
                </span>
                <span>
                  <h5 className="roles__title">{r.title}</h5>
                  <span className="roles__text">{r.text}</span>
                </span>
              </li>
            ))}
          </ul>
          {button && <Button to="/about">View Full Biography</Button>}
        </Reveal>
      </div>
    </section>
  );
}
