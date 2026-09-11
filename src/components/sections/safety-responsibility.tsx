import Link from "next/link";

import { safetyResponsibility } from "@/content/safety-responsibility";

import styles from "./safety-responsibility.module.css";

export function SafetyResponsibility() {
  return (
    <section id="safety" className={styles.section} aria-labelledby="safety-responsibility-title">
      <div className={styles.shell}>
        <div className={styles.panel}>
          <div className={styles.heading}>
            <p className={styles.eyebrow}>Safety &amp; Responsibility</p>
            <h2 id="safety-responsibility-title">
              Safety is part of <span className={styles.emphasis}>responsible</span> service.
            </h2>
          </div>

          <div className={styles.content}>
            <ol className={styles.topics}>
              {safetyResponsibility.topics.map((topic, index) => (
                <li key={topic.title} className={styles.topic}>
                  <span className={styles.index} aria-hidden="true">0{index + 1}</span>
                  <div>
                    <h3>{topic.title}</h3>
                    <p>{topic.detail}</p>
                  </div>
                </li>
              ))}
            </ol>

            <Link className={styles.cta} href={safetyResponsibility.href}>
              {safetyResponsibility.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
