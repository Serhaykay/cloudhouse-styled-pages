import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CloudhousePackages from '../components/CloudhousePackages'
import Footer from "../components/Footer";
import emailjs from 'emailjs-com';
import Slider from "react-slick";
import { toast } from "react-hot-toast";
import Accordion from '@/components/ui/accordion';
import {faqs} from '../Utils/data'
import {testimonials} from '../Utils/data'
import {services} from '../Utils/data'




// images
import bannerImage from "../assets/images/banner.jpeg";
import shopifyImage from "../assets/images/shopify.svg";
import upworkImage from "../assets/images/upwork1.png";
import wordpressImage from "../assets/images/wordpress.png";
import freelancerImage from "../assets/images/fl-logo.svg";
import wooImage from "../assets/images/wooc.png";
import gemImage from "../assets/images/gemcommerce.png";
import reploImage from "../assets/images/replo.svg";
import pageflyImage from "../assets/images/pagefly1.png";
import fiverrImage from "../assets/images/fiverr1.png";

import fastImage from "../assets/images/faster.png";
import ourexpertImage from "../assets/images/ourexpert.png";
import cleancodeImage from "../assets/images/CleanCode.png";









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
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 4 } },
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
const AuditBanner = () => {
  const [formData, setFormData] = useState({
    email: "",
    website_url: "",
  });

  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Check if email already exists in SheetDB
  const checkEmailExists = async (email) => {
    try {
      const res = await fetch(
        `https://sheetdb.io/api/v1/6y0ilhmev30cb/search?email=${encodeURIComponent(
          email
        )}`
      );
      const data = await res.json();
      return data.length > 0;
    } catch (err) {
      console.error("Error checking email:", err);
      return false; // fallback: allow submission if check fails
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate URL
    const urlPattern = /^(https?:\/\/)/i;
    if (!urlPattern.test(formData.website_url)) {
      setError("Please enter a valid URL starting with http:// or https://");
      return;
    }

    setError("");
    setSending(true);

    try {
      // Check for duplicate email
      const emailExists = await checkEmailExists(formData.email);
      if (emailExists) {
        toast.error("⚠️ This email has already submitted a request.");
        setSending(false);
        return;
      }

      // Prepare payload for SheetDB
      const payload = {
        data: {
          email: formData.email,
          website_url: formData.website_url,
          requested_at: new Date().toISOString(),
        },
      };

      // Submit to SheetDB
      const res = await fetch("https://sheetdb.io/api/v1/6y0ilhmev30cb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        toast.success("🎉 Audit request submitted successfully! Our team will get back to you within 24hrs. Thank you!");
        setFormData({ email: "", website_url: "" });
      } else {
        const errorData = await res.json();
        console.error("SheetDB error:", errorData);
        toast.error("⚠️ Failed to submit request. Check console.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      toast.error("⚠️ Failed to submit request. Try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="bg-[#1E293B] py-8 text-white relative overflow-hidden">
      <div className="max-w-8xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Scrolling Marquee */}
          <div className="overflow-hidden whitespace-nowrap bg-[#1E293B] py-6 w-full">
            <motion.div
              className="inline-block"
              initial={{ x: "0%" }}
              animate={{ x: "-50%" }}
              transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            >
              <span className="text-2xl font-bold text-white mr-8">
                Get Free Website Page Review Now!!! &nbsp; Get Free Website Page Review Now!!! &nbsp; Get Free Website Page Review Now!!!
              </span>
              <span className="text-2xl font-bold text-white mr-8">
                Get Free Website Page Review Now!!! &nbsp; Get Free Website Page Review Now!!! &nbsp; Get Free Website Page Review Now!!!
              </span>
            </motion.div>
          </div>

          {/* Audit Form */}
          <form
            className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              required
              className="px-4 py-3 rounded-lg text-gray-900 w-full md:w-72 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
            <input
              type="text"
              name="website_url"
              value={formData.website_url}
              onChange={handleChange}
              placeholder="Enter Website URL"
              required
              className="px-4 py-3 rounded-lg text-gray-900 w-full md:w-72 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
            <button
              type="submit"
              disabled={sending}
              className="bg-emerald-500 text-[#F9FAFB] px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition whitespace-nowrap"
            >
              {sending ? "Sending..." : "Get Audit"}
            </button>
          </form>
        </div>

        {error && (
          <p className="text-red-200 mt-4 text-center md:text-left">{error}</p>
        )}
      </div>
    </section>
  );
};
// Home Page
const Home = () => {
  

  const features = [
    {
      title: "Fast Delivery",
      desc: "We ensure your projects are completed on time, every time.",
      img: fastImage,
    },
    {
      title: "Shopify Experts",
      desc: "Certified developers ready to take your store to the next level.",
      img: ourexpertImage,
    },
    {
      title: "Clean, Modern Code",
      desc: "We write scalable, maintainable code that performs perfectly.",
      img: cleancodeImage,
    },
  ];

  return (
    <div className="pt-0 space-y-0 bg-gray-50 text-slate-800">
      {/* Hero Banner */}
      <section
        className="relative h-[70vh] bg-cover bg-center text-white flex items-center justify-center"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10 text-center px-6 pt-24">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Welcome to Cloudhouse247
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl mb-8"
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
              className="bg-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-600 transition"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Free Audit Section */}
      <AuditBanner />

      {/* Partners */}
      <div className="py-16">
      <PartnerLogos />  

      </div>

      {/* Services */}
      <section className="px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Our Services</h2>
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
              <h3 className="text-xl font-semibold text-emerald-600 mb-2">
                {item.title}
              </h3>
              <p className="text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        {/* Mobile Swiper */}
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
                  <h3 className="text-xl font-semibold text-emerald-600 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm">{item.desc}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Partners again */}

      <div className="py-16">
      <PartnerLogos />

      </div>

{/* === Features Section with Slideshow (your original design kept) === */}
<section className="bg-slate-800 text-white py-16 px-6">
  <h2 className="text-3xl font-bold text-center mb-10">
    Why Choose Cloudhouse247?
  </h2>

  {/* Desktop Grid */}
  <div className="hidden md:grid max-w-5xl mx-auto md:grid-cols-3 gap-8 text-center">
    {features.map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.2 }}
        className="bg-[#F3F4F6] text-slate-800 rounded-xl p-6 shadow-lg"
      >
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-48 object-contain rounded-xl mb-4"
        />
        <p className="text-lg text-slate-800 font-medium">{item.title}</p>
        <p className="text-sm text-slate-800">{item.desc}</p>
      </motion.div>
    ))}
  </div>

  {/* Mobile Swiper */}
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
            className="bg-[#F3F4F6] text-slate-800 rounded-xl p-6 shadow-lg"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-contain rounded-xl mb-4"
            />
            <p className="text-lg text-slate-800 font-medium">{item.title}</p>
            <p className="text-sm text-slate-800">{item.desc}</p>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

  {/* === New Sub-Section === */}
  <div className="max-w-5xl mx-auto mt-16 grid md:grid-cols-3 gap-8 text-center">
    {[
      {
        title: "5+ Years of Industry Expertise",
        desc: "We've gained deep insights and hands-on experience in delivering high-quality solutions tailored to our clients' unique needs. Our proven track record reflects our commitment to excellence and continuous growth in a competitive digital landscape.",
      },
      {
        title: "150+ Successful Projects Delivered",
        desc: "We’ve worked with businesses of all sizes to help them grow and succeed through expert Shopify solutions.",
      },
      {
        title: "Serving Clients in 27+ Countries",
        desc: "Businesses around the world trust us to deliver custom Shopify solutions tailored to a wide range of markets and industries.",
      },
    ].map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.2 }}
        className="bg-[#1E293B] text-white rounded-xl p-8 shadow-lg"
      >
        <p className="text-xl font-bold mb-4">{item.title}</p>
        <p className="text-sm text-gray-300">{item.desc}</p>
      </motion.div>
    ))}
  </div>
</section>



{/* CTA */}
<section className="px-6 py-20 bg-gray-50 text-center">
  <h2 className="text-3xl font-bold mb-6">
    Let’s Build Something Amazing Together
  </h2>
  <p className="text-lg mb-8">
    Ready to get started? We offer tailored solutions to suit your needs.
    Book a free consultation with us!
  </p>
  
  <div className="flex flex-col md:flex-row items-center justify-center gap-4">
    <Link
      to="/contact"
      className="bg-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-600 transition"
    >
      Book a Free Consultation
    </Link>

    <a
      href="https://calendly.com/cloudhouse-info24/30min"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-slate-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-slate-900 transition"
    >
      Book a Call
    </a>
  </div>
</section>

{/* Packages section */}

<section>
  <CloudhousePackages />
</section>

{/* Testimonials Section */}
<section className="bg-[#F3F4F6] px-6 py-16 mx-auto relative">
  <h2 className="text-3xl font-heading text-center font-bold mb-10">
    Client Testimonials
  </h2>
  <p className="text-lg mb-8 text-center">1,000s of Happy Customers don’t just take our word for it, see what our customers have to say</p>

  <div className="max-w-5xl mx-auto relative">
    <Swiper
      spaceBetween={24}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      navigation={{
        nextEl: ".swiper-button-next-custom",
        prevEl: ".swiper-button-prev-custom",
      }}
      breakpoints={{
        768: { slidesPerView: 2 },
      }}
      modules={[Autoplay, Navigation]}
      className="pb-12"
    >
      {testimonials.map((testi, i) => (
        <SwiperSlide key={i}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 h-full flex flex-col justify-between min-h-[320px]"
          >
            {/* Stars */}
            <div className="flex justify-center mb-4 text-emerald-500">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M12 .587l3.668 7.568L24 9.748l-6 5.857 1.417 8.26L12 19.771 4.583 23.865 6 15.605 0 9.748l8.332-1.593z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <p className="italic text-slate-700 mb-6 text-center flex-grow">
              "{testi.quote}"
            </p>

            {/* Name */}
            <p className="font-semibold text-emerald-600 text-center">
              - {testi.name}
            </p>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Custom Navigation Arrows */}
    {/* <button
      className="swiper-button-prev-custom absolute left-[-2.5rem] top-1/2 -translate-y-1/2 cursor-pointer text-emerald-500 hover:text-emerald-600 transition-colors z-10"
      aria-label="Previous testimonial"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </button> */}
{/* 
    <button
      className="swiper-button-next-custom absolute right-[-2.5rem] top-1/2 -translate-y-1/2 cursor-pointer text-emerald-500 hover:text-emerald-600 transition-colors z-10"
      aria-label="Next testimonial"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </button> */}
  </div>
</section>





{/* FAQ Accordion Section */}
  <section className="max-w-4xl mx-auto my-4 px-6 py-12">
  <h2 className="text-3xl font-heading text-center font-bold mb-10">
    Frequently Asked Questions
  </h2>

  <Accordion type="single" collapsible className="space-y-4">
    {faqs.map((item, i) => (
      <div key={i} question={item.question} answer={item.answer} />
    ))}
  </Accordion>
</section>

<div>
      <Footer />

</div>
    </div>
  );
};

export default Home;
