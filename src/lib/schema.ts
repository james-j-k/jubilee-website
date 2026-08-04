import { contactConfig } from "@/content/contact";
import { site } from "@/content/site";

import { absoluteUrl, type PublicRoute } from "@/lib/metadata";

type BreadcrumbItem = { name: string; path: PublicRoute };

const address = {
  "@type": "PostalAddress",
  streetAddress: contactConfig.office.addressLines.slice(0, 2).join(", "),
  addressLocality: "Pala",
  addressRegion: "Kerala",
  postalCode: "686575",
  addressCountry: "IN",
} as const;

const contactPoint = {
  "@type": "ContactPoint",
  contactType: "customer service",
  telephone: contactConfig.phone.e164,
  email: contactConfig.email,
  availableLanguage: ["English"],
} as const;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    email: contactConfig.email,
    telephone: contactConfig.phone.e164,
    contactPoint: [contactPoint],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    inLanguage: "en-IN",
    publisher: { "@id": `${site.url}/#organization` },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#localbusiness`,
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: contactConfig.phone.e164,
    email: contactConfig.email,
    address,
    openingHours: "Mo-Sa 09:00-17:00",
    areaServed: { "@type": "City", name: "Pala" },
    parentOrganization: { "@id": `${site.url}/#organization` },
    contactPoint: [contactPoint],
  };
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** Safely embeds JSON-LD without allowing a closing script tag from content. */
export function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
