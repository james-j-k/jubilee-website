import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/metadata";

/**
 * Domain and launch-date values are intentionally deferred until operations
 * approves production details. Populate URLs only with the approved canonical
 * domain during the implementation/release phase.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl("/"), changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/about"), changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/services"), changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/commercial"), changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/safety"), changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/privacy"), changeFrequency: "yearly", priority: 0.3 },
    { url: absoluteUrl("/terms"), changeFrequency: "yearly", priority: 0.3 },
  ];
}
