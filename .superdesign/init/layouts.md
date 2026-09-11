# Layouts

## Root layout
`src/app/layout.tsx` — wraps the entire app. Loads Geist via `next/font/google` as `--font-geist-sans`. Renders JSON-LD, a skip-link, then `{children}`.
```tsx
import type { Metadata } from "next";
import { Geist } from "next/font/google";

import indaneIcon from "../../logo/indane_1.jpg";
import { isIndexable, site } from "@/content/site";
import { JsonLd } from "@/components/seo";
import { organizationJsonLd, websiteJsonLd } from "@/lib/schema";

import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={geist.variable}>
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <a className="skip-link" href="#main-content">Skip to main content</a>
        {children}
      </body>
    </html>
  );
}
```

## Marketing layout (public-site shell)
`src/app/(marketing)/layout.tsx` — wraps every public route in `SiteHeader` + `SiteFooter` + a mobile `StickyMobileContactBar`.
```tsx
import { StickyMobileContactBar } from "@/components/contact";
import { SiteFooter, SiteHeader } from "@/components/navigation";

export default function MarketingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><SiteHeader />{children}<SiteFooter /><StickyMobileContactBar /></>;
}
```

---

## SiteHeader
`src/components/navigation/site-header.tsx` — sticky top nav. Client component (`usePathname`, scroll listener toggles a `.scrolled` style, focus-trapped full-screen mobile drawer).

- Desktop (≥80rem / 1280px): logo lockup left, centered nav links (About/Services/Commercial/Safety), "Contact Jubilee" text-link + (no hamburger) right.
- Below 1280px: logo left, "Contact Jubilee" link (visible ≥768px) + hamburger "Menu" button right. Hamburger opens a full-screen `role="dialog"` drawer with large nav links, a "Contact Jubilee" CTA pill, and the official-brand-relationship fallback line.
- Background: opaque near-white (`rgb(248 247 244)`) at rest; once scrolled ≥24px picks up a border, shadow, and (on ≥1280px, where it starts fully transparent) a blurred glass backdrop.

```tsx
"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

import { primaryNavigation } from "@/content/navigation";
import { cn } from "@/lib/utils";

import styles from "./site-header.module.css";

const contactHref = "/#contact";

function OfficialRelationship({ className }: { className?: string }) {
  return <p className={cn(styles.relationshipFallback, className)}>Authorised Indane Distributor</p>;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dialogId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateScroll = () => setIsScrolled(window.scrollY >= 24);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  useEffect(() => setIsOpen(false), [pathname]);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    const trigger = triggerRef.current;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { event.preventDefault(); setIsOpen(false); return; }
      if (event.key !== "Tab" || !drawerRef.current) return;
      const focusable = Array.from(drawerRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')).filter((el) => !el.hasAttribute("disabled"));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener("keydown", onKeyDown); trigger?.focus(); };
  }, [isOpen]);

  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <header className={cn(styles.header, isScrolled && styles.scrolled)}>
      <div className={styles.inner}>
        <Link href="/" className={styles.lockup} aria-label="Jubilee Indane Home home">
          <span className={styles.name}>Jubilee Indane Home</span>
          <OfficialRelationship />
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          {primaryNavigation.map((item) => (
            <Link key={item.href} href={item.href} className={cn(styles.navLink, isActive(item.href) && styles.active)} aria-current={isActive(item.href) ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <Link href={contactHref} className={styles.contactLink} aria-current={isActive(contactHref) ? "page" : undefined}>Contact Jubilee</Link>
          <button ref={triggerRef} className={styles.menuButton} type="button" aria-expanded={isOpen} aria-controls={dialogId} aria-label={isOpen ? "Close navigation" : "Open navigation"} onClick={() => setIsOpen((open) => !open)}>
            <span>Menu</span><Menu aria-hidden="true" size={18} strokeWidth={1.8} />
          </button>
        </div>
      </div>

      {isOpen ? (
        <aside ref={drawerRef} id={dialogId} className={styles.drawer} role="dialog" aria-modal="true" aria-labelledby={`${dialogId}-title`}>
          <div className={styles.drawerHeader}>
            <Link href="/" className={styles.drawerLockup} aria-label="Jubilee Indane Home home" onClick={() => setIsOpen(false)}>
              <span id={`${dialogId}-title`}>Jubilee Indane Home</span>
              <OfficialRelationship />
            </Link>
            <button ref={closeButtonRef} type="button" className={styles.closeButton} onClick={() => setIsOpen(false)} aria-label="Close navigation">
              <span>Close</span><X aria-hidden="true" size={18} strokeWidth={1.8} />
            </button>
          </div>

          <nav className={styles.drawerNav} aria-label="Primary navigation">
            {primaryNavigation.map((item) => (
              <Link key={item.href} href={item.href} className={cn(styles.drawerLink, isActive(item.href) && styles.drawerActive)} aria-current={isActive(item.href) ? "page" : undefined} onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>

          <footer className={styles.drawerFooter}>
            <Link href={contactHref} className={styles.drawerCta} onClick={() => setIsOpen(false)}>Contact Jubilee</Link>
            <div className={styles.officialFallback} aria-label="Official brand relationship"><OfficialRelationship /></div>
          </footer>
        </aside>
      ) : null}
    </header>
  );
}
```

`site-header.module.css` (full):
```css
.header { position: sticky; z-index: var(--z-sticky); top: 0; width: 100%; background: rgb(248 247 244 / 100%); border-bottom: 1px solid transparent; transition: background-color var(--duration-small) var(--ease-standard), border-color var(--duration-small) var(--ease-standard), box-shadow var(--duration-small) var(--ease-standard); }
.inner { display: flex; min-height: 4rem; width: 100%; max-width: var(--content-width); margin: 0 auto; align-items: center; justify-content: space-between; gap: var(--space-4); padding: 0 var(--gutter-mobile); }
.lockup, .drawerLockup { display: grid; flex: 0 1 auto; gap: 0.2rem; color: hsl(var(--foreground)); text-decoration: none; }
.name { font-size: 1.0625rem; font-weight: var(--font-weight-semibold); letter-spacing: var(--tracking-heading); line-height: 1.05; white-space: nowrap; }
.relationshipFallback { margin: 0; color: hsl(var(--primary)); font-size: var(--text-metadata); font-weight: var(--font-weight-semibold); line-height: var(--leading-metadata); }
.desktopNav { display: none; }
.actions { display: flex; align-items: center; gap: var(--space-2); }
.contactLink, .menuButton, .closeButton { display: inline-flex; min-height: 3rem; align-items: center; justify-content: center; gap: 0.45rem; border: 0; border-radius: var(--radius-sm); background: transparent; color: hsl(var(--foreground)); font-size: 0.875rem; font-weight: var(--font-weight-semibold); line-height: 1; text-decoration: none; transition: color var(--duration-micro) var(--ease-standard), background-color var(--duration-micro) var(--ease-standard); }
.contactLink { display: none; padding: 0 0.5rem; }
.menuButton, .closeButton { padding: 0 0.4rem; cursor: pointer; }
.contactLink:hover, .menuButton:hover, .closeButton:hover { color: hsl(var(--primary)); background: hsl(var(--primary-soft)); }
.scrolled { border-bottom-color: hsl(var(--border)); box-shadow: var(--shadow-panel); background: rgb(248 247 244 / 92%); backdrop-filter: blur(14px) saturate(110%); -webkit-backdrop-filter: blur(14px) saturate(110%); }
.drawer { position: fixed; z-index: var(--z-modal); inset: 0; display: grid; grid-template-rows: auto minmax(0, 1fr) auto; background: hsl(var(--background)); color: hsl(var(--foreground)); }
.drawerHeader { display: flex; min-height: 5.25rem; align-items: center; justify-content: space-between; gap: var(--space-4); padding: max(var(--space-4), env(safe-area-inset-top)) var(--gutter-mobile) var(--space-3); border-bottom: 1px solid hsl(var(--border)); }
.drawerLockup > span:first-child { font-size: 1.0625rem; font-weight: var(--font-weight-semibold); letter-spacing: var(--tracking-heading); line-height: 1.05; }
.drawerNav { display: flex; min-height: 0; flex-direction: column; gap: var(--space-2); overflow-y: auto; padding: var(--space-6) var(--gutter-mobile); }
.drawerLink { display: flex; min-height: 3rem; align-items: center; border-left: 1px solid transparent; padding-left: var(--space-3); color: hsl(var(--foreground)); font-size: 1.375rem; font-weight: var(--font-weight-medium); letter-spacing: var(--tracking-heading); line-height: 1.15; text-decoration: none; }
.drawerLink:hover, .drawerActive { border-left-color: hsl(var(--primary)); color: hsl(var(--primary)); }
.drawerFooter { display: grid; gap: var(--space-4); padding: var(--space-4) var(--gutter-mobile) max(var(--space-5), env(safe-area-inset-bottom)); border-top: 1px solid hsl(var(--border)); background: hsl(var(--background)); }
.drawerCta { display: inline-flex; min-height: 3rem; align-items: center; justify-content: center; border-radius: var(--radius-sm); background: hsl(var(--action)); color: hsl(var(--action-foreground)); font-size: var(--text-button); font-weight: var(--font-weight-semibold); text-decoration: none; transition: transform var(--duration-micro) var(--ease-standard), box-shadow var(--duration-micro) var(--ease-standard); }
.drawerCta:hover { transform: translateY(-1px); box-shadow: var(--shadow-action); }
.officialFallback { border: 1px solid hsl(var(--border)); border-radius: var(--radius-md); background: hsl(var(--surface)); padding: 0.7rem var(--space-3); }
.officialFallback .relationshipFallback { color: hsl(var(--foreground)); font-size: var(--text-caption); font-weight: var(--font-weight-semibold); }

@media (min-width: 48rem) { .inner { min-height: 4.5rem; padding: 0 var(--gutter-tablet); } .contactLink { display: inline-flex; } .drawerHeader, .drawerNav, .drawerFooter { padding-left: var(--gutter-tablet); padding-right: var(--gutter-tablet); } .drawerLink { font-size: 1.25rem; } }
@media (max-width: 79.9375rem) { .scrolled { backdrop-filter: none; -webkit-backdrop-filter: none; } }
@media (min-width: 80rem) { .header { background: rgb(248 247 244 / 0%); } .inner { min-height: 5.5rem; gap: var(--space-6); padding: 0 var(--gutter-desktop); } .lockup { min-width: 13.5rem; } .desktopNav { display: flex; align-items: center; justify-content: center; gap: 1.75rem; } .navLink { position: relative; display: inline-flex; min-height: 2.75rem; align-items: center; color: hsl(var(--foreground)); font-size: 0.875rem; font-weight: var(--font-weight-medium); line-height: 1.2; text-decoration: none; white-space: nowrap; } .navLink::after { position: absolute; right: 0; bottom: 0.35rem; left: 0; height: 1px; background: hsl(var(--primary)); content: ""; transform: scaleX(0); transform-origin: left; transition: transform var(--duration-micro) var(--ease-standard); } .navLink:hover::after, .active::after { transform: scaleX(1); } .navLink:hover, .active { color: hsl(var(--primary)); } .menuButton { display: none; } .contactLink { min-height: 2.75rem; } .scrolled { background: rgb(248 247 244 / 92%); } }
@media (min-width: 100rem) { .inner { max-width: var(--content-width-wide); padding: 0 var(--gutter-wide); } }
@media (max-width: 22.4375rem) { .inner { padding-inline: var(--gutter-mobile); } .name { font-size: 1rem; } .relationshipFallback { display: none; } .menuButton { min-width: 3rem; } .menuButton span { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; } }
@media (prefers-reduced-motion: reduce) { .header, .contactLink, .menuButton, .closeButton, .drawerCta, .navLink::after { transition-duration: 1ms; } }
```

---

## SiteFooter
`src/components/navigation/site-footer.tsx` — dark navy 4-column footer (identity+logo, quick nav, services, contact&visit) + legal bar (copyright + privacy/terms links).
```tsx
import Image from "next/image";
import Link from "next/link";

import jubileeLogo from "../../../logo/jubilee-logo.jpg";
import { contactConfig } from "@/content/contact";
import { primaryNavigation } from "@/content/navigation";
import { emailHref, externalLinkProps, mapsHref, phoneHref, whatsappHref } from "@/lib/contact";

import styles from "./site-footer.module.css";

const serviceLinks = [
  { href: "/services", label: "Domestic LPG" },
  { href: "/commercial", label: "Commercial LPG" },
] as const;

const quickLinks = [{ href: "/", label: "Home" }, ...primaryNavigation, { href: "/#contact", label: "Contact & Visit" }] as const;

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.identity}>
          <Image src={jubileeLogo} alt="Jubilee Indane Home" className={styles.logo} />
          <p className={styles.relationship}>Authorised Indane Distributor</p>
          <p className={styles.description}>Domestic and commercial LPG support from {contactConfig.agencyName} in Pala.</p>
        </div>

        <nav className={styles.group} aria-label="Quick navigation">
          <h2>Quick navigation</h2>
          <ul>{quickLinks.map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul>
        </nav>

        <nav className={styles.group} aria-label="Services">
          <h2>Services</h2>
          <ul>{serviceLinks.map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}<li><Link href="/safety">Safety Guidance</Link></li></ul>
        </nav>

        <section className={styles.group} aria-labelledby="footer-contact-title">
          <h2 id="footer-contact-title">Contact & visit</h2>
          <address>{contactConfig.office.addressLines.map((line) => <span key={line}>{line}</span>)}</address>
          <p className={styles.hours}><span>{contactConfig.office.hours[0]}</span><span>{contactConfig.office.hours[1]}</span></p>
          <ul className={styles.contactLinks}>
            <li><a href={phoneHref()}>{contactConfig.phone.display}</a></li>
            <li><a href={whatsappHref()} {...externalLinkProps}>WhatsApp: {contactConfig.whatsapp.display}</a></li>
            <li><a href={emailHref()}>{contactConfig.email}</a></li>
            <li><a href={mapsHref("office")} {...externalLinkProps}>Office Google Maps</a></li>
            <li><a href={mapsHref("godown")} {...externalLinkProps}>LPG Godown Google Maps</a></li>
          </ul>
        </section>
      </div>

      <div className={styles.legal}>
        <p>© {new Date().getFullYear()} Jubilee Indane Home. All rights reserved.</p>
        <nav aria-label="Legal"><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms &amp; Conditions</Link></nav>
      </div>
    </footer>
  );
}
```

`site-footer.module.css` (full):
```css
.footer { border-top: 1px solid hsl(var(--border)); background: hsl(var(--institutional-navy)); color: hsl(var(--color-cloud)); }
.inner { display: grid; gap: var(--space-7); width: min(100% - (var(--gutter-mobile) * 2), var(--content-width)); margin: 0 auto; padding: var(--space-8) 0 var(--space-7); }
.identity { max-width: 20rem; }
.logo { display: block; width: auto; height: 3.25rem; border-radius: var(--radius-sm); }
.relationship, .group h2 { margin: var(--space-4) 0 0; color: hsl(var(--color-jubilee-orange)); font-size: var(--text-metadata); font-weight: var(--font-weight-semibold); letter-spacing: var(--tracking-metadata); line-height: var(--leading-metadata); text-transform: uppercase; }
.description { margin: var(--space-3) 0 0; color: hsl(var(--color-cloud) / 0.78); font-size: var(--text-caption); line-height: var(--leading-caption); }
.group h2 { margin: 0 0 var(--space-3); }
.group ul, .contactLinks { display: grid; gap: var(--space-2); margin: 0; padding: 0; list-style: none; }
.group a, .group address, .hours { color: hsl(var(--color-cloud) / 0.78); font-size: var(--text-caption); line-height: var(--leading-caption); }
.group a { border-radius: var(--radius-sm); text-decoration: none; text-underline-offset: 0.25rem; transition: color var(--duration-micro) var(--ease-standard), text-decoration-color var(--duration-micro) var(--ease-standard); }
.group a:hover { color: hsl(var(--color-cloud)); text-decoration: underline; }
.footer :focus-visible { outline-color: hsl(var(--color-cloud)); }
.group address, .hours { display: grid; gap: var(--space-1); margin: 0; font-style: normal; }
.hours { margin-top: var(--space-3); color: hsl(var(--color-cloud)); font-weight: var(--font-weight-medium); }
.contactLinks { margin-top: var(--space-4); }
.legal { display: flex; flex-direction: column; gap: var(--space-3); width: min(100% - (var(--gutter-mobile) * 2), var(--content-width)); margin: 0 auto; padding: var(--space-5) 0; border-top: 1px solid hsl(var(--color-cloud) / 0.15); color: hsl(var(--color-cloud) / 0.62); font-size: var(--text-metadata); line-height: var(--leading-metadata); }
.legal p { margin: 0; }
.legal nav { display: flex; flex-wrap: wrap; gap: var(--space-4); }
.legal a { border-radius: var(--radius-sm); color: inherit; text-underline-offset: 0.25rem; }
.legal a:hover { color: hsl(var(--color-cloud)); }

@media (min-width: 48rem) { .inner, .legal { width: min(100% - (var(--gutter-tablet) * 2), var(--content-width)); } .inner { grid-template-columns: minmax(0, 1.35fr) repeat(2, minmax(8rem, 0.7fr)) minmax(14rem, 1fr); gap: var(--space-6); padding: var(--space-9) 0 var(--space-8); } .legal { flex-direction: row; align-items: center; justify-content: space-between; } }
@media (min-width: 64rem) { .inner, .legal { width: min(100% - (var(--gutter-desktop) * 2), var(--content-width)); } }
```

---

## StickyMobileContactBar
`src/components/contact/sticky-mobile-contact-bar.tsx` — fixed bottom 3-column bar (Call / WhatsApp / Directions), mobile-only (`display:none` at ≥48rem). Frosted-glass background.
```tsx
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { externalLinkProps, mapsHref, phoneHref, whatsappHref } from "@/lib/contact";
import styles from "./sticky-mobile-contact-bar.module.css";

export function StickyMobileContactBar() {
  return (
    <nav className={styles.bar} aria-label="Quick contact">
      <a href={phoneHref()}><Phone aria-hidden="true" size={18} /><span>Call</span></a>
      <a href={whatsappHref()} {...externalLinkProps}><MessageCircle aria-hidden="true" size={18} /><span>WhatsApp</span></a>
      <a href={mapsHref("office")} {...externalLinkProps}><MapPin aria-hidden="true" size={18} /><span>Directions</span></a>
    </nav>
  );
}
```
```css
.bar { position: fixed; z-index: var(--z-raised); right: 0; bottom: 0; left: 0; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); min-height: calc(3.5rem + env(safe-area-inset-bottom)); padding-bottom: env(safe-area-inset-bottom); border-top: 1px solid hsl(var(--border)); background: hsl(var(--surface) / 0.96); box-shadow: 0 -8px 20px rgb(17 24 39 / 8%); backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation)); }
.bar a { display: inline-flex; min-height: 3.5rem; align-items: center; justify-content: center; gap: var(--space-2); border-right: 1px solid hsl(var(--border)); color: hsl(var(--foreground)); font-size: var(--text-caption); font-weight: var(--font-weight-semibold); text-decoration: none; }
.bar a:last-child { border-right: 0; }
.bar a:hover { color: hsl(var(--primary)); }
@media (min-width: 48rem) { .bar { display: none; } }
@media (prefers-reduced-motion: reduce) { .bar a { transition-duration: 1ms; } }
```
