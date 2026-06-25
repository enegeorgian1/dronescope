import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/seo";
import {
  blogArticles,
  formatArticleDate,
  type BlogArticle,
  type BlogSection,
} from "@/lib/blog";
import { getServiceBySlug } from "@/lib/services";
import RichParagraph from "@/components/blog/RichParagraph";
import ArticleAuthor from "@/components/blog/ArticleAuthor";
import ArticleCTA from "@/components/blog/ArticleCTA";
import ArticleTable from "@/components/blog/ArticleTable";

interface ArticlePageProps {
  article: BlogArticle;
}

function renderSection(section: BlogSection, index: number) {
  return (
    <section key={index}>
      <h2 className="text-2xl font-bold tracking-tight mb-5">{section.heading}</h2>

      {section.paragraphs?.map((segments, j) => (
        <RichParagraph key={j} segments={segments} />
      ))}

      {section.table && <ArticleTable table={section.table} />}

      {section.list && (
        <ul className="mt-4 space-y-2 mb-4">
          {section.list.map((item, k) => (
            <li key={k} className="flex items-start gap-3 text-text-secondary text-[15px]">
              <span className="text-accent font-semibold shrink-0">•</span>
              {item}
            </li>
          ))}
        </ul>
      )}

      {section.image && (
        <figure className="my-8">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
            <Image
              src={section.image.src}
              alt={section.image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 720px"
              className="object-cover"
            />
          </div>
          {section.image.caption && (
            <figcaption className="mt-3 text-sm text-text-secondary text-center">
              {section.image.caption}
            </figcaption>
          )}
        </figure>
      )}

      {section.subsections?.map((sub, s) => (
        <div key={s} className="mt-8">
          <h3 className="text-xl font-semibold mb-4">{sub.heading}</h3>
          {sub.paragraphs?.map((segments, j) => (
            <RichParagraph key={j} segments={segments} />
          ))}
          {sub.list && (
            <ul className="mt-3 space-y-2">
              {sub.list.map((item, k) => (
                <li key={k} className="flex items-start gap-3 text-text-secondary text-[15px]">
                  <span className="text-accent font-semibold shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      {section.showCtaAfter && <ArticleCTA />}
    </section>
  );
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

  const introBlocks = article.intro ?? [[{ type: "text" as const, content: article.excerpt }]];

  return (
    <main id="main-content">
      <article itemScope itemType="https://schema.org/Article">
        <header className="pt-32 pb-12 border-b border-white/10">
          <div className="max-w-3xl mx-auto px-6">
            <nav aria-label="Breadcrumb" className="text-sm text-text-secondary mb-8">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="link-accessible">Acasă</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/blog" className="link-accessible">Blog</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-text line-clamp-1">{article.title}</li>
              </ol>
            </nav>

            <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary mb-6">
              <time dateTime={article.publishedAt} itemProp="datePublished">
                {formatArticleDate(article.publishedAt)}
              </time>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" aria-hidden="true" />
                {article.readTime} min citire
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] mb-6" itemProp="headline">
              {article.title}
            </h1>

            <div className="text-lg text-text-secondary leading-relaxed space-y-4" itemProp="description">
              {introBlocks.map((segments, i) => (
                <RichParagraph
                  key={i}
                  segments={segments}
                  className="text-lg text-text-secondary leading-relaxed mb-0"
                />
              ))}
            </div>

            <ArticleAuthor />
          </div>
        </header>

        {article.images && article.images[0] && (
          <div className="max-w-4xl mx-auto px-6 -mt-4 mb-4">
            <figure>
              <div className="relative aspect-[2/1] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src={article.images[0].src}
                  alt={article.images[0].alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 896px"
                  className="object-cover"
                />
              </div>
              {article.images[0].caption && (
                <figcaption className="mt-3 text-sm text-text-secondary text-center">
                  {article.images[0].caption}
                </figcaption>
              )}
            </figure>
          </div>
        )}

        <div className="section max-w-3xl mx-auto px-6">
          <div className="space-y-12" itemProp="articleBody">
            {article.sections.map((section, i) => renderSection(section, i))}
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

        {article.faqs && article.faqs.length > 0 && (
          <section className="section bg-surface border-t border-white/10" aria-labelledby="article-faq">
            <div className="max-w-3xl mx-auto px-6">
              <h2 id="article-faq" className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
                Întrebări frecvente
              </h2>
              <div className="space-y-3">
                {article.faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="group border border-white/10 rounded-2xl bg-bg overflow-hidden"
                    open={i === 0}
                  >
                    <summary className="cursor-pointer px-6 py-5 text-base font-medium list-none flex items-center justify-between gap-4 hover:bg-white/5 transition-colors [&::-webkit-details-marker]:hidden">
                      {faq.question}
                      <span className="text-accent text-xl shrink-0 group-open:rotate-45 transition-transform" aria-hidden="true">+</span>
                    </summary>
                    <div className="px-6 pb-6 text-text-secondary leading-relaxed text-[15px]">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        <div className="max-w-3xl mx-auto px-6">
          <ArticleCTA variant="full" message={`Bună ziua! Am citit „${article.title}" și aș dori o ofertă gratuită.`} />
        </div>
      </article>

      <section className="section max-w-3xl mx-auto px-6 border-t border-white/10">
        <h2 className="text-xl font-bold mb-6">Articole similare</h2>
        <div className="space-y-4">
          {relatedArticles.map((rel) => (
            <Link key={rel.slug} href={`/blog/${rel.slug}`} className="card group block">
              <h3 className="font-semibold group-hover:text-accent-light transition-colors">{rel.title}</h3>
              <p className="text-text-secondary text-sm mt-1 line-clamp-2">{rel.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section bg-bg border-t border-white/10 pb-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="rounded-3xl border border-accent/20 bg-gradient-to-br from-accent/10 via-surface to-surface p-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Gata să începem?</h2>
            <p className="text-text-secondary max-w-lg mx-auto mb-8 text-[15px]">
              Contactează-ne pentru o ofertă personalizată. Răspundem în maxim 2 ore, fără obligații.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="btn-primary text-base px-8 py-4">SOLICITĂ OFERTĂ</Link>
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