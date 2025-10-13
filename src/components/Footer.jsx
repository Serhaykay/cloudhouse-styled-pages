// src/components/Footer.jsx
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const SHEETDB_ENDPOINT = "https://sheetdb.io/api/v1/5w0l3k1ev82uo";

const Footer = () => {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);

  // basic email regex for client validation
  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const sendEmailToSheetDB = async (email) => {
    // SheetDB accepts JSON. We'll POST a "data" array with an object.
    // Adjust the field name ("email") if your sheet's column header is different.
    const payload = {
      data: [{ email }],
    };

    const res = await fetch(SHEETDB_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    return res;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;

    const form = e.target;
    const emailInput = (form.user_email && form.user_email.value || "").trim();
    const honeypot = form.website && form.website.value; // hidden field, should be empty

    if (honeypot) {
      // likely a bot — silently ignore or give a soft response
      console.warn("Honeypot filled; rejecting submission.");
      return;
    }

    if (!emailInput) {
      toast.error("Please enter your email.");
      return;
    }

    if (!emailRegex.test(emailInput)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setSending(true);
    try {
      const response = await sendEmailToSheetDB(emailInput);

      // SheetDB returns 201 Created on success in many setups; some endpoints return 200.
      if (response.ok) {
        toast.success("🎉 Thanks for subscribing!");
        form.reset();
      } else {
        // read body for debugging if possible
        let bodyText = "";
        try {
          bodyText = await response.text();
        } catch (err) {
          bodyText = "Unable to read response body.";
        }
        console.error("SheetDB responded with an error:", response.status, bodyText);
        toast.error("⚠ Subscription failed. Please try again later.");
      }
    } catch (err) {
      console.error("Network or fetch error sending to SheetDB:", err);
      // Common cause: CORS blocked by SheetDB. See note below.
      toast.error("⚠ Could not connect to the signup server. Try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
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
            <li><a href="mailto:support@cloudhouse247.com" className="hover:text-[#10B981]">support@cloudhouse247.com</a></li>
            <li><a href="tel:+" className="hover:text-[#10B981]">+1 (234) 567-890</a></li>
            <li><p className="hover:text-[#10B981]">9450 Southwest Gemini Drive,</p></li>
            <li><p className="hover:text-[#10B981]">Beaverton, OR, 97008, USA</p></li>
          </ul>
        </div>

        {/* Social Links + Newsletter */}
        <div>
          <h3 className="text-xl font-heading font-semibold mb-6">Follow Us</h3>
          <ul className="flex space-x-6 text-xl mb-6">
            <li>
              <a href="https://www.linkedin.com/company/cloudhouse247" target="_blank" rel="noopener noreferrer" className="text-[#F9FAFB] hover:text-[#10B981]">
                <i className="fab fa-linkedin" />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/cloudhouse247" target="_blank" rel="noopener noreferrer" className="text-[#F9FAFB] hover:text-[#10B981]">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/cloudhouse.info24" target="_blank" rel="noopener noreferrer" className="text-[#F9FAFB] hover:text-[#10B981]">
                <i className="fab fa-instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/share/1GwwJQ7hFL/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-[#F9FAFB] hover:text-[#10B981]">
                <i className="fab fa-facebook" />
              </a>
            </li>
          </ul>

          {/* Newsletter Form */}
          <h3 className="text-lg font-semibold mb-4">Subscribe to our Newsletter</h3>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 w-full max-w-xs"
            aria-label="Newsletter subscription form"
          >
            <label htmlFor="user_email" className="sr-only">Email address</label>
            <input
              id="user_email"
              type="email"
              name="user_email"
              required
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg text-black w-full"
              disabled={sending}
            />

            {/* Honeypot field for bots */}
            <input
              type="text"
              name="website"
              tabIndex="-1"
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <button
              type="submit" 
              className="bg-[#10B981] hover:bg-[#0f9d76] text-white px-6 py-2 rounded-lg font-semibold w-full }
              disabled={sending}"
            >
              {sending ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        </div>
      </div>

      {/* Legal Links */}
      <div className="mt-12 text-center text-sm">
        <p>&copy; 2025 Cloudhouse. All rights reserved.</p>
        <ul className="mt-4 space-x-6 flex justify-center">
          <li><Link to="/privacy-policy" className="hover:text-[#10B981]">Privacy Policy</Link></li>
          <li><Link to="/terms-of-service" className="hover:text-[#10B981]">Terms of Service</Link></li>
        </ul>
      </div>
    </footer>
    </>
  );
};

export default Footer;