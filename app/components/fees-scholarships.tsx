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
  { label: 'OC/BC/BCM/BC/DNC', value: 'OC_GROUP' },
  { label: 'SC/SCA/ST/BC-CC', value: 'SC_GROUP' },
];

const MQ_COMMUNITIES: { label: string; value: Community }[] = [
  { label: 'OC/BC/BCM/BC/DNC', value: 'OC_GROUP' },
  { label: 'SC/SCA/ST/BC-CC', value: 'SC_GROUP' },
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

  const [selectedQuota, setSelectedQuota] = useState<Quota | null>(null);
  const [selectedCommunity, setSelectedCommunity] = useState<Community | ''>('');
  const [selectedFeeType, setSelectedFeeType] = useState<FeeType | ''>('');

  const communityOptions = useMemo(() => {
    if (!selectedQuota) return [] as { label: string; value: Community }[];
    return selectedQuota === 'GQ' ? GQ_COMMUNITIES : MQ_COMMUNITIES;
  }, [selectedQuota]);

  const currentFees: FeePair | null = useMemo(() => {
    if (!selectedQuota || !selectedCommunity) return null;
    return selectedQuota === 'GQ' ? GQ_FEES[selectedCommunity] : MQ_FEES[selectedCommunity];
  }, [selectedQuota, selectedCommunity]);

  return (
    <section className="py-8 px-4 bg-[#f0fdf4]">
      <div className="max-w-5xl mx-auto">
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
            {/* Step 1: Quota Selection */}
            <div className="px-6 py-5 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Step 1: Select Quota</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => { setSelectedQuota('GQ'); setSelectedCommunity(''); }}
                  className={`w-full rounded-xl border-2 p-4 text-left transition-all ${selectedQuota === 'GQ' ? 'border-blue-600 bg-blue-50 shadow-md shadow-blue-600/10' : 'border-gray-200 hover:border-blue-300'}`}
                  aria-pressed={selectedQuota === 'GQ'}
                >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${selectedQuota === 'GQ' ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'}`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                        <div>
                        <p className="text-sm text-gray-600">General Quota</p>
                        <p className="text-base font-bold text-gray-900">GQ</p>
                      </div>
                    </div>
                  </div>
                </button>
                <button
                  onClick={() => { setSelectedQuota('MQ'); setSelectedCommunity(''); }}
                  className={`w-full rounded-xl border-2 p-4 text-left transition-all ${selectedQuota === 'MQ' ? 'border-emerald-600 bg-emerald-50 shadow-md shadow-emerald-600/10' : 'border-gray-200 hover:border-emerald-300'}`}
                  aria-pressed={selectedQuota === 'MQ'}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${selectedQuota === 'MQ' ? 'bg-emerald-600 text-white' : 'bg-emerald-50 text-emerald-600'}`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Management Quota</p>
                        <p className="text-base font-bold text-gray-900">MQ</p>
                      </div>
                    </div>
                  </div>
                </button>
                  </div>
                </div>

            {/* Step 2: Community Selection */}
            <div className="px-6 py-5 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Step 2: Select Your Community/Category</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <select
                  className="w-full rounded-lg border-2 border-gray-200 px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 disabled:bg-gray-100 disabled:text-gray-400"
                  disabled={!selectedQuota}
                  value={selectedCommunity}
                  onChange={(e) => setSelectedCommunity(e.target.value as Community)}
                  aria-label="Select Community"
                >
                  <option value="" disabled>{selectedQuota ? 'Choose Community' : 'Select a quota first'}</option>
                  {communityOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label} ({opt.value})</option>
                  ))}
                </select>
                      </div>
                    </div>
                    
            {/* Step 3: Fee Display */}
            <div className="px-6 py-5">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Step 3: Fees</h3>
              {!selectedQuota && (
                <p className="text-sm text-gray-600">Please select a Quota to continue.</p>
              )}
              {selectedQuota && !selectedCommunity && (
                <p className="text-sm text-gray-600">Select your Community to view fee details.</p>
              )}
              {currentFees && (
                <div>
                  {/* Accommodation selector */}
                  <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                      <label className="block text-sm font-medium text-gray-800 mb-1">Select Accommodation</label>
                      <select
                        className="w-full rounded-lg border-2 border-gray-200 px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
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

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div className="lg:col-span-2">
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="text-left font-semibold text-gray-700 px-4 py-3 border-b">Community</th>
                            <th className="text-left font-semibold text-gray-700 px-4 py-3 border-b">Day Scholar (DS) Fee</th>
                            <th className="text-left font-semibold text-gray-700 px-4 py-3 border-b">Hostel (HS) Fee</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="odd:bg-white even:bg-gray-50">
                            <td className="px-4 py-3 border-t">{selectedCommunity}</td>
                            <td className={`px-4 py-3 border-t font-semibold text-gray-900 ${selectedFeeType === 'DS' ? 'bg-blue-50' : ''}`}>{currentFees.ds}</td>
                            <td className={`px-4 py-3 border-t font-semibold text-gray-900 ${selectedFeeType === 'HS' ? 'bg-emerald-50' : ''}`}>{currentFees.hs}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className={`rounded-lg p-4 border ${selectedFeeType === 'HS' ? 'opacity-60' : 'bg-blue-50 border-blue-100'} ${selectedFeeType === 'DS' ? 'ring-2 ring-blue-300' : ''}`}>
                      <p className="text-xs text-gray-800 font-semibold mb-1">Tuition Fees (with Instruments & Materials)</p>
                      <p className="text-xl font-bold text-gray-900">{currentFees.ds}</p>
                      <p className="text-[11px] text-gray-700">Applies for Day Scholar (DS)</p>
                      <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-white/70 border border-blue-100 px-2 py-1">
                        <svg className="w-3.5 h-3.5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16c0 1.105.895 2 2 2h1a2 2 0 002-2M4 16V7a2 2 0 012-2h8a2 2 0 012 2v9m-14 0h14m0 0a2 2 0 01-2 2h-1a2 2 0 01-2-2m5 0V7m0 0h1a3 3 0 013 3v6m-4 0a2 2 0 002 2h1" />
                        </svg>
                        <span className="text-[11px] font-medium text-blue-800">Bus facility available</span>
                      </div>
                    </div>
                    <div className={`rounded-lg p-4 border ${selectedFeeType === 'DS' ? 'opacity-60' : 'bg-emerald-50 border-emerald-100'} ${selectedFeeType === 'HS' ? 'ring-2 ring-emerald-300' : ''}`}>
                      <p className="text-xs text-gray-800 font-semibold mb-1">Hostel Fees (with Instruments & Materials)</p>
                      <p className="text-xl font-bold text-gray-900">{currentFees.hs}</p>
                      <p className="text-[11px] text-gray-700">Applies for Hostel (HS)</p>
                    </div>
                  </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Static Section: Other Fees and Application/Admission Fee */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl border border-gray-100 p-5">
            <h4 className="text-base font-bold text-gray-900 mb-3">Other Fees</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden text-gray-900">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left font-semibold text-gray-800 px-4 py-3 border-b">Fee Type</th>
                    <th className="text-left font-semibold text-gray-800 px-4 py-3 border-b">Amount Range</th>
                    <th className="text-left font-semibold text-gray-800 px-4 py-3 border-b">Note</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-4 py-3 border-t text-gray-900">Exam, Books, & Uniform Fee</td>
                    <td className="px-4 py-3 border-t text-gray-900">₹20,000 to ₹30,000</td>
                    <td className="px-4 py-3 border-t text-gray-900">Range to be confirmed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-5">
            <h4 className="text-base font-bold text-gray-900 mb-3">Application & Admission Fee</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden text-gray-900">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left font-semibold text-gray-800 px-4 py-3 border-b">Fee Type</th>
                    <th className="text-left font-semibold text-gray-800 px-4 py-3 border-b">Amount</th>
                    <th className="text-left font-semibold text-gray-800 px-4 py-3 border-b">Note</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-4 py-3 border-t text-gray-900">Application & Admission Fee</td>
                    <td className="px-4 py-3 border-t text-gray-900">₹11,000</td>
                    <td className="px-4 py-3 border-t text-gray-900">One-time payment, applicable for the first year only.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
