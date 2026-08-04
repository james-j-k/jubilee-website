import { Container, Section, StructuredPanel } from "@/components/layout";
import { JsonLd } from "@/components/seo";
import { contactConfig } from "@/content/contact";
import { safetyPage } from "@/content/safety-page";
import { termsOfUse } from "@/content/terms-of-use";
import { emailHref, externalLinkProps, phoneHref } from "@/lib/contact";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/schema";

import styles from "@/components/legal/legal-page.module.css";

export const metadata = createPageMetadata({
  title: "Terms of Use",
  description: "Terms for using the Jubilee Indane Home informational website.",
  path: "/terms",
});

export default function TermsOfUsePage() {
  return (
    <main id="main-content" className={styles.page}>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Terms of Use", path: "/terms" }])} />
      <section className={styles.intro} aria-labelledby="terms-title">
        <Container size="reading">
          <p className={styles.eyebrow}>Jubilee Indane Home</p>
          <h1 id="terms-title" className={styles.title}>Terms of Use</h1>
          <p className={styles.lead}>{termsOfUse.introduction}</p>
        </Container>
      </section>

      <Section tone="surface" aria-label="Terms of use details">
        <Container size="reading">
          <div className={styles.content}>
            {termsOfUse.sections.map((section) => (
              <StructuredPanel key={section.title} className={styles.item}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.title === "Official IndianOil resources" ? <p><a href={safetyPage.officialFaqHref} {...externalLinkProps}>View official IndianOil LPG guidance</a></p> : null}
              </StructuredPanel>
            ))}
          </div>
          <section className={styles.contact} aria-labelledby="terms-contact-title">
            <h2 id="terms-contact-title">Questions about these terms?</h2>
            <p>Contact {contactConfig.agencyName} by phone or email.</p>
            <p><a href={phoneHref()}>{contactConfig.phone.display}</a> · <a href={emailHref()}>{contactConfig.email}</a></p>
          </section>
        </Container>
      </Section>
    </main>
  );
}
