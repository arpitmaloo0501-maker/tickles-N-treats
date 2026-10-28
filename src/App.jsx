import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import ScrollToTop from './components/ScrollToTop';
import LoadingSpinner from './components/LoadingSpinner';
import { useScrollAnimation } from './hooks/useScrollAnimation';

// Lazy-loaded route pages for optimal performance and code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const MenuPage = lazy(() => import('./pages/MenuPage'));
const PlayAreaPage = lazy(() => import('./pages/PlayAreaPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ReviewsPage = lazy(() => import('./pages/ReviewsPage'));
const ReservePage = lazy(() => import('./pages/ReservePage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export default function App() {
  // Activate scroll-triggered fade animations for .fade-up and .fade-in elements
  useScrollAnimation();

  return (
    <>
      {/* Scroll to top instantly on every route change */}
      <ScrollToTop />

      <div className="min-h-screen bg-[#FFF8F0] text-[#1A1A2E] flex flex-col antialiased selection:bg-[#FFD6E0] selection:text-[#FF4D8D]">
        {/* Sticky Top Navbar */}
        <Navbar />

        {/* Main Route Content (with bottom padding on mobile so sticky action bar never occludes content) */}
        <main className="flex-grow pb-24 md:pb-0">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/play-area" element={<PlayAreaPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/reserve" element={<ReservePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>

        {/* Brand Footer */}
        <Footer />

        {/* Floating WhatsApp Action & Mobile Bottom Sticky Bar */}
        <FloatingButtons />
      </div>
    </>
  );
}
