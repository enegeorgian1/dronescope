import { siteConfig } from "@/lib/seo";
import { getServiceUrl, type ServicePage } from "@/lib/services";

interface ServiceStructuredDataProps {
  service: ServicePage;
}

export default function ServiceStructuredData({ service }: ServiceStructuredDataProps) {
  const url = getServiceUrl(service.slug);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}/#service`,
    name: service.title,
    description: service.metaDescription,
    url,
    provider: {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      telephone: siteConfig.phone,
      email: siteConfig.email,
    },
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    serviceType: service.title,
  };

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
        name: "Servicii",
        item: `${siteConfig.url}/servicii`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: url,
      },
    ],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const schemas = [serviceSchema, breadcrumb, faqPage];

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