import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Footer from "../components/Footer";
import emailjs from 'emailjs-com';


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
import webImage from "../assets/images/tools.jpeg";
import expertImage from "../assets/images/shopify-expert.jpeg";
import EverythingImage from "../assets/images/everything.jpeg";
import fastImage from "../assets/images/faster.png";
import ourexpertImage from "../assets/images/ourexpert.png";
import cleancodeImage from "../assets/images/CleanCode.png";

// Partner logos marquee
const PartnerLogos = () => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Our Partners</h2>

      <div className="overflow-hidden max-w-5xl mx-auto">
        <motion.div
          className="flex space-x-12"
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {/* First set */}
          {[
            upworkImage,
            fiverrImage,
            shopifyImage,
            freelancerImage,
            wordpressImage,
            wooImage,
            gemImage,
            reploImage,
            pageflyImage,
          ].map((logo, i) => (
            <img key={i} src={logo} alt="Partner" className="h-12 mx-6" />
          ))}

          {/* Duplicate set for seamless loop */}
          {[
            upworkImage,
            fiverrImage,
            shopifyImage,
            freelancerImage,
            wordpressImage,
            wooImage,
            gemImage,
            reploImage,
            pageflyImage,
          ].map((logo, i) => (
            <img key={`dup-${i}`} src={logo} alt="Partner" className="h-12 mx-6" />
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);


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

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate URL
    const urlPattern = /^(https?:\/\/)/i;
    if (!urlPattern.test(formData.website_url)) {
      setError("Please enter a valid URL starting with http:// or https://");
      return;
    }

    setError("");
    setSending(true);

    // Payload must match template variables: {{email}}, {{website_url}}, {{time}}
    const payload = {
      user_email: formData.email,
      website_url: formData.website_url,
      user_name: "Website Audit Request",
      title: formData.website_url,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        "service_4vgij7w", 
        "template_c4t22nd", 
        payload,
        "L1n6Ev9Xt5gNmQkrD" 
      )
      .then(() => {
        toast.success("Audit request sent successfully!");
        setFormData({ email: "", website_url: "" });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        toast.error("Failed to send audit request. Please try again later.");
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <section className="bg-[#1E293B] py-8 text-white relative overflow-hidden">
      <div className="max-w-8xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Scrolling Marquee */}
          <div className="overflow-hidden whitespace-nowrap bg-[#1E293B] py-6">
            <motion.div
              className="inline-block"
              initial={{ x: "0%" }}
              animate={{ x: "-50%" }}
              transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            >
             <span className="text-2xl font-bold text-white mr-8">
              Get Free Website Page Review Now!!! &nbsp; Get Free Website Page Review Now!!! &nbsp;
              Get Free Website Page Review Now!!! &nbsp; Get Free Website Page Review Now!!! &nbsp;
              Get Free Website Page Review Now!!!
            </span>
            <span className="text-2xl font-bold text-white mr-8">
              Get Free Website Page Review Now!!! &nbsp; Get Free Website Page Review Now!!! &nbsp;
              Get Free Website Page Review Now!!! &nbsp; Get Free Website Page Review Now!!! &nbsp;
              Get Free Website Page Review Now!!!
            </span>
            </motion.div>
          </div>

          {/* Form */}
          <form
            className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              name="email" // ✅ matches {{user_email}}
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              required
              className="px-4 py-3 rounded-lg text-gray-900 w-full md:w-72 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
            <input
              type="text"
              name="website_url" // ✅ matches {{website_url}}
              value={formData.website_url}
              onChange={handleChange}
              placeholder="Enter Website URL"
              required
              className="px-4 py-3 rounded-lg text-gray-900 w-full md:w-72 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
            <button
              type="submit"
              disabled={sending}
              className="bg-emerald-500 text-[#F9FAFB] px-6 py-3 rounded-lg font-semibold hover:bg-indigo-100 transition whitespace-nowrap"
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
  const services = [
    {
      title: "Web Development",
      desc: "Modern websites built with React, Tailwind, and more.",
      img: webImage,
    },
    {
      title: "Shopify Integration",
      desc: "Custom Shopify app setup and seamless store configuration.",
      img: expertImage,
    },
    {
      title: "Bug Fixing & Support",
      desc: "We handle store issues quickly and professionally.",
      img: EverythingImage,
    },
    {
      title: "Page Optimization",
      desc: "We fix Page Speed and Alt Image issues really Quick and Effectively",
      img: EverythingImage,
    },
    {
      title: "App Development",
      desc: "We develop Mobile Apps for IOS and Android devices, and Web Apps",
      img: EverythingImage,
    },
    {
      title: "Shopify Theme Set ups",
      desc: "We offer theme customizations, PageBuilder and Shopify custom sections restructuring, Bug fixing, and layout optimisation.",
      img: EverythingImage,
    },
  ];

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
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Welcome to Cloudhouse
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
      <PartnerLogos />

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
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
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
                  <h3 className="text-xl font-semibold text-indigo-600 mb-2">
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
      <PartnerLogos />

      {/* Features */}
      <section className="bg-slate-800 text-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Cloudhouse?
        </h2>
        <div className="hidden md:grid max-w-5xl mx-auto md:grid-cols-3 gap-8 text-center">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-indigo-600 rounded-xl p-6 shadow-lg"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <p className="text-lg font-medium">{item.title}</p>
              <p className="text-sm text-indigo-100">{item.desc}</p>
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
                  className="bg-indigo-600 rounded-xl p-6 shadow-lg"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <p className="text-lg font-medium">{item.title}</p>
                  <p className="text-sm text-indigo-100">{item.desc}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
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
        <Link
          to="/contact"
          className="bg-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-600 transition"
        >
          Book a Free Consultation
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
