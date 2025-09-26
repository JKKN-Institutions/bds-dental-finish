'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function WhatsAppFloatingButton() {
  const [isHovered, setIsHovered] = useState(false);

  const phoneNumber = "+91XXXXXXXXXX"; // Replace with actual number
  const message = "Hi! I'm interested in BDS admissions.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50">
      {/* Enhanced Tooltip - Hidden on mobile */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.8 }}
          className="absolute bottom-16 right-0 bg-gradient-to-r from-green-600 to-yellow-600 text-white px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap shadow-xl border border-green-400 hidden sm:block"
        >
          <div className="flex items-center gap-1.5">
            <span className="text-sm">💬</span>
            <span>Chat on WhatsApp</span>
          </div>
          {/* Enhanced tooltip arrow */}
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-green-600"></div>
        </motion.div>
      )}

      {/* Refined Pulse Rings */}
      <div className="relative">
        {/* Outer pulse ring */}
        <motion.div
          className="absolute inset-0 w-12 h-12 sm:w-12 sm:h-12 bg-green-400 rounded-full opacity-25"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.25, 0, 0.25],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Middle pulse ring */}
        <motion.div
          className="absolute inset-0 w-12 h-12 sm:w-12 sm:h-12 bg-yellow-400 rounded-full opacity-15"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0, 0.15],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6
          }}
        />

        {/* Main WhatsApp Button */}
        <motion.button
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(false)} // Hide tooltip on touch
          className="relative w-12 h-12 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 via-green-600 to-yellow-600 hover:from-green-600 hover:via-green-700 hover:to-yellow-700 active:from-green-700 active:via-green-800 active:to-yellow-800 rounded-full shadow-xl hover:shadow-green-500/40 active:shadow-green-500/60 transition-all duration-300 flex items-center justify-center group border border-green-400/40 touch-manipulation"
          whileHover={{ 
            scale: 1.12,
            rotate: 3,
            transition: { duration: 0.2, ease: "easeOut" }
          }}
          whileTap={{ 
            scale: 0.88,
            rotate: -3,
            transition: { duration: 0.1 }
          }}
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(0, 109, 58, 0.6)",
              "0 0 0 6px rgba(0, 109, 58, 0)",
              "0 0 0 0 rgba(0, 109, 58, 0)"
            ]
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            WebkitTapHighlightColor: 'transparent',
            WebkitTouchCallout: 'none',
            WebkitUserSelect: 'none',
            userSelect: 'none'
          }}
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-green-400 via-green-500 to-yellow-500 rounded-full"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              delay: 1
            }}
          />
          
          {/* WhatsApp Icon */}
          <motion.div
            className="relative z-10 text-white text-xl sm:text-2xl"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg 
              className="w-6 h-6 sm:w-7 sm:h-7" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </motion.div>
        </motion.button>
      </div>
    </div>
  );
}
