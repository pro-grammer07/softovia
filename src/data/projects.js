// index.js - Projects data
export const projectsData = [
  {
    id: 1,
    title: "Website Development Service for Media Production Company",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    image: "/images/marketplace-project.jpg", // Replace with your actual image path
    demoUrl: "https://demo1.example.com",
    category: "Web Development",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    client: "RapidCore Media",
    duration: "3 months",
    year: "2024",
    detailedDescription: `
      This comprehensive web development project involved creating a full-stack solution for a media production company. 
      The platform enables seamless content management, client collaboration, and project tracking.
      
      Key features implemented:
      • Custom content management system
      • Client portal for project updates
      • Real-time collaboration tools
      • Responsive design across all devices
      • Advanced search and filtering capabilities
      
      The project successfully increased client engagement by 40% and reduced project management overhead by 60%.
    `,
    challenges: [
      "Complex media file management and processing",
      "Real-time collaboration between multiple stakeholders", 
      "Scalable architecture to handle growing client base",
      "Integration with existing production workflows"
    ],
    results: [
      "40% increase in client engagement",
      "60% reduction in project management overhead",
      "50% faster project delivery times",
      "Improved client satisfaction scores"
    ],
    gallery: [
      "/images/project1-1.jpg",
      "/images/project1-2.jpg", 
      "/images/project1-3.jpg"
    ]
  },
  {
    id: 2,
    title: "SaaS Platform for Digital Marketing Automation",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    image: "/images/saas-project.jpg",
    demoUrl: "https://demo2.example.com",
    category: "SaaS Development",
    technologies: ["Vue.js", "Python", "PostgreSQL", "AWS"],
    client: "MarketBoost Pro",
    duration: "4 months", 
    year: "2024",
    detailedDescription: `
      A comprehensive SaaS solution designed to automate digital marketing workflows for small to medium businesses.
      The platform provides intelligent campaign management, analytics, and customer engagement tools.
      
      Core functionalities:
      • Automated email marketing campaigns
      • Social media scheduling and analytics
      • Customer segmentation and targeting
      • ROI tracking and reporting dashboard
      • Integration with popular CRM systems
      
      The platform now serves over 500+ businesses and processes millions of marketing interactions monthly.
    `,
    challenges: [
      "Building scalable multi-tenant architecture",
      "Implementing real-time analytics processing",
      "Creating intuitive user experience for non-technical users",
      "Ensuring data security and compliance"
    ],
    results: [
      "500+ active business users",
      "95% customer retention rate", 
      "3x faster campaign setup time",
      "Average 25% increase in client ROI"
    ],
    gallery: [
      "/images/project2-1.jpg",
      "/images/project2-2.jpg",
      "/images/project2-3.jpg"
    ]
  },
  {
    id: 3,
    title: "E-commerce Platform for Fashion Retailer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    image: "/images/ecommerce-project.jpg",
    demoUrl: "https://demo3.example.com", 
    category: "E-commerce",
    technologies: ["Next.js", "Shopify Plus", "Stripe", "Contentful"],
    client: "StyleHub Fashion",
    duration: "5 months",
    year: "2023",
    detailedDescription: `
      A modern, high-performance e-commerce platform built for a leading fashion retailer. 
      The solution focuses on providing exceptional user experience while handling high traffic volumes.
      
      Platform features:
      • Advanced product filtering and search
      • Personalized product recommendations
      • Mobile-first responsive design
      • Multi-currency and multi-language support
      • Integrated inventory management
      • Social commerce integration
      
      The platform achieved a 200% increase in online sales within the first quarter of launch.
    `,
    challenges: [
      "Handling high traffic during flash sales",
      "Complex inventory management across multiple channels",
      "Personalization algorithms for product recommendations", 
      "Payment gateway integration for global markets"
    ],
    results: [
      "200% increase in online sales",
      "45% improvement in conversion rate",
      "60% reduction in cart abandonment", 
      "Enhanced mobile user experience"
    ],
    gallery: [
      "/images/project3-1.jpg",
      "/images/project3-2.jpg",
      "/images/project3-3.jpg"
    ]
  }
];

export default projectsData;