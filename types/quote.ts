export interface Service {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  icon: string;
  features: string[];
  popular?: boolean;
}

export interface Timeline {
  id: string;
  label: string;
  description: string;
  value: string;
}

export interface BudgetRange {
  min: number;
  max: number;
  label: string;
  description: string;
}

export interface ContactInfo {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message?: string;
}

export interface QuoteData {
  services: string[];
  budget: number;
  timeline: string;
  contactInfo: ContactInfo;
  estimatedPrice: number;
}

export interface StepData {
  id: number;
  title: string;
  description: string;
  icon: string;
}
