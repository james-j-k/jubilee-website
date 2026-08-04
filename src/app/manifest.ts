import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jubilee Indane Home",
    short_name: "Jubilee Indane",
    start_url: "/",
    display: "browser",
    background_color: "#FAFAFA",
    theme_color: "#D72638",
  };
}
