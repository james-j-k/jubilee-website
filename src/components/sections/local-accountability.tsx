import { localTrust } from "@/content/local-trust";

import styles from "./local-accountability.module.css";

export function LocalAccountability() {
  return (
    <section id="about" className={styles.section} aria-labelledby="local-accountability-title">
      <div className={styles.shell}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Local accountability</p>
          <h2 id="local-accountability-title">
            Pala,
            <br />
            understood <span>route by route.</span>
          </h2>
          <p className={styles.intro}>{localTrust.localRole}</p>
          <p className={styles.principle}>
            Homes, businesses, urban neighbourhoods, and hilly rural routes do
            not share one operating reality.
          </p>
        </div>

        <aside className={styles.localRecord} aria-label={`Jubilee local presence in ${localTrust.locality}`}>
          <div className={styles.localityField}>
            <p className={styles.cardEyebrow}>Locality</p>
            <strong>{localTrust.locality}</strong>
          </div>
          <dl className={styles.recordList}>
            <div>
              <dt className={styles.cardEyebrow}>Service area</dt>
              <dd>{localTrust.serviceArea}</dd>
            </div>
            <div>
              <dt className={styles.cardEyebrow}>Geography</dt>
              <dd>Urban &amp; hilly rural</dd>
            </div>
            <div>
              <dt className={styles.cardEyebrow}>Planning</dt>
              <dd>Route-wise deliveries</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
