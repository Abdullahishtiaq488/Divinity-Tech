import type { BlogPost, BlogCategory } from "@/types/blog"

export const blogCategories: BlogCategory[] = [
  { name: "All", count: 12, color: "blue" },
  { name: "Web Development", count: 5, color: "blue" },
  { name: "UI/UX Design", count: 3, color: "purple" },
  { name: "Digital Marketing", count: 2, color: "green" },
  { name: "Tech Trends", count: 2, color: "orange" },
]

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    slug: "future-web-development-trends-2024",
    excerpt:
      "Explore the cutting-edge technologies and methodologies that are shaping the future of web development, from AI integration to advanced frameworks.",
    content:
      "The web development landscape is evolving at an unprecedented pace. As we move through 2024, several key trends are emerging that will define how we build and interact with web applications.<br><br>AI-assisted development has become mainstream, with tools like GitHub Copilot now capable of generating entire components and suggesting optimizations in real-time. These AI pair programmers are reducing boilerplate work and helping developers focus on creative problem-solving.<br><br>WebAssembly continues to mature, enabling near-native performance for complex applications directly in the browser. We're seeing it used for everything from photo editing suites to CAD tools that previously required desktop software.<br><br>The adoption of edge computing is reducing latency globally, while new frameworks like Next.js and Remix are redefining full-stack development with their integrated approaches.",
    author: {
      name: "Sarah Johnson",
      avatar: "/professional-woman-developer.png",
      role: "Senior Full-Stack Developer",
    },
    category: "Web Development",
    tags: ["React", "Next.js", "AI", "Web3"],
    publishedAt: "2024-01-15",
    readTime: 8,
    image: "/modern-web-dev-workspace.png",
    featured: true,
  },
  {
    id: 2,
    title: "Creating Intuitive User Experiences: A Designer's Guide",
    slug: "creating-intuitive-user-experiences",
    excerpt:
      "Learn the fundamental principles of UX design and how to create interfaces that users love. From research to implementation, we cover it all.",
    content:
      "User experience design is more than just making things look pretty. It's about understanding your users, their needs, and creating solutions that feel natural and intuitive.<br><br>The best interfaces follow established mental models rather than reinventing interactions. When users can apply knowledge from other apps to yours immediately, you've reduced the learning curve significantly.<br><br>Consistency in navigation, terminology, and visual language reduces cognitive load and makes applications instantly familiar. Thoughtful microinteractions provide subtle feedback that guides users through workflows without overwhelming them.<br><br>Accessibility should be baked into the design process from the beginning, not treated as an afterthought. Good UX design works for everyone, regardless of ability or circumstance.",
    author: {
      name: "Michael Chen",
      avatar: "/professional-man-designer.png",
      role: "Lead UX Designer",
    },
    category: "UI/UX Design",
    tags: ["UX", "Design Systems", "User Research", "Prototyping"],
    publishedAt: "2024-01-12",
    readTime: 6,
    image: "/ux-design-wireframes.png",
    featured: true,
  },
  {
    id: 3,
    title: "Maximizing ROI with Strategic Digital Marketing",
    slug: "maximizing-roi-digital-marketing",
    excerpt:
      "Discover proven strategies to boost your digital marketing ROI. From SEO to social media, learn what works in today's competitive landscape.",
    content:
      "Digital marketing has become increasingly complex, but the fundamentals remain the same: understand your audience, deliver value, and measure everything.<br><br>The most successful campaigns today leverage first-party data to create personalized experiences at scale. Customers now expect brands to understand their preferences and needs across every touchpoint.<br><br>Content marketing has evolved beyond blog posts to include interactive tools, comprehensive guides, and authentic storytelling that builds trust. SEO now prioritizes user intent and experience signals over keyword density.<br><br>Paid media requires precise audience segmentation and continuous creative testing to remain cost-effective. The brands that win are those that can balance personalization with privacy concerns in today's regulatory environment.",
    author: {
      name: "Emily Rodriguez",
      avatar: "/professional-woman-marketer.png",
      role: "Digital Marketing Strategist",
    },
    category: "Digital Marketing",
    tags: ["SEO", "Social Media", "Analytics", "Conversion"],
    publishedAt: "2024-01-10",
    readTime: 5,
    image: "/digital-marketing-dashboard.png",
    featured: false,
  },
  {
    id: 4,
    title: "Building Scalable React Applications: Best Practices",
    slug: "building-scalable-react-applications",
    excerpt:
      "Learn how to structure and optimize React applications for scale. From component architecture to performance optimization techniques.",
    content:
      "As React applications grow in complexity, maintaining clean, scalable code becomes crucial. Component architecture should follow the principle of single responsibility, with clear separation between concerns.<br><br>State management deserves careful consideration—while Context API works for simple cases, larger applications often benefit from libraries like Redux or Zustand. The key is to choose the simplest solution that meets your current needs while allowing for future growth.<br><br>Performance optimization becomes critical at scale, requiring techniques like code splitting, memoization, and virtualization for large lists. TypeScript integration catches errors early and makes refactoring safer as your codebase evolves.<br><br>Testing should cover units, integration, and end-to-end scenarios to prevent regressions. Documentation and consistent coding standards enable teams to collaborate effectively as the application grows in size and complexity.",
    author: {
      name: "David Kim",
      avatar: "/professional-man-developer.png",
      role: "React Specialist",
    },
    category: "Web Development",
    tags: ["React", "Architecture", "Performance", "TypeScript"],
    publishedAt: "2024-01-08",
    readTime: 10,
    image: "/react-architecture-diagram.png",
    featured: false,
  },
  {
    id: 5,
    title: "The Psychology of Color in Web Design",
    slug: "psychology-color-web-design",
    excerpt:
      "Understand how color choices impact user behavior and brand perception. A comprehensive guide to using color effectively in digital design.",
    content:
      "Color is one of the most powerful tools in a designer's arsenal. It can evoke emotions, guide user attention, and reinforce brand identity in ways that users often don't consciously notice.<br><br>Different hues trigger distinct psychological responses—blue conveys trust and security (why so many banks use it), red creates urgency (perfect for clearance sales), while green suggests growth and health (common in organic brands). These associations influence everything from call-to-action buttons to overall brand perception.<br><br>Cultural context matters too, as color meanings vary across regions. White represents purity in Western cultures but signifies mourning in some Eastern cultures. Accessibility is crucial, requiring sufficient contrast between text and backgrounds for readability.<br><br>Modern interfaces often use color to establish visual hierarchy, with strategic highlights drawing users to important actions. The most effective color schemes align with brand personality while meeting functional requirements.",
    author: {
      name: "Lisa Thompson",
      avatar: "/professional-woman-designer.png",
      role: "Creative Director",
    },
    category: "UI/UX Design",
    tags: ["Color Theory", "Branding", "Psychology", "Visual Design"],
    publishedAt: "2024-01-05",
    readTime: 7,
    image: "/color-palette-design-theory.png",
    featured: false,
  },
  {
    id: 6,
    title: "AI and Machine Learning in Modern Web Apps",
    slug: "ai-machine-learning-web-apps",
    excerpt:
      "Explore how AI and ML are being integrated into web applications. From chatbots to personalization, see what's possible today.",
    content:
      "Artificial Intelligence and Machine Learning are no longer futuristic concepts—they're here, and they're transforming how we build web applications in practical, impactful ways.<br><br>Personalization engines powered by AI now tailor content and product recommendations to individual users in real-time, dramatically improving conversion rates. Natural language processing enables sophisticated chatbots that understand context and intent rather than just keyword matching.<br><br>Computer vision allows web apps to analyze and process images directly in the browser - think automatic background removal or product recognition. Sentiment analysis helps companies gauge customer satisfaction from support chats and reviews.<br><br>These technologies are becoming more accessible through cloud APIs that don't require deep ML expertise to implement. The most successful integrations enhance rather than replace human capabilities, creating more intuitive and helpful web experiences.",
    author: {
      name: "Alex Johnson",
      avatar: "/professional-ai-developer.png",
      role: "AI/ML Engineer",
    },
    category: "Tech Trends",
    tags: ["AI", "Machine Learning", "Automation", "Innovation"],
    publishedAt: "2024-01-03",
    readTime: 9,
    image: "/ai-ml-web-interface.png",
    featured: true,
  },
  {
    id: 7,
    title: "Optimizing Website Performance: A Complete Guide",
    slug: "optimizing-website-performance",
    excerpt:
      "Learn essential techniques to make your websites lightning fast. From image optimization to code splitting, boost your site's performance.",
    content:
      "Website performance directly impacts user experience, SEO rankings, and conversion rates. Even a one-second delay can significantly reduce user satisfaction and engagement.<br><br>Modern performance optimization starts with understanding the critical rendering path—how browsers parse HTML, CSS, and JavaScript to display pages. Optimizing this path means prioritizing above-the-fold content and deferring non-essential resources.<br><br>Image optimization remains crucial, with modern formats like WebP and AVIF offering superior compression. Lazy loading images and components ensures users only download what they actually need. Code splitting breaks large JavaScript bundles into smaller, more manageable chunks.<br><br>Caching strategies, CDN implementation, and HTTP/2 all contribute to faster delivery. Google's Core Web Vitals provide clear metrics to target: LCP for loading performance, FID for interactivity, and CLS for visual stability. Regular performance audits help catch regressions before they impact users.",
    author: {
      name: "Ryan Martinez",
      avatar: "/professional-performance-engineer.png",
      role: "Performance Engineer",
    },
    category: "Web Development",
    tags: ["Performance", "Optimization", "Core Web Vitals", "Speed"],
    publishedAt: "2024-01-01",
    readTime: 12,
    image: "/performance-optimization.png",
    featured: false,
  },
  {
    id: 8,
    title: "Content Marketing That Converts: Strategies That Work",
    slug: "content-marketing-strategies",
    excerpt:
      "Discover how to create content that not only engages your audience but also drives conversions and builds lasting relationships.",
    content:
      "Content marketing is about more than just creating blog posts. It's about understanding your audience's journey and providing value at every touchpoint, from initial awareness to final purchase decision.<br><br>The most effective content aligns with specific stages of the buyer's journey. Top-of-funnel content educates and builds trust, while bottom-of-funnel content removes final objections and encourages action. Interactive content like calculators and quizzes often outperforms static articles by actively engaging users.<br><br>SEO remains important but should serve user intent rather than chase algorithm updates. Long-form, comprehensive guides that truly answer user questions tend to rank well and generate quality leads over time.<br><br>Conversion-focused design elements like clear calls-to-action, testimonials, and risk-reducers should be integrated naturally into content. The best content marketers measure success not just by page views, but by how content contributes to pipeline and revenue.",
    author: {
      name: "Jessica Park",
      avatar: "/professional-woman-content-strategist.png",
      role: "Content Strategist",
    },
    category: "Digital Marketing",
    tags: ["Content Marketing", "Strategy", "Conversion", "Engagement"],
    publishedAt: "2023-12-28",
    readTime: 6,
    image: "/content-marketing-strategy.png",
    featured: false,
  },
  {
    id: 9,
    title: "Accessibility in Web Design: Building for Everyone",
    slug: "accessibility-web-design",
    excerpt:
      "Learn why accessibility matters and how to implement inclusive design practices that make your websites usable by everyone.",
    content:
      "Web accessibility isn't just about compliance—it's about creating inclusive experiences that work for all users, regardless of their abilities or circumstances. Accessible design benefits everyone, not just users with disabilities.<br><br>The Web Content Accessibility Guidelines (WCAG) provide a framework covering perceivability, operability, understandability, and robustness. Implementing semantic HTML is the foundation—proper heading structure, descriptive link text, and ARIA attributes when needed.<br><br>Keyboard navigation is essential for users who can't use a mouse, while sufficient color contrast helps users with visual impairments. Transcripts for audio content and captions for videos make multimedia accessible.<br><br>Accessibility testing should combine automated tools with manual checks and user testing. Many accessibility improvements also boost SEO and mobile usability. Building accessibility into the design process from the start is far easier than retrofitting it later.",
    author: {
      name: "Maria Garcia",
      avatar: "/accessibility-expert-woman.png",
      role: "Accessibility Specialist",
    },
    category: "UI/UX Design",
    tags: ["Accessibility", "Inclusive Design", "WCAG", "User Experience"],
    publishedAt: "2023-12-25",
    readTime: 8,
    image: "/web-accessibility-principles.png",
    featured: false,
  },
  {
    id: 10,
    title: "The Rise of Progressive Web Apps",
    slug: "rise-progressive-web-apps",
    excerpt:
      "Understand how PWAs are bridging the gap between web and mobile apps, offering native-like experiences through web technologies.",
    content:
      "Progressive Web Apps represent a significant evolution in web technology, combining the best features of web and native apps into a single, cohesive experience.<br><br>PWAs work offline thanks to service workers that cache resources intelligently. They can be installed on home screens without app store approval processes, and they update automatically like regular websites.<br><br>The app shell architecture provides instant loading by caching the basic UI framework. Push notifications keep users engaged even when they're not actively using the app. Web app manifests control how the app appears when installed.<br><br>Companies using PWAs have seen dramatic improvements—Twitter Lite saw a 65% increase in pages per session, while Pinterest increased user engagement by 60%. For many use cases, PWAs now provide a compelling alternative to native apps with easier maintenance and broader reach.",
    author: {
      name: "Tom Wilson",
      avatar: "/professional-pwa-developer.png",
      role: "Mobile Web Specialist",
    },
    category: "Tech Trends",
    tags: ["PWA", "Mobile", "Web Apps", "Performance"],
    publishedAt: "2023-12-22",
    readTime: 7,
    image: "/pwa-mobile-interface.png",
    featured: false,
  },
  {
    id: 11,
    title: "Advanced CSS Techniques for Modern Layouts",
    slug: "advanced-css-modern-layouts",
    excerpt:
      "Master modern CSS features like Grid, Flexbox, and Container Queries to create responsive, maintainable layouts.",
    content:
      "CSS has evolved tremendously in recent years, giving developers powerful tools to create sophisticated layouts with clean, semantic code. Modern CSS eliminates many of the hacks and workarounds we relied on in the past.<br><br>CSS Grid provides two-dimensional layout capabilities that were previously impossible without JavaScript. Features like named grid areas and gap properties make Grid both powerful and readable. Flexbox excels at one-dimensional layouts, handling alignment and distribution with ease.<br><br>Container queries represent the next evolution in responsive design, allowing components to adapt based on their container size rather than just the viewport. This is revolutionary for reusable component libraries.<br><br>CSS custom properties (variables) enable dynamic theming and more maintainable code. New viewport units and aspect ratio properties solve common responsive design challenges. These technologies combine to create layouts that work beautifully across devices without media query overload.",
    author: {
      name: "Sophie Chen",
      avatar: "/professional-woman-css-developer.png",
      role: "Frontend Architect",
    },
    category: "Web Development",
    tags: ["CSS", "Grid", "Flexbox", "Responsive Design"],
    publishedAt: "2023-12-20",
    readTime: 9,
    image: "/modern-css-grid-examples.png",
    featured: false,
  },
  {
    id: 12,
    title: "Building Trust Through Design: Security and UX",
    slug: "building-trust-design-security",
    excerpt:
      "Explore how design choices can communicate security and build user trust. From visual cues to interaction patterns.",
    content:
      "In an era of increasing digital threats, building user trust through design has become more important than ever. Security and UX must work together to create experiences that feel both safe and seamless.<br><br>Visual trust indicators like SSL badges, professional design aesthetics, and clear privacy policies signal security at a glance. Authentication flows should balance security requirements with usability—multi-factor authentication doesn't have to mean frustration.<br><br>Transparent data collection practices that explain why information is needed build confidence. Error messages should explain security-related issues in plain language without technical jargon.<br><br>Security elements should be visible without being intrusive, reassuring users without distracting from primary tasks. The most trusted digital products combine robust security with thoughtful design that communicates protection throughout the user experience. This creates environments where users feel comfortable completing sensitive actions.",
    author: {
      name: "James Anderson",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Security UX Designer",
    },
    category: "Web Development",
    tags: ["Security", "Trust", "UX", "Design Psychology"],
    publishedAt: "2023-12-18",
    readTime: 6,
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
]

export const featuredPosts = blogPosts.filter((post) => post.featured)
