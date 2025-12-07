

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-16 pb-8 font-sans">
      <div className="max-w-[1500px] mx-auto">
        {/* Top Section: 3 Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 mb-16">
          {/* Column 1: Brand & Newsletter */}
          <div className="flex flex-col gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
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
            </div>

            {/* Headline */}
            <h2 className="text-5xl font-bold leading-tight mt-4">
              Get Ready <span className="font-light text-gray-300">To</span>{" "}
              <br />
              <span className="font-light text-gray-300">Create Great</span>
            </h2>

            {/* Email Input */}
            <div className="mt-8 relative max-w-sm">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-gray-700 py-3 text-gray-300 focus:outline-none focus:border-[#FF4D4D] transition-colors"
              />
              <button className="absolute right-0 top-3 text-gray-400">
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
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:pl-20 pt-4">
            <h3 className="text-xl font-bold mb-8">Quick Link</h3>
            <ul className="flex flex-col gap-5 text-gray-400">
              <li>
                <a href="#" className="hover:text-[#FF4D4D] transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF4D4D] transition-colors">
                  Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF4D4D] transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF4D4D] transition-colors">
                  Blog Post
                </a>
              </li>
            
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="pt-4">
            <h3 className="text-xl font-bold mb-8">Contact</h3>
            <div className="flex flex-col gap-6 text-gray-400">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="bg-gray-900 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <span>mdmahfuzahmedony@gmail.com</span>
              </div>

              {/* Address */}
              <div className="flex items-center gap-4">
                <div className="bg-gray-900 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <span>Jessore,Sadar,Bangladesh</span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="bg-gray-900 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <span>01309834483</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              {["instagram", "linkedin", "twitter", "facebook"].map(
                (social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="bg-gray-900 p-3 rounded-full hover:bg-[#FF4D4D] hover:text-white transition-all text-gray-400"
                  >
                    {/* Simple placeholder icon for social media logic */}
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.492 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                    </svg>
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p>© Mahfuz Ahmed {new Date().getFullYear()} | All Rights Reserved</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Trams & Condition
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
