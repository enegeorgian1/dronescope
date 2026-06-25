import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Portofoliu Filmări cu Dronă | Constanța, Mamaia & Litoral",
  description:
    "Portofoliu Drone Scope — filmări cu dronă imobiliare, nunți, evenimente, industrial și reclame în Constanța, Mamaia și România. Peste 450 de proiecte.",
  alternates: {
    canonical: `${siteConfig.url}/portofoliu`,
  },
  openGraph: {
    title: "Portofoliu Filmări cu Dronă | Drone Scope",
    description:
      "Lucrări aeriene din Constanța, litoral și proiecte naționale — imobiliare, nunți, industrial, marketing.",
    url: `${siteConfig.url}/portofoliu`,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
  },
};

export default function PortofoliuPage() {
  return (
    <main id="main-content">
      <section className="pt-32 pb-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="uppercase tracking-[3px] text-xs text-accent mb-4">PORTOFOLIU</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
            Filmări cu dronă — lucrări din Constanța și România
          </h1>
          <p className="max-w-2xl text-text-secondary text-[15px] leading-relaxed">
            Selecție din portofoliul nostru: imobiliare pe litoral, nunți, evenimente corporate,
            proiecte industriale în Portul Constanța și campanii de marketing aerian.
          </p>
          <Link href="/#contact" className="btn-primary inline-flex mt-8 text-base px-8 py-4">
            SOLICITĂ OFERTĂ
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="section max-w-7xl mx-auto px-6 pb-24">
        <PortfolioGrid />
      </section>
    </main>
  );
}