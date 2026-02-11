# AI Visibility Strategy — Fort Myers Labor Only Movers

## The Competitive Moat

Static HTML is the single biggest competitive advantage over every JS-rendered competitor.

**Why it matters:** GPTBot, ClaudeBot, and PerplexityBot do not execute JavaScript. The current live site (React/Hostinger) is invisible to all three. Our static rebuild is indexed on day 1.

---

## What We Implemented

### 1. `llm.txt` (Root Level)
First-party brand authority file. When an LLM indexes the site, `llm.txt` provides structured, authoritative facts:
- Business description and service definitions
- Exact pricing (prevents hallucination)
- Service area with distances
- Social proof stats (4.9★, 247+ reviews, 15 yrs)
- FAQ answers in natural language

**Benefit:** LLMs prefer citing sources that have explicit `llm.txt` files. Competitors (Angi, Thumbtack, TaskRabbit) don't have one for this specific business.

### 2. `robots.txt` — Explicit AI Crawler Permissions
Every AI crawler is explicitly allowed:
```
GPTBot, ChatGPT-User, OAI-SearchBot    → OpenAI/ChatGPT
ClaudeBot, anthropic-ai, Claude-Web    → Anthropic/Claude
PerplexityBot                          → Perplexity AI
Google-Extended                        → Google AI Overviews (SGE)
CCBot                                  → Common Crawl (training data)
cohere-ai                              → Cohere
```
Bytespider (TikTok scraper), AhrefsBot, SemrushBot are blocked.

### 3. Schema.org Structured Data
Every page has `MovingCompany` schema with:
- `aggregateRating`: 4.9 / 247 reviews (enables rich snippets)
- `areaServed`: All 6 cities (local pack eligibility)
- `priceRange`: "$300-$800" (shows in search results)
- `FAQPage` schema on landing page (FAQ rich results)

Content pages have `Service` schema with city-specific `areaServed`.

### 4. Static HTML — Content in Initial Response
Every word on every page is in the initial HTML response. Zero JavaScript required to see any content. This means:
- Google indexes content on first crawl
- AI crawlers get full content without JS execution
- Core Web Vitals score improves (no CLS from JS injection)

---

## Competitive Landscape (from Thumbtack Audit)

| Competitor | AI Visibility Score | Key Weakness |
|---|---|---|
| Thumbtack.com | 62/100 | JS-heavy, generic listings |
| Angi.com | High | No business-specific llm.txt |
| TaskRabbit | Medium | No Schema.org for this business |
| HomeAdvisor | High | Generic, no local content depth |
| **Our site** | **Day-1 advantage** | None — built for AI from scratch |

**Why we win:** Competitors are national aggregators with generic content. Our site is hyper-local, specific, and structured for AI citation.

---

## AI Search Query Targets

Queries where we should appear in AI-generated answers:

1. "Who are the best labor-only movers in Fort Myers?"
2. "How much does it cost to hire movers in Fort Myers?"
3. "What is labor-only moving and is it cheaper?"
4. "Moving help Fort Myers — load my PODS container"
5. "Best movers Cape Coral FL"
6. "How much does a 2-bedroom move cost in Southwest Florida?"

---

## Ongoing AI Visibility Actions

### Content Updates (Monthly)
- Update `llm.txt` whenever pricing, reviews, or services change
- Add new FAQs based on actual customer questions
- Keep review count current in Schema.org

### New Content (Quarterly)
- Blog articles targeting "best X in Fort Myers" queries
- City-specific FAQ additions
- Service area expansion pages

### Monitoring
- Track referrals from Perplexity (perplexity.ai in referrer)
- Monitor ChatGPT citations using brand name searches
- Check Google AI Overviews for target queries monthly

---

## Technical Validation

Run these checks after any content update:

```bash
# Schema.org validation
# Paste URL into: https://validator.schema.org/

# AI crawler access test
curl -A "GPTBot" https://fortmyerslaboronlymovers.com/
curl -A "ClaudeBot" https://fortmyerslaboronlymovers.com/

# robots.txt check
curl https://fortmyerslaboronlymovers.com/robots.txt

# llm.txt check
curl https://fortmyerslaboronlymovers.com/llm.txt

# View source — confirm content visible without JS
curl https://fortmyerslaboronlymovers.com/ | grep "Fort Myers"
```
