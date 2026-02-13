---
phase: 01-fmm-docs-dashboard-boilerplate
verified: 2026-02-13T00:00:00Z
status: passed
score: 4/4 must-haves verified
---

# Phase 01: FMM Docs, Dashboard, Boilerplate — Verification Report

**Phase Goal:** Create FMM operational docs, outreach docs, a project dashboard, and a new-city boilerplate — all adapted from the HVAC source templates and tailored to Fort Myers labor-only moving lead gen model.

**Verified:** 2026-02-13
**Status:** PASSED
**Re-verification:** No — initial verification

---

## Goal Achievement

### Observable Truths

| # | Truth | Status | Evidence |
|---|-------|--------|----------|
| 1 | FMM operational docs exist with 4-phase execution plan adapted for moving | ✓ VERIFIED | `/docs/FMM-90-minute-execution.md` exists, 226 lines, covers Phase 1-4 with moving-specific context (not HVAC) |
| 2 | FMM success metrics exist with Fort Myers KPI targets | ✓ VERIFIED | `/systems/success-metrics.md` exists, 291 lines, includes CPL <$50, quality >80%, 10-15 leads/day, daily checklist, red/yellow flags |
| 3 | Outreach docs exist with 10+ Fort Myers contractor prospects and templates | ✓ VERIFIED | `/docs/contractor-research.md` (282 lines, 10 prospects Tier 1/2/3) + `/docs/email-templates.md` (236 lines, 3 primary + 2 follow-up templates) |
| 4 | Project dashboard exists with FMM branding and launch checklists | ✓ VERIFIED | `/omvp-fmm-dashboard.html` exists, 776 lines, uses navy/orange tokens, has 10-item checklist + localStorage persistence |
| 5 | Boilerplate doc for new city onboarding exists with Go/No-Go framework | ✓ VERIFIED | `/docs/BOILERPLATE-NEW-CITY-ONBOARDING.md` exists, 810 lines, 6 sections, 49 placeholder markers, snowbird vs. non-snowbird markets |

**Score:** 5/5 truths verified

---

## Required Artifacts

| Artifact | Expected | Status | Verification |
|----------|----------|--------|--------------|
| `docs/FMM-90-minute-execution.md` | 4-phase execution guide, moving-specific, 150+ lines | ✓ EXISTS | 226 lines. Phases 1-4 cover Foundation→Content→Outreach→Launch Prep with moving ROI calc, Fort Myers details (239 area code, snowbird seasons), contractor research framework. Zero HVAC language. |
| `systems/success-metrics.md` | KPI dashboard with CPL <$50, quality >80%, 10-15 leads/day, daily checklist, red/yellow flags | ✓ EXISTS | 291 lines. Covers: Primary KPIs (CPL, quality, volume), weekly targets, daily monitoring (Morning/Midday/Evening), red flags (CPL >$70), yellow flags (CPL $50-70), seasonal demand table. Fort Myers-specific: snowbird Nov-Apr peak, May-Oct maintenance. |
| `docs/contractor-research.md` | 10+ prospects in Tier 1/2/3 format with opportunity scores, pitch angles, Fort Myers details | ✓ EXISTS | 282 lines. Tier 1: 4 prospects (Lee County, Cape Coral, Smooth Move, Southwest FL). Tier 2: 4 prospects (Gulf Coast, Bonita Springs, Naples, Best Movers). Tier 3: 2 prospects (Two Men, All My Sons). Each has: service area, current marketing, pain points, opportunity score (5-9/10), pitch angle. $75/lead, Fort Myers metro focus. |
| `docs/email-templates.md` | 3 primary templates (Problem, Cost-savings, Capacity) + 2 follow-ups, Fort Myers language, moving pain points | ✓ EXISTS | 236 lines. Template 1 (Tier 1 - problem-focused): "invisible on mobile", Thumbtack comparison. Template 2 (Tier 2 - cost): "$40/lead Thumbtack vs. $75 exclusive". Template 3 (Tier 3 - capacity): "fill summer slowdown". Follow-Up #1 (48h), Follow-Up #2 (1 week). All reference Fort Myers, moving, snowbird season. Zero HVAC. |
| `omvp-fmm-dashboard.html` | Interactive dashboard with navy/orange branding, 10+ checklist items, localStorage persistence, KPI targets, seasonal calendar | ✓ EXISTS | 776 lines. Design: `--color-primary: #1e3a8a` (navy), `--color-accent: #f97316` (orange). Sections: Week 1-2 Launch Tasks (10 checkboxes with localStorage save/reset), Project Links (14 docs), FMM KPI Targets (8 metrics: CPL <$50, quality >80%, 10-15 leads peak, $75/lead), Demand Seasons (Nov-Apr PEAK, May-Jun secondary, Jul-Aug maintenance, Sep-Oct ramp). |
| `docs/BOILERPLATE-NEW-CITY-ONBOARDING.md` | 6-section guide with Go/No-Go scorecard, snowbird vs. non-snowbird decision, 49+ placeholder markers, references all FMM docs | ✓ EXISTS | 810 lines. Section 1: Pre-Launch Research (market sizing, competitor analysis, seasonal demand, pricing, Go/No-Go scorecard). Section 2: Technical Setup (landing page, forms, phone, GA4). Section 3: Contractor Acquisition (prospects, outreach, demo script). Section 4: Campaign Launch (Facebook ads, creative, lead QA). Section 5: Operations (tracking, Zapier, invoicing, KPI rhythm). Section 6: Geographic Expansion (when to expand, city selection, what transfers). 49 [PLACEHOLDER] markers. Snowbird YES/NO decision tree. References: FMM-90-execution, contractor-research, email-templates, success-metrics, lead-routing-setup, launch-checklist. |

---

## Key Link Verification

### Operational Execution → Success Metrics
- **Wiring:** FMM-90-minute-execution.md Phase 4 instructs setup of analytics and lead routing. Success-metrics.md provides the 9-stage tracking and daily monitoring checklists that execute Phase 4.
- **Status:** ✓ WIRED

### Operations → Dashboard
- **Wiring:** Success-metrics.md KPI targets (CPL <$50, quality >80%, 10-15 leads/day) are directly displayed in dashboard FMM KPI Targets card. Daily checklist from metrics is referenced in dashboard launch tasks.
- **Status:** ✓ WIRED

### Contractor Research → Email Templates
- **Wiring:** Contractor-research.md Tier 1/2/3 system directly specifies which email template to use for each tier. Email-templates.md references "see contractor-research.md for prospect tier assignments" and provides Tier-specific templates.
- **Status:** ✓ WIRED

### All FMM Docs → Boilerplate
- **Wiring:** Boilerplate doc explicitly references all FMM source docs in each section: execution plan (Section 1.3, 4.2), contractor research (Section 3.1-3.2), email templates (Section 3.2), success metrics (Section 4.3, 5.4), lead routing (Section 5.2). Template files appendix lists exact cross-references.
- **Status:** ✓ WIRED

### Dashboard → All Docs
- **Wiring:** Dashboard "Project Links" card has 14 relative links pointing to: FMM-90-minute-execution, success-metrics, contractor-research, email-templates, launch-checklist, market-intel, SEO strategy, roadmap, landing page, boilerplate.
- **Status:** ✓ WIRED (all links relative, all targets exist)

---

## Fort Myers Specificity Verification

### Execution Plan Analysis
- ✓ **Service Model:** Explicitly labor-only moving (not full-service HVAC). Lines 4-7 define "labor-only moving lead generation system."
- ✓ **Geography:** Fort Myers, Cape Coral, Bonita Springs, Naples, Estero referenced 24+ times. Area code 239. Lee County service area defined.
- ✓ **Seasonality:** Snowbird peak Nov-Apr identified (line 49, 54, 226). May-Oct maintenance schedule. Storm recovery mention (Sep-Oct).
- ✓ **Contractor ROI:** Moving-specific: $75/lead, $400-$800 job value, 60-70% close rate (not HVAC pricing model).
- **HVAC Detection:** 0 matches for HVAC, heating, cooling, air-condition.

### Success Metrics Analysis
- ✓ **Moving KPIs:** CPL <$50 (line 9), 10-15 leads/day peak / 5-8 off-peak (line 11), $75/lead pricing (line 20), labor-only job context (line 12 note: "moving = planned purchase, not emergency").
- ✓ **Daily Checklist:** Morning check includes "October–April only: Check snowbird season ad campaigns specifically" (line 201).
- ✓ **Seasonal Calendar:** (lines 221-231) Oct ramp-up, Nov-Apr PEAK, May-Jun summer, Jul-Aug moderate, Sep hurricane recovery.
- ✓ **Red/Yellow Flags:** Explicitly notes moving context (lines 179-182): "moving leads require more nurture than emergency services."
- **HVAC Detection:** 0 matches.

### Contractor Research Analysis
- ✓ **10 Prospects:** Tier 1 (Lee County Movers, Cape Coral Moving, Smooth Move, Southwest FL). Tier 2 (Gulf Coast, Bonita Springs, Naples, Best Movers). Tier 3 (Two Men, All My Sons). All locally specific.
- ✓ **Service Area:** Lee/Collier County focus. Cape Coral, Bonita Springs, Naples, Marco Island mentioned. Service radius context.
- ✓ **Prospect Detail:** Each has: current marketing gap (no lead gen), pain point (Thumbtack/Angi dependence or snowbird gaps), opportunity score, customized pitch.
- ✓ **Market Context:** Line 5: "one of Florida's fastest-growing metros with 2%+ annual growth and an 18% mobility rate." Moving demand, not HVAC.
- **HVAC Detection:** 0 matches.

### Email Templates Analysis
- ✓ **Template 1 (Tier 1):** Problem-focused on online invisibility. Mentions "68% of people searching for movers never scroll past first 3 results." Not HVAC pain.
- ✓ **Template 2 (Tier 2):** Cost comparison: Thumbtack $40/lead shared vs. $75 exclusive. References Angi and TaskRabbit. Moving platforms.
- ✓ **Template 3 (Tier 3):** Seasonal capacity play: "May through October — when snowbirds are gone — most movers struggle." Labor-only moving context.
- ✓ **Subject Lines:** "Are you losing Fort Myers move jobs to Thumbtack?" "Cut your Thumbtack costs" "How to fill your crew's calendar." All moving-specific.
- ✓ **Snowbird Urgency:** Follow-Up #2 (line 161-169): "Snowbird season runs November through April... movers who get set up in September and October always have their strongest winter seasons."
- **HVAC Detection:** 0 matches.

### Dashboard Analysis
- ✓ **Branding:** Navy (#1e3a8a) and orange (#f97316) explicitly defined. No HVAC color scheme.
- ✓ **Content:** Title "Fort Myers Movers — Operations Dashboard" (line 478). Subtitle "Labor-Only Moving Lead Generation" (line 479).
- ✓ **Launch Tasks:** 10 tasks all moving-specific: "Get Google Voice number for Fort Myers (239 area code)", "Research 10 Fort Myers/Cape Coral moving companies", "Launch Facebook ads... moving interests", "First contractor signed and receiving leads."
- ✓ **KPI Targets:** CPL <$50, Lead Quality >80%, 10-15 leads/day peak, $75/lead (lines 583-616).
- ✓ **Seasonal Calendar:** (lines 623-660) Nov-Apr PEAK (snowbirds), May-Jun secondary (summer moves), Jul-Aug maintenance, Sep-Oct ramp-up. Explicit snowbird context.
- ✓ **Project Links:** All 14 links reference FMM docs. No HVAC references.
- **HVAC Detection:** 0 matches.

### Boilerplate Analysis
- ✓ **City Variable System:** [CITY_NAME], [AREA_CODE], [TARGET_COUNTIES], [SNOWBIRD_MARKET], [PEAK_MONTHS], [SERVICE_RADIUS] — designed for geographic replication.
- ✓ **Snowbird Decision Tree:** Explicit YES/NO for snowbird markets (line 84-85: "Fort Myers = YES", 95: "Charlotte, Austin, Nashville = NO"). Seasonal tables differ by market type.
- ✓ **Go/No-Go Framework:** (lines 174-198) Scorecard with 8 criteria, decision rules (7-10 = GO, 5-6 = HOLD, <5 = NO GO).
- ✓ **All FMM Docs Referenced:** (lines 783-788) Appendix explicitly lists which FMM files to copy and what to change per city.
- ✓ **49 Placeholder Markers:** [PLACEHOLDER] appears 49 times throughout for city customization.
- ✓ **Moving-Not-HVAC Context:** Entire document premised on labor-only moving (line 4). Fort Myers as proven model (line 802). Zero HVAC language.
- **HVAC Detection:** 0 matches.

---

## Anti-Patterns Scan

| File | Pattern | Severity | Impact |
|------|---------|----------|--------|
| FMM-90-minute-execution.md | No stubs found | ✓ CLEAN | All 4 phases substantive, no TODOs, no "coming soon" |
| success-metrics.md | No stubs found | ✓ CLEAN | All metrics fully specified, examples concrete |
| contractor-research.md | "[RESEARCH NEEDED]" markers in contact table (lines 190-199) | ℹ️ INFO | Contact info incomplete but intentional — doc states "Research priority: Call Tier 1 prospects first." This is expected. Prospect profiles are complete. |
| email-templates.md | No stubs found | ✓ CLEAN | All 5 templates complete, best practices documented |
| omvp-fmm-dashboard.html | "(Add contractor)" placeholders in Active Partners table (lines 682-702) | ℹ️ INFO | Placeholder text for empty contractor rows is correct design pattern — table will be populated as contractors onboard |
| BOILERPLATE-NEW-CITY-ONBOARDING.md | 49 [PLACEHOLDER] instances | ✓ INTENTIONAL | By design — this is a boilerplate to be filled in per city. Placeholders are clearly marked and front-matter explains usage. No stubs. |

**Assessment:** No blocker anti-patterns. All "[RESEARCH NEEDED]" and "[PLACEHOLDER]" markers are intentional design elements, not incomplete work.

---

## Requirements Coverage

**Phase Requirements (from original goal):**

1. **Operational docs adapted from HVAC templates**
   - ✓ FMM-90-minute-execution.md: Adapted 4-phase framework (originally HVAC structure) → labor-only moving, Fort Myers specifics
   - ✓ Systems success-metrics.md: KPI system adapted with moving-specific targets and seasonal calendar
   - Status: **SATISFIED**

2. **Outreach docs with contractor prospects and email templates**
   - ✓ contractor-research.md: 10 Fort Myers/Cape Coral prospects in Tier system with research findings
   - ✓ email-templates.md: 5 complete templates (3 primary, 2 follow-ups) with Fort Myers pain points
   - Status: **SATISFIED**

3. **Project dashboard**
   - ✓ omvp-fmm-dashboard.html: Interactive dashboard with navy/orange branding, 10+ launch checklist, localStorage, KPI display, seasonal calendar
   - Status: **SATISFIED**

4. **New-city boilerplate**
   - ✓ BOILERPLATE-NEW-CITY-ONBOARDING.md: 6-section guide with Go/No-Go framework, snowbird decision tree, references all FMM docs, 49 placeholders for customization
   - Status: **SATISFIED**

**All phase requirements met.**

---

## Wiring Quality Assessment

### Artifact Wiring
- **Dashboard → Docs:** All 14 project links point to existing files with correct relative paths. No broken links (verified by grep).
- **Execution Plan → Success Metrics:** Phase 4 instructions (analytics, lead routing) directly supported by metrics checklist and KPI definitions.
- **Contractor Research → Email Templates:** Tier system in research doc directly maps to template selection in email doc.
- **All → Boilerplate:** Every FMM doc is cross-referenced in boilerplate appendix with explicit "what to copy" and "what to change" instructions.

### Substantive Assessment
- **No Thin Files:** Minimum line counts met (226, 291, 282, 236, 776, 810 lines). All documents are production-ready, not stubs.
- **No Placeholder-Only Sections:** Even placeholder-heavy sections (success-metrics examples, boilerplate customization) include complete Fort Myers reference data alongside placeholders.
- **No Import/Orphaned Status:** All documents are wired into dashboard (via links) or boilerplate (via explicit cross-references).

---

## Verification Summary

**Status: PASSED**

All 5 observable truths verified:
1. ✓ FMM-90-minute-execution.md exists, 226 lines, covers 4 phases with moving ROI calc
2. ✓ success-metrics.md exists, 291 lines, includes CPL <$50, quality >80%, 10-15 leads/day, daily/weekly/monthly checklist, red/yellow flags, snowbird seasonality
3. ✓ contractor-research.md exists, 282 lines, 10 Fort Myers/Cape Coral prospects (Tier 1/2/3) with opportunity scores and pitch angles
4. ✓ email-templates.md exists, 236 lines, 3 primary + 2 follow-up templates adapted for moving (not HVAC)
5. ✓ omvp-fmm-dashboard.html exists, 776 lines, interactive with navy/orange branding, 10-item checklist + localStorage, KPI targets, seasonal calendar

All Fort Myers specificity verified:
- Geography: Fort Myers, Cape Coral, Bonita Springs, Naples, Estero, Lee/Collier County throughout
- Service: Labor-only moving, $75/lead, $400-$800 job values, 60-70% close rates
- Seasonality: Snowbird Nov-Apr peak, May-Oct maintenance, May-Jun summer secondary
- No HVAC language detected in any document

Wiring complete:
- Dashboard links to all docs (relative paths, all targets exist)
- Execution plan → Metrics: Phase 4 flows to daily/weekly checklist
- Contractor research ↔ Email templates: Tier system maps to template selection
- All FMM docs → Boilerplate: Explicit cross-references with replication instructions

**Ready for production use and geographic expansion.**

---

_Verified: 2026-02-13_
_Verifier: Claude (gsd-verifier)_
