'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function CampusFacilities() {

  const powerStats = [{ number: "250+", label: "DENTAL CHAIRS", sublabel: "1:1 RATIO" }, { number: "500+", label: "PATIENTS", sublabel: "DAILY" }, { number: "₹15 Cr", label: "INFRASTRUCTURE", sublabel: "INVESTMENT" }, { number: "24/7", label: "SUPPORT", sublabel: "AVAILABLE" }];



  const studentJourney = [{ time: "7 AM", activity: "Wake up in AC room" }, { time: "8 AM", activity: "Breakfast (3 options)" }, { time: "9 AM", activity: "Lecturer Hours" }, { time: "11 AM", activity: "Pre Clinical / Clinical Experience" }, { time: "1 PM", activity: "Lunch at food court" }, { time: "3 PM", activity: "College Over" }, { time: "5 PM", activity: "Sports/Gym" }, { time: "7 PM", activity: "Wi-Fi study hall" }, { time: "9 PM", activity: "Dinner" }];

  const parentConvincer = [{ category: "🏥 MEDICAL SAFETY", items: ["24/7 Emergency Support", "Ambulance ready", "First aid trained staff", "Tie-up with hospital"] }, { category: "🔒 SECURITY", items: ["Biometric entry", "120+ CCTV cameras", "Lady wardens", "Police patrol"] }, { category: "📞 CONNECTIVITY", items: ["Parent app updates", "Monthly meetings", "Visit anytime"] }, { category: "🍎 HEALTH", items: ["RO water", "Nutritionist menu", "Gym + Yoga", "No junk food"] }];

  return (
    <section className="pb-12 px-4 bg-[#f0fdf4] relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-100/40 to-green-50/60"></div>
        <div className="absolute top-16 right-16 w-48 h-48 bg-green-200/50 rounded-full blur-2xl"></div>
        <div className="absolute bottom-16 left-16 w-48 h-48 bg-green-100/50 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
                {/* Professional Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 mt-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 font-['Poppins']">
            🏛️ Our Campus Facilities
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-['Poppins']">
            Experience state-of-the-art facilities designed to provide the finest learning environment for dental education. 
            Our modern campus combines cutting-edge technology with comfortable spaces for academic excellence.
          </p>
        </motion.div>

        {/* Professional Statistics Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-green-100 via-green-50 to-green-100 rounded-2xl py-4 px-8 shadow-xl border border-green-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {powerStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-green-700 mb-1">{stat.number}</div>
                  <div className="text-xs font-semibold text-gray-700 mb-1 tracking-wide">{stat.label}</div>
                  <div className="text-xs text-gray-600 uppercase tracking-wider">{stat.sublabel}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Facility Excellence Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight">
              Facility Excellence
            </h3>
            <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover the advanced facilities that set JKKN Dental College apart from other institutions
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {[
              {
                title: "CLINICAL REALITY",
                icon: "🦷",
                metric: "500+",
                description: "Real patients daily",
                subtitle: "More practice than any Tamil Nadu college",
                color: "from-green-100/80 to-green-200/60"
              },
              {
                title: "TECH FLEX",
                icon: "🔬",
                metric: "₹5 Cr",
                                  description: "Latest equipment",
                  subtitle: "CAD/CAM, 3D printing, Lasers included",
                  color: "from-blue-100/80 to-blue-200/60"
              },
              {
                title: "HOSTEL LUXURY",
                icon: "🏠",
                metric: "AC",
                description: "Luxury Rooms",
                subtitle: " Personal study space",
                color: "from-purple-100/80 to-purple-200/60"
              },
              {
                title: "SAFETY FIRST",
                icon: "🔒",
                metric: "120+",
                description: "CCTV cameras",
                subtitle: "Biometric entry, 24/7 security",
                color: "from-red-100/80 to-red-200/60"
              },
              {
                title: "FOOD PARADISE",
                icon: "🍕",
                metric: "3+",
                description: "Cuisine options",
                subtitle: "Multi-cuisine + Swiggy/Zomato delivery",
                color: "from-yellow-100/80 to-yellow-200/60"
              }
            ].map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.4 + index * 0.1, 
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="group relative h-full"
              >
                <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 h-full flex flex-col">
                  {/* Top Section: Icon and Title */}
                  <div className="text-center mb-3 flex-shrink-0">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${facility.color} flex items-center justify-center mb-2 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <span className="text-xl">{facility.icon}</span>
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 mb-1 leading-tight">
                      {facility.title}
                    </h3>
                  </div>

                  {/* Middle Section: Metric */}
                  <div className="text-center mb-3 flex-shrink-0">
                    <div className="text-2xl font-bold bg-gradient-to-r from-green-500/80 to-yellow-500/80 bg-clip-text text-transparent">
                      {facility.metric}
                    </div>
                  </div>

                  {/* Bottom Section: Description */}
                  <div className="text-center space-y-1 flex-grow flex flex-col justify-end">
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
          </div>
        </motion.div>

        {/* Professional Parent Convincer Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Safety & Well-being
            </h3>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Comprehensive facilities ensuring the safety, health, and comfort of our students
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {parentConvincer.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md border border-gray-100 p-3 hover:shadow-lg transition-all duration-300"
              >
                <h4 className="font-bold text-gray-900 mb-2 text-center text-base">{category.category}</h4>
                <div className="space-y-1.5">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
            </motion.div>
          ))}
          </div>
        </motion.div>

        {/* Professional Student Journey */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mb-0"
        >
          <div className="text-center mb-4">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              A Day in the Life
            </h3>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Experience the perfect balance of academics, practice, and recreation in our modern campus
            </p>
          </div>
          
          <div className="relative">
            <div className="max-w-7xl mx-auto py-2">
              {/* Desktop Timeline */}
              <div className="hidden lg:block">
                <motion.div
                  className="relative"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
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
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 1.2 }}
                    style={{ transformOrigin: "left" }}
                  />

                  {/* Timeline Steps */}
                  <div className="relative grid grid-cols-9 gap-4 items-center justify-items-center">
                {studentJourney.map((journey, index) => (
                  <motion.div
                    key={index}
                        className="relative flex flex-col items-center group w-full max-w-[120px]"
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
                        <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden mb-2 w-full h-32 flex items-center justify-center">
                          {/* Hover effect overlay */}
                          <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                          
                          <div className="relative p-3 h-full flex flex-col justify-center items-center text-center">
                            {/* Time - Fixed at top */}
                            <div className="text-lg font-bold text-green-600 mb-2 flex-shrink-0">
                              {journey.time}
                            </div>

                            {/* Activity - Takes middle space */}
                            <div className="flex-1 flex flex-col justify-center">
                              <h3 className="text-xs font-bold text-gray-900 mb-1 leading-tight capitalize">
                                {journey.activity}
                              </h3>
                            </div>

                            {/* Additional Info - Fixed at bottom */}
                            <div className="text-xs text-gray-500 font-medium capitalize flex-shrink-0">
                              {index < 5 ? 'Morning' : 'Evening'}
                            </div>
                          </div>
                        </div>

                        {/* Timeline Dot */}
                        <motion.div
                          className="w-5 h-5 rounded-full bg-gradient-to-r from-green-500 to-yellow-500 shadow-lg border-3 border-white mx-auto"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                          whileHover={{ scale: 1.2 }}
                        />
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
                  whileInView="visible"
                  viewport={{ once: true }}
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
                    className="absolute left-6 top-0 bottom-0 w-1.5 bg-gradient-to-b from-green-200 via-yellow-200 to-green-200 rounded-full"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 1.2 }}
                    style={{ transformOrigin: "top" }}
                  />

                  {/* Timeline Steps */}
                  <div className="relative space-y-6">
                    {studentJourney.map((journey, index) => (
                      <motion.div
                        key={index}
                        className="relative flex items-center gap-4 group"
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
                        {/* Timeline Time Badge */}
                        <motion.div
                          className="relative flex-shrink-0 z-10 flex items-center justify-center"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {/* Pill-shaped Time Badge */}
                          <div className="w-14 h-8 bg-gradient-to-r from-green-500 via-green-400 to-yellow-500 shadow-xl border-2 border-white rounded-full relative overflow-hidden">
                            {/* Animated gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-green-400/30 via-yellow-400/30 to-green-400/30 animate-pulse"></div>
                            
                            {/* Top accent line */}
                            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-white/60 to-transparent"></div>
                            
                            {/* Bottom accent line */}
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent to-white/60"></div>
                          </div>
                          
                          {/* Time Text */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-white text-xs font-bold drop-shadow-sm">
                              {journey.time}
                            </span>
                          </div>
                          
                          {/* Side decorative dots */}
                          <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-green-400 rounded-full opacity-90"></div>
                          <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full opacity-90"></div>
                        </motion.div>

                        {/* Step Card */}
                        <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden flex-1 min-h-[80px]">
                          {/* Hover effect overlay */}
                          <div className="absolute inset-0 bg-gradient-to-r from-green-50/50 to-yellow-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          
                          <div className="relative p-4 h-full flex flex-col justify-center">
                            {/* Activity */}
                            <h3 className="text-sm font-bold text-gray-900 mb-2 leading-tight">
                              {journey.activity}
                            </h3>

                            {/* Time Period */}
                            <div className="flex items-center gap-2">
                              <div className={`w-2 h-2 rounded-full ${index < 5 ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                              <p className="text-xs text-gray-600 font-medium">
                                {index < 5 ? 'Morning Schedule' : 'Evening Schedule'}
                              </p>
                            </div>
                          </div>

                          {/* Decorative accent */}
                          <div className={`absolute top-0 right-0 w-3 h-3 bg-gradient-to-bl ${index < 5 ? 'from-green-400/30 to-green-600/30' : 'from-yellow-400/30 to-yellow-600/30'} rounded-bl-2xl`}></div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 