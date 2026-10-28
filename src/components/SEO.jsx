import { useEffect } from 'react';

export default function SEO({
  title,
  description = "Tickles N Treats — Raipur's most playful cafe & restaurant at Sia Heights, Shankar Nagar. 100% pure veg, artisanal food, and fun kids play area.",
  canonical,
}) {
  const fullTitle = title
    ? `${title} | Tickles N Treats Cafe Raipur`
    : 'Tickles N Treats | Best Cafe & Restaurant in Shankar Nagar, Raipur';

  useEffect(() => {
    // Document title
    document.title = fullTitle;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    // Open Graph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = fullTitle;

    // Open Graph Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.content = description;

    // Canonical link
    if (canonical) {
      let linkCan = document.querySelector('link[rel="canonical"]');
      if (!linkCan) {
        linkCan = document.createElement('link');
        linkCan.rel = 'canonical';
        document.head.appendChild(linkCan);
      }
      linkCan.href = canonical;
    }
  }, [fullTitle, description, canonical]);

  return null;
}

