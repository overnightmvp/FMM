---
phase: "02"
plan: "04"
name: "Content Pages Global UX Changes"
subsystem: "content-pages"
tags: ["html", "form", "ux", "quote-form", "journey-timeline", "self-contained"]
status: "complete"
completed: "2026-02-15"
duration: "~15 minutes"

dependency-graph:
  requires: ["02-01"]
  provides: ["embedded-quote-form-on-all-content-pages", "journey-timeline-on-all-content-pages"]
  affects: []

tech-stack:
  added: []
  patterns:
    - "Self-contained content pages — each page embeds its own quote form"
    - "Journey timeline narrative section before conversion form"
    - "Single-page fmm- prefixed form IDs for JS targeting"

key-files:
  created: []
  modified:
    - "content-pages/cape-coral-movers.html"
    - "content-pages/bonita-springs-movers.html"
    - "content-pages/labor-only-moving-fort-myers.html"
    - "content-pages/naples-moving-help.html"
    - "content-pages/loading-unloading-help.html"
    - "content-pages/packing-unpacking-fort-myers.html"

decisions:
  - id: "D19"
    decision: "Replaced multistep form entirely with new single-page fmm- form"
    rationale: "All 6 pages already had old multistep form with id=get-quote — replaced rather than duplicating to avoid two forms per page with conflicting IDs"
  - id: "D20"
    decision: "loading-unloading-help.html labels changed to Loading From / Delivering To"
    rationale: "Context-appropriate field labels for a loading/unloading service vs. moving service"

metrics:
  duration: "~15 minutes"
  completed: "2026-02-15"
---

# Phase 02 Plan 04: Content Pages Global UX Changes Summary

**One-liner:** Replaced multi-step quote form on all 6 content pages with embedded single-page fmm- form + journey-timeline section, making every page fully self-contained.

## What Was Built

All 6 content pages updated to be fully self-contained — visitors can get a quote without navigating to the landing page.

### Changes Applied to All 6 Pages

1. **Journey-timeline section added** — "Start to Finish" 6-step narrative section (copied from landing page) inserted before the quote form with `.journey-timeline` structure and `id="how-we-work"`

2. **Embedded single-page quote form replaced old multistep form** — The old `<section class="form-section" id="get-quote">` with 3-step multistep flow was replaced with the new `<section class="section" id="get-quote">` containing:
   - Move type select
   - `id="fmm-bedrooms"` home size select with live crew/price calculation
   - Full contact fields (name, email, phone, date, from/to)
   - Add-ons checkboxes (truck, assembly, stairs)
   - Live price summary with total
   - Formspree form submission
   - Success/error states

3. **CTA links updated** — All `../landing-page/index.html#get-quote` references replaced with `#get-quote` (same-page anchor)

4. **movers.js already present** — No changes needed (was already `<script src="../landing-page/assets/movers.js" defer>` on all pages)

5. **mobile-cta-bar already present** — No changes needed (was already on all 6 pages)

## Files Modified

| File | Changes |
|------|---------|
| `content-pages/cape-coral-movers.html` | Journey timeline + embedded form, CTA links updated |
| `content-pages/bonita-springs-movers.html` | Journey timeline + embedded form, CTA links updated |
| `content-pages/labor-only-moving-fort-myers.html` | Journey timeline + embedded form, CTA links updated |
| `content-pages/naples-moving-help.html` | Journey timeline + embedded form, CTA links updated |
| `content-pages/loading-unloading-help.html` | Journey timeline + embedded form, CTA link updated (no cta-banner in this page) |
| `content-pages/packing-unpacking-fort-myers.html` | Journey timeline + embedded form, CTA links updated |

## Verification Results

```
=== cape-coral-movers === 9 matches (fmm-bedrooms, get-quote, journey-timeline)
=== bonita-springs-movers === 9 matches
=== labor-only-moving-fort-myers === 9 matches
=== naples-moving-help === 9 matches
=== loading-unloading-help === 8 matches (no cta-banner in original — correct)
=== packing-unpacking-fort-myers === 9 matches
```

Zero remaining links to `../landing-page/index.html#get-quote` in content-pages directory.

## Decisions Made

- **D19:** Replaced multistep form entirely with new single-page fmm- form — all 6 pages already had the old multistep form; replacing prevents duplicate `id="get-quote"` conflicts
- **D20:** `loading-unloading-help.html` uses "Loading From / Delivering To" field labels instead of "Moving From / Moving To" for context-appropriate copy

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Pages already had old multistep form with id="get-quote"**

- **Found during:** Task 1 (reading cape-coral-movers.html)
- **Issue:** All 6 content pages already had a `<section class="form-section" id="get-quote">` with the OLD multi-step form — not the new single-page fmm- form. Plan said to "add" form but this would create duplicate id="get-quote" conflicts.
- **Fix:** Replaced old multistep form entirely with the new embedded single-page form
- **Files modified:** All 6 content pages
- **Commit:** 3be548b

**2. [Observation] mobile-cta-bar already present on all pages**

- All 6 pages already had `.mobile-cta-bar` — Plan Step F was pre-satisfied
- No changes needed

**3. [Observation] movers.js already present on all pages**

- All 6 pages already had `<script src="../landing-page/assets/movers.js" defer>` — Plan Step B was pre-satisfied
- No changes needed

## Git Operations

- Commit: `3be548b feat(02-04): embed quote form and Start to Finish section on all 6 content pages`
- Push: `git push origin main` — succeeded (ec5b70a..3be548b)
- All 6 pages live at fortmyerslaboronlymovers.com via Netlify auto-deploy

## Next Phase Readiness

All content pages are now fully self-contained. Phase 02 is complete (Plans 01-04 done):
- 02-01: CSS/JS Foundation (movers.css + movers.js)
- 02-02: Dashboard Expansion
- 02-03: Landing Page Overhaul
- 02-04: Content Pages Global UX Changes (this plan)

No blockers for future phases.
