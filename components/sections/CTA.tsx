"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTA() {
  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Bună ziua! Sunt interesat de serviciile Drone Scope și aș dori o ofertă personalizată."
    );
    window.open(`https://wa.me/40729626932?text=${message}`, "_blank");
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="section bg-bg border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-accent/20 bg-gradient-to-br from-accent/10 via-surface to-surface p-10 md:p-14 text-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10">
            <div className="uppercase tracking-[3px] text-xs text-accent mb-4">GATA DE DECOLARE?</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Hai să transformăm proiectul tău<br className="hidden md:block" /> într-o poveste aeriană.
            </h2>
            <p className="text-text-secondary max-w-lg mx-auto mb-8 text-[15px]">
              Răspundem în maxim 2 ore. Ofertă personalizată, fără obligații.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={scrollToContact}
                className="btn-primary text-base px-10 py-4 group flex items-center justify-center gap-3"
              >
                SOLICITĂ OFERTĂ
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={openWhatsApp}
                className="btn-secondary text-base px-10 py-4 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                WhatsApp
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}