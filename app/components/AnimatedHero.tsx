'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useRef } from 'react';

interface AnimatedHeroProps {
  onOpenModal: () => void;
}

export default function AnimatedHero({ onOpenModal }: AnimatedHeroProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = async () => {
    if (videoRef.current) {
      try {
        if (isPlaying) {
          videoRef.current.pause();
        } else {
          await videoRef.current.play();
        }
      } catch (error) {
        console.error('Error playing video:', error);
      }
    }
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut" as const
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const trustBadgeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "backOut" as const
      }
    }
  };

  return (
    <section className="relative bg-[#f0fdf4] pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 md:pb-16 px-4 overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary Background Circles */}
        <motion.div
          className="absolute -top-40 -right-40 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-br from-green-200/40 to-green-300/50 rounded-full opacity-20 blur-xl"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-48 sm:w-60 h-48 sm:h-60 bg-gradient-to-br from-yellow-200/40 to-yellow-300/50 rounded-full opacity-20 blur-xl"
          animate={{
            rotate: -360,
            scale: [1, 0.8, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Secondary Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-20 h-20 bg-gradient-to-r from-green-100/60 to-yellow-100/60 rounded-full opacity-30"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-gradient-to-r from-yellow-200 to-green-200 rounded-full opacity-40"
          animate={{
            y: [0, 15, 0],
            x: [0, -8, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 109, 58, 0.1) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-12 lg:items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div>
            <motion.h1
              className="font-bold text-gray-900 mb-4 sm:mb-6 leading-tight font-['Poppins']"
              variants={itemVariants}
            >
              <motion.div 
                className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl mb-2 bg-gradient-to-r from-green-600 via-green-700 to-yellow-600 bg-clip-text text-transparent font-['Poppins']"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                Top Private Dental College
              </motion.div>
              <motion.div className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 font-['Poppins']">
                in Tamilnadu | <span className="text-green-600 font-bold font-['Poppins']">97% Get</span>
              </motion.div>
              <motion.div className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-['Poppins']">
                <span className="bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent font-bold font-['Poppins']">
                  ₹5.2 LPA Jobs | <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent font-extrabold animate-pulse">Limited Seats</span>
                </span>
              </motion.div>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed font-['Poppins']"
              variants={itemVariants}
            >
              NEET Qualified? Get ready for 5 years of immersive dental education with hands-on clinical training, cutting-edge simulation labs, and real patient interaction from Year 3.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 mb-6 sm:mb-8"
              variants={itemVariants}
            >
              {/* Primary CTA Button */}
              <motion.button
                className="bg-gradient-to-r from-green-600 via-green-700 to-yellow-600 hover:from-green-700 hover:via-green-800 hover:to-yellow-700 text-white font-bold py-3 sm:py-4 px-1 sm:px-4 rounded-2xl shadow-2xl transform transition-all duration-300 relative overflow-hidden group border border-white/20 font-['Poppins'] w-fit self-center sm:self-auto mx-auto sm:mx-0"
                variants={buttonVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(0, 109, 58, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-green-500/20 to-yellow-400/20"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 0.5
                  }}
                />

                {/* Button Content */}
                <span className="relative  flex items-center justify-center gap-2 text-sm sm:text-xs whitespace-nowrap">
                  <motion.div
                    className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center"
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
                    <span className="text-xs">💬</span>
                  </motion.div>
                  <span className="font-bold">Apply for BDS Admission</span>
                  <motion.div
                    className="w-1 h-1 bg-white rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                </span>
              </motion.button>

              {/* Secondary CTA Button */}
              <motion.button
                className="bg-white/90 backdrop-blur-sm border-2 border-green-600/50 text-green-700 hover:bg-green-50 hover:border-green-700 hover:text-green-800 font-bold py-3 sm:py-4 px-1 sm:px-4 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden group w-fit self-center sm:self-auto mx-auto sm:mx-0"
                variants={buttonVariants}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px -12px rgba(0, 109, 58, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Subtle Background Animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-50/50 via-yellow-50/50 to-transparent"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                {/* Subtle Shimmer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-green-100/20 to-transparent"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 1
                  }}
                />

                {/* Button Content */}
                <span className="relative flex items-center justify-center gap-2 text-sm sm:text-xs whitespace-nowrap">
                  <motion.div
                    className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center"
                    animate={{
                      scale: [1, 1.05, 1],
                      rotate: [0, 3, -3, 0]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.3
                    }}
                  >
                    <span className="text-xs">📄</span>
                  </motion.div>
                  <span className="font-semibold">Download Career Kit</span>
                  <motion.div
                    className="w-1 h-1 bg-green-400 rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.8
                    }}
                  />
                </span>
              </motion.button>
            </motion.div>


          </div>

          {/* Hero Right Side - Enhanced Video Section */}
          <motion.div
            className="mt-8 sm:mt-12 lg:mt-0 relative"
            variants={itemVariants}
          >
            {/* Video Container */}
            <motion.div
              className="relative bg-gradient-to-br from-white via-green-50 to-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-green-200/50 overflow-hidden"
              whileHover={{
                y: -12,
                boxShadow: "0 25px 50px -12px rgba(0, 109, 58, 0.25), 0 0 0 1px rgba(0, 109, 58, 0.1)"
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 opacity-60"></div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-600/5 via-yellow-600/5 to-green-600/5"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              {/* Floating Decorative Elements */}
              <motion.div
                className="absolute top-6 right-6 w-8 h-8 bg-gradient-to-r from-green-400 to-yellow-500 rounded-full opacity-60"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 0.8, 0.6],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute bottom-6 left-6 w-6 h-6 bg-gradient-to-r from-yellow-400 to-green-500 rounded-full opacity-60"
                animate={{
                  scale: [1, 0.8, 1],
                  opacity: [0.6, 0.4, 0.6],
                  rotate: [0, -180, -360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />

              {/* Video Player */}
              <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 bg-black rounded-2xl overflow-hidden border border-white/50">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={toggleVideo}
                  onPlay={handleVideoPlay}
                  onPause={handleVideoPause}
                  onLoadedData={handleVideoLoaded}
                  controls={false}
                  preload="auto"
                  muted
                  playsInline
                  loop
                >
                  <source src="/video/hero-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Play/Pause Overlay */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer" onClick={toggleVideo}>
                    {/* Outer Glow Ring */}
                    <motion.div
                      className="absolute w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-r from-green-400/30 to-yellow-500/30 rounded-full blur-xl"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    {/* Main Play Button */}
                    <motion.div
                      className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 via-green-600 to-yellow-500 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl cursor-pointer border-2 border-white/30 overflow-hidden group"
                      whileHover={{
                        scale: 1.15,
                        boxShadow: "0 20px 40px rgba(0, 109, 58, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.2)"
                      }}
                      whileTap={{ scale: 0.9 }}
                      animate={{
                        boxShadow: [
                          "0 10px 30px rgba(0, 109, 58, 0.3)",
                          "0 15px 35px rgba(0, 109, 58, 0.4)",
                          "0 10px 30px rgba(0, 109, 58, 0.3)"
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {/* Animated Background Gradient */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-green-400 via-green-500 to-yellow-400"
                        animate={{
                          backgroundPosition: ["0% 0%", "100% 100%"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />

                      {/* Inner Glow Ring */}
                      <div className="absolute inset-1 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>

                      {/* Shimmer Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "linear",
                          delay: 0.5
                        }}
                      />

                      {/* Play Icon Container */}
                      <div className="relative flex items-center justify-center">
                        {/* Play Icon Background */}
                        <div className="absolute w-6 h-6 sm:w-8 sm:h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                          <motion.div
                            className="w-0 h-0 border-l-[4px] sm:border-l-[6px] border-l-green-600 border-t-[3px] sm:border-t-[4px] border-t-transparent border-b-[3px] sm:border-b-[4px] border-b-transparent ml-0.5"
                            animate={{
                              x: [0, 2, 0],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                        </div>

                        {/* Outer Ring */}
                        <motion.div
                          className="absolute w-10 h-10 sm:w-12 sm:h-12 border-2 border-white/40 rounded-full"
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.4, 0.6, 0.4],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  </div>
                )}

                {/* Pause Overlay (when playing) */}
                {isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer" onClick={toggleVideo}>
                    <motion.div
                      className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <div className="w-0 h-0 border-l-[3px] border-l-white border-t-[2px] border-t-transparent border-b-[2px] border-b-transparent"></div>
                    </motion.div>
                  </div>
                )}

                {/* Bottom Gradient Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
} 