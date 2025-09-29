import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import logoImage from '../assets/images/chlogo.png';
import profile1 from '../assets/images/profile1.jpg';
import profile2 from '../assets/images/profile2.jpg'
import profile3 from '../assets/images/profile3.jpg'
import aboutcloudhouse from "../assets/images/aboutCloudhouse.jpg";




const About = () => {
  return (
    <div className="bg-[#F9FAFB] text-[#1E293B]">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] bg-cover bg-center text-white flex items-center justify-center"
        style={{ backgroundImage: `url(${aboutcloudhouse})` }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10 text-center px-6 pt-24">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About Cloudhouse
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl mb-8"
          >
            <p className="text-lg font-body max-w-2xl mx-auto">
              We are a team of passionate developers, designers, and digital experts dedicated to delivering impactful solutions for your online presence.
            </p>
          </motion.p>
                  
        </div>
        
      </section>

      {/* Our Story Section */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-heading text-center font-bold mb-8">Our Story</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-lg font-body text-gray-700">
            <p>
              At Cloudhouse, we believe in transforming ideas into reality. From custom web development to tailored eCommerce solutions, we work hand-in-hand with our clients to help them achieve their goals.
            </p>
            <p className="mt-6">
              We started as a small team of developers and designers with a shared vision: to make powerful and user-friendly web experiences accessible to everyone. Today, we work with a diverse range of businesses to create impactful digital solutions.
            </p>
          </div>
          <div className="relative">
            <img
              src={logoImage}
              alt="Our Story"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="px-6 py-16 bg-[#F3F4F6]">
        <h2 className="text-3xl font-heading text-center font-bold mb-8">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6 text-center"
          >
            <h3 className="text-xl font-semibold text-emerald-500 mb-4">Innovation</h3>
            <p className="text-sm font-body text-gray-700">
              We thrive on innovation, using cutting-edge technologies to deliver unique solutions that meet the evolving needs of our clients.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-6 text-center"
          >
            <h3 className="text-xl font-semibold text-emerald-500 mb-4">Integrity</h3>
            <p className="text-sm font-body text-gray-700">
              We believe in honesty and transparency. Our clients can trust us to deliver on our promises and provide high-quality solutions every time.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-6 text-center"
          >
            <h3 className="text-xl font-semibold text-emerald-500 mb-4">Collaboration</h3>
            <p className="text-sm font-body text-gray-700">
              We believe in working closely with our clients to understand their goals and collaborate towards creating the best solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Team Section */}
      
      <section className="px-6 py-16">
        <h2 className="text-3xl font-heading text-center font-bold mb-8">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <img
              src={profile1}
              alt="Team Member 1"
              className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg shadow-emerald-500/50"
            />
            <h3 className="font-semibold text-emerald-500">Usman A.O</h3>
            <p className="text-sm text-gray-700">Developer</p>
          </div>
          <div className="text-center">
            <img
              src={profile2}
              alt="Team Member 2"
              className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg shadow-emerald-500/50"
            />
            <h3 className="font-semibold text-emerald-500">Ralp A.</h3>
            <p className="text-sm text-gray-700">Project Manager</p>
          </div>
          <div className="text-center">
            <img
              src={profile3}
              alt="Team Member 3"
              className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg shadow-emerald-500/50"
            />
            <h3 className="font-semibold text-emerald-500">Emmy A.O</h3>
            <p className="text-sm text-gray-700">Developer</p>
          </div>
        </div>
      </section>


      {/* Call to Action Section */}
      <section className="bg-[#1E293B] text-white text-center px-6 py-16">
        <h2 className="text-3xl font-heading font-bold mb-4">Join Us on Our Journey</h2>
        <p className="text-lg font-body mb-8">
          Ready to take your project to the next level? Let’s make it happen together.
        </p>
        <a
          href="/contact"
          className="bg-[#10B981] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0f766e] transition"
        >
          Get in Touch
        </a>
      </section>

      
      <Footer />
    </div>
  );
};

export default About;

