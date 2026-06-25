import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { servicePages } from "@/lib/services";

export default function Services() {
  return (
    <section id="servicii" className="section bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="uppercase tracking-[3px] text-xs text-accent mb-3">CE OFERIM</div>
            <SectionTitle>Servicii de filmări cu dronă<br />în Constanța și România.</SectionTitle>
          </div>
          <p className="max-w-sm text-text-secondary mt-4 md:mt-0">
            Fotografii și videoclipuri aeriene adaptate nevoilor tale — de la o sesiune rapidă pentru imobiliare la producții cinematografice complete.{" "}
            <Link href="/servicii" className="link-accessible">
              Vezi toate serviciile
            </Link>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicePages.map((service, i) => (
            <Link
              key={service.slug}
              href={`/servicii/${service.slug}`}
              className="card group block"
            >
              <div className="text-accent text-sm tracking-widest mb-4">0{i + 1}</div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-accent-light transition-colors">
                {service.cardTitle}
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                {service.intro[0].slice(0, 160)}…
              </p>
              <span className="inline-flex items-center gap-1 text-accent text-sm font-medium">
                Află mai mult
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}