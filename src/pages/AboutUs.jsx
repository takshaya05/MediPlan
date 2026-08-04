import React from "react";
import { Rocket, User } from "lucide-react";

function AboutUs() {
  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center px-6 py-10">

      <div
        className="absolute inset-0 bg-cover bg-center blur-[1px] scale-105"
        style={{ backgroundImage: "url('/Bgd.png')" }}
      ></div>

      <div className="absolute inset-0 bg-[#10284E]/90"></div>

      <div className="relative z-10 w-full max-w-6xl flex flex-col gap-6">

        <h1 className="text-4xl font-bold text-center text-[#d9ffff]">
          About Us
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-5">

          <img
            src="/Logo.png"
            alt="MediPlan Logo"
            className="w-24 h-24 md:w-28 md:h-28 object-contain"
          />

          <div className="flex flex-col text-left gap-1">

            <h2 className="text-3xl md:text-2xl font-semibold text-[#7ee7e7]">
              MediPlan
            </h2>

            <p className="text-base md:text-lg text-[#9bd8dc]">
              Intelligent Hospital Floor Planning System
            </p>

            <p className="text-sm md:text-base text-[#b0c4cc] max-w-md">
              An AI-powered healthcare infrastructure planning platform that
              generates optimized hospital layouts using CNN, Graphormer,
              and GAN architectures.
            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-4 w-full">

          <div className="group border border-[#6B7D7F]/30 backdrop-blur-xl bg-[#10284E]/40 rounded-2xl p-4 flex flex-col hover:-translate-y-1 hover:bg-linear-to-br hover:from-[#004955]/90 hover:to-[#14365C]/80 hover:border-[#00d9d9] transition-all duration-300">

            <div className="flex items-center justify-start gap-2 mb-2 text-[#5eead4] group-hover:text-white transition">

              <Rocket size={24} />

              <h3 className="text-xl font-semibold text-[#d9ffff] group-hover:text-white transition">
                Our Mission
              </h3>

            </div>

            <p className="text-base text-[#b4c9d1] group-hover:text-white leading-relaxed transition">
              MediPlan aims to transform traditional hospital planning by
              providing an intelligent AI-based system that automates floor
              layout generation. By combining deep learning and graph-based
              optimization, our platform helps create efficient, accessible,
              and workflow-friendly healthcare environments.
            </p>

          </div>


          <div className="group border border-[#6B7D7F]/30 backdrop-blur-xl bg-[#10284E]/40 rounded-2xl p-4 flex flex-col hover:-translate-y-1 hover:bg-linear-to-br hover:from-[#004955]/90 hover:to-[#14365C]/80 hover:border-[#00d9d9] transition-all duration-300">

            <div className="flex items-center justify-start gap-2 mb-2 text-[#5eead4] group-hover:text-white transition">

              <User size={24} />

              <h3 className="text-xl font-semibold text-[#d9ffff] group-hover:text-white transition">
                Developer Details
              </h3>

            </div>

            <p className="text-base text-[#b4c9d1] group-hover:text-white leading-relaxed transition">
              MediPlan was developed as an intelligent healthcare planning
              solution focused on integrating artificial intelligence with
              architectural design. The system uses advanced AI models to
              generate optimized hospital infrastructure layouts.
            </p>

            <ul className="mt-2 text-sm text-[#9fb8c2] space-y-1 group-hover:text-white transition">

              <li>
                Technology Stack: React, Vite, Tailwind CSS
              </li>

              <li>
                AI Models: CNN, Graphormer, GAN
              </li>

              <li>
                Goal: Intelligent and optimized hospital planning
              </li>

            </ul>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AboutUs;