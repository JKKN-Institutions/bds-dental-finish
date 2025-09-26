'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

interface FeeBreakdown {
  year: string;
  tuitionFee: string;
  otherCharges: string;
  total: string;
  runningTotal: string;
}

export default function FeesScholarships() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedYear, setSelectedYear] = useState(0);

  const feeBreakdown: FeeBreakdown[] = [
    {
      year: "Year 1",
      tuitionFee: "₹2,50,000",
      otherCharges: "₹50,000",
      total: "₹3,00,000",
      runningTotal: "₹3,00,000"
    },
    {
      year: "Year 2",
      tuitionFee: "₹2,75,000",
      otherCharges: "₹50,000",
      total: "₹3,25,000",
      runningTotal: "₹6,25,000"
    },
    {
      year: "Year 3",
      tuitionFee: "₹3,00,000",
      otherCharges: "₹50,000",
      total: "₹3,50,000",
      runningTotal: "₹9,75,000"
    },
    {
      year: "Year 4",
      tuitionFee: "₹3,25,000",
      otherCharges: "₹50,000",
      total: "₹3,75,000",
      runningTotal: "₹13,50,000"
    },
  ];

  return (
    <section className="py-8 px-4 bg-[#f0fdf4]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold mb-3 tracking-wide font-['Poppins']">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
            Transparent Fee Structure
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 font-['Poppins']">
            💰 Fees Structure
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto leading-relaxed font-['Poppins']">
            Comprehensive financial planning with transparent fee structure and scholarship opportunities
          </p>
        </motion.div>

        {/* Fee Structure */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Desktop Professional Header */}
            <div className="hidden lg:block bg-gradient-to-r from-green-800 to-green-900 px-6 py-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-0.5">Fee Structure</h3>
                    <p className="text-slate-300 text-sm">Complete 4-year BDS program breakdown</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                    <p className="text-slate-300 text-xs">Total Investment</p>
                    <p className="text-xl font-bold text-white">₹17.5L</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Professional Header */}
            <div className="lg:hidden bg-gradient-to-r from-green-800 to-green-900 px-4 py-4">
              <div className="flex items-center justify-center text-center">
                <div>
                  <h3 className="text-xl font-bold text-white mb-0.5">Fee Structure</h3>
                  <p className="text-slate-300 text-sm">Complete 5-year BDS program breakdown</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              {/* Desktop Version */}
              <div className="hidden lg:block">
                {/* Year Selector */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-gray-700 mb-2">Select Academic Year</h4>
                  <div className="grid grid-cols-4 gap-2">
                    {feeBreakdown.map((year, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedYear(index)}
                        className={`py-1.5 px-1 text-[10px] font-semibold transition-all duration-300 rounded-lg border-2 ${
                          selectedYear === index
                            ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/25'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:shadow-sm'
                        }`}
                      >
                        {year.year}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Fee Breakdown */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {/* Detailed Breakdown */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      Detailed Breakdown
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <div>
                          <span className="text-gray-700 font-medium text-xs">Tuition Fee</span>
                          <p className="text-xs text-gray-500">Academic instruction & facilities</p>
                        </div>
                        <span className="font-bold text-gray-900 text-xs">{feeBreakdown[selectedYear].tuitionFee}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <div>
                          <span className="text-gray-700 font-medium text-xs">Other Charges</span>
                          <p className="text-xs text-gray-500">Lab fees, library, examination</p>
                        </div>
                        <span className="font-bold text-gray-900 text-xs">{feeBreakdown[selectedYear].otherCharges}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 bg-blue-50 rounded-lg px-2">
                        <div>
                          <span className="font-bold text-gray-900 text-xs">Total for {feeBreakdown[selectedYear].year}</span>
                          <p className="text-xs text-blue-600">Including all charges</p>
                        </div>
                        <span className="font-bold text-base text-blue-600">{feeBreakdown[selectedYear].total}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary & Progress */}
                  <div className="space-y-3">
                    {/* Year Summary */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100">
                      <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <div className="w-5 h-5 bg-blue-100 rounded-lg flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </div>
                        {feeBreakdown[selectedYear].year} Summary
                      </h4>
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 text-xs">Year Progress</span>
                          <span className="font-semibold text-gray-900 text-xs">{((selectedYear + 1) * 25)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div 
                            className="bg-blue-600 h-1.5 rounded-full transition-all duration-500" 
                            style={{ width: `${(selectedYear + 1) * 25}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between items-center pt-0.5">
                          <span className="text-xs text-gray-500">Running Total</span>
                          <span className="font-bold text-xs text-gray-900">{feeBreakdown[selectedYear].runningTotal}</span>
                        </div>
                      </div>
                    </div>

                    {/* Payment Information */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <div className="w-5 h-5 bg-green-100 rounded-lg flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                          </svg>
                        </div>
                        Payment Information
                      </h4>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 text-gray-600 text-xs">
                          <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                          <span>EMI options available</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 text-xs">
                          <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                          <span>No hidden charges</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 text-xs">
                          <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                          <span>Transparent fee structure</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Version */}
              <div className="lg:hidden">
                {/* Mobile Year Selector */}
                <div className="mb-2">
                  <h4 className="text-xs font-semibold text-gray-700 mb-2">Select Academic Year</h4>
                  <div className="grid grid-cols-4 gap-2">
                    {feeBreakdown.map((year, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedYear(index)}
                        className={`py-1.5 px-1 text-[10px] font-semibold transition-all duration-300 rounded-lg border-2 ${
                          selectedYear === index
                            ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/25'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:shadow-sm'
                        }`}
                      >
                        {year.year}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mobile Fee Breakdown */}
                <div className="space-y-2 mb-4">
                  {/* Selected Year Summary */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-3 border border-blue-100">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-base font-bold text-gray-900">{feeBreakdown[selectedYear].year}</h4>
                      <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        {((selectedYear + 1) * 25)}%
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-500" 
                        style={{ width: `${(selectedYear + 1) * 25}%` }}
                      ></div>
                    </div>

                    {/* Fee Details */}
                    <div className="space-y-1">
                      <div className="flex justify-between items-center py-1.5 border-b border-blue-200">
                        <span className="text-gray-700 font-medium text-xs">Tuition Fee</span>
                        <span className="font-bold text-gray-900 text-xs">{feeBreakdown[selectedYear].tuitionFee}</span>
                      </div>
                      <div className="flex justify-between items-center py-1.5 border-b border-blue-200">
                        <span className="text-gray-700 font-medium text-xs">Other Charges</span>
                        <span className="font-bold text-gray-900 text-xs">{feeBreakdown[selectedYear].otherCharges}</span>
                      </div>
                      <div className="flex justify-between items-center py-1.5 bg-blue-100 rounded-lg px-3">
                        <span className="font-bold text-gray-900 text-xs">Total for {feeBreakdown[selectedYear].year}</span>
                        <span className="font-bold text-base text-blue-600">{feeBreakdown[selectedYear].total}</span>
                      </div>
                    </div>
                  </div>

                  {/* Running Total */}
                  <div className="bg-gray-50 rounded-xl p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="text-xs font-bold text-gray-900">Running Total</h5>
                        <p className="text-xs text-gray-500">Total investment so far</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-gray-900">{feeBreakdown[selectedYear].runningTotal}</p>
                      </div>
                    </div>
                  </div>

                  {/* Payment Info */}
                  <div className="bg-green-50 rounded-xl p-3 border border-green-100">
                    <h5 className="text-xs font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                      Payment Benefits
                    </h5>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-gray-700 text-xs">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>EMI options available</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700 text-xs">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>No hidden charges</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700 text-xs">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Transparent fee structure</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Total Program Cost */}
              <div className="hidden lg:block bg-gradient-to-r from-slate-900 to-slate-800 text-white p-6 rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-bold mb-1">Complete Program Investment</h4>
                    <p className="text-slate-300 text-sm">4-year BDS program with all facilities</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center gap-1 text-slate-300">
                        <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-xs">No hidden fees</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-300">
                        <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-xs">EMI available</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-blue-400 mb-0.5">₹17.5L</p>
                    <p className="text-slate-400 text-xs">*Excluding hostel & mess charges</p>
                  </div>
                </div>
              </div>

              {/* Mobile Total Program Cost */}
              <div className="lg:hidden bg-gradient-to-r from-slate-900 to-slate-800 text-white p-6 -mx-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold mb-1">Complete Program Investment</h4>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center gap-1 text-slate-300">
                        <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[10px]">No hidden fees</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-300">
                        <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[10px]">EMI available</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-blue-400 mb-0.5">₹17.5L</p>
                    <p className="text-slate-400 text-[10px]">*Excluding hostel & mess charges</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
