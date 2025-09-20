import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { toast } from "react-toastify"; // make sure you installed react-toastify

const PartnerPage = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(
        "service_4vgij7w", // your service ID
        "template_kwtrrsp", // your template ID
        formData,
        "L1n6Ev9Xt5gNmQkrD" // your public key
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ user_name: "", user_email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        toast.error("Failed to send message. Please try again later.");
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-20 mt-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#5B3CC4] mb-6"
        >
          Partner With Cloudhouse247
        </motion.h1>

        <p className="text-lg md:text-xl leading-relaxed mb-8">
          At <span className="font-semibold">Cloudhouse247</span>, we believe
          that great things happen when we work together. We’re always looking
          to build strong, mutually beneficial partnerships that drive
          innovation, growth, and success. Whether you’re a business,
          organization, or individual, we invite you to join us on this exciting
          journey.
        </p>

        <p className="text-lg md:text-xl leading-relaxed mb-10">
          Whether you are in design, sales, marketing, finance, consulting, or
          any other field, this is your opportunity to partner with a trusted
          tech company and earn income—{" "}
          <span className="font-semibold">no technical expertise required.</span>
        </p>

        <a
          href="#partner-form"
          className="inline-block px-8 py-4 bg-emerald-500 text-white font-semibold rounded-xl shadow-lg hover:bg-emerald-600 transition-all"
        >
          Become a Partner
        </a>
      </section>

      {/* Contact Form */}
      <section
        id="partner-form"
        className="bg-white shadow-lg rounded-2xl max-w-3xl mx-auto p-10 mb-20"
      >
        <h2 className="text-3xl font-bold text-center text-[#1E293B] mb-8">
          Partner With Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-left text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-left text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-left text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={sending}
            className={`w-full px-6 py-3 font-semibold rounded-lg shadow-md transition-all ${
              sending
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-emerald-500 text-white hover:bg-emerald-600"
            }`}
          >
            {sending ? "Sending..." : "Submit"}
          </motion.button>
        </form>
      </section>
    </div>
  );
};

export default PartnerPage;
