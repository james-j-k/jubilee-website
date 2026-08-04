import { type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

export interface CtaProps { title: string; description?: string; href: string; label: string; icon?: ReactNode; className?: string; }
export function Cta({ title, description, href, label, icon = <ArrowRight aria-hidden="true" size={17} />, className }: CtaProps) {
  return <aside className={cn("rounded-lg border border-border bg-surface p-5 shadow-panel sm:flex sm:items-center sm:justify-between sm:gap-6", className)} aria-label={title}>
    <div><h3 className="text-h3">{title}</h3>{description ? <p className="mt-2 text-body text-muted-foreground">{description}</p> : null}</div>
    <Button asChild className="mt-5 shrink-0 sm:mt-0"><a href={href}>{label}{icon}</a></Button>
  </aside>;
}
