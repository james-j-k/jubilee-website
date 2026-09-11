import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";

import indaneIcon from "../../logo/indane_1.jpg";
import { isIndexable, site } from "@/content/site";
import { JsonLd } from "@/components/seo";
import { organizationJsonLd, websiteJsonLd } from "@/lib/schema";

import "./globals.css";

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const displayFont = Outfit({
  subsets: ["latin"],
  weight: ["600", "800"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  icons: {
    icon: [{ url: indaneIcon.src, type: "image/jpeg" }],
    apple: [{ url: indaneIcon.src, type: "image/jpeg" }],
  },
  title: {
    default: `${site.name} | Authorised Indane Distributor, Pala`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} | Authorised Indane Distributor, Pala`,
    description: site.description,
    siteName: site.name,
    locale: site.locale,
    type: "website",
    url: "/",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${site.name} — Authorised Indane Distributor` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Authorised Indane Distributor, Pala`,
    description: site.description,
    images: ["/opengraph-image"],
  },
  robots: { index: isIndexable, follow: isIndexable },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <a className="skip-link" href="#main-content">Skip to main content</a>
        {children}
      </body>
    </html>
  );
}
