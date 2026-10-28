import { Link } from 'react-router-dom';
import { Home, UtensilsCrossed } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-16 bg-[#FFF8F0] page-enter">
      <SEO
        title="Page Not Found (404)"
        description="The page you're looking for doesn't exist. Explore Tickles N Treats menu, play area, and reservations."
      />

      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100 text-center space-y-6">
        <div className="text-7xl select-none animate-bounce">
          🧁
        </div>

        <div>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#FFD6E0] text-[#FF4D8D] mb-2 font-mono">
            404 Error
          </span>
          <h1
            className="text-3xl sm:text-4xl font-black text-[#1A1A2E]"
            style={{ fontFamily: 'Baloo 2, sans-serif' }}
          >
            Oops! This treat got lost.
          </h1>
          <p className="text-gray-600 text-xs sm:text-sm mt-2 leading-relaxed" style={{ fontFamily: 'Nunito, sans-serif' }}>
            We couldn't find the page you're looking for. It might have been moved or eaten fresh from the oven!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#1A1A2E] hover:bg-[#FF4D8D] text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95 cursor-pointer"
            style={{ fontFamily: 'Baloo 2, sans-serif' }}
          >
            <Home size={15} />
            Back to Home
          </Link>
          <Link
            to="/menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs sm:text-sm font-bold transition-all active:scale-95 cursor-pointer"
            style={{ fontFamily: 'Baloo 2, sans-serif' }}
          >
            <UtensilsCrossed size={15} />
            View Menu
          </Link>
        </div>
      </div>
    </div>
  );
}

