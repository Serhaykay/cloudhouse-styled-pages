import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";
import logo from "../assets/images/chlogo.png";

const NewsletterPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [hasClosed, setHasClosed] = useState(false);

  const location = useLocation();
  const isHomepage = location.pathname === "/";

  useEffect(() => {
    const subscribed = localStorage.getItem("newsletterSubscribed");
    if (subscribed || hasClosed) return;

    const handleScroll = () => {
      if (hasClosed || isOpen) return;

      if (isHomepage) {
        // Homepage → show only when footer is visible
        const footer = document.querySelector("footer");
        if (!footer) return;

        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (footerTop <= windowHeight) {
          setIsOpen(true);
          window.removeEventListener("scroll", handleScroll);
        }
      } else {
        // Other pages → show when user starts scrolling
        if (window.scrollY > 50) {
          setIsOpen(true);
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomepage, isOpen, hasClosed]);

  const handleClose = () => {
    setIsOpen(false);
    setHasClosed(true); // prevent reopening until refresh
  };

  const checkEmailExists = async (email) => {
    try {
      const res = await fetch(
        `https://sheetdb.io/api/v1/5w0l3k1ev82uo/search?email=${encodeURIComponent(
          email
        )}`
      );
      const data = await res.json();
      return data.length > 0;
    } catch (err) {
      console.error("Error checking email:", err);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setSending(true);

    try {
      const emailExists = await checkEmailExists(email);
      if (emailExists) {
        toast.error("⚠️ You are already subscribed!");
        localStorage.setItem("newsletterSubscribed", "true");
        setIsOpen(false);
        return;
      }

      const payload = {
        data: { email, subscribed_at: new Date().toISOString() },
      };

      const res = await fetch("https://sheetdb.io/api/v1/5w0l3k1ev82uo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        toast.success("🎉 Thanks for subscribing!");
        setEmail("");
        setIsOpen(false);
        localStorage.setItem("newsletterSubscribed", "true");
      } else {
        const errorData = await res.json();
        console.error("SheetDB error:", errorData);
        toast.error("⚠️ Subscription failed. Check console.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      toast.error("⚠️ Subscription failed. Try again.");
    } finally {
      setSending(false);
    }
  };

  // Hide if user subscribed or closed
  const subscribed = localStorage.getItem("newsletterSubscribed");
  if (!isOpen || subscribed || hasClosed) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
      <div className="bg-white rounded-xl p-8 max-w-md w-full relative shadow-lg animate-fadeIn">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold text-xl"
        >
          &times;
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src={logo} alt="Cloudhouse Logo" className="h-32 w-auto" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-2 text-center">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          Stay updated with our latest news and updates.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          <button
            type="submit"
            disabled={sending}
            className="bg-[#10B981] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0f9d76] transition"
          >
            {sending ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterPopup;
