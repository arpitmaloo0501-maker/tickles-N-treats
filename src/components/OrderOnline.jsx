// OrderOnline.jsx — Dedicated Delivery Section with Zomato and Swiggy Cards
import { ExternalLink, Sparkles, Clock, ShieldCheck, Heart } from 'lucide-react';
import { ORDER_LINKS } from '../config/siteConfig';
import { SwiggyIcon } from './OrderDropdown';

export default function OrderOnline() {
  return (
    <section
      id="order-online"
      className="py-24 px-4 sm:px-8 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #FFF5F2 50%, #FFF8F0 100%)',
      }}
    >
      {/* Background ambient decorative blurs */}
      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-[#E23744]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-[#FC8019]/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 fade-up">
          <span
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-bold mb-4"
            style={{
              background: 'rgba(255, 77, 141, 0.12)',
              color: '#FF4D8D',
              fontFamily: 'Nunito, sans-serif',
            }}
          >
            <Sparkles size={16} /> Doorstep Delivery
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black text-[#1A1A2E] mb-4"
            style={{ fontFamily: 'Baloo 2, sans-serif' }}
          >
            Craving Something? <span style={{ color: '#FC8019' }}>Get It Delivered</span> 🛵
          </h2>
          <p
            className="text-base sm:text-lg text-[#6B7280] leading-relaxed"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            Can't visit our cafe at Sia Heights today? Order your favorite pure-veg starters,
            artisanal pasta, woodfired pizzas, and decadent waffles right to your doorstep in Raipur.
          </p>
        </div>

        {/* Two Large Brand Cards: Zomato & Swiggy */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Zomato Card */}
          <div
            className="group rounded-3xl p-8 sm:p-10 bg-white border-2 border-red-100 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between fade-up"
            style={{
              boxShadow: '0 10px 30px -5px rgba(226, 55, 68, 0.12)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 35px rgba(226, 55, 68, 0.28), 0 20px 40px -10px rgba(26, 26, 46, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 10px 30px -5px rgba(226, 55, 68, 0.12)';
            }}
          >
            <div>
              {/* Header with Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-[#E23744] flex items-center justify-center text-white shadow-lg shadow-red-500/20 group-hover:scale-105 transition-transform">
                    <span className="text-lg font-black italic tracking-tighter">zomato</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-500">Fast Delivery</span>
                    <h3
                      className="text-2xl font-black text-[#1A1A2E]"
                      style={{ fontFamily: 'Baloo 2, sans-serif' }}
                    >
                      Order on Zomato
                    </h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-[#E23744] border border-red-200">
                  4.6★ Rated
                </span>
              </div>

              {/* Description */}
              <p
                className="text-[#6B7280] text-sm sm:text-base leading-relaxed mb-6"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                Browse our complete pure-veg menu, explore daily discounts and combo savings,
                and enjoy hot, freshly prepared meals delivered across Shankar Nagar &amp; Raipur.
              </p>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl bg-gray-50 text-[#1A1A2E]">
                  ⚡ Superfast Delivery
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl bg-gray-50 text-[#1A1A2E]">
                  🏷️ Exclusive Offers
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl bg-gray-50 text-[#1A1A2E]">
                  🛡️ Contactless Drop
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href={ORDER_LINKS.zomato}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-2xl text-white font-bold text-center flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer shadow-lg"
              style={{
                fontFamily: 'Baloo 2, sans-serif',
                background: 'linear-gradient(135deg, #E23744 0%, #C41C29 100%)',
                boxShadow: '0 8px 24px rgba(226, 55, 68, 0.35)',
              }}
            >
              <span>Order Now on Zomato</span>
              <ExternalLink size={18} />
            </a>
          </div>

          {/* Swiggy Card */}
          <div
            className="group rounded-3xl p-8 sm:p-10 bg-white border-2 border-orange-100 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between fade-up"
            style={{
              boxShadow: '0 10px 30px -5px rgba(252, 128, 25, 0.12)',
              transitionDelay: '0.15s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 35px rgba(252, 128, 25, 0.28), 0 20px 40px -10px rgba(26, 26, 46, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 10px 30px -5px rgba(252, 128, 25, 0.12)';
            }}
          >
            <div>
              {/* Header with Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-[#FC8019] flex items-center justify-center text-white shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform">
                    <SwiggyIcon size={30} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-500">Live Tracking</span>
                    <h3
                      className="text-2xl font-black text-[#1A1A2E]"
                      style={{ fontFamily: 'Baloo 2, sans-serif' }}
                    >
                      Order on Swiggy
                    </h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-50 text-[#FC8019] border border-orange-200">
                  Quick Service
                </span>
              </div>

              {/* Description */}
              <p
                className="text-[#6B7280] text-sm sm:text-base leading-relaxed mb-6"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                Order your favorite dishes with live GPS tracking right from our kitchen.
                From piping hot nachos to thick freakshakes, we deliver within minutes!
              </p>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl bg-gray-50 text-[#1A1A2E]">
                  📍 Live Map Tracking
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl bg-gray-50 text-[#1A1A2E]">
                  🛵 Swiggy One Perks
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl bg-gray-50 text-[#1A1A2E]">
                  ⭐ Pure Veg Promise
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href={ORDER_LINKS.swiggy}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-2xl text-white font-bold text-center flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer shadow-lg"
              style={{
                fontFamily: 'Baloo 2, sans-serif',
                background: 'linear-gradient(135deg, #FC8019 0%, #E86500 100%)',
                boxShadow: '0 8px 24px rgba(252, 128, 25, 0.35)',
              }}
            >
              <span>Order Now on Swiggy</span>
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

        {/* Safety & Packaging Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-center fade-up">
          <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-sm flex flex-col items-center">
            <ShieldCheck size={20} className="text-[#3ECFB2] mb-1" />
            <span className="text-xs font-bold text-[#1A1A2E]">Hygienic Packaging</span>
            <span className="text-[10px] text-gray-500">Tamper-evident sealing</span>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-sm flex flex-col items-center">
            <Clock size={20} className="text-[#FF4D8D] mb-1" />
            <span className="text-xs font-bold text-[#1A1A2E]">30–45 Mins Delivery</span>
            <span className="text-[10px] text-gray-500">Fresh from our kitchen</span>
          </div>
          <div className="col-span-2 sm:col-span-1 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm flex flex-col items-center">
            <Heart size={20} className="text-red-500 mb-1" />
            <span className="text-xs font-bold text-[#1A1A2E]">100% Pure Veg</span>
            <span className="text-[10px] text-gray-500">Crafted with care</span>
          </div>
        </div>
      </div>
    </section>
  );
}
