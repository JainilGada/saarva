import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@config/siteConfig";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${siteConfig.brand} - ${siteConfig.tagline}`,
  description: `${siteConfig.subtext} ${siteConfig.mission}`,
  keywords: [
    "AI copilot",
    "artificial intelligence",
    "professional tools",
    "productivity",
    "automation",
    "Effi",
    "Saarva",
    "FinGenie",
    "MeetMind",
    "CompliEase",
    "HireEase",
    "Briefly"
  ],
  authors: [{ name: siteConfig.brand }],
  openGraph: {
    title: `${siteConfig.brand} - ${siteConfig.tagline}`,
    description: siteConfig.subtext,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brand} - ${siteConfig.tagline}`,
    description: siteConfig.subtext,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

