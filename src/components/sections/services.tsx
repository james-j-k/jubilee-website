import { services } from "@/content/services";
import { Container, Section, SplitLayout, Stack } from "@/components/layout";
import { Divider, SectionHeading, Tag, TerrainDivider } from "@/components/ui";

import styles from "./services.module.css";

export function Services() {
  return (
    <Section id="services" className={styles.section} aria-labelledby="services-title">
      <Container>
        <SectionHeading
          as="h2"
          eyebrow="Services"
          title="LPG support for home and work."
          description="Choose the context that reflects how LPG supports your day-to-day life or operations."
          id="services-title"
          className={styles.heading}
        />

        <SplitLayout className={styles.routes} ratio="content">
          <article className={styles.domestic} aria-labelledby="domestic-lpg-title">
            <Stack gap={4} align="start">
              <p className={styles.label}>{services.domestic.label}</p>
              <h3 id="domestic-lpg-title">{services.domestic.title}</h3>
              <p className={styles.detail}>{services.domestic.detail}</p>
              <ol className={styles.journey} aria-label="Domestic LPG journey">
                {services.domestic.journey.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </Stack>
          </article>

          <article className={styles.commercial} aria-labelledby="commercial-lpg-title">
            <Stack gap={4} align="start">
              <p className={styles.label}>{services.commercial.label}</p>
              <h3 id="commercial-lpg-title">{services.commercial.title}</h3>
              <p className={styles.detail}>{services.commercial.detail}</p>
              <ol className={styles.journey} aria-label="Commercial LPG journey">
                {services.commercial.journey.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <Divider className={styles.divider} />
              <ul className={styles.contexts} aria-label="Commercial customer contexts">
                {services.commercial.contexts.map((context) => (
                  <li key={context}><Tag>{context}</Tag></li>
                ))}
              </ul>
              <p className={styles.enquiry}>{services.commercial.enquiry}</p>
            </Stack>
            <TerrainDivider className={styles.terrain} decorative />
          </article>
        </SplitLayout>
      </Container>
    </Section>
  );
}
