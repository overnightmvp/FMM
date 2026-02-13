# Project State — Fort Myers Movers (FMM)

## Current Position

Phase: 01 of 1 (01-fmm-docs-dashboard-boilerplate)
Plan: 04 of 4 in phase (01-01 complete, 01-02 complete, 01-03 complete, 01-04 complete)
Status: Phase complete
Last activity: 2026-02-13 — Completed 01-04-PLAN.md (new city onboarding boilerplate)

Progress: ████ 4/4 plans complete (100%)

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

## Blockers / Concerns

- All Tier 1–2 contractor contact info is [RESEARCH NEEDED] — manual research required before outreach can begin
- Email templates use placeholder social proof ([Company A], [Company B]) — real results needed once first contractor signs

## Completed Plans

| Plan | Name | Summary |
|------|------|---------|
| 01-01 | Operational Docs | docs/FMM-90-minute-execution.md + systems/success-metrics.md created |
| 01-02 | Contractor Outreach Docs | docs/contractor-research.md (10 prospects, Tier 1/2/3) + docs/email-templates.md (3 primary + 2 follow-up) |
| 01-03 | Operations Dashboard | omvp-fmm-dashboard.html: 6-card hub with localStorage checklist, doc links, KPIs, seasonal calendar |
| 01-04 | New City Boilerplate | docs/BOILERPLATE-NEW-CITY-ONBOARDING.md: 6-section replication guide, Go/No-Go scorecard, Tampa→Charlotte→Austin→Nashville expansion framework |

## Pending Plans

None — Phase 01 complete.

## Session Continuity

Last session: 2026-02-13T01:52:02Z
Stopped at: Completed 01-04-PLAN.md (final plan in Phase 01)
Resume file: None
Next plan: Phase 01 complete. Begin execution when new phase is planned.
