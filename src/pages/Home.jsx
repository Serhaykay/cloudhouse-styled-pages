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
import stockimages from "../assets/images/stockimages.jpg";
import Shopifytheme from "../assets/images/Shopifytheme.jpg";
import appdev from "../assets/images/appdev.jpg";

const testimonials = [
  {
    name: 'Sarah L.',
    quote: 'Cloudhouse revamped our Shopify store in under a week. The old site was clunky and outdated, but now it feels modern, sleek, and so easy for our customers to use. The entire process was stress-free, and their team kept us updated every step of the way.'
  },
  {
    name: 'James A.',
    quote: 'Our site’s SEO improved dramatically within the first month. We went from barely appearing on Google to ranking on the first page for several keywords. The increase in organic traffic has been a huge win for our business. Highly recommend their service!'
  },
  {
    name: 'Olivia P.',
    quote: 'I had worked with two agencies before, and both overpromised and underdelivered. Cloudhouse was different. They listened, they asked the right questions, and they built us a clean, modern site that reflects our brand perfectly. Finally, I feel proud sending people to our website.'
  },
  {
    name: 'Daniel K.',
    quote: 'Excellent communication and lightning-fast delivery. I honestly thought building a website would take months, but they had everything ready in just a couple of weeks. I still can’t believe how smooth the process was—it felt like they read my mind.'
  },
  {
    name: 'Maya R.',
    quote: 'Our traffic doubled after the redesign. The new site loads instantly, works beautifully on mobile, and people stay longer. Customers have even told us they trust our business more now just because of how professional it looks. That’s priceless.'
  },
  {
    name: 'Tom W.',
    quote: 'We were in a desperate situation—our old site had crashed during a product launch, and we were losing sales by the hour. Cloudhouse stepped in, stabilized everything, and built us a new platform that’s bulletproof. They literally saved our business.'
  },
  {
    name: 'Alicia D.',
    quote: 'The team gave us a site that not only looks amazing but also loads super fast. Before, customers complained about pages taking forever; now we get comments about how smooth the experience feels. Our conversion rates jumped almost overnight.'
  },
  {
    name: 'Victor S.',
    quote: 'Professional, responsive, and creative. I’ve worked with a lot of freelancers and agencies, and Cloudhouse has been the easiest to deal with by far. They went above and beyond—even suggesting improvements I didn’t know I needed.'
  },
  {
    name: 'Emily C.',
    quote: 'The audit uncovered issues we didn’t even know about—broken links, slow-loading scripts, and missed SEO opportunities. After they fixed everything, we saw a 40% increase in inquiries within two weeks. That kind of impact is rare.'
  },
  {
    name: 'Ryan M.',
    quote: 'Cloudhouse is our go-to for all things web. Whenever we have a new campaign, a landing page, or a product launch, they handle it flawlessly. It feels like having an in-house team without the overhead.'
  },
  {
    name: 'Sophia G.',
    quote: 'They understood exactly what we needed. I was nervous because I’m not very technical, but they explained things so clearly and delivered a site that exceeded my expectations. My customers love it, and honestly, so do I!'
  },
  {
    name: 'Leo T.',
    quote: 'Affordable, reliable, and super skilled. I’ve recommended Cloudhouse to three friends already. Every time I log into my dashboard and see the sales coming in, I’m reminded this was the best investment I’ve made for my business.'
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
      img: stockimages,
    },
    {
      title: "App Development",
      desc: "We develop Mobile Apps for IOS and Android devices, and Web Apps",
      img: appdev,
    },
    {
      title: "Shopify Theme Set ups",
      desc: "We offer theme customizations, PageBuilder and Shopify custom sections restructuring, Bug fixing, and layout optimisation.",
      img: Shopifytheme,
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
            transition={{ duration: 0.1 }}
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

      <div className="py-16">
      <PartnerLogos />

      </div>

{/* === Features Section with Slideshow (your original design kept) === */}
<section className="bg-slate-800 text-white py-16 px-6">
  <h2 className="text-3xl font-bold text-center mb-10">
    Why Choose Cloudhouse?
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
<section className="bg-[#F3F4F6] px-6 py-16">
  <h2 className="text-3xl font-heading text-center font-bold mb-10">
    Client Testimonials
  </h2>

  {(() => {
    const [showAll, setShowAll] = React.useState(false);
    const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 4);

    return (
      <>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {visibleTestimonials.map((testi, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
            >
              <p className="italic mb-4">"{testi.quote}"</p>
              <p className="font-semibold text-[#5B3CC4]">- {testi.name}</p>
            </motion.div>
          ))}
        </div>

        {testimonials.length > 4 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 bg-[#5B3CC4] text-white font-semibold rounded-lg hover:bg-[#4629a3] transition"
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        )}
      </>
    );
  })()}
</section>


      <Footer />
    </div>
  );
};

export default Home;
