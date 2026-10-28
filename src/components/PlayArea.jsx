// PlayArea.jsx — Dedicated Indoor Play Area showcase for Tickles N Treats
import { ShieldCheck, Sparkles, Cake, Smile, ArrowRight, MessageCircle } from 'lucide-react';
import { SITE_CONFIG, hasRealWhatsApp } from '../config/siteConfig';

const PLAY_HIGHLIGHTS = [
  {
    icon: <Sparkles className="text-[#FF4D8D]" size={24} />,
    title: 'Trampoline & Adventure Arena',
    desc: 'Jump-ready trampoline with safety padding, vibrant slides, and an interactive rock-climbing wall over a soft foam pit.',
    img: '/images/play-area-trampoline-slide.webp',
    tag: 'Kids Favorite 🤾',
  },
  {
    icon: <ShieldCheck className="text-[#3ECFB2]" size={24} />,
    title: 'Multi-Level Soft Play Maze',
    desc: 'Cushioned crawl-through tunnels, viewing portholes, obstacle bridges, and 100% child-safe padded borders.',
    img: '/images/play-area-obstacle.webp',
    tag: 'Safe & Padded 🛡️',
  },
  {
    icon: <Smile className="text-[#FBBF24]" size={24} />,
    title: 'Toddler Carousel & Lego Station',
    desc: 'Zebra carousel seating, giant foam dice blocks, creative Lego building wall, and playful food cartoon wallpaper.',
    img: '/images/play-area-toddler-zone.webp',
    tag: 'Creative Play 🧱',
  },
];

const FEATURES = [
  { emoji: '🛡️', title: '100% Child-Safe', desc: 'Heavy-duty safety netting, padded corner guards, and shock-absorbent flooring.' },
  { emoji: '✨', title: 'Daily Deep Sanitization', desc: 'Air-conditioned, germ-free, thoroughly disinfected equipment before every shift.' },
  { emoji: '👀', title: 'Full Parent Visibility', desc: 'Enjoy your artisan coffee or hot pizza while maintaining a clear view of your kids.' },
  { emoji: '🎉', title: 'Birthday Parties', desc: 'Custom party packages with themed decor, delicious kid-friendly menu, and play access.' },
];

export default function PlayArea() {
  const targetWhatsApp = hasRealWhatsApp() ? SITE_CONFIG.whatsapp : '919876543210';
  const whatsappBirthdayUrl = `https://wa.me/${targetWhatsApp}?text=${encodeURIComponent(
    'Hi Tickles N Treats! I want to inquire about your Indoor Play Area / Birthday Party packages at Sia Heights.'
  )}`;

  return (
    <section id="play-area" className="py-24 px-4 sm:px-8 bg-gradient-to-b from-[#FFF8F0] via-[#FFF0F5] to-[#FFF8F0] relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-[#FFD6E0]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#D4F4E4]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 fade-up">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-4"
            style={{ background: '#FFE4E6', color: '#E11D48', fontFamily: 'Nunito, sans-serif' }}
          >
            <Sparkles size={16} /> Indoor Play Area &amp; Fun Zone
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black text-[#1A1A2E] mb-4"
            style={{ fontFamily: 'Baloo 2, sans-serif' }}
          >
            Where Kids Play &amp; <span className="text-[#FF4D8D]">Parents Relax</span>
          </h2>
          <p
            className="text-lg text-[#6B7280] leading-relaxed"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            Tickles N Treats isn't just a cafe — it's Raipur's premier destination combining
            an authentic <strong>patisserie &amp; cafe</strong> with a fully equipped, supervised
            <strong> indoor play area</strong>!
          </p>
        </div>

        {/* 3 Play Area Zones Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {PLAY_HIGHLIGHTS.map((item, index) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-[#F3E8FF] group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col fade-up"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              {/* Photo */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span
                  className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-white shadow-md backdrop-blur-md"
                  style={{
                    background: 'rgba(26, 26, 46, 0.85)',
                    fontFamily: 'Nunito, sans-serif',
                  }}
                >
                  {item.tag}
                </span>
              </div>

              {/* Text content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {item.icon}
                    <h3
                      className="text-xl font-bold text-[#1A1A2E]"
                      style={{ fontFamily: 'Baloo 2, sans-serif' }}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <p
                    className="text-[#6B7280] text-sm leading-relaxed"
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features / Safety Row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#FEE2E2] shadow-sm hover:border-[#FF4D8D]/40 transition-colors fade-up"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="text-3xl mb-3">{f.emoji}</div>
              <h4
                className="text-base font-bold text-[#1A1A2E] mb-1"
                style={{ fontFamily: 'Baloo 2, sans-serif' }}
              >
                {f.title}
              </h4>
              <p className="text-xs text-[#6B7280] leading-relaxed" style={{ fontFamily: 'Nunito, sans-serif' }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Birthday Party / Play Session CTA Banner */}
        <div
          className="rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl fade-up"
          style={{
            background: 'linear-gradient(135deg, #1A1A2E 0%, #2D1B4E 60%, #FF4D8D 140%)',
          }}
        >
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 border border-white/20 text-[#3ECFB2] mb-4">
              <Cake size={14} /> Celebrate at Sia Heights
            </span>
            <h3
              className="text-3xl sm:text-4xl font-black mb-3"
              style={{ fontFamily: 'Baloo 2, sans-serif' }}
            >
              Planning a Kid's Birthday Party? 🎈
            </h3>
            <p
              className="text-white/80 text-sm sm:text-base leading-relaxed mb-6"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              Make their special day truly unforgettable with unlimited fun in our play area,
              custom dessert towers, party decor, and our signature pizzas and shakes!
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={whatsappBirthdayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-[#1A1A2E] font-bold text-sm bg-gradient-to-r from-[#3ECFB2] to-[#25D366] hover:scale-105 active:scale-95 transition-all shadow-lg"
                style={{ fontFamily: 'Baloo 2, sans-serif' }}
              >
                <MessageCircle size={18} /> Inquire via WhatsApp
              </a>
              <a
                href="#reservation"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#reservation')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-white font-bold text-sm bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
                style={{ fontFamily: 'Baloo 2, sans-serif' }}
              >
                Reserve Family Table <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
