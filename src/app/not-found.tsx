import Link from "next/link";

import { Container } from "@/components/layout";
import { Button } from "@/components/ui";

import styles from "@/components/feedback/recovery.module.css";

export default function NotFound() {
  return (
    <main id="main-content" className={styles.page}>
      <Container>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Page not found</p>
          <h1 className={styles.title}>We could not find that page.</h1>
          <p className={styles.copy}>The page may have moved, or the address may be incomplete. You can return to Jubilee Indane Home or choose the support route you need.</p>
          <div className={styles.actions}>
            <Button asChild><Link href="/">Return Home</Link></Button>
            <Button asChild variant="outline"><Link href="/#contact">Contact Jubilee</Link></Button>
          </div>
          <nav className={styles.links} aria-label="Useful pages">
            <Link href="/commercial">Commercial LPG</Link>
            <Link href="/services">Domestic LPG</Link>
          </nav>
        </div>
      </Container>
    </main>
  );
}
