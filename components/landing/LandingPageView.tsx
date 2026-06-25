import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, MapPin, MessageCircle, Phone } from "lucide-react";
import { getArticleBySlug } from "@/lib/blog";
import type { LandingPage } from "@/lib/landing-pages";
import {
  categoryToServiceSlug,
  getProjectAlt,
  getProjectsByIds,
} from "@/lib/portfolio";
import { getServiceBySlug } from "@/lib/services";
import { siteConfig } from "@/lib/seo";

interface LandingPageViewProps {
  landing: LandingPage;
}

export default function LandingPageView({ landing }: LandingPageViewProps) {
  const featuredProjects = getProjectsByIds(landing.featuredProjectIds);
  const relatedServices = landing.relatedServiceSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s) => s !== undefined);
  const relatedArticles = landing.relatedBlogSlugs
    .map((slug) => getArticleBySlug(slug))
    .filter((a) => a !== undefined);

  const whatsappMessage = encodeURIComponent(
    `Bună ziua! Sunt interesat de filmări cu dronă în ${landing.city} și aș dori o ofertă.`
  );

  return (
    <main id="main-content">
      <section className="pt-32 pb-16 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-text-secondary mb-8">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="link-accessible">
                  Acasă
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-text">{landing.title}</li>
            </ol>
          </nav>

          <div className="uppercase tracking-[3px] text-xs text-accent mb-4">
            {landing.eyebrow}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            {landing.title}
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/#contact" className="btn-primary text-base px-8 py-4">
              SOLICITĂ OFERTĂ
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
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
          </div>
        </div>
      </section>

      <section className="section max-w-4xl mx-auto px-6">
        <div className="prose prose-invert max-w-none text-text-secondary text-[15px] leading-relaxed space-y-5">
          {landing.intro.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </section>

      {landing.sections.map((section, i) => (
        <section
          key={i}
          className={`section max-w-4xl mx-auto px-6 ${i % 2 === 0 ? "bg-surface border-t border-white/10" : ""}`}
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
            {section.title}
          </h2>
          <div className="space-y-4 text-text-secondary text-[15px] leading-relaxed">
            {section.paragraphs.map((p, j) => (
              <p key={j}>{p}</p>
            ))}
          </div>
        </section>
      ))}

      <section className="section bg-surface border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
            De ce Drone Scope în {landing.city}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {landing.benefits.map((benefit, i) => (
              <div key={i} className="card">
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-text-secondary leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {featuredProjects.length > 0 && (
        <section className="section max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
            Proiecte din {landing.city} și zonă
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredProjects.map((project) => {
              const serviceSlug = categoryToServiceSlug[project.category];
              return (
                <div key={project.id} className="card overflow-hidden p-0">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={project.image}
                      alt={getProjectAlt(project)}
                      fill
                      sizes="(max-width: 640px) 100vw, 25vw"
                      quality={70}
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-sm mb-1">{project.title}</h3>
                    <p className="text-text-secondary text-xs flex items-center gap-1 mb-3">
                      <MapPin className="w-3 h-3 shrink-0" aria-hidden="true" />
                      {project.location}
                    </p>
                    <Link
                      href={`/servicii/${serviceSlug}`}
                      className="text-accent text-xs font-medium hover:text-accent-light transition-colors"
                    >
                      Vezi serviciul {project.category} →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="mt-6 text-center">
            <Link href="/#portofoliu" className="link-accessible text-sm">
              Vezi portofoliul complet
            </Link>
          </p>
        </section>
      )}

      <section className="section max-w-4xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
          Zone deservite în {landing.city}
        </h2>
        <ul className="flex flex-wrap gap-2">
          {landing.localAreas.map((area) => (
            <li
              key={area}
              className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-text-secondary"
            >
              {area}
            </li>
          ))}
        </ul>
      </section>

      {relatedServices.length > 0 && (
        <section className="section bg-surface border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
              Servicii recomandate
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/servicii/${service.slug}`}
                  className="card group block"
                >
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-light transition-colors">
                    {service.cardTitle}
                  </h3>
                  <p className="text-text-secondary text-sm line-clamp-2">
                    {service.intro[0]}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {relatedArticles.length > 0 && (
        <section className="section max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
            Articole utile
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {relatedArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="card group block"
              >
                <h3 className="text-lg font-semibold group-hover:text-accent-light transition-colors">
                  {article.title}
                </h3>
                <p className="text-text-secondary text-sm mt-2 line-clamp-2">
                  {article.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="section bg-surface border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8 text-center">
            Întrebări frecvente — {landing.city}
          </h2>
          <div className="space-y-3">
            {landing.faqs.map((faq, i) => (
              <details
                key={i}
                className="group border border-white/10 rounded-2xl bg-bg overflow-hidden"
                open={i === 0}
              >
                <summary className="cursor-pointer px-6 py-5 text-lg font-medium list-none flex items-center justify-between gap-4 hover:bg-white/5 transition-colors [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span
                    className="text-accent text-xl shrink-0 group-open:rotate-45 transition-transform"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 text-text-secondary leading-relaxed text-[15px]">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-bg border-t border-white/10 pb-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="rounded-3xl border border-accent/20 bg-gradient-to-br from-accent/10 via-surface to-surface p-10 md:p-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Filmări cu dronă în {landing.city}
            </h2>
            <p className="text-text-secondary max-w-lg mx-auto mb-8 text-[15px]">
              Contactează-ne pentru o ofertă personalizată. Răspundem în maxim 2 ore, fără obligații.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="btn-primary text-base px-10 py-4">
                SOLICITĂ OFERTĂ
              </Link>
              <a href={`tel:${siteConfig.phone}`} className="btn-secondary text-base px-10 py-4">
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