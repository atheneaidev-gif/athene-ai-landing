import type { Metadata } from 'next';
import Team from '@/components/Team';

export const metadata: Metadata = {
  title: 'Team — The Founders Behind Athene AI',
  description:
    'Meet the team at Athene AI: Saksham Sharma (Co-founder, Product & GTM) and Mudassir Alam (Co-founder, AI/ML). Building the enterprise intelligence layer that respects your data and permissions.',
  keywords: [
    'Athene AI team',
    'Athene AI founders',
    'Saksham Sharma AI',
    'Mudassir Alam AI',
    'enterprise AI startup founders',
    'AI company team',
    'AI startup founders',
  ],
  openGraph: {
    title: 'Athene AI Team — Meet the Founders',
    description:
      'Saksham Sharma and Mudassir Alam founded Athene AI to build the enterprise intelligence layer that meets your data where it lives — and respects every permission.',
    url: 'https://www.atheneai.co/team',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Athene AI Team | Founders Building Enterprise AI',
    description:
      'Two founders. One AI engineer. Shipping enterprise-grade AI that never moves your data.',
  },
  alternates: { canonical: 'https://www.atheneai.co/team' },
};

export default function TeamPage() { return <Team />; }
