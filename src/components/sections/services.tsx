import { services } from "@/content/services";
import { Container, Section } from "@/components/layout";
import { SectionHeading, Tag } from "@/components/ui";

import styles from "./services.module.css";

const domesticShortLabel = services.domestic.journey[services.domestic.journey.length - 1].split(" ").pop();

export function Services() {
  return (
    <Section id="services" className={styles.section} aria-labelledby="services-title">
      <Container>
        <SectionHeading
          as="h2"
          eyebrow="Services"
          title={<>LPG support for <span className={styles.emphasis}>home &amp; work.</span></>}
          id="services-title"
          className={styles.heading}
        />

        <div className={styles.routes}>
          <article className={styles.domestic} aria-labelledby="domestic-lpg-title">
            <p className={styles.label}>{services.domestic.label}</p>
            <h3 id="domestic-lpg-title">{services.domestic.title}</h3>
            <p className={styles.detail}>{services.domestic.detail}</p>
            <div className={styles.journeyBar} aria-label="Domestic LPG journey">
              <span>{services.domestic.journey[0]}</span>
              <span className={styles.journeyRule} aria-hidden="true" />
              <span>{domesticShortLabel}</span>
            </div>
          </article>

          <article className={styles.commercial} aria-labelledby="commercial-lpg-title">
            <p className={styles.label}>{services.commercial.label}</p>
            <h3 id="commercial-lpg-title">
              For the work that <span className={styles.emphasis}>moves.</span>
            </h3>
            <p className={styles.detail}>{services.commercial.detail}</p>
            <ul className={styles.contexts} aria-label="Commercial customer contexts">
              {services.commercial.contexts.map((context) => (
                <li key={context}><Tag>{context}</Tag></li>
              ))}
            </ul>
            <p className={styles.enquiry}>{services.commercial.enquiry}</p>
          </article>
        </div>
      </Container>
    </Section>
  );
}
