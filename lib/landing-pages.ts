import { filmariDronaConstanta } from "@/lib/landing-pages/filmari-drona-constanta";
import { filmariDronaMamaia } from "@/lib/landing-pages/filmari-drona-mamaia";
import { inspectiiTermaleConstanta } from "@/lib/landing-pages/inspectii-termale-constanta";
import type { LandingPage } from "@/lib/landing-pages/types";
import { siteConfig } from "@/lib/seo";

export type { LandingFAQ, LandingPage } from "@/lib/landing-pages/types";

export const landingPages: LandingPage[] = [
  filmariDronaConstanta,
  filmariDronaMamaia,
  inspectiiTermaleConstanta,
];

export function getLandingBySlug(slug: string): LandingPage | undefined {
  return landingPages.find((p) => p.slug === slug);
}

export function getLandingByPath(path: string): LandingPage | undefined {
  return landingPages.find((p) => p.path === path);
}

export function getAllLandingSlugs(): string[] {
  return landingPages.map((p) => p.slug);
}

export function getLandingUrl(slug: string): string {
  const page = getLandingBySlug(slug);
  return page ? `${siteConfig.url}${page.path}` : `${siteConfig.url}/${slug}`;
}