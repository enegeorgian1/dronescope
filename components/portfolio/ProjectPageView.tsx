import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, MessageCircle, Phone } from "lucide-react";
import {
  categoryToServiceSlug,
  getProjectAlt,
  projects,
  type Project,
} from "@/lib/portfolio";
import { getServiceBySlug } from "@/lib/services";
import { siteConfig } from "@/lib/seo";

interface ProjectPageViewProps {
  project: Project;
}

export default function ProjectPageView({ project }: ProjectPageViewProps) {
  const service = getServiceBySlug(categoryToServiceSlug[project.category]);
  const related = projects
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 3);

  const whatsappMessage = encodeURIComponent(
    `Bună ziua! Mă interesează un proiect similar cu „${project.title}" și aș dori o ofertă.`
  );

  return (
    <main id="main-content">
      <section className="pt-32 pb-12 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-text-secondary mb-8">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="link-accessible">
                  Acasă
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/portofoliu" className="link-accessible">
                  Portofoliu
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-text">{project.title}</li>
            </ol>
          </nav>

          <div className="text-accent text-xs tracking-[3px] mb-4">
            {project.category.toUpperCase()}
            {project.videoUrl && " • VIDEO"}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-4">
            {project.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-text-secondary text-sm">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-accent" aria-hidden="true" />
              {project.location}
            </span>
            {project.year && <span>{project.year}</span>}
            {project.client && (
              <span>
                Client: <span className="text-text">{project.client}</span>
              </span>
            )}
          </div>
        </div>
      </section>

      <section className="section max-w-5xl mx-auto px-6">
        <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video bg-black">
          {project.videoUrl ? (
            <video
              src={project.videoUrl}
              controls
              poster={project.image}
              className="w-full h-full object-cover"
              aria-label={`Video: ${project.title}`}
            />
          ) : (
            <Image
              src={project.image}
              alt={getProjectAlt(project)}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1024px"
              quality={80}
              className="object-cover"
            />
          )}
        </div>

        <div className="mt-10 max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight mb-4">Despre proiect</h2>
          <p className="text-text-secondary text-[15px] leading-relaxed">
            {project.description}
          </p>
        </div>

        {service && (
          <div className="mt-8">
            <Link
              href={`/servicii/${service.slug}`}
              className="inline-flex items-center gap-2 text-accent font-medium hover:text-accent-light transition-colors"
            >
              Serviciu: {service.cardTitle}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        )}
      </section>

      {related.length > 0 && (
        <section className="section bg-surface border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
              Proiecte similare
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/portofoliu/${rel.slug}`}
                  className="card group overflow-hidden p-0"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={rel.image}
                      alt={getProjectAlt(rel)}
                      fill
                      sizes="33vw"
                      quality={70}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-sm group-hover:text-accent-light transition-colors">
                      {rel.title}
                    </h3>
                    <p className="text-text-secondary text-xs mt-1">{rel.location}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section pb-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="rounded-3xl border border-accent/20 bg-gradient-to-br from-accent/10 via-surface to-surface p-10 md:p-14">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Vrei un proiect similar?
            </h2>
            <p className="text-text-secondary max-w-lg mx-auto mb-8 text-[15px]">
              Contactează-ne pentru o ofertă personalizată. Răspundem în maxim 2 ore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="btn-primary text-base px-10 py-4">
                SOLICITĂ OFERTĂ
              </Link>
              <a
                href={`${siteConfig.social.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-base px-10 py-4"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                WhatsApp
              </a>
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