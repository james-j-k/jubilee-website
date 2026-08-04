import { contactConfig } from "@/content/contact";

function normalizeSiteUrl(url: string | undefined): string {
  if (!url) return "http://localhost:3000";
  return (url.startsWith("http") ? url : `https://${url}`).replace(/\/$/, "");
}

const productionDeploymentUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? process.env.VERCEL_PROJECT_PRODUCTION_URL
  ?? (process.env.VERCEL_ENV === "production" ? process.env.VERCEL_URL : undefined);

export const site = {
  name: contactConfig.agencyName,
  description: "Authorised Indane Distributor for domestic and commercial LPG support in Pala.",
  /** Set NEXT_PUBLIC_SITE_URL to Jubilee's final public domain in Vercel. */
  url: normalizeSiteUrl(productionDeploymentUrl),
  locale: "en_IN",
} as const;

/** Preview deployments must not become competing search results. */
export const isIndexable = process.env.VERCEL_ENV !== "preview";
