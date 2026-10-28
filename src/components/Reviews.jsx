// Reviews.jsx — Google review cards with star ratings
import { Star, ExternalLink } from 'lucide-react';
import { REVIEWS } from '../data/menuData';
import { SITE_CONFIG, hasRealGoogleReview } from '../config/siteConfig';

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={14}
          className={s <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 fill-gray-300'}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review, delay }) {
  return (
    <div
      className="card-hover fade-up p-6 rounded-3xl border border-[#F3F4F6] bg-white"
      style={{
        boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
        transitionDelay: `${delay}s`,
      }}
    >
      {/* Top row */}
      <div className="flex items-start gap-3 mb-4">
        {/* Avatar */}
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
          style={{ background: 'linear-gradient(135deg, #FF4D8D, #C4A8FF)' }}
          aria-hidden="true"
        >
          {review.avatar}
        </div>
        <div className="flex-1">
          <div
            className="font-bold text-[#1A1A2E] text-sm"
            style={{ fontFamily: 'Baloo 2, sans-serif' }}
          >
            {review.name}
          </div>
          <div className="flex items-center gap-2 mt-0.5">
            <StarRating rating={review.rating} />
            <span className="text-[#9CA3AF] text-xs" style={{ fontFamily: 'Nunito, sans-serif' }}>
              {review.date}
            </span>
          </div>
        </div>
        {/* Google G logo */}
        <div
          className="text-xs font-bold px-2 py-1 rounded-md"
          style={{ background: '#F1F3F4', color: '#4285F4', fontFamily: 'Nunito, sans-serif' }}
        >
          G
        </div>
      </div>
      {/* Review text */}
      <p
        className="text-[#6B7280] text-sm leading-relaxed"
        style={{ fontFamily: 'Nunito, sans-serif' }}
      >
        "{review.text}"
      </p>
    </div>
  );
}

export default function Reviews() {
  const ratingCounts = [5, 4, 3, 2, 1].map((s) => ({
    star: s,
    count: REVIEWS.filter((r) => r.rating === s).length,
    pct: (REVIEWS.filter((r) => r.rating === s).length / REVIEWS.length) * 100,
  }));

  const reviewUrl = hasRealGoogleReview() ? SITE_CONFIG.googleReviewUrl : SITE_CONFIG.googleMapsUrl;

  return (
    <section id="reviews" className="py-24 px-4 sm:px-8" style={{ background: 'white' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 fade-up">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4"
            style={{ background: '#FFF0F5', color: '#FF4D8D', fontFamily: 'Nunito, sans-serif' }}
          >
            💬 Reviews
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black text-[#1A1A2E] mb-4"
            style={{ fontFamily: 'Baloo 2, sans-serif' }}
          >
            What Our Guests{' '}
            <span style={{ color: '#FF4D8D' }}>Say</span>
          </h2>
          <p className="text-[#6B7280]" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Genuine reviews from our wonderful guests. We love you all! ❤️
          </p>
        </div>

        {/* Rating summary card */}
        <div
          className="max-w-sm mx-auto mb-12 p-8 rounded-3xl text-center fade-up"
          style={{
            background: 'linear-gradient(135deg, #FFF0F5, #E8DAFF)',
            boxShadow: '0 8px 32px rgba(255,77,141,0.15)',
          }}
        >
          <div
            className="text-7xl font-black mb-2"
            style={{ fontFamily: 'Baloo 2, sans-serif', color: '#1A1A2E' }}
          >
            {SITE_CONFIG.rating}
          </div>
          <div className="flex justify-center gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                size={22}
                className={s <= Math.round(SITE_CONFIG.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
              />
            ))}
          </div>
          <div className="text-[#6B7280] text-sm mb-5 font-semibold" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Verified Google Reviews
          </div>
          {/* Rating bars */}
          <div className="space-y-2">
            {ratingCounts.map(({ star, pct }) => (
              <div key={star} className="flex items-center gap-2 text-xs">
                <span className="w-4 text-right text-[#6B7280]" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  {star}
                </span>
                <Star size={10} className="text-yellow-400 fill-yellow-400" />
                <div className="flex-1 h-1.5 rounded-full bg-gray-200 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: `${pct}%`,
                      background: 'linear-gradient(135deg, #FF4D8D, #C4A8FF)',
                    }}
                  />
                </div>
                <span className="w-6 text-[#9CA3AF]" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  {Math.round(pct)}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Review cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((review, i) => (
            <ReviewCard key={review.id} review={review} delay={i * 0.1} />
          ))}
        </div>

        {/* Google review CTA */}
        <div className="text-center mt-12 fade-up">
          <a
            href={reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold transition-all hover:scale-105 shadow-lg"
            style={{
              fontFamily: 'Baloo 2, sans-serif',
              background: 'linear-gradient(135deg, #4285F4, #34A853)',
              boxShadow: '0 8px 24px rgba(66,133,244,0.35)',
            }}
          >
            <ExternalLink size={16} />
            Review us on Google
          </a>
        </div>
      </div>
    </section>
  );
}
