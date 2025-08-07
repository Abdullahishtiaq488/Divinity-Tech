import { TeamMember, ProcessStep, Statistic, CompanyInfo } from "@/types/about";

export const companyInfo: CompanyInfo = {
  founded: "2017",
  mission: "To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting impact in the digital landscape.",
  vision: "To be the leading digital transformation partner, recognized for our creativity, technical excellence, and commitment to client success.",
  story: "Founded in 2017, Divinity Tech began as a small creative studio with a big vision. What started as a passion project between friends has evolved into a full-service digital agency trusted by clients worldwide. Our journey has been marked by continuous learning, adaptation, and an unwavering commitment to excellence. Today, we're proud to be at the forefront of digital innovation, helping businesses navigate the ever-changing digital landscape with confidence and success.",
  values: [
    "Innovation & Creativity",
    "Client-Centric Approach", 
    "Quality & Excellence",
    "Transparency & Trust",
    "Continuous Learning",
    "Collaborative Partnership"
  ]
};

export const teamMembers: TeamMember[] = [
  {
    id: "ava-carter",
    name: "Ava Carter",
    role: "CEO & Founder",
    image: "/team1.png",
    bio: "Visionary leader with 15+ years in digital innovation and business strategy. Passionate about building teams that create exceptional digital experiences.",
    linkedin: "#",
    twitter: "#"
  },
  {
    id: "liam-patel",
    name: "Liam Patel", 
    role: "Lead Developer",
    image: "/team2.png",
    bio: "Full-stack expert specializing in scalable web solutions and modern frameworks. Loves solving complex technical challenges.",
    linkedin: "#",
    twitter: "#"
  },
  {
    id: "sophia-kim",
    name: "Sophia Kim",
    role: "Creative Director", 
    image: "/team3.png",
    bio: "Award-winning designer with a keen eye for aesthetics and user experience. Transforms ideas into stunning visual narratives.",
    linkedin: "#",
    twitter: "#"
  },
  {
    id: "noah-smith",
    name: "Noah Smith",
    role: "Marketing Strategist",
    image: "/team4.png", 
    bio: "Growth hacker specializing in digital campaigns, SEO, and data-driven marketing strategies that deliver measurable results.",
    linkedin: "#",
    twitter: "#"
  },
  {
    id: "mia-chen",
    name: "Mia Chen",
    role: "Content Lead",
    image: "/team5.png",
    bio: "Master storyteller and copywriter with expertise in creating compelling content that engages and converts audiences.",
    linkedin: "#",
    twitter: "#"
  },
  {
    id: "ethan-brown", 
    name: "Ethan Brown",
    role: "UI/UX Designer",
    image: "/team6.png",
    bio: "User advocate focused on creating intuitive, accessible, and beautiful interfaces that users love to interact with.",
    linkedin: "#",
    twitter: "#"
  }
];

export const processSteps: ProcessStep[] = [
  {
    id: "discover",
    title: "Discover",
    description: "We dive deep into understanding your business, goals, target audience, and market landscape to create a solid foundation.",
    icon: "search",
    color: "blue"
  },
  {
    id: "design", 
    title: "Design",
    description: "Our creative team crafts beautiful, functional designs that align with your brand and resonate with your audience.",
    icon: "palette",
    color: "purple"
  },
  {
    id: "develop",
    title: "Develop", 
    description: "We build robust, scalable solutions using cutting-edge technologies and best practices for optimal performance.",
    icon: "code",
    color: "green"
  },
  {
    id: "deliver",
    title: "Deliver",
    description: "We launch your project with comprehensive testing, provide ongoing support, and help you achieve continuous growth.",
    icon: "rocket",
    color: "orange"
  }
];

export const statistics: Statistic[] = [
  {
    id: "projects",
    label: "Projects Completed",
    value: "250+",
    description: "Successful projects delivered across various industries",
    icon: "briefcase"
  },
  {
    id: "clients",
    label: "Happy Clients", 
    value: "120+",
    description: "Businesses we've helped transform digitally",
    icon: "users"
  },
  {
    id: "experience",
    label: "Years Experience",
    value: "7+", 
    description: "Years of expertise in digital innovation",
    icon: "calendar"
  },
  {
    id: "awards",
    label: "Industry Awards",
    value: "15",
    description: "Recognition for excellence in design and development",
    icon: "award"
  }
];
