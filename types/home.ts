export interface Service {

  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  color: string;
  price: string;
  duration: string;
  features: string[];
  includes: string[];
  benefits: string[];
  portfolio: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  image: string;
  category: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  position: string;
  text: string;
  rating: number;
  avatar: string;
}

export interface Client {
  id: string;
  name: string;
  logo: string;
  website?: string;
}

export interface TrustIndicator {
  id: string;
  icon: string;
  title: string;
  description: string;
  value: string;
}
