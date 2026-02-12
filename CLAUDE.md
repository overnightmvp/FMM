# Fort Myers Movers — Claude Code Project Guide

## Project Overview

**Type:** Static HTML/CSS/JS lead gen site — NO build system, NO npm, NO framework
**Business:** Labor-only moving leads for Fort Myers FL → sold to FlexHelp, Inc. at $75/lead
**Deploy:** GitHub Pages via `overnightmvp/FMM` repo, branch `main`
**Live site:** https://fortmyerslaboronlymovers.com/

---

## Key Files

| File | Role |
|------|------|
| `landing-page/index.html` | Main conversion page — multi-step quote form, hero, reviews, FAQ |
| `landing-page/assets/movers.css` | Full design system — 6 CSS variable tokens, all components |
| `landing-page/assets/movers.js` | Quote calculator, multi-step form logic, GA4, Formspree submit |
| `content-pages/*.html` | 6 SEO pillar pages — inherit movers.css + movers.js |
| `docs/design-system.md` | CSS token reference — all variables documented |
| `docs/brand-system.html` | Browser-viewable brand reference — colors, type, SVGs, creative prompts |

---

## Design System — 6 Core Variables

To understand or rebrand the site, these are the variables in `movers.css`:

```css
--color-primary:      #1e3a8a;   /* Navy — headers, nav, step numbers */
--color-primary-dark: #1a3070;   /* Dark navy — hover states */
--color-accent:       #f97316;   /* Orange — ALL CTA buttons */
--color-accent-hover: #ea6c0a;   /* Orange dark — button hover */
--color-trust:        #16a34a;   /* Green — sticky trust bar background */
--font-family: 'Inter', sans-serif;
```

---

## Content Page Pattern

All 6 content pages in `content-pages/` follow this structure:
1. `<link rel="stylesheet" href="../landing-page/assets/movers.css">` — shared CSS
2. `<script src="../landing-page/assets/movers.js" defer></script>` — shared JS
3. Sticky trust bar marquee → hero section → content → How It Works → quote form → reviews → footer → mobile CTA bar

Logo href: `href="../landing-page/index.html"` (not `/`)

---

## 4 Critical Blockers Before Going Live

These placeholders exist in the code right now — nothing works until these are replaced:

1. `movers.js` line 9 — `FORM_ENDPOINT: 'https://formspree.io/f/YOUR_FORM_ID'`
   → All form submissions fail silently. Sign up at formspree.io, paste real ID.
2. `landing-page/index.html` line 42 — `GTM-XXXXXXX`
   → No tag manager firing. Get GTM container ID from tagmanager.google.com.
3. `movers.js` line 12 — `GA4_ID: 'G-XXXXXXXXXX'`
   → Zero analytics collected. Get Measurement ID from Google Analytics.
4. `movers.js` line 10 — `PHONE_NUMBER: '(904) 479-8844'`
   → (904) is Jacksonville area code. Fort Myers is (239). Get Google Voice 239 number.

---

## Do NOT

- Add a build system (no `npm init`, no webpack, no vite, no package.json)
- Add a framework (no React, no Vue, no Astro)
- Move files out of their current directories (content-pages relative paths are hardcoded)
- Change `href="../landing-page/index.html"` on logo links — relative path is intentional
- Commit `.env` files or API keys

---

## Task Tracking

Pending todos: `.planning/todos/pending/`
Completed todos: `.planning/todos/done/`

To add a task: `/gsd:add-todo [description]`

---

## Deployment

```bash
git add .
git commit -m "feat: description"
git push origin main
# GitHub Pages auto-deploys from main branch
```

---

## Brand Reference

Open `docs/brand-system.html` in a browser for the full visual brand guide:
colors, typography, SVG elements, and AI creative generation prompts.
