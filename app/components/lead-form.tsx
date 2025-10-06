'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    currentEducation: '',
    preferredCallTime: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Lead form submitted:', formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        currentEducation: '',
        preferredCallTime: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-2xl p-6 text-center shadow-lg"
      >
        <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-700 leading-relaxed">
          We've received your information. Our admission counselor will contact you within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[420px]">
        {/* Left Side - Professional Visual */}
        <div className="relative bg-gradient-to-br from-green-800 via-green-900 to-green-800 p-6 flex flex-col justify-center">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-6 left-6 w-16 h-16 border border-white rounded-full"></div>
            <div className="absolute bottom-12 right-6 w-12 h-12 border border-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-white rounded-full"></div>
          </div>

          {/* Professional Content */}
          <div className="relative z-10 text-white">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium mb-4 border border-white/20">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Professional Consultation
              </div>
              
              <h2 className="text-2xl lg:text-3xl font-bold mb-3 leading-tight">
                Advance Your Dental Career
              </h2>
              
              <p className="text-base text-slate-300 mb-6 leading-relaxed">
                Join our prestigious BDS program and become part of the next generation of dental professionals with world-class education and clinical training.
              </p>

              {/* Professional Features */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-200 font-medium text-sm">Accredited Dental Program</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-200 font-medium text-sm">Advanced Clinical Training</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-200 font-medium text-sm">Career Placement Support</span>
                </div>
              </div>          
            </div>
          </div>
        </div>

        {/* Right Side - Compact Form */}
        <div className="p-5 flex flex-col justify-center bg-gradient-to-br from-gray-50 to-white">
          <div className="text-center mb-5">
            <h3 className="text-lg font-bold text-gray-900 mb-1">
              Request Consultation
            </h3>
            <p className="text-gray-600 leading-relaxed text-xs">
              Get personalized guidance from our admission experts.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-sm"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-sm"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label htmlFor="currentEducation" className="block text-xs font-semibold text-gray-700 mb-1">
                Education Level *
              </label>
              <select
                id="currentEducation"
                name="currentEducation"
                required
                value={formData.currentEducation}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-sm"
              >
                <option value="">Select education level</option>
                <option value="12th">12th Standard</option>
                <option value="NEET">NEET Qualified</option>
                <option value="Graduate">Graduate</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="preferredCallTime" className="block text-xs font-semibold text-gray-700 mb-1">
                Preferred Call Time *
              </label>
              <select
                id="preferredCallTime"
                name="preferredCallTime"
                required
                value={formData.preferredCallTime}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-sm"
              >
                <option value="">Select preferred time</option>
                <option value="morning">Morning (9 AM - 12 PM)</option>
                <option value="afternoon">Afternoon (12 PM - 3 PM)</option>
                <option value="evening">Evening (3 PM - 6 PM)</option>
                
              </select>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              whileTap={{ 
                scale: 0.95,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
              }}
              animate={{
                boxShadow: isSubmitting ? "0 10px 15px -3px rgba(0, 0, 0, 0.1)" : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17,
                duration: 0.3
              }}
              className="relative w-full bg-gradient-to-r from-green-800 to-green-700 hover:from-green-900 hover:to-green-800 text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group text-sm"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-yellow-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              
              {/* Button content */}
              <div className="relative z-10 flex items-center justify-center">
                {isSubmitting ? (
                  <motion.div 
                    className="flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="animate-spin rounded-full h-3 w-3 border-b-2 border-white mr-2"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    <span>Processing...</span>
                  </motion.div>
                ) : (
                  <motion.div 
                    className="flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.span
                      animate={{ 
                        scale: [1, 1.05, 1],
                        opacity: [1, 0.8, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      Get Consultation
                    </motion.span>
                    <motion.svg 
                      className="w-3 h-3 ml-2"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </motion.svg>
                  </motion.div>
                )}
              </div>
            </motion.button>

            <p className="text-xs text-gray-500 text-center leading-relaxed">
              By submitting this form, you agree to receive communication from us regarding our BDS program.
            </p>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
