import Link from "next/link";

import type { PublicRoute } from "@/lib/metadata";

import styles from "./breadcrumbs.module.css";

export type Breadcrumb = { label: string; href: PublicRoute };

type BreadcrumbsProps = {
  items: readonly Breadcrumb[];
  className?: string;
};

/** A semantic, route-agnostic breadcrumb trail for interior public pages. */
export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  if (items.length < 2) return null;

  return (
    <nav aria-label="Breadcrumb" className={[styles.breadcrumbs, className].filter(Boolean).join(" ")}>
      <ol className={styles.list}>
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1;
          return <li key={item.href} className={styles.item}>
            {index > 0 ? <span aria-hidden="true" className={styles.separator}>/</span> : null}
            {isCurrent ? <span aria-current="page" className={styles.current}>{item.label}</span> : <Link className={styles.link} href={item.href}>{item.label}</Link>}
          </li>;
        })}
      </ol>
    </nav>
  );
}
