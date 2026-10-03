import usePageTitle from '@/hooks/usePageTitle';
import { BANNERS, MEDIA } from '@/data/content';
import PageBanner from '@/components/ui/PageBanner';
import SectionTitle from '@/components/ui/SectionTitle';
import Reveal from '@/components/ui/Reveal';
import NewsCard from '@/components/sections/NewsCard';
import MissionQuote from '@/components/sections/MissionQuote';
import CtaBand from '@/components/sections/CtaBand';

export default function MediaPresencePage() {
  usePageTitle('Media Presence');
  return (
    <>
      <PageBanner
        kicker="Talks • Interviews • Broadcasts"
        title="Media Presence"
        text="Television interviews, talks and public conversations on translation, language policy, and AI for Pakistani languages."
        image={BANNERS.media}
      />
      <section className="section" id="media">
        <div className="container">
          <Reveal>
            <SectionTitle kicker={MEDIA.kicker} title={MEDIA.title} />
          </Reveal>
          <div className="news-grid">
            {MEDIA.items.map((m, i) => (
              <Reveal key={m.title} delay={i ? ((i - 1) % 3) * 90 : 0} className={i === 0 ? 'news-grid__wide' : ''}>
                <NewsCard
                  featured={i === 0}
                  image={m.image}
                  tag={i === 0 ? `Latest · ${m.year}` : m.year}
                  title={m.title}
                  meta={m.venue}
                  href={m.href}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <MissionQuote />
      <CtaBand />
    </>
  );
}
