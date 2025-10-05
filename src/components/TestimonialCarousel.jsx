import React, { useState, useRef, useEffect } from "react";
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

// TestimonialsCarousel component (drop this into your file)
export const TestimonialsCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  // once swiper instance + refs exist, attach the custom nav elements
  useEffect(() => {
    if (!swiperInstance) return;
    if (prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <section className="bg-[#F3F4F6] px-6 py-16 relative">
      <h2 className="text-3xl font-heading text-center font-bold mb-10">
        Client Testimonials
      </h2>

      <div className="max-w-5xl mx-auto relative">
        {/* Prev button - positioned outside container */}
        <button
          ref={prevRef}
          aria-label="Previous testimonial"
          className="hidden md:inline-flex absolute left-[-2.5rem] top-1/2 -translate-y-1/2 z-20 items-center justify-center text-emerald-500 hover:text-emerald-600 transition-colors p-2 rounded-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Next button - positioned outside container */}
        <button
          ref={nextRef}
          aria-label="Next testimonial"
          className="hidden md:inline-flex absolute right-[-2.5rem] top-1/2 -translate-y-1/2 z-20 items-center justify-center text-emerald-500 hover:text-emerald-600 transition-colors p-2 rounded-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        <Swiper
          onSwiper={setSwiperInstance}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          modules={[Autoplay, Navigation]}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          className="pb-12"
        >
          {testimonials.map((testi, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 h-full flex flex-col justify-between min-h-[320px]"
              >
                {/* Emerald stars */}
                <div className="flex justify-center mb-4 text-emerald-500" aria-hidden="true">
                  {[...Array(5)].map((_, idx) => (
                    <svg key={idx} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M12 .587l3.668 7.568L24 9.748l-6 5.857 1.417 8.26L12 19.771 4.583 23.865 6 15.605 0 9.748l8.332-1.593z" />
                    </svg>
                  ))}
                </div>

                {/* Quote (flex-grow keeps consistent height) */}
                <p className="italic text-slate-700 mb-6 text-center flex-grow">
                  "{testi.quote}"
                </p>

                {/* Name */}
                <p className="font-semibold text-emerald-600 text-center">- {testi.name}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Mobile: keep arrows hidden (swipe gestures) but show small clickable dots? 
            If you want arrows on mobile, remove "hidden md:inline-flex" on buttons above */}
      </div>
    </section>
  );
};
