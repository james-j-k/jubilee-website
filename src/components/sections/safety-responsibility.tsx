import Link from "next/link";

import { safetyResponsibility } from "@/content/safety-responsibility";
import { Container, Section, StructuredPanel } from "@/components/layout";
import { Button, Divider, SectionHeading } from "@/components/ui";

import styles from "./safety-responsibility.module.css";

export function SafetyResponsibility() {
  return (
    <Section id="safety" className={styles.section} tone="subtle" aria-labelledby="safety-responsibility-title">
      <Container>
        <StructuredPanel className={styles.panel}>
          <SectionHeading
            as="h2"
            eyebrow="Safety & Responsibility"
            title={safetyResponsibility.title}
            description={safetyResponsibility.description}
            id="safety-responsibility-title"
            className={styles.heading}
          />

          <div className={styles.content}>
            <ol className={styles.topics}>
              {safetyResponsibility.topics.map((topic, index) => (
                <li key={topic.title} className={styles.topic}>
                  <span className={styles.index} aria-hidden="true">0{index + 1}</span>
                  <div>
                    <h3>{topic.title}</h3>
                    <p>{topic.detail}</p>
                  </div>
                  {index < safetyResponsibility.topics.length - 1 ? <Divider className={styles.divider} /> : null}
                </li>
              ))}
            </ol>

            <Button asChild variant="outline" className={styles.cta}>
              <Link href={safetyResponsibility.href}>{safetyResponsibility.cta}</Link>
            </Button>
          </div>
        </StructuredPanel>
      </Container>
    </Section>
  );
}
