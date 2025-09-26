'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

function AnimatedCounter({ end, duration = 2 }: { end: string; duration?: number }) {
  const [count, setCount] = useState('0');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      // Extract numeric value from end string (e.g., "2,500+" -> 2500)
      const numericValue = parseInt(end.replace(/[^\d]/g, ''));

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        const currentValue = Math.floor(progress * numericValue);
        
        // Format the number with commas and preserve the original suffix
        const suffix = end.replace(/[\d,]/g, '');
        const formattedValue = currentValue.toLocaleString() + suffix;
        
        setCount(formattedValue);
        
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

export default function SuccessMetricsDashboard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const metrics = [
    {
      metric: "2,500+",
      label: "Successful Dentists",
      icon: "🦷",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50"
    },
    {
      metric: "85%",
      label: "Own Clinic within 3 years",
      icon: "🏥",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50"
    },
    {
      metric: "₹12 LPA",
      label: "Highest Package",
      icon: "💰",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
      tooltip: "Offered in campus placements"
    },
    {
      metric: "15+",
      label: "International Placements",
      icon: "🌍",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50"
    },
    {
      metric: "92%",
      label: "First Attempt Pass Rate",
      icon: "🎓",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50"
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 bg-white relative overflow-hidden">
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
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-['Poppins']"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Success Metrics
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Our track record of academic excellence and career success.
          </motion.p>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mt-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8"
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
          {metrics.map((item, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={{
                hidden: { 
                  y: 50, 
                  opacity: 0,
                  scale: 0.95
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
              <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Hover effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative p-6 sm:p-8 text-center">
                  {/* Icon */}
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 rounded-2xl ${item.bgColor} flex items-center justify-center text-3xl sm:text-4xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    {item.icon}
                  </div>

                  {/* Metric Number */}
                  <div className="mb-4">
                    <div 
                      className={`text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                      title={item.tooltip}
                    >
                      <AnimatedCounter end={item.metric} duration={2} />
                    </div>
                  </div>

                  {/* Label */}
                  <div>
                    <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed">
                      {item.label}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${item.color} rounded-b-2xl`}
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 sm:mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium border border-indigo-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Updated metrics for 2024 academic year</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
