import { useState } from 'react';
import { User, Phone, Calendar, Clock, Users, FileText, MessageCircle, Sparkles, ShoppingBag, ExternalLink } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import SEO from '../components/SEO';
import { SITE_CONFIG, ORDER_LINKS, hasRealWhatsApp } from '../config/siteConfig';

const TIME_SLOTS = [
  '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM',
  '02:30 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM',
  '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM',
  '09:00 PM', '09:30 PM', '10:00 PM',
];

const INITIAL_TODAY = new Date().toISOString().split('T')[0];

export default function ReservePage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: INITIAL_TODAY,
    time: '01:00 PM',
    guests: '2',
    special: '',
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `🎉 *Table Reservation Request*\n\n` +
      `👤 Name: ${form.name}\n` +
      `📞 Phone: ${form.phone}\n` +
      `📅 Date: ${form.date}\n` +
      `🕐 Time: ${form.time}\n` +
      `👥 Guests: ${form.guests}\n` +
      `📝 Special Request: ${form.special || 'None'}\n\n` +
      `_Sent via Tickles N Treats website_`
    );
    const targetWhatsApp = hasRealWhatsApp() ? SITE_CONFIG.whatsapp : '';
    const waUrl = targetWhatsApp ? `https://wa.me/${targetWhatsApp}?text=${msg}` : `https://wa.me/?text=${msg}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputClass =
    'w-full px-4 py-3 rounded-2xl border border-[#E5E7EB] bg-white text-[#1A1A2E] text-base focus:outline-none focus:border-[#FF4D8D] focus:ring-2 focus:ring-[#FF4D8D]/20 transition-all placeholder:text-[#9CA3AF]';

  return (
    <div className="min-h-screen bg-[#FFF8F0] page-enter">
      <SEO
        title="Book a Table & Party Reservations"
        description="Reserve a dining table or book your child's birthday celebration at Tickles N Treats, Sia Heights Shankar Nagar Raipur. Instant WhatsApp confirmation."
        canonical="https://ticklesntreats.in/reserve"
      />

      <Breadcrumb items={[{ label: 'Book a Table' }]} />

      {/* Header */}
      <section className="pt-10 pb-8 px-4 sm:px-8 text-center bg-white border-b border-[#F3F4F6]">
        <div className="max-w-4xl mx-auto">
          <span
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold mb-3"
            style={{ background: '#A8F0E4', color: '#0D9488', fontFamily: 'Nunito, sans-serif' }}
          >
            <Sparkles size={14} /> Instant Confirmation
          </span>
          <h1
            className="text-3xl sm:text-5xl font-black text-[#1A1A2E] mb-3"
            style={{ fontFamily: 'Baloo 2, sans-serif' }}
          >
            Reserve Your <span style={{ color: '#3ECFB2' }}>Table</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Fill in your details below and we will confirm your table or party slot via WhatsApp.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Reservation Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl shadow-lg border border-gray-100">
            {sent && (
              <div
                className="mb-6 p-4 rounded-2xl text-center font-bold text-white text-sm"
                style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', fontFamily: 'Nunito, sans-serif' }}
              >
                🎉 Opening WhatsApp... We will confirm your table booking shortly!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div className="relative">
                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  id="res-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  aria-label="Your Full Name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  required
                  className={`${inputClass} pl-11`}
                  style={{ fontFamily: 'Nunito, sans-serif' }}
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  id="res-phone"
                  type="tel"
                  inputMode="tel"
                  name="phone"
                  autoComplete="tel"
                  aria-label="Your 10-digit Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                  required
                  className={`${inputClass} pl-11`}
                  style={{ fontFamily: 'Nunito, sans-serif' }}
                />
              </div>

              {/* Date + Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="relative">
                  <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    id="res-date"
                    type="date"
                    name="date"
                    aria-label="Reservation Date"
                    value={form.date}
                    onChange={handleChange}
                    min={INITIAL_TODAY}
                    required
                    className={`${inputClass} pl-11`}
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  />
                </div>
                <div className="relative">
                  <Clock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <select
                    id="res-time"
                    name="time"
                    aria-label="Reservation Time"
                    value={form.time}
                    onChange={handleChange}
                    required
                    className={`${inputClass} pl-11 cursor-pointer`}
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    <option value="">Select Time Slot</option>
                    {TIME_SLOTS.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Guests */}
              <div className="relative">
                <Users size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <select
                  id="res-guests"
                  name="guests"
                  inputMode="numeric"
                  aria-label="Number of Guests"
                  value={form.guests}
                  onChange={handleChange}
                  className={`${inputClass} pl-11 cursor-pointer`}
                  style={{ fontFamily: 'Nunito, sans-serif' }}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                  <option value="10+">10+ Guests (Birthday / Group Party)</option>
                </select>
              </div>

              {/* Special Requests */}
              <div className="relative">
                <FileText size={18} className="absolute left-4 top-4 text-gray-400" />
                <textarea
                  id="res-special"
                  name="special"
                  aria-label="Special requests or dietary needs"
                  value={form.special}
                  onChange={handleChange}
                  placeholder="Special requests (e.g. birthday celebration, play zone passes, anniversary...)"
                  rows={3}
                  className={`${inputClass} pl-11 resize-none`}
                  style={{ fontFamily: 'Nunito, sans-serif' }}
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 rounded-2xl text-white font-bold text-base flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                style={{
                  fontFamily: 'Baloo 2, sans-serif',
                  background: 'linear-gradient(135deg, #25D366, #128C7E)',
                  boxShadow: '0 8px 24px rgba(37,211,102,0.4)',
                }}
              >
                <MessageCircle size={20} />
                <span>Confirm Reservation via WhatsApp</span>
              </button>
            </form>
          </div>

          {/* Side Info & Delivery Alternative (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Visit Tips */}
            <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm space-y-3">
              <h3 className="text-lg font-bold text-[#1A1A2E]" style={{ fontFamily: 'Baloo 2, sans-serif' }}>
                Reservation Notes
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-600" style={{ fontFamily: 'Nunito, sans-serif' }}>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF4D8D] font-bold">•</span>
                  <span>Tables held for 15 minutes past reserved time.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3ECFB2] font-bold">•</span>
                  <span>Play zone tickets can be added at the desk upon arrival.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C3AED] font-bold">•</span>
                  <span>For parties of 15+ guests, kindly book at least 24 hours in advance.</span>
                </li>
              </ul>
            </div>

            {/* Delivery CTA Box */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#1A1A2E] to-[#252542] text-white shadow-md">
              <div className="flex items-center gap-2 mb-2 text-[#FC8019]">
                <ShoppingBag size={20} />
                <h3 className="font-bold text-base text-white" style={{ fontFamily: 'Baloo 2, sans-serif' }}>
                  Rather eat at home?
                </h3>
              </div>
              <p className="text-xs text-white/70 mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
                Order your favorite dishes online directly on Zomato or Swiggy.
              </p>
              <div className="space-y-2.5">
                <a
                  href={ORDER_LINKS.zomato}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#E23744] text-white text-xs font-bold hover:brightness-110 transition-all"
                  style={{ fontFamily: 'Baloo 2, sans-serif' }}
                >
                  <span className="flex items-center gap-2">
                    <span className="italic font-black">zomato</span> Order on Zomato
                  </span>
                  <ExternalLink size={14} />
                </a>
                <a
                  href={ORDER_LINKS.swiggy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#FC8019] text-white text-xs font-bold hover:brightness-110 transition-all"
                  style={{ fontFamily: 'Baloo 2, sans-serif' }}
                >
                  <span>🛵 Order on Swiggy</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

