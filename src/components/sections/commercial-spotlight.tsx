import Link from "next/link";

import { commercialSpotlight } from "@/content/commercial-spotlight";

import styles from "./commercial-spotlight.module.css";

export function CommercialSpotlight() {
  return (
    <section id="commercial" className={styles.section} aria-labelledby="commercial-spotlight-title">
      <div className={styles.shell}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Commercial LPG</p>
          <h2 id="commercial-spotlight-title">
            Powering the work that keeps Pala <span className={styles.emphasis}>moving.</span>
          </h2>
          <p className={styles.detail}>{commercialSpotlight.detail}</p>
          <Link className={styles.cta} href={commercialSpotlight.href}>
            {commercialSpotlight.cta}
          </Link>
        </div>

        <aside className={styles.context} aria-label="Commercial LPG customer contexts">
          <p className={styles.contextLabel}>Establishments</p>
          <ul className={styles.establishments}>
            {commercialSpotlight.establishments.map((establishment) => (
              <li key={establishment}>
                <span aria-hidden="true">–</span> {establishment}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
