import { Container, Section, StructuredPanel } from "@/components/layout";
import { JsonLd } from "@/components/seo";
import { contactConfig } from "@/content/contact";
import { privacyPolicy } from "@/content/privacy-policy";
import { emailHref, phoneHref } from "@/lib/contact";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/schema";

import styles from "@/components/legal/legal-page.module.css";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "How Jubilee Indane Home handles information you choose to share through this website.",
  path: "/privacy",
});

export default function PrivacyPolicyPage() {
  return (
    <main id="main-content" className={styles.page}>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy" }])} />
      <section className={styles.intro} aria-labelledby="privacy-title">
        <Container size="reading">
          <p className={styles.eyebrow}>Jubilee Indane Home</p>
          <h1 id="privacy-title" className={styles.title}>Privacy Policy</h1>
          <p className={styles.lead}>{privacyPolicy.introduction}</p>
        </Container>
      </section>

      <Section tone="surface" aria-label="Privacy policy details">
        <Container size="reading">
          <div className={styles.content}>
            {privacyPolicy.sections.map((section) => (
              <StructuredPanel key={section.title} className={styles.item}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </StructuredPanel>
            ))}
          </div>
          <section className={styles.contact} aria-labelledby="privacy-contact-title">
            <h2 id="privacy-contact-title">Questions about this policy?</h2>
            <p>Contact {contactConfig.agencyName} by phone or email.</p>
            <p><a href={phoneHref()}>{contactConfig.phone.display}</a> · <a href={emailHref()}>{contactConfig.email}</a></p>
          </section>
        </Container>
      </Section>
    </main>
  );
}
