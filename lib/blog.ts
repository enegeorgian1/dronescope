import { siteConfig } from "@/lib/seo";
import { catCostaFilmareArticol } from "@/lib/articles/cat-costa-filmare-cu-drona-constanta";
import { nuntaCuDronaArticol } from "@/lib/articles/nunta-cu-drona-pe-litoral";
import { filmariMamaiaArticol } from "@/lib/articles/filmari-cu-drona-mamaia";
import { fotografiiImobiliareArticol } from "@/lib/articles/fotografii-aeriene-imobiliare-avantaje";
import { autorizatiiDronaArticol } from "@/lib/articles/autorizatii-filmari-drona-romania";

export type RichSegment =
  | { type: "text"; content: string }
  | { type: "link"; content: string; href: string; external?: boolean };

export interface BlogImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface BlogTable {
  caption: string;
  headers: string[];
  rows: string[][];
}

export interface BlogSubsection {
  heading: string;
  paragraphs?: RichSegment[][];
  list?: string[];
}

export interface BlogSection {
  heading: string;
  paragraphs?: RichSegment[][];
  list?: string[];
  subsections?: BlogSubsection[];
  table?: BlogTable;
  image?: BlogImage;
  showCtaAfter?: boolean;
}

export interface BlogFAQ {
  question: string;
  answer: string;
}

export interface HowToStep {
  name: string;
  text: string;
}

export interface BlogArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  excerpt: string;
  intro?: RichSegment[][];
  publishedAt: string;
  readTime: number;
  relatedServiceSlug?: string;
  sections: BlogSection[];
  faqs?: BlogFAQ[];
  howToSteps?: HowToStep[];
  images?: BlogImage[];
}

export const blogArticles: BlogArticle[] = [
  catCostaFilmareArticol,
  nuntaCuDronaArticol,
  filmariMamaiaArticol,
  fotografiiImobiliareArticol,
  autorizatiiDronaArticol,
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find((a) => a.slug === slug);
}

export function getAllArticleSlugs(): string[] {
  return blogArticles.map((a) => a.slug);
}

export function getArticleUrl(slug: string): string {
  return `${siteConfig.url}/blog/${slug}`;
}

export function formatArticleDate(isoDate: string): string {
  return new Intl.DateTimeFormat("ro-RO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(isoDate));
}