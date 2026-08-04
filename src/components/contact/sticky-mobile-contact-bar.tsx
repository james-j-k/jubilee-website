import { MapPin, MessageCircle, Phone } from "lucide-react";

import { externalLinkProps, mapsHref, phoneHref, whatsappHref } from "@/lib/contact";

import styles from "./sticky-mobile-contact-bar.module.css";

export function StickyMobileContactBar() {
  return (
    <nav className={styles.bar} aria-label="Quick contact">
      <a href={phoneHref()}><Phone aria-hidden="true" size={18} /><span>Call</span></a>
      <a href={whatsappHref()} {...externalLinkProps}><MessageCircle aria-hidden="true" size={18} /><span>WhatsApp</span></a>
      <a href={mapsHref("office")} {...externalLinkProps}><MapPin aria-hidden="true" size={18} /><span>Directions</span></a>
    </nav>
  );
}
