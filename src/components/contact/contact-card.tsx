import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { contactConfig } from "@/content/contact";
import { emailHref, externalLinkProps, mapsHref, phoneHref, whatsappHref } from "@/lib/contact";
import { Button, Card } from "@/components/ui";
import { cn } from "@/lib/utils";

import styles from "./contact-card.module.css";

export type ContactFeature = "address" | "phone" | "whatsapp" | "email" | "hours" | "directions";
export type ContactLocation = "office" | "godown";

export interface ContactCardProps {
  location?: ContactLocation;
  features?: readonly ContactFeature[];
  appearance?: "card" | "inline";
  title?: string;
  className?: string;
}

const defaultFeatures: readonly ContactFeature[] = ["address", "phone", "whatsapp", "email", "hours", "directions"];

function hasFeature(features: readonly ContactFeature[], feature: ContactFeature) {
  return features.includes(feature);
}

export function ContactCard({
  location = "office",
  features = defaultFeatures,
  appearance = "card",
  title,
  className,
}: ContactCardProps) {
  if (appearance === "inline") {
    return (
      <nav className={cn(styles.inline, className)} aria-label="Contact actions">
        {hasFeature(features, "whatsapp") ? <Button asChild><a href={whatsappHref()} {...externalLinkProps}><MessageCircle aria-hidden="true" size={17} />WhatsApp Jubilee</a></Button> : null}
        {hasFeature(features, "phone") ? <Button asChild variant="outline"><a href={phoneHref()}><Phone aria-hidden="true" size={17} />Call {contactConfig.phone.display}</a></Button> : null}
        {hasFeature(features, "email") ? <Button asChild variant="outline"><a href={emailHref()}><Mail aria-hidden="true" size={17} />Email Jubilee</a></Button> : null}
        {hasFeature(features, "directions") ? <Button asChild variant="outline"><a href={mapsHref(location)} {...externalLinkProps}><MapPin aria-hidden="true" size={17} />Directions</a></Button> : null}
      </nav>
    );
  }

  const isOffice = location === "office";
  const heading = title ?? (isOffice ? "Office information" : contactConfig.godown.title);

  return (
    <Card className={cn(styles.card, className)} elevation="panel">
      <div>
        <p className={styles.label}>{isOffice ? contactConfig.agencyName : "Jubilee Indane Home"}</p>
        <h3>{heading}</h3>
      </div>
      {isOffice && hasFeature(features, "address") ? <address className={styles.address}>{contactConfig.office.addressLines.map((line) => <span key={line}>{line}</span>)}</address> : null}
      {!isOffice ? <p className={styles.godownDescription}>{contactConfig.godown.description}</p> : null}
      {isOffice && hasFeature(features, "hours") ? <dl className={styles.hours}><dt>Office hours</dt><dd>{contactConfig.office.hours.map((line) => <span key={line}>{line}</span>)}</dd></dl> : null}
      <div className={styles.links}>
        {isOffice && hasFeature(features, "phone") ? <a href={phoneHref()}><Phone aria-hidden="true" size={18} /><span><strong>Call Jubilee</strong><small>{contactConfig.phone.display}</small></span></a> : null}
        {isOffice && hasFeature(features, "whatsapp") ? <a href={whatsappHref()} {...externalLinkProps}><MessageCircle aria-hidden="true" size={18} /><span><strong>WhatsApp Jubilee</strong><small>{contactConfig.whatsapp.display}</small></span></a> : null}
        {isOffice && hasFeature(features, "email") ? <a href={emailHref()}><Mail aria-hidden="true" size={18} /><span><strong>Email Jubilee</strong><small>{contactConfig.email}</small></span></a> : null}
        {hasFeature(features, "directions") ? <a href={mapsHref(location)} {...externalLinkProps}><MapPin aria-hidden="true" size={18} /><span><strong>Directions</strong><small>Open in Google Maps</small></span></a> : null}
      </div>
    </Card>
  );
}

export function OfficeCard(props: Omit<ContactCardProps, "location">) {
  return <ContactCard location="office" {...props} />;
}

export function GodownCard(props: Omit<ContactCardProps, "location">) {
  return <ContactCard location="godown" {...props} features={["directions"]} />;
}
