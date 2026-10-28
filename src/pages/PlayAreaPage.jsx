import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, HeartHandshake, PartyPopper, CheckCircle2, Calendar } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import SEO from '../components/SEO';

const ZONES = [
  {
    id: 1,
    title: 'Adventure Trampoline & Giant Slide',
    desc: 'High-bounce interconnected trampolines with protective foam pits, dual wave red slides, and a padded mini rock-climbing wall.',
    image: '/images/play-area-trampoline-slide.webp',
    age: 'Ages 4–12 Years',
    tag: 'High Energy Zone',
    badgeColor: '#FF4D8D',
  },
  {
    id: 2,
    title: 'Multi-Level Soft Play Obstacle Maze',
    desc: 'Two-tier cushioned maze featuring porthole lookouts, soft punch bags, crawl tubes, hanging obstacles, and spiral tunnels.',
    image: '/images/play-area-obstacle.webp',
    age: 'Ages 3–10 Years',
    tag: 'Adventure Maze',
    badgeColor: '#3ECFB2',
  },
  {
    id: 3,
    title: 'Toddler Activity Zone & Carousel',
    desc: 'Safe, low-height sensory play station with soft animal carousel, jumbo foam building blocks, Lego table, and food doodle wallpaper.',
    image: '/images/play-area-toddler-zone.webp',
    age: 'Ages 1–4 Years',
    tag: 'Toddler Safe',
    badgeColor: '#7C3AED',
  },
];

const SAFETY_FEATURES = [
  'European standard non-toxic high-density foam padding on all poles & corners',
  'Deep sanitization and anti-bacterial cleaning after every play session',
  'Continuous vigilant supervision by trained, kid-friendly floor attendants',
  'Mandatory grip socks requirement for hygiene and anti-slip safety',
  'First-aid ready station with child-safe certified amenities',
  'Comfortable cafe seating with clear viewing angles of the entire play zone',
];

export default function PlayAreaPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F0] page-enter">
      <SEO
        title="Kids Play Area & Birthday Parties"
        description="Raipur's premier indoor soft play zone at Sia Heights Shankar Nagar. Trampolines, slides, obstacle course, toddler area, and unforgettable birthday party packages."
        canonical="https://ticklesntreats.in/play-area"
      />

      <Breadcrumb items={[{ label: 'Kids Play Area' }]} />

      {/* Header */}
      <section className="pt-10 pb-8 px-4 sm:px-8 text-center bg-white border-b border-[#F3F4F6]">
        <div className="max-w-4xl mx-auto">
          <span
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold mb-3"
            style={{ background: '#E8DAFF', color: '#7C3AED', fontFamily: 'Nunito, sans-serif' }}
          >
            <Sparkles size={14} /> Safe &amp; Supervised Play Zone
          </span>
          <h1
            className="text-3xl sm:text-5xl font-black text-[#1A1A2E] mb-3"
            style={{ fontFamily: 'Baloo 2, sans-serif' }}
          >
            Where Kids Play &amp; <span style={{ color: '#FF4D8D' }}>Parents Relax</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto" style={{ fontFamily: 'Nunito, sans-serif' }}>
            A vibrant, climate-controlled indoor adventure arena inside Tickles N Treats at Sia Heights, Shankar Nagar.
          </p>
        </div>
      </section>

      {/* Play Zones Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="space-y-12">
          {ZONES.map((zone, index) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={zone.id}
                className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden bg-gray-100 shadow-md">
                  <img
                    src={zone.image}
                    alt={zone.title}
                    className="w-full h-64 sm:h-80 object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span
                    className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold text-white shadow-md"
                    style={{ background: zone.badgeColor }}
                  >
                    {zone.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-3">
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-700">
                    {zone.age}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#1A1A2E]" style={{ fontFamily: 'Baloo 2, sans-serif' }}>
                    {zone.title}
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    {zone.desc}
                  </p>
                  <div className="pt-2">
                    <Link
                      to="/reserve"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-xs sm:text-sm font-bold shadow-md hover:scale-105 transition-all"
                      style={{ background: 'linear-gradient(135deg, #FF4D8D, #C4A8FF)', fontFamily: 'Baloo 2, sans-serif' }}
                    >
                      <Calendar size={14} />
                      Book Play Session / Table
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Safety & Hygiene Guarantee */}
      <section className="bg-white py-14 px-4 sm:px-8 border-y border-[#F3F4F6]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 mb-2">
              <ShieldCheck size={14} /> Child Safety First
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#1A1A2E]" style={{ fontFamily: 'Baloo 2, sans-serif' }}>
              Safety &amp; Cleanliness Standards
            </h2>
            <p className="text-gray-600 text-sm max-w-lg mx-auto" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Designed from the ground up so you can enjoy your pizza and coffee with total peace of mind.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {SAFETY_FEATURES.map((feat, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-[#FFF8F0] border border-gray-100">
                <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-700 font-medium" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Birthday & Party Booking CTA */}
      <section className="py-16 px-4 sm:px-8 bg-[#FFF8F0]">
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-[#1A1A2E] via-[#2A1B3D] to-[#1A1A2E] text-white p-8 sm:p-12 text-center shadow-xl border border-white/10 relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-[#FF4D8D]/20 text-[#FF4D8D] border border-[#FF4D8D]/30">
              <PartyPopper size={14} /> Birthday Parties &amp; Celebrations
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white" style={{ fontFamily: 'Baloo 2, sans-serif' }}>
              Host the Best Birthday Ever!
            </h2>
            <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Complete party packages with unlimited play zone access, kid-favorite veg meals, themed table decor, and dedicated party hosts.
            </p>
            <div className="pt-2">
              <Link
                to="/reserve"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-bold text-sm sm:text-base shadow-lg hover:scale-105 active:scale-95 transition-all"
                style={{
                  background: 'linear-gradient(135deg, #FF4D8D, #C4A8FF)',
                  fontFamily: 'Baloo 2, sans-serif',
                }}
              >
                <HeartHandshake size={18} />
                Inquire for Party Booking
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

