// OrderDropdown.jsx — Interactive Zomato & Swiggy online ordering buttons, icons and modal/dropdown
import { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronDown, ExternalLink, ShoppingBag, X } from 'lucide-react';
import { ORDER_LINKS } from '../config/siteConfig';

// Clean SVG Icon for Zomato
export function ZomatoIcon({ size = 22, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" fill="#E23744" />
      <path
        d="M8.5 10.5h15l-10 11h10v2.5h-15l10-11h-10V10.5z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// Clean SVG Icon for Swiggy
export function SwiggyIcon({ size = 22, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" fill="#FC8019" />
      <path
        d="M16 6.5C12.4 6.5 9.5 9.4 9.5 13c0 4.8 6.5 12.5 6.5 12.5s6.5-7.7 6.5-12.5c0-3.6-2.9-6.5-6.5-6.5zm0 9.8c-1.8 0-3.3-1.5-3.3-3.3S14.2 9.7 16 9.7s3.3 1.5 3.3 3.3-1.5 3.3-3.3 3.3z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// Reusable Order Online Dropdown / Button component
export default function OrderDropdown({ variant = 'hero', className = '' }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);
  const firstItemRef = useRef(null);

  // Close dropdown helper
  const closeDropdown = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Close when clicked or touched outside
  useEffect(() => {
    function handlePointerDownOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handlePointerDownOutside);
      document.addEventListener('touchstart', handlePointerDownOutside, { passive: true });
    }

    return () => {
      document.removeEventListener('mousedown', handlePointerDownOutside);
      document.removeEventListener('touchstart', handlePointerDownOutside);
    };
  }, [isOpen, closeDropdown]);

  // Handle keyboard navigation (Escape, Enter, Space)
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape' && isOpen) {
        e.preventDefault();
        closeDropdown();
        triggerRef.current?.focus();
      }
    }

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeDropdown]);

  // Focus management: focus first item when opened via keyboard
  const handleToggle = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const isHero = variant === 'hero';
  const isNavbar = variant === 'navbar';

  return (
    <div className={`relative inline-block ${className}`} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        ref={triggerRef}
        type="button"
        onClick={handleToggle}
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown' && !isOpen) {
            e.preventDefault();
            setIsOpen(true);
          }
        }}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Order Online on Zomato or Swiggy"
        className={`group inline-flex items-center gap-2 cursor-pointer transition-all duration-300 select-none ${
          isHero
            ? 'px-7 py-3.5 rounded-full text-base font-bold text-white shadow-lg hover:scale-105 active:scale-95'
            : isNavbar
            ? 'px-4 py-2 rounded-full text-sm font-bold text-white shadow-md hover:scale-105 active:scale-95'
            : 'px-5 py-2.5 rounded-full text-sm font-bold text-white'
        }`}
        style={{
          fontFamily: 'Baloo 2, sans-serif',
          background: isHero
            ? 'linear-gradient(135deg, #FF6B4A 0%, #E23744 100%)'
            : 'linear-gradient(135deg, #FC8019 0%, #E23744 100%)',
          boxShadow: isOpen
            ? '0 0 25px rgba(252, 128, 25, 0.6), 0 0 15px rgba(226, 55, 68, 0.5)'
            : '0 4px 18px rgba(226, 55, 68, 0.35)',
        }}
      >
        <ShoppingBag size={isHero ? 18 : 16} className="text-white shrink-0" />
        <span>Order Online</span>
        <ChevronDown
          size={isHero ? 16 : 14}
          className={`transition-transform duration-200 text-white/90 shrink-0 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown Menu (Guaranteed visible, high z-index, no conflicting opacity classes) */}
      {isOpen && (
        <div
          role="menu"
          aria-orientation="vertical"
          className={`absolute z-[100] mt-2 w-72 max-w-[calc(100vw-2rem)] rounded-2xl bg-white shadow-2xl border border-gray-100 p-2.5 transition-all duration-200 opacity-100 scale-100 transform ${
            isHero ? 'left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0' : 'right-0'
          }`}
          style={{
            boxShadow: '0 16px 40px -4px rgba(26, 26, 46, 0.25), 0 0 20px rgba(255, 77, 141, 0.15)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-3 py-1.5 mb-1.5 border-b border-gray-100 flex items-center justify-between">
            <span
              className="text-[11px] font-bold uppercase tracking-wider text-gray-400"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              Order for Delivery
            </span>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              Open Now 🟢
            </span>
          </div>

          {/* Zomato Option */}
          <a
            ref={firstItemRef}
            href={ORDER_LINKS.zomato}
            target="_blank"
            rel="noopener noreferrer"
            role="menuitem"
            onClick={closeDropdown}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-red-50/90 transition-all duration-200 group/item border border-transparent hover:border-red-200 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm bg-[#E23744] text-white">
              <span className="text-sm font-black italic tracking-tighter">zomato</span>
            </div>
            <div className="flex-1 min-w-0">
              <div
                className="text-sm font-bold text-[#1A1A2E] group-hover/item:text-[#E23744] flex items-center gap-1"
                style={{ fontFamily: 'Baloo 2, sans-serif' }}
              >
                Order on Zomato
                <ExternalLink size={12} className="opacity-0 group-hover/item:opacity-100 transition-opacity" />
              </div>
              <p className="text-[11px] text-gray-500 leading-tight" style={{ fontFamily: 'Nunito, sans-serif' }}>
                Fast doorstep delivery &amp; offers
              </p>
            </div>
          </a>

          {/* Swiggy Option */}
          <a
            href={ORDER_LINKS.swiggy}
            target="_blank"
            rel="noopener noreferrer"
            role="menuitem"
            onClick={closeDropdown}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-orange-50/90 transition-all duration-200 group/item border border-transparent hover:border-orange-200 mt-1 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm bg-[#FC8019] text-white">
              <SwiggyIcon size={22} />
            </div>
            <div className="flex-1 min-w-0">
              <div
                className="text-sm font-bold text-[#1A1A2E] group-hover/item:text-[#FC8019] flex items-center gap-1"
                style={{ fontFamily: 'Baloo 2, sans-serif' }}
              >
                Order on Swiggy
                <ExternalLink size={12} className="opacity-0 group-hover/item:opacity-100 transition-opacity" />
              </div>
              <p className="text-[11px] text-gray-500 leading-tight" style={{ fontFamily: 'Nunito, sans-serif' }}>
                Live order tracking &amp; instant delivery
              </p>
            </div>
          </a>
        </div>
      )}
    </div>
  );
}

// Modal component for Mobile bottom bar & touch screens
export function MobileOrderModal({ isOpen, onClose }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[150] bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-4 transition-opacity duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Order Online for Delivery"
    >
      <div
        className="bg-white rounded-3xl w-full max-w-sm p-6 shadow-2xl border border-gray-100 relative transition-transform duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-200 transition-colors cursor-pointer"
          aria-label="Close delivery partner selection"
        >
          <X size={18} />
        </button>

        <div className="text-center mb-5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#FC8019] to-[#E23744] text-white flex items-center justify-center mx-auto mb-3 shadow-md">
            <ShoppingBag size={24} />
          </div>
          <h3 className="text-xl font-bold text-[#1A1A2E]" style={{ fontFamily: 'Baloo 2, sans-serif' }}>
            Order Online for Delivery
          </h3>
          <p className="text-xs text-gray-500 mt-1" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Choose your preferred delivery partner
          </p>
        </div>

        <div className="space-y-3">
          <a
            href={ORDER_LINKS.zomato}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center justify-between p-4 rounded-2xl bg-[#E23744] text-white font-bold shadow-lg hover:brightness-110 active:scale-95 transition-all cursor-pointer"
            style={{ fontFamily: 'Baloo 2, sans-serif' }}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                <span className="text-xs font-black italic">zomato</span>
              </div>
              <div className="text-left">
                <div className="text-base leading-tight">Order on Zomato</div>
                <div className="text-[11px] font-normal text-white/80">Fast delivery across Raipur</div>
              </div>
            </div>
            <ExternalLink size={18} className="shrink-0" />
          </a>

          <a
            href={ORDER_LINKS.swiggy}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center justify-between p-4 rounded-2xl bg-[#FC8019] text-white font-bold shadow-lg hover:brightness-110 active:scale-95 transition-all cursor-pointer"
            style={{ fontFamily: 'Baloo 2, sans-serif' }}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                <SwiggyIcon size={20} />
              </div>
              <div className="text-left">
                <div className="text-base leading-tight">Order on Swiggy</div>
                <div className="text-[11px] font-normal text-white/80">Live tracking &amp; deals</div>
              </div>
            </div>
            <ExternalLink size={18} className="shrink-0" />
          </a>
        </div>
      </div>
    </div>
  );
}
