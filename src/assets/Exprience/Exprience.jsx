import React from "react";

const Experience = () => {
  const stats = [
    {
      id: 1,
      count: "20K+",
      label: "Completed Projects",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      ),
    },
    {
      id: 2,
      count: "10K+",
      label: "Digital Products",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      ),
    },
    {
      id: 3,
      count: "200+",
      label: "Positive Reviews",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ),
    },
    {
      id: 4,
      count: "1k+",
      label: "Satisfied Clients",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-[#0a0a0a] py-20 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* ============ LEFT SIDE: TEXT ============ */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6 text-center lg:text-left">
            <div>
              <span className="text-[#FF4D4D] font-bold tracking-widest uppercase text-sm">
                Success Stories
              </span>

              {/* Highlighted "25 Years" */}
              <h2 className="text-5xl md:text-7xl font-bold text-white mt-3 leading-none">
                25+ <br />
                <span className="text-3xl md:text-5xl text-gray-500">
                  Years Experience
                </span>
              </h2>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed">
              Business consulting provides expert advice to help businesses
              improve performance. We have successfully delivered thousands of
              projects with high client satisfaction.
            </p>

            <div className="pt-4">
              <button className="bg-[#FF4D4D] text-white px-8 py-3 rounded-full font-bold hover:bg-red-600 transition-all shadow-lg shadow-red-500/20">
                Contact Us
              </button>
            </div>
          </div>

          {/* ============ RIGHT SIDE: STAGGERED CARDS (Like Service Section) ============ */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Column 1 (Cards 1 & 3) - Normal */}
              <div className="flex flex-col gap-6">
                {stats.slice(0, 2).map((stat) => (
                  <StatCard key={stat.id} stat={stat} />
                ))}
              </div>

              {/* Column 2 (Cards 2 & 4) - Pushed Down (Zig-zag effect) */}
              <div className="flex flex-col gap-6 md:mt-16">
                {stats.slice(2, 4).map((stat) => (
                  <StatCard key={stat.id} stat={stat} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable Card Component (Same style as Service Section)
const StatCard = ({ stat }) => {
  return (
    <div className="group bg-[#050505] border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center hover:border-[#FF4D4D] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,77,77,0.1)] hover:-translate-y-2 cursor-pointer">
      {/* Icon */}
      <div className="bg-[#111] w-14 h-14 rounded-full flex items-center justify-center text-[#FF4D4D] mb-4 group-hover:scale-110 transition-transform">
        {stat.icon}
      </div>

      {/* Number Count */}
      <h3 className="text-4xl font-bold text-white mb-2 group-hover:text-[#FF4D4D] transition-colors">
        {stat.count}
      </h3>

      {/* Label */}
      <p className="text-gray-500 font-medium">{stat.label}</p>
    </div>
  );
};

export default Experience;
