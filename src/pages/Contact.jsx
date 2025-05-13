import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
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
        'service_4vgij7w',
        'template_kwtrrsp',
        formData,
        'L1n6Ev9Xt5gNmQkrD'
      )
      .then(() => {
        toast.success('Message sent successfully!');
        setFormData({ user_name: '', user_email: '', message: '' });
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        toast.error('Failed to send message. Please try again later.');
      })
      .finally(() => {
        setSending(false);
      });
  };
  

  return (
    <div className="pt-0 bg-[#F9FAFB] text-[#1E293B]">
      {/* Header */}
      <section className="text-center px-6 py-20 bg-gradient-to-r from-[#5B3CC4] to-[#6B4BCE] text-white pt-64">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-heading font-bold mb-4"
        >
          Contact Us
        </motion.h1>
        <p className="text-lg font-body max-w-xl mx-auto">
          Let’s bring your ideas to life. Reach out and let’s talk.
        </p>
      </section>

      {/* Contact Form */}
      <section className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
        <h2 className="text-2xl font-semibold text-[#5B3CC4] mb-6">Send us a message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg"
              rows={5}
              placeholder="Tell us what you need..."
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="bg-[#5B3CC4] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4a2eaf] transition"
          >
            {sending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
