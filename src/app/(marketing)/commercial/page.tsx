import Image from "next/image";

import jubileeLogo from "../../../../logo/jubilee-logo.jpg";
import { CommercialEnquiryForm } from "@/components/commercial/commercial-enquiry-form";
import { ContactCard } from "@/components/contact";
import { JsonLd } from "@/components/seo";
import { Container, Section, StructuredPanel } from "@/components/layout";
import { OfficialBrandRail, SectionHeading, Tag } from "@/components/ui";
import { commercialPage } from "@/content/commercial-page";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/schema";

import styles from "@/components/commercial/commercial-page.module.css";

export const metadata = createPageMetadata({
  title: "Commercial LPG",
  path: "/commercial",
  description: "Commercial LPG support for businesses in Jubilee Indane Home’s Pala-centred service area.",
});

export default function CommercialPage() {
  return (
    <main id="main-content" className={styles.page}>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Commercial LPG", path: "/commercial" }])} />
      <section className={styles.hero} aria-labelledby="commercial-page-title">
        <Container>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <OfficialBrandRail
                approvedLockup={<Image alt="" src={jubileeLogo} className={styles.officialLogo} priority />}
                relationship="Authorised Indane Distributor"
                size="compact"
                className={styles.rail}
              />
              <p className={styles.eyebrow}>Commercial LPG</p>
              <h1 id="commercial-page-title">Commercial LPG for the work that keeps Pala moving.</h1>
              <p className={styles.intro}>Practical LPG support for businesses that rely on a clear local point of contact.</p>
              <ContactCard appearance="inline" features={["whatsapp", "phone"]} className={styles.heroActions} />
            </div>
            <aside className={styles.heroNote} aria-label="Commercial support context">
              <p className={styles.label}>Pala-centred operation</p>
              <h2>Commercial support with local operating context.</h2>
              <p>Jubilee supports commercial customers across a service area that includes urban and hilly routes, planned route-wise.</p>
            </aside>
          </div>
        </Container>
      </section>

      <Section className={styles.section} tone="surface" aria-labelledby="industries-title">
        <Container>
          <SectionHeading as="h2" eyebrow="Industries we serve" title="Commercial contexts, clearly recognised." description="Jubilee supports commercial LPG customers across a range of local business settings." id="industries-title" className={styles.heading} />
          <StructuredPanel className={styles.panel}>
            <ul className={styles.industries} aria-label="Commercial industries served">
              {commercialPage.industries.map((industry) => <li key={industry}><Tag>{industry}</Tag></li>)}
            </ul>
          </StructuredPanel>
        </Container>
      </Section>

      <Section className={styles.section} aria-labelledby="businesses-choose-title">
        <Container>
          <SectionHeading as="h2" eyebrow="Why businesses choose Jubilee" title="Operational context before assumptions." description="Commercial enquiries benefit from an agency that understands the local routes and business settings involved." id="businesses-choose-title" className={styles.heading} />
          <StructuredPanel className={styles.panel}>
            <ol className={styles.reasonList}>
              {commercialPage.reasons.map((reason, index) => (
                <li key={reason.title} className={styles.reason}>
                  <span className={styles.index} aria-hidden="true">0{index + 1}</span>
                  <div><h3>{reason.title}</h3><p>{reason.detail}</p></div>
                </li>
              ))}
            </ol>
          </StructuredPanel>
        </Container>
      </Section>

      <Section className={styles.section} tone="surface" aria-labelledby="journey-title">
        <Container>
          <SectionHeading as="h2" eyebrow="Commercial LPG journey" title="Start with the business context." description="A clear enquiry gives Jubilee the context to discuss your commercial LPG requirement." id="journey-title" className={styles.heading} />
          <StructuredPanel className={styles.panel}>
            <ol className={styles.journey}>
              {commercialPage.journey.map((step) => <li key={step.title}><div><h3>{step.title}</h3><p>{step.detail}</p></div></li>)}
            </ol>
          </StructuredPanel>
        </Container>
      </Section>

      <Section className={styles.section} aria-labelledby="commercial-faq-title">
        <Container>
          <SectionHeading as="h2" eyebrow="Frequently asked questions" title="Useful answers before you enquire." id="commercial-faq-title" className={styles.heading} />
          <div className={styles.faq}>
            {commercialPage.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
          </div>
        </Container>
      </Section>

      <Section className={styles.enquiry} aria-labelledby="commercial-enquiry-title">
        <Container>
          <div className={styles.enquiryGrid}>
            <div className={styles.enquiryCopy}>
              <p className={styles.eyebrow}>Commercial enquiry</p>
              <h2 id="commercial-enquiry-title">Speak to Jubilee about your business.</h2>
              <p>Use WhatsApp, call Jubilee directly, or send the business details below.</p>
              <ContactCard appearance="inline" features={["whatsapp", "phone"]} className={styles.directActions} />
            </div>
            <CommercialEnquiryForm />
          </div>
        </Container>
      </Section>
    </main>
  );
}
