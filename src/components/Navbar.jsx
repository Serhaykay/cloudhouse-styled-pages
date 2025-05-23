import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/images/chlogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollDir, setScrollDir] = useState('up');
  const location = useLocation();

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Services', to: '/services' },
    { name: 'About', to: '/about' },
    { name: 'Portfolio', to: '/portfolio' },
    { name: 'Contact', to: '/contact' },
    { name: 'Blog', to: '/blog' },
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDir = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollDir('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDir('up');
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', updateScrollDir);
    return () => window.removeEventListener('scroll', updateScrollDir);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: scrollDir === 'down' ? '-100%' : '0%' }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className={`fixed top-4 left-4 right-4 z-50 mx-auto max-w-7xl transition-all duration-300 ${
          scrollDir === 'up' ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } ${
          window.scrollY > 50 || location.pathname !== '/'
            ? 'bg-white/90 backdrop-blur-md shadow-lg rounded-2xl text-[#1E293B]'
            : 'bg-transparent text-white'
        }`}
        
      >
        <div className="flex justify-between items-center px-4 py-3 md:py-4">
          <Link to="/">
            <img src={logo} alt="Cloudhouse" className="h-16 md:h-20 w-auto" />
          </Link>
          <div className="hidden md:flex gap-6 font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`hover:text-[#5B3CC4] transition-colors ${
                  location.pathname === link.to ? 'text-[#5B3CC4] font-semibold' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <button className="md:hidden text-3xl" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        </div>
      </motion.nav>

      {/* Mobile Slide-in */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-3/4 bg-[#1E293B] text-white z-40 p-6 md:hidden shadow-lg"
          >
            <button className="text-2xl mb-6" onClick={() => setIsOpen(false)}>✕</button>
            <div className="flex flex-col gap-6 text-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`hover:text-[#5B3CC4] ${
                    location.pathname === link.to ? 'text-[#5B3CC4] font-semibold' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
