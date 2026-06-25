"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import {
  projects,
  categoryToServiceSlug,
  getProjectAlt,
  type Project,
  type Category,
} from "@/lib/portfolio";
import SectionTitle from "@/components/ui/SectionTitle";

const categories: ("Toate" | Category)[] = [
  "Toate",
  "Imobiliare",
  "Nunți",
  "Evenimente",
  "Industrial",
  "Reclame",
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<"Toate" | Category>("Toate");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredProjects =
    activeFilter === "Toate"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const openLightbox = (project: Project) => {
    const index = filteredProjects.findIndex((p) => p.id === project.id);
    setCurrentIndex(index);
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    document.body.style.overflow = "visible";
  };

  const goToProject = (direction: number) => {
    const newIndex = (currentIndex + direction + filteredProjects.length) % filteredProjects.length;
    setCurrentIndex(newIndex);
    setSelectedProject(filteredProjects[newIndex]);
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;

      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goToProject(1);
      if (e.key === "ArrowLeft") goToProject(-1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, currentIndex, filteredProjects.length]);

  return (
    <section id="portofoliu" className="section bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="uppercase tracking-[3px] text-xs text-accent mb-3">PORTFOLIO</div>
            <SectionTitle>Lucrări care vorbesc<br />de la sine.</SectionTitle>
          </div>
          <p className="max-w-sm text-text-secondary mt-4 md:mt-0">
            Portofoliu de filmări cu dronă din Constanța, Mamaia, litoral și proiecte naționale — imobiliare, nunți, evenimente, industrial și reclame.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              type="button"
              key={cat}
              onClick={() => setActiveFilter(cat)}
              aria-pressed={activeFilter === cat}
              className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.button
                type="button"
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 10 }}
                transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.3) }}
                onClick={() => openLightbox(project)}
                aria-label={`${project.videoUrl ? "Redă video" : "Vezi proiectul"}: ${project.title}, ${project.location}`}
                className="group relative aspect-[16/10] overflow-hidden rounded-2xl cursor-pointer bg-surface-2 border border-white/10 transition-all duration-300 hover:border-white/30 hover:shadow-2xl text-left w-full"
              >
                <Image
                  src={project.image}
                  alt={getProjectAlt(project)}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  quality={70}
                  loading="lazy"
                  className="object-cover transition-all duration-700 group-hover:scale-[1.08]"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/55 to-black/95 transition-opacity group-hover:via-black/45" />

                {/* Video play overlay */}
                {project.videoUrl && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black/60 backdrop-blur-sm transition group-hover:bg-black/75">
                      <div className="ml-1 h-0 w-0 border-y-[10px] border-l-[18px] border-y-transparent border-l-white" />
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="inline-block text-[10px] tracking-[2px] text-accent bg-black/50 px-3 py-0.5 rounded mb-3">
                    {project.category.toUpperCase()}
                    {project.videoUrl && " • VIDEO"}
                  </div>
                  <h3 className="text-[21px] font-semibold text-white leading-tight mb-2 pr-6 tracking-[-0.3px]">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-sm text-white/80">
                    <MapPin className="w-3.5 h-3.5 mr-1.5" aria-hidden="true" />
                    {project.location}
                  </div>
                </div>

                {/* Hover badge */}
                <div className="absolute top-5 right-5 px-4 py-1 rounded-full bg-black/60 text-white text-xs tracking-widest border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300" aria-hidden="true">
                  {project.videoUrl ? "REDA VIDEO" : "VEZI PROIECTUL"}
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        <p className="text-center text-xs text-text-secondary mt-8">
          Click pe orice imagine pentru a deschide galeria completă • {filteredProjects.length} proiecte afișate
        </p>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
         {selectedProject && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Galerie: ${selectedProject.title}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8 lightbox"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.25, ease: [0.21, 0.92, 0.25, 1] }}
              className="relative w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute -top-12 right-0 md:right-0 text-white/70 hover:text-white transition z-50"
                aria-label="Închide galeria"
              >
                <X size={28} aria-hidden="true" />
              </button>

              {/* Main Media (Image or Video) */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video md:aspect-[16/9]">
                {selectedProject.videoUrl ? (
                  <video
                    key={selectedProject.id}
                    src={selectedProject.videoUrl}
                    controls
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    aria-label={`Video: ${selectedProject.title}`}
                  />
                ) : (
                  <Image
                    key={selectedProject.id}
                    src={selectedProject.image}
                    alt={getProjectAlt(selectedProject)}
                    fill
                    sizes="(max-width: 768px) 100vw, 1152px"
                    className="object-cover"
                  />
                )}

                {/* Navigation Arrows */}
                {filteredProjects.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => goToProject(-1)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition"
                      aria-label="Proiectul anterior"
                    >
                      <ChevronLeft size={24} aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={() => goToProject(1)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition"
                      aria-label="Proiectul următor"
                    >
                      <ChevronRight size={24} aria-hidden="true" />
                    </button>
                  </>
                )}
              </div>

              {/* Details */}
              <div className="mt-6 grid md:grid-cols-2 gap-x-12 text-white">
                <div>
                  <div className="text-accent text-xs tracking-[2px] mb-1">
                    {selectedProject.category.toUpperCase()}
                  </div>
                  <h3 className="text-3xl font-semibold tracking-tight mb-2">
                    {selectedProject.title}
                  </h3>
                  <div className="flex items-center text-white/70 text-sm mb-6">
                    <MapPin className="w-4 h-4 mr-1.5" />
                    {selectedProject.location}
                    {selectedProject.year && ` • ${selectedProject.year}`}
                  </div>
                </div>

                <div>
                  <p className="text-white/80 leading-relaxed mb-4">
                    {selectedProject.description}
                  </p>
                  {selectedProject.client && (
                    <div className="text-sm mb-4">
                      <span className="text-white/50">Client: </span>
                      <span className="text-white">{selectedProject.client}</span>
                    </div>
                  )}
                  <Link
                    href={`/servicii/${categoryToServiceSlug[selectedProject.category]}`}
                    className="inline-flex text-sm text-accent hover:text-accent-light transition-colors"
                  >
                    Vezi serviciul {selectedProject.category} →
                  </Link>
                </div>
              </div>

              {/* Counter */}
              <div className="text-center mt-8 text-xs text-white/40 tracking-widest">
                {currentIndex + 1} / {filteredProjects.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
