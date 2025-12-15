# FillGenie Marketing Website - Quick Start Guide

## 🚀 Project Overview

A modern, responsive marketing website for FillGenie built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 📁 Project Structure

```
fillgenie-site/
├── public/images/           # PhilGenie.png logo
├── src/
│   ├── components/
│   │   ├── common/         # Button, Card, Section
│   │   ├── layout/         # Header, Footer, Layout
│   │   ├── home/           # Hero, ProductDemo, etc.
│   │   └── pricing/        # PricingCards
│   ├── pages/              # Home, Pricing, ComingSoon
│   ├── App.tsx             # Router configuration
│   └── index.css           # Tailwind + custom styles
└── vercel.json             # Deployment config
```

## 🎨 Design System

### Colors
- **Warm Sand** (#FBF4E6) - Page backgrounds
- **Sunlit Amber** (#D98C4A) - Primary CTAs
- **Lavender Mist** (#B7A5D8) - Accents
- **Teal Softwave** (#6BA4A6) - Trust indicators
- **Text Main** (#4E3620) - Headings
- **Text Muted** (#7A6144) - Body text

### Components
- `<Button>` - Primary, secondary, text variants
- `<Card>` - Elevated containers with hover
- `<Section>` - Full-width sections with background options

## 🏃 Running the Project

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview build
npm run preview
```

## 📄 Current Pages

1. **Home** (`/`) - Full marketing page with 9 sections
2. **Pricing** (`/pricing`) - 3 tiers + FAQ
3. **Coming Soon** (`/coming-soon`) - Chrome extension placeholder

## 🌐 Deployment

Push to GitHub → Connect to Vercel → Auto-deploy

Domain: fill-genie.com

## 📝 Next Steps

- [ ] Add authentication pages (login/signup)
- [ ] Create detailed "How It Works" page
- [ ] Build contact form
- [ ] Add legal pages (Terms, Privacy)
- [ ] Replace placeholders with actual assets
- [ ] Set up Google Analytics

## 💡 Key Features

- ✅ Mobile-first responsive design
- ✅ Smooth scroll animations
- ✅ SEO optimized with meta tags
- ✅ Accessible (WCAG compliant HTML)
- ✅ Fast (Vite build, optimized assets)

## 📧 Contact

hello@fillgenie.com
