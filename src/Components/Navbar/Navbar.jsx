import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ 1. এখানে আমি 'link' নামে একটা অপশন যোগ করেছি
  // এই লিংকগুলো তোমার সেকশনের ID এর সাথে মিলতে হবে।
  const navLinks = [
    // { name: "Home", link: "home", hasDropdown: false },
    { name: "About", link: "#about", hasDropdown: false },
    { name: "Services", link: "#service", hasDropdown: true }, // Service.jsx এ id="service" থাকতে হবে
    { name: "Project", link: "#projects", hasDropdown: true }, // Portfolio.jsx এ id="projects" থাকতে হবে
    { name: "Testimonial", link: "#testimonial", hasDropdown: true },
    { name: "Contact", link: "#contact", hasDropdown: false },
  ];

  return (
    <nav className="bg-[#0a0a0a]  text-white border-b  sticky top-0 z-50">
      <div className="max-w-[1500px] border mx-auto ">
        <div className="flex justify-between items-center h-24">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <a href="#home" className="flex items-center gap-2">
              {" "}
              {/* লোগোতে ক্লিক করলে হোমে যাবে */}
              <svg
                width="40"
                height="40"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="25"
                  cy="25"
                  r="20"
                  stroke="#FF4D4D"
                  strokeWidth="8"
                />
                <path
                  d="M25 15C30 15 35 25 25 35"
                  stroke="#FF4D4D"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-3xl font-bold tracking-wide">Reeni</span>
            </a>
          </div>

          {/* ✅ 2. Desktop Navigation Link Update */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((item, index) => (
              <a
                key={index}
                href={item.link} // 👈 এখানে লিংক ডাইনামিক করা হয়েছে
                className="flex items-center gap-1 text-lg font-medium hover:text-[#FF4D4D] transition-colors duration-200"
              >
                {item.name}
                {item.hasDropdown && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                )}
              </a>
            ))}
          </div>

          {/* Right Side (Socials + Menu Button) */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-3">
              {["instagram", "linkedin", "twitter", "facebook"].map(
                (item, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 flex justify-center items-center bg-gray-800 rounded-full hover:bg-gray-700 transition-all text-white"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.492 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                    </svg>
                  </a>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-12 h-12 flex flex-col justify-center items-center gap-1.5 bg-[#FF4D4D] rounded-full hover:bg-red-500 transition-all shadow-lg shadow-red-500/30"
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-all ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-all ${
                  menuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-all ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      {/* ✅ 3. Mobile Dropdown Menu Link Update */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0a0a0a] border-t border-gray-800 absolute w-full left-0 top-24 shadow-2xl px-6 py-8 flex flex-col gap-6 animate-fade-in-down">
          {navLinks.map((item, index) => (
            <a
              key={index}
              href={item.link} // 👈 মোবাইলেও লিংক ডাইনামিক করা হয়েছে
              className="text-xl font-medium text-gray-300 hover:text-[#FF4D4D] flex justify-between items-center border-b border-gray-800 pb-2"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}

          {/* Mobile Socials */}
          <div className="flex gap-4 mt-4 justify-center">
            {/* ... Social Icons code remains same ... */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
