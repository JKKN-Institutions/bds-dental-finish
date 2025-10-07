'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const equipmentData = [
  {
    id: 1,
    name: "Advanced Dental Chair",
    description: "Learn on the latest ergonomic dental chairs used in top clinics worldwide",
    image: "/images/dental-chair.svg",
    benefit: "Hands-on experience with professional equipment",
    careerImpact: "Prepares you for real-world dental practice",
    icon: "🦷"
  },
  {
    id: 2,
    name: "High-Speed Handpiece",
    description: "Master precision drilling techniques with advanced handpieces",
    image: "/images/handpiece.svg",
    benefit: "Develop surgical precision and control",
    careerImpact: "Essential skill for all dental procedures",
    icon: "⚡"
  },
  {
    id: 3,
    name: "Intraoral Camera",
    description: "Learn digital imaging and patient communication techniques",
    image: "/images/intraoral-camera.svg",
    benefit: "Modern diagnostic and patient education skills",
    careerImpact: "High-demand skill in modern dental clinics",
    icon: "📷"
  },
  {
    id: 4,
    name: "Digital X-Ray Unit",
    description: "Train on radiation-free digital imaging systems",
    image: "/images/xray-unit.svg",
    benefit: "Safe, modern diagnostic techniques",
    careerImpact: "Industry-standard equipment experience",
    icon: "🔬"
  },
  {
    id: 5,
    name: "Ultrasonic Scaler",
    description: "Master advanced cleaning and periodontal procedures",
    image: "/images/ultrasonic-scaler.svg",
    benefit: "Learn non-invasive treatment methods",
    careerImpact: "Specialized skills for better job opportunities",
    icon: "🧹"
  },
  {
    id: 6,
    name: "LED Curing Light",
    description: "Practice modern restorative dentistry techniques",
    image: "/images/curing-light.svg",
    benefit: "Latest technology for perfect restorations",
    careerImpact: "Advanced skills for higher earning potential",
    icon: "💡"
  },
  {
    id: 7,
    name: "Dental Microscope",
    description: "Develop precision skills for complex procedures",
    image: "/images/microscope.svg",
    benefit: "Enhanced visualization for better outcomes",
    careerImpact: "Specialized expertise for premium positions",
    icon: "🔍"
  },
  {
    id: 8,
    name: "Autoclave Sterilizer",
    description: "Learn proper sterilization and safety protocols",
    image: "/images/autoclave.svg",
    benefit: "Essential safety and hygiene practices",
    careerImpact: "Compliance knowledge for professional practice",
    icon: "🛡️"
  },
  {
    id: 9,
    name: "3D Scanner",
    description: "Master digital dentistry and CAD/CAM technology",
    image: "/images/3d-scanner.svg",
    benefit: "Future-ready digital dentistry skills",
    careerImpact: "Cutting-edge expertise for top clinics",
    icon: "📐"
  },
  {
    id: 10,
    name: "Dental Laser",
    description: "Learn painless, advanced laser dentistry",
    image: "/images/dental-laser.svg",
    benefit: "Minimally invasive treatment techniques",
    careerImpact: "Premium skills for high-end practices",
    icon: "⚡"
  },
  {
    id: 11,
    name: "Endodontic Motor",
    description: "Master root canal procedures with precision",
    image: "/images/endodontic-motor.svg",
    benefit: "Specialized endodontic expertise",
    careerImpact: "High-demand specialty skills",
    icon: "🦷"
  },
  {
    id: 12,
    name: "Implant System",
    description: "Train on advanced implantology techniques",
    image: "/images/implant-system.svg",
    benefit: "Most lucrative dental specialty skills",
    careerImpact: "Premium career opportunities in implantology",
    icon: "🦴"
  }
];

const successStats = [
  { number: "₹3-6 LPA", label: "Starting Salary", icon: "💰" },
  { number: "97%", label: "Placement Rate", icon: "🎯" },
  { number: "200+", label: "Equipment Types", icon: "🔧" },
];

export default function DentalGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredEquipment, setHoveredEquipment] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % equipmentData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = 320;
      const scrollPosition = currentIndex * cardWidth;
      scrollRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  return (
    <section className="py-6 px-4 bg-[#f0fdf4] relative overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-slate-200/30 to-slate-300/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-gradient-to-br from-slate-200/20 to-slate-300/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-slate-100/40 to-slate-200/40 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Professional Header */}
          <div className="text-center mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-700 to-slate-800 text-white px-6 py-2 rounded-full text-sm font-medium mb-6 shadow-md font-['Poppins']"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
              Professional Dental Training
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 font-['Poppins']"
            >
              🦷 Advanced Dental Technology Training
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-4 font-['Poppins']"
            >
              Comprehensive training on state-of-the-art dental equipment used in leading clinics worldwide. 
              Develop the skills and expertise that define modern dental practice.
            </motion.p>

            {/* Crisp Success Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-4"
            >
              {successStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="group relative bg-white rounded-lg p-3 shadow-sm border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all duration-500 overflow-hidden"
                >
                  {/* Crisp Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-50 opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Crisp Border Glow */}
                  <div className="absolute inset-0 rounded-lg border border-slate-200/50 group-hover:border-slate-300/70 transition-all duration-500"></div>
                  
                  {/* Crisp Corner Accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 bg-gradient-to-br from-emerald-400/20 to-emerald-500/20 rounded-br-lg group-hover:from-emerald-400/30 group-hover:to-emerald-500/30 transition-all duration-500"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-gradient-to-br from-slate-300/20 to-slate-400/20 rounded-tl-lg group-hover:from-slate-300/30 group-hover:to-slate-400/30 transition-all duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    {/* Crisp Icon with Enhanced Styling */}
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg mb-2 group-hover:from-slate-200 group-hover:to-slate-300 group-hover:scale-110 transition-all duration-500 shadow-sm">
                      <span className="text-xl group-hover:scale-110 transition-transform duration-500">{stat.icon}</span>
                    </div>
                    
                    {/* Crisp Number with Enhanced Typography */}
                    <div className="text-lg md:text-xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-1 group-hover:from-slate-800 group-hover:via-slate-700 group-hover:to-slate-800 transition-all duration-500">
                      {stat.number}
                    </div>
                    
                    {/* Crisp Label with Enhanced Styling */}
                    <div className="text-xs font-semibold text-slate-600 group-hover:text-slate-700 transition-colors duration-500 tracking-wide uppercase">
                      {stat.label}
                    </div>
                  </div>
                  
                  {/* Crisp Hover Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover:from-white/5 group-hover:via-white/3 group-hover:to-white/8 transition-all duration-500 rounded-lg"></div>
                </motion.div>
              ))}
            </motion.div>
        </div>

          {/* Professional Equipment Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative"
          >
          <div 
            ref={scrollRef}
              className="grid grid-cols-2 md:flex md:gap-4 md:overflow-x-auto md:scrollbar-hide md:snap-x md:snap-mandatory pb-4 gap-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
              {equipmentData.map((equipment, index) => (
                <motion.div
                  key={equipment.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                  className="w-full md:flex-shrink-0 md:w-72 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden md:snap-center hover:shadow-lg transition-all duration-500"
                  onMouseEnter={() => setHoveredEquipment(equipment.id)}
                  onMouseLeave={() => setHoveredEquipment(null)}
                >
                  {/* Equipment Image */}
                  <div className="h-56 bg-gradient-to-br from-emerald-50 via-green-100 to-emerald-100 flex items-center justify-center relative overflow-hidden group">
                    {/* Premium Background Pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3),transparent_50%)]"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.2),transparent_50%)]"></div>
                    
                    {/* Geometric Background Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-200/30 to-emerald-300/40 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-green-200/25 to-green-300/35 rounded-full translate-y-12 -translate-x-12"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-emerald-200/20 to-emerald-300/30 rounded-full"></div>
                    
                    {/* Professional Equipment Icon */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-emerald-600/80 to-emerald-700/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-white text-xl shadow-xl border border-emerald-500/30 group-hover:scale-110 group-hover:bg-emerald-600/90 transition-all duration-500">
                      {equipment.icon}
                    </div>
                    
                    {/* Main Equipment Image with Premium Effects */}
                    <div className="relative z-10 transform group-hover:scale-110 transition-all duration-700">
                      <div className="relative">
                  <Image
                          src={equipment.image}
                          alt={equipment.name}
                    width={200}
                    height={200}
                          className="object-contain w-full h-full drop-shadow-2xl filter brightness-110 contrast-110 group-hover:brightness-125 group-hover:contrast-125 transition-all duration-500"
                        />
                        {/* Premium Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/30 to-emerald-300/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 scale-150"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-green-200/20 to-green-300/15 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 scale-125"></div>
                      </div>
                    </div>
                    
                    {/* Professional Accent Elements */}
                    <div className="absolute top-6 left-6 w-2.5 h-2.5 bg-emerald-500 rounded-full opacity-90 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 shadow-lg"></div>
                    <div className="absolute bottom-6 right-6 w-3 h-3 bg-emerald-400 rounded-full opacity-70 group-hover:opacity-90 group-hover:scale-125 transition-all duration-300 shadow-lg"></div>
                    <div className="absolute top-1/2 left-6 w-1.5 h-1.5 bg-emerald-300/80 rounded-full opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                    <div className="absolute top-1/2 right-6 w-1.5 h-1.5 bg-emerald-300/80 rounded-full opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                    
                    {/* Premium Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/0 via-emerald-300/0 to-emerald-200/0 group-hover:from-emerald-200/10 group-hover:via-emerald-300/8 group-hover:to-emerald-200/12 transition-all duration-500 rounded-t-2xl"></div>
                    
                    {/* Professional Border Glow */}
                    <div className="absolute inset-0 border border-emerald-300/30 group-hover:border-emerald-400/50 transition-all duration-500 rounded-t-2xl"></div>
                  </div>

                  {/* Equipment Info */}
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{equipment.name}</h3>
                    <p className="text-slate-600 text-xs mb-4 leading-relaxed">{equipment.description}</p>
                    
                    {/* Benefits */}
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <p className="text-xs text-slate-700 font-medium">{equipment.benefit}</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-slate-600 rounded-full mt-1.5 flex-shrink-0"></div>
                        <p className="text-xs text-slate-700 font-medium">{equipment.careerImpact}</p>
                      </div>
                </div>
              </div>
                </motion.div>
            ))}
          </div>

            {/* Elegant Navigation Arrows */}
          <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + equipmentData.length) % equipmentData.length)}
              className="hidden sm:block absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 z-10 border border-slate-200"
              aria-label="Previous equipment"
            >
              <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % equipmentData.length)}
              className="hidden sm:block absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 z-10 border border-slate-200"
              aria-label="Next equipment"
            >
              <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
} 