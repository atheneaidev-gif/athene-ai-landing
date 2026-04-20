import type { Metadata } from "next";
import { Inter, Fraunces, Lexend } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.atheneai.co"),
  title: {
    default: "Athene AI — Enterprise Intelligence Layer | Zero-Copy AI for Salesforce, Snowflake & More",
    template: "%s | Athene AI",
  },
  description:
    "Athene AI connects Salesforce, Snowflake, Slack, Jira, GitHub, and 30+ enterprise tools into a single supervised AI layer. Zero data migration. Full audit trail. SOC 2 Type II. Deploy in minutes.",
  keywords: [
    "enterprise AI platform",
    "zero-copy AI integration",
    "supervised AI agents",
    "Salesforce AI assistant",
    "Snowflake AI",
    "enterprise intelligence layer",
    "multi-agent orchestration",
    "AI RBAC",
    "no-migration AI",
    "AI for enterprise",
    "AI data integration",
    "SOC 2 AI platform",
    "enterprise AI tools",
    "AI command center",
    "business intelligence AI",
    "AI data privacy",
    "BYOK AI",
    "Okta AI integration",
    "AI for CTO",
    "enterprise AI security",
    "Slack AI",
    "Jira AI",
    "GitHub AI assistant",
    "Google Drive AI",
    "HubSpot AI",
    "enterprise AI India",
    "AI platform India",
    "AI startup India",
    "India AI SaaS",
    "AI integration platform India",
  ],
  openGraph: {
    title: "Athene AI — Where Your Data Becomes Your Intelligence",
    description:
      "Deploy supervised AI agents across Salesforce, Snowflake, Slack, Jira, and 30+ systems. Zero migration. Inherits your exact permissions. SOC 2 Type II.",
    url: "https://www.atheneai.co",
    siteName: "Athene AI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Athene AI — Enterprise Intelligence Layer connecting your data stack",
      },
    ],
    locale: "en_IN",
    alternateLocale: ["en_US", "en_GB"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Athene AI | Enterprise Intelligence Layer",
    description:
      "Connect Salesforce, Snowflake, Slack & 30+ tools. Supervised AI agents that respect your permissions and data residency. Zero migration.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "cCldor9z2qQg_4hPGnCLn2Z4FGvm9m-kf57B8P7V3oo",
  },
  alternates: {
    canonical: "https://www.atheneai.co",
  },
  category: "technology",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.atheneai.co/#organization",
      name: "Athene AI",
      url: "https://www.atheneai.co",
      logo: {
        "@type": "ImageObject",
        url: "https://www.atheneai.co/athene-logo.png",
        width: 1001,
        height: 249,
      },
      description:
        "Athene AI is an enterprise intelligence platform that connects to your existing tools via OAuth and deploys supervised AI agents that respect your permissions, data residency, and org chart.",
      foundingLocation: {
        "@type": "Place",
        addressCountry: "IN",
        name: "India",
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
      },
      areaServed: ["IN", "US", "GB", "SG", "AE", "AU"],
      sameAs: ["https://www.linkedin.com/company/atheneai"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        url: "https://calendly.com/saksham-atheneai/30min",
        areaServed: "Worldwide",
        availableLanguage: "English",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.atheneai.co/#software",
      name: "Athene AI",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        description: "Contact for enterprise pricing. Book a demo to get started.",
      },
      description:
        "Enterprise AI platform with zero-copy integration, supervised multi-agent orchestration, and RBAC. Connect Salesforce, Snowflake, Slack, Jira, GitHub, and 30+ tools without data migration.",
      featureList: [
        "Zero-copy data integration via OAuth",
        "Supervised multi-agent orchestration",
        "Role-based access control (RBAC)",
        "SOC 2 Type II compliance",
        "Bring your own key (BYOK) — Anthropic, OpenAI, Google, self-hosted",
        "SSO + RBAC via Okta, Google Workspace, Microsoft Entra",
        "Full immutable audit trail",
        "30+ enterprise integrations",
        "Per-organization knowledge graph",
        "Zero data retention policy",
      ],
      screenshot: "https://www.atheneai.co/og-image.jpg",
    },
    {
      "@type": "WebPage",
      "@id": "https://www.atheneai.co/#webpage",
      url: "https://www.atheneai.co",
      name: "Athene AI — Enterprise Intelligence Layer",
      isPartOf: { "@id": "https://www.atheneai.co/#organization" },
      description:
        "Connect your enterprise data stack in minutes. Deploy supervised AI agents across Salesforce, Snowflake, Slack, Jira, and 30+ tools. Zero migration. Full audit trail.",
      potentialAction: {
        "@type": "ReserveAction",
        target: "https://calendly.com/saksham-atheneai/30min",
        name: "Book a Demo",
      },
    },
    {
      "@type": "HowTo",
      name: "How to deploy Athene AI in your organization",
      description: "Go from sign-up to AI-powered insight across your entire data stack in six steps — no migration required.",
      totalTime: "PT30M",
      step: [
        { "@type": "HowToStep", name: "Sign up", text: "Email or SSO sign-up. No credit card required for the trial." },
        { "@type": "HowToStep", name: "Create your org", text: "Name your organization and choose your data residency region." },
        { "@type": "HowToStep", name: "Invite your users", text: "Bulk-invite by email or sync directly from Okta or Google Workspace." },
        { "@type": "HowToStep", name: "Create teams", text: "Mirror your org chart — Sales, Finance, Engineering, BI, and more." },
        { "@type": "HowToStep", name: "Assign users to teams", text: "Each team gets scoped access. Super-users get custom permission scopes." },
        { "@type": "HowToStep", name: "Automate and get insight", text: "Ask anything in natural language. Athene routes, answers, and executes work across your connected tools." },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does Athene AI move or copy my data?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Athene stores only metadata and a knowledge graph of relationships between entities. Your records stay in Salesforce, Snowflake, Drive, or wherever they already live. Nothing is copied, cached, or used to train any model.",
          },
        },
        {
          "@type": "Question",
          name: "How does Athene AI handle permissions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every query inherits the requesting user's exact role and file-level access from your IdP — Okta, Google Workspace, or Microsoft Entra. Athene cannot surface data the user cannot already see.",
          },
        },
        {
          "@type": "Question",
          name: "Is Athene AI SOC 2 Type II certified?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Athene AI is SOC 2 Type II certified. We maintain a full immutable audit trail for every AI query and action, streamable to your SIEM.",
          },
        },
        {
          "@type": "Question",
          name: "Which tools does Athene AI integrate with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Athene AI connects to 30+ enterprise tools including Salesforce, Snowflake, Slack, Notion, Jira, Linear, GitHub, HubSpot, Google Drive, Gmail, Zendesk, and SharePoint — all via OAuth in minutes.",
          },
        },
        {
          "@type": "Question",
          name: "Can I bring my own AI model (BYOK)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Athene supports Bring Your Own Key (BYOK) for any model on any plan, including Anthropic Claude, OpenAI GPT, Google Gemini, and self-hosted models.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} ${lexend.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
