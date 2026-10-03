import usePageTitle from '@/hooks/usePageTitle';
import { ACHIEVEMENTS, BANNERS, BIO, JOURNEY } from '@/data/content';
import PageBanner from '@/components/ui/PageBanner';
import AboutSection from '@/components/sections/AboutSection';
import ImpactBand from '@/components/sections/ImpactBand';
import MissionQuote from '@/components/sections/MissionQuote';
import CtaBand from '@/components/sections/CtaBand';
import SectionTitle from '@/components/ui/SectionTitle';
import Icon from '@/components/ui/Icon';
import Reveal from '@/components/ui/Reveal';

function Journey() {
  return (
    <section className="section section--light" id="journey">
      <div className="container">
        <Reveal>
          <SectionTitle kicker={JOURNEY.kicker} title={JOURNEY.title} />
        </Reveal>
        <ol className="timeline">
          {JOURNEY.items.map((j, i) => (
            <Reveal as="li" key={j.title} className="timeline__item" delay={i * 90}>
              <span className="timeline__dot">
                <Icon name={j.icon} size={28} strokeWidth={1.75} />
              </span>
              <span className="timeline__step">Step {String(i + 1).padStart(2, '0')}</span>
              <h3 className="timeline__title">{j.title}</h3>
              <p className="timeline__text">{j.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default function AboutPage() {
  usePageTitle('about');
  return (
    <>
      <PageBanner
        kicker="About Dr. Ghulam Ali"
        title="About Me"
        text="A scholar, researcher, and academic leader working at the intersection of language, technology, and society."
        image={BANNERS.about}
        crumb="About"
      />
      <AboutSection image={BIO.aboutImage} button={false} />
      <Journey />
      <ImpactBand
        id="achievements"
        kicker={ACHIEVEMENTS.kicker}
        title={ACHIEVEMENTS.title}
        items={ACHIEVEMENTS.items}
      />
      <MissionQuote />
      <CtaBand />
    </>
  );
}
