import { jubileeDifference } from "@/content/jubilee-difference";
import { Container, Section } from "@/components/layout";
import { SectionHeading } from "@/components/ui";

import styles from "./jubilee-difference.module.css";

export function JubileeDifference() {
  return (
    <Section className={styles.section} aria-labelledby="jubilee-difference-title">
      <Container>
        <SectionHeading
          as="h2"
          eyebrow="The Jubilee Difference"
          title={<>What local understanding <span className={styles.emphasis}>changes.</span></>}
          className={styles.heading}
          id="jubilee-difference-title"
        />

        <ol className={styles.principles}>
          {jubileeDifference.map((principle, index) => (
            <li key={principle.title} className={styles.principle}>
              <span className={styles.index} aria-hidden="true">
                0{index + 1}
              </span>
              <h3>{principle.title}</h3>
              <p>{principle.detail}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
