# Fort Myers Labor Only Movers — AI-Optimized Lead Gen Site

## Project Overview

**Business:** Labor-only moving lead generation for Fort Myers, FL
**Model:** $75/lead sold to FlexHelp, Inc. (Thumbtack Top Pro, 247+ reviews, 4.9★)
**Tech:** Static HTML/CSS/JS (no build system) — AI-crawler visible from day 1
**Deploy:** Netlify or direct to Hostinger
**GitHub:** `https://github.com/overnightmvp/FMM.git`
**Live site:** `https://fortmyerslaboronlymovers.com/`

---

## Quick Start

```bash
# Preview locally
open landing-page/index.html

# Deploy to Netlify (drag & drop)
# → netlify.com/drop → drag fort-myers-movers/ folder

# Push to GitHub
git init
git remote add origin https://github.com/overnightmvp/FMM.git
git add .
git commit -m "feat: initial AI-optimized site build"
git push -u origin main
```

---

## Before Going Live: 3 Required Replacements

1. **`landing-page/assets/movers.js`** line 9:
   ```
   FORM_ENDPOINT: 'https://formspree.io/f/YOUR_FORM_ID'
   ```
   → Replace `YOUR_FORM_ID` with actual Formspree form ID

2. **`landing-page/index.html`** line 42 (GTM):
   ```
   'GTM-XXXXXXX'
   ```
   → Replace with actual Google Tag Manager container ID

3. **`landing-page/assets/movers.js`** line 12:
   ```
   GA4_ID: 'G-XXXXXXXXXX'
   ```
   → Replace with actual GA4 Measurement ID

See `systems/launch-checklist.md` for full pre-launch verification.

---

## File Structure

```
fort-myers-movers/
├── README.md                              ← This file
├── llm.txt                                ← AI brand authority (GPTBot, ClaudeBot, Perplexity)
├── robots.txt                             ← Explicit AI crawler permissions
├── landing-page/
│   ├── index.html                         ← Main conversion page (9 sections)
│   └── assets/
│       ├── movers.css                     ← Full design system (6-variable theming)
│       └── movers.js                      ← Calculator + form + GA4
├── content-pages/                         ← SEO pillar pages (6 cities/services)
│   ├── labor-only-moving-fort-myers.html  ← Primary pillar
│   ├── cape-coral-movers.html
│   ├── bonita-springs-movers.html
│   ├── naples-moving-help.html
│   ├── loading-unloading-help.html
│   └── packing-unpacking-fort-myers.html
├── blog/                                  ← 8 SEO articles
│   ├── how-to-hire-moving-labor-fort-myers.md
│   ├── labor-only-vs-full-service-movers.md
│   ├── average-cost-labor-only-moving-florida.md
│   ├── moving-checklist-fort-myers.md
│   ├── tips-loading-moving-truck.md
│   ├── best-time-to-move-fort-myers.md
│   ├── moving-cape-coral-fl.md
│   └── pod-container-loading-service.md
├── systems/
│   ├── lead-routing-setup.md              ← Formspree → Zapier → Sheets → Contractor
│   ├── launch-checklist.md               ← Pre-launch verification steps
│   └── pricing-guide.md                  ← Rate card + contractor pricing
├── docs/
│   ├── AI-VISIBILITY-STRATEGY.md         ← llm.txt / robots.txt / Schema.org playbook
│   ├── SEO-CONTENT-STRATEGY.md           ← Keyword targets + content calendar
│   ├── market-intel.md                   ← Competitor analysis + market data
│   └── next-steps-roadmap.md             ← Week 1 → Month 3 action plan
└── ads/                                  ← (future: facebook-strategy.md, google-ads-strategy.md)
```

---

## AI Visibility Layer (Competitive Moat)

The current live site (React/Hostinger) is invisible to GPTBot, ClaudeBot, and PerplexityBot. Our static HTML rebuild wins on day 1.

| Asset | Purpose | Status |
|---|---|---|
| `llm.txt` | First-party brand facts for LLMs | ✅ Done |
| `robots.txt` | Explicit AI crawler Allow directives | ✅ Done |
| Schema.org MovingCompany | Rich results + AI citations | ✅ Done |
| Schema.org FAQPage | FAQ rich results | ✅ Done |
| Static HTML | Full content in initial response | ✅ Done |

---

## Theming for New Markets

To replicate for a new city, update 6 CSS variables + find/replace city names:

```css
/* movers.css — change these 6 lines to rebrand */
--color-primary:      #1e3a8a;   /* Main brand color */
--color-primary-dark: #1a3070;
--color-accent:       #f97316;   /* CTA button color */
--color-accent-hover: #ea6c0a;
--color-trust:        #16a34a;   /* Trust bar color */
--font-family: 'Inter', sans-serif;
```

Then:
1. Find/replace: `Fort Myers` → `[New City]`
2. Find/replace: `(904) 479-8844` → `[New Phone]`
3. Update Schema.org `areaServed` arrays
4. Update `llm.txt` with new city info
5. New Formspree form ID
6. Push to new repo/subdirectory

Estimated: 2–3 hours per new city.

---

## Revenue Model

- **Lead price:** $75/qualified lead (exclusive)
- **Target volume:** 300+ leads/month by Month 3
- **Contractor payment:** Net 15 via Wave invoice
- **Month 3 target:** $22,500+ revenue

See `docs/market-intel.md` for full financial projections.
