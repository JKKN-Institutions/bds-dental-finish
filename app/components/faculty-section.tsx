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
    image: "/images/department/Oral & Maxillofacial Surgery/DR.S.VINOD-THANGASWAMY.png",
    email: "vinod.thangaswamy@jkkn.edu.in",
    experience: "15 years experience",
    achievements: ["Guided 5 PG students"],
    linkedin: "https://linkedin.com/in/dr-s-vinod-thangaswamy"
  },
  // {
  //   id: 2,
  //   name: "Dr. Santhoshkumar",
  //   designation: "Tutor",
  //   department: "Oral & Maxillofacial Surgery",
  //   qualifications: ["BDS - 2015"],
  //   image: "/images/department/Oral & Maxillofacial Surgery/DR.S.VINOD-THANGASWAMY.png", // Using available image as placeholder
  //   email: "santhoshkumar@jkkn.edu.in",
  //   experience: "6 years experience",
  //   achievements: ["Handled 9 students"],
  //   linkedin: "https://linkedin.com/"
  // },
  {
    id: 2,
    name: "Dr. J. Vijay Thiyagarajan",
    designation: "Reader",
    department: "Oral & Maxillofacial Surgery",
    qualifications: ["MDS - 2018"],
    image: "/images/department/Oral & Maxillofacial Surgery/VIJAY-THIYAGARAJAN.png",
    email: "vijay.thiyagarajan@jkkn.edu.in",
    experience: "7 years experience",
    achievements: ["No. of PGs guided: 0"],
    linkedin: "https://linkedin.com/in/dr-j-vijay-thiyagarajan"
  },
  {
    id: 3,
    name: "Dr. M. Venkatesh Praveen",
    designation: "Sr. Lecturer",
    department: "Oral & Maxillofacial Surgery",
    qualifications: ["MDS - 2022"],
    image: "/images/department/Oral & Maxillofacial Surgery/DR-VENKATESH-PRAVEEN.png",
    email: "venkatesh.praveen@jkkn.edu.in",
    experience: "2 years experience",
    achievements: ["No. of PGs guided: 0"],
    linkedin: "https://linkedin.com/in/dr-m-venkatesh-praveen"
  },
  {
    id: 4,
    name: "Dr. J.V. Karunakaran",
    designation: "Professor & HOD",
    department: "Conservative and Endodontics",
    qualifications: ["M.D.S."],
    image: "/images/department/Conservative and Endodontics/DR-N-JAYAPRAKASH.png", // Using available image as placeholder
    email: "jvkarunakaran@jkkn.edu.in",
    experience: "34 years experience",
    achievements: [],
    linkedin: "https://linkedin.com/"
  },
  {
    id: 5,
    name: "Dr. N. Jayaprakash",
    designation: "Professor",
    department: "Conservative and Endodontics",
    qualifications: ["M.D.S."],
    image: "/images/department/Conservative and Endodontics/DR-N-JAYAPRAKASH.png",
    email: "njayaprakash@jkkn.edu.in",
    experience: "12 years experience",
    achievements: [],
    linkedin: "https://linkedin.com/"
  },
  {
    id: 6,
    name: "Dr. N. Ragavendran",
    designation: "Reader",
    department: "Conservative and Endodontics",
    qualifications: ["M.D.S."],
    image: "/images/department/Conservative and Endodontics/DR-SHANMATH.png", // Using available image as placeholder
    email: "nragavendran@jkkn.edu.in",
    experience: "11 years experience",
    achievements: [],
    linkedin: "https://linkedin.com/"
  },
  {
    id: 7,
    name: "Dr. Chris Susan Abraham",
    designation: "Reader",
    department: "Conservative and Endodontics",
    qualifications: ["M.D.S."],
    image: "/images/department/Conservative and Endodontics/DR-N-JAYAPRAKASH.png", // Using available image as placeholder
    email: "chrisabraham@jkkn.edu.in",
    experience: "6 years experience",
    achievements: [],
    linkedin: "https://linkedin.com/"
  },
  {
    id: 8,
    name: "Dr. S. Mary Vinola Jenifer",
    designation: "Reader",
    department: "Conservative and Endodontics",
    qualifications: ["M.D.S.", "PhD"],
    image: "/images/department/Conservative and Endodontics/DR-SHANMATH.png", // Using available image as placeholder
    email: "maryjenifer@jkkn.edu.in",
    experience: "7 years experience",
    achievements: [],
    linkedin: "https://linkedin.com/"
  },
  {
    id: 9,
    name: "Dr. K. Shanmathee",
    designation: "Tutor",
    department: "Conservative and Endodontics",
    qualifications: ["BDS"],
    image: "/images/department/Conservative and Endodontics/DR-SHANMATH.png",
    email: "shanmathee@jkkn.edu.in",
    experience: "4 years experience",
    achievements: [],
    linkedin: "https://linkedin.com/"
  },
  {
    id: 10,
    name: "Dr. E. Jayapriya",
    designation: "Tutor",
    department: "Conservative and Endodontics",
    qualifications: ["BDS"],
    image: "/images/department/Conservative and Endodontics/DR-N-JAYAPRAKASH.png", // Using available image as placeholder
    email: "jayapriya@jkkn.edu.in",
    experience: "3 years experience",
    achievements: [],
    linkedin: "https://linkedin.com/"
  },
  {
    id: 11,
    name: "Dr. Nandhini",
    designation: "Tutor",
    department: "Conservative and Endodontics",
    qualifications: ["BDS", "MDS"],
    image: "/images/department/Conservative and Endodontics/DR-N-JAYAPRAKASH.png", // Using available image as placeholder
    email: "nandhini@jkkn.edu.in",
    experience: "1 years experience",
    achievements: [],
    linkedin: "https://linkedin.com/"
  },
  {
    id: 12,
    name: "Dr. Jothi",
    designation: "Tutor",
    department: "Conservative and Endodontics",
    qualifications: ["BDS", "MDS"],
    image: "/images/department/Conservative and Endodontics/DR-N-JAYAPRAKASH.png", // Using available image as placeholder
    email: "jothi@jkkn.edu.in",
    experience: "3 years experience",
    achievements: [],
    linkedin: "https://linkedin.com/"
  },
  {
    id: 13,
    name: "Dr. Shruthi",
    designation: "Tutor",
    department: "Conservative and Endodontics",
    qualifications: ["BDS", "MDS"],
    image: "/images/department/Conservative and Endodontics/DR-N-JAYAPRAKASH.png", // Using available image as placeholder
    email: "shruthi@jkkn.edu.in",
    experience: "3 years experience",
    achievements: [],
    linkedin: "https://linkedin.com/"
  },
  {
    id: 14,
    name: "Dr. R. Ramya",
    designation: "Professor & HOD",
    department: "Orthodontics",
    qualifications: ["M.D.S.", "Ph.D - 2011"],
    image: "/images/department/ORTHODONTICS/DR.V.VIGNESH-KUMAR.png", // Using available image as placeholder
    email: "ramya.r@jkkn.edu.in",
    experience: "13 years experience",
    achievements: ["2 Research Publications"],
    linkedin: "https://linkedin.com/in/dr-r-ramya"
  },
  {
    id: 15,
    name: "Dr. V. Vignesh Kumar",
    designation: "Professor",
    department: "Orthodontics",
    qualifications: ["M.D.S. - 2007"],
    image: "/images/department/ORTHODONTICS/DR.V.VIGNESH-KUMAR.png",
    email: "vignesh.kumar@jkkn.edu.in",
    experience: "17 years experience",
    achievements: ["5 Research Publications"],
    linkedin: "https://linkedin.com/in/dr-v-vignesh-kumar"
  },
  {
    id: 16,
    name: "Dr. V. Kumaran",
    designation: "Reader",
    department: "Orthodontics",
    qualifications: ["M.D.S. - 2017"],
    image: "/images/department/ORTHODONTICS/DR.V.KUMARAN.png",
    email: "kumaran.v@jkkn.edu.in",
    experience: "7 years experience",
    achievements: ["8 Research Publications"],
    linkedin: "https://linkedin.com/in/dr-v-kumaran"
  },
  {
    id: 17,
    name: "Dr. K. Aishwarya",
    designation: "Reader",
    department: "Orthodontics",
    qualifications: ["M.D.S. - 2017"],
    image: "/images/department/ORTHODONTICS/DR.V.KUMARAN.png", // Using available image as placeholder
    email: "aishwarya.k@jkkn.edu.in",
    experience: "6 years experience",
    achievements: ["11 Research Publications"],
    linkedin: "https://linkedin.com/in/dr-k-aishwarya"
  },
  {
    id: 18,
    name: "Dr. K. Thankamani Ammal",
    designation: "Sr. Lecturer",
    department: "Orthodontics",
    qualifications: ["M.D.S. - 2021"],
    image: "/images/department/ORTHODONTICS/DR.K.THANKAMANI-AMMAL.png",
    email: "thankamani.ammal@jkkn.edu.in",
    experience: "2 years experience",
    achievements: ["11 Research Publications"],
    linkedin: "https://linkedin.com/in/dr-k-thankamani-ammal"
  },
  {
    id: 19,
    name: "Dr. N. Kalaranjeni",
    designation: "Sr. Lecturer",
    department: "Orthodontics",
    qualifications: ["M.D.S. - 2021"],
    image: "/images/department/ORTHODONTICS/DR.KALARANJENI-N.png",
    email: "kalaranjeni.n@jkkn.edu.in",
    experience: "2 years experience",
    achievements: ["6 Research Publications"],
    linkedin: "https://linkedin.com/in/dr-n-kalaranjeni"
  },
  {
    id: 20,
    name: "Dr. E.R. Deepak",
    designation: "Sr. Lecturer",
    department: "Orthodontics",
    qualifications: ["M.D.S. - 2023"],
    image: "/images/department/ORTHODONTICS/DR.E.R.DEEPAK.png",
    email: "deepak.er@jkkn.edu.in",
    experience: "1 year experience",
    achievements: ["9 Research Publications"],
    linkedin: "https://linkedin.com/in/dr-er-deepak"
  },
  {
    id: 21,
    name: "Dr. Priyanka Selvaraj",
    designation: "Sr. Lecturer",
    department: "Orthodontics",
    qualifications: ["M.D.S. - 2024"],
    image: "/images/department/ORTHODONTICS/DR.PRIYANKA-SELVARAJ.png",
    email: "priyanka.selvaraj@jkkn.edu.in",
    experience: "0 year experience",
    achievements: ["5 Research Publications"],
    linkedin: "https://linkedin.com/in/dr-priyanka-selvaraj"
  },
  {
    id: 22,
    name: "Dr. Sumithra Devi",
    designation: "Sr. Lecturer",
    department: "Orthodontics",
    qualifications: ["M.D.S. - 2024"],
    image: "/images/department/ORTHODONTICS/DR.SUMITHRA-DEVI.png",
    email: "sumithra.devi@jkkn.edu.in",
    experience: "0 year experience",
    achievements: ["2 Research Publications"],
    linkedin: "https://linkedin.com/in/dr-sumithra-devi"
  },

  {
    id: 23,
    name: "Dr. Dhanasekar B",
    designation: "Principal, Professor & HoD",
    department: "Prosthodontics",
    qualifications: ["MDS - 2002"],
    image: "/images/department/Prosthodontics/DR.C.DHINESH-KUMARL.png", // Using available image as placeholder
    email: "dhanasekar.b@jkkn.edu.in",
    experience: "22 years experience",
    achievements: ["3 Research Publications"],
    linkedin: "https://linkedin.com/in/dr-dhanasekar-b"
  },
  {
    id: 24,
    name: "Dr. C. Dhinesh Kumar",
    designation: "Professor",
    department: "Prosthodontics",
    qualifications: ["MDS - PhD - 2011"],
    image: "/images/department/Prosthodontics/DR.C.DHINESH-KUMARL.png",
    email: "dhinesh.kumar@jkkn.edu.in",
    experience: "14 years experience",
    achievements: ["1 Research Publication"],
    linkedin: "https://linkedin.com/in/dr-c-dhinesh-kumar"
  },
  {
    id: 25,
    name: "Dr. D. Saisadan",
    designation: "Professor",
    department: "Prosthodontics",
    qualifications: ["MDS - 2012"],
    image: "/images/department/Prosthodontics/D.SAI-SADAN.png",
    email: "saisadan.d@jkkn.edu.in",
    experience: "12 years experience",
    achievements: ["10 Research Publications"],
    linkedin: "https://linkedin.com/in/dr-d-saisadan"
  },
  {
    id: 26,
    name: "Dr. N. Jagadesaan",
    designation: "Reader",
    department: "Prosthodontics",
    qualifications: ["MDS - 2013"],
    image: "/images/department/Prosthodontics/DR.JAGADESAAN-N.png",
    email: "jagadesaan.n@jkkn.edu.in",
    experience: "11 years experience",
    achievements: ["4 Research Publications"],
    linkedin: "https://linkedin.com/in/dr-n-jagadesaan"
  },
  {
    id: 27,
    name: "Dr. K. Praveena",
    designation: "Reader",
    department: "Prosthodontics",
    qualifications: ["MDS - 2019"],
    image: "/images/department/Prosthodontics/DR.PRAVEENA-.K.png",
    email: "praveena.k@jkkn.edu.in",
    experience: "5 years experience",
    achievements: ["5 Research Publications"],
    linkedin: "https://linkedin.com/in/dr-k-praveena"
  },
  {
    id: 28,
    name: "Dr. K. G. Gowtham Vignesh",
    designation: "Sr. Lecturer",
    department: "Prosthodontics",
    qualifications: ["MDS - 2024"],
    image: "/images/department/Prosthodontics/D.SAI-SADAN.png", // Using available image as placeholder
    email: "gowtham.vignesh@jkkn.edu.in",
    experience: "1 year experience",
    achievements: ["0 Research Publications"],
    linkedin: "https://linkedin.com/in/dr-k-g-gowtham-vignesh"
  },
  {
    id: 29,
    name: "Dr. A. Abiimanyu",
    designation: "Sr. Lecturer",
    department: "Prosthodontics",
    qualifications: ["MDS - 2024"],
    image: "/images/department/Prosthodontics/DR.A.ABIIMANYU.png",
    email: "abiimanyu.a@jkkn.edu.in",
    experience: "4 years experience",
    achievements: ["0 Research Publications"],
    linkedin: "https://linkedin.com/in/dr-a-abiimanyu"
  },

  {
    id: 30,
    name: "Dr. P. Karthikeyan",
    designation: "Sr. Lecturer",
    department: "Prosthodontics",
    qualifications: ["MDS - 2023"],
    image: "/images/department/Prosthodontics/DR.JAGADESAAN-N.png", // Using available image as placeholder
    email: "karthikeyan.p@jkkn.edu.in",
    experience: "0 years experience",
    achievements: ["2 Research Publications"],
    linkedin: "https://linkedin.com/in/dr-p-karthikeyan"
  },
  {
    id: 30,
    name: "Dr. P.K. Sasi Kumar",
    designation: "Professor & HoD",
    department: "Periodontics",
    qualifications: ["MDS", "PhD"],
    image: "/images/department/Periodontics/DR.SASIKUMAR.P.K.png",
    email: "pk.sasikumar@jkkn.edu.in",
    experience: "13 years experience",
    achievements: [],
    linkedin: "https://linkedin.com/"
  },
  {
    id: 31,
    name: "Dr. S. Santhosh",
    designation: "Reader",
    department: "Periodontics",
    qualifications: ["MDS", "PhD"],
    image: "/images/department/Periodontics/DR.SANTHOSH-SEKAR.png",
    email: "s.santhosh@jkkn.edu.in",
    experience: "10 years experience",
    achievements: [],
    linkedin: "https://linkedin.com/"
  },
  {
    id: 32,
    name: "Dr. R. Dhivya",
    designation: "Reader",
    department: "Periodontics",
    qualifications: ["MDS"],
    image: "/images/department/Periodontics/DR.R.DHIVYA.png",
    email: "r.dhivya@jkkn.edu.in",
    experience: "6 years experience",
    achievements: [],
    linkedin: "https://linkedin.com/"
  },
  {
    id: 33,
    name: "Dr. M. Radhika",
    designation: "Sr. Lecturer",
    department: "Periodontics",
    qualifications: ["MDS"],
    image: "/images/department/Periodontics/DR-RADHIKA-M.png",
    email: "m.radhika@jkkn.edu.in",
    experience: "2 years experience",
    achievements: [],
    linkedin: "https://linkedin.com/"
  },
  {
    id: 34,
    name: "Dr. M. Nivethitha",
    designation: "Sr. Lecturer",
    department: "Periodontics",
    qualifications: ["MDS"],
    image: "/images/department/Periodontics/DR.NIVETHITHA.png",
    email: "m.nivethitha@jkkn.edu.in",
    experience: "2 years experience",
    achievements: [],
    linkedin: "https://linkedin.com/"
  },
  {
    id: 35,
    name: "Dr. J. Jasmine Angel",
    designation: "Sr. Lecturer",
    department: "Periodontics",
    qualifications: ["MDS"],
    image: "/images/department/Periodontics/DR.SANTHOSH-SEKAR.png", // Using available image as placeholder
    email: "j.jasmineangel@jkkn.edu.in",
    experience: "0 years experience",
    achievements: [],
    linkedin: "https://linkedin.com/"
  },
  {
    id: 36,
    name: "Dr. T. Dineshkumar",
    designation: "Professor & HOD",
    department: "Oral Pathology",
    qualifications: ["MDS"],
    image: "/images/department/Oral Pathology/DR.T.DINESHKUMAR.png",
    email: "t.dineshkumar@jkkn.edu.in",
    experience: "18 years experience",
    achievements: ["HOD since 2006", "Academic Leadership"],
    linkedin: "https://linkedin.com/in/dr-t-dineshkumar"
  },
  {
    id: 37,
    name: "Dr. S. Maheshwari",
    designation: "Sr. Lecturer",
    department: "Oral Pathology",
    qualifications: ["MDS"],
    image: "/images/department/Oral Pathology/DR.-S.MAHESHWARI.png",
    email: "s.maheshwari@jkkn.edu.in",
    experience: "3 years experience",
    achievements: ["Academic Contributor", "Research Guidance"],
    linkedin: "https://linkedin.com/in/dr-s-maheshwari"
  },
  {
    id: 38,
    name: "Dr. J. Swathiraman",
    designation: "Sr. Lecturer",
    department: "Oral Pathology",
    qualifications: ["MDS"],
    image: "/images/department/Oral Pathology/DR.-J.-SWATHIRAMAN.png",
    email: "j.swathiraman@jkkn.edu.in",
    experience: "2 years experience",
    achievements: ["Early Career Researcher", "Published 9 Papers"],
    linkedin: "https://linkedin.com/in/dr-j-swathiraman"
  },

  {
    id: 39,
    name: "Dr. B. Sasirekha",
    designation: "Professor & HOD",
    department: "Oral Medicine and Radiology",
    qualifications: ["MDS"],
    image: "/images/department/Oral Medicine and Radiology/dr.SASIREKHA.png",
    email: "sasirekha@jkkn.edu.in",
    experience: "12 years experience",
    achievements: [],
    linkedin: ""
  },
  {
    id: 40,
    name: "Dr. P.K. Meenapriya",
    designation: "Professor",
    department: "Oral Medicine and Radiology",
    qualifications: ["MDS", "PhD"],
    image: "/images/department/Oral Medicine and Radiology/DR-SOWNDARYA.png",
    email: "meenapriya@jkkn.edu.in",
    experience: "9 years experience",
    achievements: [],
    linkedin: ""
  },
  {
    id: 41,
    name: "Dr. K. Sakthi Saranya Devi",
    designation: "Reader",
    department: "Oral Medicine and Radiology",
    qualifications: ["MDS"],
    image: "/images/department/Oral Medicine and Radiology/DR.SAKTHI-SARANYA-DEVI.K.png",
    email: "saranyadevi@jkkn.edu.in",
    experience: "7 years experience",
    achievements: [],
    linkedin: ""
  },
  {
    id: 42,
    name: "Dr. S. Gokulapriya",
    designation: "Sr. Lecturer",
    department: "Oral Medicine and Radiology",
    qualifications: ["MDS"],
    image: "/images/department/Oral Medicine and Radiology/gokulapriya.png",
    email: "gokulapriya@jkkn.edu.in",
    experience: "3 years experience",
    achievements: [],
    linkedin: ""
  },
  {
    id: 43,
    name: "Dr. A. V. S. Ezhilarasi",
    designation: "Sr. Lecturer",
    department: "Oral Medicine and Radiology",
    qualifications: ["MDS - 2024"],
    image: "/images/department/Oral Medicine and Radiology/DR.A.V.S.EZHILARASI.png",
    email: "ezhilarasi@jkkn.edu.in",
    experience: "1 year experience",
    achievements: [],
    linkedin: ""
  },
  {
    id: 44,
    name: "Dr. S. Indhumathi",
    designation: "Sr. Lecturer",
    department: "Oral Medicine and Radiology",
    qualifications: ["MDS"],
    image: "/images/department/Oral Medicine and Radiology/DR.S.INDHUMATHI.png",
    email: "indhumathi@jkkn.edu.in",
    experience: "0 year experience",
    achievements: [],
    linkedin: ""
  },


  {
    id: 45,
    name: "Dr. K. Keerthana",
    designation: "Tutor",
    department: "Pedodontics",
    qualifications: ["BDS - 2018"],
    image: "/images/department/Oral Medicine and Radiology/gokulapriya.png", // Using available image as placeholder
    email: "keerthana@jkkn.edu.in",
    experience: "1 year experience",
    achievements: [],
    linkedin: "https://linkedin.com/"
  },
  {
    id: 46,
    name: "Dr. K. Saravanakumar",
    designation: "Reader",
    department: "Pedodontics",
    qualifications: ["MDS - 2016"],
    image: "/images/department/Pedodontics/dr-k-saravanakumar.png", // Placeholder path
    email: "saravanakumar@jkkn.edu.in",
    experience: "3 months experience",
    achievements: [],
    linkedin: "https://linkedin.com/"
  },
  {
    id: 47,
    name: "Dr. K. Pavithra",
    designation: "Sr. Lecturer",
    department: "Pedodontics",
    qualifications: ["MDS - 2023"],
    image: "/images/department/Pedodontics/dr-k-pavithra.png", // Placeholder path
    email: "pavithra@jkkn.edu.in",
    experience: "2 months experience",
    achievements: [],
    linkedin: "https://linkedin.com/"
  },
  {
    id: 48,
    name: "Dr. C. Selvakumar",
    designation: "Reader & HOD",
    department: "Public Health Dentistry",
    qualifications: ["MDS"],
    image: "/images/department/Prosthodontics/DR.PRAVEENA-.K.png", // Using available image as placeholder
    email: "c.selvakumar@jkkn.edu.in",
    experience: "8 years experience",
    achievements: ["4 Research Publications", "Contributions to Department Growth"],
    linkedin: "https://linkedin.com/in/dr-c-selvakumar"
  },
  {
    id: 49,
    name: "Dr. Yoka. T",
    designation: "Sr. Lecturer",
    department: "Oral & Maxillofacial Surgery",
    qualifications: ["MDS - 2024"],
    image: "/images/department/Oral & Maxillofacial Surgery/DR.YOKA.T.png", // Placeholder image path
    email: "yoka.t@jkkn.edu.in",
    experience: "9 months experience",
    achievements: ["Recently joined the department", "Dedicated to academic and clinical excellence"],
    linkedin: "https://linkedin.com/in/dr-yoka-t"
  },

  {
    id: 50,
    name: "Dr. Arun Singh",
    designation: "Professor",
    department: "Basic Medical Science",
    qualifications: ["MDS", "PhD", "FICD"],
    image: "/images/department/Oral Pathology/DR.T.DINESHKUMAR.png", // Using available image as placeholder
    email: "arun.singh@jkkn.edu.in",
    experience: "16 years experience",
    achievements: ["Pathology Research Excellence", "38+ Research Publications"],
    linkedin: "https://linkedin.com/in/dr-arun-singh"
  },
  {
    id: 51,
    name: "Dr. M. Nazer",
    designation: "Professor & HoD",
    department: "Physiology",
    qualifications: ["B.Sc", "M.Sc", "Ph.D"],

    experience: "32 years 3 months",
    image: "",
    email: "m.nazer@jkkn.edu.in",
    achievements: ["Experienced academic leader", "Expertise in Human Physiology"],
    linkedin: "https://linkedin.com/in/dr-m-nazer"
  },
  {
    id: 52,
    name: "Dr. B. Suresh",
    designation: "Lecturer",
    department: "Physiology",
    qualifications: ["MBBS"],

    experience: "3 years 4 months",
    image: "",
    email: "b.suresh@jkkn.edu.in",
    achievements: ["Focused on clinical teaching"],
    linkedin: "https://linkedin.com/in/dr-b-suresh"
  },
  {
    id: 53,
    name: "Dr. S. P. Thahin Zameer",
    designation: "Lecturer",
    department: "Physiology",
    qualifications: ["MBBS"],

    experience: "2 years 7 months",
    image: "",
    email: "thahin.zameer@jkkn.edu.in",
    achievements: ["Clinical physiology specialist"],
    linkedin: "https://linkedin.com/in/dr-s-p-thahin-zameer"
  },
  {
    id: 54,
    name: "Dr. G. Rajkumar",
    designation: "Lecturer",
    department: "Physiology",
    qualifications: ["MBBS"],

    experience: "2 years 6 months",
    image: "",
    email: "g.rajkumar@jkkn.edu.in",
    achievements: ["Passionate educator in Physiology"],
    linkedin: "https://linkedin.com/in/dr-g-rajkumar"
  },
  {
    id: 55,
    name: "Dr. R. Sanchay",
    designation: "Lecturer",
    department: "Physiology",
    qualifications: ["MBBS"],

    experience: "0 years 1 month",
    image: "",
    email: "r.sanchay@jkkn.edu.in",
    achievements: ["Early-career medical educator"],
    linkedin: "https://linkedin.com/in/dr-r-sanchay"
  },

  // Department of General Physiology
  {
    id: 56,
    name: "Dr. A. Rajeshkumar",
    designation: "Reader",
    department: "General Physiology",
    qualifications: ["B.Sc", "M.Sc", "Ph.D"],


    experience: "14 years 3 months",
    image: "",
    email: "a.rajeshkumar@jkkn.edu.in",
    achievements: ["Active researcher in cell physiology"],
    linkedin: "https://linkedin.com/in/dr-a-rajeshkumar"
  },
  {
    id: 57,
    name: "Mr. S. Arulmozhi",
    designation: "Lecturer",
    department: "General Physiology",
    qualifications: ["B.Sc", "M.Sc"],

    experience: "14 years 2 months",
    image: "",
    email: "s.arulmozhi@jkkn.edu.in",
    achievements: ["Dedicated academic mentor"],
    linkedin: "https://linkedin.com/in/mr-s-arulmozhi"
  },
  {
    id: 58,
    name: "Dr. B. Praticaa",
    designation: "Lecturer",
    department: "General Physiology",
    qualifications: ["MBBS"],

    experience: "0 years 4 months",
    image: "",
    email: "b.praticaa@jkkn.edu.in",
    achievements: ["Focused on human anatomy and physiology"],
    linkedin: "https://linkedin.com/in/dr-b-praticaa"
  },

  // Department of Bio-Chemistry
  {
    id: 59,
    name: "Mr. R. Vadivelu",
    designation: "Reader",
    department: "Bio-Chemistry",
    qualifications: ["B.Sc", "M.Sc", "M.Phil"],

    experience: "32 years 1 month",
    image: "",
    email: "r.vadivelu@jkkn.edu.in",
    achievements: ["Experienced biochemistry faculty"],
    linkedin: "https://linkedin.com/in/mr-r-vadivelu"
  },
  {
    id: 60,
    name: "Dr. S. Dhanabalan",
    designation: "Reader",
    department: "Bio-Chemistry",
    qualifications: ["B.Sc", "M.Sc", "Ph.D"],

    experience: "13 years 11 months",
    image: "",
    email: "s.dhanabalan@jkkn.edu.in",
    achievements: ["Researcher in biochemical pathways"],
    linkedin: "https://linkedin.com/in/dr-s-dhanabalan"
  },
  {
    id: 61,
    name: "Dr. C. Vivekanandan",
    designation: "Lecturer",
    department: "Bio-Chemistry",
    qualifications: ["MBBS"],

    experience: "11 years 4 months",
    image: "",
    email: "c.vivekanandan@jkkn.edu.in",
    achievements: ["Specialist in metabolic systems"],
    linkedin: "https://linkedin.com/in/dr-c-vivekanandan"
  },

  // Department of Pharmacology
  {
    id: 62,
    name: "Dr. P. Vijayalakshmi",
    designation: "Professor & HoD",
    department: "Pharmacology",
    qualifications: ["B.Sc", "M.Sc", "Ph.D"],

    experience: "21 years 3 months",
    image: "",
    email: "p.vijayalakshmi@jkkn.edu.in",
    achievements: ["Published researcher in pharmacodynamics"],
    linkedin: "https://linkedin.com/in/dr-p-vijayalakshmi"
  },
  {
    id: 63,
    name: "Mr. Rozario Cyril",
    designation: "Lecturer",
    department: "Pharmacology",
    qualifications: ["B.Sc", "M.Sc"],

    experience: "25 years",
    image: "",
    email: "rozario.cyril@jkkn.edu.in",
    achievements: ["Experienced pharmacology lecturer"],
    linkedin: "https://linkedin.com/in/mr-rozario-cyril"
  },
  {
    id: 64,
    name: "Dr. S. Karthika",
    designation: "Lecturer",
    department: "Pharmacology",
    qualifications: ["MBBS"],

    experience: "6 years 5 months",
    image: "",
    email: "s.karthika@jkkn.edu.in",
    achievements: ["Active in pharmacovigilance studies"],
    linkedin: "https://linkedin.com/in/dr-s-karthika"
  },
  {
    id: 65,
    name: "Dr. M. Arun Vishwaa",
    designation: "Lecturer",
    department: "Pharmacology",
    qualifications: ["MBBS"],

    experience: "0 years 4 months",
    image: "",
    email: "m.arunvishwaa@jkkn.edu.in",
    achievements: ["Early-career pharmacology educator"],
    linkedin: "https://linkedin.com/in/dr-m-arun-vishwaa"
  }
];

// Ensure IDs are sequential starting from 1 regardless of the source data
const sequencedFaculty: FacultyMember[] = facultyData.map((member, index) => ({
  ...member,
  id: index + 1,
}));

const DEFAULT_FACULTY_IMAGE = '/images/teeth.png';

export default function FacultySection() {
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyMember | null>(null);
  const [activeDepartment, setActiveDepartment] = useState<string>('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [failedLocalImageById, setFailedLocalImageById] = useState<Record<number, boolean>>({});
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const departments = ['All', ...Array.from(new Set(sequencedFaculty.map(f => f.department)))];

  const filteredFaculty = activeDepartment === 'All'
    ? sequencedFaculty
    : sequencedFaculty.filter(f => f.department === activeDepartment);

  const normalizeDepartmentDir = (department: string) => {
    // Map department names to folder names when they differ
    if (department === 'Orthodontics') return 'ORTHODONTICS';
    return department;
  };

  const getLocalImagePath = (faculty: FacultyMember) => {
    const dept = normalizeDepartmentDir(faculty.department);
    // Use encodeURIComponent to safely handle spaces and special characters like &
    return `/images/department/${encodeURIComponent(dept)}/${encodeURIComponent(faculty.name)}.jpg`;
  };

  const getImageSrc = (faculty: FacultyMember) => {
    if (failedLocalImageById[faculty.id]) {
      // If the local jpg failed, try provided image path, otherwise default placeholder
      const provided = (faculty.image || '').trim();
      return provided !== '' ? provided : DEFAULT_FACULTY_IMAGE;
    }
    return getLocalImagePath(faculty);
  };

  // Manual scroll controls
  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const step = Math.max(320, Math.floor(container.clientWidth * 0.9));
    container.scrollBy({ left: -step, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const step = Math.max(320, Math.floor(container.clientWidth * 0.9));
    container.scrollBy({ left: step, behavior: 'smooth' });
  };

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
                    className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 h-16 flex items-center justify-center text-center ${activeDepartment === dept
                      ? 'bg-gradient-to-r from-green-600 to-yellow-600 text-white shadow-xl'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200 hover:border-green-300 shadow-md'
                      }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>

            {/* Tablet Version - Horizontal Scroll */}
            <div className="hidden md:block lg:hidden">
              <div className="flex gap-3 max-w-3xl mx-auto overflow-x-auto scrollbar-hide px-1">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => {
                      setActiveDepartment(dept);
                      setCurrentIndex(0);
                    }}
                    className={`px-4 py-3 rounded-xl text-xs font-semibold transition-all duration-300 transform hover:scale-105 h-14 flex items-center justify-center text-center whitespace-nowrap flex-shrink-0 ${activeDepartment === dept
                      ? 'bg-gradient-to-r from-green-600 to-yellow-600 text-white shadow-xl'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200 hover:border-green-300 shadow-md'
                      }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Version - Horizontal Scroll */}
            <div className="md:hidden">
              <div className="flex gap-3 overflow-x-auto scrollbar-hide px-1">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => {
                      setActiveDepartment(dept);
                      setCurrentIndex(0);
                    }}
                    className={`px-4 py-4 rounded-xl text-xs font-semibold transition-all duration-300 transform hover:scale-105 h-16 flex items-center justify-center text-center whitespace-nowrap flex-shrink-0 my-4 ${activeDepartment === dept
                      ? 'bg-gradient-to-r from-green-600 to-yellow-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200 hover:border-green-300'
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
            {/* Manual scroll arrow controls */}
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center z-20">
              <button
                aria-label="Scroll left"
                onClick={scrollLeft}
                className="pointer-events-auto ml-2 rounded-full bg-white/90 shadow-md ring-1 ring-black/10 p-2 hover:bg-white transition"
              >
                <svg className="w-4 h-4 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center z-20">
              <button
                aria-label="Scroll right"
                onClick={scrollRight}
                className="pointer-events-auto mr-2 rounded-full bg-white/90 shadow-md ring-1 ring-black/10 p-2 hover:bg-white transition"
              >
                <svg className="w-4 h-4 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-6"
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
                        src={getImageSrc(faculty)}
                        alt={`${faculty.name} - ${faculty.designation}`}
                        width={112}
                        height={80}
                        className="w-full h-full object-contain object-center"
                        onError={() => setFailedLocalImageById(prev => ({ ...prev, [faculty.id]: true }))}
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
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
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
                <span>Swipe or use arrows to scroll</span>
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