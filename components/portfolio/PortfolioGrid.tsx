"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import {
  projects,
  getProjectAlt,
  type Category,
} from "@/lib/portfolio";

const categories: ("Toate" | Category)[] = [
  "Toate",
  "Imobiliare",
  "Nunți",
  "Evenimente",
  "Industrial",
  "Reclame",
];

interface PortfolioGridProps {
  limit?: number;
  showFilters?: boolean;
}

export default function PortfolioGrid({ limit, showFilters = true }: PortfolioGridProps) {
  const [activeFilter, setActiveFilter] = useState<"Toate" | Category>("Toate");

  const source =
    activeFilter === "Toate"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const filteredProjects = limit ? source.slice(0, limit) : source;

  return (
    <>
      {showFilters && (
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
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredProjects.map((project) => (
          <Link
            key={project.id}
            href={`/portofoliu/${project.slug}`}
            className="group relative aspect-[16/10] overflow-hidden rounded-2xl block bg-surface-2 border border-white/10 transition-all duration-300 hover:border-white/30 hover:shadow-2xl"
          >
            <Image
              src={project.image}
              alt={getProjectAlt(project)}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              quality={65}
              loading="lazy"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.05] motion-reduce:transition-none"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/55 to-black/95 transition-opacity group-hover:via-black/45" />

            {project.videoUrl && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black/60 backdrop-blur-sm">
                  <div className="ml-1 h-0 w-0 border-y-[10px] border-l-[18px] border-y-transparent border-l-white" />
                </div>
              </div>
            )}

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
          </Link>
        ))}
      </div>

      <p className="text-center text-xs text-text-secondary mt-8">
        {filteredProjects.length} proiecte afișate
        {limit && projects.length > limit && (
          <>
            {" "}
            —{" "}
            <Link href="/portofoliu" className="link-accessible">
              vezi toate
            </Link>
          </>
        )}
      </p>
    </>
  );
}