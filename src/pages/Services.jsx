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
    <main className="relative min-h-screen overflow-hidden px-4 pb-12 pt-28 sm:px-6 md:px-10 md:pt-32">
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-sky-400/10 blur-[100px]" />

      <div className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-emerald-400/10 blur-[110px]" />

      <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-300/10 blur-[100px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[2px] text-sky-300">
            MediPlan
          </span>

          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Our Services
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Intelligent tools designed to simplify hospital infrastructure
            planning, improve space utilization, and support better healthcare
            facility decisions.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="group flex flex-col items-center rounded-2xl border border-slate-600/60 bg-[#172b3d]/75 p-6 text-center shadow-xl shadow-slate-950/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-sky-400/50 hover:bg-[#1b3448]/90 hover:shadow-2xl hover:shadow-sky-950/30"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-sky-400/15 to-emerald-400/15 text-sky-300 ring-1 ring-sky-300/10 transition-all duration-300 group-hover:scale-110 group-hover:text-emerald-300">
                {service.icon}
              </div>

              <h3 className="mt-5 text-lg font-semibold text-slate-100 transition-colors duration-300 group-hover:text-white">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400 transition-colors duration-300 group-hover:text-slate-200">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <section className="mx-auto w-full max-w-4xl">
          <div className="mb-5 text-center">
            <span className="text-sm font-semibold uppercase tracking-[2px] text-emerald-300">
              Simple Process
            </span>

            <h2 className="mt-2 text-3xl font-bold text-white">
              How to Use MediPlan
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-400">
              A simple workflow for creating and managing intelligent hospital
              planning solutions.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-600/60 bg-[#172b3d]/75 p-6 shadow-xl shadow-slate-950/20 backdrop-blur-xl">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Enter hospital requirements and planning details",
                "Analyze hospital requirements using intelligent planning",
                "Generate optimized hospital floor layouts",
                "Export and utilize the generated planning solutions",
              ].map((step, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 rounded-xl border border-slate-700/60 bg-slate-900/20 p-4 transition-all duration-300 hover:border-sky-400/30 hover:bg-sky-400/5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-sky-400/20 to-emerald-400/20 text-sm font-bold text-sky-300 ring-1 ring-sky-300/10 group-hover:text-emerald-300">
                    {index + 1}
                  </div>

                  <p className="pt-1 text-sm leading-6 text-slate-300 group-hover:text-white">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Services;