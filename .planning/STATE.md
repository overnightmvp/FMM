# Project State — Fort Myers Movers (FMM)

## Current Position

Phase: 03 of 3 (03-conversion-optimization)
Plan: 2 of 4 in phase complete (03-01 complete, 03-02 complete)
Status: In progress
Last activity: 2026-02-15 — Completed 03-01-PLAN.md (CSS targeted fixes: sticky trust column + fade-up audit)
           2026-02-16 — Completed 03-02-PLAN.md (Dashboard emoji audit: all 52 links now have emoji prefixes)

Progress: ███████████░░░ 11/14 plans complete (79%)

## Accumulated Decisions

| ID | Plan | Decision | Rationale |
|----|------|----------|-----------|
| D1 | 01-01 | CPL target <$50 (not <$40) | Moving = planned purchase, not emergency service |
| D2 | 01-01 | Peak ad budget Nov-Apr ($80-100/day), maintenance May-Sep ($20-40/day) | Snowbird seasonality dominates Fort Myers market |
| D3 | 01-01 | Season-adjusted lead volume: 10-15/day peak, 5-8/day off-peak | Flat targets misread performance in seasonal market |
| D4 | 01-01 | MRR baseline $7,500 (100 leads × $75) | Conservative baseline for month-1 targets |
| D5 | 01-02 | Tier 1 pitch: search invisibility, not emergency urgency | Moving is not emergency service — HVAC urgency framing doesn't apply |
| D6 | 01-02 | Seasonal urgency: snowbird season (not summer heat) | Fort Myers peak is Nov–Apr — inverted vs Phoenix HVAC source material |
| D7 | 01-02 | Unverifiable contacts marked [RESEARCH NEEDED] | Manual lookup required before outreach; credibility requires verified numbers |
| D8 | 01-02 | Template 3 reframed as slow-season capacity fill | Tier 3 movers have marketing — real pain is dead weeks with crew on payroll |
| D9 | 01-03 | Dashboard uses movers.css tokens (#1e3a8a, #f97316) not HVAC source colors | Consistent with site aesthetic |
| D10 | 01-03 | localStorage keys prefixed fmm-task-N | Avoids collision with other dashboards in workspace |
| D11 | 01-04 | Go/No-Go scorecard requires score ≥ 7/10 to proceed to technical setup | Prevents wasted setup work on markets that don't fit the model; 2-hour research saves 2 weeks |
| D12 | 01-04 | Expansion city priority: Tampa → Charlotte → Austin → Nashville | Tampa for FL licensing/snowbird overlap; Charlotte for non-snowbird model validation |
| D13 | 01-04 | Snowbird vs. non-snowbird seasonal model bifurcated explicitly in boilerplate | Fort Myers peak (Nov-Apr) is inverted vs. Charlotte/Austin (Apr-Aug); operator must choose consciously |
| D14 | 01-04 | 116 [PLACEHOLDER] markers throughout boilerplate | Removes guesswork; every city-specific variable explicitly flagged for local research |
| D15 | 02-02 | Tools section kept in both Card 6 quick-links AND new dedicated Tools & Accounts card | Card 6 preserves campaign context; dedicated card provides canonical single-source tool directory |
| D16 | 02-01 | .btn-primary-xl size merged into .btn-primary (20px/40px padding, var(--font-size-lg)) | Single button size eliminates visual inconsistency; .btn-primary-xl retains width:100% for layout only |
| D17 | 02-01 | step-number background changed to var(--color-accent) orange | Orange step numbers create visual hierarchy distinction from navy card borders |
| D18 | 02-01 | initSinglePageForm() uses existing PRICING object — no data duplication | Single source of truth for pricing; changing PRICING updates both form types simultaneously |
| D19 | 02-03 | Trust marquee simplified to single repeated string vs. varied items | Plan spec: focused 'Thumbtack Top Pro · 247+ Verified Reviews' claim > scattered rotating items |
| D20 | 02-03 | Step card order: emoji first, step-number second (top to bottom) | With flex-direction:column from 02-01 CSS, visual reads icon then orange circle number |
| D21 | 02-03 | Stats bar 4.9★ split: yellow ★ inline span + orange number text | Yellow star color distinction; orange number aligns with var(--color-accent) system |
| D22 | 02-04 | Old multistep form replaced (not added alongside) on all 6 content pages | Pages already had id="get-quote" multi-step form — duplicate IDs would break JS targeting |
| D23 | 02-04 | loading-unloading-help.html uses "Loading From / Delivering To" field labels | Context-appropriate copy for loading/unloading service vs. standard moving service |
| D24 | 03-01 | align-self:start required alongside position:sticky on .quote-layout-trust grid child | CSS Grid stretch prevents sticky from activating; align-self:start sizes column to content height |
| D25 | 03-01 | Fade-up audit: no CSS overrides found on .step-card — no changes needed for fix 2 | .step-card has no opacity/transform properties that conflict with .fade-up specificity |

## Blockers / Concerns

- All Tier 1–2 contractor contact info is [RESEARCH NEEDED] — manual research required before outreach can begin
- Email templates use placeholder social proof ([Company A], [Company B]) — real results needed once first contractor signs
- Formspree endpoint `YOUR_FORM_ID` placeholder in all 7 HTML files (landing page + 6 content pages) — replace before go-live

## Completed Plans

| Plan | Name | Summary |
|------|------|---------|
| 01-01 | Operational Docs | docs/FMM-90-minute-execution.md + systems/success-metrics.md created |
| 01-02 | Contractor Outreach Docs | docs/contractor-research.md (10 prospects, Tier 1/2/3) + docs/email-templates.md (3 primary + 2 follow-up) |
| 01-03 | Operations Dashboard | omvp-fmm-dashboard.html: 6-card hub with localStorage checklist, doc links, KPIs, seasonal calendar |
| 01-04 | New City Boilerplate | docs/BOILERPLATE-NEW-CITY-ONBOARDING.md: 6-section replication guide, Go/No-Go scorecard, Tampa→Charlotte→Austin→Nashville expansion framework |
| 02-02 | Dashboard Expansion | omvp-fmm-dashboard.html: GitHub/Netlify/brand-system links added; Tools & Accounts card (7 tools, 2-col grid); Site Files card (12 HTML + 9 MD) |
| 02-01 | CSS/JS Foundation | movers.css: unified button system, orange step numbers, 15+ form CSS classes; movers.js: initSinglePageForm() with live pricing + Formspree submission |
| 02-03 | Landing Page Overhaul | landing-page/index.html: 9 UI/CRO changes — single-page quote form (fmm- IDs, quote-layout grid), trust badges, simplified marquee, emoji-first step cards, stats bar, CTAs with emojis |
| 02-04 | Content Pages Global UX | All 6 content pages: replaced multistep form with embedded single-page fmm- form; added journey-timeline Start to Finish section; updated all CTA links to #get-quote (same page) |
| 03-01 | CSS Targeted Fixes | movers.css: @media (min-width:769px) sticky trust column on .quote-layout-trust; fade-up audit confirmed no .step-card overrides |
| 03-02 | Dashboard Emoji Audit | omvp-fmm-dashboard.html: 21 links updated with semantic emoji prefixes; all 52 links now have emojis (0 without) |

## Pending Plans

| Plan | Name | Status |
|------|------|--------|
| 03-03 | CRO Micro-Fixes | Pending |
| 03-04 | Final QA + Go-Live Checklist | Pending |

## Session Continuity

Last session: 2026-02-15T23:09:47Z (03-01), 2026-02-16T00:05:00Z (03-02)
Stopped at: 03-01 and 03-02 both complete
Resume file: None
Next plan: 03-03-PLAN.md
