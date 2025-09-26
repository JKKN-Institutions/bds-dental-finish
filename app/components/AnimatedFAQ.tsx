'use client';

import { useState } from 'react';

export default function AnimatedFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What are the admission requirements for BDS?",
      answer: "Admission requires NEET qualification, 10+2 with Physics, Chemistry, and Biology, and meeting the minimum age requirement of 17 years."
    },
    {
      question: "What is the duration of the BDS program?",
      answer: "The BDS program is 5 years long, including 4 years of academic study and 1 year of compulsory rotating internship."
    },
    {
      question: "What are the career opportunities after BDS?",
      answer: "Graduates can work as dentists in hospitals, clinics, start their own practice, pursue MDS specialization, or work in corporate dental chains."
    },
    {
      question: "Is there hostel accommodation available?",
      answer: "Yes, we provide comfortable hostel accommodation with modern amenities, 24/7 security, and separate facilities for male and female students."
    },
    {
      question: "Placement Record – 97%",
      answer: "We have a 97% placement rate with an average salary of ₹5.2 LPA. Our students are placed in top hospitals and dental chains across India."
    },
    {
      question: "Are there any scholarships available?",
      answer: "Yes, we offer various scholarships based on NEET scores, academic performance, and financial need. Contact our admission office for details."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-4 bg-green-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 font-['Poppins']">
            ❓ Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-['Poppins']">
            Find answers to common questions about our BDS program, admissions, and facilities.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div key={index} className="border border-green-200 rounded-lg bg-white shadow-sm">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-green-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-900 font-['Poppins']">{faq.question}</span>
                  <svg 
                    className={`w-5 h-5 text-green-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed font-['Poppins']">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
} 
