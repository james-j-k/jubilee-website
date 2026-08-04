import type { Evidence } from "@/types/content";

/**
 * Publish evidence only when each item has an accountable source and review date.
 * An empty list intentionally renders no evidence module.
 */
export const evidence: readonly Evidence[] = [];
