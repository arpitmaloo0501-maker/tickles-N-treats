import { useState, useMemo } from 'react';
import { Search, Sparkles, Filter } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import SEO from '../components/SEO';
import { CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { ORDER_LINKS } from '../config/siteConfig';

function MenuItemCard({ item }) {
  return (
    <div
      className="card-hover rounded-2xl overflow-hidden bg-white border border-[#F3F4F6] shadow-sm flex flex-col justify-between"
      style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
    >
      <div>
        <div className="relative overflow-hidden bg-gray-100" style={{ aspectRatio: '4/3' }}>
          <img
            src={item.image}
            srcSet={
              item.image?.includes('/images/food-ai/')
                ? `${item.image.replace('.webp', '-600.webp')} 600w, ${item.image} 1200w`
                : undefined
            }
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
            alt={item.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />

          {/* Veg indicator */}
          <div className="absolute top-2.5 left-2.5">
            <span
              className={`${item.veg ? 'veg-dot' : 'nonveg-dot'}`}
              title={item.veg ? '100% Vegetarian' : 'Non-Vegetarian'}
            />
          </div>

          {/* Tag badge */}
          {item.tag && (
            <div
              className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold text-white shadow-sm"
              style={{ background: 'linear-gradient(135deg, #FF4D8D, #C4A8FF)' }}
            >
              {item.tag}
            </div>
          )}
        </div>

        <div className="p-3.5 sm:p-4">
          <div className="flex items-start justify-between gap-1.5 mb-1.5">
            <h3
              className="font-bold text-[#1A1A2E] text-sm sm:text-base leading-tight"
              style={{ fontFamily: 'Baloo 2, sans-serif' }}
            >
              {item.name}
            </h3>
            <span
              className="font-black text-sm sm:text-base whitespace-nowrap"
              style={{ color: '#E11D48', fontFamily: 'Baloo 2, sans-serif' }}
            >
              ₹{item.price}
            </span>
          </div>
          <p
            className="text-gray-600 text-xs leading-relaxed line-clamp-2 sm:line-clamp-3 mb-2"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            {item.description}
          </p>
        </div>
      </div>

      <div className="px-3.5 pb-3.5 sm:px-4 sm:pb-4 pt-0">
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] font-semibold text-emerald-700" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Pure Veg
          </span>
        </div>
      </div>
    </div>
  );
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [vegOnly, setVegOnly] = useState(false);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchCat = activeCategory === 'all' || item.category === activeCategory;
      const matchSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase());
      const matchVeg = !vegOnly || item.veg;
      return matchCat && matchSearch && matchVeg;
    });
  }, [activeCategory, search, vegOnly]);

  return (
    <div className="min-h-screen bg-[#FFF8F0] page-enter">
      <SEO
        title="Menu & Pricing"
        description="Explore our full 100% pure vegetarian menu: starters, crispy lotus stem, wood-fired style pizzas, alfredo pasta, sizzlers, thickshakes and patisserie treats."
        canonical="https://ticklesntreats.in/menu"
      />

      <Breadcrumb items={[{ label: 'Menu & Prices' }]} />

      {/* Header */}
      <section className="pt-10 pb-6 px-4 sm:px-8 text-center bg-white border-b border-[#F3F4F6]">
        <div className="max-w-4xl mx-auto">
          <span
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold mb-3"
            style={{ background: '#FFD6E0', color: '#FF4D8D', fontFamily: 'Nunito, sans-serif' }}
          >
            <Sparkles size={14} /> 100% Pure Vegetarian
          </span>
          <h1
            className="text-3xl sm:text-5xl font-black text-[#1A1A2E] mb-3"
            style={{ fontFamily: 'Baloo 2, sans-serif' }}
          >
            Our Delicious <span style={{ color: '#FF4D8D' }}>Menu</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Prepared fresh with premium ingredients, love, and playful flavors.
          </p>
        </div>
      </section>

      {/* Sticky Search & Category Bar */}
      <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-3">
          {/* Search and Filters row */}
          <div className="flex items-center justify-between gap-3">
            <div className="relative flex-grow max-w-md">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search pizza, pasta, shake, dessert..."
                aria-label="Search menu items"
                className="w-full pl-9 pr-4 py-2.5 rounded-full bg-gray-50 border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-[#FF4D8D] focus:ring-1 focus:ring-[#FF4D8D]"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              />
            </div>

            <button
              type="button"
              onClick={() => setVegOnly((v) => !v)}
              className={`px-3.5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
                vegOnly
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
              }`}
              style={{ fontFamily: 'Nunito, sans-serif' }}
              aria-pressed={vegOnly}
            >
              <Filter size={13} />
              <span>Veg Only</span>
            </button>
          </div>

          {/* Category Tabs: horizontally scrollable on mobile */}
          <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar text-xs sm:text-sm">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#1A1A2E] text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:text-black hover:bg-gray-200'
              }`}
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              ✨ All Items ({MENU_ITEMS.length})
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#1A1A2E] text-white shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:text-black hover:bg-gray-200'
                }`}
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredItems.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl p-8 max-w-md mx-auto border border-gray-100">
            <span className="text-5xl block mb-3">🔍</span>
            <h3 className="font-bold text-lg text-[#1A1A2E] mb-1" style={{ fontFamily: 'Baloo 2, sans-serif' }}>
              No dishes found
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Try clearing your search or filters to see all available treats.
            </p>
            <button
              type="button"
              onClick={() => { setSearch(''); setActiveCategory('all'); setVegOnly(false); }}
              className="px-5 py-2 rounded-full bg-[#1A1A2E] text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Order Delivery Banner */}
        <section className="mt-14 p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-[#1A1A2E] to-[#252542] text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black mb-1" style={{ fontFamily: 'Baloo 2, sans-serif' }}>
              Prefer delivery to your home?
            </h3>
            <p className="text-white/70 text-xs sm:text-sm" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Order through Zomato or Swiggy for quick doorstep delivery across Raipur.
            </p>
          </div>
          <div className="flex gap-3 shrink-0 flex-wrap justify-center">
            <a
              href={ORDER_LINKS.zomato}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-2xl bg-[#E23744] hover:bg-[#d02e3b] text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md active:scale-95"
              style={{ fontFamily: 'Baloo 2, sans-serif' }}
            >
              <span className="italic font-black">zomato</span> Order Zomato
            </a>
            <a
              href={ORDER_LINKS.swiggy}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-2xl bg-[#FC8019] hover:bg-[#e07010] text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md active:scale-95"
              style={{ fontFamily: 'Baloo 2, sans-serif' }}
            >
              <span>🛵 Order Swiggy</span>
            </a>
          </div>
        </section>

        {/* Illustration disclaimer */}
        <p className="mt-8 text-center text-xs text-gray-500" style={{ fontFamily: 'Nunito, sans-serif' }}>
          Images are for illustration purposes only. Actual presentation may vary.
        </p>
      </main>
    </div>
  );
}

