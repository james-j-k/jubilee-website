import type { MetadataRoute } from "next";

/**
 * Domain and launch-date values are intentionally deferred until operations
 * approves production details. Populate URLs only with the approved canonical
 * domain during the implementation/release phase.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [];
}
