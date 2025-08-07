export interface Service {
  id: string;
  icon: string; // Changed from React.ReactNode to string
  title: string;
  desc: string;
  longDesc: string;
  includes: string[];
  price: string;
  duration: string;
  portfolio: string[];
  features: string[];
  popular?: boolean;
}

export interface ProcessStep {
  icon: string; // Changed from React.ReactNode to string
  title: string;
  desc: string;
  details: string;
}

export interface Testimonial {
  name: string;
  position: string;
  company: string;
  text: string;
  rating: number;
  avatar: string;
  service: string;
}
