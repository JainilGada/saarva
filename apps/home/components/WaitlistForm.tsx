"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@config/siteConfig";

export default function WaitlistForm() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const formUrl = siteConfig.waitlist.googleFormUrl;
  
  // If it's a full docs.google.com URL, add embedded parameter
  const getEmbedUrl = () => {
    if (formUrl.includes('docs.google.com')) {
      return formUrl.includes('embedded=true') 
        ? formUrl 
        : `${formUrl}${formUrl.includes('?') ? '&' : '?'}embedded=true`;
    }
    // For short forms.gle links, use directly - Google Forms handles it
    return formUrl;
  };

  useEffect(() => {
    // Set a timeout to show error if form doesn't load in 15 seconds
    const timeout = setTimeout(() => {
      if (isLoading) {
        setLoadError(true);
        setIsLoading(false);
      }
    }, 15000);

    return () => clearTimeout(timeout);
  }, [isLoading]);

  const handleIframeLoad = () => {
    setIsLoading(false);
    setLoadError(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setLoadError(true);
  };

  return (
    <section id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {siteConfig.waitlist.headline}
          </h2>
          <p className="text-xl text-gray-600">
            {siteConfig.waitlist.subtext}
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 sm:p-8 border border-gray-200 overflow-hidden relative">
          {/* Loading Skeleton */}
          {isLoading && (
            <div className="absolute inset-0 bg-white rounded-xl flex flex-col items-center justify-center z-10 animate-pulse">
              <div className="w-16 h-16 border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin mb-4"></div>
              <p className="text-gray-600 font-medium">Loading form...</p>
              <p className="text-sm text-gray-500 mt-2">This may take a few seconds</p>
            </div>
          )}

          {/* Error State */}
          {loadError && !isLoading && (
            <div className="absolute inset-0 bg-white rounded-xl flex flex-col items-center justify-center z-10 p-8">
              <div className="text-5xl mb-4">⚠️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Form is taking longer to load</h3>
              <p className="text-gray-600 mb-6 text-center max-w-md">
                The form might be experiencing delays. You can try refreshing or open it directly.
              </p>
              <a
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
              >
                Open Form in New Tab
              </a>
            </div>
          )}

          {/* Google Form Iframe */}
          <iframe
            src={getEmbedUrl()}
            width="100%"
            height="1200"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className={`w-full transition-opacity duration-300 ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
            title="Saarva Waitlist Form"
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            loading="lazy"
            style={{ minHeight: "1200px" }}
          >
            <div className="p-8 text-center">
              <p className="text-gray-600 mb-4">Unable to load form. Please try opening it directly.</p>
              <a
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 underline"
              >
                Open Form
              </a>
            </div>
          </iframe>
        </div>
      </div>
    </section>
  );
}

