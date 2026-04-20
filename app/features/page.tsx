import type { Metadata } from 'next';
import Features from '@/components/Features';

export const metadata: Metadata = {
  title: 'Features — Zero-Copy Integration, Supervised AI Agents & RBAC',
  description:
    "Explore Athene AI's core platform: zero-copy OAuth integrations across 30+ systems, multi-agent orchestration, and permissions-preserving AI that inherits your Okta/Entra/Google RBAC. SOC 2 Type II.",
  keywords: [
    'zero-copy AI integration',
    'supervised AI agents features',
    'AI RBAC permissions',
    'enterprise AI orchestration',
    'Salesforce AI integration',
    'Snowflake AI connector',
    'Okta AI SSO',
    'SOC 2 AI platform',
    'audit trail AI',
    'BYOK enterprise AI',
    'multi-agent routing',
    'AI knowledge graph',
    'no data migration AI',
    'AI data residency',
  ],
  openGraph: {
    title: 'Athene AI Features — Zero-Copy, Permissions-Aware, Audit-First',
    description:
      'Zero-copy OAuth connectors to Salesforce, Snowflake, Slack, Jira & 30+ more. Every AI query inherits your exact role and file-level access. SOC 2 Type II. Full audit trail.',
    url: 'https://www.atheneai.co/features',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Athene AI Features | Zero-Copy AI, RBAC, Audit Trail',
    description:
      'Connect 30+ enterprise tools without moving your data. AI that inherits your permissions. SOC 2 Type II certified.',
  },
  alternates: { canonical: 'https://www.atheneai.co/features' },
};

export default function FeaturesPage() { return <Features />; }
