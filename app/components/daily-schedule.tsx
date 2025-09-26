'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function DailySchedule() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scheduleData = [{ time: "7 AM", activity: "Wake up in AC room" }, { time: "8 AM", activity: "Breakfast (6 options)" }, { time: "9 AM", activity: "Practice on phantom heads" }, { time: "11 AM", activity: "Real patient clinic" }, { time: "1 PM", activity: "Lunch at food court" }, { time: "3 PM", activity: "Digital dentistry lab" }, { time: "5 PM", activity: "Sports/Gym" }, { time: "7 PM", activity: "Wi-Fi study hall" }, { time: "9 PM", activity: "Dinner + Netflix" }, { time: "11 PM", activity: "Secure hostel" }];

  return (
    <section className="py-16 px-4 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            A Day in the Life
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Experience the structured and enriching daily routine of a JKKN Dental College student
          </motion.p>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {/* Main schedule container with blue gradient */}
          <div className="bg-gradient-to-b from-blue-500 to-blue-700 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
              {scheduleData.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-blue-400/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.8 }}
                  transition={{ 
                    delay: 0.8 + index * 0.1, 
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="text-white">
                    <div className="text-lg md:text-xl font-bold mb-2">
                      {item.time}
                    </div>
                    <div className="text-sm md:text-base font-medium leading-tight">
                      {item.activity}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Decorative elements */}
          <motion.div
            className="absolute -top-4 -left-4 w-8 h-8 bg-blue-300 rounded-full opacity-30"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-400 rounded-full opacity-30"
            animate={{
              scale: [1, 0.8, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Additional info section */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-4 bg-gray-50 rounded-2xl px-8 py-4 shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-700 font-medium">24/7 Security</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-gray-700 font-medium">Modern Facilities</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-gray-700 font-medium">Balanced Lifestyle</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
