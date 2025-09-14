// src/pages/PrivacyPolicy.jsx
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Privacy Policy Page for Cloudhouse
 * - Tailwind CSS styling (uses your brand color #5B3CC4)
 * - Uses user's email from context: serhaykay@gmail.com (replace if needed)
 * - Last updated: Sept 14, 2025
 *
 * Add route: <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
 */

const PrivacyPolicy = () => {
  const lastUpdated = 'September 14, 2025';
  const companyName = 'Cloudhouse';
  const contactEmail = 'cloudhouse.info24@gmail.com';
  const brandColor = 'text-[#5B3CC4]';

  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-gray-50 text-slate-800 font-sans pt-16">
      <div className="max-w-4xl mx-auto py-16 px-6">
        <header className="mb-8">
          <Link to="/" className={`inline-block mb-4 ${brandColor} font-semibold`}>
            ← Back to home
          </Link>

          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">Privacy Policy</h1>
          <p className="text-sm text-slate-500">
            Last updated: <span className="font-medium">{lastUpdated}</span>
          </p>
          <div className="mt-4 flex gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 shadow-sm text-sm hover:shadow-md"
            >
              🖨️ Print / Save
            </button>
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#5B3CC4] text-white text-sm shadow-sm hover:opacity-95"
            >
              ✉️ Contact Us
            </a>
          </div>
        </header>

        <article className="prose prose-slate max-w-none sm:prose-lg">
          <section className="mb-8">
            <p>
              {companyName} ("we", "our", or "us") operates the {companyName} website and related services.
              This Privacy Policy explains how we collect, use, disclose, and protect your information when
              you visit or use our website, products, and services. By using {companyName}, you accept the
              practices described in this policy.
            </p>
          </section>

          <section>
            <h2>1. Information We Collect</h2>
            <p>We collect information to provide better services and improve your experience. Types of data we collect include:</p>
            <ul>
              <li>
                <strong>Personal Information:</strong> name, email address, phone number, billing/shipping address (if you make purchases),
                and other identifiers you provide when registering or contacting us.
              </li>
              <li>
                <strong>Account & Transaction Data:</strong> order details, payment confirmations, invoices, and support interactions.
              </li>
              <li>
                <strong>Usage & Device Data:</strong> IP address, browser type, operating system, device identifiers, pages visited,
                referral URLs, and interaction data collected through cookies and similar technologies.
              </li>
              <li>
                <strong>Content You Provide:</strong> feedback, messages, uploaded files or images (when you attach them), and any
                content you add to public or shared areas.
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2>2. How We Collect Information</h2>
            <p>We obtain information in the following ways:</p>
            <ul>
              <li>
                <strong>Directly from you:</strong> when you create an account, place an order, sign up for newsletters,
                fill forms, or contact support.
              </li>
              <li>
                <strong>Automatically:</strong> through cookies, analytics tools, server logs, and tracking technologies when you visit our site.
              </li>
              <li>
                <strong>From third parties:</strong> payment processors, analytics providers, or other services you connect to your account.
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2>3. Use of Your Information</h2>
            <p>We use collected information to:</p>
            <ul>
              <li>Provide, operate, and maintain our services.</li>
              <li>Process transactions and send related communications.</li>
              <li>Respond to your inquiries and provide customer support.</li>
              <li>Send marketing communications (where you have consented) and promotional offers.</li>
              <li>Improve our website, products, and services through analysis.</li>
              <li>Detect, prevent, and address technical or security issues and fraud.</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2>4. Legal Bases for Processing (where applicable)</h2>
            <p>If you are in a region where data protection laws require us to state a legal basis, we rely on:</p>
            <ul>
              <li><strong>Contractual necessity:</strong> processing necessary to perform a contract with you (e.g., fulfilling orders).</li>
              <li><strong>Consent:</strong> processing for marketing or non-essential cookies when you have given consent.</li>
              <li><strong>Legitimate interests:</strong> for improving services, analytics, security, and fraud prevention, balanced with your rights.</li>
              <li><strong>Legal obligations:</strong> where required by law (e.g., tax or law enforcement requests).</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2>5. Cookies & Tracking Technologies</h2>
            <p>
              We and our partners use cookies, web beacons, local storage, and similar technologies to collect information about
              your interactions. Cookies help with things like remembering preferences, enabling features, and measuring site usage.
            </p>
            <p>
              You can control cookie preferences via your browser settings and (where applicable) our cookie consent tool on the site.
              Note that disabling some cookies may affect site functionality.
            </p>
          </section>

          <section className="mt-8">
            <h2>6. Third-Party Services</h2>
            <p>
              We may share data with third-party vendors and service providers who perform services on our behalf, including payment
              processors, analytics providers, hosting providers, email service providers, and customer support platforms. These
              partners are authorized to use your information only as necessary to provide services to us.
            </p>
          </section>

          <section className="mt-8">
            <h2>7. Sharing & Disclosure</h2>
            <p>We will not sell your personal information. We may share information:</p>
            <ul>
              <li>With service providers who help us operate the business.</li>
              <li>To comply with legal obligations (court orders, law enforcement requests).</li>
              <li>To protect rights, property, or safety of {companyName}, our users, or the public.</li>
              <li>In connection with a merger, acquisition, or sale of assets — in such case we will notify affected users where required by law.</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2>8. Security</h2>
            <p>
              We implement reasonable technical, administrative, and physical safeguards intended to protect your information.
              However, no method of transmission or storage is 100% secure. We encourage you to use strong passwords and take steps
              to keep your account secure.
            </p>
          </section>

          <section className="mt-8">
            <h2>9. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have rights regarding your personal data, including:</p>
            <ul>
              <li>Access: request a copy of the personal data we hold about you.</li>
              <li>Correction: request correction of inaccurate or incomplete data.</li>
              <li>Deletion: request deletion of your personal data (subject to legal exceptions).</li>
              <li>Portability: receive your data in a machine-readable format.</li>
              <li>Objection or restriction: object to certain processing or request restriction.</li>
            </ul>
            <p>
              To exercise these rights, contact us at <a href={`mailto:${contactEmail}`}>{contactEmail}</a>. We may need to verify
              your identity before fulfilling requests.
            </p>
          </section>

          <section className="mt-8">
            <h2>10. Children</h2>
            <p>
              Our services are not directed to children under the age of 13 (or the minimum age in your jurisdiction). We do not knowingly
              collect personal data from children under that age. If you believe we have collected data from a child, please contact us
              at <a href={`mailto:${contactEmail}`}>{contactEmail}</a>, and we will take steps to remove the information.
            </p>
          </section>

          <section className="mt-8">
            <h2>11. International Transfer</h2>
            <p>
              We are based in Nigeria and operate globally. Your information may be transferred to, stored, and processed in countries
              other than your own. Where required, we will take steps to ensure an adequate level of protection for your information.
            </p>
          </section>

          <section className="mt-8">
            <h2>12. Retention</h2>
            <p>
              We retain personal data as long as necessary to fulfill the purposes described in this policy, comply with legal obligations,
              resolve disputes, and enforce agreements.
            </p>
          </section>

          <section className="mt-8">
            <h2>13. Changes to This Privacy Policy</h2>
            <p>
              We may update this policy periodically. If we make material changes, we will provide notice on our website or by other means.
              The "Last updated" date at the top indicates when this policy was last revised.
            </p>
          </section>

          <section className="mt-8">
            <h2>14. Contact Us</h2>
            <p>
              For questions, requests, or concerns about this Privacy Policy, contact:
            </p>
            <address>
              <strong>{companyName}</strong><br />
              Email: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </address>
          </section>

          <section className="mt-8">
            <h2>15. Additional Notices</h2>
            <p>
              Some services (for example, advertisements, payment processing, or third-party integrations) may have separate privacy
              policies. Where applicable, we will link to those policies or disclose them during the relevant interaction.
            </p>
          </section>
        </article>

        <footer className="mt-12 text-sm text-slate-500 pt-16">
          <p>
            By using {companyName}, you acknowledge that you have read and understood this Privacy Policy. This policy is provided
            for informational purposes and does not create any contractual rights.
          </p>
        </footer>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
