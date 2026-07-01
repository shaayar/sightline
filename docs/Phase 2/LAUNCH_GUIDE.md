# Sightline — Launch Guide
**Covers:** Payment integration · Privacy Policy · Terms of Service · Support system · Chrome Web Store submission

---

## Table of Contents
1. [Payment Integration](#1-payment-integration)
2. [Privacy Policy](#2-privacy-policy)
3. [Terms of Service](#3-terms-of-service)
4. [Customer Support System](#4-customer-support-system)
5. [Chrome Web Store Submission](#5-chrome-web-store-submission)
6. [Website Pages Required](#6-website-pages-required)
7. [Future Product Ideas](#7-future-product-ideas)

---

## 1. Payment Integration

### Recommended: ExtensionPay

**Why ExtensionPay:** Chrome Web Store no longer provides its own payment system. ExtensionPay is purpose-built for browser extensions, sits on top of Stripe, and handles the entire subscription/lifetime payment flow without you needing to build a backend.

**Website:** https://extensionpay.com
**Pricing:** Free until you make $1,000/month, then 3% of revenue.

---

### 1.1 Setup Steps

**Step 1 — Create an ExtensionPay account**
1. Go to https://extensionpay.com and sign up
2. Connect your Stripe account (or create one at stripe.com)
3. Create a new extension in the dashboard — name it "Sightline"
4. Set your pricing:
   - Monthly: $5/month
   - Lifetime: $29 one-time
   - Enable 7-day free trial for monthly plan

**Step 2 — Add ExtensionPay to the extension**

Download the ExtensionPay library (`extensionpay.js`) from their dashboard and place it in your extension folder:

```
sightline/
├── extensionpay.js    ← add this
├── content.js
├── background.js
└── manifest.json
```

Update `manifest.json` to include it in background:
```json
{
  "background": {
    "service_worker": "background.js",
    "scripts": ["extensionpay.js"]
  },
  "web_accessible_resources": [{
    "resources": ["extensionpay.js"],
    "matches": ["<all_urls>"]
  }]
}
```

**Step 3 — Check payment status in background.js**

```javascript
// background.js
importScripts('extensionpay.js');

const extpay = ExtPay('sightline'); // your extension ID from ExtPay dashboard
extpay.startBackground();

// Check if user is paid
async function isUserPro() {
  const user = await extpay.getUser();
  return user.paid;
}
```

**Step 4 — Gate Pro features in content.js**

The cleanest approach: send a message to background.js to check payment status, then enable/disable Pro features based on the response.

```javascript
// In content.js — call this when user tries a Pro feature
async function checkProAccess(featureName) {
  return new Promise((resolve) => {
    chrome.runtime.sendMessage({ type: 'CHECK_PRO' }, (response) => {
      resolve(response?.isPro || false);
    });
  });
}

// In background.js — respond to Pro check messages
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === 'CHECK_PRO') {
    extpay.getUser().then(user => {
      sendResponse({ isPro: user.paid });
    });
    return true; // keep channel open for async response
  }
});

// Usage example in content.js:
async function toggleCascade() {
  const isPro = await checkProAccess('cascade-debugger');
  if (!isPro) {
    showUpgradeModal('CSS Cascade Debugger');
    return;
  }
  // ... rest of toggle logic
}
```

**Step 5 — Upgrade modal**

When a free user hits a Pro feature, show this modal:

```javascript
function showUpgradeModal(featureName) {
  const modal = document.createElement('div');
  modal.setAttribute('data-sightline', 'modal');
  // Style it as a centred overlay
  modal.style.cssText = `
    position: fixed; inset: 0; z-index: 2147483647;
    background: rgba(0,0,0,0.7); display: flex;
    align-items: center; justify-content: center;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  `;

  modal.innerHTML = `
    <div style="background:#0d0d12; border:1px solid rgba(255,255,255,0.12);
      border-radius:16px; padding:28px 32px; max-width:360px; text-align:center;">
      <div style="font-size:28px; margin-bottom:12px;">⚗</div>
      <h2 style="color:#fff; font-size:18px; font-weight:500; margin-bottom:8px;">
        ${featureName} is a Pro feature
      </h2>
      <p style="color:rgba(255,255,255,0.5); font-size:13px; margin-bottom:20px; line-height:1.6;">
        Upgrade to Sightline Pro to unlock this feature,
        plus unlimited guides, color eyedropper, font inspector, and more.
      </p>
      <div style="display:flex; flex-direction:column; gap:10px;">
        <button id="__sl_upgrade_btn__" style="background:#1D4ED8; color:white;
          border:none; border-radius:9px; padding:12px 24px; font-size:14px;
          font-weight:500; cursor:pointer;">
          Try Pro free for 7 days — $5/month
        </button>
        <button style="color:rgba(255,255,255,0.35); background:none;
          border:none; font-size:12px; cursor:pointer; padding:4px;"
          onclick="this.closest('[data-sightline=modal]').remove()">
          Maybe later
        </button>
      </div>
    </div>
  `;

  document.documentElement.appendChild(modal);
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });
  document.getElementById('__sl_upgrade_btn__').addEventListener('click', () => {
    extpay.openPaymentPage();
    modal.remove();
  });
}
```

**Step 6 — Handle payment success**

ExtensionPay fires an event when a user pays. Listen for it and unlock features immediately:

```javascript
// background.js
extpay.onPaid.addListener(user => {
  // Notify all content scripts that user is now Pro
  chrome.tabs.query({}, (tabs) => {
    tabs.forEach(tab => {
      chrome.tabs.sendMessage(tab.id, { type: 'USER_UPGRADED' }).catch(() => {});
    });
  });
});
```

```javascript
// content.js
chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === 'USER_UPGRADED') {
    showToast('🎉 Welcome to Sightline Pro!');
    // Re-enable any locked buttons
    syncProFeatures(true);
  }
});
```

---

### 1.2 Alternative: Paddle

Use Paddle instead of ExtensionPay if:
- You want automatic handling of international VAT/GST (Paddle is a Merchant of Record)
- You want more control over the checkout UI
- You plan to sell from India and need GST compliance from day one

**Paddle integration is more complex** — it requires a backend endpoint to verify purchases since it cannot run directly in the extension. You will need a minimal server (Cloudflare Worker or Vercel serverless function) to issue and verify license keys.

**Paddle + Cloudflare Worker flow:**
1. User clicks upgrade → redirect to `sightline.dev/checkout` (Paddle checkout)
2. On payment success, Paddle webhook fires to your Cloudflare Worker
3. Worker stores `{email, licenseKey, plan}` in KV storage
4. Extension sends email → Worker responds with `{isPro: true}`

This is 2–3 days of extra work. Recommended only for v1.1 when you have initial revenue.

---

### 1.3 Free Tier Limits Implementation

Track usage in `chrome.storage.local` — no backend needed:

```javascript
// content.js — check and increment daily inspection count
async function canUseInspector() {
  const today = new Date().toDateString();
  const data = await chrome.storage.local.get(['inspection_count', 'inspection_date']);

  if (data.inspection_date !== today) {
    // New day — reset counter
    await chrome.storage.local.set({ inspection_count: 0, inspection_date: today });
    return true;
  }

  const FREE_DAILY_LIMIT = 20;
  if (data.inspection_count >= FREE_DAILY_LIMIT) {
    const isPro = await checkProAccess('inspector');
    if (!isPro) {
      showUpgradeModal('Unlimited Box Model Inspections');
      return false;
    }
  }

  await chrome.storage.local.set({ inspection_count: (data.inspection_count || 0) + 1 });
  return true;
}
```

---

## 2. Privacy Policy

### What to include

Chrome Web Store **requires** a privacy policy if your extension handles any user data. Even though Sightline currently stores nothing on a server, you still need this page because:
- You use `chrome.storage.local` (data on device)
- You plan to add payment processing (Stripe/ExtensionPay collects billing data)
- CWS policy requires it for any extension with user-facing functionality

**Host at:** `https://sightline.dev/privacy`
**Required in:** Chrome Web Store developer dashboard before submission

---

### Privacy Policy template

```
Privacy Policy for Sightline
Last updated: [DATE]

1. DATA WE COLLECT

Sightline is a browser extension that runs entirely on your device. We do not
operate servers that receive, store, or process your browsing data.

Data stored locally on your device (via chrome.storage.local):
- Guide line positions (coordinates only, no page content)
- Tool usage counts for free tier limits
- Your Pro subscription status (true/false, synced via ExtensionPay)

Data collected when you upgrade to Pro (processed by ExtensionPay / Stripe):
- Email address
- Payment information (handled entirely by Stripe — we never see card numbers)

We do not collect:
- URLs of pages you visit
- Content of pages you inspect
- Keystrokes or form inputs
- Any personally identifiable information beyond payment email

2. HOW WE USE YOUR DATA

- Guide positions: solely to display guides on pages you visit
- Usage counts: solely to enforce free tier limits on your local device
- Email address: to identify your Pro subscription and send receipts

3. DATA SHARING

We do not sell, rent, or share your data with third parties, except:
- Stripe / ExtensionPay: processes payments. See https://stripe.com/privacy
- We may disclose data if required by law

4. DATA RETENTION

Local data persists until you uninstall the extension or clear extension data.
Payment records are retained as required by applicable tax law.

5. YOUR RIGHTS

You may delete all local extension data by uninstalling Sightline.
To delete your account and payment data, email support@sightline.dev.

6. CHILDREN

Sightline is not directed at children under 13. We do not knowingly collect
data from children.

7. CHANGES TO THIS POLICY

We will update the "Last updated" date when we make changes. Continued use
of the extension constitutes acceptance of the updated policy.

8. CONTACT

Email: support@sightline.dev
Website: https://sightline.dev
```

---

## 3. Terms of Service

**Host at:** `https://sightline.dev/terms`

### Terms of Service template

```
Terms of Service for Sightline
Last updated: [DATE]

1. ACCEPTANCE

By installing or using Sightline ("the Extension"), you agree to these Terms.
If you do not agree, do not use the Extension.

2. DESCRIPTION OF SERVICE

Sightline is a Chrome browser extension that provides guide lines, box model
inspection, and CSS cascade debugging tools for web developers.

3. FREE AND PRO TIERS

Free tier: Available at no charge with the limitations described at
sightline.dev/pricing. We reserve the right to change free tier limits with
30 days notice.

Pro tier: Requires a paid subscription ($5/month or $29 lifetime). Access to
Pro features begins immediately upon payment.

4. PAYMENTS AND REFUNDS

Payments are processed by ExtensionPay / Stripe. By subscribing, you authorise
recurring charges on your billing cycle.

Monthly subscriptions: Cancel any time. No refund for the current billing period.

Lifetime plan: Due to the nature of software licenses, lifetime purchases are
non-refundable after 14 days from purchase. Within 14 days, contact us for a
full refund.

To cancel: manage your subscription at extensionpay.com or email
support@sightline.dev.

5. ACCEPTABLE USE

You may not:
- Reverse engineer, decompile, or redistribute the Extension's source code
- Use the Extension to facilitate illegal activities
- Attempt to circumvent Pro feature restrictions

6. INTELLECTUAL PROPERTY

All rights in the Extension, including the Sightline name and logo, belong to
the developer. You receive a limited, non-exclusive licence to use the
Extension.

7. DISCLAIMER OF WARRANTIES

The Extension is provided "as is". We make no warranties of fitness for a
particular purpose, accuracy, or uninterrupted service.

8. LIMITATION OF LIABILITY

To the maximum extent permitted by law, we are not liable for any indirect,
incidental, or consequential damages arising from use of the Extension.

9. CHANGES TO TERMS

We may update these Terms. We will notify Pro users by email of material
changes. Continued use after changes constitutes acceptance.

10. GOVERNING LAW

These Terms are governed by the laws of [YOUR JURISDICTION], without regard
to conflict of law principles.

11. CONTACT

support@sightline.dev
```

---

## 4. Customer Support System

### 4.1 Required channels

| Channel | Purpose | Tool | Cost |
|---------|---------|------|------|
| Support email | Billing, account, bugs | Gmail / Forwardmail | Free |
| Bug reports | Technical issues | GitHub Issues | Free |
| Feature requests | Product feedback | Canny.io | Free (up to 100 posts) |
| FAQ | Self-serve answers | Static page at sightline.dev/faq | Free |
| Status page | Downtime / CWS issues | statuspage.io or instatus.com | Free tier |

---

### 4.2 Email setup

**Recommended:** Use Forwardmail (forwardemail.net) to receive email at `support@sightline.dev` and forward it to your personal Gmail. Free for custom domains.

DNS records to add (in your domain registrar):
```
MX  @  mx1.forwardemail.net   10
MX  @  mx2.forwardemail.net   10
TXT @  "forward-email=your@gmail.com"
```

**Response SLA targets:**
- Billing issues: within 24 hours
- Bug reports: within 48 hours
- Feature requests: acknowledge within 7 days

---

### 4.3 FAQ page content

Host at `sightline.dev/faq`. Minimum questions to cover:

```
Q: How do I activate Sightline?
A: Click the Sightline icon in your Chrome toolbar (puzzle piece → pin Sightline
   first). A floating tray appears at the bottom of the page.

Q: Why do my guides disappear when I navigate to a new page?
A: Guides are stored globally, not per-URL. If guides disappeared, try clicking
   the 👁 button in the tray to toggle visibility. If that doesn't work, the
   extension may not have loaded — try refreshing.

Q: Does Sightline work on chrome:// pages or the Chrome Web Store?
A: No. Chrome prevents extensions from injecting into browser-internal pages
   for security reasons.

Q: How do I cancel my Pro subscription?
A: Visit extensionpay.com and log in with the email you used to subscribe,
   or email support@sightline.dev.

Q: Does Sightline collect my browsing data?
A: No. See our Privacy Policy for full details.

Q: Can I use Sightline on Firefox?
A: Not yet. Firefox support is planned for v2.0.

Q: The inspector doesn't show values for some elements.
A: Cross-origin iframes and shadow DOM elements may not be fully inspectable
   due to browser security restrictions.
```

---

### 4.4 Linking support from the extension

Add a "Help" link in the tray footer (optional but recommended):

```javascript
const helpLink = mk('a', {
  color: 'rgba(255,255,255,0.25)', fontSize: '10px',
  textDecoration: 'none', padding: '0 4px',
}, '?');
helpLink.href   = 'https://sightline.dev/faq';
helpLink.target = '_blank';
trayEl.appendChild(helpLink);
```

---

### 4.5 In-extension feedback (optional, v1.1)

Add a "Rate Sightline" nudge shown after 5th session:

```javascript
// Check session count in storage
chrome.storage.local.get('session_count', ({ session_count = 0 }) => {
  if (session_count === 5) {
    showToast('Enjoying Sightline? ⭐ Leave a review', {
      action: 'Rate',
      href: 'https://chrome.google.com/webstore/detail/[YOUR_EXTENSION_ID]',
    });
  }
  chrome.storage.local.set({ session_count: session_count + 1 });
});
```

---

## 5. Chrome Web Store Submission

### 5.1 Assets required

| Asset | Size | Notes |
|-------|------|-------|
| Extension icon | 128×128 px | Already created (`icon128.png`) |
| Store icon | 128×128 px | Same file, uploaded separately |
| Screenshots | 1280×800 px | Minimum 1, maximum 5 |
| Promo tile (optional) | 440×280 px | Shown in search results if approved |
| Large promo (optional) | 1400×560 px | Shown on store feature banner |

**Screenshot suggestions (order matters):**
1. Guide lines on a real website with the tray visible
2. Box model inspector showing a card component with coloured overlays
3. CSS cascade debugger panel with a specificity contest visible
4. Before/after: page without Sightline vs with guides + inspector active

---

### 5.2 Store listing copy

**Name (max 45 chars):**
```
Sightline — Design Inspector & Guides
```

**Short description (max 132 chars):**
```
Guide lines, box model inspector & CSS cascade debugger for pixel-perfect web development.
```

**Long description (max 16,000 chars — key sections):**
```
Sightline is the all-in-one design inspection tool for frontend developers.

— GUIDE LINES THAT SYNC ACROSS ALL TABS
Drop horizontal and vertical guide lines on any page. They stay perfectly
in place across every open tab so you can compare a reference design and
your clone side by side.

— BOX MODEL INSPECTOR
Hover any element to instantly see its margin (orange), border (brown),
padding (green), and content area (blue) as coloured overlays — just like
DevTools but right on the page. Tooltip shows px and rem values.

— CSS CASCADE DEBUGGER (PRO)
See every CSS rule matched to any element, sorted by specificity score.
Overridden properties shown with strikethrough. Find out instantly why
your styles aren't applying.

— PRO FEATURES
• Unlimited guide lines + save presets
• Color eyedropper (hex, rgb, hsl)
• Font inspector
• CSS property copier
• Responsive breakpoint bar
• Screenshot with guides

Try Pro free for 7 days — then $5/month or $29 lifetime.

KEYBOARD SHORTCUTS (when tray is open)
I — toggle box model inspector
C — toggle cascade debugger
```

---

### 5.3 Submission checklist

```
□ manifest.json version is "1.0.0" (CWS requires semver)
□ All icon sizes present (16, 32, 48, 128)
□ Privacy Policy URL set in CWS dashboard: https://sightline.dev/privacy
□ Single purpose described clearly in short description
□ No misleading claims in store listing
□ Extension tested on: gmail.com, github.com, youtube.com, localhost
□ Extension tested after browser restart (storage persistence)
□ No console errors on clean install
□ content.js guard var prevents double-inject on SPA navigation
□ All requested permissions justified in "Permissions" section of CWS form
□ ZIP file contains only production files (no node_modules, .DS_Store, etc.)
```

**Submission note — Permissions justification:**
When CWS asks why you need `tabs` permission, write:
*"Used by the background service worker to broadcast guide line updates to all open tabs simultaneously, so guide positions stay in sync across tabs."*

**Review time:** Typically 1–3 business days for initial review. Rejections often come with a specific reason — most common is unclear permission justification.

---

## 6. Website Pages Required

For full launch, `sightline.dev` needs these pages:

| Page | Priority | Content |
|------|----------|---------|
| `/` (home) | P0 | Hero, features overview, pricing, CTA to CWS |
| `/privacy` | P0 | Privacy Policy (required for CWS submission) |
| `/terms` | P0 | Terms of Service |
| `/faq` | P1 | 10–15 common questions |
| `/pricing` | P1 | Free vs Pro vs Team comparison table |
| `/changelog` | P2 | Version history |
| `/blog` | P3 | SEO content ("how to inspect CSS", "pixel perfect cloning") |

**Fastest way to launch the website:**
Use Framer, Webflow, or a static site generator (Astro/Next.js). For a solo developer, Framer has the best speed-to-quality ratio.

**Domain:** Register `sightline.dev` via Cloudflare Registrar (cheapest for `.dev` TLD at ~$12/year).

---

## 7. Future Product Ideas

These are standalone extension ideas identified during market research that complement Sightline's audience but are separate products:

### 7.1 CSS Cascade Detective (standalone extension)
Dedicated tool for debugging the CSS cascade. More powerful than Sightline's built-in cascade panel — full cascade chain visualiser, `!important` tracker, inherited value tracer.
**Audience:** Same as Sightline · **Price:** $5/month · **Effort:** 2–3 weeks

### 7.2 API Response Inspector
Lightweight Network tab alternative. Shows API calls made by any page in a clean sidebar — filter by status code, search response bodies, export as cURL.
**Audience:** Frontend devs, API developers · **Price:** $7/month · **Effort:** 3–4 weeks

### 7.3 Lighthouse Score Monitor
Runs Lighthouse on any page you visit; tracks scores over time; alerts when a page you follow drops below a threshold.
**Audience:** Performance engineers, SEO specialists · **Price:** $5/month · **Effort:** 2 weeks

### 7.4 Webpage → Structured Data
Select any content on a page → AI extracts it as JSON/CSV. 5 free extractions, then $9/month.
**Audience:** Researchers, marketers, analysts · **Price:** $9/month · **Effort:** 1 week (uses Claude API)
