import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, Shield, CheckCircle2, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import SEO from '../components/SEO';

const FAQS = [
  {
    q: 'What are your operating hours?',
    a: 'Tickles N Treats is open every day from 12:00 PM onwards. Both dine-in and delivery services run throughout the week.',
  },
  {
    q: 'Is the food 100% pure vegetarian?',
    a: 'Yes, absolutely! We take immense pride in being a 100% pure vegetarian establishment. Our kitchen uses zero meat, poultry, fish, seafood, or egg products.',
  },
  {
    q: 'Can we book birthday parties and celebrations?',
    a: 'Yes! We host birthday parties, kitty parties, baby showers, and school group playdates. Packages include dedicated party decoration, customized food menus, and unlimited play zone access.',
  },
  {
    q: 'Are grip socks required for the kids play area?',
    a: 'Yes, for the safety and hygiene of all children, grip socks are mandatory in the play arena. You can bring your own or purchase high-quality grip socks at our reception.',
  },
  {
    q: 'Do you deliver through Zomato and Swiggy?',
    a: 'Yes! We are officially partnered with both Zomato and Swiggy. You can order your favourite dishes online directly from our website links.',
  },
  {
    q: 'Is parking available at Sia Heights?',
    a: 'Yes, ample dedicated parking space is available at Sia Heights, Shankar Nagar for both two-wheelers and four-wheelers.',
  },
];

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq((curr) => (curr === idx ? null : idx));
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0] page-enter">
      <SEO
        title="About Us & Story"
        description="Learn the story of Tickles N Treats — Raipur's playful 100% pure vegetarian cafe and kids adventure arena located at Sia Heights, Shankar Nagar."
        canonical="https://ticklesntreats.in/about"
      />

      <Breadcrumb items={[{ label: 'About Us' }]} />

      {/* Hero / Header */}
      <section className="pt-10 pb-8 px-4 sm:px-8 text-center bg-white border-b border-[#F3F4F6]">
        <div className="max-w-4xl mx-auto">
          <span
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold mb-3"
            style={{ background: '#FFD6E0', color: '#FF4D8D', fontFamily: 'Nunito, sans-serif' }}
          >
            <Sparkles size={14} /> Our Story &amp; Philosophy
          </span>
          <h1
            className="text-3xl sm:text-5xl font-black text-[#1A1A2E] mb-3"
            style={{ fontFamily: 'Baloo 2, sans-serif' }}
          >
            Where Joy &amp; <span style={{ color: '#FF4D8D' }}>Flavor Meet</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto" style={{ fontFamily: 'Nunito, sans-serif' }}>
            A space born to bring families, friends, and food lovers together for delicious bites and memorable celebrations.
          </p>
        </div>
      </section>

      {/* Main Story & Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-3xl overflow-hidden bg-gray-100 shadow-md">
              <picture>
                <source srcSet="/images/exterior-building-facade.webp" type="image/webp" />
                <img
                  src="/images/exterior-building-facade.jpg"
                  alt="Tickles N Treats at Sia Heights, Shankar Nagar"
                  className="w-full h-48 sm:h-64 object-cover"
                  loading="lazy"
                />
              </picture>
              <span className="absolute bottom-2.5 left-2.5 text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/95 text-black shadow-sm">
                Sia Heights
              </span>
            </div>

            <div className="relative rounded-3xl overflow-hidden bg-gray-100 shadow-md translate-y-6">
              <picture>
                <source srcSet="/images/exterior-neon-sign.webp" type="image/webp" />
                <img
                  src="/images/exterior-neon-sign.jpg"
                  alt="Tickles N Treats glowing neon signage"
                  className="w-full h-48 sm:h-64 object-cover"
                  loading="lazy"
                />
              </picture>
              <span className="absolute bottom-2.5 left-2.5 text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/95 text-black shadow-sm">
                Night Vibe
              </span>
            </div>
          </div>

          {/* Text Story */}
          <div className="space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#A8F0E4] text-[#0D9488]">
              <Heart size={13} /> The Tickles N Treats Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A2E]" style={{ fontFamily: 'Baloo 2, sans-serif' }}>
              Designed for Big Smiles &amp; <span style={{ color: '#3ECFB2' }}>Happy Cravings</span>
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Located on the 1st Floor of the landmark <strong>Sia Heights building in Shankar Nagar, Raipur</strong>, Tickles N Treats was created with one simple mission: to bridge the gap between world-class vegetarian dining and engaging family recreation.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Whether you are planning a relaxed Sunday lunch with friends, catching up over artisanal Belgian hot chocolate, or letting your kids bounce away energy in our certified soft play arena, every corner of our cafe is designed to tickle your heart.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-3">
              <div className="p-3.5 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center gap-2.5">
                <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-gray-800">100% Pure Vegetarian</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center gap-2.5">
                <CheckCircle2 size={18} className="text-[#3ECFB2] shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-gray-800">1st Flr Sia Heights</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collapsible FAQ Accordion */}
      <section className="bg-white py-14 px-4 sm:px-8 border-t border-[#F3F4F6]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-[#FFD6E0] text-[#FF4D8D] mb-2">
              <Shield size={13} /> Help &amp; FAQs
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#1A1A2E]" style={{ fontFamily: 'Baloo 2, sans-serif' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Tap any question below for quick answers.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-gray-100 bg-[#FFF8F0] overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#1A1A2E] hover:text-[#FF4D8D] transition-colors cursor-pointer"
                    style={{ fontFamily: 'Baloo 2, sans-serif' }}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 text-gray-500 shadow-sm">
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100/60" style={{ fontFamily: 'Nunito, sans-serif' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1A1A2E] text-white hover:bg-[#FF4D8D] text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95"
              style={{ fontFamily: 'Baloo 2, sans-serif' }}
            >
              <span>Have more questions? Contact Us</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

