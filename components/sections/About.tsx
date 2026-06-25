import SectionTitle from "@/components/ui/SectionTitle";
import { siteConfig } from "@/lib/seo";

const stats = [
  { number: "10+", label: "Ani de experiență" },
  { number: "450+", label: "Proiecte finalizate" },
  { number: "180+", label: "Clienți mulțumiți" },
  { number: "Națională", label: "Acoperire în România" },
];

export default function About() {
  return (
    <section id="despre" className="section max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-12 gap-x-12 items-center">
        <div className="md:col-span-7">
          <div className="uppercase tracking-[3px] text-xs text-accent mb-3">CINE SUNTEM</div>
          <SectionTitle className="mb-8">Peste un deceniu de excelență în filmări aeriene.</SectionTitle>

          <div className="prose prose-invert text-text-secondary max-w-prose text-[15px] leading-relaxed space-y-5">
            <p>
              Drone Scope este studioul de <strong className="text-text font-medium">filmări cu dronă și fotografii aeriene</strong> din Constanța, cu peste 10 ani de experiență în capturarea unor imagini care depășesc așteptările. Oferim servicii profesionale de video și foto aerian pentru clienți din Constanța, pe litoral și în toată România.
            </p>
            <p>
              Lucrăm cu agenții imobiliare, organizatori de nunți, dezvoltatori și branduri care au nevoie de perspective aeriene memorabile. Fiecare proiect — de la o vilă din Mamaia Nord la un șantier industrial din Portul Constanța — primește aceeași atenție la detalii și același standard cinematografic.
            </p>
            <p className="text-sm">
              <span className="text-text-secondary">Zone deservite: </span>
              {siteConfig.serviceAreas.join(" • ")}
            </p>
          </div>
        </div>

        <div className="md:col-span-5 mt-10 md:mt-0">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="card text-center py-7">
                <div className="text-4xl font-semibold tracking-tighter text-accent mb-1">{stat.number}</div>
                <div className="text-sm text-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}