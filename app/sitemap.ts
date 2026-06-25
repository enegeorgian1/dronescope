import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";
import { getAllArticleSlugs, getArticleUrl } from "@/lib/blog";
import { landingPages } from "@/lib/landing-pages";
import { getAllProjectSlugs, getProjectUrl } from "@/lib/portfolio";
import { getAllServiceSlugs, getServiceUrl } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const serviceEntries = getAllServiceSlugs().map((slug) => ({
    url: getServiceUrl(slug),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogEntries = getAllArticleSlugs().map((slug) => ({
    url: getArticleUrl(slug),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const landingEntries = landingPages.map((page) => ({
    url: `${siteConfig.url}${page.path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const portfolioEntries = [
    {
      url: `${siteConfig.url}/portofoliu`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    ...getAllProjectSlugs().map((slug) => ({
      url: getProjectUrl(slug),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  ];

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
    {
      url: `${siteConfig.url}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...landingEntries,
    ...portfolioEntries,
    ...serviceEntries,
    ...blogEntries,
  ];
}