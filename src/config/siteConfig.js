// ============================================================
// src/config/siteConfig.js
// Central Configuration for Tickles N Treats Website
// Single source of truth for ordering URLs, contact info & placeholders
// ============================================================

export const ORDER_LINKS = {
  zomato: 'https://share.google/TAbE2KDEOfcm3TTLQ',
  swiggy: 'https://share.google/auQID0t0rQo5frT2B',
};

export const SITE_CONFIG = {
  name: 'Tickles N Treats',
  tagline: 'Where Every Bite Tickles Your Soul ✨',
  subTagline: 'Patisserie • Cafe • Indoor Play Area — Sia Heights, Shankar Nagar, Raipur.',
  address: '1st floor, Sia heights, opp. Harishankar school, Geetanjali Colony, Shankar Nagar, Raipur, Chhattisgarh 492004',

  // ---------------------------------------------------------------------------
  // CLIENT CONTACT & SOCIAL LINKS
  // Set to empty string until real values are provided by the client.
  // The UI automatically hides placeholder elements until real values are present.
  // ---------------------------------------------------------------------------

  // TODO: Replace with real client phone number (e.g. "+91 98765 43210")
  phone: '',

  // TODO: Replace with real WhatsApp number (no '+', no spaces, e.g. "919876543210")
  whatsapp: '',

  // TODO: Replace with real Instagram handle (e.g. "@ticklesntreats_raipur")
  instagram: '',

  // TODO: Replace with real Instagram URL (e.g. "https://www.instagram.com/ticklesntreats_raipur")
  instagramUrl: '',

  // Verified Online Ordering URLs
  zomatoUrl: ORDER_LINKS.zomato,
  swiggyUrl: ORDER_LINKS.swiggy,

  // Location & Map
  googleMapsUrl: 'https://maps.google.com/?q=Tickles+N+Treats+Shankar+Nagar+Raipur',

  // TODO: Replace with verified Google review direct URL once confirmed by client
  googleReviewUrl: '',

  // Verified Business Information
  rating: 4.6,
  openHours: 'Daily: 12:00 PM – 11:00 PM',
};

// Check if a configuration string is real and not a dummy/placeholder
export const isConfigured = (val) => {
  if (!val || typeof val !== 'string') return false;
  const trimmed = val.trim();
  if (trimmed === '') return false;
  // Flag XXXXXXXXXX or dummy placeholders
  if (/X{3,}/i.test(trimmed)) return false;
  return true;
};

export const hasRealPhone = () => isConfigured(SITE_CONFIG.phone);
export const hasRealWhatsApp = () => isConfigured(SITE_CONFIG.whatsapp);
export const hasRealInstagram = () => isConfigured(SITE_CONFIG.instagram) && isConfigured(SITE_CONFIG.instagramUrl);
export const hasRealGoogleReview = () => isConfigured(SITE_CONFIG.googleReviewUrl);

export default SITE_CONFIG;

