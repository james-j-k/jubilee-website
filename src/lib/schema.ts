import { contactConfig } from "@/content/contact";
import { site } from "@/content/site";

/** Approved local-business data. A canonical website URL is added at launch. */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    description: site.description,
    telephone: contactConfig.phone.display,
    email: contactConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${contactConfig.office.addressLines[0]} ${contactConfig.office.addressLines[1]}`,
      addressLocality: "Pala",
      addressRegion: "Kerala",
      postalCode: "686575",
      addressCountry: "IN",
    },
    openingHours: "Mo-Sa 09:00-17:00",
  };
}
