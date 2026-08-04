import Link from "next/link";

import { commercialSpotlight } from "@/content/commercial-spotlight";
import { Button, Divider, Tag, TerrainDivider } from "@/components/ui";
import { Container, Section, SplitLayout, Stack } from "@/components/layout";

import styles from "./commercial-spotlight.module.css";

export function CommercialSpotlight() {
  return (
    <Section id="commercial" className={styles.section} aria-labelledby="commercial-spotlight-title">
      <Container>
        <SplitLayout className={styles.layout} ratio="visual">
          <div className={styles.copy}>
            <Stack gap={5} align="start">
              <p className={styles.eyebrow}>Commercial LPG</p>
              <h2 id="commercial-spotlight-title">{commercialSpotlight.title}</h2>
              <p className={styles.detail}>{commercialSpotlight.detail}</p>
              <Button asChild className={styles.cta}>
                <Link href={commercialSpotlight.href}>{commercialSpotlight.cta}</Link>
              </Button>
            </Stack>
          </div>

          <aside className={styles.context} aria-label="Commercial LPG customer contexts">
            <p className={styles.contextLabel}>Commercial contexts</p>
            <Divider className={styles.divider} />
            <ul className={styles.establishments}>
              {commercialSpotlight.establishments.map((establishment) => (
                <li key={establishment}><Tag>{establishment}</Tag></li>
              ))}
            </ul>
            <p className={styles.contextNote}>
              Commercial LPG support for establishments across Pala and its surrounding routes.
            </p>
            <TerrainDivider className={styles.terrain} decorative />
          </aside>
        </SplitLayout>
      </Container>
    </Section>
  );
}
