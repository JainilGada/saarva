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
      url: "https://fingenie.saarva.xyz",
      subdomain: "fingenie.saarva.xyz"
    },
    {
      name: "MeetMind",
      description: "AI Copilot for Product Managers",
      url: "https://meetmind.saarva.xyz",
      subdomain: "meetmind.saarva.xyz"
    },
    {
      name: "CompliEase",
      description: "AI Copilot for Legal & Compliance",
      url: "https://compliease.saarva.xyz",
      subdomain: "compliease.saarva.xyz"
    },
    {
      name: "HireEase",
      description: "AI Copilot for HR Teams",
      url: "https://hireease.saarva.xyz",
      subdomain: "hireease.saarva.xyz"
    },
    {
      name: "Briefly",
      description: "AI Copilot for Founders & Executives",
      url: "https://briefly.saarva.xyz",
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

