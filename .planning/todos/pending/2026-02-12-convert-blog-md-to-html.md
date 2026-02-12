---
created: 2026-02-12T21:30
title: Convert 8 blog .md files to HTML pages
area: docs
files:
  - blog/index.html
  - blog/how-to-hire-moving-labor-fort-myers.md
  - blog/labor-only-vs-full-service-movers.md
  - blog/average-cost-labor-only-moving-florida.md
  - blog/moving-checklist-fort-myers.md
  - blog/tips-loading-moving-truck.md
  - blog/best-time-to-move-fort-myers.md
  - blog/moving-cape-coral-fl.md
  - blog/pod-container-loading-service.md
---

## Problem

`blog/index.html` hub page exists with 8 article cards, but all cards show "Coming soon" because the 8 blog articles only exist as `.md` files, not HTML pages. No internal SEO value and no destination for users who click through. Google cannot index article content.

## Solution

Convert each `.md` file to a full HTML page using the same header/footer/CSS template as the content pages (`landing-page/assets/movers.css`). Each article page needs:
- Trust bar + header + footer with footer-links row (2026 copyright)
- Article content converted from markdown to HTML (headings, paragraphs, lists)
- Article schema markup (BlogPosting) for SEO
- CTA section at bottom linking to `../landing-page/index.html#get-quote`
- Mobile CTA bar

Once HTML files exist, update `blog/index.html` cards to link to them (remove "Coming soon", add real `<a>` links).

File naming: keep same slugs, change extension:
- `how-to-hire-moving-labor-fort-myers.md` → `how-to-hire-moving-labor-fort-myers.html`
- etc.
