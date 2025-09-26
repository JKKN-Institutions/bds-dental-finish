'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

type CategoryKey = 'General' | 'OBC' | 'SC/ST' | 'Management Quota' | 'Government Quota';

type YearlyCutoff = {
  year: number;
  categories: Record<CategoryKey, number>;
};

const CUT_OFFS: YearlyCutoff[] = [
  {
    year: 2024,
    categories: { General: 520, OBC: 485, 'SC/ST': 420, 'Management Quota': 380, 'Government Quota': 450 }
  },
  {
    year: 2023,
    categories: { General: 515, OBC: 480, 'SC/ST': 415, 'Management Quota': 375, 'Government Quota': 445 }
  }
];

const CATEGORY_STYLES: Record<CategoryKey, string> = {
  General: 'from-indigo-500 to-violet-600',
  OBC: 'from-emerald-500 to-teal-600',
  'SC/ST': 'from-rose-500 to-pink-600',
  'Management Quota': 'from-amber-500 to-orange-600',
  'Government Quota': 'from-blue-500 to-cyan-600'
};

function TrendBadge({ value, prev }: { value: number; prev?: number }) {
  const diff = prev !== undefined ? value - prev : 0;
  const up = diff > 0;
  const same = diff === 0;
  return (
    <span
      className={
        'ml-2 inline-flex items-center text-xs px-2 py-0.5 rounded-full ' +
        (same
          ? 'bg-gray-100 text-gray-700'
          : up
          ? 'bg-green-100 text-green-700'
          : 'bg-red-100 text-red-700')
      }
      title={prev !== undefined ? `${diff > 0 ? '+' : ''}${diff} vs prev year` : ''}
    >
      {prev !== undefined && (
        <>
          <span className="mr-1">{up ? '▲' : same ? '■' : '▼'}</span>
          {diff > 0 ? `+${diff}` : diff}
        </>
      )}
      {prev === undefined && '—'}
    </span>
  );
}

export default function NeetCutoffs() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section className="relative py-6 px-4 md:py-8 overflow-hidden bg-[#f0fdf4]">
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 md:mb-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 font-['Poppins']">📊 NEET Cut-off Score Table</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {CUT_OFFS.map((item, idx) => {
              const prev = CUT_OFFS[idx + 1];
              return (
                <motion.div
                  key={item.year}
                  className="relative group"
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.15 + idx * 0.1, duration: 0.5 }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-transparent to-pink-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{item.year}</h3>
                        <p className="text-xs text-gray-500">Category-wise cut-off</p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block text-[10px] uppercase tracking-wider text-gray-500">Trend</span>
                        <div className="mt-1 text-right">
                          <TrendBadge value={item.categories['General']} prev={prev?.categories['General']} />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {(Object.keys(item.categories) as CategoryKey[]).map((cat) => (
                        <div key={cat} className="relative overflow-hidden rounded-xl border border-gray-100">
                          <div className={`absolute inset-0 bg-gradient-to-br ${CATEGORY_STYLES[cat]} opacity-5`} />
                          <div className="relative p-4">
                            <div className="text-xs font-medium text-gray-500 mb-1">{cat}</div>
                            <div className="flex items-end justify-between">
                              <div className="text-2xl font-bold text-gray-900">
                                {item.categories[cat]}
                              </div>
                              <TrendBadge value={item.categories[cat]} prev={prev?.categories[cat]} />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}