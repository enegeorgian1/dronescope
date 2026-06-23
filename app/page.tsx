"use client";

import React from "react";
import { ArrowRight, Award, Users, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Hero from "@/components/sections/Hero";
import WhyUs from "@/components/sections/WhyUs";
import Equipment from "@/components/sections/Equipment";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import Clients from "@/components/sections/Clients";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import CTA from "@/components/sections/CTA";
import FloatingButtons from "@/components/ui/FloatingButtons";
import SectionTitle from "@/components/ui/SectionTitle";

// ==================== ABOUT + STATS ====================
function About() {
  const stats = [
    { number: "10+", label: "Ani de experiență", icon: Clock },
    { number: "450+", label: "Proiecte finalizate", icon: Award },
    { number: "180+", label: "Clienți mulțumiți", icon: Users },
    { number: "Națională", label: "Acoperire în România", icon: MapPin },
  ];

  return (
    <section id="despre" className="section max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-12 gap-x-12 items-center">
        <div className="md:col-span-7">
          <div className="uppercase tracking-[3px] text-xs text-accent mb-3">CINE SUNTEM</div>
          <SectionTitle className="mb-8">Peste un deceniu de excelență în filmări aeriene.</SectionTitle>
          
          <div className="prose prose-invert text-text-secondary max-w-prose text-[15px] leading-relaxed space-y-5">
            <p>
              Drone Scope este studioul de filmări și fotografii aeriene premium din Constanța, cu peste 10 ani de experiență în capturarea unor imagini care depășesc așteptările.
            </p>
            <p>
              Lucrăm cu agenții imobiliare de top, organizatori de nunți și evenimente, dezvoltatori imobiliari și branduri care înțeleg puterea unei perspective unice. Fiecare proiect este tratat cu aceeași atenție la detalii ca și cum ar fi pentru cel mai mare client al nostru.
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

// ==================== SERVICES ====================
function Services() {
  const services = [
    {
      title: "Imobiliare",
      desc: "Fotografii și videoclipuri aeriene care vând proprietăți. Ideal pentru agenții și dezvoltatori care vor să iasă în evidență.",
    },
    {
      title: "Reclame & Marketing",
      desc: "Conținut cinematic pentru campanii, spoturi publicitare și materiale de promovare premium.",
    },
    {
      title: "Nunți & Evenimente",
      desc: "Povești aeriene emoționante care surprind magia momentului din unghiuri imposibil de atins la sol.",
    },
    {
      title: "Industrial & Construcții",
      desc: "Documentare de progres, inspecții, time-lapse și materiale pentru investitori și autorități.",
    },
    {
      title: "Videoclipuri Corporate",
      desc: "Prezentări de companie, tururi de facilități și conținut de brand cu impact vizual puternic.",
    },
  ];

  return (
    <section id="servicii" className="section bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="uppercase tracking-[3px] text-xs text-accent mb-3">CE OFERIM</div>
            <SectionTitle>Servicii premium,<br />rezultate de neuitat.</SectionTitle>
          </div>
          <p className="max-w-sm text-text-secondary mt-4 md:mt-0">
            Fiecare serviciu este adaptat la nevoile tale specifice și livrat la cele mai înalte standarde cinematografice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="card group"
            >
              <div className="text-accent text-sm tracking-widest mb-4">0{i + 1}</div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-text-secondary leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== OUR PROCESS ====================
function Process() {
  const steps = [
    {
      number: "01",
      title: "Consultație & Planificare",
      desc: "Discutăm detaliile proiectului, locația, obiectivele și termenele. Stabilim unghiurile și stilul dorit.",
    },
    {
      number: "02",
      title: "Pregătire & Autorizații",
      desc: "Obținem toate aprobările necesare (CAA, autorități locale) și planificăm zborul în funcție de condițiile meteo.",
    },
    {
      number: "03",
      title: "Captură & Post-producție",
      desc: "Efectuăm filmările cu echipament profesional DJI. Edităm materialul la standarde cinematografice.",
    },
    {
      number: "04",
      title: "Livrare & Revizii",
      desc: "Livrăm fișierele finale în formatul solicitat + 2 runde de revizii incluse pentru perfecțiune.",
    },
  ];

  return (
    <section id="proces" className="section max-w-5xl mx-auto px-6">
      <div className="text-center mb-16">
        <div className="uppercase tracking-[3px] text-xs text-accent mb-3">CUM LUCRĂM</div>
        <SectionTitle>Un proces clar.<br />Rezultate predictibile.</SectionTitle>
      </div>

      <div className="space-y-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="process-step card flex flex-col md:flex-row md:items-center gap-8"
          >
            <div className="text-[72px] md:text-[88px] font-bold tracking-[-2.5px] text-accent/20 tabular-nums shrink-0">
              {step.number}
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">{step.title}</h3>
              <p className="text-text-secondary text-[15px] max-w-2xl">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ==================== MAIN PAGE ====================
export default function DroneScopeWebsite() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Equipment />
      <Process />

      <Portfolio />
      <Testimonials />
      <Clients />
      <FAQ />
      <CTA />
      <Contact />

      {/* Floating WhatsApp + Phone buttons */}
      <FloatingButtons />
    </main>
  );
}
