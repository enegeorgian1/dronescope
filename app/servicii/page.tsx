import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/seo";
import { servicePages } from "@/lib/services";

export const metadata: Metadata = {
  title: "Servicii Filmări cu Dronă Constanța | Fotografii Aeriene",
  description:
    "Toate serviciile Drone Scope: filmări imobiliare, marketing aerial, nunți, industrial, corporate. Fotografii și videoclipuri aeriene în Constanța, Mamaia și România.",
  alternates: {
    canonical: `${siteConfig.url}/servicii`,
  },
  openGraph: {
    title: "Servicii Filmări cu Dronă — Drone Scope",
    description:
      "Filmări cu dronă și fotografii aeriene profesionale pentru imobiliare, evenimente, marketing și industrie.",
    url: `${siteConfig.url}/servicii`,
  },
};

export default function ServicesIndexPage() {
  return (
    <main id="main-content">
      <section className="pt-32 pb-16 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="uppercase tracking-[3px] text-xs text-accent mb-4">
            SERVICII PROFESIONALE
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Filmări cu dronă &<br />fotografii aeriene
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Servicii complete de filmări aeriene în Constanța, pe litoral și în toată România.
            Piloți autorizați CAA, echipament DJI profesional, peste 10 ani experiență.
          </p>
        </div>
      </section>

      <section className="section max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6">
          {servicePages.map((service, i) => (
            <Link
              key={service.slug}
              href={`/servicii/${service.slug}`}
              className="card group block"
            >
              <div className="text-accent text-sm tracking-widest mb-4">
                0{i + 1}
              </div>
              <h2 className="text-2xl font-semibold mb-3 group-hover:text-accent-light transition-colors">
                {service.cardTitle}
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                {service.intro[0]}
              </p>
              <span className="inline-flex items-center gap-1 text-accent text-sm font-medium">
                Vezi detalii
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-12 text-center text-text-secondary text-sm">
          Nu găsești ce cauți?{" "}
          <Link href="/#contact" className="link-accessible">
            Contactează-ne
          </Link>{" "}
          pentru proiecte personalizate.
        </p>
      </section>
    </main>
  );
}