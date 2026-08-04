import type { Metadata } from "next";

import { isIndexable, site } from "@/content/site";

export type PublicRoute = "/" | "/about" | "/services" | "/commercial" | "/safety" | "/privacy" | "/terms";

type PageMetadataInput = {
  title: string;
  description: string;
  path: PublicRoute;
  image?: string;
};

export function absoluteUrl(path: string): string {
  return new URL(path, site.url).toString();
}

export function createPageMetadata({ title, description, path, image = "/opengraph-image" }: PageMetadataInput): Metadata {
  const canonical = absoluteUrl(path);

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: canonical,
      siteName: site.name,
      locale: site.locale,
      type: "website",
      images: [{ url: absoluteUrl(image), width: 1200, height: 630, alt: `${site.name} — ${title}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: [absoluteUrl(image)],
    },
    robots: { index: isIndexable, follow: isIndexable },
  };
}
