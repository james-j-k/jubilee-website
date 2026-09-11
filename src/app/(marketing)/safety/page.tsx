import Image from "next/image";

import jubileeLogo from "../../../../logo/jubilee-logo.jpg";
import { ContactCard } from "@/components/contact";
import { JsonLd } from "@/components/seo";
import { Container, Section, StructuredPanel } from "@/components/layout";
import { Button, OfficialBrandRail, SectionHeading } from "@/components/ui";
import { safetyPage } from "@/content/safety-page";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/schema";
import { cn } from "@/lib/utils";

import styles from "@/components/safety/safety-page.module.css";

export const metadata = createPageMetadata({
  title: "Safety Resource Center",
  path: "/safety",
  description: "Official IndianOil LPG safety guidance and local support from Jubilee Indane Home.",
});

export default function SafetyPage() {
  return (
    <main id="main-content" className={styles.page}>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Safety", path: "/safety" }])} />
      <section className={styles.hero} aria-labelledby="safety-page-title">
        <Container>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <OfficialBrandRail approvedLockup={<Image alt="" src={jubileeLogo} className={styles.officialLogo} priority />} relationship="Authorised Indane Distributor" size="compact" className={styles.rail} />
              <p className={styles.eyebrow}>Safety resource center</p>
              <h1 id="safety-page-title">Clear LPG safety guidance, close at hand.</h1>
              <p className={styles.intro}>Use official IndianOil safety guidance for complete instructions, with Jubilee available as your local authorised Indane Distributor.</p>
              <div className={styles.heroActions}>
                <Button asChild><a href={safetyPage.officialFaqHref} target="_blank" rel="noreferrer">View IndianOil Safety Guidance</a></Button>
                <ContactCard appearance="inline" features={["phone"]} />
              </div>
            </div>
            <aside className={styles.heroNote} aria-label="Safety guidance context">
              <p className={styles.label}>Official guidance first</p>
              <h2>Calm, practical, and easy to find.</h2>
              <p>This page is a concise guide to the official safety information and support routes available to you.</p>
            </aside>
          </div>
        </Container>
      </section>

      <Section className={cn(styles.section, styles.everydaySection)} aria-labelledby="everyday-safety-title">
        <Container>
          <SectionHeading as="h2" eyebrow="Everyday safety" title="Make official everyday guidance part of the routine." description="These high-level points are drawn from IndianOil’s domestic LPG guidance. Use the official source for complete instructions." id="everyday-safety-title" className={styles.heading} />
          <StructuredPanel className={styles.panel}>
            <ol className={styles.guidanceList}>
              {safetyPage.everydaySafety.map((item, index) => <li key={item.title} className={styles.guidanceItem}><span className={styles.index} aria-hidden="true">0{index + 1}</span><div><h3>{item.title}</h3><p>{item.detail}</p></div></li>)}
            </ol>
            <a className={styles.sourceLink} href={safetyPage.officialFaqHref} target="_blank" rel="noreferrer">Read the official IndianOil LPG guidance</a>
          </StructuredPanel>
        </Container>
      </Section>

      <Section className={styles.leak} aria-labelledby="leak-title">
        <Container>
          <div className={styles.leakPanel}>
            <div className={styles.leakCopy}>
              <p className={styles.eyebrow}>If you suspect a gas leak</p>
              <h2 id="leak-title">Follow official guidance without delay.</h2>
              <p>These concise steps reflect IndianOil’s published domestic LPG leak guidance. For a complete response, use the official source.</p>
              <a className={styles.sourceLink} href={safetyPage.officialFaqHref} target="_blank" rel="noreferrer">Open official LPG guidance</a>
            </div>
            <div>
              <ol className={styles.guidanceList}>
                {safetyPage.leakSteps.map((item, index) => <li key={item.title} className={styles.guidanceItem}><span className={styles.index} aria-hidden="true">0{index + 1}</span><div><h3>{item.title}</h3><p>{item.detail}</p></div></li>)}
              </ol>
              <p className={styles.emergency}>IndianOil LPG Emergency Helpline: <a href="tel:1906">1906</a></p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className={styles.section} tone="surface" aria-labelledby="cylinder-title">
        <Container>
          <SectionHeading as="h2" eyebrow="Safe cylinder handling" title="Use the right check and the right support route." description="Cylinder-related guidance is best kept simple: follow official IndianOil guidance and contact Jubilee when you need help." id="cylinder-title" className={styles.heading} />
          <StructuredPanel className={styles.panel}>
            <ol className={styles.guidanceList}>
              {safetyPage.cylinderHandling.map((item, index) => <li key={item.title} className={styles.guidanceItem}><span className={styles.index} aria-hidden="true">0{index + 1}</span><div><h3>{item.title}</h3><p>{item.detail}</p></div></li>)}
            </ol>
          </StructuredPanel>
        </Container>
      </Section>

      <Section className={styles.section} aria-labelledby="safety-faq-title">
        <Container>
          <SectionHeading as="h2" eyebrow="Frequently asked questions" title="Find the appropriate support route." id="safety-faq-title" className={styles.heading} />
          <div className={styles.faq}>
            {safetyPage.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
          </div>
        </Container>
      </Section>

      <Section className={styles.contact} aria-labelledby="safety-contact-title">
        <Container>
          <div className={styles.contactPanel}>
            <div className={styles.contactCopy}>
              <p className={styles.eyebrow}>Contact Jubilee</p>
              <h2 id="safety-contact-title">Need help finding the right guidance?</h2>
              <p>Speak to Jubilee for assistance related to your Indane supply, or use the official IndianOil guidance for complete safety information.</p>
            </div>
            <ContactCard appearance="inline" features={["whatsapp", "phone"]} className={styles.directActions} />
          </div>
        </Container>
      </Section>
    </main>
  );
}
