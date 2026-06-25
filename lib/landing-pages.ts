import { filmariDronaConstanta } from "@/lib/landing-pages/filmari-drona-constanta";
import { filmariDronaEforie } from "@/lib/landing-pages/filmari-drona-eforie";
import { filmariDronaMamaia } from "@/lib/landing-pages/filmari-drona-mamaia";
import { filmariDronaNavodari } from "@/lib/landing-pages/filmari-drona-navodari";
import { filmariImobiliareMamaia } from "@/lib/landing-pages/filmari-imobiliare-mamaia";
import { inspectiiTermaleConstanta } from "@/lib/landing-pages/inspectii-termale-constanta";
import { nuntaCuDronaConstanta } from "@/lib/landing-pages/nunta-cu-drona-constanta";
import type { LandingPage } from "@/lib/landing-pages/types";
import { siteConfig } from "@/lib/seo";

export type { LandingFAQ, LandingPage } from "@/lib/landing-pages/types";

export const landingPages: LandingPage[] = [
  filmariDronaConstanta,
  filmariDronaMamaia,
  filmariDronaNavodari,
  filmariDronaEforie,
  filmariImobiliareMamaia,
  nuntaCuDronaConstanta,
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