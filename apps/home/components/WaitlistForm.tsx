"use client";

import { siteConfig } from "@config/siteConfig";

export default function WaitlistForm() {
  // Get the embed URL for Google Form
  // For short forms.gle links, we can use them directly in iframe
  // Google Forms will handle the redirect and embedding
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

        <div className="bg-gray-50 rounded-xl p-4 sm:p-8 border border-gray-200 overflow-hidden">
          <iframe
            src={getEmbedUrl()}
            width="100%"
            height="1200"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="w-full"
            title="Saarva Waitlist Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  );
}

