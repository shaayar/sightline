# Sightline — Complete Product Package

This folder contains everything you need to launch and grow **Sightline**, a Chrome extension for web developers that provides guide lines, a box model inspector, and a CSS cascade debugger.

---

## 🚀 Next Steps (Launch in 4 Weeks)

### Week 1: Foundation

```text
□ Decision: Framer or Next.js for website?
□ Reserve domain: sightline.dev (Cloudflare Registrar, $12/yr)
□ Create Twitter: @buildsightline or @sightlinedev
□ Create Substack or Buttondown for email list
□ Create GitHub org: github.com/buildsightline
□ Create Canny.io board for feature voting
□ Create Indie Hackers account
□ ExtensionPay account (payment tier setup)
□ Email list goal: 50 people
```

### Week 2: Website Build

```text
□ Write website copy (use WEBSITE_SPEC.md sections as templates)
□ Build website on Framer (2-4 hours if experienced, 4-6h if first time)
□ Deploy to sightline.dev
□ Set up Google Analytics
□ Create 3 launch tweets (draft in Google Doc)
□ Email list goal: 150 people
```

### Week 3: CWS Submission

```text
□ Load extension unpacked in Chrome (Developer Mode → Load unpacked)
□ Test all features (guides, inspector, cascade)
□ Submit to Chrome Web Store (CWS submission)
□ CWS review typically takes 1-3 business days
□ If rejected: fix issues, resubmit immediately
□ Email list goal: 300 people
□ Build beta tester list: 10-20 people
```

### Week 4: Launch Coordination

```text
□ CWS approval (should be live by now)
□ Day 0 (launch day):
  - Email announcement
  - Twitter thread
  - Product Hunt submission
  - Reddit posts (r/webdev, r/web_development)
  - Indie Hackers announcement
  - Monitor & respond to comments

□ Days 1-7: Stay active
  - Answer questions on Product Hunt, Twitter, Reddit
  - Fix any bug reports within 24h
  - Track metrics: installs, Pro conversions, review ratings

□ Week 2: First content
  - Blog post: "Announcing Sightline"
  - Email follow-up: "Thank you for installing"
  - GitHub README enhancements
```

---

## 📊 Key Metrics to Track

**Launch day:**

- Product Hunt upvotes (target: 50+, top 3)
- Installs from CWS (target: 200-500)
- Email subscribers (target: 100+ new)
- Twitter followers (target: 50+)

**Month 1:**

- Total installs (target: 2,000)
- Free → Pro conversions (target: 30-40, ~2% rate)
- Monthly Recurring Revenue (MRR) (target: $150-300)
- Website traffic (target: 1,500 visits)

**Month 3:**

- Total installs (target: 12,000)
- MRR (target: $1,500)
- Email subscribers (target: 1,200)
- Blog organic traffic (target: 500/month)

---

## 💰 Monetization

**Pricing:**

- **Free:** $0, max 5 guides, limited inspector (20/day)
- **Pro:** $5/month or $29 lifetime, unlimited everything
- **Team:** $12/seat/month (minimum 3 seats), Figma overlay, annotations

**Revenue model:**

- ExtensionPay handles payments (3% fee on revenue > $1K/month)
- Simple: users click upgrade → ExtensionPay → license issued
- No backend needed

**Expected Year 1:**

- Month 1: $300 MRR
- Month 6: $5,000 MRR
- Month 12: $12,000 MRR

---

## 🛠️ Tech Stack (Final)

**Extension:**

- Chrome MV3 manifest
- Vanilla JavaScript (no dependencies)
- `chrome.storage.local` for persistence
- `chrome.action` for icon click
- `chrome.runtime.sendMessage` for cross-tab sync

**Website:**

- **Option A (recommended):** Framer (no-code, 2-3h)
- **Option B:** Next.js + Vercel (React, 4-6h, full control)

**Payment:**

- ExtensionPay + Stripe

**Support:**

- Email: <support@sightline.dev> (via Forwardmail, $3/mo)
- GitHub Issues (free)
- Canny.io (free for <100 posts)

**Analytics:**

- Google Analytics 4 (free)
- Chrome Web Store dashboard (installs, ratings, reviews)
- ExtensionPay dashboard (revenue, signups)

**Total Year 1 cost:** ~$200-400

---

## 📖 How to Use These Documents

### `WEBSITE_SPEC.md`

**When to use:** Building the website

- Use the page specs to write copy
- Copy-paste the Stitch AI prompt if using that tool
- Reference the FAQ section for content

### `MARKETING_STRATEGY.md`

**When to use:** Planning launches, growing the product

- **Pre-launch:** Read Section 1
- **Launch day:** Read Section 2 + Launch Checklist
- **Month 1-3:** Read Section 3 + Content Marketing (Section 6)
- **Ongoing:** Check metrics (Section 9) monthly

### `MARKETING_SUMMARY.txt`

**When to use:** Quick reference, sharing with team

- Share with anyone who needs the TL;DR
- Print or share as a one-pager

### `PRD.md` (inside sightline.zip)

**When to use:** Planning features, hiring, raising funds

- Defines all feature specifications
- Maps the 4-phase roadmap (v1.0 → v2.0)
- Documents open questions

### `LAUNCH_GUIDE.md` (inside sightline.zip)

**When to use:** Setting up payments, legal, support

- ExtensionPay integration guide (copy-paste code)
- Privacy Policy + Terms templates
- Support system setup

---

## ⚠️ Common Mistakes to Avoid

1. **Launching without a website** — Users can't verify you're legit without one
2. **Launching without a launch plan** — Coordination matters; Product Hunt on day 1 = 3x the visibility
3. **Ignoring community** — Every comment deserves a response in first week (builds goodwill, viral potential)
4. **Not building email list before launch** — Your list is your megaphone; don't skip it
5. **Trying to build admin panel immediately** — Use manual tools first; add dashboards when you have data
6. **Overpromising, underdelivering** — Deliver what you promise; surprises can be good, but broken promises are fatal

---

## 🎯 Success Criteria

**You'll know the product is working when:**
