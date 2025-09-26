'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function FacilityExcellence() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('facility-excellence');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const facilities = [
    {
      title: "CLINICAL REALITY",
      icon: "🦷",
      metric: "500+",
      description: "Real patients daily",
      subtitle: "More practice than any Tamil Nadu college",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "TECH FLEX",
      icon: "🔬",
      metric: "₹5 Cr",
      description: "Latest equipment",
      subtitle: "CAD/CAM, 3D printing, Lasers included",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "HOSTEL LUXURY",
      icon: "🏠",
      metric: "AC",
      description: "All rooms",
      subtitle: "Netflix, gaming, personal study space",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "SAFETY FIRST",
      icon: "🔒",
      metric: "150+",
      description: "CCTV cameras",
      subtitle: "Biometric entry, 24/7 security",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "FOOD PARADISE",
      icon: "🍕",
      metric: "6+",
      description: "Cuisine options",
      subtitle: "Multi-cuisine + Swiggy/Zomato delivery",
      color: "from-yellow-500 to-amber-500"
    }
  ];

  return (
    <section id="facility-excellence" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Facility Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the advanced facilities that set JKKN Dental College apart from other institutions
          </p>
        </motion.div>

        {/* Facilities Cards - Fixed Alignment */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
        >
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.4 + index * 0.1, 
                ease: "easeOut",
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group relative h-full"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 h-full flex flex-col">
                {/* Top Section: Icon and Title */}
                <div className="text-center mb-4 flex-shrink-0">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${facility.color} flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <span className="text-2xl">{facility.icon}</span>
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-2 leading-tight">
                    {facility.title}
                  </h3>
                </div>

                {/* Middle Section: Metric */}
                <div className="text-center mb-4 flex-shrink-0">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {facility.metric}
                  </div>
                </div>

                {/* Bottom Section: Description */}
                <div className="text-center space-y-2 flex-grow flex flex-col justify-end">
                  <p className="text-sm font-medium text-gray-800 leading-tight">
                    {facility.description}
                  </p>
                  <p className="text-xs text-gray-500 leading-tight">
                    {facility.subtitle}
                  </p>
                </div>

                {/* Decorative accent */}
                <div className={`absolute top-0 right-0 w-4 h-4 bg-gradient-to-bl ${facility.color} opacity-20 rounded-bl-2xl`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group font-semibold">
            <span>Explore Our Campus</span>
            <svg 
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
