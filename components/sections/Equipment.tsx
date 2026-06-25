"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import {
  fleetDrones,
  fleetSummary,
  supportEquipment,
} from "@/lib/equipment";
import {
  Camera,
  Video,
  Thermometer,
  Orbit,
  Battery,
} from "lucide-react";

const iconById: Record<string, React.ElementType> = {
  "matrice-4t": Thermometer,
  "mavic-4-pro": Camera,
  "mini-5-pro": Video,
  "avata-360": Orbit,
};

export default function Equipment() {
  return (
    <section id="echipament" className="section bg-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="uppercase tracking-[3px] text-xs text-accent mb-3">ECHIPAMENT</div>
          <SectionTitle>
            Flotă DJI profesională.<br />
            Termal, 3D, cinematic & FPV.
          </SectionTitle>
          <p className="mt-4 max-w-3xl mx-auto text-text-secondary text-[15px]">
            {fleetSummary}
          </p>
        </div>

        <div className="space-y-8">
          {fleetDrones.map((drone, index) => {
            const Icon = iconById[drone.id] ?? Camera;
            const isMatrice = drone.id === "matrice-4t";

            return (
              <motion.div
                key={drone.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: index * 0.05, ease: [0.21, 0.92, 0.25, 1] }}
                className={`card group ${isMatrice ? "border-accent/30 bg-surface" : ""}`}
              >
                <div className="flex flex-col lg:flex-row lg:gap-10">
                  <div className="lg:w-2/5 shrink-0">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-bg transition-colors">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight">{drone.title}</h3>
                        <p className="text-accent text-sm tracking-wide">{drone.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-text-secondary leading-relaxed text-[15px] mb-5">
                      {drone.description}
                    </p>

                    <div className="text-xs text-accent/80 tracking-widest border-t border-white/10 pt-4 mb-5">
                      {drone.specs}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {drone.idealFor.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full border border-white/10 text-text-secondary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:w-3/5 mt-6 lg:mt-0">
                    <p className="text-sm font-medium text-text mb-3">
                      {isMatrice ? "Ce putem face cu Matrice 4T" : "Capabilități"}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {drone.capabilities.map((cap) => (
                        <li
                          key={cap}
                          className="flex items-start gap-2 text-text-secondary text-[13px] leading-relaxed"
                        >
                          <span className="text-accent shrink-0 mt-0.5">•</span>
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card mt-8"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Battery className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{supportEquipment.title}</h3>
              <p className="text-text-secondary text-[15px] leading-relaxed mb-3">
                {supportEquipment.description}
              </p>
              <p className="text-xs text-accent/80 tracking-widest">{supportEquipment.specs}</p>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 text-center text-sm text-text-secondary max-w-2xl mx-auto">
          Alegem drona potrivită pentru fiecare proiect — Matrice 4T pentru termal și randare 3D,
          Mavic 4 Pro pentru cinematic, Mini 5 Pro pentru agilitate, Avata 360 pentru FPV și 360°.
          Toate sunt întreținute profesional, cu baterii certificate și redundanță completă.
        </div>
      </div>
    </section>
  );
}