import usePageTitle from '@/hooks/usePageTitle';
import { EXPERTISE, HERO_SLIDES } from '@/data/content';
import HeroSlider from '@/components/ui/HeroSlider';
import AboutSection from '@/components/sections/AboutSection';
import VisionMission from '@/components/sections/VisionMission';
import FeatureGrid from '@/components/sections/FeatureGrid';
import ImpactBand from '@/components/sections/ImpactBand';
import FocusAreas from '@/components/sections/FocusAreas';
import VisionPillars from '@/components/sections/VisionPillars';
import Initiatives from '@/components/sections/Initiatives';
import PublicationLists from '@/components/sections/PublicationLists';
import GallerySection from '@/components/sections/GallerySection';
import CtaBand from '@/components/sections/CtaBand';

/* Section order follows the reference site's home page:
   slider -> "we are best" -> vision & mission -> "why" cards -> academics -> "why choose" -> latest news -> campus slider */
export default function HomePage() {
  usePageTitle('');
  return (
    <>
      <HeroSlider slides={HERO_SLIDES} />
      <AboutSection />
      <VisionMission />
      <FeatureGrid id="expertise" kicker={EXPERTISE.kicker} title={EXPERTISE.title} items={EXPERTISE.items} />
      <ImpactBand />
      <FocusAreas />
      <VisionPillars />
      <Initiatives />
      <PublicationLists />
      <GallerySection />
      <CtaBand />
    </>
  );
}
