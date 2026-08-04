import Image from "next/image";

import jubileeLogo from "../../../../logo/jubilee-logo.jpg";
import { ContactCard } from "@/components/contact";
import { Container, Section, StructuredPanel } from "@/components/layout";
import { OfficialBrandRail, SectionHeading } from "@/components/ui";
import { domesticPage } from "@/content/domestic-page";
import { createPageMetadata } from "@/lib/metadata";

import styles from "@/components/domestic/domestic-page.module.css";

export const metadata = createPageMetadata({
  title: "Domestic LPG",
  description: "Domestic LPG support, booking guidance, and direct assistance from Jubilee Indane Home in Pala.",
});

export default function DomesticLpgPage() {
  return (
    <main id="main-content" className={styles.page}>
      <section className={styles.hero} aria-labelledby="domestic-page-title">
        <Container>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <OfficialBrandRail approvedLockup={<Image alt="" src={jubileeLogo} className={styles.officialLogo} priority />} relationship="Authorised Indane Distributor" size="compact" className={styles.rail} />
              <p className={styles.eyebrow}>Domestic LPG</p>
              <h1 id="domestic-page-title">Domestic LPG support for your home.</h1>
              <p className={styles.intro}>A clear local route for existing customers, new connection enquiries, families, and first-time LPG users.</p>
              <ContactCard appearance="inline" features={["whatsapp", "phone"]} className={styles.heroActions} />
            </div>
            <aside className={styles.heroNote} aria-label="Domestic LPG context">
              <p className={styles.label}>Pala-centred support</p>
              <h2>Domestic LPG, approached with local context.</h2>
              <p>Jubilee supports domestic LPG customers across a service area that includes urban and hilly routes.</p>
            </aside>
          </div>
        </Container>
      </section>

      <Section className={styles.section} tone="surface" aria-labelledby="domestic-services-title">
        <Container>
          <SectionHeading as="h2" eyebrow="Domestic services" title="The right route for your household enquiry." description="Jubilee provides a direct local point of contact for domestic LPG customers and applicants." id="domestic-services-title" className={styles.heading} />
          <StructuredPanel className={styles.panel}>
            <ol className={styles.serviceList}>
              {domesticPage.services.map((service, index) => <li key={service.title} className={styles.serviceItem}><span className={styles.index} aria-hidden="true">0{index + 1}</span><div><h3>{service.title}</h3><p>{service.detail}</p></div></li>)}
            </ol>
          </StructuredPanel>
        </Container>
      </Section>

      <Section className={styles.section} aria-labelledby="getting-started-title">
        <Container>
          <SectionHeading as="h2" eyebrow="Getting started" title="Start with the context that matters." description="Choose the appropriate booking or contact route for your domestic LPG enquiry." id="getting-started-title" className={styles.heading} />
          <StructuredPanel className={styles.panel}>
            <ol className={styles.steps}>
              {domesticPage.gettingStarted.map((step) => <li key={step.title}><div><h3>{step.title}</h3><p>{step.detail}</p></div></li>)}
            </ol>
          </StructuredPanel>
        </Container>
      </Section>

      <Section className={styles.section} tone="surface" aria-labelledby="booking-title">
        <Container>
          <SectionHeading as="h2" eyebrow="Booking your refill" title="Use a verified booking route." description="For domestic LPG refills, use an approved booking method or contact Jubilee for WhatsApp assistance." id="booking-title" className={styles.heading} />
          <StructuredPanel className={styles.panel}>
            <ul className={styles.bookingMethods} aria-label="Verified domestic LPG booking methods">
              {domesticPage.bookingMethods.map((method) => <li key={method.title}><div><h3>{method.title}</h3><p>{method.detail}</p></div></li>)}
            </ul>
          </StructuredPanel>
        </Container>
      </Section>

      <Section className={styles.section} aria-labelledby="domestic-faq-title">
        <Container>
          <SectionHeading as="h2" eyebrow="Frequently asked questions" title="Useful answers before you contact Jubilee." id="domestic-faq-title" className={styles.heading} />
          <div className={styles.faq}>
            {domesticPage.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
          </div>
        </Container>
      </Section>

      <Section className={styles.contact} aria-labelledby="domestic-contact-title">
        <Container>
          <div className={styles.contactPanel}>
            <div className={styles.contactCopy}>
              <p className={styles.eyebrow}>Contact Jubilee</p>
              <h2 id="domestic-contact-title">Need domestic LPG assistance?</h2>
              <p>Speak to Jubilee directly for a refill, a new connection enquiry, or another domestic LPG question.</p>
            </div>
            <ContactCard appearance="inline" features={["whatsapp", "phone"]} className={styles.directActions} />
          </div>
        </Container>
      </Section>
    </main>
  );
}
