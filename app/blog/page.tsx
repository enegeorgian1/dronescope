import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { siteConfig } from "@/lib/seo";
import { blogArticles, formatArticleDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog Filmări cu Dronă | Ghiduri & Sfaturi Constanța",
  description:
    "Articole despre filmări cu dronă, prețuri, autorizații și sfaturi practice pentru Constanța, Mamaia și litoral. Ghiduri de la echipa Drone Scope.",
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  openGraph: {
    title: "Blog Drone Scope — Filmări cu Dronă",
    description:
      "Ghiduri, prețuri și sfaturi despre filmări aeriene în Constanța și pe litoral.",
    url: `${siteConfig.url}/blog`,
  },
};

export default function BlogIndexPage() {
  return (
    <main id="main-content">
      <section className="pt-32 pb-16 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="uppercase tracking-[3px] text-xs text-accent mb-4">
            BLOG & GHIDURI
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
            Filmări cu dronă:<br />ghiduri și sfaturi
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Articole practice despre prețuri, locații, autorizații și cum să obții
            cele mai bune rezultate din filmările aeriene în Constanța și pe litoral.
          </p>
        </div>
      </section>

      <section className="section max-w-4xl mx-auto px-6">
        <div className="space-y-6">
          {blogArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="card group block"
            >
              <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary mb-3">
                <time dateTime={article.publishedAt}>
                  {formatArticleDate(article.publishedAt)}
                </time>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                  {article.readTime} min
                </span>
              </div>
              <h2 className="text-2xl font-semibold mb-3 group-hover:text-accent-light transition-colors">
                {article.title}
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                {article.excerpt}
              </p>
              <span className="inline-flex items-center gap-1 text-accent text-sm font-medium">
                Citește articolul
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-12 text-center text-text-secondary text-sm">
          Vrei o ofertă directă?{" "}
          <Link href="/#contact" className="link-accessible">
            Contactează-ne
          </Link>{" "}
          sau vezi{" "}
          <Link href="/servicii" className="link-accessible">
            serviciile noastre
          </Link>
          .
        </p>
      </section>
    </main>
  );
}