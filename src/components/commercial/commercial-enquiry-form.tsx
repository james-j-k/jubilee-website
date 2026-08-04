"use client";

import { type FormEvent, useState } from "react";

import { commercialPage } from "@/content/commercial-page";
import { Button } from "@/components/ui";
import { whatsappHref } from "@/lib/contact";

import styles from "./commercial-page.module.css";

function createCommercialMessage(form: HTMLFormElement) {
  const data = new FormData(form);
  return [
    `Business Name: ${String(data.get("businessName") ?? "")}`,
    `Contact Person: ${String(data.get("contactPerson") ?? "")}`,
    `Phone Number: ${String(data.get("phone") ?? "")}`,
    `Business Type: ${String(data.get("businessType") ?? "")}`,
    `Enquiry: ${String(data.get("enquiry") ?? "")}`,
  ].join("\n");
}

export function CommercialEnquiryForm() {
  const [status, setStatus] = useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = createCommercialMessage(event.currentTarget);
    const href = whatsappHref(message);
    setStatus("Opening WhatsApp with your commercial enquiry.");
    window.location.assign(href);
  };

  return (
    <form className={styles.form} onSubmit={submit}>
      <div className={styles.formHeader}>
        <h3 id="commercial-enquiry-form-title">Send a commercial enquiry</h3>
        <p>Share the details Jubilee needs to begin the right conversation.</p>
      </div>

      <div className={styles.fieldGrid}>
        <label className={styles.field}>
          <span>Business Name</span>
          <input name="businessName" type="text" autoComplete="organization" required />
        </label>
        <label className={styles.field}>
          <span>Contact Person</span>
          <input name="contactPerson" type="text" autoComplete="name" required />
        </label>
        <label className={styles.field}>
          <span>Phone Number</span>
          <input name="phone" type="tel" autoComplete="tel" inputMode="tel" required />
        </label>
        <label className={styles.field}>
          <span>Business Type</span>
          <select name="businessType" defaultValue="" required>
            <option value="" disabled>Select your business type</option>
            {commercialPage.industries.map((industry) => <option key={industry} value={industry}>{industry}</option>)}
            <option value="Other">Other</option>
          </select>
        </label>
      </div>
      <label className={styles.field}>
        <span>Enquiry</span>
        <textarea name="enquiry" rows={5} required />
      </label>
      <Button type="submit" variant="secondary">Continue in WhatsApp</Button>
      <p className={styles.status} aria-live="polite">{status}</p>
    </form>
  );
}
