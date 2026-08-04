import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-3xl bg-linear-to-br from-[#10284E] via-[#14365C] to-[#105E60] shadow-lg">

      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-[#004955] via-[#105E60] to-[#14365C] opacity-80 animate-pulse" />

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4 border-b border-[#6B7D7F]/30">

        <div className="flex items-center gap-3">
          <img
            src="/Logo.png"
            alt="MediPlan"
            className="w-11 h-11 object-contain drop-shadow-xl"
          />

          <div className="flex flex-col">
            <span className="text-2xl font-bold text-cyan-200 tracking-wide">
              MediPlan
            </span>

            <span className="text-xs text-slate-300">
              Intelligent Hospital Planning
            </span>
          </div>
        </div>

        <nav className="hidden md:flex gap-8 text-lg font-medium">

          <Link
            to="/"
            className="relative text-white hover:text-cyan-200 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-cyan-200 after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </Link>

          <Link
            to="/get-started"
            className="relative text-white hover:text-cyan-200 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-cyan-200 after:transition-all after:duration-300 hover:after:w-full"
          >
            Get Started
          </Link>

          <Link
            to="/services"
            className="relative text-white hover:text-cyan-200 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-cyan-200 after:transition-all after:duration-300 hover:after:w-full"
          >
            Services
          </Link>

          <Link
            to="/about"
            className="relative text-white hover:text-cyan-200 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-cyan-200 after:transition-all after:duration-300 hover:after:w-full"
          >
            About Us
          </Link>

          <Link
            to="/contact"
            className="relative text-white hover:text-cyan-200 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-cyan-200 after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact Us
          </Link>

        </nav>

      </div>
    </header>
  );
}

export default Header;