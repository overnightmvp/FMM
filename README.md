# Fort Myers Labor Only Movers — AI-Optimized Lead Gen Site

## Project Overview

**Business:** Labor-only moving lead generation for Fort Myers, FL
**Model:** $75/lead sold to FlexHelp, Inc. (Thumbtack Top Pro, 247+ reviews, 4.9★)
**Tech:** Static HTML/CSS/JS (no build system) — AI-crawler visible from day 1
**Deploy:** GitHub Pages (auto-deploys from `main`) · also works on Netlify
**GitHub:** `https://github.com/overnightmvp/FMM.git`
**Live site:** `https://fortmyerslaboronlymovers.com/`

---

## Recent Updates (Latest Commits)

| Commit | Description |
|--------|-------------|
| `1bdaadd` | **fix:** correct relative asset paths in all blog pages — fixed `/blog/` subdirectory CSS/JS references |
| `d2879ca` | **perf:** optimize analytics loading and fix font 404 errors — removed redundant GA4, added defer to GTM, updated font paths |
| `b9677a0` | **feat(analytics):** install GA4 and GTM tracking across all 20 HTML pages |
| `c836512` | **perf(pagespeed):** fix contrast, add main landmark, fix headings, defer JS — achieve 100 score |

---

## Current Project Status

### ✅ Completed

- **Font Loading Fixed** — Corrected all 5 font paths in `assets/fonts.css` (Inter-Regular, Inter-Medium, Inter-SemiBold, Inter-Bold, Inter-ExtraBold)
- **Blog Paths Fixed** — Corrected relative asset paths in all 9 blog pages (`/blog/` subdirectory)
- **Analytics Installed** — GA4 (Measurement ID: `G-9HT66TRLBB`) + GTM (Container: `GTM-NP2GZLLJ`) across all 20 HTML pages
- **Performance Optimized** — Removed redundant GA4 gtag.js (~150 KiB saved), added `defer` attribute to GTM script
- **Deployed to Netlify** — Live at https://deft-beignet-56707a.netlify.app/

### ⚠️ Pending (User Action Required)

1. **Add GA4 Configuration Tag in GTM UI** ← CRITICAL BLOCKER
   - Go to https://tagmanager.google.com/ → Select `GTM-NP2GZLLJ`
   - **Tags** → **New** → Select **Google Analytics: GA4 Configuration**
   - **Measurement ID:** `G-9HT66TRLBB`
   - **Trigger:** All Pages
   - **Save & Publish**

2. **Verify Performance Improvements**
   - Run PageSpeed Insights on https://deft-beignet-56707a.netlify.app/
   - Verify: Font 404s resolved, unused JS reduced, performance score improved
   - DevTools Network tab: All font files should return 200 status

3. **Verify Analytics Tracking**
   - GA4 Real-Time: Pageviews appearing after GTM publish
   - Form submission: `generate_lead` event fires with $75 value

### 📊 Expected Performance Gains

| Metric | Before | After | Status |
|--------|--------|-------|--------|
| Font 404 Errors | 4 | ✅ 0 | Fixed |
| Unused JavaScript | 225 KiB | ~75 KiB | Optimized |
| Render Blocking | GTM + GA4 | ✅ GTM deferred | Optimized |
| Analytics System | Redundant dual load | ✅ Unified (GTM only) | Optimized |

---

## Quick Start

```bash
# Preview locally
open landing-page/index.html

# Push to GitHub (auto-deploys to GitHub Pages)
git add .
git commit -m "feat: description"
git push origin main
# Live at: https://overnightmvp.github.io/FMM/

# Deploy to Netlify (drag & drop alternative)
# → netlify.com/drop → drag fort-myers-movers/ folder
```

See `CLAUDE.md` for Claude Code session guidance.

---

## Before Going Live: 4 Required Replacements

1. **`landing-page/assets/movers.js`** line 9:
   ```
   FORM_ENDPOINT: 'https://formspree.io/f/YOUR_FORM_ID'
   ```
   → Replace `YOUR_FORM_ID` with actual Formspree form ID (all forms fail silently until fixed)

2. **`landing-page/index.html`** line 42 (GTM):
   ```
   'GTM-XXXXXXX'
   ```
   → Replace with actual Google Tag Manager container ID

3. **`landing-page/assets/movers.js`** line 12:
   ```
   GA4_ID: 'G-XXXXXXXXXX'
   ```
   → Replace with actual GA4 Measurement ID (zero tracking until fixed)

4. **`landing-page/assets/movers.js`** line 10:
   ```
   PHONE_NUMBER: '(904) 479-8844'
   ```
   → (904) is Jacksonville area code — Fort Myers is **(239)**. Get a Google Voice 239 number.

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
│   ├── design-system.md                  ← CSS token reference — all variables + components
│   ├── brand-system.html                 ← Visual brand guide — open in browser
│   ├── AI-VISIBILITY-STRATEGY.md         ← llm.txt / robots.txt / Schema.org playbook
│   ├── SEO-CONTENT-STRATEGY.md           ← Keyword targets + content calendar
│   ├── market-intel.md                   ← Competitor analysis + market data
│   └── next-steps-roadmap.md             ← Week 1 → Month 3 action plan
├── .planning/
│   └── todos/                            ← GSD task tracking (pending/ and done/)
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
