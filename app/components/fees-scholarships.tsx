'use client';

import { motion, useInView } from 'framer-motion';
import { useMemo, useRef, useState } from 'react';

type Quota = 'GQ' | 'MQ';
type Community = 'OC_GROUP' | 'SC_GROUP';
type FeeType = 'DS' | 'HS';

interface FeePair {
  ds: string; // Day Scholar
  hs: string; // Hostel
}

const GQ_COMMUNITIES: { label: string; value: Community }[] = [
  { label: 'OC/BC/BCM/BC/DNC (OC_GROUP)', value: 'OC_GROUP' },
  { label: 'SC/SCA/ST/BC-CC (SC_GROUP)', value: 'SC_GROUP' },
];

const MQ_COMMUNITIES: { label: string; value: Community }[] = [
  { label: 'OC/BC/BCM/BC/DNC (OC_GROUP)', value: 'OC_GROUP' },
  { label: 'SC/SCA/ST/BC-CC (SC_GROUP)', value: 'SC_GROUP' },
];

const GQ_FEES: Record<Community, FeePair> = {
  // All communities DS=3.5L, HS=4.25L under GQ
  'OC_GROUP': { ds: '3.5L', hs: '4.25L' },
  'SC_GROUP': { ds: '3.5L', hs: '4.25L' },
};

const MQ_FEES: Record<Community, FeePair> = {
  // OC/BC/BCM/BC/DNC group DS=4L HS=5L; SC/SCA/ST/BC-CC DS=6L HS=6L
  'OC_GROUP': { ds: '4L', hs: '5L' },
  'SC_GROUP': { ds: '6L', hs: '6L' },
};

export default function FeesScholarships() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [selectedQuota, setSelectedQuota] = useState<Quota | null>('GQ');
  const [selectedCommunity, setSelectedCommunity] = useState<Community | ''>('OC_GROUP');
  const [selectedFeeType, setSelectedFeeType] = useState<FeeType | ''>('DS');

  const communityOptions = useMemo(() => {
    if (!selectedQuota) return [] as { label: string; value: Community }[];
    return selectedQuota === 'GQ' ? GQ_COMMUNITIES : MQ_COMMUNITIES;
  }, [selectedQuota]);

  const currentFees: FeePair | null = useMemo(() => {
    if (!selectedQuota || !selectedCommunity) return null;
    return selectedQuota === 'GQ' ? GQ_FEES[selectedCommunity] : MQ_FEES[selectedCommunity];
  }, [selectedQuota, selectedCommunity]);

  return (
    <section className="py-8 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold mb-3 tracking-wide font-['Poppins']">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
            Transparent Fee Structure
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 font-['Poppins']">💰 Fees Structure</h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto leading-relaxed font-['Poppins']">Select your Quota and Community to view fees.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Progress Indicator */}
            <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Step 1: Select Quota</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                    <span className="text-sm text-gray-500">Step 2</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-white">3</span>
                    </div>
                    <span className="text-sm font-medium text-blue-600">Summary</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row">
              {/* Left Side - Main Content */}
              <div className="flex-1 p-6 space-y-6">
                {/* Step 1: Quota Selection */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Step 1: Select Quota</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => { setSelectedQuota('GQ'); setSelectedCommunity(''); }}
                      className={`w-full rounded-xl border-2 p-6 text-left transition-all shadow-sm ${selectedQuota === 'GQ' ? 'border-blue-600 bg-blue-50 shadow-md shadow-blue-600/10' : 'border-gray-200 hover:border-blue-300'}`}
                      aria-pressed={selectedQuota === 'GQ'}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${selectedQuota === 'GQ' ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'}`}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">General Quota</p>
                            <p className="text-lg font-bold text-gray-900">GQ</p>
                          </div>
                        </div>
                      </div>
                    </button>
                    <button
                      onClick={() => { setSelectedQuota('MQ'); setSelectedCommunity(''); }}
                      className={`w-full rounded-xl border-2 p-6 text-left transition-all shadow-sm ${selectedQuota === 'MQ' ? 'border-green-600 bg-green-50 shadow-md shadow-green-600/10' : 'border-gray-200 hover:border-green-300'}`}
                      aria-pressed={selectedQuota === 'MQ'}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${selectedQuota === 'MQ' ? 'bg-green-600 text-white' : 'bg-green-50 text-green-600'}`}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Management Quota</p>
                            <p className="text-lg font-bold text-gray-900">MQ</p>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Step 2: Community Selection */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Step 2: Select Your Community/Category</h3>
                  <div className="max-w-md">
                    <select
                      className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 disabled:bg-gray-100 disabled:text-gray-400"
                      disabled={!selectedQuota}
                      value={selectedCommunity}
                      onChange={(e) => setSelectedCommunity(e.target.value as Community)}
                      aria-label="Select Community"
                    >
                      <option value="" disabled>{selectedQuota ? 'Choose Community' : 'Select a quota first'}</option>
                      {communityOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Step 3: Fees */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Step 3: Fees</h3>
                  {!selectedQuota && (
                    <p className="text-sm text-gray-600">Please select a Quota to continue.</p>
                  )}
                  {selectedQuota && !selectedCommunity && (
                    <p className="text-sm text-gray-600">Select your Community to view fee details.</p>
                  )}
                  {currentFees && (
                    <div className="space-y-4">
                      {/* Accommodation selector */}
                      <div>
                        <label className="block text-sm font-medium text-gray-800 mb-2">Select Accommodation</label>
                        <select
                          className="w-full max-w-md rounded-lg border-2 border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
                          value={selectedFeeType}
                          onChange={(e) => setSelectedFeeType((e.target.value || '') as FeeType | '')}
                          aria-label="Select Accommodation Type"
                        >
                          <option value="">Show both</option>
                          <option value="DS">Day Scholar (DS)</option>
                          <option value="HS">Hostel (HS)</option>
                        </select>
                      </div>


                      
                    </div>
                  )}
                </div>
              </div>

              {/* Right Side - Fee Summary Panel */}
              {currentFees && (
                <div className="lg:w-80 bg-gray-50 p-6 border-l border-gray-200">
                  <div className="bg-blue-600 text-white p-4 rounded-lg mb-4">
                    <h4 className="text-lg font-bold">Fee Summary</h4>
                  </div>
                  
                  <div className="space-y-4">
                    {/* Tuition Fees - Show when DS is selected or no specific selection */}
                    {(!selectedFeeType || selectedFeeType === 'DS') && (
                      <div className={`rounded-lg p-4 border-2 ${selectedFeeType === 'DS' ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-200'}`}>
                        <p className="text-sm font-semibold text-gray-800 mb-1">Tuition Fees (with Instruments & Materials & Bus)</p>
                        <p className="text-2xl font-bold text-gray-900">{currentFees.ds}</p>
                        
                        
                      </div>
                    )}

                    {/* Hostel Fees - Show when HS is selected or no specific selection */}
                    {(!selectedFeeType || selectedFeeType === 'HS') && (
                      <div className={`rounded-lg p-4 border-2 ${selectedFeeType === 'HS' ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
                        <p className="text-sm font-semibold text-gray-800 mb-1">Hostel Fees & Instruments</p>
                        <p className="text-2xl font-bold text-gray-900">{currentFees.hs}</p>
                        <p className="text-xs text-gray-600">Opluded</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Bottom Sections - Other Fees and Application/Admission Fee */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Other Fees Section */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900">Other Fees</h4>
            </div>
            
            <div className="space-y-3">
              <button className="w-full p-4 rounded-xl border-2 border-orange-200 bg-orange-50 hover:bg-orange-100 hover:border-orange-300 transition-all duration-200 text-left group">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-orange-800">Exam, Books, & Uniform Fee</span>
                      <span className="px-2 py-1 bg-orange-200 text-orange-700 text-xs font-medium rounded-full">Variable</span>
                    </div>
                    <p className="text-lg font-bold text-gray-900 mb-1">₹20,000 - ₹30,000</p>
                    <p className="text-xs text-gray-600">Range to be confirmed</p>
                  </div>
                  <div className="ml-4">
                    <svg className="w-5 h-5 text-orange-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Application & Admission Fee Section */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900">Application & Admission Fee</h4>
            </div>
            
            <div className="space-y-3">
              <button className="w-full p-4 rounded-xl border-2 border-blue-200 bg-blue-50 hover:bg-blue-100 hover:border-blue-300 transition-all duration-200 text-left group">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-blue-800">Application & Admission Fee</span>
                      <span className="px-2 py-1 bg-blue-200 text-blue-700 text-xs font-medium rounded-full">One-time</span>
                    </div>
                    <p className="text-lg font-bold text-gray-900 mb-1">₹11,000</p>
                    <p className="text-xs text-gray-600">One-time payment, applicable for the first year only</p>
                  </div>
                  <div className="ml-4">
                    <svg className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
