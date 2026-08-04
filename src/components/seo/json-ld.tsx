import { serializeJsonLd } from "@/lib/schema";

type JsonLdProps = { data: unknown };

/** Emits safely serialized structured data without introducing client JavaScript. */
export function JsonLd({ data }: JsonLdProps) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }} />;
}
