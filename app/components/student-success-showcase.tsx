'use client';

export default function StudentSuccessShowcase() {
  const placeholderPhoto =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='160' viewBox='0 0 120 160'%3E%3Crect width='120' height='160' fill='%23f3f4f6'/%3E%3Ccircle cx='60' cy='58' r='26' fill='%23e5e7eb'/%3E%3Crect x='22' y='98' width='76' height='36' rx='6' fill='%23e5e7eb'/%3E%3C/svg%3E";

  const alumni = [
    { name: "Dr Ramya Ramdoss", role: "Associate Dean", company: "Saveetha Dental College", graduationYear: "1996", studentPhoto: placeholderPhoto },
    { name: "Dr Raghu", role: "oral pathalogy", company: "Honorary Professor Shefield University", graduationYear: "1996", studentPhoto: placeholderPhoto },
    { name: "Dr Sangeetha Duraisamy", role: "Orthodontist Professor", company: "SRM University", graduationYear: "1996", studentPhoto: placeholderPhoto },
    { name: "Dr Prakash (Madurai)", role: "Endodontist", company: "Private Practice", graduationYear: "1996", studentPhoto: placeholderPhoto },
    { name: "Dr Arun kumar", role: "Surgeon", company: "GKNM/KG", graduationYear: "1996", studentPhoto: placeholderPhoto },
    { name: "Dr Arun(Namakkal)", role: "General Dentist", company: "Private Practice", graduationYear: "1996", studentPhoto: placeholderPhoto },
    { name: "Dr Uma shankar", role: "General Dentist", company: "Private Practice", graduationYear: "1996", studentPhoto: placeholderPhoto },
    { name: "Dr Subadharshin", role: "IAS", company: "Kallakurichi", graduationYear: "1996", studentPhoto: placeholderPhoto },
    { name: "Dr Murali", role: "Major", company: "Army", graduationYear: "1996", studentPhoto: placeholderPhoto }
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
          {alumni.map((alumnus) => (
            <div key={`${alumnus.name}-${alumnus.role}`} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 relative">
              <div className="flex items-start gap-3">
                {/* Student Photo */}
                <div className="relative">
                  <div className="w-22 h-28 md:w-14 md:h-24 rounded-lg overflow-hidden shadow-sm">
                    <img 
                      src={alumnus.studentPhoto} 
                      alt={`${alumnus.name} photo`}
                      className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.src = placeholderPhoto; }}
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
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 flex items-center">
                      <strong>Batch</strong>&nbsp;{alumnus.graduationYear}
                    </span>
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
