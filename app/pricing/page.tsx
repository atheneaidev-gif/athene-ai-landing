import type { Metadata } from 'next';
import Pricing from '@/components/Pricing';

export const metadata: Metadata = {
  title: 'Pricing — Plans for Teams, SMBs & Enterprise',
  description:
    'Simple, transparent pricing for Athene AI. Start free, scale to enterprise. Every plan includes zero-copy integrations, supervised AI agents, and full audit trail. No data migration required.',
  keywords: [
    'Athene AI pricing',
    'enterprise AI pricing',
    'AI platform plans',
    'supervised AI agents pricing',
    'zero-copy AI cost',
    'enterprise AI subscription',
    'AI integration platform price',
    'SOC 2 AI platform pricing',
    'AI for teams pricing',
    'business AI tool cost',
  ],
  openGraph: {
    title: 'Athene AI Pricing — Three Plans, One Promise',
    description:
      'Transparent pricing with zero-copy integrations, supervised AI agents, RBAC, and SOC 2 compliance on every plan. No migration cost. No data warehouse required.',
    url: 'https://www.atheneai.co/pricing',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Athene AI Pricing | Simple Plans for Every Team Size',
    description:
      'Start free. Scale to enterprise. Zero-copy AI integrations included on every plan.',
  },
  alternates: { canonical: 'https://www.atheneai.co/pricing' },
};

export default function PricingPage() { return <Pricing />; }
