'use client';

import { useState, useEffect, useRef } from 'react';

export default function ParentTestimonialVideos() {
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

  const testimonials = [
    {
      name: "Mrs. Priya Sharma",
      child: "Dr. Rahul Sharma (BDS 2019)",
      role: "Parent",
      video: "/video/parent-testimonial-1.mp4",
      avatar: "👩",
      thumbnail: "/images/testimonials/parent-1-thumb.svg"
    },
    {
      name: "Mr. Rajesh Kumar",
      child: "Dr. Sneha Kumar (BDS 2020)",
      role: "Parent",
      video: "/video/parent-testimonial-2.mp4",
      avatar: "👨",
      thumbnail: "/images/testimonials/parent-2-thumb.svg"
    },
    {
      name: "Mrs. Anjali Patel",
      child: "Dr. Amit Patel (BDS 2018)",
      role: "Parent",
      video: "/video/parent-testimonial-3.mp4",
      avatar: "👩",
      thumbnail: "/images/testimonials/parent-3-thumb.svg"
    },
    {
      name: "Mr. Vikram Singh",
      child: "Dr. Priya Singh (BDS 2021)",
      role: "Parent",
      video: "/video/parent-testimonial-4.mp4",
      avatar: "👨",
      thumbnail: "/images/testimonials/parent-4-thumb.svg"
    },
    {
      name: "Mrs. Meera Reddy",
      child: "Dr. Arjun Reddy (BDS 2019)",
      role: "Parent",
      video: "/video/parent-testimonial-5.mp4",
      avatar: "👩",
      thumbnail: "/images/testimonials/parent-5-thumb.svg"
    },
    {
      name: "Mr. Suresh Malhotra",
      child: "Dr. Anjali Malhotra (BDS 2020)",
      role: "Parent",
      video: "/video/parent-testimonial-6.mp4",
      avatar: "👨",
      thumbnail: "/images/testimonials/parent-6-thumb.svg"
    },
    {
      name: "Mrs. Priya Sharma",
      child: "Dr. Rahul Sharma (BDS 2019)",
      role: "Parent",
      video: "/video/parent-testimonial-7.mp4",
      avatar: "👩",
      thumbnail: "/images/testimonials/parent-7-thumb.svg"
    },
    {
      name: "Mr. Rajesh Kumar",
      child: "Dr. Sneha Kumar (BDS 2020)",
      role: "Parent",
      video: "/video/parent-testimonial-8.mp4",
      avatar: "👨",
      thumbnail: "/images/testimonials/parent-8-thumb.svg"
    },
    {
      name: "Mrs. Anjali Patel",
      child: "Dr. Amit Patel (BDS 2018)",
      role: "Parent",
      video: "/video/parent-testimonial-9.mp4",
      avatar: "👩",
      thumbnail: "/images/testimonials/parent-9-thumb.svg"
    }
  ];

  return (
    <section className="py-12 px-4 bg-[#f0fdf4]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 font-['Poppins']">
            👨‍👩‍👧 Parent Testimonials
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-['Poppins']">
            Hear from parents about their children's journey at JKKN Dental College.
          </p>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-80 h-96 bg-gray-100 rounded-lg p-6 flex flex-col"
            >
              {/* Video Thumbnail */}
              <div className="flex-1 bg-gray-200 rounded-lg mb-4 overflow-hidden relative">
                <img
                  src={testimonial.thumbnail}
                  alt={`${testimonial.name} testimonial thumbnail`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to a placeholder if image fails to load
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='240' viewBox='0 0 320 240'%3E%3Crect width='320' height='240' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%236b7280' font-family='Arial' font-size='16'%3EVideo Thumbnail%3C/text%3E%3C/svg%3E";
                  }}
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-10 transition-all duration-300 cursor-pointer">
                  <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                    <div className="text-xs text-gray-500">{testimonial.child}</div>
                  </div>
                </div>
                <p className="text-xs text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
