import Image from "next/image";
import Link from "next/link";

import jubileeLogo from "../../../logo/jubilee-logo.jpg";
import { contactConfig } from "@/content/contact";
import { primaryNavigation } from "@/content/navigation";
import { emailHref, externalLinkProps, mapsHref, phoneHref, whatsappHref } from "@/lib/contact";

import styles from "./site-footer.module.css";

const serviceLinks = [
  { href: "/services", label: "Domestic LPG" },
  { href: "/#commercial", label: "Commercial LPG" },
] as const;

const quickLinks = [
  { href: "/", label: "Home" },
  ...primaryNavigation,
  { href: "/#contact", label: "Contact & Visit" },
] as const;

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.identity}>
          <Image src={jubileeLogo} alt="Jubilee Indane Home" className={styles.logo} />
          <p className={styles.relationship}>Authorised Indane Distributor</p>
          <p className={styles.description}>Domestic and commercial LPG support from {contactConfig.agencyName} in Pala.</p>
        </div>

        <nav className={styles.group} aria-label="Quick navigation">
          <h2>Quick navigation</h2>
          <ul>
            {quickLinks.map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}
          </ul>
        </nav>

        <nav className={styles.group} aria-label="Services">
          <h2>Services</h2>
          <ul>
            {serviceLinks.map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}
            <li><Link href="/safety">Safety Guidance</Link></li>
          </ul>
        </nav>

        <section className={styles.group} aria-labelledby="footer-contact-title">
          <h2 id="footer-contact-title">Contact & visit</h2>
          <address>
            {contactConfig.office.addressLines.map((line) => <span key={line}>{line}</span>)}
          </address>
          <p className={styles.hours}>
            <span>{contactConfig.office.hours[0]}</span>
            <span>{contactConfig.office.hours[1]}</span>
          </p>
          <ul className={styles.contactLinks}>
            <li><a href={phoneHref()}>{contactConfig.phone.display}</a></li>
            <li><a href={whatsappHref()} {...externalLinkProps}>WhatsApp: {contactConfig.whatsapp.display}</a></li>
            <li><a href={emailHref()}>{contactConfig.email}</a></li>
            <li><a href={mapsHref("office")} {...externalLinkProps}>Office Google Maps</a></li>
            <li><a href={mapsHref("godown")} {...externalLinkProps}>LPG Godown Google Maps</a></li>
          </ul>
        </section>
      </div>

      <div className={styles.legal}>
        <p>© {new Date().getFullYear()} Jubilee Indane Home. All rights reserved.</p>
        <nav aria-label="Legal">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms &amp; Conditions</Link>
        </nav>
      </div>
    </footer>
  );
}
