'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function EducationLoanPartners() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const partners = [
    {
      partner: "SBI Education Loan",
      interest: "7.5%",
      logo: "/images/alumini/gvmt.jpg", // Using existing image as placeholder
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      initials: "SBI"
    },
    {
      partner: "HDFC Credila",
      interest: "8.5%",
      logo: "/images/alumini/apollo.jfif", // Using existing image as placeholder
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      initials: "HDFC"
    },
    {
      partner: "Indian Bank",
      interest: "9%",
      logo: "/images/alumini/clove.png", // Using existing image as placeholder
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
      initials: "IB"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-green-50 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundImage: `
            radial-gradient(circle at 30% 70%, rgba(99, 102, 241, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 70% 30%, rgba(168, 85, 247, 0.05) 0%, transparent 50%)
          `
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Desktop Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="hidden md:block text-center mb-12 sm:mb-16"
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Education Loan Partners
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Trusted banking partners offering education loans to support your academic journey.
          </motion.p>

          {/* Pre-approved Loan Badge */}
          <motion.div
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full text-base font-semibold shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            title="Available for eligible students only"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Pre-approved loans up to ₹20 lakhs</span>
          </motion.div>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mt-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />
        </motion.div>

        {/* Mobile Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="md:hidden text-center mb-6"
        >
          <motion.h2
            className="text-2xl font-bold text-gray-900 mb-3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Education Loan Partners
          </motion.h2>

          <motion.p
            className="text-sm text-gray-600 max-w-lg mx-auto leading-relaxed mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Trusted banking partners offering education loans to support your academic journey.
          </motion.p>

          {/* Pre-approved Loan Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            title="Available for eligible students only"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Pre-approved loans up to ₹20 lakhs</span>
          </motion.div>

          <motion.div
            className="w-16 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mt-4"
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : { width: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
        </motion.div>

        {/* Desktop Partners Grid */}
        <motion.div
          className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
              }
            }
          }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.partner}
              className="group relative"
              variants={{
                hidden: { 
                  y: 50, 
                  opacity: 0,
                  scale: 0.95
                },
                visible: {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.5,
                    ease: "easeOut"
                  }
                }
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Hover effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative p-6 sm:p-8">
                  {/* Logo Container */}
                  <div className={`w-full h-20 sm:h-24 mb-6 rounded-xl ${partner.bgColor} flex items-center justify-center overflow-hidden`}>
                    <div className="relative w-full h-full">
                      <Image
                        src={partner.logo}
                        alt={`${partner.partner} logo`}
                        fill
                        className="object-contain p-2"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  </div>

                  {/* Partner Info */}
                  <div className="text-center">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                      {partner.partner}
                    </h3>
                    
                    <div className="flex items-center justify-center gap-2">
                      <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${partner.color} text-white px-4 py-2 rounded-full text-lg font-bold shadow-lg`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                        <span>{partner.interest} interest</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${partner.color} rounded-b-2xl`}
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Partners Grid */}
        <motion.div
          className="md:hidden grid grid-cols-1 gap-3"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1
              }
            }
          }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.partner}
              className="group relative"
              variants={{
                hidden: { 
                  y: 20, 
                  opacity: 0,
                  scale: 0.98
                },
                visible: {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut"
                  }
                }
              }}
              whileHover={{ 
                y: -2,
                transition: { duration: 0.2 }
              }}
            >
              <div className="relative bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden">
                {/* Hover effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative p-4">
                  {/* Logo Container */}
                  <div className={`w-full h-16 mb-3 rounded-lg ${partner.bgColor} flex items-center justify-center overflow-hidden`}>
                    <div className="relative w-full h-full">
                      <Image
                        src={partner.logo}
                        alt={`${partner.partner} logo`}
                        fill
                        className="object-contain p-1"
                        sizes="100vw"
                      />
                    </div>
                  </div>

                  {/* Partner Info */}
                  <div className="text-center">
                    <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                      {partner.partner}
                    </h3>
                    
                    <div className="flex items-center justify-center gap-1">
                      <div className={`inline-flex items-center gap-1 bg-gradient-to-r ${partner.color} text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-md`}>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                        <span>{partner.interest} interest</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${partner.color} rounded-b-xl`}
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Desktop Additional Info */}
        <motion.div
          className="hidden md:block mt-12 sm:mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-gray-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Quick approval process with minimal documentation</span>
          </div>
        </motion.div>

        {/* Mobile Additional Info */}
        <motion.div
          className="md:hidden mt-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-1.5 bg-white text-gray-700 px-3 py-1.5 rounded-full text-xs font-medium shadow-sm border border-gray-200">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Quick approval process with minimal documentation</span>
          </div>
        </motion.div>

        {/* Desktop Section Footer - Loan Assistance Details */}
        <motion.div
          className="hidden md:block mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.button
            className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-indigo-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              // Handle loan assistance details action
              console.log('Loan Assistance Details clicked');
              // You can add navigation or modal opening logic here
            }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Loan Assistance Details</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>

        {/* Mobile Section Footer - Loan Assistance Details */}
        <motion.div
          className="md:hidden mt-4 text-center"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <motion.button
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-102 focus:ring-2 focus:ring-indigo-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              // Handle loan assistance details action
              console.log('Loan Assistance Details clicked');
              // You can add navigation or modal opening logic here
            }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Loan Assistance Details</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
