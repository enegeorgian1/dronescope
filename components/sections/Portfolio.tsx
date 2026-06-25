import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Portfolio() {
  return (
    <section id="portofoliu" className="section bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="uppercase tracking-[3px] text-xs text-accent mb-3">PORTFOLIO</div>
            <SectionTitle>Lucrări care vorbesc<br />de la sine.</SectionTitle>
          </div>
          <p className="max-w-sm text-text-secondary mt-4 md:mt-0">
            Portofoliu de filmări cu dronă din Constanța, Mamaia, litoral și proiecte naționale.
          </p>
        </div>

        <PortfolioGrid limit={8} />

        <div className="mt-10 text-center">
          <Link href="/portofoliu" className="btn-secondary inline-flex text-base px-8 py-4">
            VEZI PORTOFOLIUL COMPLET
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}