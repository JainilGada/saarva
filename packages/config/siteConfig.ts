/**
 * Helper function to generate product URLs based on environment
 * In development, uses localhost with subdomain (e.g., fingenie.localhost:3000)
 * In production, uses the production domain (e.g., https://fingenie.saarva.xyz)
 */
export const getProductUrl = (subdomain: string): string => {
  // Check if we're in a browser environment (client-side)
  const isClient = typeof window !== "undefined";
  const isDevelopment = 
    (typeof process !== "undefined" && process.env.NODE_ENV === "development") ||
    (isClient && (window.location.hostname === "localhost" || window.location.hostname.includes("localhost")));
  
  const localPort = 
    (typeof process !== "undefined" && process.env.NEXT_PUBLIC_LOCAL_PORT) ||
    (isClient ? (window.location.port || "3000") : "3000");
  
  if (isDevelopment) {
    // Extract subdomain prefix (e.g., "fingenie" from "fingenie.saarva.xyz")
    const subdomainPrefix = subdomain.split(".")[0];
    return `http://${subdomainPrefix}.localhost:${localPort}`;
  }
  
  return `https://${subdomain}`;
};

export const siteConfig = {
  brand: "Saarva",
  assistant: "Effi",
  tagline: "AI copilots for every profession.",
  subtext: "Meet Effi — your personal AI assistant helping professionals work smarter.",
  
  vision: "To empower every professional with their own AI copilot.",
  mission: "To build AI copilots for every profession — practical, empathetic, and designed to give you time back.",
  missionDescription: "We believe AI should be human, accessible, and designed to give you time back. Every professional deserves a copilot that understands their domain, speaks their language, and helps them focus on what truly matters.",
  
  meetEffi: {
    greeting: "Hi, I'm Effi 👋 — your friendly AI copilot.",
    description: "I help professionals automate the repetitive and focus on what truly matters."
  },
  
  products: [
    {
      name: "FinGenie",
      description: "AI Copilot for Finance & CAs",
      subdomain: "fingenie.saarva.xyz"
    },
    {
      name: "MeetMind",
      description: "AI Copilot for Product Managers",
      subdomain: "meetmind.saarva.xyz"
    },
    {
      name: "CompliEase",
      description: "AI Copilot for Legal & Compliance",
      subdomain: "compliease.saarva.xyz"
    },
    {
      name: "HireEase",
      description: "AI Copilot for HR Teams",
      subdomain: "hireease.saarva.xyz"
    },
    {
      name: "Briefly",
      description: "AI Copilot for Founders & Executives",
      subdomain: "briefly.saarva.xyz"
    }
  ],
  
  waitlist: {
    headline: "Be the first to meet Effi.",
    subtext: "Get early access to Saarva's AI copilots.",
    submitEndpoint: process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT || "",
    fields: {
      name: "Name",
      email: "Email",
      profession: "Profession"
    }
  },
  
  footer: {
    text: "Built by Saarva • Powered by Effi",
    links: {
      privacy: "/privacy",
      terms: "/terms",
      contact: "/contact",
      linkedin: "https://linkedin.com/company/saarva"
    }
  },
  
  cta: {
    exploreCopilots: "Explore Copilots",
    joinWaitlist: "Join Waitlist",
    learnMore: "Learn More →"
  }
} as const;

