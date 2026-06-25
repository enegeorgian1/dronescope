import { siteConfig } from "@/lib/seo";
import { blogAuthor } from "@/lib/blog-author";
import { getArticleUrl, type BlogArticle } from "@/lib/blog";

interface ArticleStructuredDataProps {
  article: BlogArticle;
}

export default function ArticleStructuredData({ article }: ArticleStructuredDataProps) {
  const url = getArticleUrl(article.slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}/#article`,
    headline: article.title,
    description: article.metaDescription,
    url,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    inLanguage: siteConfig.language,
    author: {
      "@type": "Organization",
      name: blogAuthor.name,
      url: siteConfig.url,
      description: blogAuthor.bio,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/icon.svg`,
      },
    },
    image: article.images?.[0]?.src ?? siteConfig.ogImage,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    keywords: article.keywords.join(", "),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Acasă", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
      { "@type": "ListItem", position: 3, name: article.title, item: url },
    ],
  };

  const schemas: object[] = [articleSchema, breadcrumb];

  if (article.faqs && article.faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: article.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  if (article.howToSteps && article.howToSteps.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: `Cum obții o ofertă pentru ${article.title}`,
      description: article.metaDescription,
      step: article.howToSteps.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: step.name,
        text: step.text,
      })),
    });
  }

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