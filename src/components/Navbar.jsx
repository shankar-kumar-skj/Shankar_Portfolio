// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const items = [
    ["home", "Home"],
    ["about", "About"],
    ["skills", "Skills"],
    ["projects", "Projects"],
    ["experience", "Experience"],
    ["papers", "Published"],
    ["education", "Education"],
    ["Certificate", "Certificate"],
    ["contact", "Contact"],
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div
          className="font-semibold text-xl tracking-wide text-gray-900 hover:text-sky-600 transition-colors duration-300 cursor-pointer select-none"
          tabIndex={0}
        >
          Shankar Kumar
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
          {items.map(([to, label]) => (
            <Link
              key={to}
              to={to}
              smooth
              duration={500}
              offset={-70}
              className="relative cursor-pointer hover:text-sky-600 transition-colors duration-300 group py-1"
              activeClass="text-sky-600 font-semibold"
              spy={true}
            >
              {label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-sky-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="text-3xl text-gray-800 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 active:scale-95 transition-transform"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Sliding Side Opaque Menu */}
      <aside
        role="dialog"
        aria-modal="true"
        className={`fixed top-0 right-0 h-full w-72 bg-white border border-gray-300 shadow-2xl rounded-l-3xl z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="text-3xl text-gray-800 hover:text-sky-600 transition-colors duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 active:scale-95"
          >
            <FiX />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col gap-6 px-8 py-4">
          {items.map(([to, label]) => (
            <Link
              key={to}
              to={to}
              smooth
              duration={500}
              offset={-70}
              onClick={() => setIsOpen(false)}
              className="text-lg font-semibold text-gray-800 hover:text-sky-600 transition-colors duration-300 cursor-pointer select-none relative group"
            >
              {label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-sky-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
      </aside>
    </nav>
  );
}
