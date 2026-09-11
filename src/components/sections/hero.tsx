import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import jubileeLogo from "../../../logo/jubilee-logo.jpg";
import { OfficialBrandRail } from "@/components/ui";
import styles from "./hero.module.css";

export function Hero() {
  return (
    <main id="main-content" className={styles.hero}>
      <div className={styles.shell}>
        <section className={styles.content} aria-labelledby="hero-title">
          <div className={styles.copy}>
            <OfficialBrandRail
              approvedLockup={<Image alt="" className={styles.officialLockup} priority src={jubileeLogo} />}
              relationship="Authorised Indane Distributor"
              size="compact"
              className={styles.officialRail}
            />
            <p className={styles.eyebrow}>For homes and businesses.</p>

            <h1 id="hero-title">
              Reliable <span>LPG</span> support.
            </h1>

            <p className={styles.intro}>
              Clear support for homes and businesses that rely on clear,
              considered support.
            </p>

            <Link className={styles.primaryAction} href="/#contact">
              Contact Jubilee Indane Home
              <ArrowUpRight aria-hidden="true" size={20} strokeWidth={2.5} />
            </Link>
          </div>

          <div className={styles.plaqueFrame} aria-hidden="true">
            <div className={styles.plaque}>
              <div className={styles.plaqueReadingLayer}>
                <p className={styles.plaqueBrand}>The Jubilee Standard</p>
                <p className={styles.plaqueValue}>
                  Start with <span>clarity.</span>
                </p>
              </div>

              <div className={styles.routeArea}>
                <svg
                  className={styles.route}
                  viewBox="0 0 400 120"
                  fill="none"
                  role="presentation"
                >
                  <path
                    className={styles.routePath}
                    d="M20 100 Q 100 0, 200 100 T 380 50"
                  />
                </svg>

                <span className={`${styles.routeNode} ${styles.homeNode}`}>
                  <i />
                  Home
                </span>
                <span className={`${styles.routeNode} ${styles.commercialNode}`}>
                  <i />
                  Commercial
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
