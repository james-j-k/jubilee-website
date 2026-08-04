import { localTrust } from "@/content/local-trust";
import { TerrainDivider } from "@/components/ui";

import styles from "./local-accountability.module.css";

export function LocalAccountability() {
  return (
    <section id="about" className={styles.section} aria-labelledby="local-accountability-title">
      <div className={styles.shell}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Local accountability</p>
          <h2 id="local-accountability-title">
            Pala, understood <span>route by route.</span>
          </h2>
          <p className={styles.intro}>{localTrust.localRole}</p>
          <p className={styles.principle}>
            Homes, businesses, urban neighbourhoods, and hilly rural routes do
            not share one operating reality.
          </p>
        </div>

        <aside className={styles.localRecord} aria-label={`Jubilee local presence in ${localTrust.locality}`}>
          <div className={styles.recordTopline}>
            <p>Local operating context</p>
            <span aria-hidden="true" />
          </div>
          <div className={styles.localityField}>
            <span>Locality</span>
            <strong>{localTrust.locality}</strong>
          </div>
          <dl className={styles.recordList}>
            <div>
              <dt>Service area</dt>
              <dd>{localTrust.serviceArea}</dd>
            </div>
            <div>
              <dt>Geography</dt>
              <dd>Urban and hilly rural areas</dd>
            </div>
            <div>
              <dt>Planning</dt>
              <dd>Deliveries planned route-wise</dd>
            </div>
          </dl>
          <p className={styles.recordNote}>
            Jubilee Indane Home is an Authorised Indane Distributor serving domestic and commercial customers.
          </p>
          <TerrainDivider className={styles.terrain} decorative />
        </aside>
      </div>
    </section>
  );
}
