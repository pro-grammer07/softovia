import { mark, title } from "framer-motion/client";
import { crm, 
    dashboards, 
    design, 
    integrations, 
    marketplace_icon, 
    saas_apps, 
    social_networks, 
    zapier_webhooks } from "../assets";


// **************************************** SERVICES *****************************************
  

export const services = [
  {
    id: 1,
    image: marketplace_icon,
    title: "Market Places",
    description: "Create and manage online marketplaces to connect buyers and sellers."


  },
  {
    id: 2,
    image: social_networks,
    title: "Social Networks",
    description: "Build and manage social networking platforms to connect users and facilitate communication."



  },
  {
    id: 3,
    image: saas_apps,
    title: "SaaS Apps",
    description: "Develop and deploy software applications as a service to provide on-demand solutions."



  },
  {
    id: 4,
    image: crm, 
    title: "CRM",
    description: "Manage customer interactions and data throughout the customer lifecycle, enhancing relationships and driving sales."


  },
  {
    id: 5,
    image: dashboards,
    title: "Dashboards",
    description: "Create interactive and shareable dashboards to visualize key metrics and insights."
  },
  {
    id: 6,
    image: design,
    title: "Design",
    description: "Craft visually appealing and user-friendly interfaces that enhance the user experience."
  },
  {
    id: 7,
    image: integrations,
    title: "Integrations",
    description: "Connect various applications and services to streamline workflows and improve efficiency."
  },
  {
    id: 8,
    image: zapier_webhooks,
    title: "Zapier and Webhooks",
    description: "Automate workflows by connecting your apps and services with Zapier webhooks."
  }
];





// **************************************** PLANS *****************************************
export const plansData = [
  {
    id: 1,
    title: "Starter Pack",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    price: 10,
    currency: "$",
    period: "Screen",
    subtitle: "Includes",
    features: [
      "Placeholder",
      "Placeholder", 
      "Placeholder",
      "Placeholder"
    ],
    buttonText: "Choose Plan",
    theme: {
      type: "light", // light, dark, or custom
      bgColor: "bg-white",
      textColor: "text-gray-900",
      descriptionColor: "text-gray-600",
      buttonBg: "bg-blue-600",
      buttonText: "text-white",
      buttonHover: "hover:bg-white",
      textHover: "hover:text-blue-600",
      borderHover: "hover:border-blue-600 hover:border-2",
      checkmarkBg: "bg-blue-200",
      checkmarkIcon: "text-blue-600",
      border: "border-gray-200"
    }
  },
  {
    id: 2,
    title: "Starter Pack",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    price: 10,
    currency: "$", 
    period: "Screen",
    featured: true,
    subtitle: "Everything in Starter Plus",
    features: [
      "Placeholder",
      "Placeholder",
      "Placeholder", 
      "Placeholder",
      "Placeholder"
    ],
    buttonText: "Choose Plan",
    theme: {
      type: "primary",
      bgColor: "bg-blue-600",
      textColor: "text-white",
      descriptionColor: "text-blue-100", 
      buttonBg: "bg-white",
      buttonText: "text-blue-600",
      buttonHover: "hover:bg-blue-600",
      textHover: "hover:text-white",
      borderHover: "hover:border-white hover:border-2",
      checkmarkBg: "bg-white",
      checkmarkIcon: "text-blue-600",
      border: "border-blue-400"
    }
  },
  {
    id: 3,
    title: "Starter Pack", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    price: 10,
    currency: "$",
    period: "Screen",
    subtitle: "Everything in Starter Plus",
    features: [
      "Placeholder",
      "Placeholder",
      "Placeholder",
      "Placeholder", 
      "Placeholder"
    ],
    buttonText: "Choose Plan",
    theme: {
      type: "light",
      bgColor: "bg-white", 
      textColor: "text-gray-900",
      descriptionColor: "text-gray-600",
      buttonBg: "bg-blue-600",
      buttonText: "text-white", 
      buttonHover: "hover:bg-white",
      textHover: "hover:text-blue-600",
      borderHover: "hover:border-blue-600 hover:border-2",
      checkmarkBg: "bg-blue-200",
      checkmarkIcon: "text-blue-600",
      border: "border-gray-200"
    }
  }
];

// Helper function to create custom themes
export const createCustomTheme = (colors) => ({
  type: "custom",
  bgColor: colors.bgColor || "bg-white",
  textColor: colors.textColor || "text-gray-900", 
  descriptionColor: colors.descriptionColor || "text-gray-600",
  buttonBg: colors.buttonBg || "bg-blue-500",
  buttonText: colors.buttonText || "text-white",
  buttonHover: colors.buttonHover || "hover:bg-blue-600", 
  checkmarkBg: colors.checkmarkBg || "bg-blue-100",
  checkmarkIcon: colors.checkmarkIcon || "text-blue-500",
  border: colors.border || "border-gray-200"
});

// Predefined theme presets
export const themePresets = {
  light: {
    type: "light",
    bgColor: "bg-white",
    textColor: "text-gray-900",
    descriptionColor: "text-gray-600", 
    buttonBg: "bg-blue-500",
    buttonText: "text-white",
    buttonHover: "hover:bg-blue-600",
    checkmarkBg: "bg-blue-100", 
    checkmarkIcon: "text-blue-500",
    border: "border-gray-200"
  },
  primary: {
    type: "primary",
    bgColor: "bg-blue-500",
    textColor: "text-white",
    descriptionColor: "text-blue-100",
    buttonBg: "bg-white", 
    buttonText: "text-blue-500",
    buttonHover: "hover:bg-gray-50",
    checkmarkBg: "bg-blue-400",
    checkmarkIcon: "text-white",
    border: "border-blue-400"
  },
  dark: {
    type: "dark", 
    bgColor: "bg-gray-900",
    textColor: "text-white",
    descriptionColor: "text-gray-300",
    buttonBg: "bg-blue-500",
    buttonText: "text-white",
    buttonHover: "hover:bg-blue-600",
    checkmarkBg: "bg-gray-700",
    checkmarkIcon: "text-blue-400", 
    border: "border-gray-700"
  },
  green: {
    type: "green",
    bgColor: "bg-green-500", 
    textColor: "text-white",
    descriptionColor: "text-green-100",
    buttonBg: "bg-white",
    buttonText: "text-green-500",
    buttonHover: "hover:bg-gray-50",
    checkmarkBg: "bg-green-400",
    checkmarkIcon: "text-white",
    border: "border-green-400"
  }
};


// **************************************** TEAM *****************************************


// footer.js data
export const footerData = {
  logo: {
    name: "SOFTOVIA"
  },
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  navigationLinks: [
    { name: "Home", href: "#home" },
    { name: "Our Work", href: "#work" },
    { name: "Our Team", href: "#team" },
    { name: "Contact Us", href: "#contact" }
  ],
  legalLinks: [
    { name: "Terms & Conditions", href: "#terms" },
    { name: "Privacy Policy", href: "#privacy" }
  ],
  copyright: "© 2023 Codifyz • All Rights Reserved"
};
