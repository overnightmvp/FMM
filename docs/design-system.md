# Fort Myers Movers — Design System Reference

All tokens defined in `landing-page/assets/movers.css` `:root` block.

---

## Color Tokens

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | `#1e3a8a` | Headers, nav, hero bg, step number circles, primary backgrounds |
| `--color-primary-dark` | `#1a3070` | Hover states on primary elements, gradient end |
| `--color-accent` | `#f97316` | **ALL CTA buttons**, price highlights, label text, active states |
| `--color-accent-hover` | `#ea6c0a` | Button hover/active — never use as default state |
| `--color-trust` | `#16a34a` | Sticky trust bar background only |
| `--color-warning` | `#dc2626` | Form validation errors only |
| `--color-text` | `#1f2937` | All body copy |
| `--color-text-muted` | `#6b7280` | Captions, descriptions, secondary info |
| `--color-bg` | `#ffffff` | Page background |
| `--color-bg-alt` | `#f9fafb` | `.section-alt` alternating section background |
| `--color-bg-dark` | `#0f172a` | Footer background |
| `--color-border` | `#e5e7eb` | Card outlines, input borders, dividers |

**Rules:**
- Orange (`--color-accent`) on ALL primary action buttons — never primary blue
- White text on `--color-primary`, `--color-accent`, and `--color-trust` backgrounds
- `--color-trust` green is reserved for the trust bar only

---

## Typography Tokens

**Font family:** `--font-family: 'Inter', sans-serif` (Google Fonts, weights 400/600/700/800)

### Font Size Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--font-size-xs` | `0.75rem` | Labels (uppercase), fine print, badge text |
| `--font-size-sm` | `0.875rem` | Captions, meta info, table cells, trust bar items |
| `--font-size-base` | `1rem` | Body copy (default) |
| `--font-size-lg` | `1.125rem` | Lead text, large body, header phone |
| `--font-size-xl` | `1.25rem` | Card titles, H4, step titles |
| `--font-size-2xl` | `1.5rem` | H3, section subheadings |
| `--font-size-3xl` | `2rem` | H2, section headings |
| `--font-size-4xl` | `2.5rem` | H1, hero headline base size |
| `--font-size-5xl` | `3.5rem` | Max hero headline (via `clamp()`) |

### Type Styles

| Class | Style | Usage |
|-------|-------|-------|
| `.headline-hero` | Inter 800, `clamp(2rem, 5vw, 3.5rem)`, lh 1.1 | Page H1 |
| `.headline-section` | Inter 700, `clamp(1.5rem, 3.5vw, 2.5rem)`, lh 1.2 | Section H2 |
| `.subheadline` | Inter 400, `clamp(1.125rem, 2vw, 1.25rem)`, muted | Section subheading |
| `.label` | Inter 700, 0.75rem, uppercase, tracking 0.12em, orange | Section eyebrow labels |

---

## Spacing & Layout Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--max-width` | `1160px` | `.container` max-width |
| `--section-pad` | `80px` (→60px@900px, →48px@640px) | `.section` vertical padding |

---

## Border Radius Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | `6px` | Small elements, checkboxes |
| `--radius-md` | `12px` | Buttons, inputs, small cards |
| `--radius-lg` | `16px` | Cards, form panels |
| `--radius-xl` | `24px` | Hero card, large feature cards |
| `--radius-full` | `9999px` | Pill badges, step number circles |

---

## Shadow Tokens

| Token | Usage |
|-------|-------|
| `--shadow-sm` | Subtle card lift, header |
| `--shadow-md` | Hovered cards |
| `--shadow-lg` | Calculator, prominent cards |
| `--shadow-xl` | Hero card, lead form |

---

## Transition

`--transition: 200ms ease` — used on all interactive state changes (hover, focus, active)

---

## Component Inventory

### Buttons

| Class | Description |
|-------|-------------|
| `.btn` | Base button — flex, Inter 700, border-radius md, transition |
| `.btn-primary` | Orange fill, white text, 18px/36px padding, orange glow shadow |
| `.btn-primary-xl` | Larger primary — xl font, 22px/48px, full-width, radius-lg |
| `.btn-secondary` | Transparent, primary-blue border + text, fills on hover |
| `.btn-ghost` | Transparent, white border (60% opacity), for use on dark/hero bg |
| `.btn-phone` | Primary blue fill — header phone number CTA |

### Navigation & Header

| Class | Description |
|-------|-------------|
| `.site-header` | White bg, border-bottom, shadow-sm. NOT sticky (scrolls away) |
| `.logo` | Inter 800, primary navy. `span` inside = orange accent |
| `.trust-bar` | Green bg (`--color-trust`), **sticky top:0, z-index:100** |
| `.trust-marquee` | Overflow hidden wrapper for scroll animation |
| `.trust-marquee-track` | `inline-flex`, `animation: marquee-scroll 32s linear infinite` |
| `.trust-marquee-item` | Individual trust item — sm, 600 weight |
| `.trust-item-sep` | Separator dot between items (30% white opacity) |
| `.mobile-cta-bar` | Fixed bottom bar, hidden by default, shown on mobile via JS |

### Hero

| Class | Description |
|-------|-------------|
| `.hero` | Navy gradient bg, 80px padding, radial orange glow pseudo |
| `.hero-inner` | 2-col grid: text left, `.hero-card` right (420px) |
| `.hero-card` | White card, radius-xl, shadow-xl — contains bedroom selector |
| `.hero-eyebrow` | Orange label row above H1 |

### Calculator / Bedroom Selector

| Class | Description |
|-------|-------------|
| `.bedroom-options` | CSS grid `repeat(6,1fr)` |
| `.bedroom-btn` | `grid-column: span 2` (3 per row). `:nth-child(4,5)` → span 3 (2 per row) |
| `.addon-item` | Toggle row — border, click to select, `.selected` class adds navy bg |
| `.addon-check` | Checkbox square, fills navy on `.selected` |
| `.price-display` | Navy gradient box showing breakdown + total |
| `.step-price-display` | Light bg box showing live estimate in step-1 |

### Multi-Step Form

| Class | Description |
|-------|-------------|
| `.multistep-wrap` | 640px max-width centered |
| `.step-progress` | Row of `.step-dot` + `.step-line` |
| `.step-dot` | 40px circle — `.active` = orange, `.done` = white/navy check |
| `.form-step` | Hidden by default, `.active` shows with slide-in animation |
| `.step-title` | White H2 above each step |
| `.step-back-link` | Ghost text button (no bg), above form fields, breadcrumb style |
| `.step-nav` | Flex row for navigation buttons |
| `.lead-form` | White card (radius-xl, shadow-xl, 40px padding) containing inputs |
| `.form-reassurance` | Row of 3 checkmark items below submit button |
| `.form-success` | Hidden success state, `.visible` shows it |

### How It Works / Step Cards

| Class | Description |
|-------|-------------|
| `.steps-grid` | 3-col grid (→1 col on mobile) |
| `.step-card` | White card, border, radius-xl, hover lifts |
| `.step-card-header` | `display:flex; align-items:center; gap:12px` — number + emoji side by side |
| `.step-number` | 48px navy circle, white Inter 800 numeral |
| `.step-icon` | 2rem emoji, no margin |

### Social Proof

| Class | Description |
|-------|-------------|
| `.stats-bar` | Navy bg row with `.stat-number` (orange, 2.5rem) + `.stat-label` |
| `.reviews-grid` | 3-col grid (→1 col mobile) |
| `.review-card` | White card, border, shadow-sm |
| `.review-stars` | Amber star row (⭐ `#f59e0b`) |
| `.review-badge` | Green pill "✓ Verified Hire" |

### Journey Map

| Class | Description |
|-------|-------------|
| `.journey-timeline-wrap` | `overflow-x: auto` scroll container |
| `.journey-timeline` | `display:flex; min-width:920px` — never collapses, horizontal scroll on mobile |
| `.journey-step` | `flex:1; min-width:150px` — each step column |
| `.journey-dot` | 56px circle with emoji icon |

### Service Areas

| Class | Description |
|-------|-------------|
| `.areas-grid` | 3-col grid (→2 col tablet, →1 col mobile) |
| `.area-card` | Flex row: icon + name + dist + arrow, links to content pages |

### FAQ Accordion

| Class | Description |
|-------|-------------|
| `.faq-item` | Border card, `.open` class = primary border |
| `.faq-question` | Full-width button, flex space-between |
| `.faq-chevron` | Rotates 180° on `.open` |
| `.faq-answer` | Hidden by default, `display:block` on `.open` |

### Footer

| Class | Description |
|-------|-------------|
| `.site-footer` | Dark bg (`--color-bg-dark`), 3-col grid |
| `.footer-inner` | `2fr 1fr 1fr` columns (→1 col mobile) |
| `.footer-col` | Link list column with h4 label |

### Utility Classes

| Class | Value |
|-------|-------|
| `.text-center` | `text-align: center` |
| `.section-alt` | Alt bg background |
| `.section-dark` | Dark bg + white text |
| `.fade-up` | Scroll animation (opacity 0 → 1, translateY 24px → 0, via IntersectionObserver) |
| `.mt-8` through `.mt-48` | Margin-top utilities |

---

## Usage Examples

### Button
```html
<!-- Primary CTA -->
<a href="#get-quote" class="btn btn-primary">Get Free Quote</a>

<!-- Ghost (on dark background) -->
<a href="tel:+19044798844" class="btn btn-ghost">
  <span class="btn-emoji">📞</span> (904) 479-8844
</a>
```

### Step Card
```html
<div class="step-card">
  <div class="step-card-header">
    <div class="step-number">1</div>
    <div class="step-icon">📋</div>
  </div>
  <h3>Get Your Quote</h3>
  <p>Fill in home size. See your price instantly.</p>
</div>
```

### Review Card
```html
<div class="review-card">
  <div class="review-stars">★★★★★</div>
  <p class="review-text">"Great service, showed up on time."</p>
  <div class="review-author">
    <span class="author-name">Scott R. — Fort Myers</span>
    <span class="review-badge">✓ Verified Hire</span>
  </div>
</div>
```

### Section with Label
```html
<section class="section section-alt">
  <div class="container">
    <div class="section-title">
      <span class="label">Simple Process</span>
      <h2 class="headline-section">How It Works</h2>
      <p class="subheadline">Your easiest move in three steps</p>
    </div>
    <!-- content -->
  </div>
</section>
```
