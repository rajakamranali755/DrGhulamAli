import usePageTitle from '@/hooks/usePageTitle';
import {
  ADDITIONAL_PROJECTS, COLLABORATION, CTA_PROJECTS, FEATURED_PROJECTS, PROJECT_IMPACT, PROJECTS_HERO,
  RESEARCH_ACTION, TRANSLATION_PROJECTS,
} from '@/data/content';
import PageBanner from '@/components/ui/PageBanner';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import Reveal from '@/components/ui/Reveal';
import FeatureGrid from '@/components/sections/FeatureGrid';
import CtaBand from '@/components/sections/CtaBand';

function ResearchAction() {
  return (
    <section className="section about" id="research-in-action">
      <div className="container about__grid about__grid--reverse">
        <Reveal className="about__body" from="left">
          <SectionTitle kicker={RESEARCH_ACTION.kicker} title={RESEARCH_ACTION.title} align="left" />
          <div className="about__text">
            {RESEARCH_ACTION.paragraphs.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>
          <Button to="#grammora">Featured Projects</Button>
        </Reveal>
        <Reveal className="about__media" from="right">
          <div className="about__frame about__frame--wide">
            <img src={RESEARCH_ACTION.image} alt="Dr. Ghulam Ali presenting research" loading="lazy" />
          </div>
          <div className="about__badge about__badge--left">
            <strong>15+</strong>
            <span>Major Research & Translation Projects</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Featured() {
  return (
    <section className="section section--light" id="featured">
      <div className="container">
        <Reveal>
          <SectionTitle kicker={FEATURED_PROJECTS.kicker} title={FEATURED_PROJECTS.title} />
        </Reveal>
        <div className="projects">
          {FEATURED_PROJECTS.items.map((p, i) => (
            <Reveal key={p.id} className={`project${i % 2 ? ' project--reverse' : ''}`} id={p.id}>
              <div className={`project__media${p.contain ? ' project__media--contain' : ''}`}>
                <img src={p.image} alt={p.title} loading="lazy" />
              </div>
              <div className="project__body">
                <span className="project__tag">{p.tag}</span>
                <h3 className="project__title">{p.title}</h3>
                <h4 className="project__subtitle">{p.subtitle}</h4>
                {p.paragraphs.map((t) => (
                  <p key={t.slice(0, 20)}>{t}</p>
                ))}
                {p.cta && <Button to={p.cta.to}>{p.cta.label}</Button>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TagCards({ data, id, numbered, light }) {
  return (
    <section className={`section${light ? ' section--light' : ''}`} id={id}>
      <div className="container">
        <Reveal>
          <SectionTitle kicker={data.kicker} title={data.title} />
        </Reveal>
        <div className="tcards">
          {data.items.map((t, i) => (
            <Reveal key={t.title} className="tcard" delay={(i % 2) * 100}>
              {numbered && <span className="tcard__no">{t.no}</span>}
              <span className="tcard__icon">
                <Icon name={t.icon} size={32} strokeWidth={1.75} />
              </span>
              <h3 className="tcard__title">{t.title}</h3>
              <span className="tcard__tag">{t.tag}</span>
              <p className="tcard__text">{t.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Collaboration() {
  return (
    <section className="section section--light" id="collaboration">
      <div className="container collab">
        <Reveal className="collab__body" from="left">
          <SectionTitle kicker={COLLABORATION.kicker} title={COLLABORATION.title} align="left" />
          <p className="collab__text">{COLLABORATION.text}</p>
          <ul className="partners">
            {COLLABORATION.partners.map((p) => (
              <li key={p}>
                <Icon name="Handshake" size={22} />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="collab__media" from="right">
          <img src={COLLABORATION.image} alt="Signing of a collaboration agreement" loading="lazy" />
        </Reveal>
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  usePageTitle('Project');
  return (
    <>
      <PageBanner kicker={PROJECTS_HERO.kicker} title={PROJECTS_HERO.title} text={PROJECTS_HERO.text} image={PROJECTS_HERO.image} crumb="Projects" />
      <ResearchAction />
      <Featured />
      <TagCards data={TRANSLATION_PROJECTS} id="translation" numbered />
      <TagCards data={ADDITIONAL_PROJECTS} id="additional" light />
      <FeatureGrid id="impact" kicker={PROJECT_IMPACT.kicker} title={PROJECT_IMPACT.title} items={PROJECT_IMPACT.items} />
      <Collaboration />
      <CtaBand data={CTA_PROJECTS} />
    </>
  );
}
