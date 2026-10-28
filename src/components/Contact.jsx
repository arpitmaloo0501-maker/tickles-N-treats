import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import {
  SITE_CONFIG,
  hasRealPhone,
  hasRealWhatsApp,
  hasRealInstagram,
} from '../config/siteConfig';

function InstagramIcon({ size = 20, className = '', style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const HOURS = [
  { day: 'Monday – Friday', time: '12:00 PM – 11:00 PM' },
  { day: 'Saturday – Sunday', time: '12:00 PM – 11:00 PM' },
];

export default function Contact() {
  const showPhone = hasRealPhone();
  const showWhatsApp = hasRealWhatsApp();
  const showInsta = hasRealInstagram();

  return (
    <section id="contact" className="py-24 px-4 sm:px-8" style={{ background: '#1A1A2E' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 fade-up">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4"
            style={{
              background: 'rgba(62,207,178,0.15)',
              color: '#3ECFB2',
              border: '1px solid rgba(62,207,178,0.3)',
              fontFamily: 'Nunito, sans-serif',
            }}
          >
            📍 Find Us
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black text-white mb-4"
            style={{ fontFamily: 'Baloo 2, sans-serif' }}
          >
            Come{' '}
            <span className="neon-glow-mint" style={{ color: '#3ECFB2' }}>Visit Us</span>
          </h2>
          <p className="text-white/60" style={{ fontFamily: 'Nunito, sans-serif' }}>
            We're in the heart of Shankar Nagar, Raipur. Come hungry, leave happy!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Embedded Map */}
          <div className="fade-up rounded-3xl overflow-hidden" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}>
            <iframe
              title="Tickles N Treats location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.997!2d81.6274!3d21.2514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd!2sShankarnagar%20Raipur!5e0!3m2!1sen!2sin!4v1698000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact info */}
          <div className="space-y-5 fade-up" style={{ transitionDelay: '0.2s' }}>
            {/* Address */}
            <div
              className="flex gap-4 p-5 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                style={{ background: 'rgba(255,77,141,0.15)' }}
              >
                <MapPin size={22} style={{ color: '#FF4D8D' }} />
              </div>
              <div>
                <div
                  className="font-bold text-white mb-1"
                  style={{ fontFamily: 'Baloo 2, sans-serif' }}
                >
                  Address
                </div>
                <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  {SITE_CONFIG.address}
                </p>
                <a
                  href={SITE_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold mt-2 hover:underline"
                  style={{ color: '#3ECFB2', fontFamily: 'Nunito, sans-serif' }}
                >
                  <ExternalLink size={12} />
                  Get Directions
                </a>
              </div>
            </div>

            {/* Phone / WhatsApp (Hidden until real credentials provided) */}
            {(showPhone || showWhatsApp) && (
              <div
                className="flex gap-4 p-5 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(62,207,178,0.15)' }}
                >
                  <Phone size={22} style={{ color: '#3ECFB2' }} />
                </div>
                <div>
                  <div className="font-bold text-white mb-1" style={{ fontFamily: 'Baloo 2, sans-serif' }}>
                    Phone / WhatsApp
                  </div>
                  {showPhone && (
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="text-white/60 text-sm hover:text-white transition-colors block"
                      style={{ fontFamily: 'Nunito, sans-serif' }}
                    >
                      {SITE_CONFIG.phone}
                    </a>
                  )}
                  {showWhatsApp && (
                    <div className="mt-1">
                      <a
                        href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold hover:underline"
                        style={{ color: '#25D366', fontFamily: 'Nunito, sans-serif' }}
                      >
                        💬 Chat on WhatsApp
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Hours */}
            <div
              className="flex gap-4 p-5 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                style={{ background: 'rgba(196,168,255,0.15)' }}
              >
                <Clock size={22} style={{ color: '#C4A8FF' }} />
              </div>
              <div className="flex-1">
                <div className="font-bold text-white mb-2" style={{ fontFamily: 'Baloo 2, sans-serif' }}>
                  Opening Hours
                </div>
                <div className="space-y-1">
                  {HOURS.map((h) => (
                    <div
                      key={h.day}
                      className="flex justify-between text-sm gap-4"
                      style={{ fontFamily: 'Nunito, sans-serif' }}
                    >
                      <span className="text-white/60">{h.day}</span>
                      <span className="text-white font-medium whitespace-nowrap">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Instagram (Hidden until real account URL configured) */}
            {showInsta && (
              <div
                className="flex gap-4 p-5 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(225,48,108,0.15)' }}
                >
                  <InstagramIcon size={22} style={{ color: '#E1306C' }} />
                </div>
                <div>
                  <div className="font-bold text-white mb-1" style={{ fontFamily: 'Baloo 2, sans-serif' }}>
                    Follow Us
                  </div>
                  <a
                    href={SITE_CONFIG.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline"
                    style={{ color: '#E1306C', fontFamily: 'Nunito, sans-serif' }}
                  >
                    {SITE_CONFIG.instagram}
                  </a>
                </div>
              </div>
            )}

            {/* Get Directions CTA */}
            <a
              href={SITE_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl text-white font-bold transition-all hover:scale-[1.02]"
              style={{
                fontFamily: 'Baloo 2, sans-serif',
                background: 'linear-gradient(135deg, #4285F4, #0D47A1)',
                boxShadow: '0 8px 24px rgba(66,133,244,0.3)',
              }}
            >
              <MapPin size={18} />
              Get Directions on Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
