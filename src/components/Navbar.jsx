import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';
import OrderDropdown from './OrderDropdown';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'Play Area', to: '/play-area' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'About', to: '/about' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [prevPath, setPrevPath] = useState(location.pathname);
  const isHome = location.pathname === '/';

  // Close mobile drawer when route changes
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navBg = isHome
    ? scrolled
      ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
      : 'bg-transparent'
    : 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100';

  const textColor = isHome && !scrolled ? 'text-white' : 'text-[#1A1A2E]';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main Navigation">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group cursor-pointer">
            <span
              className="text-2xl font-black tracking-tight"
              style={{ fontFamily: 'Baloo 2, sans-serif' }}
            >
              <span
                className={isHome && !scrolled ? 'neon-glow' : 'neon-glow-mint'}
                style={{ color: isHome && !scrolled ? '#FF4D8D' : '#3ECFB2' }}
              >
                TAT
              </span>{' '}
              <span className={textColor}>Tickles N Treats</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#FF4D8D] text-white shadow-md'
                      : isHome && !scrolled
                      ? 'text-white/90 hover:text-white hover:bg-white/10'
                      : 'text-gray-700 hover:text-[#1A1A2E] hover:bg-[#FFD6E0]/40'
                  }`
                }
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                {link.label}
              </NavLink>
            ))}

            <OrderDropdown variant="navbar" className="ml-2" />

            <Link
              to="/reserve"
              className="ml-2 px-4 py-2 rounded-full text-xs font-bold text-white transition-all duration-200 hover:scale-105 active:scale-95 shadow-md flex items-center gap-1.5 cursor-pointer"
              style={{
                fontFamily: 'Baloo 2, sans-serif',
                background: 'linear-gradient(135deg, #FF4D8D, #C4A8FF)',
              }}
            >
              <Calendar size={13} />
              <span>Reserve a Table</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <OrderDropdown variant="mobile" />
            <button
              onClick={() => setOpen(!open)}
              className={`p-2 rounded-full transition-colors ${textColor} hover:bg-black/5 active:scale-95 cursor-pointer`}
              aria-label={open ? 'Close mobile menu' : 'Open mobile menu'}
              aria-expanded={open}
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Hamburger Drawer */}
        {open && (
          <div className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-gray-100 px-4 py-6 rounded-b-3xl shadow-2xl animate-in slide-in-from-top-3 duration-200">
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
                      isActive
                        ? 'bg-[#FF4D8D] text-white shadow-md'
                        : 'text-gray-800 hover:bg-[#FFF8F0] hover:text-[#FF4D8D]'
                    }`
                  }
                  style={{ fontFamily: 'Nunito, sans-serif' }}
                >
                  {link.label}
                </NavLink>
              ))}

              <div className="pt-3 border-t border-gray-100 flex flex-col gap-2.5">
                <Link
                  to="/reserve"
                  onClick={() => setOpen(false)}
                  className="w-full py-3.5 rounded-2xl text-white text-center font-bold text-sm shadow-md flex items-center justify-center gap-2"
                  style={{
                    fontFamily: 'Baloo 2, sans-serif',
                    background: 'linear-gradient(135deg, #FF4D8D, #C4A8FF)',
                  }}
                >
                  <Calendar size={16} />
                  <span>Reserve a Table</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

