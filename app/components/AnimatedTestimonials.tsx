'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function AnimatedTestimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [studentIndex, setStudentIndex] = useState(0);
  const [parentIndex, setParentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Responsive breakpoint detection
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const studentTestimonials = [
    {
      type: "Student",
      icon: "👨‍⚕️",
      quote: "The hands-on training and internship prepared me perfectly for my career. I got placed at Apollo Dental with a great package. Thank you JKKN!",
      author: "Dr. Rahul Sharma",
      role: "BDS Graduate",
      rating: 5,
      bgColor: "bg-green-50",
      iconBg: "bg-green-500",
      clinicLogo: "/apollo-logo.svg"
    },
    {
      type: "Student",
      icon: "👩‍⚕️",
      quote: "The faculty here is exceptional. They guided me through every step of my dental journey. The practical exposure from day one made all the difference.",
      author: "Dr. Anjali Patel",
      role: "BDS Graduate",
      rating: 5,
      bgColor: "bg-pink-50",
      iconBg: "bg-pink-500",
      clinicLogo: "/clove-logo.svg"
    },
    {
      type: "Student",
      icon: "👨‍⚕️",
      quote: "JKKN's modern facilities and experienced faculty helped me excel in my studies. The placement support was outstanding - I got my dream job!",
      author: "Dr. Vikram Singh",
      role: "BDS Graduate",
      rating: 5,
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-500",
      clinicLogo: "/fortis-logo.svg"
    },
    {
      type: "Student",
      icon: "👩‍⚕️",
      quote: "The clinical rotations and patient interactions from the first year gave me real-world experience. I feel confident and ready for my dental practice.",
      author: "Dr. Meera Reddy",
      role: "BDS Graduate",
      rating: 5,
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-500",
      clinicLogo: "/dental-care-logo.svg"
    },
    {
      type: "Student",
      icon: "👨‍⚕️",
      quote: "The research opportunities and international collaborations at JKKN opened doors I never imagined. The mentorship program is truly exceptional.",
      author: "Dr. Arjun Mehta",
      role: "BDS Graduate",
      rating: 5,
      bgColor: "bg-teal-50",
      iconBg: "bg-teal-500",
      clinicLogo: "/dental-solutions-logo.svg"
    },
    {
      type: "Student",
      icon: "👩‍⚕️",
      quote: "From classroom learning to clinical practice, JKKN provided the perfect foundation. The alumni network helped me establish my own clinic successfully.",
      author: "Dr. Priya Desai",
      role: "BDS Graduate",
      rating: 5,
      bgColor: "bg-cyan-50",
      iconBg: "bg-cyan-500",
      clinicLogo: "/smile-studio-logo.svg"
    }
  ];

  const parentTestimonials = [
    {
      type: "Parent",
      icon: "👨‍👩‍👧‍👦",
      quote: "The clinical training from year 1 gave my daughter the confidence to handle real patients. The 200+ chair hospital facility is world-class. Highly recommended!",
      author: "Mrs. Priya Kumar",
      role: "Parent",
      rating: 5,
      bgColor: "bg-indigo-50",
      iconBg: "bg-indigo-500",
      clinicLogo: null
    },
    {
      type: "Parent",
      icon: "👨‍👩‍👦‍👦",
      quote: "My son's transformation from a nervous student to a confident dental professional is remarkable. JKKN's holistic approach to education is commendable.",
      author: "Mr. Rajesh Verma",
      role: "Parent",
      rating: 5,
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-500",
      clinicLogo: null
    },
    {
      type: "Parent",
      icon: "👨‍👩‍👧‍👦",
      quote: "As a parent, I was initially worried about my child's future. But JKKN's comprehensive curriculum and placement support have exceeded all expectations.",
      author: "Mrs. Sunita Patel",
      role: "Parent",
      rating: 5,
      bgColor: "bg-amber-50",
      iconBg: "bg-amber-500",
      clinicLogo: null
    },
    {
      type: "Parent",
      icon: "👨‍👩‍👦‍👦",
      quote: "The investment in my child's education at JKKN has been worth every penny. The practical training and industry connections are invaluable.",
      author: "Mr. Amit Shah",
      role: "Parent",
      rating: 5,
      bgColor: "bg-emerald-50",
      iconBg: "bg-emerald-500",
      clinicLogo: null
    }
  ];

  // Auto-scroll functionality for both columns
  useEffect(() => {
    if (!isInView || isPaused) return;

    const studentInterval = setInterval(() => {
      setStudentIndex((prev) => (prev + 1) % studentTestimonials.length);
    }, 6000); // Auto-scroll every 6 seconds

    const parentInterval = setInterval(() => {
      setParentIndex((prev) => (prev + 1) % parentTestimonials.length);
    }, 7000); // Auto-scroll every 7 seconds (slightly different timing)

    return () => {
      clearInterval(studentInterval);
      clearInterval(parentInterval);
    };
  }, [isInView, isPaused, studentTestimonials.length, parentTestimonials.length]);

  const currentStudent = studentTestimonials[studentIndex];
  const currentParent = parentTestimonials[parentIndex];

  return (
    <section className="py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-[#f0fdf4] relative overflow-hidden">
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
            radial-gradient(circle at 10% 20%, rgba(34, 197, 94, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, rgba(16, 185, 129, 0.03) 0%, transparent 50%)
          `
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8 md:mb-10"
        >
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            🎤 What Our Students & Parents Say
          </motion.h2>
        </motion.div>

        {/* Two Column Layout */}
        <motion.div
          className={`grid gap-4 sm:gap-6 lg:gap-8 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'}`}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
              }
            }
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Column - Student Testimonials */}
          <motion.div
            className="space-y-4"
            variants={{
              hidden: { x: -50, opacity: 0 },
              visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
            }}
          >
            <motion.div
              className="text-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-green-600 mb-2">Student Success Stories</h3>
              <p className="text-gray-600 text-sm md:text-base font-medium">Hear from our graduates about their journey</p>
            </motion.div>

            <motion.div
              key={`student-${studentIndex}`}
              className="group relative"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{
                y: isMobile ? -3 : -6,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div
                className={`${currentStudent.bgColor} rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
                whileHover={{
                  scale: isMobile ? 1.005 : 1.01,
                  boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)"
                }}
              >
                {/* Animated background pattern */}
                <motion.div
                  className="absolute inset-0 opacity-3"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundImage: `radial-gradient(circle at 20% 80%, ${currentStudent.iconBg.replace('bg-', '')} 0%, transparent 50%)`
                  }}
                />

                <div className="relative z-10">
                  {/* Clinic Logo - Top Right */}
                  {currentStudent.clinicLogo && (
                    <motion.div
                      className="absolute top-0 right-0"
                      initial={{ opacity: 0, scale: 0.8, x: 20 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <motion.div
                        className="w-16 h-8 sm:w-20 sm:h-10 bg-white rounded-lg shadow-md border border-gray-200 flex items-center justify-center p-1 sm:p-2 -mr-1 sm:-mr-2 -mt-1 sm:-mt-2"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <img
                          src={currentStudent.clinicLogo}
                          alt="Clinic Logo"
                          className="h-full w-auto object-contain"
                        />
                      </motion.div>
                    </motion.div>
                  )}

                  <div className="flex items-center gap-4 mb-5">
                    <motion.div
                      className={`w-12 h-12 sm:w-14 sm:h-14 ${currentStudent.iconBg} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md`}
                      whileHover={{
                        rotate: [0, -5, 5, 0],
                        scale: 1.05
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <span className="text-lg sm:text-xl">{currentStudent.icon}</span>
                    </motion.div>
                    <div>
                      <motion.h4
                        className="font-semibold text-gray-900 text-base sm:text-lg"
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        {currentStudent.type} Testimonial
                      </motion.h4>
                      <motion.div
                        className="flex text-yellow-400 mt-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        {[...Array(currentStudent.rating)].map((_, i) => (
                          <motion.span
                            key={i}
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: 0.5 + i * 0.08, duration: 0.4, ease: "backOut" }}
                            className="text-sm sm:text-base"
                          >
                            ★
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>
                  </div>

                  <motion.blockquote
                    className="text-gray-700 italic text-sm sm:text-base md:text-lg leading-relaxed mb-5 font-medium"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    "{currentStudent.quote}"
                  </motion.blockquote>

                  <motion.div
                    className="flex items-center justify-between"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-gray-900">{currentStudent.author}</p>
                      <p className="text-xs sm:text-sm text-gray-600 font-medium">{currentStudent.role}</p>
                    </div>
                    <motion.div
                      className="w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center shadow-sm"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="text-white text-xs sm:text-sm font-bold">"</span>
                    </motion.div>
                  </motion.div>

                  {/* Hover effect line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-0.5 ${currentStudent.iconBg} rounded-b-2xl sm:rounded-b-3xl`}
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Student Navigation */}
            <motion.div
              className="flex justify-center items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              {studentTestimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setStudentIndex(index)}
                  className={`w-1 h-1 md:w-2 md:h-2 rounded-full transition-all duration-300 ${
                    index === studentIndex ? 'bg-green-500 w-3 md:w-5' : 'bg-gray-300'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Parent Testimonials */}
          <motion.div
            className="space-y-4"
            variants={{
              hidden: { x: 50, opacity: 0 },
              visible: { x: 0, opacity: 1, transition: { duration: 0.6, delay: 0.1 } }
            }}
          >
            <motion.div
              className="text-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-2">Parent Perspectives</h3>
              <p className="text-gray-600 text-sm md:text-base font-medium">Trusted by parents for quality education</p>
            </motion.div>

            <motion.div
              key={`parent-${parentIndex}`}
              className="group relative"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{
                y: isMobile ? -3 : -6,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div
                className={`${currentParent.bgColor} rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
                whileHover={{
                  scale: isMobile ? 1.005 : 1.01,
                  boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)"
                }}
              >
                {/* Animated background pattern */}
                <motion.div
                  className="absolute inset-0 opacity-3"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundImage: `radial-gradient(circle at 20% 80%, ${currentParent.iconBg.replace('bg-', '')} 0%, transparent 50%)`
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-5">
                    <motion.div
                      className={`w-12 h-12 sm:w-14 sm:h-14 ${currentParent.iconBg} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md`}
                      whileHover={{
                        rotate: [0, -5, 5, 0],
                        scale: 1.05
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <span className="text-lg sm:text-xl">{currentParent.icon}</span>
                    </motion.div>
                    <div>
                      <motion.h4
                        className="font-semibold text-gray-900 text-base sm:text-lg"
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        {currentParent.type} Testimonial
                      </motion.h4>
                      <motion.div
                        className="flex text-yellow-400 mt-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        {[...Array(currentParent.rating)].map((_, i) => (
                          <motion.span
                            key={i}
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: 0.5 + i * 0.08, duration: 0.4, ease: "backOut" }}
                            className="text-sm sm:text-base"
                          >
                            ★
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>
                  </div>

                  <motion.blockquote
                    className="text-gray-700 italic text-sm sm:text-base md:text-lg leading-relaxed mb-5 font-medium"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    "{currentParent.quote}"
                  </motion.blockquote>

                  <motion.div
                    className="flex items-center justify-between"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-gray-900">{currentParent.author}</p>
                      <p className="text-xs sm:text-sm text-gray-600 font-medium">{currentParent.role}</p>
                    </div>
                    <motion.div
                      className="w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-sm"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="text-white text-xs sm:text-sm font-bold">"</span>
                    </motion.div>
                  </motion.div>

                  {/* Hover effect line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-0.5 ${currentParent.iconBg} rounded-b-2xl sm:rounded-b-3xl`}
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Parent Navigation */}
            <motion.div
              className="flex justify-center items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              {parentTestimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setParentIndex(index)}
                  className={`w-1 h-1 md:w-2 md:h-2 rounded-full transition-all duration-300 ${
                    index === parentIndex ? 'bg-indigo-500 w-3 md:w-5' : 'bg-gray-300'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Rating Section */}
        <motion.div
          className="text-center mt-8 sm:mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-4 bg-white px-8 sm:px-10 py-4 sm:py-5 rounded-full shadow-lg border border-gray-100"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
            }}
            transition={{ duration: 0.2 }}
          >
            <motion.span
              className="text-2xl sm:text-3xl"
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              ⭐
            </motion.span>
            <div>
              <span className="font-bold text-gray-900 text-lg sm:text-xl">4.8/5</span>
              <span className="text-gray-600 ml-2 text-sm sm:text-base font-medium">from 320+ reviews</span>
            </div>
          </motion.div>

          <motion.div
            className="mt-4 sm:mt-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <motion.button
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 sm:py-4 px-8 sm:px-10 rounded-xl shadow-lg transition-all duration-300 text-sm sm:text-base"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center justify-center gap-2">
                <motion.span
                  animate={{ rotate: [0, 3, -3, 0] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                >
                  🎬
                </motion.span>
                <span className="hidden sm:inline">Watch Full Testimonials & Reel Interviews</span>
                <span className="sm:hidden">Watch Testimonials</span>
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 