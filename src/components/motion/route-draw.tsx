import { type SVGProps } from "react";
import { cn } from "@/lib/utils";
export interface RouteDrawProps extends Omit<SVGProps<SVGSVGElement>, "children"> { path: string; length?: number; decorative?: boolean; title?: string; }
export function RouteDraw({ path, length = 650, decorative = true, title, className, ...props }: RouteDrawProps) {
  return <svg viewBox="0 0 100 100" fill="none" className={cn("motion-route-draw overflow-visible", className)} aria-hidden={decorative || undefined} aria-label={decorative ? undefined : title ?? "Service route"} role={decorative ? undefined : "img"} {...props}>{!decorative && title ? <title>{title}</title> : null}<path d={path} pathLength="1" stroke="currentColor" strokeDasharray="1" strokeDashoffset="1" style={{ "--route-length": String(length) } as React.CSSProperties} vectorEffect="non-scaling-stroke" /></svg>;
}
