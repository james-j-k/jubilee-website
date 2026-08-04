import { Container } from "@/components/layout";

import styles from "@/components/feedback/recovery.module.css";

export default function Loading() {
  return (
    <main id="main-content" className={styles.loadingPage} aria-busy="true" aria-live="polite">
      <span className="sr-only">Loading page content.</span>
      <Container>
        <div aria-hidden="true">
          <div className={`${styles.skeleton} ${styles.rail}`} />
          <div className={`${styles.skeleton} ${styles.heading}`} />
          <div className={`${styles.skeleton} ${styles.body}`} />
          <div className={`${styles.skeleton} ${styles.bodyShort}`} />
          <div className={styles.actionsSkeleton}>
            <div className={`${styles.skeleton} ${styles.action}`} />
            <div className={`${styles.skeleton} ${styles.action}`} />
          </div>
          <div className={`${styles.skeleton} ${styles.panel}`} />
        </div>
      </Container>
    </main>
  );
}
