import { siteConfig } from "@/lib/seo";
import { catCostaFilmareArticol } from "@/lib/articles/cat-costa-filmare-cu-drona-constanta";
import { nuntaCuDronaArticol } from "@/lib/articles/nunta-cu-drona-pe-litoral";

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

function text(...parts: string[]): RichSegment[][] {
  return [parts.map((content) => ({ type: "text" as const, content }))];
}

/** Articles awaiting full rewrite — basic structure, pilot article is the reference model */
const legacyArticles: BlogArticle[] = [
  {
    slug: "filmari-cu-drona-mamaia",
    title: "Filmări cu dronă în Mamaia: ghid complet",
    metaTitle: "Filmări cu Dronă în Mamaia 2026 • Locații & Prețuri | Drone Scope",
    metaDescription:
      "Ghid complet filmări cu dronă în Mamaia 2026. Locații spectaculoase, prețuri, restricții CAA și sfaturi de la piloți cu 450+ proiecte. Solicită ofertă!",
    keywords: ["filmări dronă Mamaia", "filmări cu dronă Mamaia Nord", "fotografii aeriene Mamaia"],
    excerpt:
      "Tot ce trebuie să știi despre filmări cu dronă în Mamaia — locații, restricții de zbor și cum obții materiale cinematografice pe litoral.",
    intro: text(
      "Filmări cu dronă în Mamaia sunt printre cele mai solicitate pe litoralul românesc — și pe bună dreptate. Plaja, laguna Siutghiol și apusurile spectaculoase oferă un decor unic pentru imobiliare, marketing și evenimente.",
      " În acest ghid (versiune extinsă în curând) găsești esențialul. Pentru prețuri detaliate, citește ghidul nostru complet despre costuri."
    ),
    publishedAt: "2026-06-25",
    readTime: 7,
    relatedServiceSlug: "marketing-aerial",
    sections: [
      {
        heading: "Locații populare pentru filmări în Mamaia",
        list: [
          "Plaja din Mamaia — panorame la apus",
          "Laguna Siutghiol — contrast apă dulce/mare",
          "Mamaia Nord — vile și ansambluri rezidențiale",
        ],
        paragraphs: text(
          "Pentru un ghid complet cu prețuri și autorizații, vezi articolul despre costuri în Constanța."
        ),
      },
    ],
    faqs: [
      {
        question: "Cât costă o filmare cu dronă în Mamaia?",
        answer:
          "Similar cu Constanța: imobiliare 450–650 lei, evenimente de la 1.200 lei. Vezi tabelul complet de prețuri în articolul dedicat.",
      },
    ],
  },
  {
    slug: "fotografii-aeriene-imobiliare-avantaje",
    title: "De ce fotografiile aeriene vând proprietăți mai repede",
    metaTitle: "Fotografii Aeriene Imobiliare Constanța • De Ce Vinzi Mai Repede | Drone Scope",
    metaDescription:
      "Fotografiile aeriene pentru imobiliare cresc vizualizările cu 300%+. Ghid pentru agenți și proprietari din Constanța. Solicită o sesiune de la 450 lei!",
    keywords: ["fotografii aeriene imobiliare", "filmări imobiliare dronă", "tur virtual dronă imobiliare"],
    excerpt:
      "Argumente concrete despre cum fotografiile aeriene accelerează vânzarea proprietăților în Constanța și pe litoral.",
    intro: text(
      "Fotografiile aeriene imobiliare nu sunt un moft — sunt un avantaj competitiv măsurabil. Anunțurile cu conținut aerian primesc de 3–5 ori mai multe vizualizări.",
      " Articol complet în curs de extindere. Între timp, vezi serviciul nostru de filmări imobiliare."
    ),
    publishedAt: "2026-06-25",
    readTime: 5,
    relatedServiceSlug: "filmari-imobiliare",
    sections: [
      {
        heading: "Cifre care conving",
        paragraphs: text(
          "O sesiune de 450–650 lei se amortizează la prima proprietate vândută mai rapid. Materialele se reutilizează pe Imobiliare.ro, Storia, Facebook și în prezentări PDF."
        ),
      },
    ],
  },

  {
    slug: "autorizatii-filmari-drona-romania",
    title: "Autorizații legale pentru filmări cu dronă în România",
    metaTitle: "Autorizații Filmări Dronă România 2026 • Pilot CAA | Drone Scope",
    metaDescription:
      "Ce autorizații CAA sunt necesare pentru filmări cu dronă în România? Zone restricționate, asigurări, amenzi. Ghid de la piloți autorizați din Constanța.",
    keywords: ["pilot dronă autorizat CAA", "autorizații filmări dronă", "filmări cu dronă legal"],
    excerpt:
      "Ghid despre reglementările pentru zboruri cu drona în România — autorizații CAA, zone restricționate și de ce contează un operator profesionist.",
    intro: text(
      "Filmările cu dronă în România necesită operator autorizat CAA — nu e opțional, e lege. Amenziile pentru zbor neautorizat pot ajunge la mii de lei.",
      " Articol complet în extindere. Între timp, lucrează doar cu piloți certificați."
    ),
    publishedAt: "2026-06-25",
    readTime: 5,
    relatedServiceSlug: "industrial-constructii",
    sections: [
      {
        heading: "Zone restricționate pe litoral",
        list: [
          "Aeroport Mihail Kogălniceanu — zonă CTR",
          "Portul Constanța",
          "Instalații militare",
        ],
        paragraphs: text(
          "Un pilot profesionist verifică spațiul aerian și obține derogările înainte de fiecare zbor."
        ),
      },
    ],
  },
];

export const blogArticles: BlogArticle[] = [
  catCostaFilmareArticol,
  nuntaCuDronaArticol,
  ...legacyArticles,
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