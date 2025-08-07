export interface ContactMethod {
  icon: string;
  label: string;
  value: string;
  href?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}
