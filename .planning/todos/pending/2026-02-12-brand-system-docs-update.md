---
created: 2026-02-12T05:30
title: Brand system, design-system docs, and README/CLAUDE.md update
area: docs
files:
  - README.md
  - landing-page/assets/movers.css
  - landing-page/index.html
---

## Problem

The project has no CLAUDE.md (Claude Code session guidance), no design-system reference doc, and no brand system. README.md was written before Round-2 CRO changes and doesn't reflect current file structure or completed work.

Additionally, the brand exists only in code (CSS variables) with no standalone brand guide — making it impossible to generate consistent creatives, hand off to designers, or replicate for new markets without reading movers.css manually.

## Solution

### 1. Update README.md
- Remove Round-1/Round-2 completion notes — just describe current state
- Update file structure (`.planning/` dir now exists)
- Update "Before Going Live" section — still 3 blockers (Formspree, GA4, 239 area code)
- Add link to CLAUDE.md for AI session context

### 2. Generate CLAUDE.md (project instructions for Claude Code)
Place at: `fort-myers-movers/CLAUDE.md`
Cover:
- Project overview (labor-only lead gen, static HTML/CSS/JS, no build system)
- Key files and their roles
- Design system: the 6 CSS variables to understand color/type system
- Current deployment: GitHub Pages via `overnightmvp/FMM` repo
- 3 critical blockers before going live (Formspree, GA4, phone number)
- Content page pattern (all inherit movers.css + movers.js)
- DO NOT / avoid patterns (no build system, no npm, no framework)

### 3. Create design-system.md
Place at: `docs/design-system.md`
Document all CSS custom properties from movers.css:
- Color tokens (primary, accent, trust, warning, text, border, bg)
- Typography scale (font-size-xs through 4xl, font-family, line heights)
- Spacing/radius/shadow tokens
- Component inventory (buttons, cards, form, trust bar, step cards, etc.)
- Usage examples inline

### 4. Create brand-system HTML page
Place at: `docs/brand-system.html`
A standalone browser-viewable brand reference page covering:

**Brand Identity**
- Primary wordmark: "Fort Myers Movers" (Inter 800, --color-primary)
- Secondary logo treatment: wordmark + "Labor Only · Licensed & Insured" tagline
- Brand mark / icon: a stylized box/truck using pure CSS/SVG (no image dependency)
- SVG exports inline (user can copy/save as .svg)
- PNG generation prompts (see creative prompts section)
- Editable source: movers.css variables listed inline

**Colour System**
| Name | Variable | Hex | Usage |
|------|----------|-----|-------|
| Primary | --color-primary | #1e3a8a | Headers, nav, trust |
| Primary Dark | --color-primary-dark | #1a3070 | Hover states |
| Accent / CTA | --color-accent | #f97316 | All CTAs, buttons |
| Accent Hover | --color-accent-hover | #ea6c0a | Button hover |
| Trust Green | --color-trust | #16a34a | Trust bar bg |
| Warning | --color-warning | #dc2626 | Form errors |
| Text | --color-text | #1f2937 | Body copy |
| Text Muted | --color-text-muted | #6b7280 | Captions |
| Border | --color-border | #e5e7eb | Dividers |
| BG Alt | --color-bg-alt | #f9fafb | Section alt bg |

**Typography**
- Headline: Inter 800 (--font-size-3xl to 4xl, line-height 1.1)
- Subhead: Inter 700 (--font-size-xl to 2xl)
- Body: Inter 400/600 (--font-size-base, line-height 1.6)
- Label/badge: Inter 700 uppercase tracking-wide (--font-size-sm)
- Scale: xs=0.75rem, sm=0.875rem, base=1rem, lg=1.125rem, xl=1.25rem, 2xl=1.5rem, 3xl=2rem, 4xl=2.5rem

**Web-Ready Brand Elements (SVG)**
5 abstract visual elements suitable for website use:
1. Moving box icon (open top, inner flaps)
2. Truck silhouette (side view, minimal)
3. Star burst / review badge
4. Shield checkmark (licensed & insured)
5. Location pin with house

**Brand Guidelines (inline section)**
- Logo clear space: min 16px on all sides
- Never stretch, recolor, or add effects to wordmark
- CTA buttons always --color-accent, never primary blue
- Trust bar always --color-trust green, sticky at top
- White text on primary/accent/trust backgrounds only

### 5. Creative Generation Prompts
Add a `## AI Creative Prompts` section to brand-system.html (or separate .md):

**Logo/Mark prompts (for Midjourney / DALL-E / Ideogram):**
```
"Minimalist wordmark logo for 'Fort Myers Movers', moving company,
clean sans-serif font, navy blue #1e3a8a and orange #f97316 color palette,
professional, trustworthy, white background, vector style"
```

**Brand mark only:**
```
"Simple geometric icon for a moving company: abstract moving box or truck,
navy blue and orange, minimal flat design, suitable for favicon, square format"
```

**Hero background texture:**
```
"Abstract geometric pattern, navy blue and white, subtle diagonal lines or
dot grid, suitable for website hero section background, professional, clean"
```

**Social media creative (before/after move):**
```
"Split screen before/after moving day photo style, left: cluttered living room
boxes, right: clean organized new home, bright Florida light, warm tones,
editorial photography style, no text"
```

**Google Display ad creative:**
```
"Clean orange CTA banner ad, text 'Labor-Only Movers · From $300',
white sans-serif typography, Florida theme, professional moving company,
300x250 and 728x90 formats"
```
