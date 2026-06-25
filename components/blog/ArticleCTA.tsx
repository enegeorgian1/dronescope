import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/seo";

interface ArticleCTAProps {
  variant?: "inline" | "full";
  message?: string;
}

export default function ArticleCTA({ variant = "inline", message }: ArticleCTAProps) {
  const whatsappText = encodeURIComponent(
    message ?? "Bună ziua! Am citit articolul de pe blog și aș dori o ofertă gratuită."
  );

  if (variant === "full") {
    return (
      <div className="my-10 rounded-2xl border border-accent/20 bg-accent/5 p-8 text-center">
        <p className="text-lg font-semibold mb-2">Solicită ofertă gratuită</p>
        <p className="text-text-secondary text-sm mb-6">
          Răspundem în maxim 2 ore. Fără obligații.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/#contact" className="btn-primary px-8 py-3">
            SOLICITĂ OFERTĂ
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <a
            href={`${siteConfig.social.whatsapp}?text=${whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary px-8 py-3"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            WhatsApp {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="my-8 p-5 rounded-xl border border-accent/15 bg-surface flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <p className="text-sm text-text-secondary">
        <strong className="text-text font-medium">Ai nevoie de o ofertă?</strong>{" "}
        Contactează-ne — răspundem în 2 ore.
      </p>
      <div className="flex gap-3 shrink-0">
        <Link href="/#contact" className="btn-primary text-sm px-5 py-2.5">
          Ofertă gratuită
        </Link>
        <a
          href={`${siteConfig.social.whatsapp}?text=${whatsappText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary text-sm px-5 py-2.5"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}