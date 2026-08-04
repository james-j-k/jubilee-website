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
  return (
    <p className={cn(styles.relationshipFallback, className)}>
      Authorised Indane Distributor
    </p>
  );
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
      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab" || !drawerRef.current) return;
      const focusable = Array.from(
        drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => !element.hasAttribute("disabled"));
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      trigger?.focus();
    };
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
          <Link href={contactHref} className={styles.contactLink} aria-current={isActive(contactHref) ? "page" : undefined}>
            Contact Jubilee
          </Link>
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
            <div className={styles.officialFallback} aria-label="Official brand relationship">
              <OfficialRelationship />
            </div>
          </footer>
        </aside>
      ) : null}
    </header>
  );
}
