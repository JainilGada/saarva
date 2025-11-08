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
      subdomain: "fingenie.saarva.xyz",
      features: [
        "Instantly summarize Excel and PDF financial reports",
        "Detect anomalies, missing entries, and data inconsistencies",
        "Draft MIS summaries and client emails automatically",
        "Track compliance and filing deadlines",
        "Save 2–3 hours per report"
      ]
    },
    {
      name: "MeetMind",
      description: "AI Copilot for Product Managers",
      subdomain: "meetmind.saarva.xyz",
      features: [
        "Convert meeting transcripts into PRDs and Jira tickets",
        "Extract key decisions and action items",
        "Summarize discussions and share to Slack or Notion",
        "Generate status reports automatically",
        "Free up hours of post-meeting documentation work"
      ]
    },
    {
      name: "CompliEase",
      description: "AI Copilot for Company Secretaries / Legal Teams",
      subdomain: "compliease.saarva.xyz",
      features: [
        "Auto-generate ROC, board resolutions, and compliance documents",
        "Maintain compliance calendars and reminders",
        "Pre-fill legal forms from structured company data",
        "Generate meeting minutes from transcripts",
        "Avoid missed filings and penalties"
      ]
    },
    {
      name: "HireEase",
      description: "AI Copilot for HR Professionals",
      subdomain: "hireease.saarva.xyz",
      features: [
        "Parse and rank resumes against job descriptions",
        "Draft candidate emails, onboarding docs, and HR policies",
        "Generate performance review summaries",
        "Automate repetitive HR communications",
        "Reduce screening time by 70%"
      ]
    },
    {
      name: "Briefly",
      description: "AI Copilot for Founders & Executives",
      subdomain: "briefly.saarva.xyz",
      features: [
        "Summarize daily updates from Slack, Notion, or email",
        "Highlight key metrics, team progress, and blockers",
        "Generate one-page business briefings",
        "Identify urgent action points automatically",
        "Save leaders hours of context-switching and report reading"
      ]
    },
    {
      name: "SalesEase",
      description: "AI Copilot for Sales Teams",
      subdomain: "salesease.saarva.xyz",
      features: [
        "Generate personalized sales proposals and quotes",
        "Analyze customer conversations and extract insights",
        "Auto-draft follow-up emails and meeting summaries",
        "Track deal pipeline and forecast revenue",
        "Reduce admin time by 60% and close more deals"
      ]
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
    email: "saarvatech@gmail.com",
    links: {
      privacy: "/privacy",
      terms: "/terms"
    }
  },
  
  cta: {
    exploreCopilots: "Explore Copilots",
    joinWaitlist: "Join Waitlist",
    learnMore: "Learn More →"
  }
} as const;

