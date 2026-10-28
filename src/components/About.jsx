// About.jsx — Warm story section with highlight icons
export default function About() {
  const highlights = [
    {
      emoji: '🛋️',
      title: 'Cozy Seating',
      desc: 'Pastel chairs, warm wooden booths, and intimate nooks — designed to make you stay longer.',
    },
    {
      emoji: '🍔',
      title: 'Great Food',
      desc: 'From crispy starters to dreamy desserts, every dish is crafted with love and a dash of fun.',
    },
    {
      emoji: '👨‍👩‍👧‍👦',
      title: 'For Everyone',
      desc: 'Perfect for family dinners, friends hangout, date nights, or solo comfort food therapy.',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-8" style={{ background: '#FFF8F0' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 fade-up">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4"
            style={{
              fontFamily: 'Nunito, sans-serif',
              background: '#FFD6E0',
              color: '#FF4D8D',
            }}
          >
            ✨ Our Story
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black text-[#1A1A2E] mb-4"
            style={{ fontFamily: 'Baloo 2, sans-serif' }}
          >
            A Place That Feels Like{' '}
            <span style={{ color: '#FF4D8D' }}>Home</span>
          </h2>
          <p
            className="text-lg text-[#6B7280] max-w-2xl mx-auto"
            style={{ fontFamily: 'Nunito, sans-serif', lineHeight: '1.8' }}
          >
            Tickles N Treats was born from one simple dream: to create a space in Raipur where
            great food meets an even greater vibe. Tucked in the heart of Shankar Nagar at Sia Heights,
            our playful cafe is a riot of colour — pastel chairs, glowing neon, warm wooden booths,
            and a ceiling alive with food illustrations that'll make you smile before your food even arrives.
          </p>
        </div>

        {/* Story + Image grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="fade-up">
            <div className="relative">
              {/* Main Exterior Building Photo */}
              <div
                className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
                style={{ aspectRatio: '4/3' }}
              >
                <picture>
                  <source srcSet="/images/exterior-building-facade.webp" type="image/webp" />
                  <img
                    src="/images/exterior-building-facade.jpg"
                    alt="Tickles N Treats Sia Heights building exterior and 1st floor entrance"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width="800"
                    height="600"
                  />
                </picture>
              </div>
              
              {/* Floating Night Neon Sign Badge Photo */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-48 sm:w-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-[#1A1A2E] z-10 hover:scale-105 transition-transform">
                <picture>
                  <source srcSet="/images/exterior-neon-sign.webp" type="image/webp" />
                  <img
                    src="/images/exterior-neon-sign.jpg"
                    alt="Tickles N Treats glowing neon night sign"
                    className="w-full h-auto object-cover object-center"
                    loading="lazy"
                    width="400"
                    height="600"
                  />
                </picture>
                <div className="p-2 bg-[#1A1A2E] text-center">
                  <span className="text-[11px] font-bold text-[#3ECFB2]">Patisserie • Cafe • Play Area</span>
                </div>
              </div>

              {/* Verified Location Badge */}
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-lg text-[#1A1A2E] text-xs font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Sia Heights, Shankar Nagar
              </div>
            </div>
          </div>
          <div className="fade-up" style={{ transitionDelay: '0.2s' }}>
            <h3
              className="text-3xl font-bold text-[#1A1A2E] mb-5"
              style={{ fontFamily: 'Baloo 2, sans-serif' }}
            >
              Where Every Visit Becomes a Memory
            </h3>
            <p
              className="text-[#6B7280] mb-5 leading-relaxed"
              style={{ fontFamily: 'Nunito, sans-serif', lineHeight: '1.9' }}
            >
              We believe food should be fun, not formal. That's why our menu skips the stuffy and
              dives straight into joy — from juicy burgers that drip with flavour, to desserts
              that make your eyes go wide before the first bite. Every corner of our cafe is a
              photo waiting to happen, and every dish is a story worth sharing.
            </p>
            <p
              className="text-[#6B7280] leading-relaxed"
              style={{ fontFamily: 'Nunito, sans-serif', lineHeight: '1.9' }}
            >
              Whether you're here with family for Sunday lunch, catching up with friends over
              shakes, or treating yourself to a solo dessert date — Tickles N Treats is your
              place. Our neon TAT sign glows a little brighter every time you walk through our door.
            </p>
            <div className="mt-8 flex gap-4 flex-wrap">
              <div className="text-center">
                <div
                  className="text-3xl font-black"
                  style={{ fontFamily: 'Baloo 2, sans-serif', color: '#FF4D8D' }}
                >
                  4.6★
                </div>
                <div className="text-xs text-[#9CA3AF]" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  Google Rating
                </div>
              </div>
              <div className="w-px bg-[#E5E7EB]" />
              <div className="text-center">
                <div
                  className="text-3xl font-black"
                  style={{ fontFamily: 'Baloo 2, sans-serif', color: '#3ECFB2' }}
                >
                  100%
                </div>
                <div className="text-xs text-[#9CA3AF]" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  Pure Vegetarian
                </div>
              </div>
              <div className="w-px bg-[#E5E7EB]" />
              <div className="text-center">
                <div
                  className="text-3xl font-black"
                  style={{ fontFamily: 'Baloo 2, sans-serif', color: '#C4A8FF' }}
                >
                  1st Flr
                </div>
                <div className="text-xs text-[#9CA3AF]" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  Sia Heights
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid sm:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className="text-center p-8 rounded-3xl card-hover fade-up"
              style={{
                background: i === 0 ? '#FFD6E0' : i === 1 ? '#A8F0E4' : '#E8DAFF',
                transitionDelay: `${i * 0.15}s`,
              }}
            >
              <div className="text-5xl mb-4">{h.emoji}</div>
              <h3
                className="text-xl font-bold text-[#1A1A2E] mb-3"
                style={{ fontFamily: 'Baloo 2, sans-serif' }}
              >
                {h.title}
              </h3>
              <p
                className="text-[#6B7280] text-sm leading-relaxed"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                {h.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
