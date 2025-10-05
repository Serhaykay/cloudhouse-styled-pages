import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import PartnerPage from './pages/PartnerPage.jsx';
import NewsletterPopup from './components/NewsletterPopup';
import { NotFoundPage } from './pages/NotFoundPage.jsx';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // you can change to 'auto' if you don’t want smooth scrolling
    });
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Router>
        {/* <Switch> */}
          <ScrollToTop />
          <div className="font-poppins">
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/services" element={<Services />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/portfolio" element={<Portfolio />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/blog" element={<Blog />} />
              <Route exact path="/blog/:slug" element={<BlogPost />} />
              <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route exact path="/terms-of-service" element={<TermsOfService />} />
              <Route exact path="/PartnerPage" element={<PartnerPage />} />
              {/* <Route path='/404' element={<NotFoundPage />} /> */}
              {/* <Redirect from="*" to="/404" /> */}
            </Routes>
            <WhatsAppButton />
            <NewsletterPopup />
          </div>

        {/* </Switch> */}
      </Router>
    </>
  );
};

export default App;

