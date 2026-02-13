---
phase: 01-fmm-docs-dashboard-boilerplate
plan: "01"
subsystem: operational-docs
tags: [fort-myers, moving, lead-gen, kpi, seasonal, snowbird]

dependency-graph:
  requires: []
  provides:
    - FMM 90-minute launch execution guide
    - KPI framework with seasonal demand targets
  affects:
    - 01-02: contractor-outreach (ROI calculator and email templates defined)
    - 01-03: dashboard (KPI metrics established for display)
    - 01-04: ads setup (CPL targets and seasonal budget schedule defined)

tech-stack:
  added: []
  patterns:
    - Markdown operational documentation
    - Seasonal demand modeling (Nov-Apr peak / May-Sep maintenance)

key-files:
  created:
    - docs/FMM-90-minute-execution.md
    - systems/success-metrics.md
  modified: []

decisions:
  - id: d1
    decision: "FMM CPL target set at <$50 (vs HVAC template's <$40)"
    rationale: "Moving is a planned purchase, not an emergency service. Lower urgency means slightly higher acquisition cost. $50 still yields strong margins at $75/lead."
  - id: d2
    decision: "Seasonal demand split: Nov-Apr peak ($80-100/day ads), May-Sep maintenance ($20-40/day)"
    rationale: "Fort Myers snowbird season (Nov-Apr) drives 60%+ of annual moving demand. Contractors who launch in October capture the full peak season."
  - id: d3
    decision: "Daily lead volume targets: 10-15 (peak season) / 5-8 (off-peak) instead of flat 10-20"
    rationale: "Fort Myers market has pronounced seasonality. Flat targets ignore reality; season-adjusted targets give accurate performance signals."
  - id: d4
    decision: "Monthly revenue baseline set at $7,500 (100 leads x $75) not $11,250"
    rationale: "Conservative baseline matches downside scenario — better to exceed targets than miss optimistic projections in first 90 days."

metrics:
  duration: "4 minutes"
  completed: "2026-02-13"
---

# Phase 01 Plan 01: Operational Documentation Summary

**One-liner:** FMM launch docs with snowbird-seasonal KPIs: CPL <$50, 10-15 leads/day peak, $7,500/month MRR at 100 leads x $75.

## What Was Built

Two production-quality operational documents adapted from HVAC source templates for Fort Myers Movers (FMM), a labor-only moving lead generation business targeting the Fort Myers, FL metro area.

### docs/FMM-90-minute-execution.md (226 lines)

A 4-phase launch execution guide structured for a 90-minute initial sprint:

- **Phase 1 (20 min):** Market intel (Google "labor only movers Fort Myers"), landing page activation at `landing-page/index.html`, Formspree lead capture setup, demand validation via Google Trends + snowbird season confirmation
- **Phase 2 (25 min):** Moving-specific headlines ("Need Help Moving? We Send the Crew"), snowbird seasonal ad copy, Facebook targeting for homeowners 45-70 in Fort Myers/Cape Coral/Naples
- **Phase 3 (25 min):** Contractor research protocol (Google Maps, filter 1-5 truck ops with 4+ stars), email/text templates with exclusive $75/lead pitch, ROI calculator (6-16x return at $75/lead vs $800-1,200 avg job)
- **Phase 4 (20 min):** GA4 setup with moving-specific events (form_submit, phone_click, map_interaction), Formspree → Gmail → SMS lead routing via Zapier, quality assurance

Includes: seasonal demand calendar, 48-hour success metrics, and critical next steps.

### systems/success-metrics.md (291 lines)

A comprehensive KPI framework with daily/weekly/monthly targets:

- **Primary KPIs:** CPL <$50, quality score >80%, 10-15 leads/day (peak) / 5-8 (off-peak), form CVR >12%
- **Revenue metrics:** $7,500/month MRR (100 leads × $75), 60%+ margin, $13,500 LTV per contractor
- **Weekly ramp:** Week 1 = 15 leads at $50 CPL; Week 2 = 25 leads at $45 CPL; Week 4 = 45 leads at $40 CPL
- **Seasonal Demand Management section:** Full calendar with per-period ad budgets, lead volume targets, and revenue projections
- **Warning indicators:** Red = CPL >$70 for 3+ days; Yellow = CPL $50-70; Red = acceptance <65%
- **Daily monitoring checklist:** Morning/midday/evening with snowbird-season specific items

## Decisions Made

| ID | Decision | Rationale |
|----|----------|-----------|
| D1 | CPL target <$50 (not <$40) | Moving = planned purchase, not emergency. Slightly higher CAC accepted. |
| D2 | Peak budget Nov-Apr ($80-100/day), maintenance May-Sep ($20-40/day) | Snowbird seasonality drives 60%+ of annual demand |
| D3 | Season-adjusted lead volume targets (10-15 peak / 5-8 off-peak) | Flat targets misread performance in a seasonal market |
| D4 | MRR baseline $7,500 (100 leads, not 200) | Conservative baseline avoids month-1 target disappointment |

## Deviations from Plan

None — plan executed exactly as written. One minor cleanup: removed incidental HVAC comparison reference in success-metrics.md warning indicator.

## Next Phase Readiness

These documents provide the operational foundation for:

- **01-02 (Contractor Outreach):** ROI calculator in execution guide, email templates, and research protocol ready for contractor-research.md build
- **01-03 (Dashboard):** KPI targets and seasonal schedule defined for dashboard display
- **01-04 (Ads Setup):** CPL targets ($50 peak, $40 optimized), campaign structure, and seasonal budget schedule all specified

**No blockers identified.** Both documents are production-ready and can be used immediately for launch operations.
