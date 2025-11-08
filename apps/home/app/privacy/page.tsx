import { siteConfig } from "@config/siteConfig";
import Link from "next/link";

export const metadata = {
  title: `Privacy Policy - ${siteConfig.brand}`,
  description: `Privacy Policy for ${siteConfig.brand} and its AI copilot services.`,
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors duration-200"
        >
          ← Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p className="text-sm text-gray-500 mb-8">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              1. Introduction
            </h2>
            <p className="leading-relaxed">
              Welcome to {siteConfig.brand} ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and AI copilot services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              2. Information We Collect
            </h2>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              2.1 Information You Provide
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact information (email address)</li>
              <li>Professional information (job title, industry, profession)</li>
              <li>Account credentials and profile information</li>
              <li>Content you upload or input into our AI copilot services</li>
              <li>Communications with our support team</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              2.2 Automatically Collected Information
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Device information (IP address, browser type, operating system)</li>
              <li>Usage data (pages visited, features used, time spent)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              3. How We Use Your Information
            </h2>
            <p className="leading-relaxed mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our AI copilot services</li>
              <li>Process your requests and transactions</li>
              <li>Send you updates, newsletters, and marketing communications (with your consent)</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Analyze usage patterns to enhance user experience</li>
              <li>Ensure security and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              4. Data Security
            </h2>
            <p className="leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              5. Data Sharing and Disclosure
            </h2>
            <p className="leading-relaxed mb-3">We do not sell your personal information. We may share your information only in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>With your explicit consent</li>
              <li>With service providers who assist us in operating our services (under strict confidentiality agreements)</li>
              <li>To comply with legal obligations or respond to lawful requests</li>
              <li>To protect our rights, privacy, safety, or property</li>
              <li>In connection with a business transfer or merger</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              6. Your Rights
            </h2>
            <p className="leading-relaxed mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access and receive a copy of your personal data</li>
              <li>Rectify inaccurate or incomplete information</li>
              <li>Request deletion of your personal data</li>
              <li>Object to or restrict processing of your data</li>
              <li>Data portability (receive your data in a structured format)</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              7. Cookies and Tracking Technologies
            </h2>
            <p className="leading-relaxed">
              We use cookies and similar tracking technologies to enhance your experience, analyze usage, and assist with marketing efforts. You can control cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              8. Third-Party Links
            </h2>
            <p className="leading-relaxed">
              Our services may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              9. Children's Privacy
            </h2>
            <p className="leading-relaxed">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              10. Changes to This Privacy Policy
            </h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              11. Contact Us
            </h2>
            <p className="leading-relaxed">
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="leading-relaxed mt-4">
              <strong>Email:</strong>{" "}
              <a
                href={`mailto:${siteConfig.footer.email}`}
                className="text-blue-600 hover:text-blue-700 underline"
              >
                {siteConfig.footer.email}
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

