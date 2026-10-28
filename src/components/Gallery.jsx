// Gallery.jsx — Filterable Photo Grid with Lightbox
import { useState, useMemo, useEffect, useCallback } from 'react';
import { X, ZoomIn, Sparkles } from 'lucide-react';
import { SITE_CONFIG, hasRealInstagram } from '../config/siteConfig';
import { CATEGORIES, GALLERY_IMAGES } from '../data/galleryData';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightbox, setLightbox] = useState(null); // image object

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

  // Keyboard navigation for Lightbox (Escape, ArrowLeft, ArrowRight)
  useEffect(() => {
    if (!lightbox) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        prevImg();
      } else if (e.key === 'ArrowRight') {
        nextImg();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightbox, prevImg, nextImg]);

  const showInsta = hasRealInstagram();

  return (
    <section id="gallery" className="py-24 px-4 sm:px-8" style={{ background: '#FFF8F0' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 fade-up">
          <span
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-bold mb-4"
            style={{ background: '#E8DAFF', color: '#7C3AED', fontFamily: 'Nunito, sans-serif' }}
          >
            <Sparkles size={16} /> Photo Showcase
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black text-[#1A1A2E] mb-4"
            style={{ fontFamily: 'Baloo 2, sans-serif' }}
          >
            Glimpses of <span style={{ color: '#FF4D8D' }}>Tickles N Treats</span>
          </h2>
          <p className="text-[#6B7280] max-w-xl mx-auto" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Explore photos of the play area, cafe exterior at Sia Heights, and irresistible treats!
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center flex-wrap gap-2 mb-12 fade-up">
          {CATEGORIES.map((cat) => (
            <button
              type="button"
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#1A1A2E] text-white shadow-lg scale-105'
                  : 'bg-white text-[#6B7280] hover:text-[#1A1A2E] hover:bg-[#FFD6E0]/50 border border-gray-100'
              }`}
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="masonry-grid transition-opacity duration-300">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              className="masonry-item group relative cursor-pointer overflow-hidden rounded-3xl bg-white shadow-md hover:shadow-2xl transition-all duration-300"
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
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#1A1A2E]/80 text-white backdrop-blur-md">
                    {img.tag}
                  </span>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <span className="text-white text-sm font-bold block" style={{ fontFamily: 'Baloo 2, sans-serif' }}>
                        {img.caption}
                      </span>
                      <span className="text-white/70 text-xs block" style={{ fontFamily: 'Nunito, sans-serif' }}>
                        Click to zoom
                      </span>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <ZoomIn size={18} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom caption in card */}
              <div className="p-4 bg-white border-t border-gray-50 flex items-center justify-between">
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

        {/* Instagram Follow CTA (Shown only when real Instagram URL is configured) */}
        {showInsta && (
          <div className="text-center mt-14 fade-up">
            <a
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-white font-bold transition-all hover:scale-105 shadow-xl"
              style={{
                fontFamily: 'Baloo 2, sans-serif',
                background: 'linear-gradient(135deg, #E1306C, #833AB4, #FCAF45)',
                boxShadow: '0 8px 24px rgba(225,48,108,0.35)',
              }}
            >
              📸 Follow {SITE_CONFIG.instagram} on Instagram
            </a>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightbox && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-50 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          {/* Previous button */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prevImg(); }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors text-3xl cursor-pointer"
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* Current Image Container */}
          <div
            className="max-w-4xl max-h-[85vh] px-4 sm:px-12 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border-2 border-white/20"
            />
            <div className="mt-4 text-center">
              <span className="text-white text-base font-bold block" style={{ fontFamily: 'Baloo 2, sans-serif' }}>
                {lightbox.caption}
              </span>
            </div>
          </div>

          {/* Next button */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); nextImg(); }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors text-3xl cursor-pointer"
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
