import {
  getProjectAlt,
  getProjectUrl,
  type Project,
} from "@/lib/portfolio";
import { siteConfig } from "@/lib/seo";

interface ProjectStructuredDataProps {
  project: Project;
}

export default function ProjectStructuredData({ project }: ProjectStructuredDataProps) {
  const url = getProjectUrl(project.slug);

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Acasă",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Portofoliu",
        item: `${siteConfig.url}/portofoliu`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: url,
      },
    ],
  };

  const creativeWork = project.videoUrl
    ? {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: project.title,
        description: project.description,
        thumbnailUrl: project.image,
        contentUrl: project.videoUrl,
        uploadDate: project.year ? `${project.year}-01-01` : undefined,
        contentLocation: {
          "@type": "Place",
          name: project.location,
        },
        author: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
        },
      }
    : {
        "@context": "https://schema.org",
        "@type": "ImageObject",
        name: project.title,
        description: project.description,
        contentUrl: project.image,
        caption: getProjectAlt(project),
        author: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
        },
      };

  const schemas = [breadcrumb, creativeWork];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}