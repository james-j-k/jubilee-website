import { MapPin, MessageCircle, Phone } from "lucide-react";

import { contactConfig } from "@/content/contact";
import { externalLinkProps, mapsHref, phoneHref, whatsappHref } from "@/lib/contact";

import { ContactEnquiryForm } from "./contact-enquiry-form";
import styles from "./contact-visit.module.css";

export function ContactVisit() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.shell}>
        <p className={styles.eyebrow}>Contact &amp; Visit</p>
        <h2 className={styles.title}>
          Speak to Jubilee, <span className={styles.emphasis}>your way.</span>
        </h2>

        <div className={styles.primaryGrid}>
          <div className={styles.officeCard}>
            <div>
              <p className={styles.cardEyebrow}>Office information</p>
              <address className={styles.officeAddress}>
                {contactConfig.office.addressLines.map((line) => <span key={line}>{line}</span>)}
              </address>
            </div>
            <div className={styles.officeFooter}>
              <p className={styles.cardEyebrow}>Office hours</p>
              <p className={styles.officeHours}>
                {contactConfig.office.hours[0]} · {contactConfig.office.hours[1]}
              </p>
              <div className={styles.officeLinks}>
                <a href={phoneHref()}>
                  <Phone aria-hidden="true" size={20} strokeWidth={2.25} />
                  {contactConfig.phone.display}
                </a>
                <a href={whatsappHref()} {...externalLinkProps}>
                  <MessageCircle aria-hidden="true" size={20} strokeWidth={2.25} />
                  WhatsApp Jubilee
                </a>
              </div>
            </div>
          </div>

          <ContactEnquiryForm />
        </div>

        <div className={styles.locations}>
          <a className={styles.locationCard} href={mapsHref("office")} {...externalLinkProps}>
            <span>
              <span className={styles.cardEyebrow}>Office</span>
              <strong>Municipal Complex</strong>
            </span>
            <span className={styles.locationCta}>
              <MapPin aria-hidden="true" size={16} strokeWidth={2.5} />
              Directions
            </span>
          </a>
          <a className={styles.locationCard} href={mapsHref("godown")} {...externalLinkProps}>
            <span>
              <span className={styles.cardEyebrow}>Jubilee godown</span>
              <strong>LPG storage unit</strong>
            </span>
            <span className={styles.locationCta}>
              <MapPin aria-hidden="true" size={16} strokeWidth={2.5} />
              Directions
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
