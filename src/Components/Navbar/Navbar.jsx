import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-gray-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className="text-white font-bold text-2xl tracking-wider"
            >
              Mahfuz
            </a>
          </div>
          {/* Desktop Nav Links */}
          <div className="hidden md:flex md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-orange-500 transition-colors duration-200 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
          {/* Hamburger - mobile */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              aria-label="Open main menu"
              onClick={() => setMenuOpen((open) => !open)}
              className="text-gray-100 hover:text-orange-500 focus:outline-none focus:text-orange-500"
            >
              {/* Simple Hamburger Icon */}
              <svg
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Links - show/hide */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 px-4 pt-2 pb-4">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-white hover:text-orange-500 transition-colors duration-200 py-2 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
