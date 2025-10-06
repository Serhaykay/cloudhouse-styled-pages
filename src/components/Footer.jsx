import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const emailInput = e.target.user_email.value;

    if (!emailInput) return;

    // Push the email to MailerLite
    ml("subscribe", { email: emailInput }, (response) => {
      if (response.success) {
        toast.success("🎉 Thanks for subscribing!");
        e.target.reset();
      } else {
        toast.error("⚠️ Subscription failed. Please try again.");
        console.error(response);
      }
    });
  };

  return (
    <footer className="bg-[#1E293B] text-[#F9FAFB] py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-heading font-semibold mb-6">
            Quick Links
          </h3>
          <ul className="space-y-4 text-sm">
            <li>
              <Link to="/" className="hover:text-[#10B981]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#10B981]">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#10B981]">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-[#10B981]">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#10B981]">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-heading font-semibold mb-6">
            Our Services
          </h3>
          <ul className="space-y-4 text-sm">
            <li>
              <Link
                to="/services#web-development"
                className="hover:text-[#10B981]"
              >
                Web Development
              </Link>
            </li>
            <li>
              <Link
                to="/services#shopify-integration"
                className="hover:text-[#10B981]"
              >
                Shopify Integration
              </Link>
            </li>
            <li>
              <Link
                to="/services#bug-fixing"
                className="hover:text-[#10B981]"
              >
                Bug Fixing & Support
              </Link>
            </li>
            <li>
              <Link to="/services#seo" className="hover:text-[#10B981]">
                SEO Services
              </Link>
            </li>
            <li>
              <Link
                to="/services#consultation"
                className="hover:text-[#10B981]"
              >
                Free Consultation
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-heading font-semibold mb-6">
            Contact Us
          </h3>
          <ul className="space-y-4 text-sm">
            <li>
              <a
                href="mailto:info@cloudhouse.com"
                className="hover:text-[#10B981]"
              >
                support@cloudhouse247.com
              </a>
            </li>
            {/* <li>
              <a href="tel:+1234567890" className="hover:text-[#10B981]">
                +1 (234) 567-890
              </a>
            </li> */}
            <li>
              <p className="hover:text-[#10B981]">
                9450 Southwest Gemini Drive, Beaverton, OR, 97008, USA
              </p>
            </li>
            <li>
              <p className="hover:text-[#10B981]">New York, NY 10001</p>
            </li>
          </ul>
        </div>

        {/* Social Links + Newsletter */}
        <div>
          <h3 className="text-xl font-heading font-semibold mb-6">
            Follow Us
          </h3>
          <ul className="flex space-x-6 text-xl mb-6">
            <li>
              <a
                href="https://www.linkedin.com/company/cloudhouse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F9FAFB] hover:text-[#10B981]"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/cloudhouse247"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F9FAFB] hover:text-[#10B981]"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/cloudhouse.info24"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F9FAFB] hover:text-[#10B981]"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/cloudhouse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F9FAFB] hover:text-[#10B981]"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </li>
          </ul>

          {/* Newsletter Form */}
          <h3 className="text-lg font-semibold mb-4">
            Subscribe to our Newsletter
          </h3>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-3 w-full max-w-xs"
          >
            <input
              type="email"
              name="user_email"
              required
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg text-black w-full"
            />
            <button
              type="submit"
              className="bg-[#10B981] hover:bg-[#0f9d76] text-white px-6 py-2 rounded-lg font-semibold w-full"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Legal Links */}
      <div className="mt-12 text-center text-sm">
        <p>&copy; 2025 Cloudhouse247. All rights reserved.</p>
        <ul className="mt-4 space-x-6 flex justify-center">
          <li>
            <Link to="/privacy-policy" className="hover:text-[#10B981]">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/terms-of-service" className="hover:text-[#10B981]">
              Terms of Service
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
