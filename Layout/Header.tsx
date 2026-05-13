"use client";

import { useState } from "react";

const navLinks = [
  { label: "Why Us", href: "#why-us" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Startup", href: "#startup" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-pink-100 relative z-50">
      {/* Subtle pink gradient strip at bottom of header */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-pink-300 to-transparent opacity-60 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center select-none shrink-0">
          <img
            src="/ANIX.png"
            alt="Anax Imperium Logo"
            className="h-35 w-auto object-contain"
            style={{ mixBlendMode: "multiply", imageRendering: "crisp-edges" }}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[0.9rem] font-medium text-gray-700 hover:text-[#E91E8C] transition-colors duration-200 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="#book"
          className="hidden md:inline-flex items-center px-6 py-2.5 rounded-full text-[0.875rem] font-semibold text-white bg-[#E91E8C] hover:bg-[#c9167a] active:scale-[0.97] transition-all duration-200 shadow-sm whitespace-nowrap shrink-0"
        >
          Book Consultation
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8"
        >
          <span
            className={`block h-[2px] w-6 bg-gray-800 transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-gray-800 transition-all duration-300 ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-gray-800 transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 pb-5 pt-2 gap-3 border-t border-pink-100 bg-white">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[0.95rem] font-medium text-gray-700 hover:text-[#E91E8C] transition-colors duration-150 py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center px-6 py-2.5 rounded-full text-[0.875rem] font-semibold text-white bg-[#E91E8C] hover:bg-[#c9167a] transition-all duration-200 shadow-sm"
          >
            Book Consultation
          </a>
        </nav>
      </div>
    </header>
  );
}