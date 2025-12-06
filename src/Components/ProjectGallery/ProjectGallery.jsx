import React, { useState } from "react";

const ProjectGallery = () => {
  // ১. স্টেট ডিক্লেয়ার (কোন ট্যাব একটিভ আছে তা দেখার জন্য)
  const [activeTab, setActiveTab] = useState("all");

  // ২. প্রজেক্টের ডাটা (তোমার আসল প্রজেক্টের তথ্য এখানে বসাবে)
  const projects = [
    {
      id: 1,
      category: "ecommerce",
      title: "Nike Store Clone",
      image: "https://via.placeholder.com/600x400/111/fff?text=Ecommerce+App",
      desc: "A fully functional e-commerce website with cart features, payment gateway integration, and admin dashboard.",
      link: "#",
    },
    {
      id: 2,
      category: "portfolio",
      title: "Personal Portfolio",
      image: "https://via.placeholder.com/600x400/222/fff?text=Portfolio+Site",
      desc: "A sleek, dark-themed personal portfolio website built with React and Tailwind CSS to showcase skills.",
      link: "#",
    },
    {
      id: 3,
      category: "management",
      title: "Task Manager App",
      image: "https://via.placeholder.com/600x400/333/fff?text=Management+App",
      desc: "Productivity tool for teams to track tasks, deadlines, and collaboration in real-time.",
      link: "#",
    },
    {
      id: 4,
      category: "ecommerce",
      title: "Gadget Shop",
      image: "https://via.placeholder.com/600x400/444/fff?text=Gadget+Shop",
      desc: "An online electronics store featuring product filtering, search, and user reviews system.",
      link: "#",
    },
    {
      id: 5,
      category: "management",
      title: "Hospital CRM",
      image: "https://via.placeholder.com/600x400/555/fff?text=CRM+System",
      desc: "A comprehensive management system for hospitals to manage patients, doctors, and appointments.",
      link: "#",
    },
    {
      id: 6,
      category: "portfolio",
      title: "Agency Landing Page",
      image: "https://via.placeholder.com/600x400/666/fff?text=Agency+Web",
      desc: "High-converting landing page designed for a digital marketing agency with modern animations.",
      link: "#",
    },
  ];

  // ৩. ফিল্টারিং লজিক
  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter((project) => project.category === activeTab);

  // ৪. ট্যাব বাটনগুলোর লিস্ট
  const tabs = [
    { id: "all", label: "All Work" },
    { id: "ecommerce", label: "E-Commerce" },
    { id: "management", label: "Management" },
    { id: "portfolio", label: "Portfolio" },
  ];

  return (
    <section className="bg-[#0a0a0a] py-20 px-6 lg:px-12" id="projects">
      <div className="max-w-[1500px] mx-auto">
        
        {/* ============ HEADER ============ */}
        <div className="text-center mb-12">
          <span className="text-[#FF4D4D] font-bold tracking-widest uppercase text-sm">
            My Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Recent Projects
          </h2>
        </div>

        {/* ============ FILTER TABS (NAVBAR) ============ */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-6 py-2 rounded-full font-medium transition-all duration-300 border
                ${activeTab === tab.id 
                  ? "bg-[#FF4D4D] text-white border-[#FF4D4D] shadow-[0_0_15px_rgba(255,77,77,0.4)]" 
                  : "bg-transparent text-gray-400 border-gray-700 hover:border-[#FF4D4D] hover:text-white"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ============ PROJECTS GRID ============ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-[#111] border border-white/10 rounded-2xl overflow-hidden hover:border-[#FF4D4D]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <a href={project.link} className="bg-[#FF4D4D] text-white px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                     View Details
                   </a>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                {/* Category Tag */}
                <span className="text-[#FF4D4D] text-xs font-bold uppercase tracking-wider mb-2 block">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF4D4D] transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.desc}
                </p>

                {/* Link Arrow */}
                <a href={project.link} className="inline-flex items-center gap-2 text-white text-sm font-medium hover:text-[#FF4D4D] transition-colors">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>

            </div>
          ))}
        </div>
        
        {/* If no projects found (just in case) */}
        {filteredProjects.length === 0 && (
            <p className="text-center text-gray-500 mt-10">No projects found in this category.</p>
        )}

      </div>
    </section>
  );
};

export default ProjectGallery;