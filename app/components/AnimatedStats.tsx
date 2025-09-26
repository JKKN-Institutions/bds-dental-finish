'use client';

import { useState, useEffect, useRef } from 'react';

export default function AnimatedStats() {
  const [isClient, setIsClient] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollInterval: NodeJS.Timeout;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += 1;
        }
      }, 20);
    };

    const stopAutoScroll = () => {
      clearInterval(scrollInterval);
    };

    startAutoScroll();

    scrollContainer.addEventListener('mouseenter', stopAutoScroll);
    scrollContainer.addEventListener('mouseleave', startAutoScroll);
    scrollContainer.addEventListener('touchstart', stopAutoScroll);
    scrollContainer.addEventListener('touchend', startAutoScroll);

    return () => {
      clearInterval(scrollInterval);
      scrollContainer.removeEventListener('mouseenter', stopAutoScroll);
      scrollContainer.removeEventListener('mouseleave', startAutoScroll);
      scrollContainer.removeEventListener('touchstart', stopAutoScroll);
      scrollContainer.removeEventListener('touchend', startAutoScroll);
    };
  }, [isClient]);

  const stats = [
    { number: "92%", label: "Placement Rate", icon: "🎯" },
    { number: "₹5.2", suffix: "LPA", label: "Average Salary", icon: "💰" },
    { number: "200+", label: "Dental Chairs", icon: "🦷" },
    { number: "15+", label: "Years Experience", icon: "🏆" }
  ];

  const companies = [
    { name: "Apollo Hospitals", logo: "🏥", type: "Healthcare" },
    { name: "Clove Dental", logo: "🦷", type: "Dental Chain" },
    { name: "Fortis Healthcare", logo: "🏨", type: "Healthcare" },
    { name: "Government Hospitals", logo: "🏛️", type: "Public Sector" },
    { name: "Private Clinics", logo: "💼", type: "Private Practice" },
    { name: "Dental Chains", logo: "🏢", type: "Corporate" },
    { name: "Apollo Hospitals", logo: "🏥", type: "Healthcare" },
    { name: "Clove Dental", logo: "🦷", type: "Dental Chain" },
    { name: "Fortis Healthcare", logo: "🏨", type: "Healthcare" },
    { name: "Government Hospitals", logo: "🏛️", type: "Public Sector" },
    { name: "Private Clinics", logo: "💼", type: "Private Practice" },
    { name: "Dental Chains", logo: "🏢", type: "Corporate" },
    { name: "Apollo Hospitals", logo: "🏥", type: "Healthcare" }
  ];

  return (
    <section className="py-12 px-4 bg-green-50/40">
      <div className="max-w-7xl mx-auto">
        {/* Stats Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-['Poppins']">
            Why Choose JKKN Dental College?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-['Poppins']">
            Proven track record of excellence in dental education and career placement.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm border border-green-100/50">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-green-600/80 mb-1 font-['Poppins']">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-sm text-gray-600 font-['Poppins']">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Top Recruiters Section */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 font-['Poppins']">
            Top Recruiters
          </h3>
        </div>

        {/* Auto-scrolling Companies */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {companies.map((company, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 bg-white rounded-lg p-4 shadow-sm border border-green-200/50 min-w-[200px]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100/60 rounded-lg flex items-center justify-center text-lg">
                  {company.logo}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm font-['Poppins']">{company.name}</div>
                  <div className="text-xs text-gray-500 font-['Poppins']">{company.type}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 