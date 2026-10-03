import usePageTitle from '@/hooks/usePageTitle';
import { BANNERS, CONTRIBUTIONS, FLAGSHIPS, RESEARCH_INTRO } from '@/data/content';
import PageBanner from '@/components/ui/PageBanner';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import NewsCard from '@/components/sections/NewsCard';
import ImpactBand from '@/components/sections/ImpactBand';
import PublicationLists from '@/components/sections/PublicationLists';
import CtaBand from '@/components/sections/CtaBand';

export default function ResearchPage() {
  usePageTitle('Research and publication');
  return (
    <>
      <PageBanner
        kicker="About Dr. Ghulam Ali"
        title="Research & Publications"
        text="Exploring the intersection of Translation Studies, Applied Linguistics, Corpus Linguistics, Artificial Intelligence, and language technologies to advance multilingual knowledge and innovation."
        image={BANNERS.research}
      />

      <section className="section" id="initiatives">
        <div className="container">
          <Reveal>
            <SectionTitle kicker={RESEARCH_INTRO.kicker} title={RESEARCH_INTRO.title} text={RESEARCH_INTRO.text} />
          </Reveal>
          <div className="flagships">
            {FLAGSHIPS.map((f, i) => (
              <Reveal key={f.id} className="flagship" delay={i * 120}>
                <div className={`flagship__media${f.contain ? ' flagship__media--contain' : ''}`}>
                  <img src={f.image} alt={f.title} loading="lazy" />
                </div>
                <div className="flagship__body">
                  <span className="flagship__tag">{f.tag}</span>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                  <Button to={f.link.to} variant="outline">
                    {f.link.label}
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--light" id="contributions">
        <div className="container">
          <Reveal>
            <SectionTitle kicker="Selected Work" title={CONTRIBUTIONS.title} text={CONTRIBUTIONS.text} />
          </Reveal>
          <div className="news-grid news-grid--4">
            {CONTRIBUTIONS.items.map((c, i) => (
              <Reveal key={c.title} delay={(i % 4) * 80}>
                <NewsCard image={c.image} tag={c.tag} title={c.title} text={c.text} link={c.link} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ImpactBand />
      <PublicationLists showMore={false} light={false} />
      <CtaBand />
    </>
  );
}
