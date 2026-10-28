import { Link } from 'react-router-dom';
import { Phone, MapPin, Heart, ShoppingBag, ExternalLink } from 'lucide-react';
import {
  SITE_CONFIG,
  ORDER_LINKS,
  hasRealPhone,
  hasRealInstagram,
  hasRealWhatsApp,
} from '../config/siteConfig';

function InstagramIcon({ size = 18, className = '', style = {} }) {
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

const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Menu & Prices', to: '/menu' },
  { label: 'Kids Play Area', to: '/play-area' },
  { label: 'Photo Gallery', to: '/gallery' },
  { label: 'About Us & FAQs', to: '/about' },
  { label: 'Guest Reviews', to: '/reviews' },
  { label: 'Book a Table', to: '/reserve' },
  { label: 'Contact & Location', to: '/contact' },
];

const CURRENT_YEAR = 2026;

export default function Footer() {
  const showPhone = hasRealPhone();
  const showInsta = hasRealInstagram();
  const showWhatsApp = hasRealWhatsApp();

  return (
    <footer
      className="px-4 sm:px-8 pt-16 pb-24 md:pb-12"
      style={{
        background: 'linear-gradient(180deg, #0F0F1E 0%, #1A1A2E 100%)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Link to="/" className="text-3xl font-black" style={{ fontFamily: 'Baloo 2, sans-serif' }}>
                <span className="neon-glow" style={{ color: '#FF4D8D' }}>TAT</span>{' '}
                <span className="text-white">Tickles N Treats</span>
              </Link>
            </div>
            <p
              className="text-white/50 text-xs sm:text-sm leading-relaxed mb-6 max-w-xs"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              Where every bite tickles your soul. Raipur's most playful pure veg cafe-restaurant & kids arena at Sia Heights, Shankar Nagar.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {showInsta && (
                <a
                  href={SITE_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: 'linear-gradient(135deg, #E1306C, #833AB4)', color: 'white' }}
                  aria-label="Instagram"
                >
                  <InstagramIcon size={18} />
                </a>
              )}
              {showWhatsApp && (
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: '#25D366', color: 'white' }}
                  aria-label="WhatsApp"
                >
                  <Phone size={18} />
                </a>
              )}
              <a
                href={SITE_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: '#4285F4', color: 'white' }}
                aria-label="Google Maps Location"
              >
                <MapPin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-white font-bold mb-5"
              style={{ fontFamily: 'Baloo 2, sans-serif' }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/60 hover:text-white text-xs sm:text-sm transition-colors hover:translate-x-1 inline-block"
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Order Online Links */}
          <div>
            <h3
              className="text-white font-bold mb-5 flex items-center gap-2"
              style={{ fontFamily: 'Baloo 2, sans-serif' }}
            >
              <ShoppingBag size={18} className="text-[#FC8019]" />
              Order Online
            </h3>
            <p className="text-white/50 text-xs mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Fresh pure-veg food delivered hot to your doorstep.
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={ORDER_LINKS.zomato}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/90 hover:text-white px-4 py-2.5 rounded-xl bg-[#E23744]/20 border border-[#E23744]/40 hover:bg-[#E23744] text-xs font-bold transition-all"
                  style={{ fontFamily: 'Baloo 2, sans-serif' }}
                >
                  <span className="italic font-black">zomato</span>
                  <span>Order on Zomato</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href={ORDER_LINKS.swiggy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/90 hover:text-white px-4 py-2.5 rounded-xl bg-[#FC8019]/20 border border-[#FC8019]/40 hover:bg-[#FC8019] text-xs font-bold transition-all"
                  style={{ fontFamily: 'Baloo 2, sans-serif' }}
                >
                  <span>🛵 Order on Swiggy</span>
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3
              className="text-white font-bold mb-5"
              style={{ fontFamily: 'Baloo 2, sans-serif' }}
            >
              Contact
            </h3>
            <div className="space-y-3 text-xs sm:text-sm" style={{ fontFamily: 'Nunito, sans-serif' }}>
              <div className="flex gap-2 text-white/60">
                <MapPin size={15} className="shrink-0 mt-0.5 text-[#FF4D8D]" />
                <span className="leading-relaxed">{SITE_CONFIG.address}</span>
              </div>
              {showPhone && (
                <div className="flex gap-2 text-white/60">
                  <Phone size={15} className="shrink-0 text-[#3ECFB2]" />
                  <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-white transition-colors">
                    {SITE_CONFIG.phone}
                  </a>
                </div>
              )}
              {showInsta && (
                <div className="flex gap-2 text-white/60">
                  <InstagramIcon size={15} className="shrink-0 text-[#FF4D8D]" />
                  <a
                    href={SITE_CONFIG.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {SITE_CONFIG.instagram}
                  </a>
                </div>
              )}
              <div className="text-xs text-white/40 mt-4 pt-3 border-t border-white/10">
                🕐 Open daily: 12 PM onwards
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p style={{ fontFamily: 'Nunito, sans-serif' }}>
            © {CURRENT_YEAR} Tickles N Treats. All rights reserved. 100% Pure Vegetarian Cafe &amp; Play Area.
          </p>
          <div className="flex items-center gap-1" style={{ fontFamily: 'Nunito, sans-serif' }}>
            <span>Made with</span>
            <Heart size={12} className="text-[#FF4D8D] fill-[#FF4D8D]" />
            <span>in Shankar Nagar, Raipur</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
