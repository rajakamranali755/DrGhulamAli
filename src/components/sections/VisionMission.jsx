import { MISSION, VISION } from '@/data/content';
import SectionTitle from '@/components/ui/SectionTitle';
import Icon from '@/components/ui/Icon';
import Reveal from '@/components/ui/Reveal';

/* "Our Vision & Mission" block of the reference site. */
export default function VisionMission() {
  return (
    <section className="section section--light vm" id="vision">
      <div className="container vm__grid">
        <Reveal className="vm__body" from="left">
          <SectionTitle kicker="Vision & Mission" title="My Academic Vision & Mission" align="left" />
          <article className="vm__card">
            <span className="vm__icon">
              <Icon name="Eye" size={28} />
            </span>
            <div>
              <h3>Vision Statement</h3>
              <p>{VISION.text}</p>
            </div>
          </article>
          <article className="vm__card">
            <span className="vm__icon">
              <Icon name="Target" size={28} />
            </span>
            <div>
              <h3>Mission Statement</h3>
              <p>{MISSION.quote}</p>
            </div>
          </article>
        </Reveal>
        <Reveal className="vm__media" from="right">
          <img src={VISION.image} alt="Dr. Ghulam Ali with colleagues" loading="lazy" />
          <div className="vm__stamp">
            <Icon name="Quote" size={26} />
            <span>Empowering Pakistani languages through research, translation & intelligent technologies</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
