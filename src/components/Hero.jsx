import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import OrderDropdown from './OrderDropdown';

// Food doodle emojis floating in the hero
const Doodle = ({ emoji, style }) => (
  <span
    className="absolute text-4xl select-none pointer-events-none"
    style={{ ...style, filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }}
  >
    {emoji}
  </span>
);

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
      style={{
        background: `
          linear-gradient(
            135deg,
            rgba(26, 26, 46, 0.82) 0%,
            rgba(26, 26, 46, 0.62) 45%,
            rgba(255, 77, 141, 0.38) 100%
          ),
          url('/images/cafe-interior-hero.webp')
          center/cover no-repeat
        `,
      }}
    >
      {/* Background video overlay blur orbs */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-20 blur-3xl"
          style={{ background: '#FF4D8D' }}
        />
        <div
          className="absolute bottom-32 right-10 w-64 h-64 rounded-full opacity-20 blur-3xl"
          style={{ background: '#3ECFB2' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: '#C4A8FF' }}
        />
      </div>

      {/* Floating doodle emojis */}
      <Doodle emoji="🍕" style={{ top: '12%', left: '8%', animation: 'float 5s ease-in-out infinite' }} />
      <Doodle emoji="🍔" style={{ top: '20%', right: '7%', animation: 'float 4.5s ease-in-out infinite 0.8s' }} />
      <Doodle emoji="🍰" style={{ bottom: '25%', left: '6%', animation: 'float 6s ease-in-out infinite 0.3s' }} />
      <Doodle emoji="🧋" style={{ bottom: '30%', right: '5%', animation: 'float 4s ease-in-out infinite 1.2s' }} />
      <Doodle emoji="🍦" style={{ top: '60%', left: '15%', animation: 'float 5.5s ease-in-out infinite 0.6s', fontSize: '2rem' }} />
      <Doodle emoji="✨" style={{ top: '35%', right: '18%', animation: 'float 3.5s ease-in-out infinite 0.2s', fontSize: '2rem' }} />

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-8 max-w-4xl mx-auto py-24 sm:py-28">
        {/* TAT neon logo badge */}
        <div className="inline-flex items-center gap-3 mb-6">
          <div
            className="px-6 py-2 rounded-full border-2 glass"
            style={{ borderColor: '#FF4D8D', background: 'rgba(255,77,141,0.15)' }}
          >
            <span
              className="text-xl font-black neon-glow"
              style={{ fontFamily: 'Baloo 2, sans-serif', color: '#FF4D8D' }}
            >
              TAT
            </span>
          </div>
          {/* Google Rating badge */}
          <div
            className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-yellow-400/50 pulse-glow"
            style={{ background: 'rgba(251,191,36,0.15)', backdropFilter: 'blur(8px)' }}
          >
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            <span className="text-white text-sm font-bold">{SITE_CONFIG.rating}★</span>
            <span className="text-white/70 text-xs">Google</span>
          </div>
        </div>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-6xl lg:text-7xl font-black leading-tight text-white mb-4"
          style={{ fontFamily: 'Baloo 2, sans-serif' }}
        >
          {SITE_CONFIG.tagline}
        </h1>

        {/* Sub-headline */}
        <p
          className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10"
          style={{ fontFamily: 'Nunito, sans-serif' }}
        >
          {SITE_CONFIG.subTagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3.5 justify-center items-center flex-wrap">
          <Link
            to="/menu"
            className="px-7 py-3.5 rounded-full text-base font-bold text-white transition-all duration-300 neon-btn-glow hover:scale-105 active:scale-95 shadow-lg flex items-center gap-2 cursor-pointer"
            style={{
              fontFamily: 'Baloo 2, sans-serif',
              background: 'linear-gradient(135deg, #FF4D8D, #C4A8FF)',
            }}
          >
            🍽️ View Menu
          </Link>

          <OrderDropdown variant="hero" />

          <Link
            to="/play-area"
            className="px-7 py-3.5 rounded-full text-base font-bold text-[#1A1A2E] transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg flex items-center gap-2 cursor-pointer"
            style={{
              fontFamily: 'Baloo 2, sans-serif',
              background: 'linear-gradient(135deg, #3ECFB2, #A8F0E4)',
            }}
          >
            🎪 Indoor Play Area
          </Link>

          <Link
            to="/reserve"
            className="px-7 py-3.5 rounded-full text-base font-bold transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white text-white hover:bg-white hover:text-[#1A1A2E] cursor-pointer"
            style={{
              fontFamily: 'Baloo 2, sans-serif',
              backdropFilter: 'blur(8px)',
              background: 'rgba(255,255,255,0.1)',
            }}
          >
            🎉 Reserve Table
          </Link>
        </div>

        {/* Address pill */}
        <div className="mt-8 inline-flex items-center gap-2 text-white/70 text-sm">
          <span>📍</span>
          <span style={{ fontFamily: 'Nunito, sans-serif' }}>
            {SITE_CONFIG.address}
          </span>
        </div>
      </div>
    </section>
  );
}

