import { CommercialSpotlight } from "@/components/sections/commercial-spotlight";
import { ContactVisit } from "@/components/sections/contact-visit";
import { Hero } from "@/components/sections/hero";
import { JubileeDifference } from "@/components/sections/jubilee-difference";
import { LocalAccountability } from "@/components/sections/local-accountability";
import { ProofTrust } from "@/components/sections/proof-trust";
import { SafetyResponsibility } from "@/components/sections/safety-responsibility";
import { localBusinessJsonLd } from "@/lib/schema";
import { Services } from "@/components/sections/services";

export default function HomePage() {
  return <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
    />
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
