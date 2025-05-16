import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 pl-8 md:pl-10 pr-5 md:pr-10 pt-5">
      <div className="max-w-screen-3xl mx-auto flex items-center justify-between">

        {/* Left Section: Logo + Nav (desktop only) */}
        <div className="flex items-center space-x-12">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3">
            <span className="text-green-700 text-2xl font-semibold tracking-tighter bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent"><i className="fa-solid fa-leaf mr-2"></i>Verdana</span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-8">
            {[
              { label: "Nav1", href: "#nav1" },
              { label: "Nav2", href: "#nav2" },
              { label: "Nav3", href: "#nav3" },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="relative text-sm text-black px-3 py-2 transition-colors duration-300 hover:text-green-700"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section: Sign Up & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          {/* Desktop Sign Up */}
          <a
            href="#signup"
            className="hidden md:inline-block pt-3 pl-5 pr-5 pb-3 rounded rounded-3xl bg-green-700 text-white text-sm hover:bg-green-800 rounded-2xl transition"
          >
            Sign Up
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col p-4 space-y-2">
          {[
            { label: "Nav1", href: "#nav1" },
            { label: "Nav2", href: "#nav2" },
            { label: "Nav3", href: "#nav3" },
            { label: "Nav4", href: "#nav4" },
            { label: "Nav5", href: "#nav5" },
          ].map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="block px-4 py-2 text-sm text-black hover:text-green-800"
              >
                {item.label}
              </a>
            </li>
          ))}

          {/* Mobile Sign Up */}
          <li>
            <a
              href="#signup"
              className="block w-full text-center mt-2 px-4 py-2 text-sm font-medium text-white bg-green-700 hover:bg-green-800 rounded-lg transition"
            >
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
