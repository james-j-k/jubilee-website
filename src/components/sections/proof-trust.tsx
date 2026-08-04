import { proofTrust } from "@/content/proof-trust";
import { Container, Section, StructuredPanel } from "@/components/layout";
import { Divider, SectionHeading, TerrainDivider } from "@/components/ui";

import styles from "./proof-trust.module.css";

export function ProofTrust() {
  return (
    <Section className={styles.section} tone="surface" aria-labelledby="proof-trust-title">
      <Container>
        <SectionHeading
          as="h2"
          eyebrow="Proof & Trust"
          title="Operational evidence, clearly stated."
          description="The facts below describe the scale and route-aware context of Jubilee’s local LPG operation."
          id="proof-trust-title"
          className={styles.heading}
        />

        <StructuredPanel className={styles.register}>
          <dl className={styles.evidence}>
            {proofTrust.map((item, index) => (
              <div key={item.label} className={styles.row}>
                <dt>
                  <span className={styles.value}>{item.value}</span>
                  <span className={styles.label}>{item.label}</span>
                </dt>
                <dd>{item.context}</dd>
                {index < proofTrust.length - 1 ? <Divider className={styles.divider} /> : null}
              </div>
            ))}
          </dl>
          <TerrainDivider className={styles.terrain} decorative />
        </StructuredPanel>
      </Container>
    </Section>
  );
}
