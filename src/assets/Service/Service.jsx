import React from "react";

const Service = () => {
  // সার্ভিস ডেটা
  const services = [
    {
      id: 1,
      title: "Web Design",
      desc: "Creating stunning web layouts.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
      ),
    },
    {
      id: 2,
      title: "UI/UX Design",
      desc: "User-friendly interfaces.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M2 20h20"></path><circle cx="12" cy="10" r="4"></circle><path d="M12 14v4"></path><path d="M8 14h8"></path></svg>
      ),
    },
    {
      id: 3,
      title: "Web Research",
      desc: "Deep analysis for growth.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21h6"></path><path d="M12 21v-2"></path><path d="M12 3a7 7 0 0 1 7 7c0 2.5-1.5 5-4 6H9c-2.5-1-4-3.5-4-6a7 7 0 0 1 7-7z"></path></svg>
      ),
    },
    {
      id: 4,
      title: "Marketing",
      desc: "Boost your business reach.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
      ),
    },
  ];

  return (
    <section id="service" className="bg-[#0a0a0a] py-20 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* ============ LEFT SIDE: TEXT CONTENT ============ */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6 text-center lg:text-left">
            <div>
              <span className="text-[#FF4D4D] font-bold tracking-widest uppercase text-sm">
                What I Offer
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 leading-tight">
                Quality Services <br />
                <span className="text-gray-500">For Your Business</span>
              </h2>
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              We transform your ideas into reality. Whether it's a unique website 
              or a marketing strategy, we ensure your digital presence stands out 
              from the crowd.
            </p>

            {/* Optional Button */}
            <div className="pt-4">
              <a href="#contact" className="inline-flex items-center gap-2 text-white border-b border-[#FF4D4D] pb-1 hover:text-[#FF4D4D] transition-colors">
                View All Services
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
              </a>
            </div>
          </div>

          {/* ============ RIGHT SIDE: STAGGERED CARDS ============ */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Column 1 (Cards 1 & 3) */}
              <div className="flex flex-col gap-6">
                {services.slice(0, 2).map((service) => (
                   <ServiceCard key={service.id} service={service} />
                ))}
              </div>

              {/* Column 2 (Cards 2 & 4) - Pushed Down for Stagger Effect */}
              {/* 'md:mt-16' ক্লাসটি দ্বিতীয় লাইনকে নিচে নামিয়ে দেবে */}
              <div className="flex flex-col gap-6 md:mt-16">
                {services.slice(2, 4).map((service) => (
                   <ServiceCard key={service.id} service={service} />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Reusable Card Component for cleaner code
const ServiceCard = ({ service }) => {
  return (
    <div className="group bg-[#050505] border border-white/10 rounded-2xl p-8 hover:border-[#FF4D4D] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,77,77,0.1)] cursor-pointer">
      <div className="bg-[#111] w-14 h-14 rounded-full flex items-center justify-center text-[#FF4D4D] mb-6 group-hover:scale-110 transition-transform">
        {service.icon}
      </div>
      <h3 className="text-white text-2xl font-bold mb-2 group-hover:text-[#FF4D4D] transition-colors">
        {service.title}
      </h3>
      <p className="text-gray-500 text-sm">
        {service.desc}
      </p>
    </div>
  );
};

export default Service;