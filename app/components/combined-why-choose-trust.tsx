'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function CombinedWhyChooseTrust() {
  const ref = useRef(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  const stats = [
    { number: "97%", label: "Placement Rate", icon: "🎯", color: "from-pink-500 to-rose-500" },
    { number: "₹5.2", suffix: "LPA", label: "Average Salary", icon: "💰", color: "from-yellow-500 to-orange-500" },
    { number: "250+", label: "Dental Chairs", icon: "🦷", color: "from-blue-500 to-cyan-500" },
    { number: "20+", label: "Years Experienced Faculty", icon: "🏆", color: "from-purple-500 to-pink-500" }
  ];

  const trustBadges = [
    {
      title: "NAAC Accredited",
      description: "NAAC Accredited with Grade A",
      icon: "🏆",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "DCI Recognized",
      description: "Dental Council of India",
      icon: "⚕️",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "ISO 9001:2015",
      description: "Quality Management System",
      icon: "✅",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "35+ Years Experience",
      description: "Established in 1987",
      icon: "📅",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "2000+ Alumni",
      description: "Successful Graduates",
      icon: "👥",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "100+ Faculty",
      description: "Expert Dental Professionals",
      icon: "👨‍⚕️",
      color: "from-red-500 to-pink-500"
    }
  ];

  const companies = [
    { name: "Apollo Hospitals", logo: "🏥", type: "Healthcare" },
    { name: "Clove Dental", logo: "🦷", type: "Dental Chain" },
    { name: "Fortis Healthcare", logo: "🏨", type: "Healthcare" },
    { name: "Government Hospitals", logo: "🏛️", type: "Public Sector" },
    { name: "Private Clinics", logo: "💼", type: "Private Practice" },
    { name: "Dental Chains", logo: "🏢", type: "Corporate" },
    { name: "32 Dental Care", logo: "🦷", type: "Dental Chain" },
    { name: "Opal", logo: "💎", type: "Dental Solutions" },
    { name: "Implant Tree International", logo: "🌳", type: "Implant Specialist" },
    { name: "Partha Dental", logo: "🦷", type: "Dental Care" },
    { name: "Community Health Officer", logo: "🏥", type: "Public Health" },
    { name: "Invisalign", logo: "😁", type: "Orthodontics" }
  ];

  // Auto-scroll functionality for companies
  useEffect(() => {
    if (!isInView || isHovered) return;

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
      }, 20);
    };

    const stopAutoScroll = () => {
      clearInterval(scrollInterval);
    };

    startAutoScroll();

    scrollContainer.addEventListener('mouseenter', stopAutoScroll);
    scrollContainer.addEventListener('mouseleave', startAutoScroll);
    scrollContainer.addEventListener('touchstart', stopAutoScroll);
    scrollContainer.addEventListener('touchend', startAutoScroll);

    return () => {
      clearInterval(scrollInterval);
      scrollContainer.removeEventListener('mouseenter', stopAutoScroll);
      scrollContainer.removeEventListener('mouseleave', startAutoScroll);
      scrollContainer.removeEventListener('touchstart', stopAutoScroll);
      scrollContainer.removeEventListener('touchend', startAutoScroll);
    };
  }, [isInView, isHovered]);

  return (
    <section className="py-8 px-4 bg-[#f0fdf4]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 font-['Poppins']">
            🏫 Why Choose & Trust JKKN Dental College?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm font-['Poppins']">
            Proven track record of excellence in dental education, career placement, and institutional credibility.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="mb-10">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl font-bold text-gray-900 text-center mb-6"
          >
            Our Achievements
          </motion.h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                className="bg-white rounded-lg p-4 text-center shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center text-xl`}>
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust Badges Section */}
        <div className="mb-10">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl font-bold text-gray-900 text-center mb-6"
          >
            Why Trust Us
          </motion.h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                className="bg-white rounded-lg p-3 text-center shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div className={`w-10 h-10 mx-auto mb-2 rounded-full bg-gradient-to-r ${badge.color} flex items-center justify-center text-lg`}>
                  {badge.icon}
                </div>
                <h4 className="text-xs font-semibold text-gray-900 mb-0.5">{badge.title}</h4>
                <p className="text-xs text-gray-600">{badge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Top Recruiters Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl font-bold text-gray-900 text-center mb-6"
          >
            Top Recruiters
          </motion.h3>
          
          <motion.div
            ref={scrollContainerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex gap-3 overflow-x-auto scrollbar-hide pb-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white rounded-lg p-3 shadow-lg border border-gray-200 min-w-[160px] text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-2xl mb-1">{company.logo}</div>
                <h4 className="font-semibold text-gray-900 text-sm mb-0.5">{company.name}</h4>
                <p className="text-xs text-gray-600">{company.type}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
