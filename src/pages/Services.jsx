import React from "react";
import {
  Building2,
  Sparkles,
  BarChart3,
  FileOutput,
} from "lucide-react";

const servicesList = [
  {
    icon: <Building2 size={34} />,
    title: "Hospital Layout Generation",
    description:
      "Generate optimized hospital floor plans based on healthcare infrastructure requirements.",
  },
  {
    icon: <Sparkles size={34} />,
    title: "AI Floor Plan Visualization",
    description:
      "Create realistic AI-generated hospital layouts with advanced visualization.",
  },
  {
    icon: <BarChart3 size={34} />,
    title: "Planning Analytics",
    description:
      "Monitor space utilization and evaluate hospital planning performance.",
  },
  {
    icon: <FileOutput size={34} />,
    title: "Layout Export Services",
    description:
      "Export optimized floor plans in PDF and PNG formats.",
  },
];

function Services() {
  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center px-6 py-10">
      <div
        className="absolute inset-0 bg-cover bg-center blur-[1px] scale-105"
        style={{ backgroundImage: "url('/Bgd.png')" }}
      ></div>

      <div className="absolute inset-0 bg-[#10284E]/90"></div>

      <div className="relative z-10 w-full max-w-6xl flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-center text-[#d9ffff]">
          Our Services
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="group p-4 rounded-2xl border border-[#6B7D7F]/30 backdrop-blur-xl bg-[#10284E]/40 hover:bg-linear-to-br hover:from-[#004955]/90 hover:to-[#14365C]/80 hover:border-[#00d9d9] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center gap-2"
            >
              <div className="text-[#7ee7e7] group-hover:text-white group-hover:scale-110 transition duration-300">
                {service.icon}
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-[#d7ffff] group-hover:text-white transition">
                {service.title}
              </h3>

              <p className="text-xs md:text-sm text-[#b8d8dc] group-hover:text-white leading-relaxed transition">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <section className="w-full max-w-3xl mx-auto mt-4 flex flex-col gap-1">
          <h2 className="text-3xl font-semibold text-[#d7ffff] text-center">
            How to Use MediPlan
          </h2>

          <div className="group border border-[#6B7D7F]/30 backdrop-blur-xl bg-[#10284E]/40 rounded-2xl p-4 text-sm md:text-base flex flex-col gap-1 transition-all duration-300 hover:bg-linear-to-br hover:from-[#004955]/90 hover:to-[#14365C]/80 hover:border-[#00d9d9]">
            <p className="text-[#b8d8dc] group-hover:text-white">
              • Enter hospital requirements and planning details
            </p>

            <p className="text-[#b8d8dc] group-hover:text-white">
              • Analyze hospital requirements using AI models
            </p>

            <p className="text-[#b8d8dc] group-hover:text-white">
              • Generate optimized hospital floor layouts
            </p>

            <p className="text-[#b8d8dc] group-hover:text-white">
              • Export and utilize AI-generated planning solutions
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Services;