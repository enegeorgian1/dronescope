export interface LandingFAQ {
  question: string;
  answer: string;
}

export interface LandingPage {
  slug: string;
  path: string;
  city: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  eyebrow: string;
  intro: string[];
  sections: { title: string; paragraphs: string[] }[];
  benefits: { title: string; desc: string }[];
  localAreas: string[];
  relatedServiceSlugs: string[];
  relatedBlogSlugs: string[];
  featuredProjectIds: number[];
  faqs: LandingFAQ[];
}