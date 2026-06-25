import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectPageView from "@/components/portfolio/ProjectPageView";
import ProjectStructuredData from "@/components/portfolio/ProjectStructuredData";
import {
  getAllProjectSlugs,
  getProjectAlt,
  getProjectBySlug,
  getProjectUrl,
} from "@/lib/portfolio";
import { siteConfig } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Proiect negăsit" };
  }

  const url = getProjectUrl(slug);
  const title = `${project.title} — Filmare Dronă ${project.location}`;
  const description = `${project.description} Proiect ${project.category} realizat de Drone Scope.`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: getProjectAlt(project),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [project.image],
    },
    keywords: [
      `filmare dronă ${project.location}`,
      `filmări ${project.category.toLowerCase()} dronă`,
      ...siteConfig.keywords.slice(0, 4),
    ],
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectStructuredData project={project} />
      <ProjectPageView project={project} />
    </>
  );
}