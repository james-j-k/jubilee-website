import { GodownCard, OfficeCard } from "@/components/contact";
import { SectionHeading } from "@/components/ui";
import { Container, Section, SplitLayout } from "@/components/layout";

import { ContactEnquiryForm } from "./contact-enquiry-form";
import styles from "./contact-visit.module.css";

export function ContactVisit() {
  return (
    <Section id="contact" className={styles.section} tone="surface" aria-labelledby="contact-visit-title">
      <Container>
        <SectionHeading
          as="h2"
          eyebrow="Contact & Visit"
          title="Speak to Jubilee, your way."
          description="Call, message, email, or visit Jubilee Indane Home in Pala."
          id="contact-visit-title"
          className={styles.heading}
        />

        <SplitLayout ratio="content" className={styles.primaryGrid}>
          <OfficeCard className={styles.officeCard} />

          <ContactEnquiryForm />
        </SplitLayout>

        <div className={styles.locations} aria-label="Jubilee locations">
          <OfficeCard title="Office" features={["directions"]} />
          <GodownCard />
        </div>
      </Container>
    </Section>
  );
}
