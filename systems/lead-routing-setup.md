# Lead Routing Setup

## Flow Overview

```
Website Form Submit
      ↓
Formspree (collects lead data)
      ↓
Email → info@fortmyersmovers.com (instant notification)
      ↓
Zapier (optional automation)
  ├── Google Sheets (lead log)
  └── SMS via Twilio (instant alert to phone)
      ↓
Manual follow-up call within 10 minutes
      ↓
Qualify → Route to contractor
      ↓
Google Sheets update (status, contractor assigned, paid/unpaid)
```

---

## Step 1: Formspree Setup (Free)

1. Go to `formspree.io` → Sign up free
2. Create new form: "Fort Myers Movers Lead Form"
3. Settings → Email notifications → `info@fortmyersmovers.com`
4. Copy your Form ID (e.g., `xpzgkrwb`)
5. In `landing-page/assets/movers.js`, replace:
   ```
   FORM_ENDPOINT: 'https://formspree.io/f/YOUR_FORM_ID'
   ```
   With:
   ```
   FORM_ENDPOINT: 'https://formspree.io/f/xpzgkrwb'
   ```

**Fields captured automatically:**
- name, phone, move_date, bedrooms, moving_from, moving_to, notes
- bedrooms (from calculator), addons, estimated_price

---

## Step 2: Google Sheets Lead Tracker

Create a Google Sheet with columns:
| Lead Date | Name | Phone | Move Date | Size | From | To | Addons | Est. Price | Status | Contractor | Lead Paid |
|---|---|---|---|---|---|---|---|---|---|---|---|

**Status options:** New → Called → Qualified → Routed → Closed → No Answer

---

## Step 3: Zapier Automation (Optional, $20/mo)

**Trigger:** New Formspree submission
**Actions:**
1. Add row to Google Sheets (all form fields)
2. Send SMS via Twilio: "NEW LEAD: [Name] [Phone] — [Size] bed move on [Date] from [From] to [To]"

**Setup:**
- zapier.com → New Zap
- Trigger: Formspree → New Submission
- Action 1: Google Sheets → Create Spreadsheet Row
- Action 2: Twilio → Send SMS

---

## Step 4: Contractor Routing

### Qualification Criteria
- Fort Myers metro area (within 50 miles)
- Valid phone number
- Move date within 30 days
- Home size: 1–5 bedrooms

### Routing Logic
- **Fort Myers / Lehigh Acres:** Contractor A (primary)
- **Cape Coral / North Fort Myers:** Contractor B (if available)
- **Bonita Springs / Naples:** Contractor A or C (negotiate coverage)

### Lead Handoff Protocol
1. Call lead within 10 minutes of form submission
2. Confirm move details (date, size, from/to, parking situation)
3. Confirm deposit ($75) — collect via Venmo, Zelle, or credit card
4. Send to contractor via SMS: "LEAD CONFIRMED: [Name] [Phone] [Date] [Address] [Size]"
5. Update Google Sheets → Status: Routed

---

## Step 5: Payment Collection

**Deposit ($75):**
- Collect at booking via: Venmo / Zelle / Square link
- Square payment link: `squareup.com/pay/[your-link]` (create free)
- Note in Sheets: Deposit Paid ✓

**Lead fee from contractor ($75):**
- Invoice via Wave (free invoicing at wave.com)
- Net 15 payment terms
- Invoice includes: Lead date, customer name, move date, lead fee
- Non-payment = lead access revoked immediately

---

## Month 2 Upgrade: CallRail ($45/mo)

When volume reaches 20+ leads/month, add CallRail:
- Tracks which ads/pages generate calls
- Records calls for quality control
- Separate numbers per campaign (Facebook vs Google vs organic)
- Reports: call duration, location, first-time vs repeat
