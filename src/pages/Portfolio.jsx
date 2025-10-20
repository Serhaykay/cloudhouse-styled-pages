import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import cloudhousePortfolio from '../assets/images/cloudhouse-portfolio1.jpg';

const Portfolio = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const modalRef = useRef(null);

  const projects = [
    {
      title: 'Clothing Brand Shopify Store',
      description:
      'A visually engaging and fully responsive Shopify store built for a modern clothing brand using Shopify Page Builder. The project emphasizes clean aesthetics, intuitive navigation, and seamless shopping experience — showcasing strong skills in Shopify customization, product presentation, and conversion-focused design.',
      video:
      'https://cdn.shopify.com/videos/c/o/v/14b6b90ccc2d4bc8868296a857aa794b.mp4',
      thumbnail: 'https://cdn.shopify.com/s/files/1/0601/9386/5826/files/haykaycloudhouse.png?v=1760980534',
    },
    {
      title: 'Shopify Landing Page Design',
      description:
      'showcasing our expertise in creating high-quality Shopify solutions. This landing page was fully designed and built using the Shopify Page Builder, focusing on clean design, modern aesthetics, and smooth user experience.',
      video:
      'https://cdn.shopify.com/videos/c/o/v/3c7c75db6eee4e19a6139d7abfbe20fb.mp4',
      thumbnail: 'https://cdn.shopify.com/s/files/1/0601/9386/5826/files/bikes.png?v=1760610887',
    },
    {
      title: 'E-commerce Website for Fashion Brand',
      description:
        'A fully responsive react based project with custom features, fetching data using GraphQL and seamless user experience.',
      video:
        'https://cdn.shopify.com/videos/c/o/v/9b927f8c0ee746e79b240b7e8989f5b6.mp4',
      thumbnail: 'https://cdn.shopify.com/s/files/1/0601/9386/5826/files/ecommerce-brand.png?v=1759999893',
    },
    {
      title: 'Herbal store Landing Page Design',
      description:
        'A thoughtfully crafted Shopify landing page designed for a herbal medicine brand. Built using Shopify Page Builder, it highlights natural wellness products through clean visuals, persuasive copy, and an intuitive layout that drives trust and conversions. Developed and showcased by Cloudhouse247.',
      video:
        'https://cdn.shopify.com/videos/c/o/v/d67f4c2c17904619bed69d73bff3b26f.mp4',
      thumbnail: 'https://cdn.shopify.com/s/files/1/0601/9386/5826/files/cloudhouse-herbal.png?v=1760877808',
    },
    {
      title: 'Happy client site development',
      description:
      'Developed a fully responsive website using HTML, CSS, and JavaScript, ensuring optimal performance across devices. Implemented clean, maintainable code and intuitive design to enhance usability. Delivered a solution that met the client’s requirements while demonstrating strong front-end development expertise.',
      video:
      'https://cdn.shopify.com/videos/c/o/v/63fe023c0ef74a39a47b14a210f61812.mp4',
      thumbnail: 'https://cdn.shopify.com/s/files/1/0601/9386/5826/files/happy-client-site.png?v=1760000452',
    },
    {
      title: 'Synthesia website clone',
      description:
        'A Synthesia-inspired website clone with HTML, CSS, and JavaScript, highlighting frontend development, layout design, and DOM interactivity.',
      video:
        'https://cdn.shopify.com/videos/c/o/v/941015b57f4a4064a9ca69db45ad3244.mp4',
      thumbnail: 'https://cdn.shopify.com/s/files/1/0601/9386/5826/files/synthesia.png?v=1760000224',
    },
  ];

  // Close modal when clicking outside video area
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setSelectedVideo(null);
      }
    };
    if (selectedVideo) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [selectedVideo]);

  return (
    <div className="bg-[#F9FAFB] text-[#1E293B]">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] bg-cover bg-center text-white flex items-center justify-center"
        style={{ backgroundImage: `url(${cloudhousePortfolio})` }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10 text-center px-6 pt-24">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl mb-8"
          >
            <p className="text-lg font-body max-w-2xl mx-auto">
              Explore our work and see how we’ve helped businesses achieve digital excellence.
            </p>
          </motion.p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-heading text-center font-bold mb-8">
          Featured Projects
        </h2>
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
              {/* Thumbnail Image */}
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-56 object-cover"
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
                <h3 className="text-xl font-semibold text-emerald-500 mb-4">
                  {project.title}
                </h3>
                <p className="text-sm font-body text-gray-700">
                  {project.description}
                </p>
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

          <div ref={modalRef} className="relative w-full max-w-5xl">
            <video
              src={selectedVideo}
              autoPlay
              muted
              controls
              loop
              playsInline
              className="w-full h-auto max-h-[80vh] rounded-lg shadow-lg"
            >
              Your browser does not support the video tag.
            </video>

          </div>
        </div>
      )}

      {/* Call to Action Section */}
      <section className="bg-[#1E293B] text-white text-center px-6 py-16">
        <h2 className="text-3xl font-heading font-bold mb-4">
          Ready to Create Something Amazing?
        </h2>
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

      <Footer />
    </div>
  );
};

export default Portfolio;
