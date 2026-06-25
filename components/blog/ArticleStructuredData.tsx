import { siteConfig } from "@/lib/seo";
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
      name: siteConfig.name,
      url: siteConfig.url,
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
    image: siteConfig.ogImage,
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
      {
        "@type": "ListItem",
        position: 1,
        name: "Acasă",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteConfig.url}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: url,
      },
    ],
  };

  const schemas = [articleSchema, breadcrumb];

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