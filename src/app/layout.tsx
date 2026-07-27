import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import {
  defaultSiteDescription,
  defaultSiteTitle,
  siteName,
  socialImageAlt,
} from "@/lib/site-metadata";
import { siteUrl } from "@/lib/site-url";

import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: defaultSiteTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultSiteDescription,
  applicationName: siteName,
  creator: `${siteName} portföy projesi`,
  category: "Yapı ve mimarlık",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName,
    title: defaultSiteTitle,
    description: defaultSiteDescription,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultSiteTitle,
    description: defaultSiteDescription,
    images: [
      {
        url: "/opengraph-image",
        alt: socialImageAlt,
      },
    ],
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
    <html lang="tr">
      <body
        className={`${inter.variable} ${manrope.variable} flex min-h-screen flex-col`}
      >
        <a href="#main-content" className="skip-link">
          Ana içeriğe geç
        </a>
        <SiteHeader />
        <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
