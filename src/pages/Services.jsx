import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Accordion from '@/components/ui/accordion';
import Footer from '../components/Footer';
import searchengineImage from '../assets/images/search-engine.png';
import webdevImage from '../assets/images/webdev.png';
import webcamImage from '../assets/images/webcam.png';
import cleanImage from '../assets/images/CleanCode.png';
import CloudhousePackages from '../components/CloudhousePackages'

const services = [
  {
    title: 'Web Development & Design',
    desc: 'Crafting modern, responsive websites with cutting-edge technology like React.js, Tailwind CSS, and more.',
    img: webdevImage,
  },
  {
    title: 'Shopify Services',
    desc: 'Custom Shopify store setup, app integrations, bug fixing, and full support for eCommerce growth.',
    img: webcamImage,
  },
  {
    title: 'SEO & Optimization',
    desc: 'Boost your visibility on search engines with advanced SEO techniques and site performance improvements.',
    img: searchengineImage,
  },
  {
    title: 'Technical Support',
    desc: 'Ongoing support, maintenance, and troubleshooting to keep your site running smoothly.',
    img: cleanImage,
  }
];

const processSteps = [
  'Initial Consultation & Discovery',
  'Proposal & Scope Agreement',
  'Design & Development Phase',
  'Testing & Quality Assurance',
  'Launch & Ongoing Support'
];

const faqs = [
  { question: 'How long does a typical website project take?', answer: 'Most projects are completed in 2–4 weeks depending on scope.' },
  { question: 'Do you provide maintenance services?', answer: 'Yes, we offer ongoing maintenance and support plans.' },
  { question: 'Can I request custom features for my Shopify store?', answer: 'Absolutely! We tailor our services to fit your business goals.' },
  { question: 'What technologies do you use?', answer: 'React, Vite, Tailwind CSS, Shopify APIs, and more modern tools.' }
];

const testimonials = [
  {
    name: 'Sarah L.',
    quote: 'Cloudhouse revamped our Shopify store in under a week—professional, fast, and spot-on!'
  },
  {
    name: 'James A.',
    quote: 'Our site’s SEO improved dramatically within the first month. Highly recommend their service.'
  }
];
// Partner logos marquee
const PartnerLogos = () => {
  const logos = [
    upworkImage,
    fiverrImage,
    shopifyImage,
    freelancerImage,
    wordpressImage,
    wooImage,
    gemImage,
    reploImage,
    pageflyImage,
  ];

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    cssEase: "linear",
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="py-8 bg-gray-50 pt-8 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          Trusted By <span className="text-emerald-600">20+</span> Partners
        </h2>

        <Slider {...settings} className="w-full">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="px-4 flex justify-center items-center border-t border-b border-gray-300"
            >
              <img
                src={logo}
                alt={`Partner ${i}`}
                className="h-16 w-auto object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <div className="pt-0 space-y-24 bg-[#F9FAFB] text-[#1E293B]">
      {/* Hero Section */}
      <section className="text-center px-6 pt-64 py-20 bg-gradient-to-r from-[#5B3CC4] to-[#6B4BCE] text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-heading font-bold mb-4 pt-8"
        >
          Our Services
        </motion.h1>
        <p className="text-lg font-body max-w-2xl mx-auto">
          Expert solutions in Web Development, Shopify, SEO, and Support to elevate your digital presence.
        </p>
      </section>

      {/* Services Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all p-6 text-center border border-gray-100"
          >
            <img
  src={service.img}
  alt={service.title}
  className="h-40 w-full object-contain md:object-cover rounded-xl mb-4"
/>

            <h3 className="text-xl font-accent text-[#5B3CC4] font-semibold mb-2">{service.title}</h3>
            <p className="text-sm font-body">{service.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Process Section */}
      <section className="px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-heading text-center font-bold mb-10">How We Work</h2>
        <div className="grid md:grid-cols-5 gap-6">
          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-[#E0E7FF] text-[#1E293B] rounded-xl p-4 text-center font-medium shadow-md"
            >
              Step {i + 1}:<br />{step}
            </motion.div>
          ))}
        </div>
      </section>

    

    <section>
      <CloudhousePackages />
    </section>

      {/* Testimonials Section */}
      <section className="bg-[#F3F4F6] px-6 py-16">
        <h2 className="text-3xl font-heading text-center font-bold mb-10">Client Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testi, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
            >
              <p className="italic mb-4">"{testi.quote}"</p>
              <p className="font-semibold text-[#5B3CC4]">- {testi.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-heading text-center font-bold mb-10">Frequently Asked Questions</h2>
        <Accordion>
          {faqs.map((item, i) => (
            <div key={i} question={item.question} answer={item.answer} />
          ))}
        </Accordion>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#1E293B] text-white text-center px-6 py-16">
        <h2 className="text-3xl font-heading font-bold mb-4">Let’s Build Together</h2>
        <p className="text-lg font-body mb-8">Have a custom project in mind? Let’s craft a solution just for you.</p>
        <Link
          to="/contact"
          className="bg-[#10B981] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0f766e] transition"
        >
          Request a Free Quote
        </Link>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services;
