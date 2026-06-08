# Sightline Website — Page Specifications & Stitch AI Prompt

---

## Part 1: Detailed Page Content Specifications

### 1. Homepage (/)

**Goal:** Drive installs. Convert visitor in < 3 seconds.

**Layout:**
```
Hero section (above fold)
  ├─ Headline: "CSS Cascade. Finally visible."
  ├─ Subheadline: "See every CSS rule, spacing, and color on any webpage in real time."
  ├─ CTA button: "Install free on Chrome" (links to CWS)
  ├─ Hero image: animated GIF showing inspector in action (element hover → overlays appear)
  └─ Social proof: "4,000+ users • 4.8★ rating • Trusted by freelancers & agencies"

Problem statement section
  ├─ "The CSS problem nobody talks about:"
  ├─ "Debugging CSS takes 10x longer than it should."
  │   • DevTools requires 3 clicks and a tab switch
  │   • Specificity wars go unsolved
  │   • Colors, fonts, spacing are hard to measure
  └─ [Screenshot: Chrome DevTools mess vs Sightline clean overlay]

Feature highlights (3 columns)
  ├─ Guide lines (blue icon)
  │   └─ "Drop guides on any page. They sync across tabs."
  ├─ Box model (green icon)
  │   └─ "Hover any element. See margins, padding, borders instantly."
  └─ CSS cascade (purple icon)
      └─ "Find out WHY your CSS isn't working. Finally."

Pricing teaser
  ├─ Free: $0, max 5 guides
  ├─ Pro: $5/mo, unlimited everything
  └─ [CTA: "See full pricing"]

Testimonial carousel (optional but high-conversion)
  ├─ "Saved me 5 hours a week cloning designs." — @frontenddev_co
  ├─ "The cascade debugger is a game changer." — @designqaengineer
  └─ "My entire team uses this. Worth every penny." — @agency_lead

FAQ teaser
  ├─ Q: "Does it work on localhost?"
  ├─ Q: "Is my data collected?"
  └─ [Link: "See all FAQs"]

Footer
  ├─ Links: Privacy | Terms | Changelog | Blog | Support
  ├─ Social: Twitter, GitHub
  └─ Copyright + email
```

**Tone:** Confident but not sleazy. Developer-to-developer. "We get the pain."

---

### 2. Features Page (/features)

**Goal:** Explain each feature deeply. Reassure power users.

**Layout:**
```
Feature 1: Guide Lines
  ├─ Headline: "Guide Lines That Sync Across Tabs"
  ├─ Description: 
  │   "Drop a blue horizontal or amber vertical guide at any pixel position.
  │    It stays there on every open tab. No more squinting between windows."
  ├─ Key details:
  │   • Drop guides with ─ H and │ V buttons
  │   • Drag to reposition; coordinate badge updates live
  │   • Free: max 5 guides; Pro: unlimited
  │   • Guides persist across browser restart
  │   • Works on any webpage (github.com, localhost, staging)
  ├─ Video/GIF: 6-second demo — open tab A + B, drop guide on A, switch to B, guide is there
  └─ Use case: "Clone a design while keeping the reference visible"

Feature 2: Box Model Inspector
  ├─ Headline: "Spacing Made Visible"
  ├─ Description:
  │   "Hover any element. See its margin (orange), border (brown), 
  │    padding (green), and content area (blue) as overlays."
  ├─ Key details:
  │   • Coloured overlays stack realistically (like DevTools)
  │   • Tooltip shows: px + rem values, font info, computed color
  │   • One-click: click ◈ Inspect or press I
  │   • Works on all elements (text, buttons, containers, cards)
  │   • Free: limited to 20/day; Pro: unlimited
  ├─ Screenshot: e.g. card component with coloured overlays labeled
  └─ Use case: "Verify spacing matches the design spec to the pixel"

Feature 3: CSS Cascade Debugger (Pro)
  ├─ Headline: "Finally Understand Your CSS"
  ├─ Description:
  │   "Hover any element. A panel shows every CSS rule that matches it,
  │    sorted by specificity. See which rule wins, which is overridden, why."
  ├─ Key details:
  │   • Lists all matched CSS rules
  │   • Shows specificity score (0,2,1) for each rule
  │   • Overridden properties shown with strikethrough
  │   • Displays source file (stylesheet or <style>)
  │   • !important flags highlighted
  │   • Inline styles always shown first (highest priority)
  ├─ Screenshot: panel showing 5+ rules, topmost in green (winning)
  └─ Use case: "Debug 'why isn't my CSS working?' in seconds, not hours"

Comparison section
  └─ Table: Sightline vs WhatFont vs CSS Peeper vs PerfectPixel vs Hoverify
     (Sightline = only one with guides + cascade together)

Pro features list
  ├─ Everything above, plus (v1.1):
  │   • Color eyedropper (hex/rgb/hsl, auto-copy)
  │   • Font inspector (family, size, weight, line-height)
  │   • Guide presets (save 12-column grid, mobile breakpoint, etc.)
  ├─ Coming soon (v1.2):
  │   • Column grid overlay (snap guides to grid)
  │   • Screenshot with guides
  │   • CSS property copier

Footer CTA
  └─ "Ready to stop guessing? Get Sightline Pro free for 7 days."
```

---

### 3. Pricing Page (/pricing)

**Goal:** Convert free users to Pro. Justify cost.

**Layout:**
```
Hero
  └─ "Simple pricing. No surprises."

3-column pricing table
  ─────────────────────────────────────────────────────────────
  | Free ($0)      | Pro ($5/mo)     | Team ($12/seat/mo)    |
  ├────────────────┼─────────────────┼──────────────────────┤
  | ✓ 5 guides     | ✓ Unlimited     | ✓ Everything in Pro   |
  | ✓ Inspector    | ✓ Presets       | ✓ Figma overlay       |
  | ✓ Basic box    | ✓ Eyedropper    | ✓ Shared guide sets   |
  | ✗ Cascade      | ✓ Font inspect  | ✓ Team annotations    |
  | ✗ CSS copier   | ✓ Grid overlay  | ✓ Priority support    |
  | ✗ Eyedropper   | ✓ Screenshot    | — (min 3 seats)       |
  |                | ✓ Cascade       |                       |
  └────────────────┴─────────────────┴──────────────────────┘

Pricing details per tier
  
  Free tier:
    • $0 forever
    • Max 5 active guides at once
    • Box model inspector: 20 inspections/day
    • Cascade debugger: locked (upgrade to unlock)
    • Perfect for: trying it out, small projects

  Pro tier:
    • $5/month or $29 lifetime
    • Unlimited guides, presets, inspections
    • Full access to inspector + cascade + eyedropper
    • Try free for 7 days (no card required)
    • Cancel anytime (monthly plan)
    • Best for: freelancers, solo devs
    • What's included [detailed checklist]

  Team tier:
    • $12 per seat per month (billed annually)
    • Minimum 3 seats ($432/year base)
    • Everything in Pro, plus:
      - Figma/PNG overlay for QA
      - Team annotation comments
      - Shared guide presets across team
      - Priority support (24h response)
    • Best for: agencies, product teams

Upgrade flow diagram
  └─ Free user hits Pro feature → popup shows pricing → 7-day trial CTA

FAQ section on this page
  ├─ "Do you offer annual discounts?"
  │   → Pro: $29 lifetime is essentially 6 months of annual billing
  ├─ "Can I cancel anytime?"
  │   → Monthly: yes, anytime. Team: 30 days notice.
  ├─ "Is there a refund policy?"
  │   → Monthly/lifetime: 14 days. Team: 30 days.
  ├─ "What if Sightline shuts down?"
  │   → All local features (guides, inspector) still work offline.
  │     Pro payment entitlements stay active until you uninstall.
  ├─ "How do I manage my subscription?"
  │   → Log into extensionpay.com or email support@sightline.dev
  └─ "Do you have educational pricing?"
  │   → Free tier + email us. We'll sort it out.

Regional pricing note
  └─ "Prices shown in USD. Your country's currency displayed at checkout.
      VAT/GST automatically calculated (Europe, India, Australia)."

CTA at bottom
  └─ "Start your free trial — 7 days, no card required"
```

---

### 4. FAQ Page (/faq)

**Goal:** Answer the 90% of support questions people will have.

```
Installation & Basics
  Q: How do I install Sightline?
  A: Go to [CWS link], click "Add to Chrome", and click the extension icon to activate.

  Q: How do I open the tray?
  A: Click the Sightline icon in your Chrome toolbar (top-right corner, puzzle piece icon).
     If you don't see it, pin it by clicking the pin icon next to its name.

  Q: Does Sightline work on localhost?
  A: Yes! It works on http://localhost:3000, file://, and any local dev server.

  Q: Does it work on the Chrome Web Store, Gmail, or chrome:// pages?
  A: No. Chrome blocks extensions from injecting into browser-internal pages for security.
     But it works on every regular website.

  Q: Does Sightline work on mobile or Firefox?
  A: Mobile: no, only Chrome desktop. Firefox: coming in v2.0.

Features & How-To
  Q: How do I drop guide lines?
  A: Click the Sightline icon to open the tray. Click ─ H for a horizontal line at the
     vertical center of the viewport, or │ V for a vertical line. Then drag to reposition.

  Q: Can I save my guides? If I refresh the page, do they disappear?
  A: Guides are stored globally across all tabs and survive page refreshes and browser restarts.
     Pro tier: you can save named "presets" (e.g. "12-col layout") to reuse them.

  Q: How do I use the box model inspector?
  A: Click ◈ Inspect or press I. Your cursor becomes a crosshair. Hover any element to see
     its margin (orange), padding (green), border (brown), and content (blue) as overlays.
     A tooltip shows px and rem values.

  Q: Can I inspect iframes or shadow DOM?
  A: Shadow DOM is isolated for security reasons. Cross-origin iframes also can't be inspected
     due to CORS. But you can inspect regular nested elements fine.

  Q: What is the CSS cascade debugger?
  A: Click ⚗ Cascade or press C. A panel appears on the right. Hover any element to see
     every CSS rule that applies to it, sorted by specificity. You'll see which rule wins
     and why your styles are or aren't applying.

  Q: How is specificity calculated?
  A: Specificity is shown as (ID, class, type). IDs = 1 point each, classes = 1, types = 1.
     Inline styles shown first (always win). Example: `.container h2` = (0,1,1).

Free vs Pro
  Q: What's the difference between Free and Pro?
  A: Free: up to 5 guides, inspector limited to 20/day, no eyedropper or cascade debugger.
     Pro: unlimited guides, full inspector/cascade access, color eyedropper, font inspector,
     guide presets, column grid overlay, and screenshots.

  Q: How many inspections do I get per day on Free?
  A: 20 box model inspections. After that, you'll see an upgrade prompt.
     The counter resets at midnight UTC. Pro is unlimited.

  Q: Can I try Pro before buying?
  A: Yes! When you click upgrade, you get 7 days free. No card required.
     If you don't like it, just close the popup and keep using Free.

Billing & Account
  Q: How much does Pro cost in my country?
  A: Pricing shown at checkout in your local currency. VAT/GST is calculated automatically.
     $5/mo or $29 lifetime works out to ~$4 USD in many countries.

  Q: Can I cancel my subscription?
  A: Monthly Pro: yes, anytime. You'll lose Pro access at the end of your billing cycle.
     Lifetime: no cancellation needed — it's yours forever.
     Manage your subscription at extensionpay.com.

  Q: Is there a refund policy?
  A: Monthly & lifetime purchases: full refund if you ask within 14 days of purchase.
     After 14 days: no refunds (it's software, not tangible goods).
     Team tier: contact us for 30-day refund window.

  Q: Do you offer annual discounts?
  A: The lifetime plan ($29) is the best value — roughly 6 months of annual billing.
     No additional discounts at this time.

Privacy & Data
  Q: What data does Sightline collect?
  A: Almost none. Guides are stored locally on your device via browser storage.
     When you pay, Stripe handles billing info — we never see your card.
     See our Privacy Policy for details.

  Q: Is my browsing history tracked?
  A: No. Sightline doesn't send any data to our servers.
     It runs entirely on your device. See Privacy Policy.

  Q: Does Sightline have analytics?
  A: We don't track which sites you visit or what you inspect.
     (We may add optional usage analytics in the future, but you'd opt-in.)

  Q: Who do I contact with privacy questions?
  A: Email support@sightline.dev. We take privacy seriously.

Bugs & Support
  Q: The inspector isn't working on a specific website. Why?
  A: Some sites have Content Security Policies that block overlay injection.
     Email support@sightline.dev with the site URL and we'll investigate.

  Q: I found a bug. How do I report it?
  A: Email support@sightline.dev or open an issue on GitHub.com/sightline/issues.
     Include your Chrome version and the steps to reproduce.

  Q: How fast do you respond to support emails?
  A: Billing issues: within 24h. Bug reports: within 48h. Feature requests: within 7 days.
     We're a small team, but we reply to every email.

  Q: Can I request a feature?
  A: Yes! Email support@sightline.dev or vote on features at canny.io/sightline.
     Popular requests make it into the roadmap.

  Q: The extension crashed. What do I do?
  A: Refresh the page. If it crashes again, email support@sightline.dev with:
     - Your Chrome version (chrome://version)
     - Steps to reproduce
     - Any console errors (F12 → Console)
```

---

## Part 2: Stitch AI Prompt (Google's AI Website Builder)

If you're using **Framer** with AI or **Stitch** / **Google Web Designer**, here's the prompt:

```
PROMPT FOR GOOGLE STITCH / FRAMER AI:

Product: Sightline (Chrome extension for web developers)
Purpose: Professional SaaS landing page for a paid design inspection tool

PAGES TO GENERATE:

1. Homepage (/)
   Hero section with:
   - Main headline: "CSS Cascade. Finally Visible."
   - Subheadline: "See every CSS rule, color, and spacing on any webpage in real time."
   - Call-to-action button: "Install Free on Chrome" (blue, prominent)
   - Hero image/animation: show a screenshot of the Sightline tray on a live webpage
   - Social proof: "4,000+ users • 4.8★ from 1,200+ reviews • Used by freelancers & agencies"
   - Problem statement section: explain CSS debugging pain (3-4 sentences)
   - Feature highlights: 3 cards showing Guide Lines, Box Model Inspector, CSS Cascade Debugger
   - Pricing teaser: Free / $5/mo / $12/seat/mo
   - CTA button: "See Pricing" (secondary)
   - Footer with links to Privacy, Terms, FAQ, Support, Blog

2. Features Page (/features)
   - Header: "Everything you need to inspect like a pro"
   - Feature 1 (Guide Lines):
     * Headline + description
     * Image: screenshot of a page with 2 guide lines (H + V)
     * Bullet points: sync across tabs, persist, Free tier: 5 max, Pro: unlimited
   - Feature 2 (Box Model Inspector):
     * Headline + description
     * Image: card component with coloured overlays (margin orange, padding green, etc.)
     * Bullet points: hover to inspect, shows px + rem, one-click activation
   - Feature 3 (CSS Cascade Debugger, Pro only):
     * Headline + description
     * Image: cascade panel with CSS rules, specificity scores highlighted
     * Bullet points: shows matched rules, specificity, overrides, source files
   - Comparison table vs other tools (WhatFont, CSS Peeper, PerfectPixel, Hoverify)
   - Upcoming features section: v1.1 + v1.2 roadmap teaser

3. Pricing Page (/pricing)
   - Header: "Fair pricing, built for developers"
   - Pricing table: 3 columns (Free / Pro / Team)
   - Each column includes:
     * Price (Free is $0, Pro is $5/mo or $29 lifetime, Team is $12/seat/mo)
     * Feature checklist (✓ or ✗ for each major feature)
     * CTA button: "Try Free" (Free tier) / "Start 7-Day Trial" (Pro) / "Contact Sales" (Team)
   - FAQ section below table: 5-8 common pricing questions
   - Trust badges: "30-day refund guarantee", "Cancel anytime", "No credit card required for trial"

4. FAQ Page (/faq)
   - Accordion-style Q&A with categories:
     * Installation & Basics (5 Q&As)
     * Features & How-To (7 Q&As)
     * Free vs Pro (4 Q&As)
     * Billing & Account (5 Q&As)
     * Privacy & Data (4 Q&As)
     * Bugs & Support (3 Q&As)
   - Each answer should be 1-3 sentences max
   - Include email link: support@sightline.dev

5. Privacy Policy (/privacy)
   - Legal page with all standard sections:
     * Data We Collect (explain: local storage only, Stripe for payments)
     * How We Use Your Data
     * Data Sharing (Stripe, no third parties)
     * Your Rights
     * Contact
   - Simple, developer-friendly language (not legalese)
   - Include date last updated

6. Terms of Service (/terms)
   - Standard T&S with sections:
     * Acceptance
     * Description of Service
     * Free and Pro Tiers
     * Payments and Refunds (14-day refund window)
     * Acceptable Use
     * Limitation of Liability
     * Governing Law
     * Contact
   - Developer-friendly tone

DESIGN REQUIREMENTS:
- Color scheme: Primary blue (#1D4ED8), secondary mint (#10B981), dark background (#0d0d12)
- Typography: Sans-serif (Inter or similar), clean and minimal
- Responsive: works on desktop (1920px), tablet (768px), mobile (375px)
- Accessibility: WCAG 2.1 AA compliant, good color contrast
- Performance: fast loading, optimized images, no bloat

TONE & VOICE:
- Confident but not sleazy
- Developer-to-developer communication
- Show empathy for CSS debugging pain
- Use examples from real websites (GitHub, local dev servers)

CALL-TO-ACTIONS:
- Primary CTA: "Install Free on Chrome" → links to Chrome Web Store
- Secondary CTA: "Start 7-Day Pro Trial" → ExtensionPay checkout
- Footer CTA: "Questions? Email support@sightline.dev"

METADATA:
- Page title: "Sightline - CSS Inspector & Guide Lines for Web Developers"
- Meta description: "Inspect CSS, spacing, and colors on any webpage. Sync guide lines across tabs. Free tool with Pro tier ($5/mo)."
- OG image: screenshot of Sightline tray on a live website

ANALYTICS INTEGRATION:
- Include Google Analytics 4 snippet
- Track button clicks (CWS install, Pro trial signup, FAQ views)

HOSTING:
- Deploy to Vercel / Netlify for fast global performance
- Use custom domain: sightline.dev
- Enable HTTPS, security headers

OPTIONAL FEATURES (add if time permits):
- Blog section with 2-3 starter posts (SEO content)
- Changelog page linking to GitHub releases
- Testimonial carousel (3-4 developer quotes)
- Video demo (6-10 seconds showing inspector in action)
- Newsletter signup form at footer

COMPLETION CRITERIA:
- All 6 pages are live and SEO-optimized
- Mobile responsive and fast (PageSpeed > 90)
- No broken links, all CTAs functional
- Privacy + Terms pages satisfy Chrome Web Store requirements
- Contact form works and sends emails to support@sightline.dev
- Ready for Chrome Web Store submission review
```

---

## Implementation Notes for Human Developers

If you're building this with Next.js instead of AI:

1. **Components to build:**
   - Header with nav (sticky)
   - Hero section with gradient + CTA
   - Feature card component (reusable)
   - Pricing card component
   - FAQ accordion
   - Footer with links

2. **Use these libraries:**
   - `framer-motion` for animations
   - `react-icons` for small icons
   - `react-markdown` for blog/changelog
   - `stripe.js` for payment button links
   - `next-seo` for metadata

3. **SEO essentials:**
   - Generate `sitemap.xml`
   - Create `robots.txt`
   - Use semantic HTML (h1, article, section)
   - Internal linking between pages
   - Blog posts for organic traffic

4. **Performance tips:**
   - Lazy-load images
   - Use WebP format
   - Minify CSS
   - Enable gzip compression
