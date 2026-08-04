"use client";

import { type FormEvent, useState } from "react";

import { emailHref, whatsappHref } from "@/lib/contact";
import { Button } from "@/components/ui";

import styles from "./contact-visit.module.css";

function createEnquiryMessage(form: HTMLFormElement) {
  const data = new FormData(form);
  return [
    `Name: ${String(data.get("name") ?? "")}`,
    `Phone: ${String(data.get("phone") ?? "")}`,
    `Enquiry: ${String(data.get("enquiry") ?? "")}`,
  ].join("\n");
}

export function ContactEnquiryForm() {
  const [status, setStatus] = useState("");

  const submitEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = createEnquiryMessage(event.currentTarget);
    const whatsappUrl = whatsappHref(message);
    const mailtoUrl = emailHref({ subject: "Website Enquiry", body: message });

    const popup = window.open(whatsappUrl, "_blank");
    if (popup) {
      popup.opener = null;
      setStatus("Opening WhatsApp with your enquiry.");
      return;
    }

    setStatus("WhatsApp could not open. Opening your email client instead.");
    window.location.assign(mailtoUrl);
  };

  return (
    <form className={styles.form} onSubmit={submitEnquiry}>
      <div className={styles.formHeader}>
        <h3>Send an enquiry</h3>
        <p>For domestic or commercial LPG support, send Jubilee the details of your enquiry.</p>
      </div>

      <div className={styles.fieldGrid}>
        <label className={styles.field}>
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label className={styles.field}>
          <span>Phone Number</span>
          <input name="phone" type="tel" autoComplete="tel" inputMode="tel" required />
        </label>
      </div>
      <label className={styles.field}>
        <span>Enquiry</span>
        <textarea name="enquiry" rows={5} required />
      </label>
      <Button type="submit" variant="secondary">Continue in WhatsApp</Button>
      <p className={styles.formNote}>If WhatsApp cannot open, your email app will be used instead.</p>
      <p className={styles.status} aria-live="polite">{status}</p>
    </form>
  );
}
