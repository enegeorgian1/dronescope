"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingButtons() {
  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Bună ziua! Sunt interesat de serviciile Drone Scope și aș dori o ofertă personalizată."
    );
    window.open(`https://wa.me/40729626932?text=${message}`, "_blank");
  };

  const callPhone = () => {
    window.location.href = "tel:+40729626932";
  };

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col gap-3 md:bottom-8 md:right-8">
      {/* WhatsApp Button - More prominent */}
      <motion.button
        onClick={openWhatsApp}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/30 transition-all hover:shadow-2xl md:h-16 md:w-16"
        aria-label="Scrie-ne pe WhatsApp"
      >
        <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />
        {/* Tooltip on desktop */}
        <span className="absolute right-20 hidden rounded-lg bg-black/90 px-3 py-1.5 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100 md:block">
          WhatsApp
        </span>
      </motion.button>

      {/* Phone Button */}
      <motion.button
        onClick={callPhone}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/70 text-white backdrop-blur-md transition-all hover:bg-accent hover:text-bg hover:border-accent md:h-14 md:w-14"
        aria-label="Sună-ne"
      >
        <Phone className="h-5 w-5 md:h-6 md:w-6" />
        {/* Tooltip on desktop */}
        <span className="absolute right-20 hidden rounded-lg bg-black/90 px-3 py-1.5 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100 md:block">
          0729 626 932
        </span>
      </motion.button>
    </div>
  );
}
