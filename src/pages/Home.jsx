import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Footer from '../components/Footer';
import bannerImage from '../assets/images/banner.jpeg';
import shopifyImage from '../assets/images/shopify.svg';
import upworkImage from '../assets/images/upwork1.png';
import wordpressImage from '../assets/images/wordpress.png';
import freelancerImage from '../assets/images/fl-logo.svg';
import wooImage from '../assets/images/wooc.png';
import gemImage from '../assets/images/gemcommerce.png';
import reploImage from '../assets/images/replo.svg';
import pageflyImage from '../assets/images/pagefly1.png';
import fiverrImage from '../assets/images/fiverr1.png';
import webImage from '../assets/images/tools.jpeg';
import expertImage from '../assets/images/shopify-expert.jpeg';
import EverythingImage from '../assets/images/everything.jpeg';
import fastImage from '../assets/images/faster.png';
import ourexpertImage from '../assets/images/ourexpert.png';
import cleancodeImage from '../assets/images/CleanCode.png';

const PartnerLogos = () => {
  return (
    <section className="py-16 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Partners</h2>
        <div className="overflow-hidden">
          <motion.div
            className="flex space-x-12 animate-marquee"
            initial={{ x: '100%' }}
            animate={{ x: '-150%' }}
            transition={{ repeat: Infinity, duration: 50, ease: 'linear' }}
          >
            <div className="flex-shrink-0">
              <img src={upworkImage} alt="Upwork" className="h-12 mx-6" />
            </div>
            <div className="flex-shrink-0">
              <img src={fiverrImage} alt="Fiverr" className="h-12 mx-6" />
            </div>
            <div className="flex-shrink-0">
              <img src={shopifyImage} alt="Shopify" className="h-12 mx-6" />
            </div>
            <div className="flex-shrink-0">
              <img src={freelancerImage} alt="Freelancer" className="h-12 mx-6" />
            </div>
            <div className="flex-shrink-0">
              <img src={wordpressImage} alt="Wordpress" className="h-12 mx-6" />
            </div>
            <div className="flex-shrink-0">
              <img src={wooImage} alt="WooCommerce" className="h-12 mx-6" />
            </div>
            <div className="flex-shrink-0">
              <img src={gemImage} alt="PageFly" className="h-12 mx-6" />
            </div>
            <div className="flex-shrink-0">
              <img src={reploImage} alt="GemCommerce" className="h-12 mx-6" />
            </div>
            <div className="flex-shrink-0">
              <img src={pageflyImage} alt="PageFly logo" className="h-12 mx-6" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  const services = [
    {
      title: 'Web Development',
      desc: 'Modern websites built with React, Tailwind, and more.',
      img: webImage,
    },
    {
      title: 'Shopify Integration',
      desc: 'Custom Shopify app setup and seamless store configuration.',
      img: expertImage,
    },
    {
      title: 'Bug Fixing & Support',
      desc: 'We handle store issues quickly and professionally.',
      img: EverythingImage, 
    }
  ];

  const features = [
    {
      title: 'Fast Delivery',
      desc: 'We ensure your projects are completed on time, every time.',
      img: fastImage
    },
    {
      title: 'Shopify Experts',
      desc: 'Certified developers ready to take your store to the next level.',
      img: ourexpertImage
    },
    {
      title: 'Clean, Modern Code',
      desc: 'We write scalable, maintainable code that performs perfectly.',
      img: cleancodeImage
    }
  ];

  return (
    <div className="pt-0 space-y-20 bg-[#F9FAFB] text-[#1E293B]">
<section
  className="relative h-[70vh] bg-cover bg-center text-white flex items-center justify-center"
  style={{ backgroundImage: `url(${bannerImage})` }}
>
  {/* Optional dark overlay for better contrast */}
  <div className="absolute inset-0 bg-black/50 z-0" />

  {/* Banner content */}
  <div className="relative z-10 text-center px-6 pt-24">
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl font-heading font-bold mb-4"
    >
      Welcome to Cloudhouse
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-lg md:text-xl font-body mb-8"
    >
      Let’s build your store and elevate your brand
    </motion.p>

    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      <Link
        to="/contact"
        className="bg-[#10B981] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0f766e] transition"
      >
        Get Started
      </Link>
    </motion.div>
  </div>
</section>


      <PartnerLogos />

      <section className="px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-heading font-bold mb-10">Our Services</h2>
        <div className="hidden md:grid md:grid-cols-3 gap-8 text-left">
          {services.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white shadow-md rounded-xl p-6 border border-gray-100 hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-accent font-semibold text-[#3B82F6] mb-2">{item.title}</h3>
              <p className="text-sm font-body">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="md:hidden">
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            navigation={true}
          >
            {services.map((item, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  className="bg-white shadow-md rounded-xl p-6 border border-gray-100 hover:shadow-lg transition"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <h3 className="text-xl font-accent font-semibold text-[#3B82F6] mb-2">{item.title}</h3>
                  <p className="text-sm font-body">{item.desc}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <PartnerLogos />

      <section className="bg-[#1E293B] text-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Cloudhouse?</h2>
        <div className="hidden md:grid max-w-5xl mx-auto md:grid-cols-3 gap-8 text-center">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-[#3B82F6] rounded-xl p-6 shadow-lg"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <p className="text-lg font-medium">{item.title}</p>
              <p className="text-sm text-gray-200">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="md:hidden">
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            navigation={true}
          >
            {features.map((item, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-[#3B82F6] rounded-xl p-6 shadow-lg"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <p className="text-lg font-medium">{item.title}</p>
                  <p className="text-sm text-gray-200">{item.desc}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="px-6 py-20 bg-[#F9FAFB] text-center">
        <h2 className="text-3xl font-heading font-bold mb-6">Let’s Build Something Amazing Together</h2>
        <p className="text-lg font-body mb-8">
          Ready to get started? We offer tailored solutions to suit your needs. Book a free consultation with us!
        </p>
        <Link
          to="/contact"
          className="bg-[#10B981] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0f766e] transition"
        >
          Book a Free Consultation
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
