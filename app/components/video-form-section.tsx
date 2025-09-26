'use client'

import VideoPlayer from './VideoPlayer'
import ContactForm from './ContactForm'

export default function VideoFormSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Experience Our Campus
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Watch our campus tour video and get in touch with us to learn more about our BDS program
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Video */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="aspect-video">
              <VideoPlayer />
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Campus Tour
              </h3>
              <p className="text-gray-600 mb-4">
                Take a virtual tour of our state-of-the-art dental facilities, modern classrooms, 
                and world-class infrastructure that makes BDS Dental the preferred choice for 
                dental education.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Modern Labs
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Advanced Equipment
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Expert Faculty
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10">
            <div className="mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Get Started Today
              </h3>
              <p className="text-gray-600">
                Ready to begin your journey in dental education? Fill out the form below and 
                our admissions team will get back to you within 24 hours.
              </p>
            </div>

            <ContactForm />

            {/* Additional Info */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 text-sm">📞</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Need immediate assistance?</p>
                  <p className="text-sm text-gray-600">
                    Call us at <span className="font-semibold text-red-600">+91 98765 43210</span> 
                    or email <span className="font-semibold text-red-600">admissions@bdsdental.edu</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 