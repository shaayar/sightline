# Sightline — Marketing Strategy & Growth Plan

**Timeline:** Pre-launch (3 weeks) → Launch (week 1) → Growth (months 1-12)

---

## Table of Contents

1. [Pre-Launch Strategy (Weeks -3 to 0)](#1-pre-launch-strategy)
2. [Launch Week Strategy](#2-launch-week-strategy)
3. [Post-Launch Growth (Months 1-3)](#3-post-launch-growth)
4. [Long-Term Growth (Months 3-12)](#4-long-term-growth)
5. [Marketing Channels Deep-Dive](#5-marketing-channels-deep-dive)
6. [Content Marketing & SEO](#6-content-marketing--seo)
7. [Community & Partnerships](#7-community--partnerships)
8. [Paid Acquisition (Optional)](#8-paid-acquisition-optional)
9. [Metrics & Success Goals](#9-metrics--success-goals)
10. [Budget Breakdown](#10-budget-breakdown-year-1)

---

## 1. Pre-Launch Strategy (Weeks -3 to 0)

### 1.1 Build your audience before you ship

#### Week -3: Set up channels & create teaser content

- [ ] Create Twitter account (@sightlinedev or @buildsightline)
  - Bio: "CSS debugging, finally visible. Launching May 2026 → Sign up for early access"
  - Pin a tweet with a GIF of the inspector in action
  
- [ ] Create GitHub org: `github.com/buildsightline`
  - Repo: `sightline-extension` (public)
  - Readme with roadmap, features, license
  - Invite early testers to Issues/Discussions
  
- [ ] Create Canny.io board for feature voting
  - URL: `canny.io/sightline`
  - Seed with your v1.1 + v1.2 roadmap from PRD
  
- [ ] Indie Hackers account (@sightline)
  - Write a post: "Building a CSS debugging tool for developers"
  - Explain the pain point, your solution, link to GitHub
  
- [ ] Email list signup (Substack or Buttondown)
  - URL: `sightline.dev/early-access` (landing page on Framer)
  - Email sequence: v1 release announcement + launch discount (7-day free Pro trial)

**Teaser content (2-3 tweets/week):**

- "why does it take 10 clicks to find out WHY your CSS isn't working?" + pain screenshot
- "building a tool that shows CSS specificity in real time. first look at what the cascade panel shows →" + screenshot
- "guide lines that sync across tabs. because design refs are hard to keep track of. 48 hours to launch." + GIF

**Build a community pre-launch:**

- Goal: 200-500 people on email list by launch day
- 20-50 beta testers using the extension before public launch

---

### 1.2 Set up paid infrastructure

- [ ] Chrome Web Store developer account: $5 one-time fee
- [ ] Domain: sightline.dev via Cloudflare Registrar (~$12/yr)
- [ ] Hosting: Vercel (free tier, connect GitHub)
- [ ] ExtensionPay account: create payment tier
- [ ] Email service: Forwardmail ($3/mo) + Substack/Buttondown (free)
- [ ] Analytics: Google Analytics 4 (free)
- [ ] Support system:
  - Email: <support@sightline.dev> (forwarded to your inbox)
  - GitHub Issues for bugs
  - Canny.io for feature requests
  
**Total cost:** ~$15/mo

---

### 1.3 Website launch

- [ ] Build website on Framer (3-4 hours)
  - Homepage, Features, Pricing, FAQ, Privacy, Terms
  - Deploy to sightline.dev
  - Set up Google Analytics
  - Submit to Google Search Console
  
- [ ] Create 3 blog posts for SEO (optional, can skip for MVP)
  - "CSS Specificity Explained (And How to Debug It)"
  - "The Complete Guide to CSS Box Model"
  - "How to Clone a Website (Developer's Checklist)"
  - Publish on Substack or Medium for backlinks

---

## 2. Launch Week Strategy

### 2.1 Chrome Web Store submission (Day -5)

**Pre-submission checklist:**

- [ ] Manifest updated to v1.0.0
- [ ] All 4 icons present (16, 32, 48, 128px)
- [ ] Content script doesn't have console errors
- [ ] Privacy Policy link in store listing
- [ ] Terms link in store listing
- [ ] Store description: full feature list, benefits
- [ ] Screenshots (1280x800): tray visible, inspector overlays, cascade panel
- [ ] Permissions justified (explain `storage` and `tabs`)

**CWS listing copy:**

```text
Name: Sightline — Design Inspector & Guide Lines
Short desc: Guide lines, box model inspector, CSS cascade debugger 
          for pixel-perfect web development.
Full desc: [see LAUNCH_GUIDE.md for full text]
```

**Review timeline:** 1-3 business days. If rejected, resubmit immediately with their feedback addressed.

---

### 2.2 Launch day (Day 0) — Coordinated announcement

**Timeline:**

#### 8am UTC — Announce to existing audience

- [ ] Email list: "Sightline is live on the Chrome Web Store"
  - Subject: "Sightline is live 🚀 + get 7 days free Pro"
  - Link to CWS + website
  - Offer: 7-day free Pro trial code (send via ExtensionPay)

- [ ] Twitter thread: announce launch + pain points

  ```text
  Launching Sightline today → CSS debugging, finally visible
  
  • Drop guide lines on any page (sync across tabs)
  • Hover element → see spacing, colors, font in real time
  • CSS cascade panel → find out why your styles aren't working
  
  Free forever + $5/mo Pro tier
  
  Install: [CWS link]
  Website: sightline.dev
  ```

#### 9am UTC — Product Hunt submission

- [ ] Submit to Product Hunt (hunt.co/products/sightline)
  - Tagline: "Chrome extension for pixel-perfect web development"
  - Video: 10-second screen recording of inspector in action
  - Gallery: 5-8 screenshots (hero, features, pricing)
  - Description: write it like you're talking to a developer
  
- [ ] PH posting tips:
  - Maker Post (your intro as founder): "I built this because I was tired of..."
  - Be active in comments (respond to every question)
  - Engage with other makers' posts
  - Goal: Top 3 "Product of the Day" for max visibility

#### 10am UTC — Indie Hackers launch

- [ ] Post a launch announcement: "Launched Sightline, an open CSS debugger for web devs"
  - Share the story: why you built it, pain point, demo
  - Link to GitHub (show you're transparent)
  - IH audience is technical + supportive

#### 11am UTC — Twitter amplification

- [ ] Retweet comments, answer questions, thank people for installing
- [ ] Tag people in your space:
  - @addyosmani (Chrome team)
  - @wesbos (educator, has large dev following)
  - @getify (web platform expert)
  - CSS/DevTools thought leaders
  - Do NOT spam; just tag genuinely relevant people

#### 12pm UTC — Reddit + Dev communities

- [ ] Post to r/webdev, r/web_development, r/golang (if you built it in Go)
  - Title: "I built Sightline, a Chrome extension to debug CSS and measure spacing"
  - Link to website + GitHub
  - Be ready to answer technical questions
  - Do NOT spam multiple subreddits; 1-2 max

#### 2pm UTC — LinkedIn update

- [ ] Post on your personal LinkedIn
  - Include a 30-second video of the inspector
  - Write a personal story: why you built this, what problem it solves
  - LinkedIn algorithm favors video + founder credibility

#### 5pm UTC — Newsletter/blog post

- [ ] Publish a blog post: "Announcing Sightline: CSS Debugging Reimagined"
  - On your website (or Medium for backlinks)
  - Tell the story behind the tool
  - Show before/after (DevTools struggle vs Sightline ease)
  - Link to install

#### Evening: Monitor + respond

- [ ] Watch for reviews on Product Hunt, Reddit, Twitter
- [ ] Respond to every comment, every question
- [ ] If someone reports a bug, treat it as urgent
- [ ] Celebrate wins: thank early adopters, retweet good reviews

**Expected launch week results:**

- 500-1,500 installs
- 50-100 upvotes on Product Hunt
- 50-200 email subscribers
- 2-5 bug reports (handle immediately)

---

## 3. Post-Launch Growth (Months 1-3)

### 3.1 Content marketing — the long-tail engine

#### Goal: 5-10 organic installs/day by end of Month 3 (via SEO)

**Publish 1 blog post every 2 weeks (6 total by Month 3):**

1. **"CSS Specificity Calculator: Why Your Styles Aren't Applying"**
   - Explain (0,1,0) notation, give examples
   - Show how Sightline's cascade debugger solves this
   - Target keyword: "CSS specificity calculator" (50 searches/mo)

2. **"Box Model Explained: Margin vs Padding vs Border"**
   - Diagram showing the 4 layers
   - Common mistakes (e.g., margin collapse)
   - How Sightline's visual overlay helps
   - Target: "CSS box model" (100 searches/mo)

3. **"Clone a Website: Step-by-Step Developer's Guide"**
   - Pain points of cloning websites
   - Role of guides, measurement tools, spacing tools
   - How Sightline fits into the workflow
   - Target: "clone website HTML CSS" (30 searches/mo)

4. **"CSS DevTools Tips & Tricks You Might Have Missed"**
   - Compare Chrome DevTools vs Sightline
   - When to use each
   - Multi-tool workflow
   - Target: "Chrome DevTools CSS" (50+ searches/mo)

5. **"Pixel-Perfect Web Design: What It Means & How to Build It"**
   - Definition, why it matters
   - Tools needed (guides, inspector, color picker)
   - Case study: real website clone-out
   - Target: "pixel perfect web design" (20 searches/mo)

6. **"Responsive Design Testing Without DevTools"**
   - Test breakpoints visually
   - Use Sightline's responsive breakpoint bar
   - Testing checklist
   - Target: "responsive design testing" (25 searches/mo)

**Distribution:**

- Publish on sightline.dev/blog
- Syndicate to Dev.to (free, good SEO + traffic)
- Cross-post to Medium for backlinks
- Share on Twitter + LinkedIn (2x/week minimum)
- Email list gets 24h early access

**Expected SEO results:**

- Week 4: 50 organic visits/week from blog
- Week 8: 150 organic visits/week from blog
- Week 12: 300+ organic visits/week
- Conv rate: 3-5% = 5-15 installs/day organic by Month 3

---

### 3.2 Community engagement

**Weekly:**

- [ ] Monitor GitHub Issues, Canny.io, Twitter mentions
- [ ] Respond to all questions/feedback within 24h
- [ ] Share user screenshots/testimonials on Twitter
- [ ] Weekly Twitter "Tips & Tricks" thread (usage tips)

**Monthly:**

- [ ] Send email update to subscribers:
  - New features shipped in v1.1
  - Top feature requests from Canny
  - Success stories from users
  - "Most viewed blog post" highlight

**Quarterly:**

- [ ] Interview 3-5 early users (15-min Zoom calls)
  - Ask: how are they using it? what's missing? feature requests?
  - Record highlights for case studies / testimonials
  - Feature them on website: "Built by developers, for developers"

---

### 3.3 Paid acquisition experiments (Month 2-3, optional)

**Only start if:**

- You have $500+ budget
- You're getting 10+ organic installs/day
- Free → Pro conversion is > 2%

**Test channels:**

#### Google Search Ads (most relevant for developer tools)

- Budget: $20/day × 30 days = $600/month
- Keywords: "CSS debugger", "web developer tools", "CSS specificity checker"
- Landing page: /features (detailed, increases conversion)
- Target CPA: $2-5 (customer acquisition cost)
- Expected: 120-300 clicks × 3-5% conversion = 4-15 signups

#### Twitter Ads (brand awareness)

- Budget: $10/day × 30 days = $300/month
- Objective: Website visits (to sightline.dev/features)
- Target: software developers, DevTools followers
- Expected: 1,500-3,000 visits × 5-10% conversion = 75-300 installs

#### Skip for now

- Facebook/Instagram Ads (wrong audience)
- LinkedIn Ads (too expensive for dev tools)
- Programmatic display ads (low ROI for extensions)

---

## 4. Long-Term Growth (Months 3-12)

### 4.1 Roadmap-driven marketing

**v1.1 launch (Month 1.5):**

- "Color eyedropper + font inspector now available"
- Blog: "Why Font Inspection Matters in Design QA"
- Screenshot: eyedropper showing hex + rgb + hsl
- Email: "Pro features you asked for"

**v1.2 launch (Month 3):**

- "CSS grid overlay + screenshot with guides"
- Blog: "Building Responsive Layouts: CSS Grid Done Right"
- Video: 30-second demo of grid snapping guides
- Twitter thread: grid use cases

**v2.0 / Team tier launch (Month 6):**

- "Sightline for Teams: Design QA collaboration"
- Case study: [Agency name] uses Sightline Team for QA
- Blog: "How teams ship pixel-perfect websites 2x faster"
- Webinar: "Design-Dev handoffs, reimagined"

---

### 4.2 Partnerships & integrations

**Reach out to:**

1. **CSS/DevTools education creators**
   - Contact: @addyosmani, @wesbos, @jaredpalmer
   - Offer: free Pro tier + early access to new features
   - Ask: can you demo Sightline in a video/article?

2. **Web development bootcamps**
   - Schools: General Assembly, Ironhack, Flatiron
   - Offer: educational discount (free Pro for students/teachers)
   - Get in touch: admissions teams, curriculum directors

3. **Design tool companies**
   - Figma, Framer, Webflow, etc.
   - Partnership idea: "From Figma to code: QA with Sightline"
   - Cross-promote in each other's communities

4. **Web development agencies**
   - Agencies using Webflow, Framer, custom dev
   - Case study: show time saved, quality improved
   - Volume discount for Team tier

5. **Chrome/Chromium team**
   - Mention: @ChromeDevTools
   - Blog: "Sightline: A community tool for Chrome DevTools power users"
   - Goal: featured in Chrome Dev community newsletter

---

### 4.3 Paid acquisition scaling

**If organic + earned media is working (>$3K MRR), scale paid:**

- Double Google Search Ads budget (if CAC < $5)
- Test YouTube pre-roll ads targeting web dev channels
- Sponsorship of web dev newsletters: JavaScript Weekly, CSS-Tricks, etc.
- Budget: $2K-3K/month

---

## 5. Marketing Channels Deep-Dive

### 5.1 Product Hunt

**Why it matters:** One launch can yield 500-2,000 installs.

**Strategy:**

1. Build your reputation on PH *before* launch (2-3 weeks prior)
   - Comment thoughtfully on dev tool launches
   - Upvote products you genuinely like
   - Get to "Ship" status (required to launch)

2. On launch day:
   - Post as early as possible (usually 12:01am PST for better ranking)
   - Post a maker comment introducing yourself
   - Update product details immediately (v1.1 teaser, roadmap)
   - Respond to every comment within 1h
   - Share in dev communities (Reddit, Twitter, Discord)

3. Day 2-3: maintain momentum
   - Thank upvoters publicly
   - Respond to feature requests
   - Share screenshots of positive comments

**Expected:** 200-500 installs, 50-150 upvotes (target top 3-5)

---

### 5.2 Twitter / X

**Why it matters:** Developer audience is active. Real-time engagement = visibility.

**Posting cadence:**

- 2-3 tweets/week (let's say Tuesday + Thursday + 1 spontaneous)
- Retweet + engage: 10-15 min/day responding to mentions

**Content types:**

1. **Educational** (1/week)
   - "Did you know: inline styles always beat stylesheet rules. Here's why..."
   - Use screenshot + explanation
   - Gets: 20-50 retweets, 100-300 likes

2. **Product updates** (1/week)
   - "New in Sightline: cascade panel now shows which file each rule comes from"
   - GIF showing the feature
   - CTA: "Update your extension" or "Try Pro"
   - Gets: 10-30 retweets, 50-150 likes

3. **Engagement / community** (1/week)
   - "What's your biggest CSS debugging frustration? (drop a reply)"
   - Responses = product ideas, testimonials
   - Gets: 5-15 retweets, 30-100 likes, valuable feedback

4. **Spontaneous** (as things happen)
   - Viral CSS gotcha ("why your z-index isn't working")
   - Celebrate user wins ("@developer just shipped pixel-perfect")
   - Retweet good threads about CSS/DevTools

**Goal:** 500-1,000 followers by Month 6, 2,000 by Month 12

---

### 5.3 Email marketing

**List building:**

- Grow to 500 by Month 1
- Grow to 2,000 by Month 6
- Grow to 5,000 by Month 12

**Email sequence for new subscribers:**

1. Day 0: Welcome + thank you
2. Day 2: "5 CSS mistakes you're probably making" (educational value)
3. Day 4: "How Sightline solves the cascade problem" (soft sell)
4. Day 7: "7-day free Pro trial" (offer)
5. Week 2: Monthly digest (features shipped, blog highlights)

**Ongoing (weekly or bi-weekly):**

- Feature highlights
- Blog post roundup
- Community wins
- New guides (extension gets updates)
- Exclusive Pro tips

**Open rate target:** 25-35% (dev audiences are engaged)
**Click-through rate target:** 5-10%

---

## 6. Content Marketing & SEO

### 6.1 Blog strategy (long-term play, Month 3+)

**Why blogs work:**

- Blog post on "CSS specificity" = 100+ organic visits/month for years
- Each post links back to Sightline → ~3-5% conversion
- Blog becomes your marketing engine

**SEO best practices:**

- Title tag: keyword at start ("CSS Specificity Calculator:...")
- Meta desc: 155 chars, include keyword + benefit
- Headings: h1 (title), h2 (sections), h3 (subsections)
- Internal linking: 3-5 links to other blog posts + product pages
- Call-to-action: end with "Try Sightline free" link
- Image alt text: descriptive, includes keyword once

**Publishing platform:**

- Primary: sightline.dev/blog (your property)
- Syndicate to: Dev.to (reach + SEO credit)
- Cross-post to: Medium (if you want backlinks)
- Avoid: Medium as primary (they own the traffic)

**Keyword research:**

- Use Google Keyword Planner (free)
- Look for: 20-50 monthly searches, low competition, dev-focused
- Examples: "CSS box model", "CSS debugger", "specificity calculator"
- Avoid: super competitive terms ("CSS tutorial") unless you're top-tier

---

### 6.2 Backlink strategy

**Goal:** Get 20-30 quality backlinks by Month 12 (helps SEO ranking)

**Tactics:**

1. Submit to dev directories
   - Chrome Web Store (primary)
   - Product Hunt (launch)
   - Dev.to (publish content there)
   - Indie Hackers (product listing)
   - Hacker News (submit novel blog posts)

2. Outreach to dev bloggers
   - "I loved your post on CSS. I built a tool that solves the problem you mentioned. Would you be interested in checking it out?"
   - Not a hard sell, just a genuine connection
   - If they mention it, you get a backlink

3. Guest posting
   - Pitch articles to CSS-Tricks, Dev.to, Smashing Magazine
   - Topics: "CSS cascade visualization", "design-dev handoff best practices"
   - Author bio includes link to sightline.dev

4. Link to Sightline from your own content
   - Link from GitHub README to website
   - Link from blog posts to /features page
   - Mention in answers on Stack Overflow

---

## 7. Community & Partnerships

### 7.1 Developer communities

**Active presence in:**

- **Reddit:** r/webdev, r/web_development
  - Post helpful comments (builds credibility, not promotion)
  - Monthly "Ask Me Anything" about CSS debugging
  - Share blog posts if highly relevant (no spam)

- **Dev.to:** republish blog content
  - Engage with others' posts
  - Answer questions in comments
  - Join relevant community tags (#javascript, #css, #devtools)

- **Hacker News:** submit novel blog posts
  - Title format: "I built Sightline: CSS debugging for web devs"
  - Can get 100+ upvotes, 1000+ visitors if it resonates

- **Discord communities:**
  - WebDevelopers Discord
  - Indie Developers Discord
  - CSS-Tricks Discord
  - Be helpful, not promotional

- **Slack communities:**
  - Your city's dev Slack
  - Tech community Slacks
  - Answer questions, help people

---

### 7.2 Partner outreach

**Month 3-6 partnerships to explore:**

1. **Educational creators**
   - @wesbos (Syntax podcast, Courses)
   - @addyosmani (Chrome DevTools, YouTube)
   - @jaredpalmer (Formik, web dev commentary)
   - Pitch: "Would you be interested in featuring Sightline?"

2. **Bootcamps / schools**
   - General Assembly, Ironhack, Codecademy
   - Offer: free Pro accounts for students/instructors
   - Get mentioned in curriculum ("tools we recommend")

3. **Agencies**
   - Reachout: "We've built Sightline for teams doing pixel-perfect QA. Interested in learning more?"
   - Case study: use case in their process

---

## 8. Paid Acquisition (Optional)

### 8.1 When to start paid ads

**Prerequisites:**

- 10+ organic installs/day
- Free → Pro conversion > 2%
- You have $500+ budget
- You've validated product-market fit

### 8.2 Google Search Ads

**Best channel for dev tools.**

**Setup:**

- Create Google Ads account
- Campaign: "Sightline - Brand Awareness"
- Keywords: "CSS debugger", "CSS specificity", "web dev tools", "Chrome extension inspect"
- Landing page: /features
- Budget: $15-20/day to start

**Expected metrics:**

- Avg CPC: $0.50-1.50 (low for dev tools)
- CTR: 3-5% (should be high if ads are good)
- Conversion (visit → install): 5-10%
- CPA: $2-5

### 8.3 Twitter Ads

**Objective:** Website traffic / reach

**Setup:**

- Campaign: "Sightline - Get More Installs"
- Audience: software developers, DevTools followers, designer followers
- Budget: $5-10/day
- Creative: 10-second video showing inspector in action

**Expected metrics:**

- CPM: $2-5
- CTR: 0.5-1.5%
- CPA: $3-8 (higher than search)

---

## 9. Metrics & Success Goals

### 9.1 Monthly targets

| Metric | Month 1 | Month 3 | Month 6 | Month 12 |
|--------|---------|---------|---------|----------|
| Total Installs | 2,000 | 12,000 | 35,000 | 100,000 |
| Weekly Active Users | 500 | 4,000 | 10,000 | 25,000 |
| Free → Pro conversion | 1.5% | 2.5% | 3% | 3.5% |
| MRR | $300 | $1,500 | $5,000 | $12,000 |
| Email subscribers | 300 | 1,200 | 3,000 | 8,000 |
| Website traffic | 1,500 | 8,000 | 20,000 | 50,000 |
| Blog organic traffic | 0 | 500 | 2,000 | 5,000 |
| Twitter followers | 200 | 800 | 2,000 | 5,000 |

### 9.2 Key leading indicators

Track these weekly:

- **Installs** (from CWS dashboard)
- **Free → Pro conversions** (from ExtensionPay)
- **Website traffic** (Google Analytics)
- **Support emails** (volume, sentiment)
- **GitHub stars** (community interest)
- **Product Hunt ranking** (on launch day)
- **Twitter mentions** (reach, sentiment)

---

## 10. Budget Breakdown (Year 1)

| Item | Monthly | Annual | Notes |
|------|---------|--------|-------|
| Domain (sightline.dev) | — | $12 | One-time |
| Email (Forwardmail) | $3 | $36 | <support@sightline.dev> |
| Email marketing (Substack) | $0 | $0 | Free tier |
| Hosting (Vercel) | $0 | $0 | Free tier for hobby |
| Analytics (GA4) | $0 | $0 | Free |
| Payment processor (ExtensionPay) | 0% until $1K revenue | — | 3% after $1K |
| Google Search Ads (Month 3+) | $0-20 | $0-200 | Optional, scale based on ROI |
| Content tools (Grammarly, etc.) | $0-10 | $0-120 | Optional |
| **TOTAL** | **$3-33** | **$48-368** | **Very lean** |

**Year 1 profitability scenario:**

- If you hit $3K MRR by Month 9 = $27K/year
- Subtract $400 costs = **$26,600 profit**
- 12-18h/week of your time

---

## 11. Launch Checklist

### One week before launch

- [ ] Website live on sightline.dev
- [ ] Chrome Web Store submission (under review)
- [ ] ExtensionPay tier created
- [ ] Privacy + Terms pages done
- [ ] Email list built to 100+ people
- [ ] Twitter account active (5-10 followers)
- [ ] Canny.io board seeded
- [ ] GitHub public (README complete)
- [ ] Product Hunt account ready

### Launch day

- [ ] Email announcement
- [ ] Twitter thread
- [ ] Product Hunt submission
- [ ] Reddit post
- [ ] Indie Hackers post
- [ ] LinkedIn update
- [ ] Monitor + respond to feedback
- [ ] Track metrics

### Week 1 post-launch

- [ ] Analyze PH performance
- [ ] Respond to all reviews
- [ ] Ship any critical bug fixes
- [ ] First blog post: announce launch
- [ ] Follow-up email sequence

### Month 1

- [ ] 2x blog posts
- [ ] Monitor churn (should be <5%)
- [ ] Interview 3 early users for feedback
- [ ] Decide on v1.1 roadmap based on feedback

---

## 12. Quick Reference: Messaging Framework

Use this language across all channels:

**Problem:** "CSS debugging is painful. DevTools is buried, specificity is invisible, spacing is hard to measure."

**Solution:** "Sightline surfaces the 20% of DevTools you use 80% of the time directly on the page."

**Benefits:**

- **Developers cloning websites:** pixel-perfect guides synced across tabs
- **Design QA teams:** instant visual feedback on spacing and colors
- **CSS learners:** understand the cascade, stop guessing why styles don't apply

**Proof:** "4,000+ developers, 4.8★ rating, free + $5/mo Pro tier"

**Call-to-action:** "Install free, try Pro for 7 days"

---

## 13. 30-60-90 Day Plan

### Days 1-30: Launch & validation

- Goal: 1,000+ installs, 20+ Pro conversions, validate demand
- Activities: engage community, respond to all feedback, tweak features based on reviews
- Success metric: > 2% free → Pro conversion

### Days 31-60: Optimize & scale

- Goal: 5,000 installs, 100+ Pro conversions, organic growth
- Activities: publish 3 blog posts, test paid ads (Google Search), feature requests prioritization
- Success metric: organic installs hitting 10+/day

### Days 61-90: Growth & roadmap

- Goal: 10,000 installs, 250+ Pro conversions, plan v1.1
- Activities: first partnership outreach, v1.1 feature planning, bigger blog push
- Success metric: > $500 MRR, clear product differentiation in market
