"use client";

import { siteConfig } from "@config/siteConfig";

interface HeroProps {
  onExploreClick?: () => void;
  onWaitlistClick?: () => void;
}

export default function Hero({ onExploreClick, onWaitlistClick }: HeroProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleExploreClick = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      scrollToSection("products");
    }
  };

  const handleWaitlistClick = () => {
    if (onWaitlistClick) {
      onWaitlistClick();
    } else {
      scrollToSection("waitlist");
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto text-center w-full">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-4xl">
            🤖
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          {siteConfig.tagline}
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
          {siteConfig.subtext}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleExploreClick}
            className="px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors duration-200 w-full sm:w-auto"
            aria-label="Explore AI copilots"
          >
            {siteConfig.cta.exploreCopilots}
          </button>
          
          <button
            onClick={handleWaitlistClick}
            className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-900 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors duration-200 w-full sm:w-auto"
            aria-label="Join waitlist"
          >
            {siteConfig.cta.joinWaitlist}
          </button>
        </div>
      </div>
    </section>
  );
}

