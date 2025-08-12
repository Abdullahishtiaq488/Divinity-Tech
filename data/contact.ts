import { ContactMethod, FAQ } from "@/types/contact";

export const contactMethods: ContactMethod[] = [
  {
    icon: "Mail",
    label: "Email Us",
    value: "hello@devnitytech.com",
    href: "mailto:hello@devnitytech.com"
  },
  {
    icon: "Phone",
    label: "Call Us",
    value: "+1 (410) 756-0672",
    href: "tel:+14107560672"
  },
  {
    icon: "MapPin",
    label: "Visit Us",
    value: "124 Emma Circle Harrisburg, PA 17112",
    href: "https://maps.google.com"
  },
  {
    icon: "Clock",
    label: "Business Hours",
    value: "Mon-Fri: 9am - 6pm EST"
  }
];

export const serviceOptions = [
  "Web Development",
  "Graphic Design", 
  "Content Writing",
  "Digital Marketing",
  "SEO Services",
  "Brand Strategy",
  "Other"
];

export const faqs: FAQ[] = [
  {
    question: "How soon will I get a response?",
    answer: "We respond to all inquiries within 1 business day, often within a few hours during business hours."
  },
  {
    question: "What is your project minimum?",
    answer: "Our typical project minimum is $1,000, but we offer flexible packages and payment plans for startups and small businesses."
  },
  {
    question: "Do you work with startups?",
    answer: "We love helping startups grow and scale. We offer special packages and flexible terms for early-stage companies."
  },
  {
    question: "Can I request a custom service?",
    answer: "Yes, we tailor our solutions to your unique needs. If you don't see what you're looking for, just ask!"
  },
  {
    question: "Is my data safe with you?",
    answer: "We follow strict privacy and security protocols for all client data. Your information is never shared with third parties."
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes, we provide comprehensive maintenance and support packages to ensure your project continues to perform optimally."
  },
  {
    question: "What's your typical project timeline?",
    answer: "Project timelines vary based on scope, but most projects are completed within 4-12 weeks. We'll provide a detailed timeline during consultation."
  },
  {
    question: "Do you offer free consultations?",
    answer: "Yes! We offer free 30-minute consultations to discuss your project needs and how we can help achieve your goals."
  }
];

export const officeHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM EST" },
  { day: "Saturday", hours: "10:00 AM - 2:00 PM EST" },
  { day: "Sunday", hours: "Closed" }
];
