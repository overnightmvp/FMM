---
phase: "02"
plan: "03"
name: "Landing Page UI/CRO Overhaul"
subsystem: "landing-page"
tags: ["html", "cro", "form", "ux", "trust-signals", "quote-form"]
completed: "2026-02-15"
duration: "~8 minutes"

dependency-graph:
  requires:
    - "02-01 — CSS/JS foundation (movers.css quote-layout classes, form styles, movers.js initSinglePageForm)"
    - "02-02 — Dashboard expansion (no direct dependency)"
  provides:
    - "Fully overhauled landing-page/index.html with single-page quote form"
    - "All UI/CRO changes applied: trust signals, step cards, stats bar, CTAs"
  affects:
    - "02-04 — Blog Hub (navigation links intact)"
    - "movers.js initSinglePageForm() — must wire up fmm- IDs which are now live in HTML"

tech-stack:
  added: []
  patterns:
    - "quote-layout: 1fr 2fr CSS grid (desktop), form-first on mobile via order"
    - "fmm- ID prefix convention for all single-page form elements"
    - "Hidden form fields pattern for Formspree submission"

key-files:
  created: []
  modified:
    - "landing-page/index.html"

decisions:
  - id: "D19"
    decision: "Trust marquee simplified to single repeated string vs. varied items"
    rationale: "Plan spec: 'Thumbtack Top Pro · 247+ Verified Reviews' — focused trust message > scattered claims"
  - id: "D20"
    decision: "Step card order: emoji first, step-number second (top to bottom)"
    rationale: "With flex-direction:column from 02-01 CSS, visual reads emoji (icon) then orange number circle"
  - id: "D21"
    decision: "Stats bar 4.9★ split: yellow ★ inline span + orange number text"
    rationale: "Yellow star provides color distinction; orange number aligns with var(--color-accent) system"

metrics:
  duration: "~8 minutes"
  completed: "2026-02-15"
  tasks-completed: 1
  tasks-total: 1
---

# Phase 02 Plan 03: Landing Page UI/CRO Overhaul Summary

**One-liner:** Full landing page overhaul — single-page quote form (fmm- IDs, quote-layout grid), ✅ trust badges centered mobile, simplified trust marquee, emoji-first step cards, split yellow/orange stats, all CTAs with emojis.

## What Was Built

Applied 9 UI/CRO changes to `/Users/toshioj/Projects/dojjjo/fort-myers-movers/landing-page/index.html` (793 lines total).

## Changes Applied

### Change 1: Header Phone — 📞 Emoji
- **Before:** `(904) 479-8844`
- **After:** `📞 (904) 479-8844`
- **Line:** 133

### Change 2: Trust Bar Simplified
- **Before:** 6 rotating items (rating, #1 mover, experience, moves, licensed, phone)
- **After:** Single message repeated 6x: `⭐ Thumbtack Top Pro · 247+ Verified Reviews`
- **Result:** Focused trust claim, white text on green marquee background

### Change 3: Trust Badges — ✅ Emojis, Centered Mobile
- **Before:** `<span class="check">✓</span>` inside each trust-item
- **After:** `✅` emoji prefix directly in text
- **Added:** `style="justify-content:center; text-align:center"` on `.trust-row`
- **4 badges:** Licensed & Insured, Thumbtack Top Pro, Same-Day Available, 247+ 5-Star Reviews

### Change 4: How It Works — Emoji Above Number
- **Before:** `step-number` then `step-icon` (number first)
- **After:** `step-icon` then `step-number` (emoji first, orange circle number below)
- **All 3 cards updated:** 📋, 🚛, ✅

### Change 5: Stats Bar — Yellow Star, Orange Numbers
- **Before:** `<div class="stat-number">4.9★</div>`
- **After:** `<div class="stat-number"><span style="color:#f59e0b">★</span> 4.9</div>`
- **4 stats:** Thumbtack Rating, Verified Reviews, Experience, Moves Completed

### Change 6: Form Section Header — Plain White, User-Friendly
- **Section:** `style="background:white"` (no gradient)
- **Label:** "Free Quote · Takes 60 Seconds"
- **H2:** "Tell Us About Your Move"
- **Sub:** "Get your price instantly — no commitment, no surprise fees."

### Change 7: Multi-Step Form Replaced
- **Removed:** Entire `multistep-wrap` div with step-1/step-2/step-3 structure (~150 lines)
- **Added:** Single-page quote form with:
  - 9 visible fields: move-type, bedrooms, name, email, phone, date, from, to, upgrades
  - 10 hidden fields: all fmm-h- prefixed for Formspree submission
  - Live crew estimate display (fmm-movers-count, fmm-hours-count)
  - Price breakdown (fmm-price-desc, fmm-base-price, fmm-total-price)
  - 3 add-on checkboxes: truck (+$150), assembly (+$75), stairs (+$50)
  - Success/error state divs
- **Layout:** `.quote-layout` (1fr 2fr desktop grid, mobile form-first via CSS order)
- **Left panel:** Review card + 5 trust signals
- **Right panel:** `.quote-form-card` with all form fields

### Change 8: All CTA Buttons — Emojis Added
| Button | Before | After |
|--------|--------|-------|
| Hero primary | "Get Instant Quote" | "Get My Free Quote 🚚" |
| Hero card | "Lock This Price — Book Now" | "Book Your Crew 📅" |
| Journey section CTA | "Start Your Quote — Takes 2 Minutes" | "Get Started — Takes 60 Seconds 🚚" |
| Reviews Thumbtack link | "See All 247+ Reviews on Thumbtack →" | "⭐ See All 247+ Reviews on Thumbtack" |
| Form submit | (new) | "Get My Free Quote 🚚" |
| Mobile sticky bar | "Get Free Quote" | "Get Free Quote 🚚" |

### Change 9: Desktop 1fr 2fr Grid Layout
- `.quote-layout` CSS from 02-01 handles grid automatically
- HTML structure: `.quote-layout-trust` (left, order:2 mobile) + `.quote-layout-form` (right, order:1 mobile)
- No additional HTML changes needed beyond correct structure

## Verification Results

All checks passed:
- `grep "📞"` → line 133 (header), line 148 (ghost button), line 787 (mobile bar)
- `grep "fmm-bedrooms"` → lines 622-623
- `grep "quote-layout"` → lines 593, 595, 610
- `grep "fmm-quote-form"` → line 714
- `grep "Tell Us About Your Move"` → line 590
- `grep "Thumbtack Top Pro · 247"` → lines 142, 187-193
- `grep "multistep-wrap"` → no results (correctly removed)
- File length: 793 lines (above 700 minimum)

## Deviations from Plan

None — plan executed exactly as written.

## Next Phase Readiness

- movers.js `initSinglePageForm()` (built in 02-01) must be wired: it targets `#fmm-bedrooms`, `#fmm-movers-count`, `#fmm-hours-count`, `#fmm-submit-btn`, `#fmm-quote-form` — all IDs now live in HTML
- Formspree endpoint placeholder `YOUR_FORM_ID` needs replacement with real form ID before go-live
- 02-04 (Blog Hub) can proceed independently — no landing page dependencies
