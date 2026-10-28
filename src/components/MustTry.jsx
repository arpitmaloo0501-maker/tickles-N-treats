// MustTry.jsx — Highlighted signature dish carousel with swipe & keyboard navigation
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MUST_TRY } from '../data/menuData';

export default function MustTry() {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const total = MUST_TRY.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  // Minimum swipe distance in px
  const minSwipeDistance = 45;

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      next();
    } else if (distance < -minSwipeDistance) {
      prev();
    }
  };

  const currentItem = MUST_TRY[current];

  return (
    <section
      className="py-24 px-4 sm:px-8 overflow-hidden select-none"
      style={{
        background: 'linear-gradient(135deg, #1A1A2E 0%, #2D2D44 100%)',
      }}
      aria-label="Must Try Signature Dishes"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 fade-up">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4"
            style={{
              background: 'rgba(255,77,141,0.2)',
              color: '#FF4D8D',
              fontFamily: 'Nunito, sans-serif',
              border: '1px solid rgba(255,77,141,0.3)',
            }}
          >
            ⭐ Must Try
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black text-white mb-4"
            style={{ fontFamily: 'Baloo 2, sans-serif' }}
          >
            Our{' '}
            <span className="neon-glow" style={{ color: '#FF4D8D' }}>
              Signature
            </span>{' '}
            Dishes
          </h2>
          <p className="text-white/60" style={{ fontFamily: 'Nunito, sans-serif' }}>
            These are the dishes that keep our guests coming back. Don't leave without trying one!
          </p>
        </div>

        {/* Carousel with Touch Swipe Support */}
        <div
          className="relative min-h-[460px] flex flex-col justify-between"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main card */}
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[380px]">
            {/* Image */}
            <div className="relative">
              <div
                className="rounded-3xl overflow-hidden bg-black/20"
                style={{
                  aspectRatio: '4/3',
                  boxShadow: '0 30px 80px rgba(255,77,141,0.3)',
                }}
              >
                <img
                  key={currentItem?.id}
                  src={currentItem?.image}
                  srcSet={
                    currentItem?.image?.includes('/images/food-ai/')
                      ? `${currentItem.image.replace('.webp', '-600.webp')} 600w, ${currentItem.image} 1200w`
                      : undefined
                  }
                  sizes="(max-width: 768px) 100vw, 600px"
                  alt={currentItem?.name}
                  className="w-full h-full object-cover transition-opacity duration-300"
                  loading="lazy"
                />
              </div>
              {/* Glow ring */}
              <div
                className="absolute -inset-3 rounded-3xl -z-10 opacity-30 blur-xl pointer-events-none"
                style={{ background: 'radial-gradient(circle, #FF4D8D, transparent)' }}
              />
            </div>

            {/* Content */}
            <div className="text-white flex flex-col justify-center">
              {/* Counter */}
              <div
                className="text-white/40 text-sm mb-4 font-mono"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </div>

              {/* Category chip */}
              <div>
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 capitalize"
                  style={{
                    background: 'rgba(62,207,178,0.2)',
                    color: '#3ECFB2',
                    border: '1px solid rgba(62,207,178,0.3)',
                    fontFamily: 'Nunito, sans-serif',
                  }}
                >
                  {currentItem?.category}
                </span>
              </div>

              <h3
                className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight min-h-[2.5rem]"
                style={{ fontFamily: 'Baloo 2, sans-serif' }}
              >
                {currentItem?.name}
              </h3>

              <p
                className="text-white/70 text-base sm:text-lg mb-6 leading-relaxed min-h-[4rem]"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                {currentItem?.description}
              </p>

              {/* Price */}
              <div className="flex items-center gap-4 mb-8">
                <span
                  className="text-4xl font-black neon-glow"
                  style={{ fontFamily: 'Baloo 2, sans-serif', color: '#FF4D8D' }}
                >
                  ₹{currentItem?.price}
                </span>
                <span
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-bold"
                  style={{
                    background: currentItem?.veg
                      ? 'rgba(34,197,94,0.15)'
                      : 'rgba(239,68,68,0.15)',
                    color: currentItem?.veg ? '#22c55e' : '#ef4444',
                    border: `1px solid ${currentItem?.veg ? 'rgba(34,197,94,0.3)' : 'rgba(239,68,68,0.3)'}`,
                  }}
                >
                  <span
                    className={currentItem?.veg ? 'veg-dot' : 'nonveg-dot'}
                    style={{ width: 8, height: 8 }}
                  />
                  {currentItem?.veg ? 'Vegetarian' : 'Non-Veg'}
                </span>
              </div>

              {/* Tag */}
              {currentItem?.tag && (
                <div>
                  <div
                    className="inline-block px-4 py-2 rounded-full text-sm font-bold text-white mb-2"
                    style={{ background: 'linear-gradient(135deg, #FF4D8D, #C4A8FF)' }}
                  >
                    ✨ {currentItem?.tag}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={prev}
              className="w-12 h-12 rounded-full flex items-center justify-center text-white border border-white/20 hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
              aria-label="Previous dish"
            >
              <ChevronLeft size={22} />
            </button>
            {/* Dots */}
            <div className="flex items-center gap-1">
              {MUST_TRY.map((_, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="w-7 h-7 flex items-center justify-center cursor-pointer transition-transform hover:scale-110"
                  aria-label={`Go to slide ${i + 1}`}
                >
                  <span
                    className="block rounded-full transition-all duration-300"
                    style={{
                      width: i === current ? 24 : 8,
                      height: 8,
                      background: i === current ? '#FF4D8D' : 'rgba(255,255,255,0.4)',
                    }}
                  />
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="w-12 h-12 rounded-full flex items-center justify-center text-white border border-white/20 hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
              aria-label="Next dish"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
