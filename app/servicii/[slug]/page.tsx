import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/services/ServicePage";
import ServiceStructuredData from "@/components/services/ServiceStructuredData";
import { siteConfig } from "@/lib/seo";
import {
  getAllServiceSlugs,
  getServiceBySlug,
  getServiceUrl,
} from "@/lib/services";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Serviciu negăsit" };
  }

  const url = getServiceUrl(slug);

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: [...service.keywords, ...siteConfig.keywords.slice(0, 6)],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: service.metaTitle,
      description: service.metaDescription,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${service.title} — Drone Scope`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [siteConfig.ogImage],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceStructuredData service={service} />
      <ServicePage service={service} />
    </>
  );
}