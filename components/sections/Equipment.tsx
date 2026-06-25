"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { 
  Camera,
  Zap, 
  Video, 
  Shield, 
  Monitor, 
  Battery 
} from "lucide-react";

const equipment = [
  {
    icon: Camera,
    title: "DJI Inspire 3",
    subtitle: "Flagship Cinematografic",
    description: "Sistemul nostru principal pentru proiecte de nivel înalt. Senzor full-frame X9-8K, suport ProRes RAW, transmisie de ultimă generație și capacitate de zbor cu greutate mare.",
    specs: "8K 30fps • Full Frame • ProRes RAW • 15+ km transmisie",
  },
  {
    icon: Video,
    title: "DJI Air 3S",
    subtitle: "Versatilitate Premium",
    description: "Drone dual-camera extrem de eficient. Combină un senzor mare cu un teleobiectiv puternic. Ideal pentru majoritatea proiectelor imobiliare, nunți și conținut de marketing.",
    specs: "1-inch sensor • 3x tele • 45 min zbor • 4K/60fps",
  },
  {
    icon: Camera,
    title: "DJI Mavic 3 Pro",
    subtitle: "Calitate Hasselblad",
    description: "Sistem triplu cameră cu senzor Hasselblad de 4/3. Excelent pentru fotografii aeriene de înaltă rezoluție și videoclipuri cu compresie cinematică.",
    specs: "Hasselblad 4/3 • 3x + 7x zoom • 43 min zbor",
  },
  {
    icon: Zap,
    title: "DJI Avata 2 + FPV",
    subtitle: "Shoturi Dinamice",
    description: "Sistem FPV pentru capturi creative și mișcări imposibil de realizat cu drone normale. Perfect pentru reclame energice, sport și conținut dinamic.",
    specs: "4K/60fps • Low latency • Protecție elice",
  },
  {
    icon: Shield,
    title: "Sisteme Profesionale de Transmisie",
    subtitle: "Monitorizare în Timp Real",
    description: "Transmisie de înaltă calitate cu latență foarte mică, monitoare externe 4K și backup complet de control. Asigurăm calitate și siguranță maximă la fiecare zbor.",
    specs: "4K live feed • 15+ km rază • Dual operator",
  },
  {
    icon: Battery,
    title: "Echipament Suport Complet",
    subtitle: "Siguranță & Eficiență",
    description: "Baterii multiple de rezervă, încărcătoare rapide, gimbaluri profesionale, filtre ND, stații de lucru mobile și sisteme de backup pentru zboruri lungi sau complexe.",
    specs: "Redundanță completă • Quick charge • ND filters",
  },
];

export default function Equipment() {
  return (
    <section id="echipament" className="section bg-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="uppercase tracking-[3px] text-xs text-accent mb-3">ECHIPAMENT</div>
          <SectionTitle>Flotă DJI profesională.<br />Rezultate de nivel cinematografic.</SectionTitle>
          <p className="mt-4 max-w-2xl mx-auto text-text-secondary text-[15px]">
            Pentru fiecare filmare cu dronă în Constanța sau la nivel național, alegem echipamentul DJI potrivit — de la sesiuni imobiliare rapide cu Air 3S la producții cinematografice 8K cu Inspire 3. Calibrare profesională, baterii de rezervă și redundanță completă.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipment.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: index * 0.05, ease: [0.21, 0.92, 0.25, 1] }}
                whileHover={{ y: -4 }}
                className="card group"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-bg transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
                    <p className="text-accent text-sm tracking-wide">{item.subtitle}</p>
                  </div>
                </div>

                <p className="text-text-secondary leading-relaxed text-[15px] mb-5">
                  {item.description}
                </p>

                <div className="text-xs text-accent/80 tracking-widest border-t border-white/10 pt-4">
                  {item.specs}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center text-sm text-text-secondary max-w-lg mx-auto">
          Toate dronele sunt întreținute profesional, cu baterii certificate și actualizări de firmware constante. 
          Avem redundanță completă pentru fiecare zbor important.
        </div>
      </div>
    </section>
  );
}
