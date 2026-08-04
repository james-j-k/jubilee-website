import { contactConfig } from "@/content/contact";

export function phoneHref() {
  return `tel:${contactConfig.phone.e164}`;
}

export function whatsappHref(message?: string) {
  const base = `https://wa.me/${contactConfig.whatsapp.number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function emailHref({ subject, body }: { subject?: string; body?: string } = {}) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString();
  return `mailto:${contactConfig.email}${query ? `?${query}` : ""}`;
}

export function mapsHref(location: "office" | "godown") {
  return contactConfig[location].mapsHref;
}

export const externalLinkProps = { target: "_blank", rel: "noreferrer" } as const;
