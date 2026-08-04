import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import jubileeLogo from "../../../logo/jubilee-logo.jpg";
import { OfficialBrandRail } from "@/components/ui";
import styles from "./hero.module.css";

/**
 * Approved Premium Infrastructure hero.
 *
 * It intentionally renders the no-image, no-locality, and no-proof fallback
 * state until operational inputs are approved in the content system.
 */
export function Hero() {
  return (
    <main id="main-content" className={styles.hero}>
      <div className={styles.mineralCanvas} aria-hidden="true" />

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
              Reliable LPG support.
              <span>From Jubilee Indane Home.</span>
            </h1>

            <p className={styles.intro}>
              Clear support for homes and businesses that rely on clear,
              considered support.
            </p>

            <Link className={styles.primaryAction} href="/#contact">
              Contact Jubilee Indane Home
              <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2.25} />
            </Link>
          </div>

          <div className={styles.plaqueFrame} aria-hidden="true">
            <div className={styles.plaque}>
              <div className={styles.plaqueReadingLayer}>
                <p className={styles.plaqueBrand}>Jubilee Indane Home</p>
                <p className={styles.plaqueLabel}>The Jubilee Standard</p>
                <p className={styles.plaqueValue}>Start with clarity.</p>
              </div>

              <div className={styles.routeArea}>
                <svg
                  className={styles.route}
                  viewBox="0 0 600 210"
                  fill="none"
                  role="presentation"
                >
                  <defs>
                    <linearGradient
                      id="jubilee-energy-route"
                      x1="74"
                      y1="168"
                      x2="526"
                      y2="42"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#CB1A35" />
                      <stop offset="1" stopColor="#EB5900" />
                    </linearGradient>
                  </defs>
                  <path
                    className={styles.routeBase}
                    d="M52 167C137 167 151 119 231 119C318 119 337 52 435 52C476 52 499 40 548 40"
                  />
                  <path
                    className={styles.routeActive}
                    d="M52 167C137 167 151 119 231 119C318 119 337 52 435 52C476 52 499 40 548 40"
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
