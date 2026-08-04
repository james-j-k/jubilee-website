import { type ReactNode } from "react";
import { ExternalLink, MapPin } from "lucide-react";

import { cn } from "@/lib/utils";

export interface MapEmbedProps {
  title: string;
  description: string;
  href: string;
  embed?: ReactNode;
  className?: string;
}

/** A location surface that can receive an approved map embed in the future. */
export function MapEmbed({ title, description, href, embed, className }: MapEmbedProps) {
  return (
    <div className={cn("overflow-hidden rounded-md border border-border bg-surface-subtle", className)}>
      {embed ? (
        <div className="aspect-[16/9]">{embed}</div>
      ) : (
        <div className="flex aspect-[16/9] items-end justify-between gap-4 bg-[linear-gradient(135deg,hsl(var(--surface-subtle)),hsl(var(--ember-soft)))] p-4">
          <MapPin aria-hidden="true" size={22} strokeWidth={1.6} className="text-primary" />
          <span aria-hidden="true" className="h-px flex-1 bg-primary/30" />
        </div>
      )}
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-between gap-3 border-t border-border px-4 py-3 text-caption font-semibold text-foreground transition-colors duration-micro hover:bg-surface focus-visible:outline-none"
        aria-label={`Open ${title} in Google Maps`}
      >
        <span><span className="block">{title}</span><span className="mt-1 block font-normal text-muted-foreground">{description}</span></span>
        <ExternalLink aria-hidden="true" size={16} strokeWidth={1.7} className="shrink-0 text-primary" />
      </a>
    </div>
  );
}
