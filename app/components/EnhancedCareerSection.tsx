'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CareerCard } from './EnhancedCards';

export default function EnhancedCareerSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const careers = [
    {
      role: "General Dentist",
      salary: "₹4-8 LPA",
      description: "Private practice or dental clinics with excellent growth potential",
      icon: "🦷",
      bgColor: "bg-gradient-to-br from-green-400 to-green-500"
    },
    {
      role: "Maxillofacial Surgeon",
      salary: "₹6-12 LPA",
      description: "Hospitals and medical centers with specialized surgical procedures",
      icon: "🏥",
      bgColor: "bg-gradient-to-br from-green-400 to-green-500"
    },
    {
      role: "Orthodontist",
      salary: "₹8-15 LPA",
      description: "Specialized teeth alignment and corrective procedures",
      icon: "🦿",
      bgColor: "bg-gradient-to-br from-green-400 to-green-500"
    },
    {
      role: "Endodontist",
      salary: "₹7-14 LPA",
      description: "Root canal specialist with advanced endodontic procedures",
      icon: "🔬",
      bgColor: "bg-gradient-to-br from-green-400 to-green-500"
    },
    {
      role: "Periodontist",
      salary: "₹5-10 LPA",
      description: "Gum disease specialist with periodontal treatments",
      icon: "🩺",
      bgColor: "bg-gradient-to-br from-green-400 to-green-500"
    },
    {
      role: "Prosthodontist",
      salary: "₹5-10 LPA",
      description: "Corporate dental chains with management opportunities",
      icon: "💼",
      bgColor: "bg-gradient-to-br from-green-400 to-green-500"
    }
  ];

  return (
    <section className="py-6 px-6 bg-[#f0fdf4] relative overflow-hidden">
      {/* Ultra-crisp background pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M30 30c0 16.569-13.431 30-30 30s-30-13.431-30-30 13.431-30 30-30 30 13.431 30 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Ultra-crisp Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-8"
        >
          {/* Ultra-crisp title */}
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 font-poppins"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            🧭 Explore Your Career Path
          </motion.h2>
          
          {/* Ultra-crisp subtitle */}
          <motion.p
            className="text-lg text-gray-600 mt-4 max-w-4xl mx-auto leading-relaxed font-poppins"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Discover diverse career opportunities in dentistry with excellent growth potential, 
            competitive salaries, and professional advancement pathways
          </motion.p>
        </motion.div>

        {/* Ultra-crisp Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.4
              }
            }
          }}
        >
          {careers.map((career, index) => (
            <CareerCard
              key={index}
              role={career.role}
              salary={career.salary}
              description={career.description}
              icon={career.icon}
              bgColor={career.bgColor}
              delay={index * 0.06}
            />
          ))}
        </motion.div>

        {/* Ultra-crisp decorative elements */}
        <motion.div
          className="absolute top-20 right-20 w-4 h-4 bg-blue-400 rounded-full opacity-70"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-5 h-5 bg-purple-400 rounded-full opacity-50"
          animate={{
            y: [0, 20, 0],
            scale: [1, 0.7, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
} 