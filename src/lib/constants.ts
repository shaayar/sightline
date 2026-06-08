export const brandColors = {
  primary: "#1D4ED8",
  secondary: "#10B981",
  dark: "#0d0d12",
  accent: "#F59E0B",
  surface: "#11131A",
  success: "#10B981",
  error: "#EF4444",
};

export const siteConfig = {
  name: "Sightline",
  description: "CSS Cascade. Finally Visible.",
  url: "https://sightline.dev",
  email: "support@sightline.dev",
  twitter: "https://twitter.com/sightline",
  github: "https://github.com/sightline",
};

export const navLinks = [
  { title: "Features", href: "/features" },
  { title: "Pricing", href: "/pricing" },
  { title: "FAQ", href: "/faq" },
  { title: "Support", href: "/support" },
];

export const featureHighlights = [
  {
    title: "Guide Lines",
    description: "Drop guides on any page. They sync across tabs.",
    icon: "📏",
  },
  {
    title: "Box Model Inspector",
    description: "Hover any element. See spacing instantly.",
    icon: "🧱",
  },
  {
    title: "CSS Cascade Debugger",
    description: "Find out WHY your CSS isn't working.",
    icon: "🧠",
  },
];

export const pricingTiers = [
  {
    title: "Free",
    price: "$0",
    subtitle: "Always free",
    features: [
      "Max 5 guide lines",
      "Inspector limit 20/day",
      "Basic cascade insights",
      "Community support",
    ],
    button: { label: "Try Free", href: "/support" },
  },
  {
    title: "Pro",
    price: "$5/mo",
    subtitle: "Most popular",
    features: [
      "Unlimited guides",
      "Unlimited inspector",
      "Full cascade debugger",
      "Priority feature requests",
    ],
    highlight: true,
    button: { label: "Start 7-Day Trial", href: "/support" },
  },
  {
    title: "Team",
    price: "$12/seat/mo",
    subtitle: "Minimum 3 seats",
    features: [
      "Everything in Pro",
      "Figma overlay",
      "Team annotations",
      "Priority support",
    ],
    button: { label: "Contact Sales", href: "/support" },
  },
];

export const faqSections = [
  {
    title: "Installation & Basics",
    items: [
      {
        question: "How do I install Sightline?",
        answer:
          "Install the Chrome extension from the Chrome Web Store and open any page to start inspecting CSS instantly.",
      },
      {
        question: "Does it work on localhost?",
        answer: "Yes, Sightline works on local development sites and staging pages in Chrome.",
      },
      {
        question: "Why can't I inspect iframes?",
        answer:
          "Iframe inspection is limited by browser security; use the main page frame for full Sightline features.",
      },
      {
        question: "Does it work on Firefox?",
        answer: "Sightline is built for Chrome and works best in the Chrome browser.",
      },
      {
        question: "Does Sightline collect my data?",
        answer:
          "Sightline only collects metadata needed for support and diagnostics; your page content stays in your browser.",
      },
    ],
  },
  {
    title: "Features & How-To",
    items: [
      {
        question: "How do I drop guide lines?",
        answer:
          "Open Sightline in Chrome, click the guide tool, and place guide lines anywhere on the page.",
      },
      {
        question: "Can I save my guides?",
        answer:
          "Saved guides persist across tabs, and Pro users can keep unlimited layouts.",
      },
      {
        question: "How do I use the box model inspector?",
        answer:
          "Hover over an element to reveal margin, padding, border, and content overlays in real time.",
      },
      {
        question: "What is the CSS cascade debugger?",
        answer:
          "It shows matched rules, specificity, and overridden properties so you can fix styles fast.",
      },
      {
        question: "How is specificity calculated?",
        answer:
          "Sightline uses the browser’s cascade with a visual score for rule specificity and overrides.",
      },
    ],
  },
  {
    title: "Free vs Pro",
    items: [
      {
        question: "What's the difference between Free and Pro?",
        answer:
          "Free includes core inspection tools; Pro removes limits and adds the full CSS cascade debugger.",
      },
      {
        question: "How many inspections do I get per day?",
        answer:
          "Free users get a 20-inspection daily limit, while Pro users have unlimited inspection support.",
      },
      {
        question: "Can I try Pro before buying?",
        answer:
          "Yes, Pro includes a 7-day trial so you can test unlimited guides and debugging features.",
      },
    ],
  },
  {
    title: "Billing & Account",
    items: [
      {
        question: "How much does Pro cost in my country?",
        answer:
          "Pricing is shown in USD and your card provider will convert it to your local currency at checkout.",
      },
      {
        question: "Can I cancel my subscription?",
        answer:
          "Yes, you can cancel anytime through your account and keep Pro access through the current billing period.",
      },
      {
        question: "Is there a refund policy?",
        answer:
          "Sightline offers a 14-day refund window for Pro subscriptions after the first payment.",
      },
    ],
  },
];

export const comparisonRows = [
  {
    label: "Guide line sync",
    sightline: "Yes",
    whatfont: "No",
    csspeeper: "No",
    perfectpixel: "Yes",
    hoverify: "No",
  },
  {
    label: "Box model overlay",
    sightline: "Yes",
    whatfont: "No",
    csspeeper: "No",
    perfectpixel: "No",
    hoverify: "Partial",
  },
  {
    label: "CSS cascade rules",
    sightline: "Yes",
    whatfont: "No",
    csspeeper: "No",
    perfectpixel: "No",
    hoverify: "No",
  },
  {
    label: "Team workflow",
    sightline: "Yes",
    whatfont: "No",
    csspeeper: "No",
    perfectpixel: "No",
    hoverify: "No",
  },
];

export const trustBadges = [
  "30-day refund guarantee",
  "Cancel anytime",
  "No credit card required for trial",
];
