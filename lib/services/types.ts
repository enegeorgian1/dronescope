export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceCategory {
  title: string;
  desc: string;
  deliverables: string[];
}

export interface ServicePage {
  slug: string;
  cardTitle: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  eyebrow: string;
  intro: string[];
  categories?: ServiceCategory[];
  benefits: { title: string; desc: string }[];
  includes: string[];
  useCases: string[];
  faqs: ServiceFAQ[];
  relatedSlugs: string[];
}