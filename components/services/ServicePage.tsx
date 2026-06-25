import Link from "next/link";
import { ArrowRight, Check, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/seo";
import {
  getServiceBySlug,
  getServiceUrl,
  type ServicePage as ServicePageData,
} from "@/lib/services";

interface ServicePageProps {
  service: ServicePageData;
}

export default function ServicePage({ service }: ServicePageProps) {
  const related = service.relatedSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is ServicePageData => s !== undefined);

  const whatsappMessage = encodeURIComponent(
    `Bună ziua! Sunt interesat de serviciul „${service.title}" și aș dori o ofertă.`
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
              <li>
                <Link href="/servicii" className="link-accessible">
                  Servicii
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-text">{service.title}</li>
            </ol>
          </nav>

          <div className="uppercase tracking-[3px] text-xs text-accent mb-4">
            {service.eyebrow}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            {service.title}
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
          {service.intro.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </section>

      {service.categories && service.categories.length > 0 && (
        <section className="section bg-surface border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Servicii Matrice 4T
            </h2>
            <p className="text-text-secondary max-w-3xl mb-10 text-[15px]">
              Platforma enterprise pentru proiecte tehnice — de la randare 3D și topografie
              la scanări termice și inspecții industriale.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {service.categories.map((category, i) => (
                <div key={i} className="card">
                  <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                  <p className="text-text-secondary leading-relaxed text-[15px] mb-5">
                    {category.desc}
                  </p>
                  <p className="text-sm font-medium text-text mb-3">Ce livrăm</p>
                  <ul className="space-y-2">
                    {category.deliverables.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-text-secondary text-[13px]"
                      >
                        <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section
        className={`section border-t border-white/10 ${
          service.categories?.length ? "bg-bg" : "bg-surface"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
            De ce să alegi Drone Scope
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {service.benefits.map((benefit, i) => (
              <div key={i} className="card">
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-text-secondary leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
              Ce include serviciul
            </h2>
            <ul className="space-y-3">
              {service.includes.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-text-secondary text-[15px]">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
              Cazuri de utilizare
            </h2>
            <ul className="space-y-3">
              {service.useCases.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-text-secondary text-[15px]">
                  <span className="text-accent font-semibold shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 text-sm text-text-secondary">
          <span className="text-text font-medium">Zone deservite: </span>
          {siteConfig.serviceAreas.join(" • ")}
        </p>
      </section>

      <section className="section bg-surface border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8 text-center">
            Întrebări frecvente
          </h2>
          <div className="space-y-3">
            {service.faqs.map((faq, i) => (
              <details
                key={i}
                className="group border border-white/10 rounded-2xl bg-bg overflow-hidden"
                open={i === 0}
              >
                <summary className="cursor-pointer px-6 py-5 text-lg font-medium list-none flex items-center justify-between gap-4 hover:bg-white/5 transition-colors [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span className="text-accent text-xl shrink-0 group-open:rotate-45 transition-transform" aria-hidden="true">
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

      {related.length > 0 && (
        <section className="section max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
            Alte servicii
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/servicii/${rel.slug}`}
                className="card group block"
              >
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-light transition-colors">
                  {rel.title}
                </h3>
                <p className="text-text-secondary text-sm line-clamp-2">
                  {rel.intro[0]}
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-accent text-sm font-medium">
                  Află mai mult
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="section bg-bg border-t border-white/10 pb-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="rounded-3xl border border-accent/20 bg-gradient-to-br from-accent/10 via-surface to-surface p-10 md:p-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Gata să începem?
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