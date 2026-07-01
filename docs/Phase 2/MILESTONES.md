# Sightline — Milestones & Feature Tracker

> Payment: Razorpay · ₹499/mo · License key activation
> Storage: Upstash Redis (Vercel)
> Backend: Next.js API routes on sightline.dev

---

## ✅ Phase 1 — Complete

| Feature | Notes |
|---|---|
| Guide lines H + V | Drag, badge labels, delete on click, persistent |
| Cross-tab sync | `background.js` broadcasts via `chrome.storage` |
| Box model inspector | Colour overlays, px + rem tooltip, RAF-debounced |
| CSS cascade panel | Merged with inspector (accepted deviation from PRD) |
| Tray UI | Drag handle, separators, button grouping |
| Tray button tooltips | Shared `tooltipEl`, `data-tip` on all buttons |
| Help (?) button | Opens `https://sightline.dev/help` |
| Lock CSS on click | Click element to freeze cascade; click again or U to unlock |
| Lock badge in cascade header | Shows `⬡ locked` when frozen |
| H / V keyboard shortcuts | Add guide without clicking tray |
| I keyboard shortcut | Toggle inspector |
| U keyboard shortcut | Unlock cascade when locked |

---

## ✅ Phase 2 — Complete

### Monetisation

| Feature | Notes |
|---|---|
| `licenseCheck()` | Reads `sl_license_key` from `chrome.storage`; validates against `/api/validate-license` every 24h; falls back to cache on network error |
| `requirePro(feature, cb)` | Calls `licenseCheck()`; shows upgrade modal on failure |
| Upgrade modal | "Get Pro →" opens `sightline.dev/upgrade`; "Already have a key?" reveals inline activation input |
| License key activation | User pastes `SL-…` key; extension validates live; stores result in `chrome.storage` |
| `/api/create-order` | Creates Razorpay order (₹499, INR) |
| `/api/verify-payment` | Validates Razorpay HMAC signature; generates `SL-…` key; stores in Upstash; idempotent on order ID |
| `/api/validate-license` | Looks up key in Upstash; returns `{valid: true/false/null}` |
| `app/upgrade/page.jsx` | Once UI payment page; Razorpay checkout; shows key on success |
| `manifest.json` | Added `host_permissions` for `https://sightline.dev/*` |

### Features

| Feature | Notes |
|---|---|
| Color eyedropper (Pro) | 🎨 tray button; native `EyeDropper` API; copies hex to clipboard; toast confirmation |
| Guide presets — save (Pro) | ⊞ tray button; `prompt()` for name; saved to `chrome.storage.local` |
| Guide presets — load (Pro) | ☰ tray button; picker modal with per-preset delete |
| Notification toast | Bottom-center; shared across all features; auto-dismisses after 2s |

---

## ⬜ Phase 3 — Remaining

| Feature | Priority | Notes |
|---|---|---|
| Font inspector (Pro) | High | Full typography details on hover; one-click CSS font shorthand copy |
| Floating cascade panel | Medium | Draggable, resizable; larger font; replaces fixed docked panel |
| Free tier limits | Medium | 5 guide cap + 20 inspections/day counter in `chrome.storage` |
| Palette history (eyedropper) | Low | 20-colour history panel; deferred — clipboard-only for now |
| Promo code system | Low | Feedback → free trial grant; needs extra DB table; skip until v1.2 |

---

## Setup Checklist (one-time)

### Razorpay
1. Create account at razorpay.com
2. Get Key ID + Key Secret from Settings → API Keys
3. Add to Vercel env vars:
   - `RAZORPAY_KEY_ID`
   - `RAZORPAY_KEY_SECRET`
   - `NEXT_PUBLIC_RAZORPAY_KEY_ID` (same key ID, for client-side checkout)

### Upstash Redis
1. Create account at upstash.com
2. Create a Redis database (free tier is fine)
3. Click "Connect" → copy the two env vars into Vercel:
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`

### npm dependencies to add to website
```bash
npm install razorpay @upstash/redis
```

### Extension
- Load `extension/` folder as unpacked extension in Chrome
- `chrome.storage.local` keys used:
  - `sl_license_key` — the SL-… key string
  - `sl_license_status` — boolean cached result
  - `sl_license_checked_at` — timestamp of last API check
  - `sightline_guides` — guide line data
  - `sightline_presets` — saved guide presets

---

## Keyboard Shortcuts Reference

| Key | Action |
|---|---|
| H | Add horizontal guide |
| V | Add vertical guide |
| I | Toggle inspector |
| U | Unlock cascade (when locked) |
