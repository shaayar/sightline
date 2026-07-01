# Sightline — Product Requirements Document
**Version:** 1.0  
**Last updated:** June 2026  
**Owner:** Sightline  
**Status:** Active Development

---

## Table of Contents
1. [Executive Summary](#1-executive-summary)
2. [Problem Statement](#2-problem-statement)
3. [Target Users](#3-target-users)
4. [Goals & Success Metrics](#4-goals--success-metrics)
5. [Competitive Analysis](#5-competitive-analysis)
6. [Feature Specifications](#6-feature-specifications)
7. [Technical Architecture](#7-technical-architecture)
8. [Monetization Model](#8-monetization-model)
9. [Non-Goals](#9-non-goals)
10. [Release Roadmap](#10-release-roadmap)
11. [Open Questions](#11-open-questions)

---

## 1. Executive Summary

Sightline is a Chrome extension for frontend developers and designers that provides persistent guide lines, a box model inspector, and a CSS cascade debugger — all in one dark-themed tray that lives on any webpage. Guides sync across every open tab so developers can set a reference frame once on a design mockup and maintain it while coding their clone.

The core insight: DevTools is powerful but buried behind F12. Sightline surfaces the 20% of DevTools features that developers reach for 80% of the time — spacing, fonts, colors, and CSS specificity — directly on the page without context-switching.

**Tagline:** Pixel-perfect visibility for every element on the web.  
**Target URL:** sightline.dev  
**Distribution:** Chrome Web Store (primary), Firefox Add-ons (v2)

---

## 2. Problem Statement

### Primary pain points

**P1 — Guide line sync across tabs**  
Developers cloning a website open the reference site in Tab A and their code in Tab B. Any pixel rulers, Figma guides, or browser zoom levels are private to each tab. There is no tool that drops a persistent visual guide at, say, `y: 480px` and shows it on every tab simultaneously. Developers currently eyeball or toggle rapidly between tabs.

**P2 — Box model is buried in DevTools**  
Getting the margin/padding/border of any element requires: right-click → inspect → find the element in the Elements panel → scroll to the computed tab → read the box model diagram. For developers doing rapid visual QA this flow breaks concentration. The box model should be one hover away.

**P3 — CSS cascade is invisible**  
"Why isn't my CSS working?" is the most common frontend debugging question. DevTools shows which styles are applied but does not make it immediately clear which rule won, what its specificity score is, or which file it came from — without navigating multiple panels. This costs hours per week across a typical frontend team.

**P4 — Tool fragmentation**  
Developers currently use 4–6 separate extensions for spacing (Page Ruler Redux), fonts (WhatFont), colors (ColorZilla), CSS (CSS Peeper), overlays (PerfectPixel), and responsive testing (Hoverify). Each has a different UI, shortcut scheme, and activation method. A single unified tray that handles all of these is a meaningful DX improvement.

---

## 3. Target Users

### Primary: Frontend developer cloning websites
- Freelancer or agency dev building pixel-perfect clones of reference designs
- Uses Figma or screenshots as reference, builds in VS Code
- Needs: guides, box model, fonts, colors, spacing
- Willingness to pay: high (bills client time, tools are expensed)

### Secondary: UI/UX engineer doing design QA
- Works at a product company, reviews PRs for visual regressions
- Needs: spacing verification, CSS specificity debug, Figma overlay
- Willingness to pay: medium-high (company expense)

### Tertiary: Self-taught developer learning CSS
- Learning by inspecting websites
- Values: clear explanations, visual overlays, no DevTools knowledge required
- Willingness to pay: low-medium (personal spend)

### Non-user (explicitly out of scope for v1)
- Full-stack developers who primarily work on backend (use DevTools fine)
- Designers who don't write code (Figma is better for them)
- QA engineers doing functional testing (different tooling)

---

## 4. Goals & Success Metrics

### Business goals
| Goal | Metric | Target (12 months) |
|------|--------|--------------------|
| Revenue | Monthly Recurring Revenue | $3,000 MRR |
| Adoption | Weekly Active Users | 20,000 WAU |
| Conversion | Free → Pro conversion rate | ≥ 2.5% |
| Retention | Monthly Pro churn | ≤ 4% |
| Discovery | Chrome Web Store rating | ≥ 4.5 stars |

### Product goals
| Goal | Metric | Target |
|------|--------|--------|
| Core loop engagement | % of sessions using ≥2 tools | ≥ 55% |
| Inspector accuracy | % of box model values matching DevTools | 100% |
| Performance | Time to render inspector overlay | < 16ms (1 frame) |
| Reliability | Extension crash rate | < 0.1% of sessions |
| Onboarding | % of new installs who use a feature within first session | ≥ 70% |

---

## 5. Competitive Analysis

| Tool | Price | Guides | Box Model | CSS Inspect | Cascade Debug | Fonts | Color |
|------|-------|--------|-----------|-------------|---------------|-------|-------|
| WhatFont | Free | ✗ | ✗ | ✗ | ✗ | ✓ | ✗ |
| ColorZilla | Free | ✗ | ✗ | ✗ | ✗ | ✗ | ✓ |
| Page Ruler Redux | Free | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ |
| CSS Peeper | $4/mo | ✗ | ✗ | ✓ | ✗ | ✓ | ✓ |
| Hoverify | $30/yr | ✗ | ✓ | ✓ | ✗ | ✓ | ✓ |
| PerfectPixel | Freemium | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ |
| **Sightline** | **$5/mo** | **✓** | **✓** | **✓** | **✓** | **✓** | **✓** |

**Key differentiation:**
1. The only tool with cross-tab guide line sync
2. The only tool with a CSS cascade / specificity debugger
3. Unified tray — one keyboard shortcut, one consistent UI for everything
4. Guides snap to column grid edges (planned v1.2)

---

## 6. Feature Specifications

### 6.1 Guide Lines (Free)

**Description:** Drop persistent horizontal and vertical guide lines on any page. Lines sync across all open browser tabs in real time.

**Acceptance criteria:**
- [ ] Clicking `─ H` drops a blue horizontal dashed line at vertical center of viewport
- [ ] Clicking `│ V` drops an amber vertical dashed line at horizontal center of viewport
- [ ] Each line shows a coordinate badge (`y: 480px` / `x: 320px`)
- [ ] Lines are draggable along their axis; badge updates live during drag
- [ ] Each line has a `×` delete button
- [ ] Free tier: maximum 5 simultaneous guide lines; Pro: unlimited
- [ ] `👁` button toggles all guide lines hidden/visible (does not delete)
- [ ] `✕` button clears all guide lines
- [ ] Guide positions are stored in `chrome.storage.local`
- [ ] Background service worker broadcasts `GUIDES_UPDATED` to all tabs on any change
- [ ] Guides persist across page navigations and browser restarts

**Edge cases:**
- Page with `overflow: hidden` on body: guides still render (injected on `<html>`, not `<body>`)
- iframes: guides do not render inside cross-origin iframes (security limitation, document)
- Very narrow viewport (< 200px): badge repositions to avoid overflow

---

### 6.2 Box Model Inspector (Free — limited to 20 inspections/day; Pro — unlimited)

**Description:** Hover any element to see its margin, border, padding, and content area as coloured overlays directly on the page. A tooltip shows all values in px and rem.

**Visual spec:**
- Orange dashed ring = margin area (labels on each side outside element)
- Brown fill = border area (only visible when border-width > 0)
- Green fill = padding area (labels on each side inside element)
- Blue fill = content area (W × H badge in centre)
- Blue 1.5px outline = exact border-box edge of element

**Acceptance criteria:**
- [ ] Activate via `◈ Inspect` button or keyboard shortcut `I`
- [ ] Cursor changes to crosshair when active
- [ ] `document.elementsFromPoint()` used to resolve hovered element (skips own overlays)
- [ ] All four box-model layers update within one animation frame of pointer movement
- [ ] Tooltip shows: element tag + first 3 classes, size (W×H px), margin shorthand + rem, border, padding shorthand + rem, font-family, font-size (px + rem), font-weight, computed color
- [ ] rem values calculated from actual root font-size via `getComputedStyle(document.documentElement).fontSize`
- [ ] Tooltip repositions to avoid viewport overflow (appears above/left cursor if near edge)
- [ ] Clicking while active deactivates inspector (so user can interact with page)
- [ ] Deactivates automatically when tray is closed

**Precision requirements:**
- Margin/padding values must exactly match Chrome DevTools computed values
- All values rounded to nearest integer px for display

---

### 6.3 CSS Cascade Debugger (Pro)

**Description:** Hover any element to see every CSS rule that applies to it, sorted by specificity. Properties overridden by a higher-specificity rule are shown with strikethrough. Inline styles always appear at top.

**Panel spec:**
- Fixed panel docked bottom-right, 320px wide, max 70vh tall, scrollable
- Header shows tool name and close button
- Element selector shown below header (updates on hover)
- Each matched rule block shows:
  - Selector text (purple if winning rule, grey if overridden)
  - Specificity score in format `(id,class,type)` e.g. `(0,2,1)`
  - Source filename (last segment of stylesheet URL, or `<style>` for inline)
  - All properties declared in that rule; overridden properties in strikethrough
  - `!important` values highlighted amber

**Specificity calculation:**
- IDs: `#id` = [1, 0, 0]
- Classes, attributes, pseudo-classes: `.class`, `[attr]`, `:hover` = [0, 1, 0]
- Type selectors: `div`, `p` = [0, 0, 1]
- `:not()` contents count toward specificity
- Pseudo-elements `::before` etc. = [0, 0, 1] and stripped from calculation
- Inline styles shown as `——` (trumps all stylesheet rules)

**Acceptance criteria:**
- [ ] Activate via `⚗ Cascade` button or keyboard shortcut `C`
- [ ] Panel opens; cursor changes to crosshair
- [ ] Hovering element: element is highlighted with purple overlay, panel populates
- [ ] Rules sorted: inline first, then descending by specificity
- [ ] Cross-origin stylesheets gracefully skipped (CORS error caught, not surfaced to user)
- [ ] Empty rules (no properties) shown with `(empty rule)` note
- [ ] If no matched rules found, shows "No matched stylesheet rules" message
- [ ] Inspector and Cascade modes are mutually exclusive (enabling one disables the other)
- [ ] Panel close button turns off cascade mode and resets cursor

---

### 6.4 Tray UI (Free)

**Description:** A floating dark tray containing all tool buttons, draggable anywhere on the page.

**Acceptance criteria:**
- [ ] Tray is hidden by default; toggled by clicking extension toolbar icon
- [ ] Tray draggable via `⠿` handle; respects viewport bounds
- [ ] Tray position persists within session (not across restarts — acceptable)
- [ ] All buttons show active state (colour-highlighted) when their mode is on
- [ ] Tray closing turns off any active inspection mode
- [ ] `data-sightline` attributes on all injected elements to prevent self-inspection
- [ ] Tray does not interfere with page scroll, clicks, or keyboard events when docked

---

### 6.5 Pro Gate (v1.1)

**Description:** Enforce feature limits for free users; prompt upgrade for Pro features.

**Free tier limits:**
- Max 5 guide lines (additional guide attempts show upgrade prompt)
- Box model inspector: 20 inspections per day (counted in `chrome.storage.local`)
- Cascade debugger: locked (clicking shows upgrade modal)

**Upgrade prompt spec:**
- Small modal overlay (not a full page)
- Shows feature name, what Pro unlocks, price ($5/mo or $29 lifetime)
- "Try Pro free for 7 days" CTA button → opens `extensionpay.com` payment page
- "Maybe later" dismisses modal

**Implementation:** See `LAUNCH_GUIDE.md` → Payment Integration section.

---

### 6.6 Planned: Color Eyedropper (Pro, v1.1)

**Description:** Pick any pixel on the page; get hex, rgb, hsl. Auto-copies to clipboard. Palette history of last 20 picks.

**Notes:** Uses `EyeDropper` Web API (Chrome 95+). Fallback: screenshot + canvas pixel sampling.

---

### 6.7 Planned: Font Inspector (Pro, v1.1)

**Description:** Hover any text element — tooltip shows full typography stack. One click copies the CSS `font` shorthand.

**Shows:** font-family (full stack), font-size (px + rem), font-weight, line-height, letter-spacing, text-transform, computed color.

---

### 6.8 Planned: CSS Property Copier (Pro, v1.2)

**Description:** Click any element — panel slides up with computed styles. One-click copies individual values or a full CSS rule block.

---

### 6.9 Planned: Column Grid Overlay (Pro, v1.2)

**Description:** Overlay a configurable column grid. Pick 4/8/12 columns, gutter width, and max-width container. Guide lines snap to column edges.

---

### 6.10 Planned: Figma Overlay (Team, v2.0)

**Description:** Upload a PNG/JPG — overlays it on the live page at adjustable opacity (0–100%). Drag to reposition. Replaces PerfectPixel. Justifies team tier pricing.

---

### 6.11 Planned: Screenshot with Guides (Pro, v1.2)

**Description:** Capture current viewport including all Sightline overlays as PNG. Uses `chrome.tabs.captureVisibleTab`. Copy to clipboard or download.

---

## 7. Technical Architecture

### Extension structure
```
sightline/
├── manifest.json          MV3 manifest
├── background.js          Service worker: icon click, storage sync
├── content.js             Injected into all pages: tray + all tools
├── icons/
│   ├── icon16.png
│   ├── icon32.png
│   ├── icon48.png
│   └── icon128.png
├── PRD.md                 This document
└── LAUNCH_GUIDE.md        Payment, legal, support setup
```

### Key technical decisions

**MV3 (Manifest V3)**  
Required by Chrome Web Store for new submissions as of 2024. Uses service workers instead of background pages. All async storage operations use `chrome.storage.local`.

**Content script injection**  
Content script injected at `document_idle` on `<all_urls>`. Guard variable `window.__SIGHTLINE_LOADED__` prevents double-injection on SPA navigations.

**z-index strategy**  
All Sightline elements use z-index in the `2147483640–2147483647` range (near `INT_MAX`). Order: inspector boxes (644) → cascade panel (645) → guide overlay (646) → tray + tooltips (647).

**Cross-tab sync**  
`chrome.storage.onChanged` in background.js broadcasts to all tabs. Each content script applies changes by calling `renderAll()`. No websockets, no backend required.

**CSS isolation**  
All styles applied via `element.style` (inline), never via injected `<style>` tags. This prevents interfering with or being overridden by page stylesheets.

**Specificity calc**  
Pure JavaScript implementation. Does not use `CSSStyleSheet.selectorText` specificity APIs (not universally supported). Regex-based parser with edge case handling for `:not()`, pseudo-elements, combinators.

**Performance**  
Inspector and cascade hover handlers use `requestAnimationFrame` debouncing. Box model paint clears and redraws in a single RAF callback. No DOM queries on every mouse pixel movement.

### Permissions
```json
"permissions": ["storage", "tabs"]
```
- `storage`: persist guide positions across sessions and tabs
- `tabs`: allow background.js to broadcast messages to all open tabs

No host permissions required. No network requests from extension code.

---

## 8. Monetization Model

### Pricing
| Tier | Price | Target segment |
|------|-------|----------------|
| Free | $0 | Indie devs, students, trial users |
| Pro | $5/month or $29 lifetime | Freelancers, solo devs |
| Team | $12/seat/month (min 3 seats) | Agencies, product teams |

### Revenue model
- Primary: subscription (Pro monthly recurring)
- Secondary: lifetime deal (one-time, good for bootstrapping)
- Launch promotion: AppSumo lifetime deal to acquire first 500 users

### Payment infrastructure
- **ExtensionPay** (extensionpay.com): purpose-built for Chrome extensions, Stripe-backed
- **Paddle**: alternative for automatic international VAT/GST handling
- See `LAUNCH_GUIDE.md` for full integration steps

### Projections (conservative)
| Milestone | Users | Conversion | MRR |
|-----------|-------|------------|-----|
| Month 3 | 2,000 WAU | 2% | $200 |
| Month 6 | 8,000 WAU | 2.5% | $1,000 |
| Month 12 | 25,000 WAU | 3% | $3,750 |
| Month 18 | 60,000 WAU | 3% | $9,000 |

---

## 9. Non-Goals

The following are explicitly out of scope for v1.0 and v1.1:

- **Firefox / Safari support** — Chrome-only for v1; Firefox in v2 roadmap
- **AI explanations of CSS** — Considered for v2 (requires Anthropic API integration and backend)
- **Session recording or screenshot diffing** — Different product category
- **Accessibility auditing** — Requires rule engine (axe-core); planned as standalone feature v2
- **Network inspector / API call viewer** — Different product (see `LAUNCH_GUIDE.md` → Future Products)
- **Keyboard-only operation** — Full a11y for the extension UI itself is v1.2 work
- **Dark/light mode auto-detection** — Tray always uses dark theme; it's a developer tool

---

## 10. Release Roadmap

### v1.0 — Core (Current)
- [x] Guide lines (H + V) with cross-tab sync
- [x] Box model inspector with colour overlays and tooltip
- [x] CSS cascade debugger panel
- [x] Sightline brand identity (icons, tray styling)

### v1.1 — Monetisation + Power Tools (Target: 6 weeks)
- [ ] ExtensionPay integration (Pro gate)
- [ ] Free tier limits enforcement (5 guides, 20 inspections/day)
- [ ] Upgrade modal with 7-day trial CTA
- [ ] Color eyedropper (Pro)
- [ ] Font inspector (Pro)
- [ ] Guide presets — save/load named sets (Pro)

### v1.2 — Visual QA Suite (Target: 12 weeks)
- [ ] CSS property copier panel (Pro)
- [ ] Column grid overlay with guide snap (Pro)
- [ ] Pixel ruler edges (click ruler to drop guide) (Pro)
- [ ] Responsive breakpoint bar (Pro)
- [ ] Screenshot with guides as PNG (Pro)

### v2.0 — Team Tier (Target: 6 months)
- [ ] Figma/PNG overlay with opacity control (Team)
- [ ] Distance-between-elements measurer (Team)
- [ ] Annotation comments with team sync (Team)
- [ ] Firefox extension port
- [ ] AI "explain this CSS" powered by Claude API (Team)

---

## 11. Open Questions

| # | Question | Owner | Due |
|---|----------|-------|-----|
| 1 | Should the free limit be "5 guides" or "unlimited guides but no presets"? Unlimited may drive more word-of-mouth. | Product | Before v1.1 |
| 2 | ExtensionPay vs Paddle — which handles Indian GST correctly for local users? | Finance | Before v1.1 |
| 3 | Should cascade debugger be free (to drive adoption) with a harder lock on eyedropper/font inspector? | Product | Before v1.1 |
| 4 | Chrome Web Store listing: should short description lead with "guide lines" or "CSS debugger"? Depends on search volume. | Marketing | Before launch |
| 5 | Lifetime deal pricing: $29 direct or $49 on AppSumo (AppSumo takes ~30%)? | Finance | Before v1.1 |
