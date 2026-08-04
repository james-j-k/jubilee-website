"use client";

import { useEffect } from "react";
import Link from "next/link";

import { Container } from "@/components/layout";
import { Button } from "@/components/ui";

import styles from "@/components/feedback/recovery.module.css";

type ErrorPageProps = { error: Error & { digest?: string }; reset: () => void };

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Keep diagnostics available to the hosting platform without exposing technical details to visitors.
    console.error(error);
  }, [error]);

  return (
    <main id="main-content" className={styles.page}>
      <Container>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Something needs another try</p>
          <h1 className={styles.title}>We could not load this page.</h1>
          <p className={styles.copy}>Please try again. If the problem continues, Jubilee is available by phone or WhatsApp.</p>
          <div className={styles.actions}>
            <Button onClick={reset}>Try again</Button>
            <Button asChild variant="outline"><Link href="/#contact">Contact Jubilee</Link></Button>
          </div>
          <nav className={styles.links} aria-label="Useful pages">
            <Link href="/">Return Home</Link>
            <Link href="/commercial">Commercial LPG</Link>
            <Link href="/services">Domestic LPG</Link>
          </nav>
        </div>
      </Container>
    </main>
  );
}
