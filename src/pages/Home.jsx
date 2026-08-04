import React from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  Sparkles,
  BarChart3,
  FileOutput,
} from "lucide-react";

const services = [
  {
    icon: <Building2 size={32} />,
    title: "Hospital Layout Generation",
    description:
      "Generate optimized hospital floor plans based on healthcare infrastructure requirements.",
  },
  {
    icon: <Sparkles size={32} />,
    title: "AI Floor Plan Visualization",
    description:
      "Create realistic AI-generated hospital layouts with advanced visualization.",
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Planning Analytics",
    description:
      "Monitor space utilization and evaluate hospital planning performance.",
  },
  {
    icon: <FileOutput size={32} />,
    title: "Layout Export Services",
    description:
      "Export optimized floor plans in PDF and PNG formats.",
  },
];

function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12 text-[#f5f7fa] overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center blur-[1px] scale-105"
        style={{ backgroundImage: "url('/Bgd.png')" }}
      ></div>

      <div className="absolute inset-0 bg-[#10284E]/90"></div>

      <div className="relative flex flex-col items-center w-full max-w-6xl gap-6 z-10">

        <section className="flex flex-col md:flex-row items-center justify-between w-full gap-5">

          <div className="flex justify-center md:w-1/2">

            <img
              src="/Logo.png"
              alt="MediPlan Logo"
              className="w-40 h-40 md:w-56 md:h-56 object-contain"
            />

          </div>


          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-5 md:w-1/2">

            <h1 className="text-4xl md:text-5xl font-bold text-[#d9ffff]">
              MediPlan
            </h1>


            <p className="text-lg md:text-xl text-[#ffffff]">
              Intelligent Hospital Floor Planning System
            </p>


            <p className="text-sm md:text-base text-[#b4c9d1] max-w-xl">
              An AI-powered healthcare infrastructure planning platform that
              generates optimized hospital floor plans using CNN, Graphormer,
              and GAN architectures to improve workflow, accessibility, and
              operational efficiency.
            </p>


            <Link
              to="/get-started"
              className="mt-3 px-6 py-3 rounded-xl text-sm text-[#000000] bg-linear-to-r from-[#004955] to-[#105E60] hover:from-[#105E60] hover:to-[#14365C] transition-all duration-300"
            >
              Explore Now
            </Link>

          </div>

        </section>


        <section className="w-full max-w-6xl">

          <h2 className="text-3xl mb-8 text-center text-[#7ee7e7]">
            Our Services
          </h2>


          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">

            {services.map((service, index) => (

              <div
                key={index}
                className="group p-5 rounded-2xl bg-[#10284E]/50 border border-[#6B7D7F]/30 backdrop-blur-xl hover:bg-linear-to-br hover:from-[#004955]/80 hover:to-[#14365C]/80 hover:border-[#00d9d9] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center gap-3 text-center"
              >

                <div className="text-[#7ee7e7] group-hover:text-white group-hover:scale-110 transition duration-300">
                  {service.icon}
                </div>


                <p className="text-lg text-[#d9ffff] group-hover:text-white transition">
                  {service.title}
                </p>


                <p className="text-xs md:text-sm text-[#b4c9d1] group-hover:text-white transition">
                  {service.description}
                </p>

              </div>

            ))}

          </div>

        </section>


        <section className="w-full max-w-6xl">

          <h2 className="text-3xl mb-8 text-center text-[#7ee7e7]">
            AI Architecture Workflow
          </h2>


          <div className="grid md:grid-cols-5 gap-4">

            {[
              "Hospital Requirements",
              "CNN Prediction",
              "Graphormer Analysis",
              "GAN Generation",
              "Optimized Layout",
            ].map((item, index) => (

              <div
                key={index}
                className="group p-5 rounded-2xl bg-[#10284E]/50 border border-[#6B7D7F]/30 backdrop-blur-xl text-center hover:border-[#00d9d9] transition"
              >

                <h3 className="text-[#7ee7e7] font-semibold">
                  Step {index + 1}
                </h3>


                <p className="text-sm text-[#b4c9d1] mt-2">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </section>


      </div>

    </div>
  );
}

export default Home;