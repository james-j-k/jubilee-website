import { jubileeDifference } from "@/content/jubilee-difference";
import { Container, Section, Stack, StructuredPanel } from "@/components/layout";
import { Divider, SectionHeading, TerrainDivider } from "@/components/ui";

import styles from "./jubilee-difference.module.css";

export function JubileeDifference() {
  return (
    <Section className={styles.section} tone="surface" aria-labelledby="jubilee-difference-title">
      <Container>
        <SectionHeading
          as="h2"
          eyebrow="The Jubilee Difference"
          title="What local understanding changes."
          description="Jubilee’s operating approach is shaped by the routes, geography, and customer needs around Pala."
          className={styles.heading}
          id="jubilee-difference-title"
        />

        <StructuredPanel className={styles.panel}>
          <ol className={styles.principles}>
            {jubileeDifference.map((principle, index) => (
              <li key={principle.title}>
                <Stack gap={3}>
                  <span className={styles.index} aria-hidden="true">
                    0{index + 1}
                  </span>
                  <h3>{principle.title}</h3>
                  <p>{principle.detail}</p>
                </Stack>
              </li>
            ))}
          </ol>
          <Divider className={styles.divider} />
          <TerrainDivider className={styles.terrain} decorative />
        </StructuredPanel>
      </Container>
    </Section>
  );
}
