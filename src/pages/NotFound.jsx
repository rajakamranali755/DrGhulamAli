import usePageTitle from '@/hooks/usePageTitle';
import { BANNERS } from '@/data/content';
import PageBanner from '@/components/ui/PageBanner';
import Button from '@/components/ui/Button';

export default function NotFoundPage() {
  usePageTitle('Page not found');
  return (
    <>
      <PageBanner title="The page can’t be found." image={BANNERS.notFound} crumb="404" />
      <section className="section center">
        <div className="container narrow">
          <p className="lead">It looks like nothing was found at this location.</p>
          <Button to="/">Back to Home</Button>
        </div>
      </section>
    </>
  );
}
