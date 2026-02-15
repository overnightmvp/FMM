---
phase: "02"
plan: "01"
name: "CSS/JS Foundation — Button System, Step Cards, Single-Page Form"
subsystem: "frontend-assets"
tags: ["css", "javascript", "design-system", "forms", "pricing"]
status: "complete"
completed: "2026-02-15"
duration: "3 minutes"

dependency-graph:
  requires: []
  provides:
    - "Unified .btn-primary button size system (20px/40px padding, var(--font-size-lg))"
    - "Restyled .step-card with vertical flex layout and orange step-number"
    - "15+ new CSS classes for single-page quote form layout"
    - "initSinglePageForm() function in movers.js for form logic and Formspree submission"
  affects:
    - "02-03: Landing page HTML that uses .btn-primary-xl and .step-card"
    - "02-04: Content pages that use the new quote form CSS/JS"

tech-stack:
  added: []
  patterns:
    - "Single-page form with live pricing display using existing PRICING object"
    - "Hidden fields pattern for Formspree submission (fmm-h-* prefix)"
    - "Upgrade checkbox pattern with data-addon attribute for add-on pricing"

key-files:
  created: []
  modified:
    - "landing-page/assets/movers.css"
    - "landing-page/assets/movers.js"

decisions:
  - id: "D15"
    decision: ".btn-primary-xl size merged into .btn-primary (20px/40px padding, var(--font-size-lg))"
    rationale: "Single button size eliminates visual inconsistency across pages; .btn-primary-xl retains width:100% and border-radius:var(--radius-lg) for layout purposes only"
  - id: "D16"
    decision: "step-number background changed from var(--color-primary) navy to var(--color-accent) orange"
    rationale: "Orange step numbers create visual hierarchy distinction from navy card borders; matches benefit-card visual pattern"
  - id: "D17"
    decision: "initSinglePageForm() uses existing PRICING object — no data duplication"
    rationale: "Single source of truth for pricing data; changing PRICING object updates both multi-step and single-page forms simultaneously"
  - id: "D18"
    decision: "CSS variables use --font-size-* names (not --font-* shorthand as in plan)"
    rationale: "Matched to actual CSS custom property names in :root; plan used shorthand notation but implementation uses the correct names already defined in the file"

metrics:
  tasks-completed: 2
  tasks-total: 2
  files-modified: 2
  lines-added: 409
  commit: "1a85cf9"
---

# Phase 02 Plan 01: CSS/JS Foundation Summary

**One-liner:** Unified .btn-primary to 20px/40px padding, restyled step cards to vertical flex with orange numbers, added 15+ form CSS classes and initSinglePageForm() with live pricing and Formspree submission.

## What Was Built

### Task 1: movers.css Updates

**Button system unification:**
- `.btn-primary` padding updated from `18px 36px` to `20px 40px` (font-size was already `var(--font-size-lg)`)
- `.btn-primary-xl` size overrides (`font-size: var(--font-size-xl)` and `padding: 22px 48px`) removed — now inherits from `.btn-primary`
- `.btn-primary-xl` retains `width: 100%` and `border-radius: var(--radius-lg)` for full-width layout contexts

**Step card restyle:**
- `.step-card` padding changed from `36px 24px` to `28px` (matching benefit-card dimensions)
- `.step-card-header` changed from horizontal flex to `flex-direction: column`, `align-items: center`, `text-align: center`, `gap: 8px`
- `.step-number` background changed from `var(--color-primary)` (navy) to `var(--color-accent)` (orange #f97316)
- `.step-number` font-weight changed from 800 to 700
- `.step-icon` gained `order: 0` property

**Single-page form CSS (new classes appended):**
- `.quote-layout` — 1fr 2fr grid for trust sidebar + form
- `.quote-form-card` — white card with shadow for form container
- `.form-field`, `.form-label`, `.form-input`, `.form-select` — form field styling
- `.form-row-2` — 2-column grid for adjacent fields
- `.field-hint` — small helper text below fields
- `.crew-estimate`, `.crew-stat`, `.crew-label`, `.crew-value`, `.crew-divider` — crew display widget
- `.upgrades-section`, `.upgrades-title`, `.upgrade-item`, `.upgrade-checkbox`, `.upgrade-info`, `.upgrade-name`, `.upgrade-desc` — add-on checkboxes
- `.price-summary`, `.price-line`, `.price-total-line`, `.price-line-label`, `.price-line-value`, `.price-total-value` — price breakdown display
- `.price-deposit-note`, `.price-overtime-note`, `.form-urgency-note` — supplementary notes
- `.quote-layout-trust .review-card/stars/text/author` — trust sidebar reviews
- `.quote-trust-signals`, `.quote-trust-signal` — checkmark trust bullets

**Responsive breakpoints added:**
- `@media (max-width: 768px)` — quote-layout collapses to 1 column, form ordered first
- `@media (max-width: 480px)` — quote-form-card padding reduced, form-row-2 collapses to 1 column

### Task 2: movers.js Updates

**initSinglePageForm() function added:**
- Detects `#fmm-bedrooms` select element and returns early if not present (safe for all pages)
- `updateDisplay()` reads PRICING object (no duplication) and updates crew stats, price description, base price, and total
- Syncs `#fmm-h-bedrooms` and `#fmm-h-total` hidden fields on each bedroom selection change
- Addon checkboxes use `data-addon` attribute; `currentAddons` object tracks checked state
- Addon changes update `#fmm-h-addons` hidden field with human-readable label + price string
- `validateSingleForm()` checks 6 required fields (`fmm-name/email/phone/date/from/to`) and phone digit count
- `syncHiddenFields()` copies visible field values to `fmm-h-*` hidden counterparts before submission
- Fetch submission to `form.action` (Formspree URL set in HTML), with Accept: application/json header
- Success: hides form, shows `#fmm-form-success`, scrolls to it, fires `gtag lead_generated` event
- Error: shows `#fmm-form-error`, re-enables submit button

**DOMContentLoaded update:**
- Added `if (document.getElementById('fmm-bedrooms')) { initSinglePageForm(); }` after `initMultiStepForm()`
- Existing `initMultiStepForm()` and all other init calls preserved unchanged

## Deviations from Plan

### Auto-fixed Issues

None — plan executed exactly as written, with one clarification:

**CSS variable names:** The plan's form CSS block used shorthand notation (`var(--font-sm)`, `var(--font-lg)`, etc.) but the actual CSS file defines `--font-size-sm`, `--font-size-lg`, etc. All new CSS classes were written with the correct `--font-size-*` variable names to match the existing design system.

## Files Modified

| File | Lines Before | Lines After | Net Change |
|------|-------------|-------------|------------|
| `landing-page/assets/movers.css` | ~1147 | 1400 | +253 |
| `landing-page/assets/movers.js` | 377 | 523 | +146 |

## Next Phase Readiness

Plans 02-03 and 02-04 can now use:
- `.btn-primary` at unified size (no special XL class needed for size)
- `.btn-primary-xl` for full-width layout only
- `.step-card` with vertical layout and orange step numbers
- All `.quote-*`, `.form-*`, `.crew-*`, `.upgrade-*`, `.price-summary` classes
- `initSinglePageForm()` — auto-initializes when `#fmm-bedrooms` is present in HTML
