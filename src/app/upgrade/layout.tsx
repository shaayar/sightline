import { Meta } from '@once-ui-system/core';
import { baseURL } from '@/resources/seo';

export async function generateMetadata() {
  return Meta.generate({
    title: 'Upgrade to Sightline Pro',
    description: 'Get Sightline Pro — color eyedropper, guide presets, font inspector, and more.',
    baseURL,
    path: '/upgrade',
    canonical: `${baseURL}/upgrade`,
    image: '/images/og/home.jpg',
    robots: 'noindex,nofollow',
    alternates: [{ href: `${baseURL}/upgrade`, hrefLang: 'en' }],
  });
}

export default function UpgradeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
