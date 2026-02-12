---
created: 2026-02-12T00:00
title: Round-2 UI/CRO changes for fort-myers-movers
area: ui
files:
  - landing-page/assets/movers.css
  - landing-page/index.html
  - content-pages/labor-only-moving-fort-myers.html
  - content-pages/cape-coral-movers.html
  - content-pages/bonita-springs-movers.html
  - content-pages/naples-moving-help.html
  - content-pages/loading-unloading-help.html
  - content-pages/packing-unpacking-fort-myers.html
---

## Problem

10 UI/CRO improvements identified during a design audit. Full plan at:
`/Users/toshioj/.claude/plans/splendid-snuggling-marble.md`

Changes needed across movers.css, landing-page/index.html, and all 6 content pages.

## Solution

Implement in this order (optimize model per task complexity):

### movers.css (haiku) — all CSS in one pass:
1. **Bedroom 3+2 grid** — `.bedroom-options` → `grid-template-columns: repeat(6,1fr)`, `.bedroom-btn` spans 2, nth-child(4,5) spans 3
2. **Trust bar marquee** — remove sticky from `.site-header`, add sticky + `@keyframes marquee-scroll` + `.trust-marquee-track` to `.trust-bar`
3. **Step card header** — new `.step-card-header { display:flex; align-items:center; gap:12px }`, remove margins from `.step-number` and `.step-icon`
4. **Journey map** — convert from grid to flex with `min-width:920px` inside new `.journey-timeline-wrap { overflow-x:auto }`, remove old grid media query overrides
5. **Back link style** — new `.step-back-link` ghost text button class

### landing-page/index.html (haiku) — all HTML in one pass:
6. **theme-color meta + preconnect** — `<meta name="theme-color" content="#f97316">` + font preconnects
7. **Trust bar HTML** — replace static `<p>` with marquee structure (2× content for seamless loop)
8. **Step cards** — wrap `<div class="step-icon">` + `<div class="step-number">` in `.step-card-header` for all 3 cards
9. **Journey map wrap** — add `<div class="journey-timeline-wrap">` around existing `.journey-timeline`
10. **Back buttons** — move `back-2` above `.lead-form` in step-2, move `back-3` above `<form>` in step-3; change class to `.step-back-link`; remove from step-nav rows
11. **Footer** — add Estero + Lehigh Acres links to Service Areas column

### All 6 content pages (sonnet — complex multi-file template work):
12. **theme-color meta + preconnect** on all 6
13. **Trust bar marquee** on all 6 (same HTML as landing page)
14. **Table overflow-x** — wrap `<table class="pricing-table">` in `<div style="overflow-x:auto">` on 4 pages (not loading-unloading, not packing)
15. **Add movers.js** — `<script src="../landing-page/assets/movers.js" defer></script>` on all 6
16. **How It Works section** — 3-step `.steps-grid` with `.step-card-header` layout, insert after first content block
17. **2-review social proof block** — `.reviews-grid` with 2 `.review-card` divs, before footer
18. **Replace CTA banner with multi-step quote form** — full `#get-quote` section HTML from landing page
19. **Mobile CTA bar** — `<div class="mobile-cta-bar">` before `</body>`
20. **Fix logo href** — `href="/"` → `href="../landing-page/index.html"` on all 6
21. **Footer gap** — add Estero + Lehigh Acres links on all 6

### Critical fixes (haiku — simple string replacements):
22. **Formspree ID** — replace `YOUR_FORM_ID` in movers.js with real ID (USER MUST PROVIDE)
23. **GA4 ID** — replace `G-XXXXXXXXXX` in movers.js (USER MUST PROVIDE)
24. **Phone area code** — (904) is Jacksonville, not Fort Myers (239) — USER ACTION REQUIRED: get Google Voice 239 number
