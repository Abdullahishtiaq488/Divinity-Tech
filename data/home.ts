import { Service, PortfolioItem, Testimonial, Client, TrustIndicator } from "@/types/home";

export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Custom websites, e-commerce platforms, and web applications built for performance, scalability, and user experience.",
    icon: "code",
    color: "blue",
    features: ["Responsive Design", "E-commerce Solutions", "Custom Web Apps", "Performance Optimization"]
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    description: "Creative visual solutions including logos, branding, and marketing materials that make your business stand out.",
    icon: "palette",
    color: "purple",
    features: ["Logo Design", "Brand Identity", "Marketing Materials", "UI/UX Design"]
  },
  {
    id: "content-writing",
    title: "Content Writing",
    description: "Compelling website copy, engaging blog content, and marketing materials that connect with your audience.",
    icon: "file-text",
    color: "green",
    features: ["Website Copy", "Blog Writing", "SEO Content", "Marketing Copy"]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies including SEO, social media, and PPC advertising to grow your online presence.",
    icon: "bar-chart",
    color: "orange",
    features: ["SEO Optimization", "Social Media", "PPC Advertising", "Analytics & Reporting"]
  }
];

export const portfolioPreview: PortfolioItem[] = [
  {
    id: "ecommerce-redesign",
    title: "E-Commerce Redesign",
    image: "/portfolio1.png",
    category: "Web Development",
    description: "Complete redesign of an e-commerce platform resulting in 40% increase in sales"
  },
  {
    id: "brand-identity",
    title: "Brand Identity",
    image: "/portfolio2.png", 
    category: "Graphic Design",
    description: "Comprehensive brand identity design for a fintech startup"
  },
  {
    id: "seo-campaign",
    title: "SEO Campaign",
    image: "/portfolio3.png",
    category: "Digital Marketing", 
    description: "SEO strategy that improved organic traffic by 300%"
  },
  {
    id: "corporate-blog",
    title: "Corporate Blog",
    image: "/portfolio4.png",
    category: "Content Writing",
    description: "Content strategy and blog development for B2B company"
  },
  {
    id: "mobile-app-ui",
    title: "Mobile App UI",
    image: "/portfolio5.png",
    category: "Graphic Design",
    description: "User interface design for a productivity mobile application"
  },
  {
    id: "social-media-launch",
    title: "Social Media Launch",
    image: "/portfolio6.png",
    category: "Digital Marketing",
    description: "Social media strategy and launch for consumer brand"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "emily-r",
    name: "Emily Rodriguez",
    company: "RetailCo",
    position: "Marketing Director",
    text: "Divinity Tech delivered a stunning e-commerce site that boosted our sales by 40%. Their attention to detail and professional approach exceeded our expectations.",
    rating: 5,
    avatar: "/testimonial1.png"
  },
  {
    id: "james-l", 
    name: "James Liu",
    company: "FinStart",
    position: "CEO & Founder",
    text: "Their branding work set us apart in a crowded market. The team is professional, creative, and incredibly reliable. Highly recommend their services.",
    rating: 5,
    avatar: "/testimonial2.png"
  },
  {
    id: "sara-m",
    name: "Sara Mitchell",
    company: "SaaSify",
    position: "Head of Growth",
    text: "Our SEO rankings soared thanks to their marketing expertise. The results speak for themselves - 300% increase in organic traffic in just 6 months.",
    rating: 5,
    avatar: "/testimonial3.png"
  }
];

export const clients: Client[] = [
  { id: "retailco", name: "RetailCo", logo: "/client1.png", website: "https://retailco.com" },
  { id: "finstart", name: "FinStart", logo: "/client2.png", website: "https://finstart.com" },
  { id: "saasify", name: "SaaSify", logo: "/client3.png", website: "https://saasify.com" },
  { id: "bankly", name: "Bankly", logo: "/client4.png", website: "https://bankly.com" },
  { id: "mediax", name: "MediaX", logo: "/client5.png", website: "https://mediax.com" },
  { id: "glowup", name: "GlowUp", logo: "/client6.png", website: "https://glowup.com" }
];

export const trustIndicators: TrustIndicator[] = [
  {
    id: "satisfaction",
    icon: "shield-check",
    title: "100% Satisfaction Guarantee",
    description: "We stand behind our work with a complete satisfaction guarantee",
    value: "100%"
  },
  {
    id: "clients",
    icon: "users",
    title: "Happy Clients Worldwide",
    description: "Trusted by businesses across various industries",
    value: "120+"
  },
  {
    id: "awards",
    icon: "sparkles", 
    title: "Award-Winning Agency",
    description: "Recognized for excellence in digital innovation",
    value: "15"
  },
  {
    id: "experience",
    icon: "calendar",
    title: "Years of Experience",
    description: "Proven track record in digital transformation",
    value: "7+"
  }
];
