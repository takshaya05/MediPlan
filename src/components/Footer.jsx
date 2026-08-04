import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="relative w-full bg-[#10284E] shadow-xl py-2 px-6">
      <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-[#004955] via-[#105E60] to-[#14365C] opacity-80 animate-pulse" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-4 items-center text-center text-[13px] text-white">
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-2">
            <img src="/Logo.png" alt="MediPlan" className="w-7 h-7" />
            <span className="text-lg font-semibold text-cyan-200">
              MediPlan
            </span>
          </div>
          <p className="text-xs text-slate-300">
            Intelligent Hospital Planning
          </p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <h3 className="text-cyan-200 font-medium text-[13px]">
            Quick Links
          </h3>

          <div className="flex gap-4 flex-wrap justify-center text-[13px]">
            <Link
              to="/get-started"
              className="hover:text-white transition-colors duration-300"
            >
              Get Started
            </Link>

            <Link
              to="/services"
              className="hover:text-white transition-colors duration-300"
            >
              Services
            </Link>

            <Link
              to="/about"
              className="hover:text-white transition-colors duration-300"
            >
              About Us
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center gap-1">
          <h3 className="text-cyan-200 font-medium text-[13px]">
            Follow Us
          </h3>

          <div className="flex gap-3 text-lg">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-white transition-colors duration-300 cursor-pointer" />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="hover:text-white transition-colors duration-300 cursor-pointer" />
            </a>

            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="hover:text-white transition-colors duration-300 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-[10px] mt-0.5 text-white">
        © {new Date().getFullYear()} MediPlan. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;