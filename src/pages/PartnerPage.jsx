import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const faqs = [
  {
    question: "How can I become a partner?",
    answer: (
      <>
        You only need to register with us as a partner{" "}
        <a href="/contact" className="text-emerald-500 underline">
          here
        </a>
        .
      </>
    ),
  },
  {
    question: "How much would you pay for each project we do together?",
    answer: "It depends on the amount of the project, but our commission ranges from 20% to 30%.",
  },
  {
    question: "Do I need to do anything?",
    answer: "No, our team does all the heavy lifting.",
  },
  {
    question: "Do you pay me instantly?",
    answer: "You will receive your payment 30 days after the client officially starts working with us.",
  },
];

const PartnerPage = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(
        "service_4vgij7w",
        "template_kwtrrsp",
        formData,
        "L1n6Ev9Xt5gNmQkrD"
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
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-20 mt-28 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#5B3C] mb-6"
        >
          Partner With Cloudhouse247
        </motion.h1>
        <p className="text-lg md:text-xl leading-relaxed mb-8">
          At <span className="font-semibold">Cloudhouse247</span>, we believe
          that great things happen when we work together. Join us to earn,
          innovate, and grow — no technical expertise required.
        </p>
        <a
          href="#partner-form"
          className="inline-block px-8 py-4 bg-emerald-500 text-white font-semibold rounded-xl shadow-lg hover:bg-emerald-600 transition-all"
        >
          Become a Partner
        </a>
      </section>

      {/* Why Partner With Us */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#5B3CC4] mb-12">
            Why Partner With Us
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Grow Your Income", desc: "Earn passive income on every project without extra work." },
              { title: "Premium Resources", desc: "Get access to tools, insights, and support from our team." },
              { title: "Trusted by Brands", desc: "We partner with global businesses you can trust." },
              { title: "Dedicated Support", desc: "Our experts are here to help you succeed." },
            ].map((item, idx) => (
              <div key={idx} className="p-6 border rounded-xl shadow-sm hover:shadow-lg transition">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#5B3CC4] mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              "Apply as a Partner",
              "Get Verified",
              "Start Earning",
              "Receive Payments",
            ].map((step, idx) => (
              <div key={idx} className="p-6 rounded-xl border bg-white shadow-sm">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-bold">
                  {idx + 1}
                </div>
                <p className="font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#5B3CC4] mb-12">
            What Our Partners Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                feedback:
                  "Partnering with Cloudhouse247 has been a game-changer. I earn commissions without extra effort!",
              },
              {
                name: "Michael Lee",
                feedback:
                  "The process is smooth, the team is supportive, and payments are always on time.",
              },
              {
                name: "Aisha Bello",
                feedback:
                  "I recommend Cloudhouse247 to anyone looking to grow their income through partnerships.",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-xl shadow-md bg-gray-50">
                <p className="italic mb-4">“{item.feedback}”</p>
                <h4 className="font-semibold text-emerald-600">{item.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + Info */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* Left Info */}
        <div>
          <h2 className="text-3xl font-bold text-[#5B3CC4] mb-6">Frequently Asked Questions</h2>
          <p className="text-gray-600 mb-6">
            We’ve gathered the most common questions to help you get started quickly.
          </p>
        </div>

        {/* Right Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border rounded-xl overflow-hidden">
              <button
                onClick={() => setActiveFAQ(activeFAQ === idx ? null : idx)}
                className="w-full flex justify-between items-center px-6 py-4 bg-white hover:bg-gray-50 text-left font-medium"
              >
                {faq.question}
                <span>{activeFAQ === idx ? "−" : "+"}</span>
              </button>
              <AnimatePresence>
                {activeFAQ === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4 text-gray-600"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section
        id="partner-form"
        className="bg-white shadow-lg rounded-2xl max-w-3xl mx-auto p-10 mb-20"
      >
        <h2 className="text-3xl font-bold text-center text-[#5B3CC4] mb-6">
          Get In Touch
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Interested in becoming a partner? Fill out the form and we’ll get back to you.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-left text-sm font-medium mb-2">Name</label>
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
              <label className="block text-left text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-left text-sm font-medium mb-2">Message</label>
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

      {/* Final CTA */}
      <section className="text-center py-12 bg-emerald-500 text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Start Partnering With Us?
        </h2>
        <a
          href="/contact"
          className="inline-block px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl shadow-lg hover:bg-gray-100 transition-all"
        >
          Contact Us Today
        </a>
      </section>
    </div>
  );
};

export default PartnerPage;
