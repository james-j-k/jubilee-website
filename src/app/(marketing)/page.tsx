import { CommercialSpotlight } from "@/components/sections/commercial-spotlight";
import { ContactVisit } from "@/components/sections/contact-visit";
import { Hero } from "@/components/sections/hero";
import { JubileeDifference } from "@/components/sections/jubilee-difference";
import { LocalAccountability } from "@/components/sections/local-accountability";
import { ProofTrust } from "@/components/sections/proof-trust";
import { SafetyResponsibility } from "@/components/sections/safety-responsibility";
import { localBusinessJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo";
import { createPageMetadata } from "@/lib/metadata";
import { Services } from "@/components/sections/services";

export const metadata = createPageMetadata({
  title: "Authorised Indane Distributor in Pala",
  description: "Authorised Indane Distributor for domestic and commercial LPG support in Pala.",
  path: "/",
});

export default function HomePage() {
  return <>
    <JsonLd data={localBusinessJsonLd()} />
    <Hero />
    <LocalAccountability />
    <JubileeDifference />
    <Services />
    <CommercialSpotlight />
    <SafetyResponsibility />
    <ProofTrust />
    <ContactVisit />
  </>;
}
