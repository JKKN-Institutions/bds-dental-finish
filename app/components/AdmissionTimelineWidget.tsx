'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AdmissionTimelineWidget() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timelineSteps = [
    {
      step: "NEET Results",
      help: "Add your NEET score and AIR.",
      button: "Upload/Enter Score",
      month: "June 2024",
      icon: "📊",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50"
    },
    {
      step: "Counselling Application",
      help: "Complete the online application.",
      button: "Apply Now",
      month: "July 2024",
      icon: "📝",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50"
    },
    {
      step: "Counselling Participation",
      help: "Lock your college preferences.",
      button: "Choose Preferences",
      month: "July 2024",
      icon: "🎯",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      step: "Counselling Allotment",
      help: "View seat allotment status.",
      button: "Check Allotment",
      month: "August 2024",
      icon: "✅",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50"
    },
    {
      step: "Reporting College",
      help: "Report to campus as per schedule.",
      button: "Report to College",
      month: "August 2024",
      icon: "🏫",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50"
    },
    {
      step: "Fees Payment",
      help: "Pay fees to confirm your seat.",
      button: "Pay Fees",
      month: "August 2024",
      icon: "💳",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50"
    },
    {
      step: "Documents Verification",
      help: "Get originals verified.",
      button: "Verify Documents",
      month: "September 2024",
      icon: "📋",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      step: "Commencement of Class",
      help: "Classes begin—welcome!",
      button: "Start Classes",
      month: "September 2024",
      icon: "🎓",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50"
    }
  ];

  return (
    <section className="py-3 sm:py-4 md:py-6 px-4 bg-[#f0fdf4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4 sm:mb-6"
        >
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 font-['Poppins']"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            ⏳ Admission Timeline
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-['Poppins']"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Your step-by-step guide to the admission process.
          </motion.p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
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
            {/* Timeline Line */}
            <motion.div
              className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-200 via-yellow-200 to-green-200 rounded-full"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 0.8, duration: 1.2 }}
              style={{ transformOrigin: "left" }}
            />

                         {/* Timeline Steps */}
             <div className="relative grid grid-cols-8 gap-1 items-end">
               {timelineSteps.map((item, index) => (
                 <motion.div
                   key={index}
                   className="relative flex flex-col items-center justify-end"
                   variants={{
                     hidden: { 
                       y: 50, 
                       opacity: 0,
                       scale: 0.8
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
                   {/* Step Card */}
                   <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden mb-2 w-full h-40">
                     {/* Hover effect overlay */}
                     <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                     
                     <div className="relative p-3 text-center h-full flex flex-col justify-center items-center">
                       {/* Icon Container */}
                       <div className="flex-shrink-0 mb-2">
                         <div className={`w-10 h-10 mx-auto rounded-lg ${item.bgColor} flex items-center justify-center text-lg shadow-lg`}>
                           {item.icon}
                         </div>
                       </div>

                       {/* Content Container */}
                       <div className="flex flex-col items-center space-y-1 flex-1 justify-center">
                         {/* Step Title */}
                         <h3 className="text-sm font-bold text-gray-900 leading-tight text-center w-full">
                           {item.step}
                         </h3>

                         {/* Help Text */}
                         <p className="text-[10px] text-gray-600 leading-tight text-center w-full">
                           {item.help}
                         </p>
                       </div>

                       {/* Month Container */}
                       <div className="flex-shrink-0 mt-auto">
                         <p className="text-xs text-gray-500 font-medium text-center w-full">
                           {item.month}
                         </p>
                       </div>
                     </div>
                   </div>

                   {/* Animated Timeline Badge */}
                   <motion.div
                     className="relative flex justify-center"
                     initial={{ scale: 0 }}
                     animate={isInView ? { scale: 1 } : { scale: 0 }}
                     transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                     whileHover={{ scale: 1.2 }}
                   >
                    {/* Main Badge */}
                    <div className={`w-6 h-6 bg-gradient-to-r ${item.color} shadow-lg border-2 border-white rounded-full relative overflow-hidden`}>
                      {/* Animated pulse ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-white/30"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.7, 0, 0.7]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      
                      {/* Inner glow */}
                      <div className="absolute inset-1 bg-white/20 rounded-full"></div>
                      
                      {/* Center dot */}
                      <div className="absolute inset-2 bg-white rounded-full shadow-inner"></div>
                    </div>
                    
                    {/* Floating particles */}
                    <motion.div
                      className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full opacity-80"
                      animate={{
                        y: [0, -3, 0],
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                    />
                    <motion.div
                      className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-green-400 rounded-full opacity-80"
                      animate={{
                        y: [0, 3, 0],
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2 + 0.5
                      }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden">
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
            {/* Vertical Timeline Line */}
            <motion.div
              className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-green-200 via-yellow-200 to-green-200 rounded-full"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ delay: 0.8, duration: 1.2 }}
              style={{ transformOrigin: "top" }}
            />

                         {/* Timeline Steps */}
             <div className="relative space-y-3">
               {timelineSteps.map((item, index) => (
                 <motion.div
                   key={index}
                   className="relative flex items-center gap-4"
                   variants={{
                     hidden: { 
                       x: -50, 
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
                     x: 8,
                     transition: { duration: 0.3 }
                   }}
                 >
                   {/* Animated Timeline Badge */}
                   <motion.div
                     className="relative flex-shrink-0 flex items-center justify-center"
                     initial={{ scale: 0 }}
                     animate={isInView ? { scale: 1 } : { scale: 0 }}
                     transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                     whileHover={{ scale: 1.1 }}
                   >
                    {/* Main Badge */}
                    <div className={`w-12 h-12 bg-gradient-to-r ${item.color} shadow-xl border-3 border-white rounded-full relative overflow-hidden flex items-center justify-center`}>
                      {/* Animated pulse ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-white/40"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.6, 0, 0.6]
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      
                      {/* Second pulse ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full border border-white/20"
                        animate={{
                          scale: [1, 1.6, 1],
                          opacity: [0.4, 0, 0.4]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5
                        }}
                      />
                      
                      {/* Inner glow */}
                      <div className="absolute inset-2 bg-white/30 rounded-full"></div>
                      
                      {/* Icon */}
                      <span className="text-white text-base font-bold relative z-10 drop-shadow-sm">
                        {item.icon}
                      </span>
                    </div>
                    
                    {/* Floating particles */}
                    <motion.div
                      className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-yellow-400 rounded-full opacity-90"
                      animate={{
                        y: [0, -4, 0],
                        x: [0, 2, 0],
                        opacity: [0.9, 1, 0.9]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3
                      }}
                    />
                    <motion.div
                      className="absolute -bottom-1 -left-1 w-2 h-2 bg-green-400 rounded-full opacity-90"
                      animate={{
                        y: [0, 4, 0],
                        x: [0, -2, 0],
                        opacity: [0.9, 1, 0.9]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3 + 0.7
                      }}
                    />
                    
                    {/* Corner accent */}
                    <motion.div
                      className="absolute top-0 right-0 w-3 h-3 bg-gradient-to-br from-white/60 to-transparent rounded-bl-full"
                      animate={{
                        opacity: [0.6, 0.9, 0.6]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>

                  {/* Step Card */}
                  <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden flex-1 h-28">
                    {/* Hover effect overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    <div className="relative p-3 h-full flex flex-col justify-center text-center items-center">
                      {/* Content Container */}
                      <div className="flex flex-col items-center space-y-1 flex-1 justify-center">
                        {/* Step Title */}
                        <h3 className="text-sm font-bold text-gray-900 text-center w-full">
                          {item.step}
                        </h3>

                        {/* Help Text */}
                        <p className="text-xs text-gray-600 text-center w-full">
                          {item.help}
                        </p>
                      </div>

                      {/* Month Container */}
                      <div className="flex-shrink-0 mt-auto">
                        <p className="text-xs text-gray-500 font-medium text-center w-full">
                          {item.month}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
