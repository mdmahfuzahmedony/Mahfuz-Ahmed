import React from "react";

const Education = () => {
  const educationList = [
    {
      id: 1,
      year: "2020 - Present",
      degree: "B.Sc in Computer Science",
      institution: "Daffodil International University",
      desc: "Studying core programming, algorithms, and software engineering principles. Maintain CGPA 3.80.",
    },
    {
      id: 2,
      year: "2018 - 2020",
      degree: "Higher Secondary Certificate",
      institution: "Dhaka City College",
      desc: "Completed HSC in Science group with GPA 5.00. Focus on Physics and Mathematics.",
    },
    {
      id: 3,
      year: "2016 - 2018",
      degree: "Secondary School Certificate",
      institution: "Motijheel Model School",
      desc: "Passed with Golden A+ in Science. Built strong foundation in general science and math.",
    },
    {
      id: 4,
      year: "2015",
      degree: "Web Design Certification",
      institution: "Online Course (Udemy)",
      desc: "Completed a professional full-stack web development bootcamp covering HTML, CSS, JS, and React.",
    },
  ];

  return (
    <section className="bg-[#0a0a0a] py-20 px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        
        {/* ============ HEADER ============ */}
        <div className="text-center mb-16">
          <span className="text-[#FF4D4D] font-bold tracking-widest uppercase text-sm">
            My Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Education History
          </h2>
        </div>

        {/* ============ TIMELINE CONTAINER ============ */}
        <div className="relative flex flex-col items-center">
          
          {/* Central Line (The Timeline) */}
          {/* This line stays in center on Desktop, Moves left on Mobile */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-[2px] bg-gray-800 lg:-translate-x-1/2"></div>

          <div className="w-full flex flex-col gap-12">
            {educationList.map((item, index) => (
              <div 
                key={item.id} 
                className={`relative flex items-center lg:justify-between ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                
                {/* 1. Empty Spacer for Desktop (Holds space for opposite side) */}
                <div className="hidden lg:block w-5/12"></div>

                {/* 2. The Center Dot (Marker) */}
                {/* Mobile: Left aligned, Desktop: Center aligned */}
                <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0a0a0a] border-4 border-[#FF4D4D] z-10 shadow-[0_0_15px_#FF4D4D]"></div>

                {/* 3. The Content Card */}
                {/* Mobile: Pushed to right, Desktop: Alternates */}
                <div className="pl-20 lg:pl-0 w-full lg:w-5/12">
                  <div 
                    className={`
                      group relative bg-[#111] border border-white/10 p-8 rounded-2xl 
                      hover:border-[#FF4D4D] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(255,77,77,0.1)] hover:-translate-y-1
                      ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"} text-left
                    `}
                  >
                    
                    {/* Arrow/Triangle pointing to the line */}
                    {/* Desktop Only Logic for arrows */}
                    <div className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[#111] border-t border-r border-white/10 rotate-45 transition-colors group-hover:border-[#FF4D4D]
                      ${index % 2 === 0 ? "-right-2 border-l-0 border-b-0" : "-left-2 border-t-0 border-r-0 border-b border-l"}
                    `}></div>

                    {/* Year Badge */}
                    <span className="inline-block px-4 py-1 rounded-full bg-[#FF4D4D]/10 text-[#FF4D4D] font-bold text-sm mb-4 border border-[#FF4D4D]/20">
                      {item.year}
                    </span>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#FF4D4D] transition-colors">
                      {item.degree}
                    </h3>
                    
                    {/* Institution */}
                    <h4 className="text-gray-400 font-medium text-lg mb-4">
                      {item.institution}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>

                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;