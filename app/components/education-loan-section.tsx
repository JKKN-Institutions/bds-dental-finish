'use client';

import { useState } from 'react';

export default function EducationLoanSection() {
  const [isHovered, setIsHovered] = useState(false);

  const steps = [
    {
      step: "1",
      title: "Register",
      action: "Create account",
      icon: "👤"
    },
    {
      step: "2", 
      title: "Apply",
      action: "Fill form",
      icon: "📝"
    },
    {
      step: "3",
      title: "Upload",
      action: "Submit docs",
      icon: "📄"
    },
    {
      step: "4",
      title: "Track",
      action: "Monitor progress",
      icon: "📊"
    }
  ];

  return (
    <section className="py-8 px-4 bg-[#f0fdf4]">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 font-['Poppins']">
            🏦 Education Loan Apply in One Portal
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto leading-relaxed font-['Poppins']">
            Apply through <span className="font-semibold text-green-600 font-['Poppins']">Vidya Lakshmi portal</span>
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
          {/* Steps Flow */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {steps.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="relative">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mx-auto mb-2 shadow-sm">
                    {step.step}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-5 left-full w-full h-0.5 bg-green-200 transform translate-x-1"></div>
                  )}
                </div>
                <div className="text-xl mb-1">{step.icon}</div>
                <h4 className="text-sm font-semibold text-gray-900 mb-1">{step.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{step.action}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="https://www.vidyalakshmi.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <span>Apply on Vidya Lakshmi</span>
              <svg 
                className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <p className="text-xs text-gray-500 mt-2">Opens in new tab</p>
          </div>
        </div>

        {/* Desktop Benefits */}
        <div className="hidden md:grid grid-cols-3 gap-3 mt-4">
          <div className="bg-gray-50 rounded-lg p-3 text-center border border-gray-100">
            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-1.5">
              <svg className="w-2.5 h-2.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-xs font-medium text-gray-700">Multiple banks</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 text-center border border-gray-100">
            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-1.5">
              <svg className="w-2.5 h-2.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-xs font-medium text-gray-700">Quick processing</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 text-center border border-gray-100">
            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-1.5">
              <svg className="w-2.5 h-2.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-xs font-medium text-gray-700">Track online</p>
          </div>
        </div>

        {/* Mobile Benefits - Single Line */}
        <div className="md:hidden bg-gray-50 rounded-lg p-3 mt-4 border border-gray-100">
          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-2 h-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-xs font-medium text-gray-700">Multiple banks</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-2 h-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-xs font-medium text-gray-700">Quick processing</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-2 h-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-xs font-medium text-gray-700">Track online</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
