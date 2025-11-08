"use client";

import { useState, FormEvent } from "react";
import { siteConfig } from "@config/siteConfig";

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    profession: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const googleFormUrl = siteConfig.waitlist.googleFormUrl;
      
      // If Google Form URL is configured, redirect with prefilled data
      if (googleFormUrl) {
        // Get entry IDs from config or use defaults
        const entryIds = siteConfig.waitlist.googleFormEntryIds || {
          name: "entry.0",
          email: "entry.1",
          profession: "entry.2"
        };

        // Build the prefilled form URL
        const params = new URLSearchParams({
          [entryIds.name]: formData.name,
          [entryIds.email]: formData.email,
          [entryIds.profession]: formData.profession,
        });

        // Redirect to Google Form with prefilled data
        window.location.href = `${googleFormUrl}?${params.toString()}`;
        return; // Don't set submitted state yet, let Google Form handle it
      }

      // Otherwise, use API endpoint (existing behavior)
      const endpoint = siteConfig.waitlist.submitEndpoint;
      
      if (!endpoint) {
        throw new Error("Waitlist endpoint not configured. Please set NEXT_PUBLIC_GOOGLE_FORM_URL or NEXT_PUBLIC_WAITLIST_ENDPOINT");
      }

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", profession: "" });
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error("Waitlist submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <section id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto text-center w-full">
          <div className="bg-green-50 border border-green-200 rounded-xl p-8">
            <div className="text-5xl mb-4">✅</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Thank you!
            </h2>
            <p className="text-lg text-gray-700">
              We&apos;ll be in touch soon with early access to Saarva&apos;s AI copilots.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-2xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {siteConfig.waitlist.headline}
          </h2>
          <p className="text-xl text-gray-600">
            {siteConfig.waitlist.subtext}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 rounded-xl p-8 border border-gray-200"
        >
          <div className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                {siteConfig.waitlist.fields.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                {siteConfig.waitlist.fields.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="profession"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                {siteConfig.waitlist.fields.profession}
              </label>
              <input
                type="text"
                id="profession"
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                placeholder="e.g., Product Manager, CA, Lawyer"
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : siteConfig.cta.joinWaitlist}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

