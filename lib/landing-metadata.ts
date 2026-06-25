import type { Metadata } from "next";
import { getLandingUrl, type LandingPage } from "@/lib/landing-pages";
import { siteConfig } from "@/lib/seo";

export function generateLandingMetadata(landing: LandingPage): Metadata {
  const url = getLandingUrl(landing.slug);

  return {
    title: landing.metaTitle,
    description: landing.metaDescription,
    keywords: [...landing.keywords, ...siteConfig.keywords.slice(0, 6)],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: landing.metaTitle,
      description: landing.metaDescription,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${landing.title} — Drone Scope`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: landing.metaTitle,
      description: landing.metaDescription,
      images: [siteConfig.ogImage],
    },
  };
}