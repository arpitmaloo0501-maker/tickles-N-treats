import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, ArrowLeft, Home } from 'lucide-react';

export default function Breadcrumb({ items = [] }) {
  const navigate = useNavigate();

  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-[#FFF8F0] border-b border-[#F3F4F6] py-3.5 px-4 sm:px-8 transition-colors"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-xs sm:text-sm">
        {/* Breadcrumb Links */}
        <ol className="flex items-center gap-1.5 sm:gap-2 flex-wrap" style={{ fontFamily: 'Nunito, sans-serif' }}>
          <li>
            <Link
              to="/"
              className="inline-flex items-center gap-1 text-gray-500 hover:text-[#FF4D8D] font-medium transition-colors"
            >
              <Home size={14} className="shrink-0" />
              <span>Home</span>
            </Link>
          </li>
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={item.label} className="flex items-center gap-1.5 sm:gap-2">
                <ChevronRight size={13} className="text-gray-400 shrink-0" />
                {isLast || !item.href ? (
                  <span className="font-bold text-[#1A1A2E] truncate max-w-[180px] sm:max-w-xs" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.href}
                    className="text-gray-500 hover:text-[#FF4D8D] font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>

        {/* Back Button */}
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-700 hover:text-[#FF4D8D] hover:border-[#FF4D8D]/40 text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer shrink-0"
          style={{ fontFamily: 'Nunito, sans-serif' }}
          aria-label="Go back to previous page"
        >
          <ArrowLeft size={13} />
          <span>Back</span>
        </button>
      </div>
    </nav>
  );
}

