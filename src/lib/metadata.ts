import type { Metadata } from "next";

import { site } from "@/content/site";

export function createPageMetadata({
  title,
  description,
}: Pick<Metadata, "title" | "description">): Metadata {
  return {
    title,
    description: description ?? site.description,
  };
}
