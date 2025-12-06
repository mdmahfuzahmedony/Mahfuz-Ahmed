import React from "react";

const About = () => {
  // স্কিল আইকন লিস্ট (তুমি চাইলে আরও বাড়াতে পারো)
  const skills = [
    { name: "React", color: "#61DAFB" },
    { name: "JavaScript", color: "#F7DF1E" },
    { name: "Tailwind", color: "#38B2AC" },
    { name: "Node JS", color: "#339933" },
    { name: "Figma", color: "#F24E1E" },
    { name: "HTML5", color: "#E34F26" },
    { name: "CSS3", color: "#1572B6" },
    { name: "Next JS", color: "#FFFFFF" },
  ];

  return (
    <section className="bg-[#0a0a0a] py-20 px-6 lg:px-12 overflow-hidden" id="about">
      <div className="max-w-[1400px] mx-auto">
        
        {/* ============ TOP SECTION: TEXT LEFT - IMAGE RIGHT ============ */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
          
          {/* ----- LEFT SIDE: TEXT ----- */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1 text-center lg:text-left">
            <span className="text-[#FF4D4D] font-bold tracking-widest uppercase text-sm">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
              Professional <br />
              <span className="text-gray-500">Problem Solver</span>
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Hello! I'm Mahfuz Ahmed, a passionate Web Developer & UI/UX Designer. 
              I specialize in building high-quality websites and applications. 
              My focus is on creating clean, user-friendly, and performant web experiences.
            </p>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              With a strong foundation in modern technologies, I transform ideas into 
              digital reality. Let's work together to build something amazing!
            </p>

            <div className="flex justify-center lg:justify-start gap-6">
              <button className="bg-[#FF4D4D] text-white px-8 py-3 rounded-full font-bold hover:bg-red-600 transition-all shadow-lg shadow-red-500/20">
                Download CV
              </button>
              <button className="text-white font-medium border-b border-[#FF4D4D] hover:text-[#FF4D4D] transition-colors">
                View Projects
              </button>
            </div>
          </div>

          {/* ----- RIGHT SIDE: IMAGE ----- */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center relative">
            
            {/* Background Decorative Box */}
            <div className="absolute w-[300px] h-[350px] md:w-[400px] md:h-[450px] border-2 border-[#FF4D4D] rounded-[30px] translate-x-4 translate-y-4"></div>
            
            {/* Image Placeholder */}
            <div className="relative w-[300px] h-[350px] md:w-[400px] md:h-[450px] bg-[#1a1a1a] rounded-[30px] overflow-hidden shadow-2xl">
              {/* ⚠️ তোমার ছবি এখানে বসাবে ⚠️ */}
              <img 
                src="https://via.placeholder.com/400x500/333333/FFFFFF?text=About+Image" 
                alt="My Photo" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* ============ BOTTOM SECTION: ANIMATED SKILLS (MARQUEE) ============ */}
        <div className="mt-10">
            <h3 className="text-center text-white font-bold text-xl mb-8 opacity-70">Technical Skills</h3>
            
            {/* Infinite Scroll Container */}
            <div className="relative flex overflow-x-hidden group">
                
                {/* Gradient Masks for Fade Effect */}
                <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#0a0a0a] to-transparent z-10"></div>
                <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#0a0a0a] to-transparent z-10"></div>

                {/* Animated Track */}
                <div className="flex animate-marquee whitespace-nowrap gap-10">
                    {/* আমরা ২ বার লুপ চালাবো যাতে ইনফিনিটি মনে হয় */}
                    {[...skills, ...skills, ...skills].map((skill, index) => (
                        <div key={index} className="flex flex-col items-center gap-2 min-w-[100px] opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                            {/* Generic Code Icon for all, or replace with real Logos */}
                            <div 
                                className="w-16 h-16 rounded-xl flex items-center justify-center bg-[#111] border border-white/10 shadow-lg"
                                style={{ color: skill.color }} // Dynamic Color
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="16 18 22 12 16 6"></polyline>
                                    <polyline points="8 6 2 12 8 18"></polyline>
                                </svg>
                            </div>
                            <span className="text-white text-sm font-medium">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

      </div>

      {/* ============ CUSTOM STYLE FOR ANIMATION ============ */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        /* Pause animation on hover if you want */
        .group:hover .animate-marquee {
           animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default About;