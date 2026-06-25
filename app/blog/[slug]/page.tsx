import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticlePage from "@/components/blog/ArticlePage";
import ArticleStructuredData from "@/components/blog/ArticleStructuredData";
import { siteConfig } from "@/lib/seo";
import {
  getAllArticleSlugs,
  getArticleBySlug,
  getArticleUrl,
} from "@/lib/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Articol negăsit" };
  }

  const url = getArticleUrl(slug);

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: [...article.keywords, ...siteConfig.keywords.slice(0, 4)],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: article.metaTitle,
      description: article.metaDescription,
      publishedTime: article.publishedAt,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
      images: [siteConfig.ogImage],
    },
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <ArticleStructuredData article={article} />
      <ArticlePage article={article} />
    </>
  );
}