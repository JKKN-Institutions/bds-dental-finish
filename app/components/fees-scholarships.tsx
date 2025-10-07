'use client';

import { motion, useInView } from 'framer-motion';
import { useMemo, useRef, useState } from 'react';

type Quota = 'GQ' | 'MQ';
type Community = 'GQ' | 'BC/BCM' | 'SC/SCA/ST' | 'BC-CC';

interface FeePair {
  ds: string; // Day Scholar
  hs: string; // Hostel
}

const GQ_COMMUNITIES: { label: string; value: Community }[] = [
  { label: 'General (GQ)', value: 'GQ' },
  { label: 'Backward Classes (BC/BCM)', value: 'BC/BCM' },
  { label: 'Scheduled Castes / Scheduled Tribes (SC/SCA/ST)', value: 'SC/SCA/ST' },
  { label: 'Backward Class Christian (BC-CC)', value: 'BC-CC' },
];

const MQ_COMMUNITIES: { label: string; value: Community }[] = [
  { label: 'General (GQ)', value: 'GQ' },
  { label: 'Backward Classes (BC/BCM)', value: 'BC/BCM' },
  { label: 'Scheduled Castes / Scheduled Tribes (SC/SCA/ST)', value: 'SC/SCA/ST' },
  { label: 'Backward Class Christian (BC-CC)', value: 'BC-CC' },
];

const GQ_FEES: Record<Community, FeePair> = {
  'GQ': { ds: '3.5L', hs: '3.5L' },
  'BC/BCM': { ds: '4.25L', hs: '4.25L' },
  'SC/SCA/ST': { ds: '3.5L', hs: '3.5L' },
  'BC-CC': { ds: '4.25L', hs: '4.25L' },
};

const MQ_FEES: Record<Community, FeePair> = {
  'GQ': { ds: '4L', hs: '6L' },
  'BC/BCM': { ds: '5L', hs: '6L' },
  'SC/SCA/ST': { ds: '6L', hs: '6L' },
  'BC-CC': { ds: '6L', hs: '6L' },
};

export default function FeesScholarships() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [selectedQuota, setSelectedQuota] = useState<Quota | null>(null);
  const [selectedCommunity, setSelectedCommunity] = useState<Community | ''>('');

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
                  className="w-full rounded-lg border-2 border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 disabled:bg-gray-100 disabled:text-gray-400"
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
                            <td className="px-4 py-3 border-t font-semibold">{currentFees.ds}</td>
                            <td className="px-4 py-3 border-t font-semibold">{currentFees.hs}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                      <p className="text-xs text-blue-700 font-semibold mb-1">Tuition Fees (with Instruments & Materials)</p>
                      <p className="text-xl font-bold text-blue-700">{currentFees.ds}</p>
                      <p className="text-[11px] text-blue-700/80">Applies for Day Scholar (DS)</p>
                    </div>
                    <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
                      <p className="text-xs text-emerald-700 font-semibold mb-1">Hostel Fees (with Instruments & Materials)</p>
                      <p className="text-xl font-bold text-emerald-700">{currentFees.hs}</p>
                      <p className="text-[11px] text-emerald-700/80">Applies for Hostel (HS)</p>
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
              <table className="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left font-semibold text-gray-700 px-4 py-3 border-b">Fee Type</th>
                    <th className="text-left font-semibold text-gray-700 px-4 py-3 border-b">Amount Range</th>
                    <th className="text-left font-semibold text-gray-700 px-4 py-3 border-b">Note</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-4 py-3 border-t">Exam, Books, & Uniform Fee</td>
                    <td className="px-4 py-3 border-t">₹20,000 to ₹30,000</td>
                    <td className="px-4 py-3 border-t">Range to be confirmed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-5">
            <h4 className="text-base font-bold text-gray-900 mb-3">Application & Admission Fee</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left font-semibold text-gray-700 px-4 py-3 border-b">Fee Type</th>
                    <th className="text-left font-semibold text-gray-700 px-4 py-3 border-b">Amount</th>
                    <th className="text-left font-semibold text-gray-700 px-4 py-3 border-b">Note</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-4 py-3 border-t">Application & Admission Fee</td>
                    <td className="px-4 py-3 border-t">₹11,000</td>
                    <td className="px-4 py-3 border-t">One-time payment, applicable for the first year only.</td>
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
