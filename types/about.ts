export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
  twitter?: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Statistic {
  id: string;
  label: string;
  value: string;
  description: string;
  icon: string;
}

export interface CompanyInfo {
  founded: string;
  mission: string;
  vision: string;
  story: string;
  values: string[];
}
