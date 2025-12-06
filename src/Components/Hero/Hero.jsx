import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-[#0a0a0a] min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-0">
      {/* ================= BACKGROUND TEXT EFFECT ================= */}
      {/* এই লেখাটি ছবির পেছনে থাকবে (WEB DESIGN) */}
      <div className="absolute bottom-0 w-full text-center z-0 select-none pointer-events-none opacity-30 lg:opacity-100">
        <div className="relative flex flex-col items-center justify-center leading-none">
          {/* Top Text (Gray Outline) */}
          <h1
            className="text-[6rem] md:text-[10rem] lg:text-[13rem] font-bold text-transparent font-sans"
            style={{ WebkitTextStroke: "2px #333" }}
          >
            WEB
          </h1>
          {/* Bottom Text (Red Outline) */}
          <h1
            className="text-[6rem] md:text-[10rem] lg:text-[13rem] font-bold text-transparent font-sans -mt-4 md:-mt-10"
            style={{ WebkitTextStroke: "2px #FF4D4D" }}
          >
            WEB DESIGN
          </h1>
        </div>
      </div>

      {/* ================= MAIN CONTENT GRID ================= */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center h-full">
          {/* ----- LEFT COLUMN: HEADING ----- */}
          <div className="order-2 lg:order-1 flex flex-col gap-6 text-center lg:text-left mt-10 lg:mt-0">
            <span className="text-white font-bold tracking-[0.2em] text-sm uppercase">
              Hello
            </span>
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              I'm <br />
              Mahfuz <br />
              <span className="text-gray-400">Ahmed</span>
            </h2>

            {/* Button */}
            <div className="mt-4 flex justify-center lg:justify-start">
              <button className="bg-[#FF4D4D] text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-red-600 transition-all shadow-lg shadow-red-500/20 group">
                View Portfolio
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* ----- CENTER COLUMN: YOUR PHOTO PLACEHOLDER ----- */}
          <div className="order-1 lg:order-2 flex justify-center items-end h-[500px] lg:h-[700px] relative">
            {/* ⚠️⚠️ তোমার ছবি এখানে বসাবে ⚠️⚠️ */}
            {/* src="/your-image.png" দিয়ে নিচের img ট্যাগটি ঠিক করে নিও */}
            <img
              src="https://via.placeholder.com/600x800/333333/FFFFFF?text=Put+Your+Photo+Here"
              alt="Mahfuz Ahmed"
              className="h-full object-cover object-top drop-shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
              style={{
                maskImage:
                  "linear-gradient(to bottom, black 80%, transparent 100%)",
              }}
            />
          </div>

          {/* ----- RIGHT COLUMN: ABOUT & SOCIAL ----- */}
          <div className="order-3 lg:order-3 flex flex-col gap-8 text-center lg:text-left mt-10 lg:mt-0">
            {/* About Text */}
            <div>
              <h3 className="text-white text-xl font-bold mb-4">About Me.</h3>
              <p className="text-gray-400 leading-relaxed max-w-sm mx-auto lg:mx-0">
                A personal <span className="text-[#FF4D4D]">portfolio</span> is
                a collection of your work, that is achievements, and skills that{" "}
                <span className="text-[#FF4D4D]">web design</span> highlights in
                your growth.
              </p>
            </div>

            {/* Find me on */}
            <div>
              <h4 className="text-white font-medium mb-4">Find me on</h4>
              <div className="flex gap-4 justify-center lg:justify-start">
                {["instagram", "linkedin", "twitter", "facebook"].map(
                  (social, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#FF4D4D] hover:text-white transition-all duration-300"
                    >
                      {/* Generic Icon */}
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.492 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                      </svg>
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
