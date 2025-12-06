import React from "react";

const Education = () => {
  const educationList = [
    {
      id: 1,
      year: "2020 - Present",
      degree: "B.Sc in Computer Science",
      institution: "Daffodil International University",
      desc: "Studying core programming, algorithms, and software engineering principles.",
    },
    {
      id: 2,
      year: "2018 - 2020",
      degree: "Higher Secondary Certificate",
      institution: "Dhaka City College",
      desc: "Completed HSC in Science group. Focus on Physics and Mathematics.",
    },
    {
      id: 3,
      year: "2016 - 2018",
      degree: "Secondary School Certificate",
      institution: "Motijheel Model School",
      desc: "Passed with Golden A+ in Science. Strong foundation in general science.",
    },
    {
      id: 4,
      year: "2015",
      degree: "Web Design Certification",
      institution: "Online Course (Udemy)",
      desc: "Completed a professional full-stack web development bootcamp.",
    },
  ];

  return (
    // 'py-12' instead of 'py-20' to reduce top/bottom padding
    <section
      className="bg-[#0a0a0a] py-12 px-6 lg:px-12 relative overflow-hidden"
      id="education"
    >
      <div className="max-w-[1000px] mx-auto">
        {" "}
        {/* Reduced width slightly */}
        {/* ============ HEADER ============ */}
        <div className="text-center mb-10">
          {" "}
          {/* Reduced margin bottom */}
          <span className="text-[#FF4D4D] font-bold tracking-widest uppercase text-xs">
            My Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Education History
          </h2>
        </div>
        {/* ============ TIMELINE CONTAINER ============ */}
        <div className="relative flex flex-col items-center">
          {/* Central Line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-[2px] bg-gray-800 lg:-translate-x-1/2"></div>

          {/* Gap-6 instead of Gap-12 to bring cards closer */}
          <div className="w-full flex flex-col gap-6">
            {educationList.map((item, index) => (
              <div
                key={item.id}
                className={`relative flex items-center lg:justify-between ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Spacer */}
                <div className="hidden lg:block w-5/12"></div>

                {/* Dot Marker */}
                <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#0a0a0a] border-[3px] border-[#FF4D4D] z-10 shadow-[0_0_10px_#FF4D4D]"></div>

                {/* Content Card */}
                <div className="pl-16 lg:pl-0 w-full lg:w-5/12">
                  <div
                    // Reduced padding (p-6) inside card
                    className={`
                      group relative bg-[#111] border border-white/10 p-5 rounded-xl 
                      hover:border-[#FF4D4D] transition-all duration-300 hover:shadow-lg
                      ${
                        index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                      } text-left
                    `}
                  >
                    {/* Arrow for Desktop */}
                    <div
                      className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-[#111] border-t border-r border-white/10 rotate-45 transition-colors group-hover:border-[#FF4D4D]
                      ${
                        index % 2 === 0
                          ? "-right-[7px] border-l-0 border-b-0"
                          : "-left-[7px] border-t-0 border-r-0 border-b border-l"
                      }
                    `}
                    ></div>

                    {/* Compact Header */}
                    <div
                      className={`flex flex-col ${
                        index % 2 === 0 ? "lg:items-end" : "lg:items-start"
                      }`}
                    >
                      <span className="inline-block px-3 py-0.5 rounded-full bg-[#FF4D4D]/10 text-[#FF4D4D] font-bold text-xs mb-2 border border-[#FF4D4D]/20">
                        {item.year}
                      </span>

                      <h3 className="text-lg font-bold text-white group-hover:text-[#FF4D4D] transition-colors">
                        {item.degree}
                      </h3>

                      <h4 className="text-gray-400 font-medium text-sm mb-2">
                        {item.institution}
                      </h4>
                    </div>

                    <p className="text-gray-500 text-xs leading-relaxed">
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
