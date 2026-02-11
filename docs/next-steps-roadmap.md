# Next Steps Roadmap — Fort Myers Labor Only Movers

## Week 1: Launch Essentials

### Day 1–2: Technical Setup
- [ ] Replace `YOUR_FORM_ID` in `movers.js` with actual Formspree form ID
  - Create form at formspree.io → Settings → copy ID (e.g., `xpzgkrwb`)
- [ ] Replace `GTM-XXXXXXX` in `landing-page/index.html` with actual GTM container ID
  - Create container at tagmanager.google.com
- [ ] Replace `G-XXXXXXXXXX` in `movers.js` with actual GA4 Measurement ID
- [ ] Set up Google Voice number or keep (904) 479-8844 as primary
- [ ] Test form submission end-to-end (submit → email received)
- [ ] Test phone click-to-call on mobile

### Day 2–3: Hosting & Domain
- [ ] Upload to Hostinger OR deploy to Netlify (recommended — free, fast)
  - Netlify: `netlify.com/drop` → drag `fort-myers-movers/` folder
  - Custom domain: point `fortmyerslaboronlymovers.com` to Netlify
- [ ] Verify `robots.txt` accessible at root: `fortmyerslaboronlymovers.com/robots.txt`
- [ ] Verify `llm.txt` accessible: `fortmyerslaboronlymovers.com/llm.txt`
- [ ] Validate Schema.org: paste URL into `validator.schema.org`
- [ ] Submit sitemap to Google Search Console

### Day 3–4: Google Business Profile
- [ ] Claim/create at `business.google.com`
- [ ] Category: "Moving Company"
- [ ] Add all 6 service areas
- [ ] Upload 10+ photos (team, truck, equipment)
- [ ] Post first update (introductory offer)

---

## Week 2: First Customers

### Outreach to Existing Thumbtack Customers
- [ ] Message previous FlexHelp customers on Thumbtack
  - "We now offer direct booking at [link] — no bidding, better rates"
- [ ] Ask top 10 Thumbtack reviewers to also review on Google

### Facebook Ads Launch ($50/day)
- [ ] Create Facebook Business Manager account
- [ ] Campaign: "Moving Soon? We Load Your Truck."
- [ ] Target: Fort Myers + Cape Coral + Bonita Springs, 25–55, homeowners
- [ ] Ad creative: before/after, crew photo, price callout
- [ ] Landing page: `landing-page/index.html`

### Google Ads (Optional, Week 2–3)
- [ ] Campaign: Search — "fort myers labor movers" + variations
- [ ] Budget: $30/day
- [ ] Target keywords: [labor only movers fort myers], [moving help fort myers fl]
- [ ] Extension: Call extension with (904) 479-8844

---

## Month 1 Goals
- [ ] 50–100 qualified leads generated
- [ ] 1–2 contractor relationships established
- [ ] $3,750–$7,500 revenue
- [ ] 10+ Google reviews (from Thumbtack customers)
- [ ] Cost per lead ≤ $40

---

## Month 2: Scale

### Content Publishing
- [ ] Publish 2 blog articles (see SEO-CONTENT-STRATEGY.md)
- [ ] Submit all 6 content pages to Google Search Console
- [ ] Build 10 local citations (Yelp, Bing Places, Apple Maps, etc.)

### Lead Operations
- [ ] Set up Zapier: Form submission → Google Sheets + SMS alert
  - Zapier: formspree trigger → Google Sheets row + Twilio SMS
- [ ] Create Google Sheets lead tracker (Name, Phone, Date, Size, Status, Contractor)
- [ ] Set up CallRail for phone call tracking ($45/mo)

### Contractor Expansion
- [ ] Sign 2nd contractor (Cape Coral focused)
- [ ] Establish lead payment flow (Net 15, automated invoice)

---

## Month 3: Optimize

### SEO Results Review
- [ ] Check Google Search Console for ranking improvements
- [ ] Review which pages get most traffic → double down on content
- [ ] Publish remaining 6 blog articles

### Conversion Rate Optimization
- [ ] A/B test hero headline
- [ ] A/B test CTA button text ("Get Free Quote" vs "See My Price")
- [ ] Add exit-intent popup with phone number

### Expansion Planning
- [ ] Evaluate: Add Sarasota/Bradenton market (90 mi north)?
- [ ] Evaluate: Add Tampa market (130 mi north)?
- [ ] Template is ready — 6 variable changes to rebrand

---

## Replication Template (For New Cities)

To launch in a new city:
1. Duplicate `fort-myers-movers/` directory
2. Find/replace 6 values in `movers.css` (brand colors optional)
3. Find/replace city names and phone numbers across all HTML files
4. Update `llm.txt` with new city info
5. Update Schema.org `areaServed` arrays
6. New Formspree form ID per city (track separately)
7. Push to new subdirectory or separate domain
8. Estimated setup time: 2–3 hours per new city

**Template markets with similar demand:**
- Sarasota, FL (similar snowbird + retiree profile)
- Naples/Marco Island expansion
- Tampa Bay area (larger volume)
- Jacksonville, FL (existing FlexHelp market — easiest expansion)
