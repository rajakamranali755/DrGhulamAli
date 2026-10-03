import { CONTRIBUTIONS, FLAGSHIPS, RESEARCH_INTRO } from '@/data/content';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import NewsCard from './NewsCard';

/* "Latest News" grid of the reference site -> the six key initiatives, each with its photo. */
export default function Initiatives({ showMore = true }) {
  const items = [...FLAGSHIPS, ...CONTRIBUTIONS.items];
  return (
    <section className="section" id="initiatives">
      <div className="container">
        <Reveal>
          <SectionTitle kicker={RESEARCH_INTRO.kicker} title={RESEARCH_INTRO.title} text={RESEARCH_INTRO.text} />
        </Reveal>
        <div className="news-grid">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 90}>
              <NewsCard image={it.image} tag={it.tag} title={it.title} text={it.text} link={it.link} contain={it.contain} />
            </Reveal>
          ))}
        </div>
        {showMore && (
          <div className="center mt-48">
            <Button to="/project" variant="dark">
              Load More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
