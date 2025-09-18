import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Blog from './pages/blog.jsx';
import { Toaster } from 'react-hot-toast';
import BlogPost from './pages/blogPost.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import TermsOfService from './pages/TermsOfService.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';

const App = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Router>
        <div className="font-poppins">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
          <WhatsAppButton />
        </div>
      </Router>
    </>
  );
};

export default App;

