"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { 
  Award,
  Camera, 
  Clock, 
  ShieldCheck, 
  Zap, 
  TrendingUp 
} from "lucide-react";

const advantages = [
  {
    icon: Award,
    title: "Peste 10 ani de experiență",
    desc: "Mii de ore de zbor și peste 450 de proiecte finalizate. Știm exact ce funcționează și cum să obținem rezultate de nivel înalt, indiferent de condiții.",
  },
  {
    icon: Camera,
    title: "Echipament cinematografic premium",
    desc: "Flotă DJI Matrice 4T (termal, randare 3D), Mavic 4 Pro, Mini 5 Pro și Avata 360 (FPV & 360°). Alegem drona potrivită — de la inspecții industriale la filmări cinematografice.",
  },
  {
    icon: ShieldCheck,
    title: "Autorizații complete & siguranță",
    desc: "Piloți autorizați CAA, asigurare de 2 milioane euro și experiență vastă cu zboruri peste oameni, noaptea și în zone sensibile.",
  },
  {
    icon: Clock,
    title: "Proces clar și termene respectate",
    desc: "Știi dinainte exact cum decurge colaborarea. Livrăm la timp, cu 2 runde de revizii incluse și fără surprize de ultimă oră.",
  },
  {
    icon: Zap,
    title: "Răspuns rapid și comunicare excelentă",
    desc: "Revenim în maxim 2 ore. Ești informat constant despre statusul proiectului și ai un singur punct de contact pe tot parcursul.",
  },
  {
    icon: TrendingUp,
    title: "Rezultate dovedite",
    desc: "Imaginile noastre ajută la vânzarea mai rapidă a proprietăților, cresc engagement-ul campaniilor și creează emoție autentică la evenimente.",
  },
];

export default function WhyUs() {
  return (
    <section id="de-ce-drone-scope" className="section bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="uppercase tracking-[3px] text-xs text-accent mb-3">DE CE NOI</div>
          <SectionTitle>De ce clienții premium<br />ne aleg pe noi.</SectionTitle>
          <p className="mt-4 max-w-2xl mx-auto text-text-secondary text-[15px]">
            Suntem alegerea preferată pentru filmări cu dronă în Constanța și pe litoral — nu doar imagini aeriene, ci o experiență premium, rezultate concrete și parteneriat pe termen lung cu agenții, dezvoltatori și organizatori de evenimente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: index * 0.06, ease: [0.21, 0.92, 0.25, 1] }}
                whileHover={{ y: -4 }}
                className="card group"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-bg transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">{advantage.title}</h3>
                </div>
                <p className="text-text-secondary leading-relaxed text-[15px]">
                  {advantage.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
