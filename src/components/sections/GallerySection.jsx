import { GALLERY } from '@/data/content';
import Gallery from '@/components/ui/Gallery';
import SectionTitle from '@/components/ui/SectionTitle';
import Reveal from '@/components/ui/Reveal';

/* "Our Campus" photo slider of the reference site -> photo gallery. */
export default function GallerySection() {
  return (
    <section className="section gallery-section" id="gallery">
      <div className="container">
        <Reveal>
          <SectionTitle kicker="Moments & Milestones" title="Photo Gallery" />
        </Reveal>
        <Reveal>
          <Gallery images={GALLERY} />
        </Reveal>
      </div>
    </section>
  );
}
