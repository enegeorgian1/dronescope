import { hasGoogleBusiness, siteConfig } from "@/lib/seo";
import { faqs } from "@/lib/faq";
import { servicePages, getServiceUrl } from "@/lib/services";
import { getAggregateRating, testimonials } from "@/lib/testimonials";

export default function StructuredData() {
  const { ratingValue, reviewCount, bestRating } = getAggregateRating();

  const sameAs = [
    siteConfig.social.whatsapp,
    siteConfig.social.instagram,
    siteConfig.social.facebook,
    ...(hasGoogleBusiness() ? [siteConfig.googleBusiness.mapsUrl] : []),
  ].filter(Boolean);

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: siteConfig.ogImage,
    logo: `${siteConfig.url}/icon.svg`,
    priceRange: "$$",
    currenciesAccepted: "RON",
    paymentAccepted: "Cash, Bank Transfer",
    areaServed: [
      ...siteConfig.serviceAreas.map((area) => ({
        "@type": "City" as const,
        name: area,
      })),
      { "@type": "AdministrativeArea", name: "Constanța" },
      { "@type": "Country", name: "România" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue,
      reviewCount,
      bestRating,
      worstRating: 1,
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating,
      },
      reviewBody: t.quote,
      publisher: { "@type": "Organization", name: t.company },
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicii filmări aeriene",
      itemListElement: servicePages.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        url: getServiceUrl(service.slug),
        itemOffered: {
          "@type": "Service",
          name: service.title,
          url: getServiceUrl(service.slug),
          description: service.metaDescription,
          provider: { "@id": `${siteConfig.url}/#organization` },
        },
      })),
    },
    sameAs,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "14:00",
      },
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.shortDescription,
    inLanguage: siteConfig.language,
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
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
    ],
  };

  const schemas = [localBusiness, website, faqPage, breadcrumb];

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