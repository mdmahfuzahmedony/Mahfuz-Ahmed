import React from "react";

const Contact = () => {
  return (
    <section  className="bg-[#0a0a0a] py-20 px-6 lg:px-12" id="contact">
      <div className="max-w-[1500px] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* ============ LEFT SIDE: INFO ============ */}
          <div className="flex flex-col gap-8">
            <div>
              <span className="text-[#FF4D4D] font-bold tracking-widest uppercase text-sm">
                Get In Touch
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 leading-tight">
                Let's Work <br />
                <span className="text-gray-500">Together</span>
              </h2>
              <p className="text-gray-400 text-lg mt-4 max-w-md leading-relaxed">
                Have a project in mind or just want to say hi? Feel free to send me a message. 
                I am available for freelance projects.
              </p>
            </div>

            {/* Info Items */}
            <div className="flex flex-col gap-6 mt-4">
              
              {/* Email */}
              <div className="flex items-center gap-5 group cursor-pointer">
                <div className="w-14 h-14 bg-[#111] border border-white/10 rounded-full flex items-center justify-center text-[#FF4D4D] group-hover:bg-[#FF4D4D] group-hover:text-white transition-all duration-300 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <h4 className="text-gray-500 text-sm font-medium">Email Me</h4>
                  <p className="text-white text-lg font-bold group-hover:text-[#FF4D4D] transition-colors">info@example.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-5 group cursor-pointer">
                <div className="w-14 h-14 bg-[#111] border border-white/10 rounded-full flex items-center justify-center text-[#FF4D4D] group-hover:bg-[#FF4D4D] group-hover:text-white transition-all duration-300 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <h4 className="text-gray-500 text-sm font-medium">Call Me</h4>
                  <p className="text-white text-lg font-bold group-hover:text-[#FF4D4D] transition-colors">+880 123 456 789</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-5 group cursor-pointer">
                <div className="w-14 h-14 bg-[#111] border border-white/10 rounded-full flex items-center justify-center text-[#FF4D4D] group-hover:bg-[#FF4D4D] group-hover:text-white transition-all duration-300 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <h4 className="text-gray-500 text-sm font-medium">Location</h4>
                  <p className="text-white text-lg font-bold group-hover:text-[#FF4D4D] transition-colors">Dhaka, Bangladesh</p>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className="mt-6">
                <h4 className="text-white font-bold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {['facebook', 'twitter', 'linkedin', 'instagram'].map((social, index) => (
                      <a key={index} href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-[#FF4D4D] hover:text-white hover:border-[#FF4D4D] transition-all duration-300">
                           <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.492 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" /></svg>
                      </a>
                  ))}
                </div>
            </div>
          </div>

          {/* ============ RIGHT SIDE: FORM ============ */}
          <div className="bg-[#050505] border border-white/10 p-8 lg:p-10 rounded-3xl shadow-2xl hover:border-[#FF4D4D]/30 transition-all duration-500">
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            
            <form className="flex flex-col gap-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-400 text-sm">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="bg-[#111] border border-gray-800 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-[#FF4D4D] transition-colors"
                  />
                </div>
                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-400 text-sm">Your Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-[#111] border border-gray-800 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-[#FF4D4D] transition-colors"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                  <label className="text-gray-400 text-sm">Subject</label>
                  <input 
                    type="text" 
                    placeholder="Project Inquiry" 
                    className="bg-[#111] border border-gray-800 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-[#FF4D4D] transition-colors"
                  />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                  <label className="text-gray-400 text-sm">Message</label>
                  <textarea 
                    rows="5"
                    placeholder="Write your message here..." 
                    className="bg-[#111] border border-gray-800 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-[#FF4D4D] transition-colors resize-none"
                  ></textarea>
              </div>

              {/* Submit Button */}
              <button className="bg-[#FF4D4D] text-white py-4 rounded-xl font-bold text-lg hover:bg-red-600 transition-all shadow-lg shadow-red-500/20 mt-2">
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;