"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Cât costă o filmare sau o ședință foto cu dronă?",
    answer: "Prețurile variază în funcție de tipul proiectului, durata, locație și complexitate. O ședință standard pentru imobiliare începe de la 450-650 lei, iar proiecte mai ample (nunți, reclame, industrii) au prețuri personalizate. Oferim întotdeauna o ofertă clară după o scurtă discuție.",
  },
  {
    question: "Cât durează o filmare cu dronă?",
    answer: "Depinde de proiect. Pentru imobiliare, de obicei 1-2 ore pe locație. Pentru nunți sau evenimente, putem filma întreaga zi. Pentru proiecte industriale sau time-lapse, putem reveni de mai multe ori pe parcursul săptămânilor. Stabilim totul împreună în etapa de planificare.",
  },
  {
    question: "Aveți toate autorizațiile legale necesare?",
    answer: "Da. Toți piloții noștri sunt autorizați de Autoritatea Aeronautică Civilă (CAA), avem asigurare de răspundere civilă de 2 milioane de euro și experiență vastă cu zboruri în zone sensibile, peste oameni și noaptea (cu derogări).",
  },
  {
    question: "Ce se întâmplă dacă vremea nu permite zborul?",
    answer: "Siguranța este prioritară. Dacă condițiile meteo nu sunt favorabile (vânt puternic, ploaie, ceață densă), reprogramăm ședința fără costuri suplimentare. Vă anunțăm din timp și găsim cea mai bună soluție alternativă.",
  },
  {
    question: "Cât timp durează până primesc materialele finale?",
    answer: "Pentru majoritatea proiectelor livrăm materialele în 3-7 zile lucrătoare. Pentru proiecte urgente (evenimente, campanii cu termen strâns) putem livra și în 24-48 de ore contra unui cost suplimentar.",
  },
  {
    question: "Pot alege unghiurile, stilul și muzica?",
    answer: "Absolut. În etapa de planificare discutăm detaliat ce doriți să evidențiați. Vă trimitem un plan de zbor, iar după filmare aveți 2 runde de revizii incluse pentru editare (culoare, muzică, tăieturi etc.).",
  },
  {
    question: "Oferiți și editare video profesională?",
    answer: "Da. Toate materialele trec printr-un proces de post-producție de nivel cinematografic: color grading profesional, stabilizare, corecții de lumină și, la cerere, montaj cu muzică și voice-over.",
  },
  {
    question: "Pot folosi imaginile pentru reclame și campanii plătite?",
    answer: "Da. Primești drepturi de utilizare comercială completă asupra materialelor livrate. Dacă ai nevoie de licențe speciale sau utilizare pe termen nelimitat, discutăm detaliile în ofertă.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section bg-surface border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="uppercase tracking-[3px] text-xs text-accent mb-3">ÎNTREBĂRI FRECVENTE</div>
          <h2 className="section-title">Întrebări frecvente</h2>
          <p className="mt-4 max-w-md mx-auto text-text-secondary">
            Răspunsuri la cele mai comune întrebări despre colaborarea cu noi.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border border-white/10 rounded-2xl overflow-hidden bg-bg"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-lg font-medium pr-8">{faq.question}</span>
                  <span className="text-accent shrink-0">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-text-secondary leading-relaxed text-[15px]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center text-sm text-text-secondary">
          Ai o întrebare care nu apare aici?{" "}
          <a href="#contact" className="text-accent hover:underline">
            Scrie-ne direct
          </a>{" "}
          sau sună-ne la <a href="tel:+40729626932" className="text-accent hover:underline">0729 626 932</a>.
        </div>
      </div>
    </section>
  );
}
