import { proofTrust } from "@/content/proof-trust";
import { Container, Section } from "@/components/layout";
import { SectionHeading } from "@/components/ui";

import styles from "./proof-trust.module.css";

const [domesticCustomers, commercialCustomers, ...operationalStats] = proofTrust;

function splitApprox(value: string) {
  const match = value.match(/^Approx\.\s*(.+)$/);
  return match ? { prefix: "Approx.", number: match[1] } : { prefix: null, number: value };
}

function formatCompact(value: string) {
  return /^\d$/.test(value) ? `0${value}` : value.toUpperCase();
}

export function ProofTrust() {
  return (
    <Section className={styles.section} aria-labelledby="proof-trust-title">
      <Container>
        <SectionHeading
          as="h2"
          eyebrow="Proof & Trust"
          title={<>Operational <span className={styles.emphasis}>evidence.</span></>}
          className={styles.heading}
          id="proof-trust-title"
        />

        <dl className={styles.featured}>
          {[domesticCustomers, commercialCustomers].map((item) => {
            const { prefix, number } = splitApprox(item.value);
            return (
              <div key={item.label} className={styles.featuredRow}>
                <div>
                  {prefix ? <span className={styles.approx}>{prefix}</span> : null}
                  <dt className={styles.value}>{number}</dt>
                  <p className={styles.valueLabel}>{item.label}</p>
                </div>
                <dd>{item.context}</dd>
              </div>
            );
          })}
        </dl>

        <dl className={styles.compact}>
          {operationalStats.map((item) => (
            <div key={item.label} className={styles.compactCell}>
              <dt className={styles.compactValue}>{formatCompact(item.value)}</dt>
              <p className={styles.valueLabel}>{item.label.replace(/^Delivery /, "")}</p>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
