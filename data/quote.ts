import { Service, Timeline, BudgetRange, StepData } from "@/types/quote";

export const services: Service[] = [
  {
    id: "web-development",
    name: "Web Development",
    description: "Custom websites, e-commerce platforms, and web applications built for performance and scalability.",
    basePrice: 3000,
    icon: "code",
    features: ["Responsive Design", "Custom Development", "CMS Integration", "Performance Optimization"],
    popular: true
  },
  {
    id: "graphic-design",
    name: "Graphic Design",
    description: "Creative visual solutions including logos, branding, and marketing materials.",
    basePrice: 1500,
    icon: "palette",
    features: ["Logo Design", "Brand Identity", "Marketing Materials", "Print Design"]
  },
  {
    id: "content-writing",
    name: "Content Writing",
    description: "Compelling website copy, blog content, and marketing materials that engage your audience.",
    basePrice: 800,
    icon: "file-text",
    features: ["Website Copy", "Blog Writing", "SEO Content", "Marketing Copy"]
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    description: "Comprehensive digital marketing strategies to grow your online presence.",
    basePrice: 1200,
    icon: "trending-up",
    features: ["SEO Optimization", "Social Media", "PPC Advertising", "Analytics"]
  }
];

export const timelines: Timeline[] = [
  {
    id: "rush",
    label: "Rush (2-4 weeks)",
    description: "Fast-track delivery with priority support",
    value: "2-4 weeks"
  },
  {
    id: "standard",
    label: "Standard (1-2 months)",
    description: "Balanced timeline with thorough development",
    value: "1-2 months"
  },
  {
    id: "extended",
    label: "Extended (2-3 months)",
    description: "Comprehensive development with extensive testing",
    value: "2-3 months"
  },
  {
    id: "flexible",
    label: "Flexible Timeline",
    description: "Work at your preferred pace",
    value: "Flexible"
  }
];

export const budgetRanges: BudgetRange[] = [
  { min: 1000, max: 4999, label: "Starter", description: "Perfect for small projects" },
  { min: 5000, max: 9999, label: "Professional", description: "Ideal for growing businesses" },
  { min: 10000, max: 19999, label: "Enterprise", description: "Comprehensive solutions" },
  { min: 20000, max: 50000, label: "Custom", description: "Large-scale projects" }
];

export const steps: StepData[] = [
  {
    id: 0,
    title: "Services",
    description: "Choose your services",
    icon: "clipboard-list"
  },
  {
    id: 1,
    title: "Budget",
    description: "Set your budget",
    icon: "dollar-sign"
  },
  {
    id: 2,
    title: "Timeline",
    description: "Select timeline",
    icon: "calendar"
  },
  {
    id: 3,
    title: "Contact",
    description: "Your information",
    icon: "user"
  },
  {
    id: 4,
    title: "Summary",
    description: "Review & submit",
    icon: "check-circle"
  }
];
