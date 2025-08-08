import { Service, ProcessStep, Testimonial } from "@/types/services";

export const services: Service[] = [
  {
    id: "web-development",
    icon: "Code",
    title: "Web Development",
    desc: "Custom websites, e-commerce, and web apps built for performance and scalability.",
    longDesc: "We create stunning, high-performance websites and web applications that drive results. From responsive design to complex e-commerce platforms, our development team delivers solutions that grow with your business.",
    includes: ["Responsive Design", "E-commerce", "Web Apps", "API Integration", "SEO Optimization"],
    features: ["React/Next.js", "Mobile-First Design", "Performance Optimization", "Security Best Practices", "Ongoing Support"],
    price: "$3,000+",
    duration: "4-8 weeks",
    portfolio: ["/modern-website-design.png", "/e-commerce-platform.png"],
    popular: true,
  },
  {
    id: "graphic-design",
    icon: "PenTool",
    title: "Graphic Design",
    desc: "Logos, branding, and marketing materials that make your business stand out.",
    longDesc: "Our creative team crafts compelling visual identities that resonate with your audience. From logo design to complete brand systems, we help you make a lasting impression.",
    includes: ["Logo Design", "Brand Identity", "Print Materials", "Social Graphics", "Packaging"],
    features: ["Brand Strategy", "Style Guides", "Print & Digital", "Unlimited Revisions", "Brand Guidelines"],
    price: "$1,500+",
    duration: "2-4 weeks",
    portfolio: ["/logo-design-portfolio.png", "/brand-identity-design.png"],
  },
  {
    id: "content-writing",
    icon: "FileText",
    title: "Content Writing",
    desc: "Website copy, blogs, and marketing content that engages and converts.",
    longDesc: "Compelling content that tells your story and drives action. Our writers create SEO-optimized content that engages your audience and converts visitors into customers.",
    includes: ["Website Copy", "Blog Posts", "Ad Copy", "Product Descriptions", "Editing & Proofreading"],
    features: ["SEO Optimization", "Brand Voice Development", "Content Strategy", "Performance Tracking", "Regular Updates"],
    price: "$800+",
    duration: "1-3 weeks",
    portfolio: ["/content-writing-samples.png", "/blog-post-examples.png"],
  },
  {
    id: "digital-marketing",
    icon: "BarChart2",
    title: "Digital Marketing",
    desc: "SEO, social media, and PPC advertising to grow your online presence.",
    longDesc: "Comprehensive digital marketing strategies that drive traffic, generate leads, and increase revenue. We use data-driven approaches to maximize your ROI.",
    includes: ["SEO", "Social Media", "PPC", "Email Marketing", "Analytics"],
    features: ["Campaign Management", "Performance Analytics", "A/B Testing", "Conversion Optimization", "Monthly Reports"],
    price: "$1,200+",
    duration: "Ongoing",
    portfolio: ["/digital-marketing-results.png", "/social-media-campaigns.png"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    icon: "Users",
    title: "Discovery",
    desc: "We understand your needs and goals.",
    details: "In-depth consultation to understand your business objectives, target audience, and project requirements."
  },
  {
    icon: "Lightbulb",
    title: "Strategy",
    desc: "We strategize and design a custom solution.",
    details: "Develop a comprehensive strategy and create detailed project plans tailored to your specific needs."
  },
  {
    icon: "Zap",
    title: "Execute",
    desc: "We develop and iterate with your feedback.",
    details: "Implement the solution with regular check-ins and iterations based on your feedback and requirements."
  },
  {
    icon: "Target",
    title: "Optimize",
    desc: "We launch, optimize, and support your success.",
    details: "Launch your project and provide ongoing optimization and support to ensure continued success."
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    position: "Marketing Director",
    company: "TechStart Inc.",
    text: "Devnity Tech transformed our online presence completely. Our website traffic increased by 300% and conversions doubled within the first quarter.",
    rating: 5,
    avatar: "/professional-woman-diverse.png",
    service: "Web Development"
  },
  {
    name: "Michael Chen",
    position: "CEO",
    company: "GrowthCorp",
    text: "The branding work they did for us was exceptional. Our new visual identity perfectly captures our company's vision and has helped us stand out in a crowded market.",
    rating: 5,
    avatar: "/professional-man.png",
    service: "Graphic Design"
  },
  {
    name: "Emily Rodriguez",
    position: "Founder",
    company: "EcoSolutions",
    text: "Their content strategy and writing have been game-changing for our SEO. We're now ranking on the first page for all our target keywords.",
    rating: 5,
    avatar: "/professional-woman-entrepreneur.png",
    service: "Content Writing"
  },
];
