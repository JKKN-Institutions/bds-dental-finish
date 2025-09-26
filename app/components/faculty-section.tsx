'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

interface FacultyMember {
  id: number;
  name: string;
  designation: string;
  department: string;
  qualifications: string[];
  image: string;
  email: string;
  experience?: string;
  achievements?: string[];
  linkedin?: string;
}

const facultyData: FacultyMember[] = [
  {
    id: 1,
    name: "Dr. S. Vinod Thangaswamy",
    designation: "Professor",
    department: "Oral & Maxillofacial Surgery",
    qualifications: ["MDS - 2007"],
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400&h=400&fit=crop&crop=face",
    email: "vinod.thangaswamy@jkkn.edu.in",
    experience: "15 years experience",
    achievements: ["Guided 5 PG students"],
    linkedin: "https://linkedin.com/in/dr-s-vinod-thangaswamy"
  },
  {
    id: 2,
    name: "Dr. Santhoshkumar",
    designation: "Tutor",
    department: "Oral & Maxillofacial Surgery",
    qualifications: ["BDS - 2015"],
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400&h=400&fit=crop&crop=face", // placeholder image
    email: "santhoshkumar@jkkn.edu.in",
    experience: "6 years experience", 
    achievements: ["Handled 9 students"], 
    linkedin: "https://linkedin.com/" 
  },
  {
    id: 3,
    name: "Dr. J. Vijay Thiyagarajan",
    designation: "Reader",
    department: "Oral & Maxillofacial Surgery",
    qualifications: ["MDS - 2018"],
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400&h=400&fit=crop&crop=face",
    email: "vijay.thiyagarajan@jkkn.edu.in",
    experience: "7 years experience",
    achievements: ["No. of PGs guided: 0"],
    linkedin: "https://linkedin.com/in/dr-j-vijay-thiyagarajan"
  },
  {
    id: 4,
    name: "Dr. M. Venkatesh Praveen",
    designation: "Sr. Lecturer",
    department: "Oral & Maxillofacial Surgery",
    qualifications: ["MDS - 2022"],
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400&h=400&fit=crop&crop=face",
    email: "venkatesh.praveen@jkkn.edu.in",
    experience: "2 years experience",
    achievements: ["No. of PGs guided: 0"],
    linkedin: "https://linkedin.com/in/dr-m-venkatesh-praveen"
  },
  {
    id: 5,
    name: "Dr. J.V. Karunakaran",
    designation: "Professor & HOD",
    department: "Conservative and Endodontics",
    qualifications: ["M.D.S."],
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400&h=400&fit=crop&crop=face",
    email: "jvkarunakaran@jkkn.edu.in",
    experience: "34 years experience",
    achievements: [],
    linkedin: "https://linkedin.com/"
  },
  {
    id: 6,
    name: "Dr. N. Jayaprakash",
    designation: "Professor",
    department: "Conservative and Endodontics",
    qualifications: ["M.D.S."],
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400&h=400&fit=crop&crop=face",
    email: "njayaprakash@jkkn.edu.in",
    experience: "12 years experience",
    achievements: [],
    linkedin: "https://linkedin.com/"
  },
  {
    id: 7,
    name: "Dr. N. Ragavendran",
    designation: "Reader",
    department: "Conservative and Endodontics",
    qualifications: ["M.D.S."],
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400&h=400&fit=crop&crop=face",
    email: "nragavendran@jkkn.edu.in",
    experience: "11 years experience",
    achievements: [],
    linkedin: "https://linkedin.com/"
  },
  {
    id: 8,
    name: "Dr. Chris Susan Abraham",
    designation: "Reader",
    department: "Conservative and Endodontics",
    qualifications: ["M.D.S."],
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400&h=400&fit=crop&crop=face",
    email: "chrisabraham@jkkn.edu.in",
    experience: "6 years experience",
    achievements: [],
    linkedin: "https://linkedin.com/"
  },
  {
    id: 9,
    name: "Dr. S. Mary Vinola Jenifer",
    designation: "Reader",
    department: "Conservative and Endodontics",
    qualifications: ["M.D.S.", "PhD"],
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400&h=400&fit=crop&crop=face",
    email: "maryjenifer@jkkn.edu.in",
    experience: "7 years experience",
    achievements: [],
    linkedin: "https://linkedin.com/"
  },
  {
    id: 10,
    name: "Dr. K. Shanmathee",
    designation: "Tutor",
    department: "Conservative and Endodontics", 
    qualifications: ["BDS"],
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400&h=400&fit=crop&crop=face", // Placeholder image
    email: "shanmathee@jkkn.edu.in",
    experience: "4 years experience",
    achievements: [],
    linkedin: "https://linkedin.com/"
  },
  {
    id: 11,
    name: "Dr. E. Jayapriya",
    designation: "Tutor",
    department: "Conservative and Endodontics", 
    qualifications: ["BDS"],
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400&h=400&fit=crop&crop=face", // Placeholder image
    email: "jayapriya@jkkn.edu.in",
    experience: "3 years experience",
    achievements: [],
    linkedin: "https://linkedin.com/"
  },
  {
    id: 12,
    name: "Dr. Anjali Patel",
    designation: "Associate Professor",
    department: "Orthodontics",
    qualifications: ["MDS", "MOrth", "FDS"],
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
    email: "anjali.patel@jkkn.edu.in",
    experience: "12 years experience",
    achievements: ["Orthodontics Excellence Award", "28+ Research Publications"],
    linkedin: "https://linkedin.com/in/dr-anjali-patel"
  },

  {
    id: 13,
    name: "Dr. Dhanasekar B",
    designation: "Principal, Professor & HoD",
    department: "Prosthodontics",
    qualifications: ["MDS - 2002"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    email: "dhanasekar.b@jkkn.edu.in",
    experience: "22 years experience",
    achievements: ["3 Research Publications"],
    linkedin: "https://linkedin.com/in/dr-dhanasekar-b"
  },
  {
    id: 14,
    name: "Dr. C. Dhinesh Kumar",
    designation: "Professor",
    department: "Prosthodontics",
    qualifications: ["MDS - PhD - 2011"],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    email: "dhinesh.kumar@jkkn.edu.in",
    experience: "14 years experience",
    achievements: ["1 Research Publication"],
    linkedin: "https://linkedin.com/in/dr-c-dhinesh-kumar"
  },
  {
    id: 15,
    name: "Dr. D. Saisadan",
    designation: "Professor",
    department: "Prosthodontics",
    qualifications: ["MDS - 2012"],
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400&h=400&fit=crop&crop=face",
    email: "saisadan.d@jkkn.edu.in",
    experience: "12 years experience",
    achievements: ["10 Research Publications"],
    linkedin: "https://linkedin.com/in/dr-d-saisadan"
  },
  {
    id: 16,
    name: "Dr. N. Jagadesaan",
    designation: "Reader",
    department: "Prosthodontics",
    qualifications: ["MDS - 2013"],
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=400&fit=crop&crop=face",
    email: "jagadesaan.n@jkkn.edu.in",
    experience: "11 years experience",
    achievements: ["4 Research Publications"],
    linkedin: "https://linkedin.com/in/dr-n-jagadesaan"
  },
  {
    id: 17,
    name: "Dr. K. Praveena",
    designation: "Reader",
    department: "Prosthodontics",
    qualifications: ["MDS - 2019"],
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&h=400&fit=crop&crop=face",
    email: "praveena.k@jkkn.edu.in",
    experience: "5 years experience",
    achievements: ["5 Research Publications"],
    linkedin: "https://linkedin.com/in/dr-k-praveena"
  },
  {
    id: 18,
    name: "Dr. K. G. Gowtham Vignesh",
    designation: "Sr. Lecturer",
    department: "Prosthodontics",
    qualifications: ["MDS - 2024"],
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop&crop=face",
    email: "gowtham.vignesh@jkkn.edu.in",
    experience: "1 year experience",
    achievements: ["0 Research Publications"],
    linkedin: "https://linkedin.com/in/dr-k-g-gowtham-vignesh"
  },
  {
    id: 19,
    name: "Dr. P. Karthikeyan",
    designation: "Sr. Lecturer",
    department: "Prosthodontics",
    qualifications: ["MDS - 2023"],
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    email: "karthikeyan.p@jkkn.edu.in",
    experience: "0 years experience",
    achievements: ["2 Research Publications"],
    linkedin: "https://linkedin.com/in/dr-p-karthikeyan"
  },
  {
    id: 20,
    name: "Dr. P.K. Sasi Kumar",
    designation: "Professor & HoD",
    department: "Periodontics",
    qualifications: ["MDS", "PhD"],
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400&h=400&fit=crop&crop=face",
    email: "pk.sasikumar@jkkn.edu.in",
    experience: "13 years experience",
    achievements: [],
    linkedin: "https://linkedin.com/"
},
{
    id: 21,
    name: "Dr. S. Santhosh",
    designation: "Reader",
    department: "Periodontics",
    qualifications: ["MDS", "PhD"],
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400&h=400&fit=crop&crop=face",
    email: "s.santhosh@jkkn.edu.in",
    experience: "10 years experience",
    achievements: [],
    linkedin: "https://linkedin.com/"
},
{
    id: 22,
    name: "Dr. R. Dhivya",
    designation: "Reader",
    department: "Periodontics",
    qualifications: ["MDS"],
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400&h=400&fit=crop&crop=face",
    email: "r.dhivya@jkkn.edu.in",
    experience: "6 years experience",
    achievements: [],
    linkedin: "https://linkedin.com/"
},
{
    id: 23,
    name: "Dr. M. Radhika",
    designation: "Sr. Lecturer",
    department: "Periodontics",
    qualifications: ["MDS"],
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400&h=400&fit=crop&crop=face",
    email: "m.radhika@jkkn.edu.in",
    experience: "2 years experience",
    achievements: [],
    linkedin: "https://linkedin.com/"
},
{
    id: 24,
    name: "Dr. M. Nivethitha",
    designation: "Sr. Lecturer",
    department: "Periodontics",
    qualifications: ["MDS"],
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400&h=400&fit=crop&crop=face",
    email: "m.nivethitha@jkkn.edu.in",
    experience: "2 years experience",
    achievements: [],
    linkedin: "https://linkedin.com/"
},
{
    id: 25,
    name: "Dr. J. Jasmine Angel",
    designation: "Sr. Lecturer",
    department: "Periodontics",
    qualifications: ["MDS"],
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400&h=400&fit=crop&crop=face",
    email: "j.jasmineangel@jkkn.edu.in",
    experience: "0 years experience",
    achievements: [],
    linkedin: "https://linkedin.com/"
},
  {
    id: 26,
    name: "Dr. T. Dineshkumar",
    designation: "Professor & HOD",
    department: "Oral Pathology",
    qualifications: ["MDS"],
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400&h=400&fit=crop&crop=face",
    email: "t.dineshkumar@jkkn.edu.in",
    experience: "18 years experience",
    achievements: ["HOD since 2006", "Academic Leadership"],
    linkedin: "https://linkedin.com/in/dr-t-dineshkumar"
  },
  {
    id: 27,
    name: "Dr. S. Maheshwari",
    designation: "Sr. Lecturer",
    department: "Oral Pathology",
    qualifications: ["MDS"],
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400&h=400&fit=crop&crop=face",
    email: "s.maheshwari@jkkn.edu.in",
    experience: "3 years experience",
    achievements: ["Academic Contributor", "Research Guidance"],
    linkedin: "https://linkedin.com/in/dr-s-maheshwari"
  },
  {
    id: 28,
    name: "Dr. J. Swathiraman",
    designation: "Sr. Lecturer",
    department: "Oral Pathology",
    qualifications: ["MDS"],
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop&crop=face",
    email: "j.swathiraman@jkkn.edu.in",
    experience: "2 years experience",
    achievements: ["Early Career Researcher", "Published 9 Papers"],
    linkedin: "https://linkedin.com/in/dr-j-swathiraman"
  },
  
  {
    id: 29,
    name: "Dr. B. Sasirekha",
    designation: "Professor & HOD",
    department: "Oral Medicine and Radiology",
    qualifications: ["MDS"],
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400&h=400&fit=crop&crop=face", 
    email: "sasirekha@jkkn.edu.in",
    experience: "12 years experience",
    achievements: [],
    linkedin: ""
  },
  {
    id: 30,
    name: "Dr. P.K. Meenapriya",
    designation: "Professor",
    department: "Oral Medicine and Radiology",
    qualifications: ["MDS", "PhD"],
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400&h=400&fit=crop&crop=face",
    email: "meenapriya@jkkn.edu.in",
    experience: "9 years experience",
    achievements: [],
    linkedin: ""
  },
  {
    id: 31,
    name: "Dr. K. Sakthi Saranya Devi",
    designation: "Reader",
    department: "Oral Medicine and Radiology",
    qualifications: ["MDS"],
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400&h=400&fit=crop&crop=face", 
    email: "saranyadevi@jkkn.edu.in",
    experience: "7 years experience",
    achievements: [],
    linkedin: ""
  },
  {
    id: 32,
    name: "Dr. S. Gokulapriya",
    designation: "Sr. Lecturer",
    department: "Oral Medicine and Radiology",
    qualifications: ["MDS"],
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400&h=400&fit=crop&crop=face",
    email: "gokulapriya@jkkn.edu.in",
    experience: "3 years experience",
    achievements: [],
    linkedin: ""
  },
  {
    id: 33,
    name: "Dr. Arun Singh",
    designation: "Professor",
    department: "Pedodontics",
    qualifications: ["MDS", "PhD", "FICD"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    email: "arun.singh@jkkn.edu.in",
    experience: "16 years experience",
    achievements: ["Pathology Research Excellence", "38+ Research Publications"],
    linkedin: "https://linkedin.com/in/dr-arun-singh"
  },
  {
    id: 34,
    name: "Dr. K. Keerthana",
    designation: "Tutor",
    department: "Inplayer",
    qualifications: ["BDS - 2018"],
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400&h=400&fit=crop&crop=face",
    email: "keerthana@jkkn.edu.in", 
    experience: "1 year experience", 
    achievements: [], 
    linkedin: "https://linkedin.com/" 
},
  {
    id: 35,
    name: "Dr. C. Selvakumar",
    designation: "Reader & HOD",
    department: "Public Health Dentistry",
    qualifications: ["MDS"],
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    email: "c.selvakumar@jkkn.edu.in",
    experience: "8 years experience",
    achievements: ["4 Research Publications", "Contributions to Department Growth"],
    linkedin: "https://linkedin.com/in/dr-c-selvakumar"
  },  
  {
    id: 36,
    name: "Dr. Arun Singh",
    designation: "Professor",
    department: "Basic Medical Science",
    qualifications: ["MDS", "PhD", "FICD"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    email: "arun.singh@jkkn.edu.in",
    experience: "16 years experience",
    achievements: ["Pathology Research Excellence", "38+ Research Publications"],
    linkedin: "https://linkedin.com/in/dr-arun-singh"
  }
];

export default function FacultySection() {
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyMember | null>(null);
  const [activeDepartment, setActiveDepartment] = useState<string>('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const departments = ['All', ...Array.from(new Set(facultyData.map(f => f.department)))];

  const filteredFaculty = activeDepartment === 'All' 
    ? facultyData 
    : facultyData.filter(f => f.department === activeDepartment);

  // Auto-scroll functionality
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollInterval: NodeJS.Timeout;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer && !isHovered) {
          scrollContainer.scrollLeft += 2; // Adjust speed here
          
          // Reset scroll position when reaching the end
          if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
            scrollContainer.scrollLeft = 0;
          }
        }
      }, 50); // Adjust interval here
    };

    startAutoScroll();

    return () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
    };
  }, [isHovered]);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredFaculty.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredFaculty.length) % filteredFaculty.length);
  };

  return (
    <section className="py-6 px-4 bg-[#f0fdf4] relative overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-48 h-48 bg-gradient-to-br from-green-100/40 to-yellow-200/40 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-green-100/40 to-emerald-200/40 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-gradient-to-br from-yellow-100/30 to-orange-200/30 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          {/* Premium Header with Enhanced Elegance */}
          <div className="text-center mb-8">
            {/* Enhanced Typography */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 font-['Poppins']">
              👩‍⚕️ World-Class Faculty Team
            </h2>
            
            {/* Elegant Subtitle */}
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4 font-['Poppins']">
                Learn from distinguished dental professionals with decades of experience, 
                international recognition, and cutting-edge research expertise
              </p>
            </div>
          </div>

          {/* Enhanced Department Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-10 w-full"
          >
            {/* Desktop Version - 2 Rows */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-5 gap-3 max-w-4xl mx-auto">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => {
                      setActiveDepartment(dept);
                      setCurrentIndex(0);
                    }}
                    className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 h-16 flex items-center justify-center text-center ${
                      activeDepartment === dept
                        ? 'bg-gradient-to-r from-green-600 to-yellow-600 text-white shadow-xl'
                        : 'bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200 hover:border-green-300 shadow-md'
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>

            {/* Tablet Version - 2 Rows */}
            <div className="hidden md:block lg:hidden">
              <div className="grid grid-cols-4 gap-3 max-w-3xl mx-auto">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => {
                      setActiveDepartment(dept);
                      setCurrentIndex(0);
                    }}
                    className={`px-3 py-3 rounded-xl text-xs font-semibold transition-all duration-300 transform hover:scale-105 h-14 flex items-center justify-center text-center ${
                      activeDepartment === dept
                        ? 'bg-gradient-to-r from-green-600 to-yellow-600 text-white shadow-xl'
                        : 'bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200 hover:border-green-300 shadow-md'
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Version - 2 Rows */}
            <div className="md:hidden">
              <div className="grid grid-cols-2 gap-3">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => {
                      setActiveDepartment(dept);
                      setCurrentIndex(0);
                    }}
                    className={`px-3 py-4 rounded-xl text-xs font-semibold transition-all duration-300 transform hover:scale-105 h-16 flex items-center justify-center text-center ${
                      activeDepartment === dept
                        ? 'bg-gradient-to-r from-green-600 to-yellow-600 text-white shadow-xl'
                        : 'bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200 hover:border-green-300 shadow-md'
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Faculty Profiles Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="relative"
          >
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-6"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {filteredFaculty.map((faculty, index) => (
                <div
                  key={faculty.id}
                  className="flex-shrink-0 w-64 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:scale-105"
                >
                  {/* Faculty Image Section */}
                  <div className="h-32 bg-gradient-to-br from-green-100 to-yellow-100 flex items-center justify-center relative overflow-hidden">
                    {/* Small Square Image Card */}
                    <div className="w-28 h-20 rounded-lg shadow-lg overflow-hidden border-2 border-white relative z-10 bg-gray-100">
                      <Image
                        src={faculty.image}
                        alt={`${faculty.name} - ${faculty.designation}`}
                        width={112}
                        height={80}
                        className="w-full h-full object-contain object-center"
                        priority={index < 3}
                      />
                    </div>
                    
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50/60 to-yellow-50/60"></div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full opacity-60"></div>
                    <div className="absolute bottom-2 left-2 w-2 h-2 bg-yellow-400 rounded-full opacity-60"></div>
                  </div>

                  {/* Faculty Info */}
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{faculty.name}</h3>
                    <p className="text-green-600 font-semibold text-xs mb-1">{faculty.designation}</p>
                    <p className="text-gray-600 text-xs mb-2">{faculty.department}</p>
                    
                    {/* Qualifications */}
                    <div className="flex flex-wrap gap-1 mb-2">
                      {faculty.qualifications.map((qual, idx) => (
                        <span key={idx} className="bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full text-xs font-medium">
                          {qual}
                        </span>
                      ))}
                    </div>

                    {/* Experience & Achievements */}
                    <div className="space-y-1 mb-3">
                      {/* Highlighted Experience Section */}
                      <div className="bg-gradient-to-r from-green-50 to-yellow-50 border border-green-200 rounded-lg p-2 mb-2">
                        <div className="flex items-center gap-1 mb-1">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-500 to-yellow-600 rounded-full animate-pulse"></div>
                          <span className="text-xs font-semibold text-green-700 uppercase tracking-wide">Experience</span>
                        </div>
                        <p className="text-xs font-bold text-green-900">{faculty.experience}</p>
                      </div>
                      
                      {/* Achievements */}
                      {faculty.achievements?.slice(0, 2).map((achievement, idx) => (
                        <p key={idx} className="text-xs text-gray-700">• {achievement}</p>
                      ))}
                    </div>

                    {/* Contact Buttons */}
                    <div className="flex items-center justify-between">
                      <a
                        href={`mailto:${faculty.email}`}
                        className="flex items-center gap-1 bg-gradient-to-r from-green-400 to-green-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold hover:shadow-md transition-all duration-300 hover:scale-105"
                      >
                        <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Contact
                      </a>
                      {faculty.linkedin && (
                        <a 
                          href={faculty.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 bg-gradient-to-r from-green-400 to-green-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold hover:shadow-md transition-all duration-300 hover:scale-105"
                        >
                          <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                          LinkedIn
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll indicator */}
            <div className="flex justify-center mt-6">
              <div className="flex items-center gap-2 text-gray-500 text-xs">
                <svg className="w-3 h-3 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <span>Auto-scrolling faculty profiles</span>
                <svg className="w-3 h-3 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
} 