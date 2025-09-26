'use client';

import Image from "next/image";
import { useState } from "react";
import Modal from "./components/Modal";
import ContactForm from "./components/ContactForm";

import AnimatedHero from "./components/AnimatedHero";

import EnhancedCareerSection from "./components/EnhancedCareerSection";
import CombinedWhyChooseTrust from "./components/combined-why-choose-trust";
import AnimatedTestimonials from "./components/AnimatedTestimonials";
import AnimatedFAQ from "./components/AnimatedFAQ";

import { FeatureCard, StatsCard, TestimonialCard, CareerCard } from "./components/EnhancedCards";
import AnimatedHeader from "./components/AnimatedHeader";

import CampusFacilities from "./components/campus-facilities";

import DentalGallery from "./components/dental-gallery";
import FacultySection from "./components/faculty-section";

import NeetCutoffs from "./components/NeetCutoffs";
import EducationLoanSection from "./components/education-loan-section";

import StudentSuccessShowcase from "./components/student-success-showcase";

import SuccessMetricsDashboard from "./components/SuccessMetricsDashboard";
import AdmissionTimelineWidget from "./components/AdmissionTimelineWidget";
import ParentTestimonialVideos from "./components/ParentTestimonialVideos";
import ComparisonTable from "./components/ComparisonTable";
import FeesScholarships from "./components/fees-scholarships";
import WhatsAppFloatingButton from "./components/whatsapp-floating-button";
import FacilityExcellence from "./components/facility-excellence";
import LeadForm from "./components/lead-form";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f0fdf4' }}>
      {/* Animated Header */}
      <AnimatedHeader />

      {/* Animated Hero Section */}
      <section id="home" style={{ backgroundColor: '#f0fdf4' }}>
        <AnimatedHero onOpenModal={() => setIsModalOpen(true)} />
      </section>

      {/* 1. Why Choose & Trust JKKN Dental Colleges? */}
      <section id="why-choose-trust" style={{ backgroundColor: '#f0fdf4' }}>
        <CombinedWhyChooseTrust />
      </section>

      {/* 2. Student Success Stories */}
      <section id="alumni-showcase" style={{ backgroundColor: '#f0fdf4' }}>
        <StudentSuccessShowcase />
      </section>

      {/* Lead Form After Student Success Stories */}
      <section className="py-8 px-4" style={{ backgroundColor: '#f0fdf4' }}>
        <div className="max-w-4xl mx-auto">
          <LeadForm />
        </div>
      </section>

      {/* 3. 🏆 Why Choose BDS Over MBBS? */}
      <section id="comparison-table" style={{ backgroundColor: '#f0fdf4' }}>
        <ComparisonTable />
      </section>

      {/* 4. Explore Your Career Path */}
      <section id="career" style={{ backgroundColor: '#f0fdf4' }}>
        <EnhancedCareerSection />
      </section>

      {/* 5. Parent Testimonials */}
      <section id="parent-testimonials" style={{ backgroundColor: '#f0fdf4' }}>
        <ParentTestimonialVideos />
      </section>

      {/* 6. World-Class Faculty Team */}
      <section id="faculty" style={{ backgroundColor: '#f0fdf4' }}>
        <FacultySection />
      </section>

      {/* 7. Our Campus Facilities */}
      <section id="facilities" style={{ backgroundColor: '#f0fdf4' }}>
        <CampusFacilities />
      </section>



      {/* 9. Advanced Dental Technology Training */}
      <section id="gallery" style={{ backgroundColor: '#f0fdf4' }}>
        <DentalGallery />
      </section>

      {/* 10. Curriculum & Eligibility */}
      <section id="curriculum" className="py-8 px-4 relative overflow-hidden" style={{ backgroundColor: '#f0fdf4' }}>
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-32 -left-32 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 sm:w-72 h-56 sm:h-72 bg-gradient-to-br from-green-400/10 to-yellow-600/10 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-yellow-600 text-white px-3 py-1.5 rounded-full text-sm font-medium mb-3">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Program Overview
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              📖 Curriculum & Eligibility
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
              Discover our comprehensive 5-year program structure and understand the requirements to join our prestigious dental program
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Curriculum */}
            <div className="group">
              <div className="relative bg-white rounded-xl shadow-lg p-5 border border-gray-100 transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                {/* Floating elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">5-Year Curriculum</h3>
                    <p className="text-gray-600 text-sm">Comprehensive learning journey</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      year: "Year 1",
                      focus: "Basic Sciences, Pre-clinical Training, Dental Anatomy",
                      icon: "🔬",
                      color: "from-green-500 to-green-600",
                      duration: "12 months"
                    },
                    {
                      year: "Year 2",
                      focus: "Dental Materials, Pre-clinical training, Pathology & Pharmacology, Microbiology",
                      icon: "🧪",
                      color: "from-green-500 to-emerald-500",
                      duration: "12 months"
                    },
                    {
                      year: "Year 3",
                      focus: "Clinical Training Begins with all departments",
                      icon: "🦷",
                      color: "from-green-500 to-yellow-500",
                      duration: "12 months"
                    },
                    {
                      year: "Year 4",
                      focus: "Advanced Clinical Training, Specialized Procedures",
                      icon: "⚕️",
                      color: "from-green-500 to-yellow-500",
                      duration: "12 months"
                    },
                    {
                      year: "Year 5",
                      focus: "Comprehensive Clinical Training, Internship Program",
                      icon: "🎓",
                      color: "from-green-500 to-green-600",
                      duration: "12 months"
                    }
                  ].map((item, index) => (
                    <div key={index} className="group/item relative">
                      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 rounded-full"></div>
                      <div className="relative pl-6">
                        <div className="flex items-start gap-3">
                          <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center text-white font-bold text-base shadow-lg group-hover/item:scale-110 group-hover/item:rotate-3 transition-all duration-300`}>
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-bold text-gray-900 text-sm group-hover/item:text-green-600 transition-colors">
                                {item.year}
                              </h4>
                              <span className="text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded-full font-medium">
                                {item.duration}
                              </span>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-xs">{item.focus}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <button className="group w-full bg-gradient-to-r from-green-600 via-yellow-600 to-yellow-600 hover:from-green-700 hover:via-yellow-700 hover:to-yellow-700 text-white font-bold py-3 px-5 rounded-lg transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    <div className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="text-sm">Download Full Syllabus PDF</span>
                      <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Eligibility */}
            <div className="group">
              <div className="relative bg-white rounded-xl shadow-lg p-5 border border-gray-100 transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Eligibility Criteria</h3>
                    <p className="text-gray-600 text-sm">Requirements to join our program</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 via-green-50 to-green-100 rounded-xl p-4 border border-green-100 shadow-inner">
                  <h4 className="text-base font-bold text-green-900 mb-4 flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    Academic Requirements
                  </h4>

                  <div className="space-y-3">
                    {[
                      {
                        title: "10+2 with PCB",
                        description: "Physics, Chemistry, Biology with minimum 50%",
                        icon: "📚",
                        color: "from-green-500 to-emerald-500",
                        status: "Required"
                      },
                      {
                        title: "NEET Qualified",
                        description: "Valid NEET score required for admission",
                        icon: "🎯",
                        color: "from-green-500 to-green-600",
                        status: "Mandatory"
                      },
                      {
                        title: "Age Limit",
                        description: "17-25 years as of December 31st",
                        icon: "📅",
                        color: "from-green-500 to-green-600",
                        status: "Required"
                      }
                    ].map((item, index) => (
                      <div key={index} className="group/item bg-white rounded-lg border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg p-3 transform hover:scale-105">
                        <div className="flex items-start gap-3">
                          <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center text-white font-bold text-base shadow-md group-hover/item:scale-110 group-hover/item:rotate-3 transition-all duration-300`}>
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h5 className="font-bold text-green-900 text-sm group-hover/item:text-green-700 transition-colors">
                                {item.title}
                              </h5>
                              <span className="text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full font-bold">
                                {item.status}
                              </span>
                            </div>
                            <p className="text-green-700 leading-relaxed text-xs">{item.description}</p>
                          </div>
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-green-200">
                    <button className="group w-full bg-gradient-to-r from-green-600 via-green-600 to-green-600 hover:from-green-700 hover:via-green-700 hover:to-green-700 text-white font-bold py-3 px-5 rounded-lg transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      <div className="flex items-center justify-center gap-2">
                        <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-sm">Check NEET Eligibility</span>
                        <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. NEET Cut-off Score Table */}
      <section className="px-4 py-4" style={{ backgroundColor: '#f0fdf4' }}>
        <NeetCutoffs />
      </section>

      {/* 12. Admission Timeline */}
      <section id="admission-timeline" style={{ backgroundColor: '#f0fdf4' }}>
        <AdmissionTimelineWidget />
      </section>

      {/* 13. Fees Structure */}
      <section style={{ backgroundColor: '#f0fdf4' }}>
        <FeesScholarships />
      </section>

      {/* 14. Education Loan Apply in One Portal */}
      <section id="education-loan" style={{ backgroundColor: '#f0fdf4' }}>
        <EducationLoanSection />
      </section>

      {/* 15. What Our Students & Parents Say */}
      <section id="testimonials" style={{ backgroundColor: '#f0fdf4' }}>
        <AnimatedTestimonials />
      </section>

      {/* 16. Frequently Asked Questions */}
      <section id="faqs" style={{ backgroundColor: '#f0fdf4' }}>
        <AnimatedFAQ />
      </section>

      {/* Final CTA & Contact */}
      <section id="contact" className="py-8 px-4 bg-gradient-to-r from-green-600 to-yellow-600">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Talk to a Dental Admission Expert
          </h2>
          <p className="text-base text-green-100 mb-6 max-w-2xl mx-auto px-4">
            Get personalized guidance on your BDS admission journey. Our experts are here to help you make the right decision.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-lg p-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-lg">📞</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1 text-sm">Call Us</h3>
              <p className="text-green-600 font-semibold text-sm">+91 98765 43210</p>
              <p className="text-xs text-gray-600">Mon-Sat, 9 AM - 6 PM</p>
            </div>

            <div className="bg-white rounded-lg p-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-lg">✉️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1 text-sm">Email Us</h3>
              <p className="text-green-600 font-semibold text-sm">admissions@jkkn.edu.in</p>
              <p className="text-xs text-gray-600">24/7 support</p>
            </div>

            <div className="bg-white rounded-lg p-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-lg">📍</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1 text-sm">Visit Campus</h3>
              <p className="text-green-600 font-semibold text-sm">JKKN Dental College</p>
              <p className="text-xs text-gray-600">Komarapalayam, Tamil Nadu</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-2 px-5 rounded-lg transition-colors text-sm"
            >
              Book Admission Slot
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-2 px-5 rounded-lg transition-colors text-sm"
            >
              Apply Now (Limited NEET Seats)
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <h3 className="text-base font-bold mb-2">JKKN Dental College</h3>
              <p className="text-green-200 text-xs">
                Leading dental education institution in Tamil Nadu with world-class facilities and clinical training.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-sm">Quick Links</h4>
              <ul className="space-y-1 text-green-200 text-xs">
                <li><a href="#" className="hover:text-yellow-300 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-yellow-300 transition-colors">Programs</a></li>
                <li><a href="#" className="hover:text-yellow-300 transition-colors">Admissions</a></li>
                <li><a href="#" className="hover:text-yellow-300 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 sm:mb-4">Programs</h4>
              <ul className="space-y-2 text-green-200 text-sm sm:text-base">
                <li><a href="#" className="hover:text-yellow-300 transition-colors">BDS</a></li>
                <li><a href="#" className="hover:text-yellow-300 transition-colors">MDS</a></li>
                <li><a href="#" className="hover:text-yellow-300 transition-colors">Diploma Courses</a></li>
                <li><a href="#" className="hover:text-yellow-300 transition-colors">Certificate Courses</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 sm:mb-4">Contact Info</h4>
              <div className="space-y-2 text-green-200 text-sm sm:text-base">
                <p>📞 +91 98765 43210</p>
                <p>✉️ info@jkkn.edu.in</p>
                <p>📍 Komarapalayam, Tamil Nadu</p>
              </div>
            </div>
          </div>

          <div className="border-t border-green-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-green-200 text-sm sm:text-base">
            <p>&copy; 2024 JKKN Dental College. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Contact Dental Admission Advisor"
      >
        <ContactForm />
      </Modal>

      {/* WhatsApp Floating Button */}
      <WhatsAppFloatingButton />
    </div>
  );
}
