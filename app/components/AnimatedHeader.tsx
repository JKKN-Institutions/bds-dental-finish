'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function AnimatedHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // Close mobile menu first
    setIsMobileMenuOpen(false);
    
    // Add a small delay to ensure menu closes before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        // Get the current header height dynamically
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 80;
        const elementPosition = element.offsetTop - headerHeight - 20; // Add 20px buffer
        
        // Use try-catch for better error handling
        try {
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        } catch (error) {
          // Fallback for browsers that don't support smooth scrolling
          window.scrollTo(0, elementPosition);
        }
      } else {
        console.warn(`Section with id "${sectionId}" not found`);
        // Fallback: scroll to top if section not found
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 150); // Increased delay for better mobile experience
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Program', id: 'program' },
    { name: 'Faculty', id: 'faculty' },
    { name: 'Curriculum', id: 'curriculum' },
    { name: 'Career', id: 'career' },
    { name: 'Placements', id: 'placements' },
    { name: 'FAQs', id: 'faqs' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-green-100' 
          : 'bg-white/95 backdrop-blur-md shadow-lg border-b border-green-100'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <motion.button
            className="flex items-center space-x-2 sm:space-x-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            onClick={() => scrollToSection('home')}
          >
            <motion.div
              className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-600 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white text-lg sm:text-xl font-bold font-['Poppins']">🦷</span>
            </motion.div>
            <div>
              <motion.h1 
                className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 transition-colors duration-300 font-['Poppins']"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                JKKN
              </motion.h1>
              <motion.p 
                className="text-xs lg:text-sm text-gray-600 transition-colors duration-300 font-['Poppins']"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Dental College
              </motion.p>
            </div>
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-700 hover:bg-green-50 rounded-lg transition-all duration-200 relative group font-['Poppins']"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                {item.name}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                />
              </motion.button>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.button
            className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-green-600 to-yellow-600 hover:from-green-700 hover:to-yellow-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-['Poppins']"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('program')}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
          >
            <span>Apply Now</span>
            <motion.div
              className="w-4 h-4"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.div>
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
                            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-green-700 hover:bg-green-50 transition-colors duration-200 font-['Poppins']"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <motion.span
                className="w-5 h-0.5 bg-current rounded-full mb-1"
                animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="w-5 h-0.5 bg-current rounded-full mb-1"
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="w-5 h-0.5 bg-current rounded-full"
                animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="lg:hidden overflow-hidden"
          initial={{ height: 0 }}
          animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="py-4 space-y-2 border-t border-green-100">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                className="w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:text-green-700 hover:bg-green-50 rounded-lg transition-all duration-200 font-['Poppins']"
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: isMobileMenuOpen ? 0 : -20 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
              >
                {item.name}
              </motion.button>
            ))}
            <motion.button
              className="w-full mt-4 bg-gradient-to-r from-green-600 to-yellow-600 hover:from-green-700 hover:to-yellow-700 text-white px-4 py-3 rounded-lg font-medium text-sm transition-all duration-300 font-['Poppins']"
              onClick={() => scrollToSection('program')}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isMobileMenuOpen ? 1 : 0, scale: isMobileMenuOpen ? 1 : 0.9 }}
              transition={{ delay: 0.7, duration: 0.3 }}
            >
              Apply Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
} 