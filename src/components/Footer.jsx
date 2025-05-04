import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1E293B] text-[#F9FAFB] py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-heading font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-4 text-sm">
            <li><Link to="/" className="hover:text-[#10B981]">Home</Link></li>
            <li><Link to="/services" className="hover:text-[#10B981]">Services</Link></li>
            <li><Link to="/about" className="hover:text-[#10B981]">About Us</Link></li>
            <li><Link to="/portfolio" className="hover:text-[#10B981]">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-[#10B981]">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-heading font-semibold mb-6">Our Services</h3>
          <ul className="space-y-4 text-sm">
            <li><Link to="/services#web-development" className="hover:text-[#10B981]">Web Development</Link></li>
            <li><Link to="/services#shopify-integration" className="hover:text-[#10B981]">Shopify Integration</Link></li>
            <li><Link to="/services#bug-fixing" className="hover:text-[#10B981]">Bug Fixing & Support</Link></li>
            <li><Link to="/services#seo" className="hover:text-[#10B981]">SEO Services</Link></li>
            <li><Link to="/services#consultation" className="hover:text-[#10B981]">Free Consultation</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-heading font-semibold mb-6">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="mailto:info@cloudhouse.com" className="hover:text-[#10B981]">info@cloudhouse.com</a></li>
            <li><a href="tel:+1234567890" className="hover:text-[#10B981]">+1 (234) 567-890</a></li>
            <li><p className="hover:text-[#10B981]">123 Cloudhouse Ave, Suite 101</p></li>
            <li><p className="hover:text-[#10B981]">New York, NY 10001</p></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-heading font-semibold mb-6">Follow Us</h3>
          <ul className="flex space-x-6 text-xl">
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
                href="https://www.twitter.com/cloudhouse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F9FAFB] hover:text-[#10B981]"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/cloudhouse"
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
        </div>
      </div>

      {/* Legal Links */}
      <div className="mt-12 text-center text-sm">
        <p>&copy; 2025 Cloudhouse. All rights reserved.</p>
        <ul className="mt-4 space-x-6">
          <li><Link to="/privacy-policy" className="hover:text-[#10B981]">Privacy Policy</Link></li>
          <li><Link to="/terms-of-service" className="hover:text-[#10B981]">Terms of Service</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
