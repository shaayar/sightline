const baseURL = "https://sightline.dev";

const meta = {
  home: {
    path: "/",
    title: "Sightline - CSS Inspector & Guide Lines",
    description:
      "See every CSS rule, color, and spacing on any page in real time with Sightline.",
    image: "/images/og/home.jpg",
    canonical: `${baseURL}`,
    robots: "index,follow",
    alternates: [{ href: `${baseURL}`, hrefLang: "en" }],
  },
  features: {
    path: "/features",
    title: "Sightline Features - Guide Lines, Box Model Inspector, CSS Cascade Debugger",
    description:
      "Inspect spacing, trace the CSS cascade, and keep guide lines synced across tabs with Sightline.",
    image: "/images/og/home.jpg",
    canonical: `${baseURL}/features`,
    robots: "index,follow",
  },
  pricing: {
    path: "/pricing",
    title: "Sightline Pricing - Free + Pro ($5/mo) + Team",
    description:
      "Flexible pricing for web developers: free, Pro, or Team plans with advanced CSS inspection tools.",
    image: "/images/og/home.jpg",
    canonical: `${baseURL}/pricing`,
    robots: "index,follow",
  },
  faq: {
    path: "/faq",
    title: "Sightline FAQ - Installation, Features, Billing",
    description:
      "Get answers about installation, feature limits, billing, and the Sightline Chrome extension.",
    image: "/images/og/home.jpg",
    canonical: `${baseURL}/faq`,
    robots: "index,follow",
  },
  privacy: {
    path: "/privacy",
    title: "Privacy Policy - Sightline",
    description:
      "Learn how Sightline handles data, privacy, and user rights in a developer-friendly way.",
    image: "/images/og/home.jpg",
    canonical: `${baseURL}/privacy`,
    robots: "index,follow",
  },
  terms: {
    path: "/terms",
    title: "Terms of Service - Sightline",
    description:
      "Read the Sightline Terms of Service, billing, acceptable use, and refund policy.",
    image: "/images/og/home.jpg",
    canonical: `${baseURL}/terms`,
    robots: "index,follow",
  },
  support: {
    path: "/support",
    title: "Support & Contact - Sightline",
    description:
      "Contact Sightline support for bugs, billing, feature requests, and developer questions.",
    image: "/images/og/home.jpg",
    canonical: `${baseURL}/support`,
    robots: "index,follow",
  },
};

const schema = {
  logo: "https://sightline.dev/images/logo.svg",
  type: "Organization",
  name: "Sightline",
  description: meta.home.description,
  email: "support@sightline.dev",
};

export { meta, schema, baseURL };