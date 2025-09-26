'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useState, useEffect } from 'react';

// Enhanced Feature Card
export function FeatureCard({ 
  icon, 
  title, 
  description, 
  bgColor, 
  delay = 0 
}: {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -8 }}
    >
      <motion.div 
        className={`${bgColor} rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 relative overflow-hidden`}
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
        }}
      >
        {/* Animated background pattern */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 0%, transparent 50%)`
          }}
        />
        
        <div className="relative z-10">
          <motion.div 
            className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg"
            whileHover={{ 
              rotate: [0, -10, 10, 0],
              scale: 1.1
            }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-2xl sm:text-3xl">{icon}</span>
          </motion.div>
          
          <motion.h3 
            className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:text-white/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.h3>
          
          <motion.p 
            className="text-white/80 leading-relaxed text-sm sm:text-base"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: delay + 0.2, duration: 0.6 }}
          >
            {description}
          </motion.p>
          
          {/* Hover effect line */}
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-white/50 rounded-b-2xl sm:rounded-b-3xl"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

// Enhanced Stats Card
export function StatsCard({ 
  number, 
  suffix, 
  label, 
  icon, 
  bgColor, 
  delay = 0 
}: {
  number: number;
  suffix: string;
  label: string;
  icon: string;
  bgColor: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -10 }}
    >
      <motion.div 
        className={`${bgColor} rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 relative overflow-hidden`}
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
        }}
      >
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="relative z-10 text-center">
          <motion.div 
            className={`w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg`}
            whileHover={{ 
              rotate: [0, -10, 10, 0],
              scale: 1.1
            }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-2xl sm:text-3xl">{icon}</span>
          </motion.div>
          
          <motion.div 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ delay: delay + 0.3, duration: 0.8 }}
          >
            <AnimatedCounter end={number} />
            <span className="text-white/80">{suffix}</span>
          </motion.div>
          
          <motion.p 
            className="text-lg sm:text-xl text-white/80 font-medium"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: delay + 0.5, duration: 0.6 }}
          >
            {label}
          </motion.p>
          
          {/* Hover effect line */}
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-white/50 rounded-b-2xl sm:rounded-b-3xl"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

// Enhanced Testimonial Card
export function TestimonialCard({ 
  quote, 
  author, 
  role, 
  rating, 
  avatar, 
  bgColor, 
  delay = 0 
}: {
  quote: string;
  author: string;
  role: string;
  rating: number;
  avatar: string;
  bgColor: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -10 }}
    >
      <motion.div 
        className={`${bgColor} rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 relative overflow-hidden`}
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
        }}
      >
        {/* Quote icon */}
        <motion.div
          className="absolute top-4 sm:top-6 right-4 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-white text-lg sm:text-xl">"</span>
        </motion.div>
        
        <div className="relative z-10">
          <motion.blockquote 
            className="text-white/90 italic text-base sm:text-lg leading-relaxed mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: delay + 0.2, duration: 0.6 }}
          >
            "{quote}"
          </motion.blockquote>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <motion.div 
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-lg sm:text-xl">{avatar}</span>
              </motion.div>
              <div>
                <motion.p 
                  className="font-semibold text-white text-sm sm:text-base"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: delay + 0.4, duration: 0.6 }}
                >
                  {author}
                </motion.p>
                <motion.p 
                  className="text-white/70 text-xs sm:text-sm"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: delay + 0.5, duration: 0.6 }}
                >
                  {role}
                </motion.p>
              </div>
            </div>
            
            <motion.div 
              className="flex text-yellow-300"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: delay + 0.6, duration: 0.6 }}
            >
              {[...Array(rating)].map((_, i) => (
                <motion.span 
                  key={i}
                  className="text-sm sm:text-base"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ delay: delay + 0.7 + i * 0.1, duration: 0.5, ease: "backOut" }}
                >
                  ★
                </motion.span>
              ))}
            </motion.div>
          </div>
          
          {/* Hover effect line */}
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-white/50 rounded-b-2xl sm:rounded-b-3xl"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

// Animated Counter Component
function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
}

// Enhanced Career Card
export function CareerCard({ 
  role, 
  salary, 
  description, 
  icon, 
  bgColor, 
  delay = 0 
}: {
  role: string;
  salary: string;
  description: string;
  icon: string;
  bgColor: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="group relative h-full"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -8 }}
    >
      <motion.div 
        className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 relative overflow-hidden h-full flex flex-col"
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)"
        }}
      >
        {/* Icon Section */}
        <div className="flex items-center justify-center mb-4">
          <motion.div 
            className={`w-14 h-14 ${bgColor} rounded-xl flex items-center justify-center shadow-md`}
            whileHover={{ 
              rotate: [0, -5, 5, 0],
              scale: 1.1
            }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-2xl text-white">{icon}</span>
          </motion.div>
        </div>
        
        {/* Content Section */}
        <div className="flex-1 flex flex-col">
          <motion.h3 
            className="text-lg font-bold text-black mb-2 text-center font-poppins"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            {role}
          </motion.h3>
          
          <motion.div 
            className="text-xl font-bold text-gray-800 mb-3 text-center font-poppins"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: delay + 0.2, duration: 0.5 }}
          >
            {salary}
          </motion.div>
          
          <motion.p 
            className="text-gray-600 text-sm leading-relaxed text-center flex-1 font-poppins"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: delay + 0.3, duration: 0.5 }}
          >
            {description}
          </motion.p>
        </div>
        
        {/* Bottom accent line */}
        <motion.div
          className={`absolute bottom-0 left-0 h-1 ${bgColor} rounded-b-2xl`}
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
} 