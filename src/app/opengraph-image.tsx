import { ImageResponse } from "next/og";

import { site } from "@/content/site";

export const alt = "Jubilee Indane Home — Authorised Indane Distributor, Pala";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ background: "#FAFAFA", color: "#10274C", display: "flex", height: "100%", padding: "72px", position: "relative", width: "100%" }}>
      <div style={{ borderLeft: "8px solid #D72638", display: "flex", flexDirection: "column", justifyContent: "space-between", paddingLeft: "42px" }}>
        <div style={{ color: "#C9192E", display: "flex", fontSize: 28, fontWeight: 600 }}>Authorised Indane Distributor</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", fontSize: 72, fontWeight: 700, letterSpacing: "-3px" }}>{site.name}</div>
          <div style={{ color: "#536174", display: "flex", fontSize: 30 }}>{site.description}</div>
        </div>
        <div style={{ color: "#536174", display: "flex", fontSize: 24 }}>Pala, Kerala</div>
      </div>
      <div style={{ background: "#E4662A", borderRadius: 999, bottom: 72, height: 44, position: "absolute", right: 72, width: 44 }} />
    </div>,
    size,
  );
}
