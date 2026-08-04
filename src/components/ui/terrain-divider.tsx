import { type SVGProps } from "react";
import { cn } from "@/lib/utils";
export interface TerrainDividerProps extends SVGProps<SVGSVGElement> { decorative?: boolean; title?: string; }
export function TerrainDivider({ decorative = true, title, className, ...props }: TerrainDividerProps) {
  return <svg viewBox="0 0 1440 104" preserveAspectRatio="none" className={cn("block h-auto w-full text-border", className)} aria-hidden={decorative || undefined} aria-label={decorative ? undefined : title ?? "Terrain contour"} role={decorative ? undefined : "img"} {...props}>{!decorative && title ? <title>{title}</title> : null}<path d="M0 76C120 69 162 22 304 30c136 8 173 60 315 44 134-15 179-74 328-46 135 25 180 51 305 33 95-14 125-41 188-32" fill="none" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke" /></svg>;
}
