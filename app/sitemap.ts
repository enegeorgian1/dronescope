import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";
import { getAllServiceSlugs, getServiceUrl } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const serviceEntries = getAllServiceSlugs().map((slug) => ({
    url: getServiceUrl(slug),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/servicii`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...serviceEntries,
  ];
}