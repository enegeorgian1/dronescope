import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Drone Scope",
    description: siteConfig.shortDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#0B0B0E",
    theme_color: "#14B8A6",
    lang: siteConfig.language,
    orientation: "portrait-primary",
    categories: ["business", "photography"],
  };
}