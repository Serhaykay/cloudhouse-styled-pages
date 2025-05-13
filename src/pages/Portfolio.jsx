import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-commerce Website for Fashion Brand',
      description: 'A fully responsive Shopify store with custom features and seamless user experience.',
      image: '/path-to-project-image1.jpg',
      link: '/project-details/1'
    },
    {
      title: 'Personal Blog Platform',
      description: 'A modern React.js-powered blog platform with real-time updates and scalable architecture.',
      image: '/path-to-project-image2.jpg',
      link: '/project-details/2'
    },
    {
      title: 'Corporate Website for Tech Company',
      description: 'A corporate site built with React.js and Tailwind CSS, emphasizing usability and performance.',
      image: '/path-to-project-image3.jpg',
      link: '/project-details/3'
    },
    {
      title: 'Portfolio Website for Designer',
      description: 'A minimalist portfolio site for a freelance designer, showcasing work and services in a dynamic layout.',
      image: '/path-to-project-image4.jpg',
      link: '/project-details/4'
    }
  ];

  return (
    <div className="bg-[#F9FAFB] text-[#1E293B]">
      {/* Hero Section */}
      <section className="relative pt-64 text-center py-24 px-6 bg-gradient-to-r from-[#5B3CC4] to-[#6B4BCE] text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-heading font-bold mb-4"
        >
          Our Portfolio
        </motion.h1>
        <p className="text-lg font-body max-w-2xl mx-auto">
          Explore our work and see how we’ve helped businesses achieve digital excellence.
        </p>
      </section>

      {/* Projects Section */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-heading text-center font-bold mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#5B3CC4] mb-4">{project.title}</h3>
                <p className="text-sm font-body text-gray-700 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-[#5B3CC4] hover:text-[#6B4BCE] font-medium transition"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#1E293B] text-white text-center px-6 py-16">
        <h2 className="text-3xl font-heading font-bold mb-4">Ready to Create Something Amazing?</h2>
        <p className="text-lg font-body mb-8">
          Interested in working with us? Let’s discuss your project and bring your ideas to life!
        </p>
        <a
          href="/contact"
          className="bg-[#10B981] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0f766e] transition"
        >
          Get in Touch
        </a>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Portfolio;
