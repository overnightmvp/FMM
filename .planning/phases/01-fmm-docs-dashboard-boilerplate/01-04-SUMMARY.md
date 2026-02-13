---
phase: "01"
plan: "04"
subsystem: "documentation"
tags: ["boilerplate", "expansion", "onboarding", "replication", "operations"]

dependency-graph:
  requires:
    - "01-01 (FMM-90-minute-execution.md, success-metrics.md)"
    - "01-02 (contractor-research.md, email-templates.md)"
  provides:
    - "docs/BOILERPLATE-NEW-CITY-ONBOARDING.md — master replication guide"
    - "City expansion framework: Tampa → Charlotte → Austin → Nashville"
    - "Go/No-Go scorecard for market validation"
  affects:
    - "Future city launches (Tampa, Charlotte, Austin, Nashville)"
    - "Any contractor or junior operator handed the expansion playbook"

tech-stack:
  added: []
  patterns:
    - "6-section onboarding playbook with explicit Go/No-Go gate at Section 1"
    - "Variable substitution system ([PLACEHOLDER] markers) for rapid city configuration"
    - "Snowbird vs. non-snowbird seasonal model bifurcation"

key-files:
  created:
    - "docs/BOILERPLATE-NEW-CITY-ONBOARDING.md"
  modified: []

decisions:
  - id: "D9"
    decision: "Go/No-Go scorecard requires score ≥ 7/10 to proceed to technical setup"
    rationale: "Prevents wasted setup work on markets that don't fit the model; 2-hour research saves 2 weeks of wasted effort"
  - id: "D10"
    decision: "Expansion city priority: Tampa → Charlotte → Austin → Nashville"
    rationale: "Tampa first for Florida licensing/snowbird overlap; Charlotte second for simple non-snowbird model validation; Austin/Nashville follow"
  - id: "D11"
    decision: "Snowbird vs. non-snowbird bifurcation explicit in seasonal calendar section"
    rationale: "Fort Myers peak (Nov-Apr) is inverted vs. Charlotte/Austin (Apr-Aug); an operator must make a conscious choice, not default to Fort Myers calendar"
  - id: "D12"
    decision: "116 [PLACEHOLDER] markers throughout document — all city-specific values marked"
    rationale: "Removes guesswork for operators; every variable that requires local research is explicitly flagged"

metrics:
  duration: "4 minutes"
  completed: "2026-02-13"
---

# Phase 01 Plan 04: New City Onboarding Boilerplate Summary

**One-liner:** 810-line replication playbook synthesizing all FMM docs into a 6-section Go/No-Go → launch → scale guide for Charlotte, Austin, Tampa, and Nashville expansion.

---

## What Was Built

`docs/BOILERPLATE-NEW-CITY-ONBOARDING.md` — a master replication guide for launching the labor-only moving lead gen model in a new city in 2-3 weeks instead of 2-3 months.

**Document structure:**
- Section 1: Pre-Launch Research (Days 1-2) — market sizing, competitor analysis, seasonal demand, Go/No-Go scorecard
- Section 2: Technical Setup (Days 3-5) — landing page, Formspree, phone, GA4, QA checklist
- Section 3: Contractor Acquisition (Days 6-10) — prospect research, outreach, demo call script, onboarding checklist
- Section 4: Campaign Launch (Week 2) — Facebook ads, creative guidelines, lead quality control, first week optimization
- Section 5: Operations & Scaling (Week 3+) — Google Sheets, Zapier automation, invoicing, KPI rhythm, contractor retention
- Section 6: Geographic Expansion (Month 2+) — when to expand, city selection framework, what transfers vs. what to customize, 90-day timeline
- Appendix: Variable reference sheet, template files list, version history

---

## Key Design Decisions

### Decision D9: Go/No-Go Gate Between Sections 1 and 2
Score ≥ 7/10 required to proceed. Score < 5 = explicit NO GO. The gate is enforced twice (scorecard section AND Section 2 prerequisite note). Prevents operators from burning ad spend on markets that don't fit the model.

### Decision D10: City Priority Order
Tampa → Charlotte → Austin → Nashville. Tampa prioritized because Florida licensing transfers, partial snowbird market overlaps with Fort Myers expertise, and large metro with proven demand. Charlotte is the first pure non-snowbird city (simpler seasonal model = clean proof-of-concept for the boilerplate in a non-snowbird context).

### Decision D11: Snowbird vs. Non-Snowbird Seasonal Model
Section 1.3 explicitly bifurcates: [SNOWBIRD_MARKET] = YES gets the Fort Myers Nov-Apr peak model; [SNOWBIRD_MARKET] = NO gets the standard school-year-transition model (May-Jun peak). Military base cities and college towns get separate callout notes. An operator cannot accidentally apply the wrong seasonal calendar — it requires an explicit YES/NO choice.

### Decision D12: 116 Placeholder Markers
Every city-specific variable (city name, area code, counties, peak months, domains, GA4 IDs, form endpoints, phone numbers) is tagged with [PLACEHOLDER] or a named variable like [CITY_NAME], [METRO_AREA], [TARGET_COUNTIES]. This removes guesswork and ensures a new operator knows exactly what requires local research vs. what copies directly.

---

## Cross-References to FMM Template Docs

All four Wave 1 docs are referenced inline at the section where they're most useful:

| Doc | Where Referenced | Usage |
|-----|-----------------|-------|
| `docs/FMM-90-minute-execution.md` | Section 2.4 (Analytics Setup), Appendix | Analytics setup template + full execution structure |
| `docs/contractor-research.md` | Section 3.1 (Prospect Research), 3.2 (Outreach), Appendix | Tier system, prospect table format, pitch angles |
| `docs/email-templates.md` | Section 3.2 (Outreach Execution), Appendix | All 5 templates as copy base |
| `systems/success-metrics.md` | Section 4 intro, 4.3, 4.4, 5.4 intro, Appendix | KPI targets, monitoring checklists, warning indicators |
| `systems/lead-routing-setup.md` | Section 5.2 (Zapier), Appendix | 3-phase automation setup |
| `systems/launch-checklist.md` | Appendix | Pre-launch QA checklist |

---

## Deviations from Plan

None — plan executed exactly as written.

---

## Next Phase Readiness

Phase 01 is now 4/4 plans complete (pending 01-03 confirmation from STATE.md — 01-04 was executed as the final plan in the wave).

**To activate the boilerplate:**
1. Choose a city (Tampa recommended as first expansion)
2. Run Section 1 scorecard (2 hours)
3. If score ≥ 7, proceed through Sections 2-6
4. Update boilerplate to v1.1 after first city launch with learnings

**Open item:** All Tier 1-2 contractor contact info in `docs/contractor-research.md` remains [RESEARCH NEEDED]. Manual lookup required before Fort Myers outreach can begin. This is a known blocker documented in STATE.md.
