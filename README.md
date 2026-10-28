# 🍰 Tickles N Treats — Cafe & Indoor Play Area Website

> Official website for **Tickles N Treats (TAT)**, Raipur's premier 100% pure vegetarian playful cafe, patisserie, and indoor kids adventure arena located at Sia Heights, Shankar Nagar.

---

## 🚀 Quick Start Guide

### 1. Requirements
- **Node.js**: v18.0.0 or higher
- **Package Manager**: `npm`

### 2. Installation
```bash
npm install
```

### 3. Local Development
Start the local Vite development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Code Quality & Linting
Run the fast Oxlint linter:
```bash
npm run lint
```

### 5. Production Build
Compile and bundle the multi-page application with automatic vendor chunk splitting:
```bash
npm run build
```
The compiled static assets will be created in the `dist/` directory.

### 6. Local Preview of Production Build
```bash
npm run preview
```

---

## 🌐 Deployment to Firebase Hosting

This project is pre-configured with `firebase.json` for Single Page Application (SPA) routing and HTTP caching headers (`max-age=31536000, immutable`).

1. Install Firebase CLI globally (if not already installed):
   ```bash
   npm install -g firebase-tools
   ```
2. Log in to Firebase:
   ```bash
   firebase login
   ```
3. Initialize or link your project:
   ```bash
   firebase use <your-firebase-project-id>
   ```
4. Build and deploy:
   ```bash
   npm run build
   firebase deploy --only hosting
   ```

---

## 🗺️ Multi-Page Architecture & Routes

Client-side routing is powered by **React Router v7** with code splitting (`React.lazy` + `Suspense`):

| Route | Page | Purpose |
|---|---|---|
| `/` | `HomePage.jsx` | Compact 4-5 screen home page: Hero, 3 Highlights, Order Online, Top 6 Must-Try Mini Carousel, 3-Review Teaser, Visit Strip |
| `/menu` | `MenuPage.jsx` | Full menu with sticky category tabs, instant search, and "Veg Only" toggle |
| `/play-area` | `PlayAreaPage.jsx` | Kids play arena showcase, safety & hygiene rules, birthday party packages |
| `/gallery` | `GalleryPage.jsx` | Filterable photo masonry grid with interactive lightbox (keyboard + touch swipe) |
| `/about` | `AboutPage.jsx` | The TAT story, 100% pure vegetarian pledge, and collapsible FAQ accordion |
| `/reviews` | `ReviewsPage.jsx` | 4.6★ Google rating scorecard, verified guest reviews, and direct Google Review CTA |
| `/reserve` | `ReservePage.jsx` | Table booking form with structured WhatsApp message redirect & delivery links |
| `/contact` | `ContactPage.jsx` | Address, opening hours, interactive Google Map, Call & WhatsApp actions |
| `*` | `NotFoundPage.jsx` | Branded 404 page with return buttons to Home and Menu |

---

## ✏️ How to Update Cafe Details & Menu

### 1. Updating Contact Info, Phone Numbers & Links
All cafe contact details, social links, and delivery links are centralized in:
📂 `src/config/siteConfig.js`

- **Phone Number**: Change `phone: ''` to the cafe's real phone (e.g. `'+919876543210'`). *(The Call button and phone links stay automatically hidden until a non-placeholder value is entered)*
- **WhatsApp**: Update `whatsapp: '91XXXXXXXXXX'` with the cafe's WhatsApp business number.
- **Instagram**: Update `instagram: ''` when the official handle is ready.
- **Zomato & Swiggy Links**:
  ```javascript
  export const ORDER_LINKS = {
    zomato: 'https://share.google/TAbE2KDEOfcm3TTLQ',
    swiggy: 'https://share.google/auQID0t0rQo5frT2B',
  };
  ```

### 2. Updating Menu Dishes & Prices
Dishes, categories, prices, and tags are maintained in:
📂 `src/data/menu.js` (and `src/data/menuData.js`)

Each menu item follows this structure:
```javascript
{
  id: 1,
  name: 'Arrabbiata Spaghetti',
  category: 'pasta',
  price: 240,
  veg: true,
  description: 'Spicy red tomato pasta with fresh basil, herbs, and grated parmesan cheese.',
  tag: 'Bestseller', // or 'Must-Try', 'Chef Special', null
  image: '/images/food-ai/arrabbiata-spaghetti.webp',
  isRealPhoto: false, // Set to true once a real photo from the cafe kitchen is uploaded!
}
```

---

## 📸 Image Guidelines & AI Food Photo Rules

- **Hero Image**: The cafe interior hero image (`/images/cafe-interior-hero.webp`) is locked and must not be replaced without authorization.
- **Real Photos**: Authentic venue and dish photos display a **"Real Photo 📸"** badge.
- **Serving Suggestions**: AI-generated food visualizations display a subtle **"Serving suggestion"** badge in compliance with ethical food marketing guidelines (`isRealPhoto: false`).
- **Optimization**: All images should be WebP format, 4:3 aspect ratio (1200x900 for desktop, 600x450 for mobile), with quality ~82-85 and file sizes under 200 KB.

---

## 📱 Mobile-First Features

- **Viewport Safe**: Built with `100svh` and `env(safe-area-inset-bottom)` to support modern iOS Safari notch & home bar.
- **Sticky Bottom Action Bar**: Fast 1-tap access on mobile to Menu, Order Online, Table Reservation, and Phone Call.
- **Touch-Friendly**: All clickable buttons and cards adhere to minimum 44x44px touch targets.
- **Zero Horizontal Overflow**: Verified across all standard mobile viewports (360px, 390px, 414px, 768px, 1024px, 1440px).

---

## 📄 License & Attribution
Designed & developed with ❤️ for **Tickles N Treats**, Raipur.
Copyright © 2026 Tickles N Treats. All rights reserved.
