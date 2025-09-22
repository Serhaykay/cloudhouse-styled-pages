import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const Portfolio = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const projects = [
    {
      title: 'E-commerce Website for Fashion Brand',
      description: 'A fully responsive react based project with custom features, fetching data using GraphQL and seamless user experience.',
      video: 'https://cdn.shopify.com/videos/c/o/v/9b927f8c0ee746e79b240b7e8989f5b6.mp4',
    },
    {
      title: 'Personal Blog Platform',
      description: 'A modern React.js-powered blog platform with real-time updates and scalable architecture.',
      video: 'https://cdn.shopify.com/videos/c/o/v/97ab3c982c404b4eb1d78e9f9b43d6a1.mp4',
    },
    {
      title: 'Corporate Website for Tech Company',
      description: 'A corporate site built with React.js and Tailwind CSS, emphasizing usability and performance.',
      video: 'https://cdn.shopify.com/videos/c/o/v/6b22e41d2a5c4c4b92768ee69f77b0c1.mp4',
    },
    {
      title: 'Portfolio Website for Designer',
      description: 'A minimalist portfolio site for a freelance designer, showcasing work and services in a dynamic layout.',
      video: 'https://cdn.shopify.com/videos/c/o/v/4a18df7e9b7142e7a28e2c03d51c789e.mp4',
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
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group relative"
              onClick={() => setSelectedVideo(project.video)}
            >
              {/* Video Thumbnail */}
              <video
                src={project.video}
                className="w-full h-56 object-cover"
                muted
                playsInline
              />

              {/* Overlay with animation */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
              >
                <motion.span
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="text-white text-lg font-bold bg-[#10B981] px-4 py-2 rounded-lg shadow-lg group-hover:scale-110 transform transition"
                >
                  View Demo
                </motion.span>
              </motion.div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#5B3CC4] mb-4">{project.title}</h3>
                <p className="text-sm font-body text-gray-700">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          {/* Close Button */}
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-6 right-6 text-white text-5xl font-extrabold hover:text-gray-400 z-50"
          >
            &times;
          </button>

          <div className="relative w-full max-w-5xl">
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full h-auto max-h-[80vh] rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}

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
