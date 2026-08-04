/**
 * Shared public-site shell.
 *
 * Public-site shell. Navigation is shared here so every marketing route keeps
 * a consistent, accessible route to Jubilee.
 */
import { StickyMobileContactBar } from "@/components/contact";
import { SiteFooter, SiteHeader } from "@/components/navigation";

export default function MarketingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <><SiteHeader />{children}<SiteFooter /><StickyMobileContactBar /></>;
}
