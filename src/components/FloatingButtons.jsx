import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { MessageCircle, Phone, Calendar, ShoppingBag, ArrowUp, UtensilsCrossed } from 'lucide-react';
import { SITE_CONFIG, hasRealPhone, hasRealWhatsApp } from '../config/siteConfig';
import { MobileOrderModal } from './OrderDropdown';

export default function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  const showPhone = hasRealPhone();
  const showWhatsApp = hasRealWhatsApp();

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = showWhatsApp
    ? `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
        'Hi Tickles N Treats! I would like to inquire about table booking / menu / play area.'
      )}`
    : `https://wa.me/?text=${encodeURIComponent(
        'Hi Tickles N Treats! I would like to inquire about table booking / menu / play area.'
      )}`;

  return (
    <>
      {/* Desktop/Tablet Floating WhatsApp & Back to Top (Hidden on small mobile) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-3 pointer-events-auto">
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-11 h-11 rounded-full bg-[#1A1A2E]/80 backdrop-blur text-white flex items-center justify-center shadow-lg border border-white/20 transition-all duration-300 hover:scale-110 hover:bg-[#1A1A2E] active:scale-95 cursor-pointer"
          >
            <ArrowUp size={18} />
          </button>
        )}

        <div className="relative group">
          <span
            className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-full text-xs font-bold bg-[#1A1A2E] text-white whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            Chat &amp; Book Table 💬
          </span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 hover:rotate-6 active:scale-95 cursor-pointer"
            style={{
              boxShadow: '0 8px 25px rgba(37, 211, 102, 0.45)',
            }}
          >
            <MessageCircle size={28} className="fill-white/20" />
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
            </span>
          </a>
        </div>
      </div>

      {/* Mobile Sticky Bottom Action Bar (4 buttons or 3 if Call is unconfigured) */}
      <nav
        aria-label="Quick mobile navigation"
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#1A1A2E]/95 backdrop-blur-lg border-t border-white/10 px-3 py-2 pb-[max(0.65rem,env(safe-area-inset-bottom))]"
      >
        <div
          className={`grid ${
            showPhone ? 'grid-cols-4' : 'grid-cols-3'
          } gap-2 max-w-md mx-auto items-center`}
        >
          {/* 1. Menu */}
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all text-center min-h-[48px] ${
                isActive
                  ? 'bg-white/20 text-[#3ECFB2] font-black'
                  : 'bg-white/5 border border-white/10 text-white/90 hover:text-white'
              }`
            }
          >
            <UtensilsCrossed size={18} className="mb-0.5 text-[#3ECFB2]" />
            <span className="text-[11px] font-bold tracking-tight">Menu</span>
          </NavLink>

          {/* 2. Order Online (Triggers Modal) */}
          <button
            type="button"
            onClick={() => setOrderModalOpen(true)}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-[#EA580C] to-[#DC2626] text-white shadow-md active:scale-95 transition-all text-center cursor-pointer min-h-[48px]"
          >
            <ShoppingBag size={18} className="mb-0.5" />
            <span className="text-[11px] font-bold tracking-tight">Order</span>
          </button>

          {/* 3. Reserve a Table */}
          <NavLink
            to="/reserve"
            className={({ isActive }) =>
              `flex flex-col items-center justify-center py-2 px-1 rounded-xl text-white shadow-md active:scale-95 transition-all text-center min-h-[48px] ${
                isActive
                  ? 'bg-gradient-to-r from-[#FF4D8D] to-[#FF758F] ring-2 ring-white/50 font-black'
                  : 'bg-gradient-to-r from-[#FF4D8D] to-[#FF758F]'
              }`
            }
          >
            <Calendar size={18} className="mb-0.5" />
            <span className="text-[11px] font-bold tracking-tight">Reserve</span>
          </NavLink>

          {/* 4. Call (Only visible when real phone number is configured) */}
          {showPhone && (
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-white/5 border border-white/10 text-white active:scale-95 transition-all text-center min-h-[48px]"
            >
              <Phone size={18} className="text-[#3ECFB2] mb-0.5" />
              <span className="text-[11px] font-bold tracking-tight">Call</span>
            </a>
          )}
        </div>
      </nav>

      {/* Mobile Order Modal */}
      <MobileOrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
      />
    </>
  );
}
