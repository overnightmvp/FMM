# Phase 01: OMVP-FMM Docs, Dashboard, and Boilerplate - Research

**Researched:** 2026-02-12
**Domain:** Lead generation operations (HVAC → Labor-only moving adaptation)
**Confidence:** HIGH (HVAC source materials directly applicable with localization)

## Summary

This research analyzes the OMVP-HVAC source materials to identify which documents are relevant for Fort Myers Movers (FMM), what adaptations are needed for moving services, and how to structure the FMM dashboard and boilerplate onboarding guide.

**Key Finding:** HVAC and labor-only moving are structurally identical lead gen businesses:
- Same revenue model: $75/lead sold to service providers
- Same funnel: landing page → form → contractor routing → payment tracking
- Same operations: outreach, metrics tracking, seasonal demand management
- Primary adaptation: Business-specific outreach/metrics, not technical reengineering

**Primary recommendation:** Adapt 7 of 9 HVAC docs (90% applicable), create FMM-specific contractor research + email templates, build dashboard for FMM metrics, and create boilerplate for replicating model to new cities (Charlotte, Austin, Tampa, etc.)

---

## Document Relevance Map

| Source File | Type | Relevance | FMM Adaptation |
|-------------|------|-----------|----------------|
| **90-minute-execution.md** | Operations | HIGH | Replace HVAC specifics (AC repair, emergency language) with moving logistics (move dates, service areas). Framework is 100% applicable. Add boilerplate version for new-city deployment. |
| **market-intel.md** | Strategy | HIGH | FMM already has superior version (Fort Myers-specific data, seasonal patterns, competitor analysis). Use HVAC template pattern but FMM content already superior. |
| **next-steps-roadmap.md** | Strategy | HIGH | Replace HVAC phase names/targets with moving milestones (contractor acquisition, lead volume growth, geographic expansion). Timeline and success metrics directly map. |
| **PROJECT-DASHBOARD-TEMPLATE.md** | Documentation | MEDIUM | This is a *meta* guide for building custom dashboards. Used to create FMM-specific dashboard HTML. FMM needs concrete implementation, not template. |
| **SEO-CONTENT-STRATEGY.md** | Content | MEDIUM | FMM already has equivalent (8 blog articles vs 8-week strategy). HVAC approach (weekly content, keyword targeting) matches FMM implementation. Use HVAC framework for future content audits. |
| **target-city-analysis.md** | Research | MEDIUM | HVAC model: single city deep-dive (Phoenix). FMM needs boilerplate version for multi-city replication (Charlotte, Austin, Tampa). Use HVAC structure as template. |
| **TECHNICAL-DEBT.md** | Operations | HIGH | Configuration variables, launch sequence, success criteria, monitoring checklists directly applicable. Form endpoint changes, phone number swaps, GA tracking ID only changes needed. |
| **validation-data.md** | Research | MEDIUM | HVAC market sizing ($13-30M emergency market) won't apply to moving labor, but framework for estimating market opportunity, pricing validation, and risk assessment is reusable for boilerplate. |
| **contractor-research.md** (outreach/) | Outreach | HIGH | Template is perfect (tier-based prospect lists, pain-point analysis, pitch angles). FMM needs new list: FlexHelp regional partners, local moving ops, storage unit operators. Exact structure applicable. |
| **email-templates.md** (outreach/) | Marketing | HIGH | Problem/solution/proof templates directly applicable. Swap AC repair language for labor-only moving language. Subject lines, follow-up sequence, CTA all reusable. |
| **launch-checklist.md** (systems/) | Operations | HIGH | 90% directly applicable (form testing, mobile QA, analytics setup, contractor outreach prep). Only changes: service-specific details (emergency service call → moving appointment, Phoenix metro → Fort Myers metro). |
| **lead-routing-setup.md** (systems/) | Operations | HIGH | Three-phase routing (manual → semi-auto → CRM) exactly matches FMM needs. Formspree, Zapier, Google Sheets implementation is identical. No adaptation needed. |
| **success-metrics.md** (systems/) | Operations | HIGH | KPI framework (cost per lead, quality score, daily volume, margin) 100% applicable. Only changes: HVAC targets (20 leads/day, $40 CPL) → moving targets (15-25 leads/day, $50-75 CPL). |
| **omvp-hvac-dashboard.html** | UI/UX | HIGH | Dashboard structure (launch checklist, project links, critical reality check) perfect template for FMM. Need FMM-specific task lists, metrics, links. |

---

## Document Prioritization for FMM Phase 01

### Tier 1 — Create New FMM Versions (Must Create)
These HVAC docs need FMM-specific content:
- **FMM-90-minute-execution.md** — Same structure, moving-specific language/details
- **FMM-contractor-research.md** — FlexHelp regional partners + local moving ops (new research)
- **FMM-email-templates.md** — Moving labor outreach (adapt problem/solution framework)
- **FMM-next-steps-roadmap.md** — Moving service milestones (adapt timeline/targets)
- **FMM-boilerplate-onboarding.md** — New city replication guide (combine target-city + 90-min execution + contractor research templates)
- **omvp-fmm-dashboard.html** — FMM-specific task tracking + metrics (adapt HVAC dashboard)

### Tier 2 — Reference (Already Exist in FMM)
FMM already has superior versions:
- market-intel.md ✅ (Fort Myers-specific market data done)
- SEO-CONTENT-STRATEGY.md ✅ (8 blog articles + keyword strategy done)

### Tier 3 — Use As-Is (No Adaptation Needed)
Operations/systems docs work identically:
- lead-routing-setup.md (Formspree/Zapier/Google Sheets identical)
- launch-checklist.md (swap 2-3 details, framework 100% applicable)
- success-metrics.md (KPI framework applicable, adjust targets only)

---

## Dashboard Analysis

### HVAC Dashboard Structure (`omvp-hvac-dashboard.html`)
The HVAC dashboard contains:

**Layout:**
- Hero section: "The Brutal Reality Check" message + call to action
- 3-column grid with card-based layout
- Inline CSS + vanilla JavaScript (no dependencies)
- localStorage-optional design (survives page refresh)

**Content Cards:**
1. **Launch Checklist** — 8 time-sensitive tasks (checkbox format)
2. **HVAC Lead Gen Project** — 5 quick links to key docs/systems
3. **Business Model Archive** — Links to related projects

**Design Patterns:**
- Aggressive urgency messaging ("summer heat is coming")
- Task lists with checkboxes (visual progress)
- Direct links to operations docs (context-aware navigation)
- Card-based information hierarchy
- Red accent color (#de350b) for warnings

### FMM Dashboard Requirements

**What to Keep from HVAC:**
- Card-based grid layout (responsive, clean)
- Checkbox-based launch task list
- Direct doc links navigation
- Urgency messaging adapted to moving seasonality

**What to Change for FMM:**
- Replace "Brutal Reality" with FMM's $75/lead moving labor positioning
- Swap HVAC urgency ("summer heat") with moving urgency ("snowbird season," "peak moving months")
- Replace HVAC project links with FMM docs:
  - Landing page
  - Contractor research (with 10+ regional partner prospects)
  - Email templates (moving-specific)
  - Launch checklist (FMM version)
  - Success metrics tracker
- Add FMM-specific metrics cards:
  - YTD leads generated
  - Current month revenue
  - Active contractor count
  - Cost per lead trend
- Swap "OMVP HVAC Dashboard" title with "Fort Myers Movers Dashboard"

**New Sections to Add:**
- **Seasonal Tracking:** November-April peak, May-August secondary peak (snowbird + summer moves)
- **Contractor Status:** List of active FlexHelp partners + their monthly volume
- **Marketing Campaigns:** Facebook ad spend tracker, lead source attribution
- **Quick Metrics:** Today's leads, this week's leads, this month YTD, last month total

---

## FMM Gaps (What HVAC Has That FMM Needs)

| Gap | HVAC Has | FMM Status | Action |
|-----|----------|-----------|--------|
| **Operational execution guide** | 90-minute-execution.md | Missing | Create FMM-90-minute-execution.md (adapt template) |
| **Contractor prospect research** | Tier-1/2/3 lists with contact info | Has sample (FlexHelp), needs expansion | Research 15-20 regional moving ops, local franchise ops, expand to 2-3 neighboring markets |
| **Outreach email templates** | 3 templates + 2 follow-ups | Missing | Adapt HVAC templates for labor-only positioning (pain points: quality crew, reliability, fair pricing) |
| **Success metrics framework** | Full KPI dashboard + daily checklists | Basic launch-only | Expand to include monthly KPI tracking, contractor-specific performance, seasonal trend analysis |
| **Lead routing operations guide** | 3-phase automation (manual → semi → CRM) | Phase 1 only | Already documented but needs contractor routing logic for multi-region |
| **Project dashboard** | HTML dashboard with task tracking | Missing | Create FMM-specific dashboard HTML |
| **New-city replication boilerplate** | Implied but not explicit | Missing | Create as Phase 01 deliverable (template for Charlotte, Austin, Tampa expansion) |
| **Seasonal demand management** | Winter HVAC demand pattern | Needed | Document snowbird season (Nov-Apr) + summer season (May-Aug) strategies, contractor allocation |

---

## Boilerplate Onboarding Scope

The boilerplate should be a **reusable playbook** for setting up the FMM model in a new city (Charlotte, Austin, Tampa, etc.) in 2-3 weeks.

### What the Boilerplate Should Cover

#### Section 1: Pre-Launch Research (Days 1-2)
**Inputs:** City name, population, moving season dates, competitor analysis
**Outputs:** Market opportunity score, target contractor list, seasonal demand model

- Market sizing (homeownership %, annual move rate %, market value)
- Competitor landscape (Thumbtack presence, local aggregators, franchise movers)
- Seasonal patterns (when do people move in this city?)
- Lead qualification criteria (geographic scope, home sizes)
- Pricing validation (what do contractors pay for leads in this market?)

**Template:** Adapt `target-city-analysis.md` (Phoenix model) into generic City X template

#### Section 2: Technical Setup (Days 3-4)
**Outputs:** Landing page live, form processing working, analytics tracking active

- Static HTML landing page template (adapt FMM landing page)
- Formspree form setup instructions
- Google Analytics + UTM tracking configuration
- Phone system (Google Voice or CallRail)
- Domain/hosting checklist

**Reference:** TECHNICAL-DEBT.md launch sequence, FMM's working setup

#### Section 3: Contractor Acquisition (Days 5-7)
**Outputs:** 3-5 contractor prospects identified, 5+ outreach emails sent

- Prospect research framework (Tier-1/2/3 qualification)
- Contact information gathering
- Pitch angles by contractor type (struggling small op vs. established chain)
- Email outreach templates (problem-focused, cost-savings, competitive threat)
- Follow-up sequence (48 hours, 1 week, final push)
- Demo call talking points

**Reference:** HVAC's contractor-research.md + email-templates.md as framework

#### Section 4: Campaign Launch (Week 2)
**Outputs:** First contractors signed, Facebook ads running, leads flowing

- Facebook Business Manager setup
- Ad creative guidelines (what works for moving services)
- Targeting strategy (homeowners, age ranges, interests)
- Budget allocation ($50-100/day test spend)
- Form submission → contractor routing workflow
- Quality control criteria (lead qualification)

**Reference:** launch-checklist.md + lead-routing-setup.md

#### Section 5: Operations & Scaling (Week 3+)
**Outputs:** Automated lead routing, success metrics tracked, contractor retention

- Lead tracking dashboard (Google Sheets template)
- Zapier automation (Formspree → Sheets → SMS alert)
- Invoice/payment process
- KPI targets (cost per lead, quality score, daily volume, margin)
- Seasonal demand management (peak season preparation)
- Contractor communication cadence

**Reference:** success-metrics.md + lead-routing-setup.md

#### Section 6: Geographic Expansion (Month 2+)
**Outputs:** Template for duplicating system to second/third city

- Decision framework: Which cities next? (population, homeownership %, move rate)
- Risk assessment: Will model work in different climate, seasonality?
- Contractor availability: Are there quality moving ops in this market?
- Campaign strategy: Tweak for local preferences
- Timeline: How long to hire first contractors?

**Reference:** Synthesize learnings from HVAC's multi-city planning (Phoenix → Tucson/Las Vegas expansion)

---

## Boilerplate Key Sections Detail

### Research Phase Template
```markdown
# New City Onboarding: [CITY]

## Market Intelligence
- Population: [X]
- Homeownership rate: [X]%
- Annual move rate: [X]%
- Total addressable market: $[X]M annually
- Seasonal patterns: [Peak months]

## Competitor Analysis
- National platforms (Thumbtack, Angi, TaskRabbit): [Weaknesses]
- Local franchises (Two Men and a Truck, etc.): [Positioning]
- Small local movers (Craigslist, Facebook): [Pricing]
- Our advantage: [Unique angle]

## Contractor Landscape
- Major moving companies: [10-15 prospects]
- Regional operators: [5-10 prospects]
- Freight/freight forwarding with labor: [3-5 prospects]
- Qualification: Reviews, service area, current marketing gaps

## Lead Qualification Criteria
- Geographic: [X-mile radius]
- Property types: Single-family, townhome, apartment (3+ bed minimum)
- Move urgency: Within 30 days
- Season: Peak season dates
- Home size range: 2-5 bedrooms (typical market)

## Pricing Validation
- What contractors currently pay: [X] per lead (HomeAdvisor, Angi)
- Our advantage: $75 exclusive, no competition
- Estimated contractor ROI: [X]x return
- Market-specific pricing adjustments: [if needed]

## Go/No-Go Decision
- Market opportunity score: [7-10]
- Why: [Key factors]
- Risk level: [Low/Medium]
- Recommended launch date: [Month]
```

### 90-Minute Execution Template (Adapted for New City)
```markdown
# 90-MINUTE ONBOARDING: [CITY]

## Phase 1: Foundation (20 min)
- Task 1: Market intel gathering (5 min) — Google searches, competitor websites
- Task 2: Landing page customization (5 min) — City name, phone number, service areas
- Task 3: Lead capture setup (5 min) — Formspree form, email routing
- Task 4: Basic validation (5 min) — Google Trends check, seasonal demand confirmation

## Phase 2: Content Creation (25 min)
- Headlines & copy (10 min) — "[CITY] Labor Moving Help" variations
- Visual assets (10 min) — Local examples, crew photos, testimonials
- Ad copy (5 min) — Facebook ad variations for [CITY] market

## Phase 3: Outreach Preparation (25 min)
- Contractor research (10 min) — Top 10 moving companies in [CITY]
- Email templates (10 min) — Personalized outreach to [CITY] prospects
- ROI calculator (5 min) — Lead cost ($75) × contractor average job value

## Phase 4: Launch Preparation (20 min)
- Analytics setup (5 min) — GA4 + UTM parameters
- Lead routing (10 min) — Form → email → contractor assignment
- Quality assurance (5 min) — Test entire funnel
```

### Contractor Prospecting Template
```markdown
# [CITY] CONTRACTOR PROSPECTS

## Tier 1: Perfect Targets (High need + good reviews)

### 1. [Company Name]
- Phone: [X]
- Reviews: [X]/5 ([Y] reviews)
- Service area: [Coverage]
- Current marketing: [Gaps identified]
- Opportunity score: [8-10]/10
- Pitch angle: "[Pain point] → Our solution"

[Repeat for 3-5 prospects]

## Tier 2: Good Targets
[Repeat structure]

## Tier 3: Stretch Targets
[Repeat structure]

## Contact Information
[Table with emails, best call times, decision makers]

## Outreach Strategy
- Tier 1 approach: [Problem-focused pitch]
- Tier 2 approach: [Cost-savings pitch]
- Tier 3 approach: [Growth/competitive threat pitch]
```

### Success Metrics Template
```markdown
# [CITY] SUCCESS METRICS

## Primary KPIs (Track Daily)
| Metric | Target | Formula |
| CPL (Cost Per Lead) | <$50 | Ad Spend ÷ Qualified Leads |
| Lead Quality Score | >80% | Accepted ÷ Total |
| Daily Lead Volume | 10-15 | Form submissions |
| Form Conversion Rate | >12% | Submissions ÷ Page Views |

## Weekly Targets
- Week 1: Proof of Concept (20 leads, $40 CPL, 1 contractor signed)
- Week 2: Optimization (35 leads, $35 CPL, 2 contractors active)
- Week 4: Scale Ready (60 leads, $30 CPL, 3-4 contractors)

## Monthly Revenue Targets
- Month 1: [X] leads × $75 = $[X] revenue
- Month 2: [X] leads (scaling) = $[X] revenue
- Month 3: [X] leads (full scale) = $[X] revenue
```

---

## Implementation Roadmap for Phase 01

**Deliverables (in order):**

1. **FMM-90-minute-execution.md** (Adapt HVAC version)
2. **FMM-contractor-research.md** (Research regional moving ops, 15+ prospects)
3. **FMM-email-templates.md** (Adapt HVAC templates for moving labor)
4. **FMM-next-steps-roadmap.md** (Adapt HVAC roadmap to FMM timeline)
5. **omvp-fmm-dashboard.html** (Create FMM-specific task dashboard)
6. **BOILERPLATE-NEW-CITY-ONBOARDING.md** (Master template for Charlotte, Austin, Tampa expansion)

**Estimated effort:**
- Documentation: 8-10 hours (adapt existing, new contractor research)
- Dashboard development: 2-3 hours (HTML/CSS/JS, ~200 lines)
- Testing & validation: 1-2 hours

**Success criteria:**
- All 6 deliverables created and internally consistent
- Dashboard HTML loads, tasks are checkboxable, links work
- Boilerplate is clear enough that someone unfamiliar with FMM can set up a new city model
- All FMM-specific details (phone, email, pricing, seasonal dates) use actual values
- Cross-references between docs are correct (links, metric consistency)

---

## Confidence Assessment

| Area | Level | Reason |
|------|-------|--------|
| Document relevance mapping | HIGH | Direct comparison of HVAC and FMM operations shows 80%+ structural similarity. Docs reviewed in full. |
| Dashboard design | HIGH | HVAC dashboard structure is simple, proven, and directly applicable. FMM already has working HTML/CSS examples. |
| Boilerplate scope | MEDIUM-HIGH | Framework is clear from HVAC docs, but boilerplate is new artifact requiring synthesis. No prior FMM boilerplate version to compare. |
| Email template adaptation | HIGH | HVAC templates follow universal persuasion patterns (problem/solution/proof). Swapping domain language is straightforward. |
| Contractor research process | HIGH | HVAC prospect tier system (Tier 1/2/3) is proven. FMM needs *execution* (actual prospect list) but process is identical. |
| Success metrics framework | HIGH | KPI models are identical (CPL, quality score, daily volume). Only variable is target numbers, which can be estimated from HVAC data. |
| Boilerplate geographic transferability | MEDIUM | Core model should work in Charlotte, Austin, Tampa (large metros, high move rates, similar contractor landscapes), but seasonal patterns differ (no snowbird season in Austin, different hurricane risk profile). Boilerplate should flag these. |

---

## Open Questions

1. **Multi-contractor routing complexity:** HVAC model assumes 1-3 contractors per city. FMM plans to scale to 5+ contractors. Should boilerplate include advanced routing logic (load-balancing, performance-based assignment), or keep Phase 01 simple?
   - **Recommendation:** Keep boilerplate simple (round-robin), note Phase 2 opportunity for performance-based routing.

2. **Seasonal demand management:** HVAC has 1 peak (summer 100%), 1 low (winter 20%). FMM has 2 peaks (Nov-Apr snowbirds, May-Aug summer) with different contractor needs. Should boilerplate include seasonal strategy templates?
   - **Recommendation:** Yes, create optional "Seasonal Demand Planning" section in boilerplate, flag which cities have/don't have snowbird patterns.

3. **Lead qualification differences by market:** Fort Myers emphasizes "snowbird seasonal residents," but Austin and Charlotte don't. Should boilerplate have market-specific qualification criteria templates?
   - **Recommendation:** Create base criteria template, note which cities require customization (spouse leads in retirement communities, military family moves in San Antonio, etc.).

4. **Who will maintain boilerplate?** If boilerplate is used for 3-4 cities, should there be a "boilerplate evolution" process to capture learnings from each new city launch?
   - **Recommendation:** Document Phase 01 as "v1.0 boilerplate," plan Phase 02 as "boilerplate refinement after Charlotte launch."

---

## Sources

### Primary (HIGH confidence)
- **HVAC Source Materials** (Direct comparison):
  - /OMVP-hvac copy/docs/ (90-minute-execution.md, market-intel.md, next-steps-roadmap.md, etc.)
  - /OMVP-hvac copy/outreach/ (contractor-research.md, email-templates.md)
  - /OMVP-hvac copy/systems/ (launch-checklist.md, lead-routing-setup.md, success-metrics.md)
  - /OMVP-hvac copy/omvp-hvac-dashboard.html

- **FMM Current State** (Direct file review):
  - /fort-myers-movers/docs/ (market-intel.md, SEO-CONTENT-STRATEGY.md)
  - /fort-myers-movers/systems/ (launch-checklist.md, lead-routing-setup.md, pricing-guide.md)
  - /fort-myers-movers/CLAUDE.md (project context)

### Secondary (MEDIUM confidence)
- Structural business model comparison (lead gen, $75/lead pricing, contractor-as-customer model, seasonal demand) based on documented similarity

---

## Metadata

**Confidence breakdown:**
- Document relevance mapping: HIGH — Full source docs reviewed
- Dashboard design recommendations: HIGH — Working HVAC example analyzed
- Boilerplate scope & structure: MEDIUM-HIGH — Framework clear, execution new
- Geographic transferability: MEDIUM — Core model proven for HVAC/FMM, unknown for Charlotte/Austin/Tampa until tested

**Research date:** 2026-02-12
**Valid until:** 2026-03-12 (30 days — business model is stable, minor updates expected)
**Next review trigger:** After first city expansion (Charlotte) launches, update boilerplate with learnings

---

## RESEARCH COMPLETE

**Phase:** 01 - OMVP-FMM Docs, Dashboard, and Boilerplate
**Confidence:** HIGH

### Key Findings

1. **HVAC source is 80%+ applicable** — Document relevance ranges HIGH to MEDIUM across all 13 source files. Structural adaptation (HVAC language → moving language) is straightforward.

2. **FMM already has superior market research** — market-intel.md and SEO-CONTENT-STRATEGY.md exceed HVAC equivalents. Reuse strategic framework, not content.

3. **Dashboard + boilerplate are synthesis tasks** — Not pure adaptation. Require extracting patterns from 13 source docs + FMM working setup, then templating for new-city replication.

4. **Contractor research is the execution bottleneck** — Boilerplate can describe process, but FMM-contractor-research.md and city-specific versions require actual research (Google Maps, Thumbtack scraping, LinkedIn outreach).

5. **Seasonal demand management is novel for boilerplate** — HVAC is 1 season (summer), FMM is 2 seasons (snowbirds + summer). Boilerplate should highlight this as customization point for Charlotte/Austin/Tampa.

### File Created

`/Users/toshioj/Projects/dojjjo/fort-myers-movers/.planning/phases/01-fmm-docs-dashboard-boilerplate/01-RESEARCH.md`

### Ready for Planning

Research complete. Planner can now create 6 task-based PLAN.md files:
1. Adapt HVAC execution guide for FMM
2. Research + document FMM contractor prospects
3. Create FMM email templates
4. Create FMM roadmap doc
5. Build FMM project dashboard
6. Create boilerplate for new-city onboarding
