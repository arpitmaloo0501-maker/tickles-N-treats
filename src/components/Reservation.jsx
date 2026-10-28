// Reservation.jsx — Table booking form that opens WhatsApp with a prefilled message
import { useState } from 'react';
import { MessageCircle, Calendar, Clock, Users, User, Phone, FileText, ExternalLink } from 'lucide-react';
import {
  SITE_CONFIG,
  ORDER_LINKS,
  hasRealPhone,
  hasRealWhatsApp,
} from '../config/siteConfig';

const TIME_SLOTS = [
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
  '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
  '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
  '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM',
  '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM',
  '10:00 PM',
];

const INITIAL_TODAY = new Date().toISOString().split('T')[0];

export default function Reservation() {
  const [form, setForm] = useState({
    name: '', phone: '', date: '', time: '', guests: '2', special: '',
  });
  const [sent, setSent] = useState(false);
  const today = INITIAL_TODAY;

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

  const showPhone = hasRealPhone();

  const inputClass =
    'w-full px-4 py-3 rounded-2xl border border-[#E5E7EB] bg-white text-[#1A1A2E] text-sm focus:outline-none focus:border-[#FF4D8D] focus:ring-2 focus:ring-[#FF4D8D]/20 transition-all placeholder:text-[#9CA3AF]';

  return (
    <section id="reservation" className="py-24 px-4 sm:px-8" style={{ background: '#FFF8F0' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 fade-up">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4"
            style={{ background: '#A8F0E4', color: '#0D9488', fontFamily: 'Nunito, sans-serif' }}
          >
            🎉 Reservations
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black text-[#1A1A2E] mb-4"
            style={{ fontFamily: 'Baloo 2, sans-serif' }}
          >
            Book Your{' '}
            <span style={{ color: '#3ECFB2' }}>Table</span>
          </h2>
          <p className="text-[#6B7280]" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Fill in your details and we'll confirm via WhatsApp. Easy as pie 🥧
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div
            className="p-8 rounded-3xl shadow-xl fade-up"
            style={{ background: 'white', boxShadow: '0 20px 60px rgba(0,0,0,0.08)' }}
          >
            {sent && (
              <div
                className="mb-6 p-4 rounded-2xl text-center font-bold text-white"
                style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', fontFamily: 'Nunito, sans-serif' }}
              >
                🎉 Opening WhatsApp... We'll confirm your booking shortly!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div className="relative">
                <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
                <input
                  id="res-name"
                  type="text"
                  name="name"
                  aria-label="Your Full Name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  required
                  className={`${inputClass} pl-10`}
                  style={{ fontFamily: 'Nunito, sans-serif' }}
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
                <input
                  id="res-phone"
                  type="tel"
                  name="phone"
                  aria-label="Your Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                  required
                  className={`${inputClass} pl-10`}
                  style={{ fontFamily: 'Nunito, sans-serif' }}
                />
              </div>

              {/* Date + Time */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative">
                  <Calendar size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
                  <input
                    id="res-date"
                    type="date"
                    name="date"
                    aria-label="Reservation Date"
                    value={form.date}
                    onChange={handleChange}
                    min={today}
                    required
                    className={`${inputClass} pl-10`}
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  />
                </div>
                <div className="relative">
                  <Clock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
                  <select
                    id="res-time"
                    name="time"
                    aria-label="Reservation Time"
                    value={form.time}
                    onChange={handleChange}
                    required
                    className={`${inputClass} pl-10 cursor-pointer`}
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    <option value="">Select Time</option>
                    {TIME_SLOTS.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Guests */}
              <div className="relative">
                <Users size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
                <select
                  id="res-guests"
                  name="guests"
                  aria-label="Number of Guests"
                  value={form.guests}
                  onChange={handleChange}
                  className={`${inputClass} pl-10 cursor-pointer`}
                  style={{ fontFamily: 'Nunito, sans-serif' }}
                >
                  {[1,2,3,4,5,6,7,8,9,10].map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                  <option value="10+">10+ Guests (Large Group)</option>
                </select>
              </div>

              {/* Special request */}
              <div className="relative">
                <FileText size={16} className="absolute left-4 top-4 text-[#9CA3AF]" />
                <textarea
                  id="res-special"
                  name="special"
                  aria-label="Special requests"
                  value={form.special}
                  onChange={handleChange}
                  placeholder="Special requests (e.g. birthday, anniversary, dietary needs...)"
                  rows={3}
                  className={`${inputClass} pl-10 resize-none`}
                  style={{ fontFamily: 'Nunito, sans-serif' }}
                />
              </div>

              {/* Submit via WhatsApp */}
              <button
                type="submit"
                className="w-full py-4 rounded-2xl text-white font-bold text-base flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                style={{
                  fontFamily: 'Baloo 2, sans-serif',
                  background: 'linear-gradient(135deg, #25D366, #128C7E)',
                  boxShadow: '0 8px 24px rgba(37,211,102,0.4)',
                }}
              >
                <MessageCircle size={20} />
                Confirm via WhatsApp
              </button>
            </form>

            <p className="text-center text-xs text-[#9CA3AF] mt-3" style={{ fontFamily: 'Nunito, sans-serif' }}>
              This will open WhatsApp with your booking details pre-filled.
            </p>
          </div>

          {/* Right side info */}
          <div className="space-y-6 fade-up" style={{ transitionDelay: '0.2s' }}>
            {/* Swiggy order card */}
            <div
              className="p-6 rounded-3xl border-2 text-center"
              style={{ borderColor: '#FC8019', background: '#FFF5EC' }}
            >
              <div className="text-4xl mb-3">🛵</div>
              <h3
                className="text-xl font-bold text-[#1A1A2E] mb-2"
                style={{ fontFamily: 'Baloo 2, sans-serif' }}
              >
                Order Online via Swiggy
              </h3>
              <p className="text-[#6B7280] text-sm mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
                Can't make it? Get your favourite Tickles N Treats dishes delivered right to your doorstep.
              </p>
              <a
                href={ORDER_LINKS.swiggy}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-bold transition-all hover:scale-105"
                style={{
                  fontFamily: 'Baloo 2, sans-serif',
                  background: 'linear-gradient(135deg, #FC8019, #E8471E)',
                }}
              >
                <ExternalLink size={16} />
                Order on Swiggy
              </a>
            </div>

            {/* Info cards */}
            <div
              className="flex gap-4 p-5 rounded-2xl bg-white border border-[#F3F4F6]"
              style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.05)' }}
            >
              <span className="text-3xl">📅</span>
              <div>
                <div className="font-bold text-[#1A1A2E] mb-0.5" style={{ fontFamily: 'Baloo 2, sans-serif' }}>
                  Opening Hours
                </div>
                <p className="text-[#6B7280] text-sm whitespace-pre-line" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  {SITE_CONFIG.openHours}
                </p>
              </div>
            </div>

            <div
              className="flex gap-4 p-5 rounded-2xl bg-white border border-[#F3F4F6]"
              style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.05)' }}
            >
              <span className="text-3xl">📍</span>
              <div>
                <div className="font-bold text-[#1A1A2E] mb-0.5" style={{ fontFamily: 'Baloo 2, sans-serif' }}>
                  Our Address
                </div>
                <p className="text-[#6B7280] text-sm whitespace-pre-line" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  {SITE_CONFIG.address}
                </p>
              </div>
            </div>

            {showPhone && (
              <div
                className="flex gap-4 p-5 rounded-2xl bg-white border border-[#F3F4F6]"
                style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.05)' }}
              >
                <span className="text-3xl">📞</span>
                <div>
                  <div className="font-bold text-[#1A1A2E] mb-0.5" style={{ fontFamily: 'Baloo 2, sans-serif' }}>
                    Call or WhatsApp
                  </div>
                  <p className="text-[#6B7280] text-sm" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    {SITE_CONFIG.phone}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
