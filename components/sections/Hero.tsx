"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Bună ziua! Sunt interesat de serviciile Drone Scope și aș dori o ofertă personalizată."
    );
    window.open(`https://wa.me/40729626932?text=${message}`, "_blank");
  };

  const scrollToPortfolio = () => {
    const el = document.getElementById("portofoliu");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative h-[100dvh] min-h-[720px] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image - More cinematic drone shot */}
      <div className="absolute inset-0 bg-black">
        <img
          src="https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=2000"
          alt="Drone aerial view over dramatic coastline at golden hour"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Strong cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 text-center">
        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-1.5 text-xs tracking-[2.5px] mb-8 backdrop-blur-sm"
        >
          CONSTANȚA • ROMÂNIA • PESTE 10 ANI DE EXCELENȚĂ
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-6xl md:text-[72px] lg:text-[84px] font-bold tracking-[-3.5px] leading-[0.9] mb-6 text-white"
        >
          VIZIUNE DE LA<br />ÎNĂLȚIME.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="max-w-2xl mx-auto text-2xl md:text-[26px] text-white/90 tracking-tight mb-12"
        >
          Filmări și fotografii aeriene cinematografice<br className="hidden md:block" /> 
          pentru proiecte care merită să fie văzute altfel.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={scrollToPortfolio}
            className="btn-primary text-base px-10 py-4 group flex items-center justify-center gap-3"
          >
            VEZI PORTFOLIUL
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
          </button>
          <button
            onClick={openWhatsApp}
            className="btn-secondary text-base px-10 py-4"
          >
            SOLICITĂ OFERTĂ
          </button>
        </motion.div>

        {/* Equipment / Trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-14 text-[11px] tracking-[2px] text-white/50"
        >
          ECHIPAMENT PROFESIONAL • DJI INSPIRE 3 • AIR 3S • CINEMATIC COLOR GRADING
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/50 text-xs tracking-widest"
      >
        <div>SCROLL PENTRU A DESCOPERI</div>
        <div className="w-px h-10 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
