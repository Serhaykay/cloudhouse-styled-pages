// src/pages/TermsOfService.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  const lastUpdated = 'September 14, 2025';
  const companyName = 'Cloudhouse247';
  const contactEmail = 'support@cloudhouse247.com';

  return (
    <main className="min-h-screen bg-gray-50 text-slate-800 font-sans pt-16">
      <div className="max-w-4xl mx-auto py-16 px-6">
        <header className="mb-8">
          <Link to="/" className="inline-block mb-4 text-emerald-500 font-semibold">
            ← Back to home
          </Link>

          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">Terms of Service</h1>
          <p className="text-sm text-slate-500">
            Last updated: <span className="font-medium">{lastUpdated}</span>
          </p>
        </header>

        <article className="prose prose-slate max-w-none sm:prose-lg">
          <section>
            <p>
              Welcome to {companyName}! These Terms of Service ("Terms") govern your use of our website,
              products, and services. By accessing or using our site, you agree to be bound by these Terms.
              Please read them carefully.
            </p>
          </section>

          <section className="mt-8">
            <h2>1. Eligibility</h2>
            <p>
              You must be at least 13 years old (or the minimum age of digital consent in your jurisdiction)
              to use our services. By using {companyName}, you represent and warrant that you meet these
              requirements.
            </p>
          </section>

          <section className="mt-8">
            <h2>2. Accounts</h2>
            <p>
              To access certain features, you may need to create an account. You agree to provide accurate,
              current, and complete information and to keep your account credentials secure. You are
              responsible for all activities under your account.
            </p>
          </section>

          <section className="mt-8">
            <h2>3. Acceptable Use</h2>
            <p>You agree not to use our services for any unlawful or harmful purpose, including but not limited to:</p>
            <ul>
              <li>Violating applicable laws or regulations.</li>
              <li>Infringing intellectual property rights.</li>
              <li>Uploading malicious code, viruses, or harmful content.</li>
              <li>Harassing, threatening, or abusing other users.</li>
              <li>Attempting to gain unauthorized access to our systems.</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2>4. Purchases & Payments</h2>
            <p>
              If you make a purchase through our services, you agree to provide valid payment information.
              All payments are final unless otherwise specified in our refund policy. Prices and features
              may change at our discretion.
            </p>
          </section>

          <section className="mt-8">
            <h2>5. Intellectual Property</h2>
            <p>
              All content, logos, trademarks, and software provided by {companyName} are our property or
              licensed to us. You may not reproduce, distribute, or create derivative works without prior
              written permission.
            </p>
          </section>

          <section className="mt-8">
            <h2>6. Third-Party Services</h2>
            <p>
              Our site may contain links to third-party websites or services. We are not responsible for
              the content, policies, or practices of third-party providers. Use them at your own risk.
            </p>
          </section>

          <section className="mt-8">
            <h2>7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, {companyName} shall not be liable for indirect,
              incidental, or consequential damages resulting from your use of our services. We provide
              services "as is" without warranties of any kind.
            </p>
          </section>

          <section className="mt-8">
            <h2>8. Termination</h2>
            <p>
              We may suspend or terminate your access if you violate these Terms, misuse our services, or
              engage in unlawful activity. You may also stop using our services at any time by closing
              your account.
            </p>
          </section>

          <section className="mt-8">
            <h2>9. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. Changes will take effect immediately upon
              posting on this page unless otherwise required by law. Continued use of our services after
              updates constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section className="mt-8">
            <h2>10. Governing Law</h2>
            <p>
              These Terms are governed by the laws of Nigeria, without regard to conflict of law
              principles. Any disputes shall be resolved in the competent courts located in Nigeria.
            </p>
          </section>

          <section className="mt-8">
            <h2>11. Contact Us</h2>
            <p>
              If you have questions about these Terms, please contact us at:
            </p>
            <address>
              <strong>{companyName}</strong><br />
              Email: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </address>
          </section>
        </article>

        <footer className="mt-12 text-sm text-slate-500">
          <p>
            By using {companyName}, you acknowledge that you have read, understood, and agreed to these
            Terms of Service.
          </p>
        </footer>
      </div>
    </main>
  );
};

export default TermsOfService;
