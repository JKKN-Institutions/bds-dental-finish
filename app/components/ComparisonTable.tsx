'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ComparisonRow {
  icon: string;
  label: string;
  mbbsValue: string;
  bdsValue: string;
  benefit: string;
}

export default function ComparisonTable() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const comparisonData: ComparisonRow[] = [
    {
      icon: "💰",
      label: "Investment",
      mbbsValue: "₹30L - ₹50L",
      bdsValue: "₹15L",
      benefit: "1/3rd Cost, Faster Financial Stability"
    },
    {
      icon: "💼",
      label: "Salary",
      mbbsValue: "₹12-18 LPA",
      bdsValue: "₹3-6 LPA",
      benefit: "Own Clinic Opportunity, Independence"
    },
    {
      icon: "🌍",
      label: "Lifestyle",
      mbbsValue: "Hectic Shifts",
      bdsValue: "Stable Hours",
      benefit: "Better Work-Life Balance"
    },
    {
      icon: "🎓",
      label: "PG Competition",
      mbbsValue: "4.5L For 30K Seats",
      bdsValue: "35K For 7K Seats",
      benefit: "5x Better Specialization Chance"
    },
    {
      icon: "🎓",
      label: "Growth",
      mbbsValue: "MBBS → MD/MS",
      bdsValue: "BDS → MDS/Fellowship",
      benefit: "Global Demand, Multiple Specializations"
    },
    {
      icon: "🎓",
      label: "Loan Burden",
      mbbsValue: "High",
      bdsValue: "Moderate",
      benefit: "Global Demand, Multiple Specializations"
    },
    {
      icon: "🎓",
      label: "Emergency Calls",
      mbbsValue: "Frequent",
      bdsValue: "Rare",
      benefit: "Global Demand, Multiple Specializations"
    },
    {
      icon: "🎓",
      label: "Stress Level",
      mbbsValue: "High",
      bdsValue: "Moderate",
      benefit: "Global Demand, Multiple Specializations"
    }
  ];

  return (
    <section className="py-3 sm:py-4 md:py-6 px-4 bg-[#f0fdf4] relative overflow-hidden">
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
            radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.05) 0%, transparent 50%)
          `
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 sm:mb-8"
        >
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 font-['Poppins']"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            🏆 Why Choose BDS Over MBBS?
          </motion.h2>

          <motion.p
            className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed font-['Poppins']"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Smart, Practical Choice For Your Dental Career
          </motion.p>
        </motion.div>

        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-green-50 to-yellow-50">
                  <th className="px-4 py-3 text-left text-base font-bold text-gray-900 border-b border-gray-200">
                    Comparison
                  </th>
                  <th className="px-4 py-3 text-center text-base font-bold text-red-700 border-b border-gray-200 bg-red-50">
                    MBBS
                  </th>
                  <th className="px-4 py-3 text-center text-base font-bold text-emerald-700 border-b border-gray-200 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg">
                    BDS
                  </th>
                  <th className="px-4 py-3 text-left text-base font-bold text-gray-900 border-b border-gray-200">
                    Advantage
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, rowIndex) => (
                  <motion.tr
                    key={row.label}
                    className={`group hover:bg-gray-50 transition-colors duration-200 ${
                      rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 1 + rowIndex * 0.1, duration: 0.5 }}
                  >
                    <td className="px-4 py-3 border-b border-gray-200">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{row.icon}</span>
                        <span className="text-base font-semibold text-gray-900">{row.label}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center text-base font-medium text-red-700 border-b border-gray-200 bg-red-50/50">
                      <span className="font-semibold">{row.mbbsValue}</span>
                    </td>
                    <td className="px-4 py-3 text-center text-base font-medium text-white border-b border-emerald-600 bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-inner">
                      <span className="font-bold drop-shadow-sm">{row.bdsValue}</span>
                    </td>
                    <td className="px-4 py-3 border-b border-gray-200">
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-gray-700 font-medium text-sm">{row.benefit}</p>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          className="lg:hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            {/* Scrollable Table Container */}
            <div className="overflow-x-auto">
              <div className="min-w-[600px]">
                {/* Mobile Table Header */}
                <div className="bg-gradient-to-r from-green-50 to-yellow-50 px-3 py-2 border-b border-gray-200">
                  <div className="grid grid-cols-4 gap-3 text-center">
                    <div className="text-xs font-bold text-gray-900 min-w-[100px]">Comparison</div>
                    <div className="text-xs font-bold text-red-700 bg-red-50 rounded px-1 py-1 min-w-[70px]">MBBS</div>
                    <div className="text-xs font-bold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded px-1 py-1 shadow-sm min-w-[70px]">BDS</div>
                    <div className="text-xs font-bold text-gray-900 min-w-[120px]">Advantage</div>
                  </div>
                </div>

                {/* Mobile Table Body */}
                <div className="divide-y divide-gray-200">
                  {comparisonData.map((row, rowIndex) => (
                    <motion.div
                      key={row.label}
                      className={`px-3 py-2 ${rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 1 + rowIndex * 0.1, duration: 0.5 }}
                    >
                      <div className="grid grid-cols-4 gap-3 items-center">
                        {/* Comparison Label */}
                        <div className="flex items-center gap-1 min-w-[100px]">
                          <span className="text-sm">{row.icon}</span>
                          <span className="text-xs font-semibold text-gray-900 leading-tight">{row.label}</span>
                        </div>

                        {/* MBBS Value */}
                        <div className="text-center min-w-[70px]">
                          <div className="bg-red-50 rounded px-2 py-1 border border-red-100">
                            <span className="text-xs font-bold text-red-700">{row.mbbsValue}</span>
                          </div>
                        </div>

                        {/* BDS Value */}
                        <div className="text-center min-w-[70px]">
                          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded px-2 py-1 border border-emerald-600 shadow-sm">
                            <span className="text-xs font-bold text-white drop-shadow-sm">{row.bdsValue}</span>
                          </div>
                        </div>

                        {/* Advantage */}
                        <div className="flex items-start gap-1 min-w-[120px]">
                          <div className="w-3 h-3 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-1.5 h-1.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="text-xs text-gray-700 font-medium leading-tight">{row.benefit}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="px-4 py-2 bg-gray-50 border-t border-gray-200 text-center">
              <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                <span>Scroll right to see more</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-4 sm:mt-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-3 sm:p-4 text-white text-center border border-slate-700/50 shadow-lg">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-lg">🎯</span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
                <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  Smart Choice
                </span>
                <span className="text-white"> for </span>
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Parents
                </span>
                <span className="text-white"> & </span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Students
                </span>
              </h3>
            </div>
            <p className="text-xs sm:text-sm mb-3 text-gray-200">
              "BDS Is The Smart Choice — Affordable, Faster, Rewarding, And Secure."
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-xs">
                Explore BDS Program
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-xs border border-white/30">
                Download Brochure
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
