'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import Image from 'next/image';

export default function PlacementCompaniesGrid() {
  const ref = useRef(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Auto-scroll functionality
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollInterval: NodeJS.Timeout;
    
    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += 1;
        }
             }, 20); // Adjust speed here (lower = faster)
    };

    const stopAutoScroll = () => {
      clearInterval(scrollInterval);
    };

    // Start auto-scroll when component is in view
    if (isInView) {
      startAutoScroll();
    }

    // Pause on hover
    scrollContainer.addEventListener('mouseenter', stopAutoScroll);
    scrollContainer.addEventListener('mouseleave', startAutoScroll);

    return () => {
      clearInterval(scrollInterval);
      scrollContainer.removeEventListener('mouseenter', stopAutoScroll);
      scrollContainer.removeEventListener('mouseleave', startAutoScroll);
    };
  }, [isInView]);

  const companies = [
    {
      company: "Apollo Dental Chain",
      placed: 12,
      logo: "/images/alumini/apollo.jfif",
      officialLogo: "/images/alumini/apollo.jfif",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      type: "Private Chain"
    },
    {
      company: "Clove Dental",
      placed: 8,
      logo: "/images/alumini/clove.png",
      officialLogo: "/images/alumini/clove.png",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      type: "Dental Chain"
    },
    {
      company: "Fortis Healthcare",
      placed: 6,
      logo: "/images/alumini/Fortis.jpg",
      officialLogo: "/images/alumini/Fortis.jpg",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
      type: "Multi-Specialty"
    },
    {
      company: "Government PHCs",
      placed: 15,
      logo: "/images/alumini/gvmt.jpg",
      officialLogo: "/images/alumini/gvmt.jpg",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      type: "Public Sector"
    },
    {
      company: "Smile Studio",
      placed: 9,
      logo: "/public/smile-studio-logo.svg",
      officialLogo: "/public/smile-studio-logo.svg",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      type: "Dental Clinic"
    },
    {
      company: "Dental Care Solutions",
      placed: 7,
      logo: "/public/dental-care-logo.svg",
      officialLogo: "/public/dental-care-logo.svg",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      type: "Dental Solutions"
    },
    {
      company: "Dental Solutions Pvt Ltd",
      placed: 11,
      logo: "/public/dental-solutions-logo.svg",
      officialLogo: "/public/dental-solutions-logo.svg",
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      type: "Private Practice"
    },
    {
      company: "Private Dental Clinics",
      placed: 18,
      logo: "/public/dental-icon.svg",
      officialLogo: "/public/dental-icon.svg",
      color: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-50",
      type: "Private Clinics"
    },
    {
      company: "Corporate Hospitals",
      placed: 5,
      logo: "/public/hospital-icon.svg",
      officialLogo: "/public/hospital-icon.svg",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      type: "Corporate"
    },
    {
      company: "International Clinics",
      placed: 4,
      logo: "/public/globe.svg",
      officialLogo: "/public/globe.svg",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
      type: "International"
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 bg-white relative overflow-hidden">
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      {/* Background decoration */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.03) 0%, transparent 50%)
          `
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          {/* Salary Range Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 font-['Poppins']"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            title="CTC range for recent cohorts"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
            ₹3.5–8 LPA
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-['Poppins']"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Placement Companies
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-['Poppins']"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Our students are placed across reputed healthcare organizations.
          </motion.p>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mt-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />
        </motion.div>

        {/* Companies Horizontal Scroll */}
        <motion.div
          className="relative"
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
          {/* Scroll Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4"
          >
            {companies.map((company, index) => (
              <motion.div
                key={company.company}
                className="group relative flex-shrink-0"
                variants={{
                  hidden: { 
                    x: 50, 
                    opacity: 0,
                    scale: 0.95
                  },
                  visible: {
                    x: 0,
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
                <div className="relative bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden w-64 sm:w-72">
                  {/* Hover effect overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${company.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative p-4 sm:p-6">
                     {/* Official Logo Container */}
                     <div className="flex items-center justify-center mb-4">
                       <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shadow-lg border-2 border-white bg-white">
                         <Image
                           src={company.officialLogo}
                           alt={`${company.company} official logo`}
                           fill
                           className="object-contain p-2"
                           sizes="(max-width: 640px) 64px, 80px"
                         />
                         {/* Official Badge */}
                         <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-md">
                           <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                             <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                           </svg>
                         </div>
                       </div>
                     </div>

                     {/* Company Info */}
                     <div className="text-center">
                       <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300 line-clamp-2">
                         {company.company}
                       </h3>
                       
                       {/* Company Type Badge */}
                       <div className="mb-2">
                         <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${company.color} text-white`}>
                           {company.type}
                         </span>
                       </div>
                       
                       {/* Official Partner Badge */}
                       <div className="flex items-center justify-center gap-1">
                         <div className="flex items-center gap-1 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 px-2 py-1 rounded-full text-xs font-semibold border border-green-200">
                           <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                           </svg>
                           <span>Official Partner</span>
                         </div>
                       </div>
                     </div>

                    {/* Bottom accent line */}
                    <motion.div
                      className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${company.color} rounded-b-xl`}
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <motion.div
              className="w-2 h-2 bg-indigo-600 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 sm:mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Updated placement data for 2024</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
