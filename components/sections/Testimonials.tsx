"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  location: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Andrei Popescu",
    role: "Agent Imobiliar Senior",
    company: "Engel & Völkers Constanța",
    location: "Constanța",
    quote: "Colaborarea cu Drone Scope a schimbat complet modul în care prezentăm proprietățile premium. Imaginile aeriene au crescut rata de conversie cu peste 40%. Profesionalism de top.",
    rating: 5,
  },
  {
    id: 2,
    name: "Maria & Alexandru Ionescu",
    role: "Mirii",
    company: "Nuntă privată",
    location: "Mamaia",
    quote: "Filmarea cu dronă a fost momentul care a făcut diferența. Imaginile de la apus deasupra mării sunt pur și simplu de vis. Nu ne imaginam că nunta noastră va arăta atât de cinematografic.",
    rating: 5,
  },
  {
    id: 3,
    name: "Daniel Marin",
    role: "Director Tehnic",
    company: "DP World Constanța",
    location: "Portul Constanța",
    quote: "Aveam nevoie de documentare lunară de progres pe un șantier foarte mare. Drone Scope ne-a livrat imagini clare, consistente și la timp, de fiecare dată. Recomand cu încredere.",
    rating: 5,
  },
  {
    id: 4,
    name: "Ioana Radu",
    role: "Creative Director",
    company: "BrandVibe Agency",
    location: "București",
    quote: "Pentru campania JYSK am avut nevoie de conținut aerian de înaltă calitate în mai multe orașe. Echipa Drone Scope a fost extrem de profesionistă, rapidă și a livrat exact ce am cerut.",
    rating: 5,
  },
  {
    id: 5,
    name: "Cristian Dumitrescu",
    role: "Dezvoltator Imobiliar",
    company: "Prime Kapital",
    location: "Ovidiu",
    quote: "Am lucrat cu mai multe echipe de drone înainte. Drone Scope este clar deasupra. Imaginile au ajutat enorm la vânzarea apartamentelor din faza de pre-lansare. Calitate premium.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = (newIndex: number) => {
    const newDirection = newIndex > currentIndex ? 1 : -1;
    setDirection(newDirection);
    setCurrentIndex(newIndex);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    goTo(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    goTo(newIndex);
  };

  const currentTestimonial = testimonials[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 80 : -80,
      opacity: 0,
    }),
  };

  return (
    <section id="testimoniale" className="section bg-bg border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="uppercase tracking-[3px] text-xs text-accent mb-3">CE SPUN CLIENȚII</div>
            <h2 className="section-title">Încredere construită<br />proiect cu proiect.</h2>
          </div>
          <p className="max-w-sm text-text-secondary mt-4 md:mt-0">
            Peste 180 de clienți ne-au ales în ultimii 10 ani. Iată câteva dintre poveștile lor.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl bg-surface border border-white/10">
            <div className="relative min-h-[320px] md:min-h-[280px] flex items-center px-8 md:px-14 py-10">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="w-full"
                >
                  <div className="max-w-3xl">
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-2xl md:text-[27px] leading-tight tracking-tight text-white mb-10">
                      „{currentTestimonial.quote}”
                    </blockquote>

                    {/* Author */}
                    <div>
                      <div className="font-semibold text-lg text-white">
                        {currentTestimonial.name}
                      </div>
                      <div className="text-text-secondary mt-1 text-sm">
                        {currentTestimonial.role} — {currentTestimonial.company}
                      </div>
                      <div className="text-accent text-xs tracking-widest mt-1">
                        {currentTestimonial.location}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6 px-2">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? "w-8 bg-accent" : "w-4 bg-white/20 hover:bg-white/40"}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={goToPrevious}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-accent hover:text-accent"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={goToNext}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-accent hover:text-accent"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}