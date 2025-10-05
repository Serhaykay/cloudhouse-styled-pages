import { Link } from "react-router-dom";

import webImage from "../assets/images/tools.jpeg";
import expertImage from "../assets/images/shopify-expert.jpeg";
import EverythingImage from "../assets/images/everything.jpeg";
import stockimages from "../assets/images/stockimages.jpg";
import Shopifytheme from "../assets/images/Shopifytheme.jpg";
import appdev from "../assets/images/appdev.jpg";

// Add new faqs array
export const faqs = [
  {
    question: "Why choose Cloudhouse247?",
    answer: (
      <div className="space-y-3">
        <p>
          <strong>1. 5+ years of Industry Expertise:</strong> We’ve gained deep
          insights and hands-on experience in delivering high-quality solutions
          tailored to our clients' unique needs. Our proven track record
          reflects our commitment to excellence and continuous growth in a
          competitive digital landscape.
        </p>
        <p>
          <strong>2. 150+ Successful Projects Delivered:</strong> We’ve worked
          with businesses of all sizes to help them grow and succeed through
          expert Shopify solutions.
        </p>
        <p>
          <strong>3. Serving Clients in 27+ Countries:</strong> Businesses
          around the world trust us to deliver custom Shopify solutions tailored
          to a wide range of markets and industries.
        </p>
      </div>
    ),
  },
  {
    question: "Who Can Join Our Partner Program?",
    answer: (
      <p>
        Anyone! No coding or tech background required. If you know someone who
        needs help building or growing an online store, web development, SEO,
        and page optimization you can partner with us. Whether you're a business
        owner or individual, simply connect us to someone seeking eCommerce or
        marketing services—there's an opportunity for you.
      </p>
    ),
  },
  {
    question: "How can I become a partner?",
    answer: (
      <p>
        You only need to register with us as a partner{" "}
        <Link to="/contact" className="text-indigo-300 underline">
          here
        </Link>
        .
      </p>
    ),
  },
  {
    question: "How much would you pay for each project we do together?",
    answer:
      "It depends on the amount of the project, but our commission ranges from 20% to 30%.",
  },
  {
    question: "Do I need to do anything?",
    answer: "No, our team does all the heavy lifting.",
  },
  {
    question: "Do you pay me instantly?",
    answer:
      "You will receive your payment 30 days after the client officially starts working with us.",
  },
];

export const testimonials = [
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

export const services = [
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