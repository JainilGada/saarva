import { siteConfig } from "@config/siteConfig";
import Link from "next/link";

export const metadata = {
  title: `Terms of Service - ${siteConfig.brand}`,
  description: `Terms of Service for ${siteConfig.brand} and its AI copilot services.`,
};

export default function TermsPage() {
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
          Terms of Service
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p className="text-sm text-gray-500 mb-8">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="leading-relaxed">
              By accessing or using {siteConfig.brand} ("the Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              2. Description of Service
            </h2>
            <p className="leading-relaxed">
              {siteConfig.brand} provides AI-powered copilot services designed to assist professionals in various domains, including but not limited to finance, product management, legal compliance, HR, sales, and executive functions. Our services include {siteConfig.brand}'s AI assistant, Effi, and specialized copilots for different professions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              3. User Accounts and Registration
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must provide accurate, current, and complete information during registration</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials</li>
              <li>You are responsible for all activities that occur under your account</li>
              <li>You must notify us immediately of any unauthorized use of your account</li>
              <li>We reserve the right to suspend or terminate accounts that violate these Terms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              4. Acceptable Use
            </h2>
            <p className="leading-relaxed mb-3">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the Service for any illegal purpose or in violation of any laws</li>
              <li>Transmit any harmful code, viruses, or malicious software</li>
              <li>Attempt to gain unauthorized access to the Service or related systems</li>
              <li>Interfere with or disrupt the Service or servers connected to the Service</li>
              <li>Use the Service to infringe upon intellectual property rights</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Use automated systems to access the Service without authorization</li>
              <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              5. Intellectual Property
            </h2>
            <p className="leading-relaxed">
              The Service, including its original content, features, and functionality, is owned by {siteConfig.brand} and is protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You may not copy, modify, distribute, sell, or lease any part of our Service without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              6. User Content
            </h2>
            <p className="leading-relaxed mb-3">
              You retain ownership of any content you submit, upload, or transmit through the Service ("User Content"). By using the Service, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and process your User Content solely for the purpose of providing and improving the Service.
            </p>
            <p className="leading-relaxed">
              You are solely responsible for your User Content and represent that you have all necessary rights to grant us the license described above.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              7. AI-Generated Content
            </h2>
            <p className="leading-relaxed">
              Our Service uses artificial intelligence to generate content. While we strive for accuracy, AI-generated content may contain errors or inaccuracies. You acknowledge that:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>AI-generated content should be reviewed and verified before use</li>
              <li>We are not liable for decisions made based on AI-generated content</li>
              <li>You are responsible for ensuring compliance with applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              8. Payment and Billing
            </h2>
            <p className="leading-relaxed mb-3">
              If you purchase a paid subscription or service:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You agree to pay all fees associated with your subscription</li>
              <li>Fees are billed in advance and are non-refundable unless otherwise stated</li>
              <li>We reserve the right to change our pricing with reasonable notice</li>
              <li>Failure to pay may result in suspension or termination of your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              9. Privacy
            </h2>
            <p className="leading-relaxed">
              Your use of the Service is also governed by our Privacy Policy. Please review our Privacy Policy to understand how we collect, use, and protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              10. Disclaimers and Limitations of Liability
            </h2>
            <p className="leading-relaxed mb-3">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              11. Indemnification
            </h2>
            <p className="leading-relaxed">
              You agree to indemnify, defend, and hold harmless {siteConfig.brand} and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with your use of the Service or violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              12. Termination
            </h2>
            <p className="leading-relaxed">
              We may terminate or suspend your account and access to the Service immediately, without prior notice, for any reason, including breach of these Terms. Upon termination, your right to use the Service will cease immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              13. Changes to Terms
            </h2>
            <p className="leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on this page and updating the "Last updated" date. Your continued use of the Service after such modifications constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              14. Governing Law
            </h2>
            <p className="leading-relaxed">
              These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions. Any disputes arising from these Terms or the Service shall be resolved in the appropriate courts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              15. Contact Information
            </h2>
            <p className="leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:
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

