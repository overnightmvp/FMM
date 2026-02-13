---
phase: 01-fmm-docs-dashboard-boilerplate
plan: 02
subsystem: outreach-docs
tags: [contractor-acquisition, email-templates, prospect-research, fort-myers, moving]

dependency-graph:
  requires: []
  provides:
    - docs/contractor-research.md — 10-prospect Tier 1/2/3 list for Fort Myers/Cape Coral/Naples movers
    - docs/email-templates.md — 3 primary + 2 follow-up outreach templates for labor-only moving
  affects:
    - 01-03 (dashboard boilerplate may link to these docs)
    - Contractor acquisition execution (these are the action artifacts)

tech-stack:
  added: []
  patterns:
    - Tier 1/2/3 prospect classification (adapted from HVAC source)
    - Problem-focused / Cost-savings / Capacity outreach template framework

key-files:
  created:
    - docs/contractor-research.md
    - docs/email-templates.md
  modified: []

decisions:
  - id: D1
    decision: "Tier 1 pitch angle: search invisibility (not emergency urgency)"
    rationale: "Moving is not an emergency service like HVAC. The primary Tier 1 pain is being invisible to mobile searchers who find Thumbtack instead. Urgency comes from snowbird season timing, not crisis response."
  - id: D2
    decision: "Seasonal urgency: snowbird season (not summer heat)"
    rationale: "Fort Myers market has inverted seasonality vs Phoenix HVAC. Peak demand is Nov–Apr (snowbird arrivals/departures). Urgency hook is October setup for November snowbird season, not summer peak."
  - id: D3
    decision: "Marked all unverifiable contacts as [RESEARCH NEEDED]"
    rationale: "Using realistic Fort Myers market placeholder company names rather than fabricating specific phone numbers. Prevents sending to wrong numbers. Research step before outreach maintains credibility."
  - id: D4
    decision: "Template 3 reframed as slow-season capacity fill (not competitive threat)"
    rationale: "Tier 3 (larger movers) don't respond to 'you're invisible' framing — they have marketing. The real pain is May–October dead weeks with crew still on payroll. Capacity fill angle addresses real pain."

metrics:
  duration: "4 minutes"
  completed: "2026-02-13"
  tasks-completed: 2
  tasks-total: 2
---

# Phase 01 Plan 02: Contractor Outreach Docs Summary

**One-liner:** Fort Myers moving contractor prospect list (10 prospects, Tier 1/2/3) and 5 outreach templates adapted from HVAC framework for labor-only moving and snowbird season market.

---

## What Was Built

Two execution-ready outreach documents for FMM contractor acquisition:

**docs/contractor-research.md**
- 10 prospect profiles organized in Tier 1 (4), Tier 2 (4), Tier 3 (2) format
- Each profile: company name, website, phone, reviews, service area, current marketing, lead generation pain, opportunity score, pitch angle
- Contact information table with best call times
- Qualification criteria (green light / red light indicators)
- Outreach strategy by tier with email template mapping
- Pricing reference ($75/lead, contractor ROI 5–6x)
- Success metrics: 30% open rate, 10% response rate, 1 contractor signed at $1,125/month

**docs/email-templates.md**
- Template 1: Problem-Focused — search invisibility for Tier 1 movers, snowbird season P.S.
- Template 2: Cost-Savings — Thumbtack/Angi shared lead math for Tier 2 movers
- Template 3: Seasonal/Capacity — slow-season crew calendar fill for Tier 3 movers
- Follow-Up #1: 48-hour 3-bullet summary version
- Follow-Up #2: Final snowbird season urgency (last contact)
- Tracking metrics table, best practices, A/B testing variables

---

## Deviations from Plan

None — plan executed exactly as written.

---

## Decisions Made

| ID | Decision | Rationale |
|---|---|---|
| D1 | Tier 1 pitch: search invisibility, not emergency urgency | Moving is not an emergency service — HVAC urgency framing doesn't apply |
| D2 | Seasonal urgency: snowbird season, not summer heat | Fort Myers peak is Nov–Apr, inverted vs Phoenix HVAC market |
| D3 | Unverifiable contacts marked [RESEARCH NEEDED] | Prevents outreach to wrong numbers; credibility requires verification |
| D4 | Template 3 reframed as slow-season capacity fill | Tier 3 movers have marketing — the real pain is dead weeks with crew on payroll |

---

## Next Phase Readiness

**Blockers:** None

**Contractor acquisition can start immediately:**
- Tier 1 prospects ready to research and contact this week
- Templates require only [Name], [Company Name], and star rating personalization
- Follow-up sequence defined (48hr + 1 week)

**Concerns for future plans:**
- All Tier 1–2 contacts are [RESEARCH NEEDED] — manual lookup required before outreach
- Template 2 social proof uses placeholder company names — real results needed once first contractor signs
