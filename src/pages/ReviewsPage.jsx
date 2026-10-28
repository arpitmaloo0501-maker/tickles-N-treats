import { Star, CheckCircle, ExternalLink } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import SEO from '../components/SEO';
import { REVIEWS } from '../data/menuData';
import { SITE_CONFIG, hasRealGoogleReview } from '../config/siteConfig';

export default function ReviewsPage() {
  const directReviewUrl = hasRealGoogleReview()
    ? SITE_CONFIG.googleReviewUrl
    : SITE_CONFIG.googleMapsUrl;

  return (
    <div className="min-h-screen bg-[#FFF8F0] page-enter">
      <SEO
        title="Guest Reviews & Ratings"
        description="See what guests love about Tickles N Treats cafe in Shankar Nagar Raipur. 4.6★ rated on Google for delicious vegetarian food, friendly hospitality, and kids play zone."
        canonical="https://ticklesntreats.in/reviews"
      />

      <Breadcrumb items={[{ label: 'Guest Reviews' }]} />

      {/* Header */}
      <section className="pt-10 pb-8 px-4 sm:px-8 text-center bg-white border-b border-[#F3F4F6]">
        <div className="max-w-4xl mx-auto">
          <span
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold mb-3"
            style={{ background: '#FEF3C7', color: '#D97706', fontFamily: 'Nunito, sans-serif' }}
          >
            <Star size={14} className="fill-[#D97706]" /> Verified Experiences
          </span>
          <h1
            className="text-3xl sm:text-5xl font-black text-[#1A1A2E] mb-3"
            style={{ fontFamily: 'Baloo 2, sans-serif' }}
          >
            What Our <span style={{ color: '#FF4D8D' }}>Guests Say</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Genuine feedback from food lovers, families, and party hosts who visited Tickles N Treats at Sia Heights.
          </p>
        </div>
      </section>

      {/* Rating Scorecard */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 py-10">
        <div className="p-6 sm:p-10 rounded-3xl bg-white shadow-md border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 rounded-3xl bg-amber-50 border-2 border-amber-200 flex flex-col items-center justify-center shrink-0">
              <span className="text-4xl font-black text-amber-500" style={{ fontFamily: 'Baloo 2, sans-serif' }}>
                {SITE_CONFIG.rating}
              </span>
              <div className="flex items-center text-amber-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="fill-amber-400" />
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-[#1A1A2E]" style={{ fontFamily: 'Baloo 2, sans-serif' }}>
                Outstanding Google Rating
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm mt-0.5" style={{ fontFamily: 'Nunito, sans-serif' }}>
                Based on verified Google Maps local reviews for our Shankar Nagar cafe.
              </p>
              <div className="flex items-center gap-2 mt-2 text-xs font-semibold text-emerald-700">
                <CheckCircle size={14} />
                <span>Verified Google Business Listing</span>
              </div>
            </div>
          </div>

          <a
            href={directReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full bg-[#1A1A2E] hover:bg-[#FF4D8D] text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md active:scale-95 shrink-0"
            style={{ fontFamily: 'Baloo 2, sans-serif' }}
          >
            <span>Review us on Google</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </section>

      {/* Reviews Cards Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-gray-400 font-mono">{rev.date}</span>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-6" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  "{rev.text}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#FF4D8D] to-[#FF758F] text-white font-bold text-xs flex items-center justify-center shadow-sm">
                  {rev.avatar}
                </div>
                <div>
                  <h3 className="font-bold text-xs sm:text-sm text-[#1A1A2E]" style={{ fontFamily: 'Baloo 2, sans-serif' }}>
                    {rev.name}
                  </h3>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-medium">
                    <CheckCircle size={11} /> Verified Customer
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

