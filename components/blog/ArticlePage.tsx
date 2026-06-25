import Link from "next/link";
import { ArrowRight, Clock, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/seo";
import {
  blogArticles,
  formatArticleDate,
  type BlogArticle,
} from "@/lib/blog";
import { getServiceBySlug } from "@/lib/services";

interface ArticlePageProps {
  article: BlogArticle;
}

export default function ArticlePage({ article }: ArticlePageProps) {
  const relatedService = article.relatedServiceSlug
    ? getServiceBySlug(article.relatedServiceSlug)
    : undefined;

  const relatedArticles = blogArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  const whatsappMessage = encodeURIComponent(
    `Bună ziua! Am citit articolul „${article.title}" și aș dori o ofertă.`
  );

  return (
    <main id="main-content">
      <article>
        <header className="pt-32 pb-12 border-b border-white/10">
          <div className="max-w-3xl mx-auto px-6">
            <nav aria-label="Breadcrumb" className="text-sm text-text-secondary mb-8">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="link-accessible">
                    Acasă
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/blog" className="link-accessible">
                    Blog
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-text line-clamp-1">{article.title}</li>
              </ol>
            </nav>

            <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary mb-6">
              <time dateTime={article.publishedAt}>
                {formatArticleDate(article.publishedAt)}
              </time>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" aria-hidden="true" />
                {article.readTime} min citire
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] mb-6">
              {article.title}
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              {article.excerpt}
            </p>
          </div>
        </header>

        <div className="section max-w-3xl mx-auto px-6">
          <div className="space-y-12">
            {article.sections.map((section, i) => (
              <section key={i}>
                <h2 className="text-2xl font-bold tracking-tight mb-5">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, j) => (
                  <p
                    key={j}
                    className="text-text-secondary text-[15px] leading-relaxed mb-4 last:mb-0"
                  >
                    {p}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-4 space-y-2">
                    {section.list.map((item, k) => (
                      <li
                        key={k}
                        className="flex items-start gap-3 text-text-secondary text-[15px]"
                      >
                        <span className="text-accent font-semibold shrink-0">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {relatedService && (
            <div className="mt-12 p-6 rounded-2xl border border-accent/20 bg-accent/5">
              <p className="text-sm text-text-secondary mb-2">Serviciu recomandat</p>
              <Link
                href={`/servicii/${relatedService.slug}`}
                className="inline-flex items-center gap-2 text-lg font-semibold text-accent-light hover:underline"
              >
                {relatedService.cardTitle}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          )}
        </div>
      </article>

      <section className="section max-w-3xl mx-auto px-6 border-t border-white/10">
        <h2 className="text-xl font-bold mb-6">Articole similare</h2>
        <div className="space-y-4">
          {relatedArticles.map((rel) => (
            <Link
              key={rel.slug}
              href={`/blog/${rel.slug}`}
              className="card group block"
            >
              <h3 className="font-semibold group-hover:text-accent-light transition-colors">
                {rel.title}
              </h3>
              <p className="text-text-secondary text-sm mt-1 line-clamp-2">
                {rel.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section bg-bg border-t border-white/10 pb-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="rounded-3xl border border-accent/20 bg-gradient-to-br from-accent/10 via-surface to-surface p-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
              Ai nevoie de filmări cu dronă?
            </h2>
            <p className="text-text-secondary mb-8 text-[15px]">
              Contactează Drone Scope pentru o ofertă personalizată în Constanța și pe litoral.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="btn-primary text-base px-8 py-4">
                SOLICITĂ OFERTĂ
              </Link>
              <a
                href={`${siteConfig.social.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-base px-8 py-4"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                WhatsApp
              </a>
              <a href={`tel:${siteConfig.phone}`} className="btn-secondary text-base px-8 py-4">
                <Phone className="w-4 h-4" aria-hidden="true" />
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}