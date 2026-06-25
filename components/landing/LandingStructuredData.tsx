import { siteConfig } from "@/lib/seo";
import { getLandingUrl, type LandingPage } from "@/lib/landing-pages";

interface LandingStructuredDataProps {
  landing: LandingPage;
}

export default function LandingStructuredData({ landing }: LandingStructuredDataProps) {
  const url = getLandingUrl(landing.slug);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}/#service`,
    name: landing.title,
    description: landing.metaDescription,
    url,
    provider: {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      telephone: siteConfig.phone,
      email: siteConfig.email,
    },
    areaServed: {
      "@type": "City",
      name: landing.city,
    },
    serviceType: landing.title,
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
        name: landing.title,
        item: url,
      },
    ],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: landing.faqs.map((faq) => ({
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