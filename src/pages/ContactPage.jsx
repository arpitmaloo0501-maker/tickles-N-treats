import { useState } from 'react';
import { MapPin, Phone, Clock, MessageCircle, Navigation, ExternalLink, Sparkles, Map } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import SEO from '../components/SEO';
import { SITE_CONFIG, hasRealPhone, hasRealWhatsApp, hasRealInstagram } from '../config/siteConfig';

export default function ContactPage() {
  const [showMap, setShowMap] = useState(false);
  const showPhone = hasRealPhone();
  const showWhatsApp = hasRealWhatsApp();
  const showInsta = hasRealInstagram();

  return (
    <div className="min-h-screen bg-[#FFF8F0] page-enter">
      <SEO
        title="Contact Us & Location"
        description="Find Tickles N Treats at 1st Floor Sia Heights, Shankar Nagar, Raipur. Operating hours, direct Google Maps directions, phone and WhatsApp contact."
        canonical="https://ticklesntreats.in/contact"
      />

      <Breadcrumb items={[{ label: 'Contact & Location' }]} />

      {/* Header */}
      <section className="pt-10 pb-8 px-4 sm:px-8 text-center bg-white border-b border-[#F3F4F6]">
        <div className="max-w-4xl mx-auto">
          <span
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold mb-3"
            style={{ background: '#FFD6E0', color: '#FF4D8D', fontFamily: 'Nunito, sans-serif' }}
          >
            <Sparkles size={14} /> Get in Touch
          </span>
          <h1
            className="text-3xl sm:text-5xl font-black text-[#1A1A2E] mb-3"
            style={{ fontFamily: 'Baloo 2, sans-serif' }}
          >
            Find &amp; <span style={{ color: '#FF4D8D' }}>Connect With Us</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto" style={{ fontFamily: 'Nunito, sans-serif' }}>
            We're located in the heart of Shankar Nagar, Raipur. Drop by for a meal, book a party, or say hello!
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Info cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Address Card */}
            <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FF4D8D]/15 text-[#FF4D8D] flex items-center justify-center shrink-0">
                <MapPin size={24} />
              </div>
              <div className="space-y-1">
                <h2 className="font-bold text-base text-[#1A1A2E]" style={{ fontFamily: 'Baloo 2, sans-serif' }}>
                  Our Location
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  {SITE_CONFIG.address}
                </p>
                <div className="pt-2">
                  <a
                    href={SITE_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1A1A2E] text-white hover:bg-[#FF4D8D] text-xs font-bold transition-all shadow-sm active:scale-95"
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    <Navigation size={13} />
                    Get Google Maps Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#3ECFB2]/15 text-[#0D9488] flex items-center justify-center shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h2 className="font-bold text-base text-[#1A1A2E]" style={{ fontFamily: 'Baloo 2, sans-serif' }}>
                  Operating Hours
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  Open Daily (Monday – Sunday)
                </p>
                <p className="text-sm font-bold text-gray-800 mt-1" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  12:00 PM onwards
                </p>
              </div>
            </div>

            {/* Direct Connect Options */}
            {(showPhone || showWhatsApp || showInsta) && (
              <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm space-y-3">
                <h3 className="font-bold text-base text-[#1A1A2E]" style={{ fontFamily: 'Baloo 2, sans-serif' }}>
                  Quick Contact
                </h3>

                {showPhone && (
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 hover:bg-[#FFD6E0]/40 transition-colors text-xs sm:text-sm text-gray-800 font-semibold"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#3ECFB2] text-white flex items-center justify-center">
                      <Phone size={16} />
                    </div>
                    <span>{SITE_CONFIG.phone}</span>
                  </a>
                )}

                {showWhatsApp && (
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-2xl bg-gray-50 hover:bg-emerald-50 transition-colors text-xs sm:text-sm text-gray-800 font-semibold"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#25D366] text-white flex items-center justify-center">
                        <MessageCircle size={16} />
                      </div>
                      <span>Chat on WhatsApp</span>
                    </div>
                    <ExternalLink size={14} className="text-gray-400" />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Map Container (7 cols) */}
          <div className="lg:col-span-7 bg-white p-4 sm:p-6 rounded-3xl border border-gray-100 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold text-base text-[#1A1A2E]" style={{ fontFamily: 'Baloo 2, sans-serif' }}>
                  Interactive Map
                </h3>
                <p className="text-xs text-gray-500" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  Sia Heights, Shankar Nagar, Raipur
                </p>
              </div>
              <a
                href={SITE_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#FF4D8D] hover:underline flex items-center gap-1"
              >
                Open in App <ExternalLink size={12} />
              </a>
            </div>

            {/* Performance: Map loaded lazily or on tap */}
            <div className="relative rounded-2xl overflow-hidden bg-gray-100 min-h-[360px] sm:min-h-[420px] flex items-center justify-center border border-gray-200">
              {showMap ? (
                <iframe
                  title="Tickles N Treats Sia Heights Raipur Google Map Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.5484803766777!2d81.6605808!3d21.2490764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28ddb4851897c1%3A0x8d79d1dce6d59236!2sTickles%20N%20Treats!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="420"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              ) : (
                <div className="text-center p-6 space-y-3">
                  <div className="w-14 h-14 rounded-full bg-[#FF4D8D]/15 text-[#FF4D8D] flex items-center justify-center mx-auto shadow-sm">
                    <Map size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-[#1A1A2E]" style={{ fontFamily: 'Baloo 2, sans-serif' }}>
                      Sia Heights Google Map
                    </h4>
                    <p className="text-xs text-gray-500 max-w-xs mx-auto" style={{ fontFamily: 'Nunito, sans-serif' }}>
                      Click below to load the live interactive map view.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowMap(true)}
                    className="px-6 py-2.5 rounded-full bg-[#1A1A2E] text-white hover:bg-[#FF4D8D] text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer"
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    Load Interactive Map 🗺️
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

