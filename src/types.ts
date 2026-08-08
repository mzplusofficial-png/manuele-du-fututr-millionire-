export interface BookCoverConfig {
  imageUrl: string;
  title: string;
  subtitle: string;
  author: string;
  edition: string;
  goldShineIntensity: number; // 0 to 1
  embossingDepth: number; // 0 to 10
}

export interface Chapter {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  keyTakeaways: string[];
  readTime: string;
  excerpt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  avatarUrl: string;
  content: string;
  rating: number;
  tag: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface EcosystemFeature {
  icon: string;
  title: string;
  valueTag: string;
  description: string;
  highlight: string;
}
