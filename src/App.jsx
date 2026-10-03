import { BrowserRouter, HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import SiteLayout from '@/components/layout/SiteLayout';
import HomePage from '@/pages/Home';
import AboutPage from '@/pages/About';
import ResearchPage from '@/pages/Research';
import ProjectsPage from '@/pages/Projects';
import MediaPresencePage from '@/pages/MediaPresence';
import ContactPage from '@/pages/Contact';
import NotFoundPage from '@/pages/NotFound';

/* Same URLs as the original WordPress site. The preview build uses hash URLs (/#/about). */
const Router = import.meta.env.VITE_ROUTER === 'hash' ? HashRouter : BrowserRouter;

export default function App() {
  return (
    <Router>
      <SiteLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/home-2" element={<Navigate to="/" replace />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/research-and-publication" element={<ResearchPage />} />
          <Route path="/project" element={<ProjectsPage />} />
          <Route path="/media-presence" element={<MediaPresencePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </SiteLayout>
    </Router>
  );
}
