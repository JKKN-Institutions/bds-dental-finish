'use client';

export default function StudentSuccessShowcase() {
  const alumni = [
    {
      name: "Dr. Priya Sharma",
      role: "Senior Dentist",
      company: "Apollo Hospitals",
      salary: "₹8.5 LPA",
      graduationYear: "2018",
      studentPhoto: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=200&fit=crop&crop=face",
      linkedin: "#",
      logo: "/images/alumini/apollo.jfif"
    },
    {
      name: "Dr. Rajesh Kumar",
      role: "Dental Surgeon",
      company: "Clove Dental",
      salary: "₹7.2 LPA",
      graduationYear: "2019",
      studentPhoto: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=200&fit=crop&crop=face",
      linkedin: "#",
      logo: "/images/alumini/clove.png"
    },
    {
      name: "Dr. Anjali Patel",
      role: "Orthodontist",
      company: "Private Practice",
      salary: "₹12 LPA",
      graduationYear: "2017",
      studentPhoto: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=200&fit=crop&crop=face",
      linkedin: "#",
      logo: "/images/alumini/privite.png"
    },
    {
      name: "Dr. Amit Singh",
      role: "Endodontist",
      company: "Fortis Healthcare",
      salary: "₹9.8 LPA",
      graduationYear: "2020",
      studentPhoto: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&h=200&fit=crop&crop=face",
      linkedin: "#",
      logo: "/images/alumini/Fortis.jpg"
    },
    {
      name: "Dr. Sneha Reddy",
      role: "Pediatric Dentist",
      company: "Government Hospital",
      salary: "₹6.5 LPA",
      graduationYear: "2019",
      studentPhoto: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=200&fit=crop&crop=face",
      linkedin: "#",
      logo: "/images/alumini/gvmt.jpg"
    },
    {
      name: "Dr. Vikram Malhotra",
      role: "Prosthodontist",
      company: "Corporate Chain",
      salary: "₹10.2 LPA",
      graduationYear: "2018",
      studentPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=200&fit=crop&crop=face",
      linkedin: "#",
      logo: "/images/alumini/clove.png"
    }
  ];

  return (
    <section className="py-8 px-4 bg-[#f0fdf4]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 font-['Poppins']">
            🌟 Student Success Stories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-['Poppins']">
            Meet our successful alumni who have built rewarding careers in dentistry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {alumni.map((alumnus, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 relative">
              {/* Company Logo - Top Right */}
              <div className="absolute top-3 right-3">
                <img 
                  src={alumnus.logo} 
                  alt={`${alumnus.company} logo`}
                  className="w-12 h-12 object-contain rounded-lg shadow-sm"
                />
              </div>

              <div className="flex items-start gap-3">
                {/* Student Photo */}
                <div className="relative">
                  <div className="w-22 h-20 md:w-14 md:h-24 rounded-lg overflow-hidden shadow-sm">
                    <img 
                      src={alumnus.studentPhoto} 
                      alt={`${alumnus.name} photo`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to a placeholder if image fails to load
                        e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='96' viewBox='0 0 56 96'%3E%3Crect width='56' height='96' fill='%23f3f4f6'/%3E%3Ctext x='28' y='48' text-anchor='middle' fill='%236b7280' font-size='12'%3E👤%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400/80 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">{alumnus.name}</h3>
                  <p className="text-xs text-gray-600 mb-1">{alumnus.role}</p>
                  <p className="text-xs text-gray-500 mb-1">{alumnus.company}</p>
                  <p className="text-xs font-medium text-green-700/80 mb-1">{alumnus.salary}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 flex items-center">
                      <strong>Batch</strong> {alumnus.graduationYear}
                    </span>
                    <a 
                      href={alumnus.linkedin}
                      className="text-yellow-600/80 hover:text-yellow-700 text-xs font-medium flex items-center"
                    >
                      LinkedIn Profile →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
