"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, ExternalLink } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { testimonials } from "@/lib/testimonials";
import { siteConfig } from "@/lib/seo";

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
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 80 : -80,
      opacity: 0,
    }),
  };

  return (
    <section id="testimoniale" className="section bg-bg border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="uppercase tracking-[3px] text-xs text-accent mb-3">CE SPUN CLIENȚII</div>
            <SectionTitle>Încredere construită<br />proiect cu proiect.</SectionTitle>
          </div>
          <p className="max-w-sm text-text-secondary mt-4 md:mt-0">
            Peste 180 de clienți ne-au ales în ultimii 10 ani. Iată câteva dintre poveștile lor.
          </p>
        </div>

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
                    <div className="flex gap-1 mb-6">
                      {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>

                    <blockquote className="text-2xl md:text-[27px] leading-tight tracking-tight text-white mb-10">
                      „{currentTestimonial.quote}"
                    </blockquote>

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

          <div className="flex items-center justify-between mt-6 px-2">
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => goTo(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? "w-8 bg-accent" : "w-4 bg-white/20 hover:bg-white/40"}`}
                  aria-label={`Mergi la testimonialul ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={goToPrevious}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-accent hover:text-accent"
                aria-label="Testimonialul anterior"
              >
                <ChevronLeft className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={goToNext}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-accent hover:text-accent"
                aria-label="Testimonialul următor"
              >
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href={siteConfig.googleBusiness.reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition-colors"
          >
            Lasă o recenzie pe Google
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}