import { useState, useMemo, useEffect, useCallback } from 'react';
import { Sparkles, ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import SEO from '../components/SEO';
import { GALLERY_IMAGES } from '../data/galleryData';

const CATEGORIES = [
  { id: 'all', label: 'All Photos' },
  { id: 'exterior', label: 'Cafe & Exterior' },
  { id: 'playarea', label: 'Kids Play Zone' },
  { id: 'food', label: 'Food & Treats' },
  { id: 'drinks', label: 'Shakes & Coolers' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightbox, setLightbox] = useState(null);

  const filteredImages = useMemo(() => {
    if (activeCategory === 'all') return GALLERY_IMAGES;
    return GALLERY_IMAGES.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  const openLightbox = (img) => setLightbox(img);
  const closeLightbox = () => setLightbox(null);

  const prevImg = useCallback(() => {
    setLightbox((current) => {
      if (!current) return null;
      const idx = filteredImages.findIndex((img) => img.id === current.id);
      return idx > 0 ? filteredImages[idx - 1] : filteredImages[filteredImages.length - 1];
    });
  }, [filteredImages]);

  const nextImg = useCallback(() => {
    setLightbox((current) => {
      if (!current) return null;
      const idx = filteredImages.findIndex((img) => img.id === current.id);
      return idx < filteredImages.length - 1 ? filteredImages[idx + 1] : filteredImages[0];
    });
  }, [filteredImages]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (!lightbox) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowLeft') prevImg();
      else if (e.key === 'ArrowRight') nextImg();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightbox, prevImg, nextImg]);

  return (
    <div className="min-h-screen bg-[#FFF8F0] page-enter">
      <SEO
        title="Photo Gallery"
        description="Browse photos of Tickles N Treats cafe ambiance at Sia Heights, the neon signs, children's play arena, and appetizing pure vegetarian food."
        canonical="https://ticklesntreats.in/gallery"
      />

      <Breadcrumb items={[{ label: 'Photo Gallery' }]} />

      {/* Header */}
      <section className="pt-10 pb-6 px-4 sm:px-8 text-center bg-white border-b border-[#F3F4F6]">
        <div className="max-w-4xl mx-auto">
          <span
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold mb-3"
            style={{ background: '#E8DAFF', color: '#7C3AED', fontFamily: 'Nunito, sans-serif' }}
          >
            <Sparkles size={14} /> Visual Showcase
          </span>
          <h1
            className="text-3xl sm:text-5xl font-black text-[#1A1A2E] mb-3"
            style={{ fontFamily: 'Baloo 2, sans-serif' }}
          >
            Glimpses of <span style={{ color: '#FF4D8D' }}>Tickles N Treats</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Explore photos of our play arena, cafe exterior at Sia Heights, and irresistible dining treats!
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <div className="sticky top-20 z-20 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex gap-2 overflow-x-auto no-scrollbar justify-start sm:justify-center">
          {CATEGORIES.map((cat) => (
            <button
              type="button"
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#1A1A2E] text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:text-[#1A1A2E] hover:bg-gray-200'
              }`}
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid: 2-col on phones, 3-col on tablet/desktop */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
        <div className="masonry-grid transition-opacity duration-300">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              className="masonry-item group relative cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => openLightbox(img)}
            >
              <div className="relative overflow-hidden bg-gray-100">
                <img
                  src={img.thumb}
                  alt={img.alt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Category tag chip */}
                {img.tag && (
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-[#1A1A2E]/80 text-white backdrop-blur-md">
                    {img.tag}
                  </span>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <span className="text-white text-xs sm:text-sm font-bold block" style={{ fontFamily: 'Baloo 2, sans-serif' }}>
                        {img.caption}
                      </span>
                      <span className="text-white/70 text-[11px] block" style={{ fontFamily: 'Nunito, sans-serif' }}>
                        Tap to zoom
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0">
                      <ZoomIn size={16} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom caption in card */}
              <div className="p-3 bg-white border-t border-gray-50 flex items-center justify-between">
                <p className="text-xs font-semibold text-[#1A1A2E] truncate" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  {img.caption}
                </p>
                <span className="text-[11px] font-bold text-[#BE185D] shrink-0 ml-2">
                  {img.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Lightbox Modal */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 transition-all duration-200"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          {/* Close Button */}
          <button
            type="button"
            className="absolute top-4 right-4 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer"
            onClick={closeLightbox}
            aria-label="Close photo preview"
          >
            <X size={22} />
          </button>

          {/* Prev Button */}
          <button
            type="button"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer"
            onClick={(e) => { e.stopPropagation(); prevImg(); }}
            aria-label="Previous photo"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next Button */}
          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer"
            onClick={(e) => { e.stopPropagation(); nextImg(); }}
            aria-label="Next photo"
          >
            <ChevronRight size={24} />
          </button>

          {/* Modal Content */}
          <div
            className="relative max-w-4xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[75vh] max-w-full rounded-2xl object-contain shadow-2xl"
            />
            <div className="mt-4 text-center text-white">
              <h3 className="text-base sm:text-lg font-bold" style={{ fontFamily: 'Baloo 2, sans-serif' }}>
                {lightbox.caption}
              </h3>
              <p className="text-white/60 text-xs sm:text-sm mt-0.5" style={{ fontFamily: 'Nunito, sans-serif' }}>
                {lightbox.alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

