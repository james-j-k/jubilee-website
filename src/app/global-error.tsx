"use client";

import { useEffect } from "react";

import { contactConfig } from "@/content/contact";
import { phoneHref } from "@/lib/contact";

type GlobalErrorProps = { error: Error & { digest?: string }; reset: () => void };

/** Last-resort recovery when the root application shell itself cannot render. */
export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{ alignItems: "center", background: "#fafafa", color: "#10274c", display: "flex", fontFamily: "Arial, sans-serif", margin: 0, minHeight: "100svh", padding: "24px" }}>
        <main style={{ margin: "0 auto", maxWidth: "640px", width: "100%" }}>
          <p style={{ color: "#c9192e", fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em", margin: 0, textTransform: "uppercase" }}>Jubilee Indane Home</p>
          <h1 style={{ fontSize: "clamp(2.25rem, 8vw, 4rem)", letterSpacing: "-0.05em", lineHeight: 1, margin: "16px 0 0" }}>We could not load the website.</h1>
          <p style={{ color: "#536174", fontSize: "18px", lineHeight: 1.55, margin: "24px 0 0", maxWidth: "540px" }}>Please try again. If the problem continues, contact Jubilee directly.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "32px" }}>
            <button onClick={reset} style={{ background: "#c9192e", border: 0, borderRadius: "999px", color: "#fff", cursor: "pointer", font: "inherit", fontWeight: 700, minHeight: "48px", padding: "0 22px" }} type="button">Try again</button>
            <a href={phoneHref()} style={{ alignItems: "center", border: "1px solid #d9dde4", borderRadius: "999px", color: "#10274c", display: "inline-flex", fontWeight: 700, minHeight: "46px", padding: "0 22px", textDecoration: "none" }}>Call {contactConfig.agencyName}</a>
          </div>
        </main>
      </body>
    </html>
  );
}
