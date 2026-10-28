// Menu.jsx — Full menu with sticky category tabs, search, veg/non-veg filter, and item cards
import { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { ORDER_LINKS } from '../config/siteConfig';

function MenuItem({ item }) {
  return (
    <div
      className="card-hover rounded-2xl overflow-hidden bg-white border border-[#F3F4F6] shadow-sm"
      style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
    >
      <div className="relative" style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
        <img
          src={item.image}
          srcSet={
            item.image.includes('/images/food-ai/')
              ? `${item.image.replace('.webp', '-600.webp')} 600w, ${item.image} 1200w`
              : undefined
          }
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
          alt={item.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        {/* Veg / non-veg indicator */}
        <div className="absolute top-3 left-3">
          <span
            className={`${item.veg ? 'veg-dot' : 'nonveg-dot'}`}
            title={item.veg ? 'Vegetarian' : 'Non-Vegetarian'}
          />
        </div>
        {/* Tag badge */}
        {item.tag && (
          <div
            className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-xs font-bold text-white shadow-sm"
            style={{ background: 'linear-gradient(135deg, #FF4D8D, #C4A8FF)' }}
          >
            {item.tag}
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3
            className="font-bold text-[#1A1A2E] text-base leading-tight"
            style={{ fontFamily: 'Baloo 2, sans-serif' }}
          >
            {item.name}
          </h3>
          <span
            className="font-black text-base whitespace-nowrap"
            style={{ color: '#E11D48', fontFamily: 'Baloo 2, sans-serif' }}
          >
            ₹{item.price}
          </span>
        </div>
        <p
          className="text-[#4B5563] text-xs leading-relaxed"
          style={{ fontFamily: 'Nunito, sans-serif' }}
        >
          {item.description}
        </p>
        <div className="flex items-center gap-1.5 mt-3">
          <span
            className={`${item.veg ? 'veg-dot' : 'nonveg-dot'}`}
          />
          <span
            className="text-xs font-medium"
            style={{ color: item.veg ? '#15803d' : '#b91c1c', fontFamily: 'Nunito, sans-serif' }}
          >
            {item.veg ? 'Veg' : 'Non-Veg'}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('starters');
  const [search, setSearch] = useState('');
  const [vegOnly, setVegOnly] = useState(false);

  const filtered = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCat = item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase());
      const matchesVeg = vegOnly ? item.veg : true;
      return matchesCat && matchesSearch && matchesVeg;
    });
  }, [activeCategory, search, vegOnly]);

  // Global search (all categories)
  const globalSearch = useMemo(() => {
    if (!search) return [];
    return MENU_ITEMS.filter(
      (item) =>
        (item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.description.toLowerCase().includes(search.toLowerCase())) &&
        (vegOnly ? item.veg : true)
    );
  }, [search, vegOnly]);

  const displayItems = search ? globalSearch : filtered;

  return (
    <section id="menu" className="py-24 px-4 sm:px-8" style={{ background: 'white' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 fade-up">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4"
            style={{ background: '#A8F0E4', color: '#0D9488', fontFamily: 'Nunito, sans-serif' }}
          >
            🍽️ Our Menu
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black text-[#1A1A2E] mb-4"
            style={{ fontFamily: 'Baloo 2, sans-serif' }}
          >
            What's <span style={{ color: '#3ECFB2' }}>Tickling</span> Today?
          </h2>
          <p
            className="text-[#6B7280] max-w-xl mx-auto"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            100% Pure Vegetarian cafe dishes handcrafted at Sia Heights. Featuring delicious meals, 
            kids' favorites, and handcrafted patisserie specialties!
          </p>
        </div>

        {/* Search + Veg filter */}
        <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-8 fade-up">
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search menu items..."
              className="w-full pl-11 pr-10 py-3 rounded-full border border-[#E5E7EB] text-sm focus:outline-none focus:border-[#FF4D8D] transition-colors"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#FF4D8D]"
              >
                <X size={16} />
              </button>
            )}
          </div>
          <button
            onClick={() => setVegOnly(!vegOnly)}
            className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold border-2 transition-all ${
              vegOnly
                ? 'bg-green-600 border-green-600 text-white'
                : 'border-green-500 text-green-700 hover:bg-green-50'
            }`}
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            <span className="veg-dot" />
            Veg Only
          </button>
        </div>

        {/* Sticky Category Tabs */}
        {!search && (
          <div
            className="sticky top-20 z-30 bg-white/95 py-3 mb-8 fade-up"
            style={{ backdropFilter: 'blur(8px)' }}
          >
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide justify-start sm:justify-center">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-bold border-2 transition-all duration-200 hover:scale-105 ${
                    activeCategory === cat.id
                      ? 'cat-tab-active border-transparent'
                      : 'border-[#E5E7EB] text-[#6B7280] hover:border-[#FF4D8D] hover:text-[#FF4D8D]'
                  }`}
                  style={{ fontFamily: 'Nunito, sans-serif' }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Menu grid */}
        {displayItems.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {displayItems.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">😔</div>
            <p
              className="text-[#9CA3AF] text-lg"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              No items found. Try a different search.
            </p>
          </div>
        )}

        {/* Swiggy CTA */}
        <div className="text-center mt-14 fade-up">
          <p
            className="text-[#6B7280] mb-4"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            Want to order online?
          </p>
          <a
            href={ORDER_LINKS.swiggy}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-base transition-all hover:scale-105 shadow-lg"
            style={{
              fontFamily: 'Baloo 2, sans-serif',
              background: 'linear-gradient(135deg, #FC8019, #E8471E)',
              boxShadow: '0 8px 24px rgba(252,128,25,0.4)',
            }}
          >
            🛵 Order on Swiggy
          </a>
        </div>

        {/* Illustration disclaimer */}
        <p className="mt-8 text-center text-xs text-gray-400" style={{ fontFamily: 'Nunito, sans-serif' }}>
          Images are for illustration purposes only. Actual presentation may vary.
        </p>
      </div>
    </section>
  );
}
