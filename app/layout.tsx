import type { Metadata } from "next";
import "./globals.css"; // Imports your Tailwind CSS

export const metadata: Metadata = {
  // THIS FIXES THE WARNING:
  metadataBase: new URL("https://www.atheneai.co"),
  title: "Athene AI",
  description: "The AI intelligence layer for business data. Connect your enterprise stack in minutes with zero data migration and granular role based access control.",
  keywords: [
    "Enterprise AI",
    "Multi Agent Orchestration",
    "Zero Migration AI",
    "Business Data Intelligence",
    "AI Command Center",
    "CTO AI Tools"
  ],
  openGraph: {
    title: "Athene AI | Where your data becomes your intelligence.",
    description: "Deploy supervised agents across your entire stack in 60 seconds. Zero data migration required.",
    url: "https://www.atheneai.co",
    siteName: "Athene AI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Athene AI Platform Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Athene AI | Enterprise Intelligence Layer",
    description: "Deploy supervised agents across your entire stack in 60 seconds.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Added scroll-smooth so clicking your navbar links glides smoothly down the page
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}