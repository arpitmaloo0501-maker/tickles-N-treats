import { Link } from 'react-router-dom';
import { Star, MapPin, Clock, ArrowRight, Sparkles, Utensils, HeartHandshake, Smile, ExternalLink, ShoppingBag } from 'lucide-react';
import Hero from '../components/Hero';
import MustTry from '../components/MustTry';
import SEO from '../components/SEO';
import { ORDER_LINKS, SITE_CONFIG } from '../config/siteConfig';
import { REVIEWS } from '../data/menuData';

export default function HomePage() {
  const teaserReviews = REVIEWS.slice(0, 3);

  return (
    <div className="page-enter">
      <SEO
        title="Welcome"
        description="Tickles N Treats — Raipur's favourite playful cafe and restaurant at Sia Heights, Shankar Nagar. 100% pure veg dining with an indoor kids play zone."
        canonical="https://ticklesntreats.in/"
      />

      {/* 1. Hero Section (Untouched background & overlay) */}
      <Hero />

      {/* 2. 3-Item Highlights Strip */}
      <section className="py-12 px-4 sm:px-8 bg-white border-y border-[#F3F4F6] relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Highlight 1: Cozy Seating */}
            <div className="p-6 rounded-3xl bg-[#FFF8F0] border border-[#FFD6E0]/60 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#FF4D8D]/15 text-[#FF4D8D] flex items-center justify-center shrink-0">
                <Smile size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#1A1A2E] mb-1" style={{ fontFamily: 'Baloo 2, sans-serif' }}>
                  Cozy Ambiance
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  Pastel velvet chairs, plush booths & glowing neon corners at Sia Heights.
                </p>
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#FF4D8D] mt-2.5 hover:underline"
                >
                  View Photos <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* Highlight 2: Great Food */}
            <div className="p-6 rounded-3xl bg-[#F0FDF4] border border-[#A8F0E4]/60 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#0D9488]/15 text-[#0D9488] flex items-center justify-center shrink-0">
                <Utensils size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#1A1A2E] mb-1" style={{ fontFamily: 'Baloo 2, sans-serif' }}>
                  100% Pure Veg
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  Crispy appetizers, hand-stretched pizzas, creamy pasta & artisan desserts.
                </p>
                <Link
                  to="/menu"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0D9488] mt-2.5 hover:underline"
                >
                  Explore Menu <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* Highlight 3: Kids Play Area */}
            <div className="p-6 rounded-3xl bg-[#FAF5FF] border border-[#E8DAFF]/60 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#7C3AED]/15 text-[#7C3AED] flex items-center justify-center shrink-0">
                <HeartHandshake size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#1A1A2E] mb-1" style={{ fontFamily: 'Baloo 2, sans-serif' }}>
                  Kids Play Area
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  Trampoline, obstacle soft play maze & toddler carousel with trained staff.
                </p>
                <Link
                  to="/play-area"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#7C3AED] mt-2.5 hover:underline"
                >
                  See Play Zone <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Order Online Section (Zomato & Swiggy) */}
      <section className="py-14 px-4 sm:px-8 bg-gradient-to-b from-white to-[#FFF8F0]">
        <div className="max-w-4xl mx-auto text-center">
          <span
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold mb-3"
            style={{ background: '#FFD6E0', color: '#FF4D8D', fontFamily: 'Nunito, sans-serif' }}
          >
            <ShoppingBag size={14} /> Doorstep Delivery
          </span>
          <h2
            className="text-3xl sm:text-4xl font-black text-[#1A1A2E] mb-3"
            style={{ fontFamily: 'Baloo 2, sans-serif' }}
          >
            Craving <span style={{ color: '#FF4D8D' }}>Tickles N Treats</span> at Home?
          </h2>
          <p className="text-gray-600 text-sm max-w-lg mx-auto mb-8" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Enjoy freshly cooked pure vegetarian food delivered piping hot across Shankar Nagar & Raipur.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {/* Zomato Card */}
            <a
              href={ORDER_LINKS.zomato}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white border-2 border-[#E23744]/30 hover:border-[#E23744] shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-3 text-left">
                <div className="w-12 h-12 rounded-xl bg-[#E23744] text-white flex items-center justify-center font-black italic text-sm shadow-md">
                  zomato
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#1A1A2E] group-hover:text-[#E23744] transition-colors" style={{ fontFamily: 'Baloo 2, sans-serif' }}>
                    Order on Zomato
                  </h3>
                  <p className="text-xs text-gray-500" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    Fast delivery & exciting offers
                  </p>
                </div>
              </div>
              <ExternalLink size={18} className="text-[#E23744] group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Swiggy Card */}
            <a
              href={ORDER_LINKS.swiggy}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white border-2 border-[#FC8019]/30 hover:border-[#FC8019] shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-3 text-left">
                <div className="w-12 h-12 rounded-xl bg-[#FC8019] text-white flex items-center justify-center text-xl shadow-md">
                  🛵
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#1A1A2E] group-hover:text-[#FC8019] transition-colors" style={{ fontFamily: 'Baloo 2, sans-serif' }}>
                    Order on Swiggy
                  </h3>
                  <p className="text-xs text-gray-500" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    Live tracking & quick doorstep drop
                  </p>
                </div>
              </div>
              <ExternalLink size={18} className="text-[#FC8019] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* 4. Top 6 Must-Try Mini Carousel with "View Full Menu" Button */}
      <section className="relative">
        <MustTry />
        <div className="bg-[#1A1A2E] text-center pb-12 pt-2 px-4">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-bold text-sm sm:text-base transition-all hover:scale-105 active:scale-95 shadow-lg"
            style={{
              fontFamily: 'Baloo 2, sans-serif',
              background: 'linear-gradient(135deg, #FF4D8D, #C4A8FF)',
              boxShadow: '0 8px 24px rgba(255,77,141,0.4)',
            }}
          >
            <span>View Full Menu (50+ Items)</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* 5. 3-Review Teaser Strip with "Read All Reviews" Button */}
      <section className="py-16 px-4 sm:px-8 bg-white border-y border-[#F3F4F6]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold mb-3"
              style={{ background: '#FEF3C7', color: '#D97706', fontFamily: 'Nunito, sans-serif' }}
            >
              <Star size={14} className="fill-[#D97706]" /> {SITE_CONFIG.rating}★ Rating on Google
            </span>
            <h2
              className="text-3xl sm:text-4xl font-black text-[#1A1A2E]"
              style={{ fontFamily: 'Baloo 2, sans-serif' }}
            >
              Loved by <span style={{ color: '#FF4D8D' }}>Raipur</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {teaserReviews.map((rev) => (
              <div
                key={rev.id}
                className="p-6 rounded-3xl bg-[#FFF8F0] border border-gray-100 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={15} className="fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    "{rev.text}"
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-3 border-t border-gray-200/60">
                  <div className="w-8 h-8 rounded-full bg-[#FF4D8D] text-white font-bold text-xs flex items-center justify-center">
                    {rev.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-[#1A1A2E]" style={{ fontFamily: 'Baloo 2, sans-serif' }}>
                      {rev.name}
                    </h4>
                    <span className="text-[10px] text-gray-500">{rev.date} • Verified Guest</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-[#1A1A2E] text-[#1A1A2E] hover:bg-[#1A1A2E] hover:text-white font-bold text-xs sm:text-sm transition-all cursor-pointer"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              <span>Read all verified reviews</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Short Visit/Location Strip */}
      <section className="py-14 px-4 sm:px-8 bg-[#FFF8F0]">
        <div className="max-w-4xl mx-auto rounded-3xl bg-white p-6 sm:p-10 shadow-lg border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold"
              style={{ background: '#A8F0E4', color: '#0D9488', fontFamily: 'Nunito, sans-serif' }}
            >
              <Sparkles size={13} /> Visit Our Cafe
            </span>
            <h3
              className="text-2xl sm:text-3xl font-black text-[#1A1A2E]"
              style={{ fontFamily: 'Baloo 2, sans-serif' }}
            >
              Plan Your Visit to Sia Heights
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs sm:text-sm text-gray-600 pt-1" style={{ fontFamily: 'Nunito, sans-serif' }}>
              <span className="inline-flex items-center gap-1.5 justify-center md:justify-start">
                <MapPin size={15} className="text-[#FF4D8D]" />
                {SITE_CONFIG.address}
              </span>
              <span className="hidden sm:inline text-gray-300">•</span>
              <span className="inline-flex items-center gap-1.5 justify-center md:justify-start">
                <Clock size={15} className="text-[#3ECFB2]" />
                Open daily 12:00 PM onwards
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full bg-[#1A1A2E] text-white hover:bg-[#FF4D8D] font-bold text-sm transition-all shadow-md active:scale-95 cursor-pointer"
              style={{ fontFamily: 'Baloo 2, sans-serif' }}
            >
              Get Directions & Hours
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

