// src/sections/Footer.jsx
import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-slate-200 py-6 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-sm text-slate-600 flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Copyright */}
        <div className="text-center sm:text-left">
          © {currentYear} Shankar Kumar. All rights reserved.
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          <a
            href="https://github.com/shankar-kumar-skj/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-600 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shankar-kumar-02800b290/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-600 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
