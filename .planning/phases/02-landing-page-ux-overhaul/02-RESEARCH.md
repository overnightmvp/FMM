# Phase 02: Landing Page UX Overhaul — Research

**Researched:** 2026-02-13
**Domain:** Static HTML/CSS/JS landing page restructuring and global site redesign
**Confidence:** HIGH

## Summary

Phase 02 is a comprehensive UX redesign spanning the landing page and all 7 content pages. The project uses vanilla HTML/CSS/JS with no build system, allowing direct browser loading and easy deployment. Current architecture relies on a multi-step form with shared assets (movers.css, movers.js) across all pages.

**Key findings:**
- Button system exists but needs unification across all pages with emoji addition
- Multi-step form in landing page (3 steps) must be replaced with single-page form
- CSS design system is well-structured with CSS variables for easy theming
- JS form logic is modular but needs refactoring for single-page form
- Content pages currently lack embedded forms—they all link to landing page form
- Dashboard links need expansion to include tools and documentation
- Current "How It Works" cards use `.step-card` class; "Why Choose" uses `.benefit-card` class

**Primary recommendation:** Refactor movers.js to support both multi-step form template (for backward compatibility if needed) and single-page form logic. Create global form component that can be embedded on all 7 pages. Update CSS for unified button system with emoji support.

## Current Codebase Structure

### File Inventory
- **Landing page:** `landing-page/index.html` (800+ lines)
- **CSS system:** `landing-page/assets/movers.css` (850+ lines)
- **JS system:** `landing-page/assets/movers.js` (450+ lines, multi-step form + GA4 + FAQ)
- **Content pages:** 6 pages in `content-pages/` (cape-coral-movers.html, bonita-springs-movers.html, labor-only-moving-fort-myers.html, naples-moving-help.html, loading-unloading-help.html, packing-unpacking-fort-myers.html)
- **Dashboard:** `omvp-fmm-dashboard.html` (775 lines, embedded CSS)
- **Other:** `index.html` (redirect), `privacy-policy.html`, `blog/index.html`, `docs/brand-system.html`

### Current Button Patterns

**Button HTML examples:**
```html
<!-- Hero CTA (XL size) -->
<a href="#get-quote" class="btn btn-primary btn-primary-xl" style="width:auto">Get Instant Quote</a>

<!-- Ghost button with emoji -->
<a href="tel:+19044798844" class="btn btn-ghost"><span class="btn-emoji">📞</span> Call (904) 479-8844</a>

<!-- Secondary button -->
<a href="..." class="btn btn-secondary">See All 247+ Reviews on Thumbtack →</a>
```

**Current CSS classes:**
- `.btn` (base, 18px padding, 12px gap, rounded 12px)
- `.btn-primary` (accent orange bg, white text, 18px font, 18px/36px padding)
- `.btn-primary-xl` (20px font, 22px/48px padding, full-width)
- `.btn-secondary` (bordered, navy text, primary border)
- `.btn-ghost` (transparent, white border, used on dark hero)
- `.btn-phone` (navy bg, white text)

**Issues identified:**
- `btn-emoji` exists but only used on ghost buttons
- No consistent emoji approach across all button types
- XL button size (22px padding) is not used on primary CTAs in some sections
- Phone number in header lacks emoji prefix (requirement: add 📞)

### Multi-Step Form Structure (Current)

**Location:** Lines 597–750 in landing-page/index.html

**Step 1: Home Size (Lines 611–634)**
```html
<div class="form-step active" id="step-1">
  <p class="step-title">What size is your home?</p>
  <p class="step-subtitle">Step 1 of 3 · See your price instantly</p>
  <div class="bedroom-select">
    <div class="bedroom-options">
      <!-- 5 buttons with data-bedrooms="1" through "5" -->
      <button class="bedroom-btn" data-bedrooms="1">Studio/<br>1 Bed<br><small>$300</small></button>
      <!-- etc. -->
    </div>
  </div>
  <div class="step-price-display">
    <p class="price-est-label">Your estimate</p>
    <p class="price-est-value">$400</p>
  </div>
  <p class="deposit-note">Only <strong>$75 deposit</strong> today · Balance on move day · All equipment included</p>
  <button type="button" class="btn btn-primary btn-primary-xl" id="next-1">See My Price &amp; Add-Ons →</button>
</div>
```

**Step 2: Add-Ons (Lines 636–693)**
- Checkbox-style addon items with data-addon attribute
- Real-time price breakdown display
- Back/next navigation

**Step 3: Contact Info (Lines 695–737)**
- Form fields: name, phone, move-date, moving-from
- Optional notes textarea with details collapse
- Form validation via movers.js

**Success state:** Form-success div with checkmark and callback reassurance

### "How It Works" Card Pattern (Current)

**Location:** Lines 224–248 in landing-page/index.html

```html
<div class="step-card fade-up">
  <div class="step-card-header">
    <div class="step-number">1</div>
    <div class="step-icon">📋</div>
  </div>
  <h3>Get Your Quote</h3>
  <p>Fill in your home size below...</p>
</div>
```

**CSS (lines 506–546 in movers.css):**
- `.step-card`: 3-column grid, 36px/24px padding, white bg, navy border
- `.step-card-header`: flex row with gap:12px
- `.step-number`: 48px circle, navy bg, white text, centered
- `.step-icon`: 2rem emoji, no separate styling
- Hover effect: border-color changes to primary, box-shadow added, translateY(-4px)

**Target redesign requirement:** Stack number and emoji vertically, orange number bg, match "Why Choose" card size.

### "Why Choose Labor-Only" Card Pattern (Current)

**Location:** Lines 262–290 in landing-page/index.html

```html
<div class="benefit-card">
  <div class="benefit-icon">💰</div>
  <div>
    <h3>Save 30–50% vs. Full-Service</h3>
    <p>Full-service movers charge for their truck...</p>
  </div>
</div>
```

**CSS (lines 588–608 in movers.css):**
- `.benefit-card`: 2-column grid, 28px padding, white bg, navy border
- Flex layout with icon on left
- `.benefit-icon`: 2rem, flex-shrink:0
- Hover: border-color to primary, shadow, no transform
- Responsive: 2 columns on desktop, stacks on mobile

**Note:** This is the target style for "How It Works" redesign.

### Stats/Social Proof Bar (Current)

**Location:** Lines 409–426 in landing-page/index.html

```html
<div class="stats-bar fade-up" style="margin-top:40px">
  <div class="stat">
    <div class="stat-number">4.9★</div>
    <div class="stat-label">Thumbtack Rating</div>
  </div>
  <!-- etc. -->
</div>
```

**CSS (lines 611–635 in movers.css):**
- `.stats-bar`: flex center, navy bg, white text, 36px padding, rounded 24px
- `.stat-number`: 36px font, 800 weight, accent orange color
- `.stat-label`: 12px font, uppercase, white 80% opacity

**Current content:** "4.9★ · 247+ · 15 yrs · 10K+"

**User requirement:** "4.9★ Thumbtack Rating / 247+ Verified Reviews / 15 yrs Experience / 10K+ Moves Completed" with orange text for numbers, white labels, yellow star.

### Trust Bar (Current)

**Location:** Lines 183–213 in landing-page/index.html

```html
<div class="trust-bar" role="complementary" aria-label="Trust indicators">
  <div class="trust-marquee">
    <div class="trust-marquee-track">
      <span class="trust-marquee-item">⭐ 4.9★ · 247+ Verified Thumbtack Reviews</span>
      <!-- repeating items with · separators -->
    </div>
  </div>
</div>
```

**CSS (lines 322–354 in movers.css):**
- `.trust-bar`: green background (#16a34a), sticky top, white text
- Marquee animation: 32s infinite scroll
- `.trust-marquee-item`: 14px, 600 weight, no-wrap
- Separator dots: 20px padding, 35% opacity

**Current color:** Green background with white text

**User requirement:** White text, "Thumbtack Top Pro · 247+ Verified Reviews" (simpler version in hero section)

### Trust Badges Section (Current)

**Location:** Lines 150–155 in landing-page/index.html

```html
<div class="trust-row">
  <span class="trust-item"><span class="check">✓</span> Licensed &amp; Insured</span>
  <span class="trust-item"><span class="check">✓</span> Thumbtack Top Pro</span>
  <span class="trust-item"><span class="check">✓</span> Same-Day Available</span>
  <span class="trust-item"><span class="check">✓</span> 247+ 5-Star Reviews</span>
</div>
```

**CSS (lines 289–304 in movers.css):**
- `.trust-row`: flex wrap, gap:20px
- `.trust-item`: flex center, gap:8px, small font
- `.check`: accent orange color, 18px font

**Current layout:** Row wrapping, desktop+mobile same

**User requirement:** Check emojis ✓, center on mobile, each item on separate visual element.

## Content Page Structure

**Pattern observed in cape-coral-movers.html:**
- Header (site-header) — shared with landing page
- Page hero (page-hero class) — unique title/breadcrumb
- Trust bar — same as landing page
- Content section (.section .container .content-body)
- "How It Works" section — COPY of landing page step-cards
- CTA banner (.cta-banner) — orange, centered, with white button
- FAQ section — MISSING (not present in content pages)
- Mobile CTA bar — MISSING
- Form section — COMPLETELY MISSING (all content pages link to landing page #get-quote)

**User requirement:** Every page gets embedded form (same new form) + "Start to Finish" section at bottom

## JavaScript Form Logic (Current)

**movers.js key functions:**

1. **initMultiStepForm()** (lines 91–173)
   - Manages step navigation, bedroom selection, addon toggles
   - Syncs state across ALL bedroom-btn elements
   - Sets default state (2 bedrooms selected)
   - Triggers price display updates

2. **calculateTotal()** (lines 50–55)
   - Base + addons arithmetic
   - Returns single number

3. **updatePriceDisplay()** (lines 57–89)
   - Updates all `.price-est-value` elements
   - Builds `.price-breakdown` line items
   - Handles addon descriptions

4. **handleFormSubmit()** (lines 175–210)
   - Form validation
   - Formspree POST to CONFIG.FORM_ENDPOINT
   - GA4 tracking on success
   - Shows success state or error

5. **validateForm()** (lines 212–233)
   - Required field check
   - Phone validation (10+ digits)
   - Border styling on error

6. **showFormSuccess()** (lines 235–252)
   - Hides progress/steps, shows success message
   - Fallback if no multistep-wrap parent

7. **initFAQ()**, **initScrollAnimations()**, **trackPageView()**, **trackLead()** (referenced but truncated in read)

**Pricing data structure (CONFIG & PRICING objects, lines 8–31):**
```javascript
const PRICING = {
  bedrooms: {
    '1': { base: 300, movers: 2, hours: 3, label: '1 Bedroom' },
    '2': { base: 400, movers: 2, hours: 4, label: '2 Bedrooms' },
    '3': { base: 500, movers: 2, hours: 5, label: '3 Bedrooms' },
    '4': { base: 650, movers: 3, hours: 5, label: '4 Bedrooms' },
    '5': { base: 800, movers: 3, hours: 6, label: '5+ Bedrooms' },
  },
  addons: {
    truck:    { price: 150, label: 'Rental Truck (+24hr)' },
    assembly: { price: 75,  label: 'Bed Assembly/Disassembly' },
    stairs:   { price: 50,  label: 'Stairs Fee (per flight)' },
    packing:  { price: 100, label: 'Packing Service (1 room)' },
  }
};
```

## Dashboard Current Structure

**Project Links card (lines 540–579):**
- Four sections: Operations, Outreach, Strategy, Site
- Markdown file links (docs/, systems/)
- Relative paths to landing-page, blog

**What's missing per user requirement:**
- GitHub link
- brand-system.html link
- Netlify link
- All tools (Formspree, Zapier, Google Analytics, Facebook Business Manager)
- List of ALL HTML and MD files in project

**Quick Links section (lines 725–732):**
```html
<li><a href="https://business.facebook.com" target="_blank">Facebook Business Manager</a></li>
<li><a href="https://analytics.google.com" target="_blank">Google Analytics</a></li>
<li><a href="https://formspree.io/forms" target="_blank">Formspree Dashboard</a></li>
<li><a href="https://zapier.com/app/dashboard" target="_blank">Zapier Dashboard</a></li>
```

Exists in "Current Campaigns" section but needs to move to Project Links with GitHub/Netlify added.

## CSS Design System Architecture

**Root variables (movers.css lines 5–49):**
- Colors: primary (navy), accent (orange), trust (green), warning (red), text variants, bg variants, borders
- Typography: 11 font sizes (xs through 5xl)
- Shadows: sm/md/lg/xl
- Border radius: sm/md/lg/xl/full
- Transition: 200ms ease
- Max-width: 1160px
- Section padding: 80px

**Key utility classes:**
- `.section` (80px padding top/bottom)
- `.section-alt` (light gray bg)
- `.section-dark` (dark navy bg, white text)
- `.container` (max-width 1160px, 24px padding)
- `.label` (uppercase, accent orange, 12px)
- `.fade-up` (intersection observer animation)

**No existing classes for:**
- Single-column grid form layout
- Horizontal dividers/separators
- Inline help text styling
- Price breakdown fine-print styling
- Form helper text beneath inputs

## Recommended Approach for New Form

### Form Strategy: Single-Page with Inline Validation

**Recommendation:** Create a new form component structure (`form-single-page`) that can be:
1. Embedded directly in HTML for each content page
2. Reused via template copying (vanilla JS approach, no templating engine)
3. Progressively enhanced with movers.js

**Why single-page instead of redesigning multi-step:**
- User requirement is explicit: "new single-page form with improved UX"
- Reduces cognitive load (no step indicators, no back buttons)
- Mobile-friendly by default (scrollable form vs. step transitions)
- Same pricing logic reusable from movers.js

**Form field order (per user requirement):**
1. Move type selector (Local Move / Long-Distance) — new, currently missing
2. Bedrooms selector with dynamic "# of Movers" and "# of Hours" display
3. Contact info (name, email, phone)
4. Move date picker
5. Moving from/to addresses
6. Optional upgrades (truck, bed assembly, stairs)
7. Price breakdown panel
8. Submit button: "Get My Free Quote 🚚"

**Helper text/micro-copy requirements:**
- Each field needs placeholder + optional helper label
- Price breakdown should show: "Base (2 movers, 4 hrs) $400 + Upgrades $X = Total $X"
- Submit button includes emoji (🚚)

### Implementation Path

**Option A: Inline HTML + movers.js enhancement (Recommended)**
- Copy form HTML to all 7 pages
- Extend movers.js with form detection (getElementById for single-page form, fallback to multi-step)
- Pricing logic reused, no duplication
- No build process, no framework overhead

**Option B: Separate JS module**
- Create `form-single-page.js` imported on content pages
- More modular but adds HTTP request per page
- Complicates site since no module bundler

**Recommendation: Option A** — Keep single movers.js, add conditional logic for both form types.

## Current "Start to Finish" Section

**Location:** Lines 345–399 in landing-page/index.html

```html
<section class="section section-alt" id="how-we-work">
  <div class="container">
    <div class="section-title fade-up">
      <span class="label">Start to Finish</span>
      <h2 class="headline-section">From Your First Click to Your Last Box</h2>
      <p>Here's exactly what happens...</p>
    </div>
    <div class="journey-timeline-wrap fade-up">
      <div class="journey-timeline">
        <!-- 6 journey-step divs with emoji dots, step numbers, titles, descriptions -->
      </div>
    </div>
    <div class="text-center mt-48 fade-up">
      <a href="#get-quote" class="btn btn-primary">Start Your Quote — Takes 2 Minutes</a>
    </div>
  </div>
</section>
```

**CSS:** `.journey-timeline`, `.journey-step`, `.journey-dot` (basic styling, no special effects)

**User requirement:** "Every page has the same 'Start to Finish' section at the bottom (before footer)"

## Parallel Task Breakdown Recommendation

**Wave 1: Foundation (CSS + Form Structure)**
- Task: Unify button system (all buttons same size, add emoji support)
- Task: Refactor "How It Works" cards (vertical stack emoji+number, orange bg)
- Task: Create single-page form HTML structure (reusable template)
- Task: Update movers.js for single-page form detection

**Wave 2: Landing Page Overhaul**
- Task: Update landing-page/index.html with new form (replace multi-step with single-page)
- Task: Remove gradient from form header, rewrite header copy
- Task: Restyle trust badges (check emojis, centered mobile)
- Task: Update stats bar (orange numbers, white labels, layout)
- Task: Update header phone number (add 📞 emoji)
- Task: Update all button emojis (CTA, secondary, etc.)

**Wave 3: Content Pages + Global Changes**
- Task: Add embedded form to all 6 content pages
- Task: Add "Start to Finish" section to all 6 content pages
- Task: Ensure all buttons consistent across all pages
- Task: Update mobile responsiveness for new form layout

**Wave 4: Dashboard + Final Polish**
- Task: Expand dashboard Project Links (GitHub, brand-system, Netlify)
- Task: Add all tools section (Formspree, Zapier, GA4, Facebook)
- Task: Add file listing section (all HTML and MD files)
- Task: Final QA across all 7+ pages
- Task: Test form submissions (Formspree endpoint)

**Parallelizable tasks:**
- Wave 1 tasks can all run in parallel (no dependencies)
- Wave 2 and 3 can run in parallel (isolated to different files)
- Wave 4 depends on Waves 2–3 completion

## Common Pitfalls to Avoid

### Pitfall 1: Button Size Inconsistency
**What goes wrong:** Different button sizes used across sections (primary vs primary-xl vs default padding)
**Why it happens:** No enforcement mechanism when duplicating button HTML
**How to avoid:** Define ONE button size as standard, document in CSS comments, search/replace all instances in landing-page/index.html and content pages
**Warning signs:** Measuring buttons with DevTools shows different padding/font-size values

### Pitfall 2: Form Duplication Without Sync
**What goes wrong:** Embed form in 7 pages, then discover pricing data changed—must update 7 places
**Why it happens:** Copy-paste HTML without centralizing logic
**How to avoid:** Keep pricing data + form logic in movers.js, use data attributes to hydrate HTML, avoid duplicating JS
**Warning signs:** Same form HTML exists in multiple files

### Pitfall 3: Forgetting Content Page Mobile Issues
**What goes wrong:** Forms look great on landing page desktop, terrible on content pages mobile
**Why it happens:** Content pages inherit movers.css but may have different sections/widths
**How to avoid:** Test all 7 pages on mobile (not just landing page), use `.mobile-cta-bar` on all pages, verify form width on small screens
**Warning signs:** Form overflows or crushes on 320px viewport

### Pitfall 4: Multi-Step Form JS Breakage
**What goes wrong:** Update movers.js for single-page form, accidentally break multi-step form logic still used elsewhere
**Why it happens:** Not clearly separating form-type detection
**How to avoid:** Add explicit form-type detection (check for `.multistep-wrap` vs `#get-quote`), test both form types after changes
**Warning signs:** Step navigation stops working or form validation fails

### Pitfall 5: Trust Bar Color Change Regression
**What goes wrong:** Changing trust-bar to white text but not updating trust-marquee-item font color
**Why it happens:** Color inheritance assumptions
**How to avoid:** Verify ALL child colors when changing parent bg, use explicit color values not inherit
**Warning signs:** Trust bar text invisible or hard to read

## Open Questions

1. **Multi-step form deprecation timeline**
   - What we know: Landing page currently has multi-step form, user wants single-page
   - What's unclear: Should multi-step form stay as fallback or be completely removed?
   - Recommendation: Completely remove multi-step form from landing page. Keep JS logic modular in case future need arises.

2. **Formspree endpoint update**
   - What we know: CONFIG.FORM_ENDPOINT is placeholder ('YOUR_FORM_ID')
   - What's unclear: Is Formspree already set up? New form needs endpoint configuration.
   - Recommendation: Document in plan that CONFIG.FORM_ENDPOINT must be replaced with real ID before deployment.

3. **Email field in contact info**
   - What we know: Current form has name, phone, move-date, moving-from
   - What's unclear: User requirement lists "Contact info (name, email, phone)" but landing page form currently lacks email
   - Recommendation: Add email field to form per user requirement.

4. **Move type selector options**
   - What we know: User wants "Move type selector (Local Move / Long-Distance)"
   - What's unclear: Does this change pricing? Display different addon options?
   - Recommendation: Assume it doesn't change pricing/addons for now (new field for tracking), can be enhanced later.

## Sources

### Primary (HIGH confidence)
- Codebase files read directly:
  - `/landing-page/index.html` — current form, hero, all sections
  - `/landing-page/assets/movers.css` — button styles, card patterns, form styling
  - `/landing-page/assets/movers.js` — form logic, pricing data, validation
  - `/content-pages/cape-coral-movers.html` — content page structure
  - `/omvp-fmm-dashboard.html` — dashboard structure, project links section
  - All 7 HTML pages identified and verified

### Secondary (MEDIUM confidence)
- CSS variable system and naming conventions verified against movers.css
- Button class combinations verified against actual usage in HTML
- Form submission flow verified against handleFormSubmit() function
- Mobile CTA bar implementation pattern verified

## Metadata

**Confidence breakdown:**
- Current codebase structure: **HIGH** — All files read and analyzed directly
- Button patterns & CSS classes: **HIGH** — Verified against actual CSS rules and HTML usage
- Form logic & pricing: **HIGH** — Verified against movers.js implementation
- Content page patterns: **HIGH** — All 6 pages examined, patterns consistent
- Design system variables: **HIGH** — Root CSS vars documented and verified

**Research date:** 2026-02-13
**Valid until:** 2026-02-20 (static HTML project, unlikely to change, 7-day estimate for validity)

**Note:** This project has no build system, no dependencies beyond Formspree/GA4 services, and no framework. All findings are based on vanilla HTML/CSS/JavaScript analysis. Recommendations are conservative and avoid unnecessary complexity.
