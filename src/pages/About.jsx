import { Brain, Code2 } from "lucide-react";

function About() {
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

          <h1 className="mt-2 text-4xl font-extrabold text-white sm:text-5xl">
            About Us
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Learn more about MediPlan, its technology stack, and the intelligent
            models used for hospital floor planning.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-600/60 bg-[#172b3d]/75 p-6 shadow-xl backdrop-blur-xl">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300">
                <Code2 size={24} />
              </div>

              <h3 className="text-xl font-semibold text-slate-100">
                Technology Stack
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <p className="rounded-xl border border-slate-700/60 bg-slate-900/20 p-4 text-sm text-sky-300">
                React.js
              </p>

              <p className="rounded-xl border border-slate-700/60 bg-slate-900/20 p-4 text-sm text-emerald-300">
                Vite
              </p>

              <p className="rounded-xl border border-slate-700/60 bg-slate-900/20 p-4 text-sm text-sky-300">
                JavaScript
              </p>

              <p className="rounded-xl border border-slate-700/60 bg-slate-900/20 p-4 text-sm text-emerald-300">
                Tailwind CSS
              </p>

              <p className="rounded-xl border border-slate-700/60 bg-slate-900/20 p-4 text-sm text-sky-300">
                Node.js
              </p>

              <p className="rounded-xl border border-slate-700/60 bg-slate-900/20 p-4 text-sm text-emerald-300">
                Recharts & Framer Motion
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-600/60 bg-[#172b3d]/75 p-6 shadow-xl backdrop-blur-xl">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                <Brain size={24} />
              </div>

              <h3 className="text-xl font-semibold text-slate-100">
                AI Models & Intelligence
              </h3>
            </div>

            <div className="space-y-3">
              <div className="rounded-xl border border-slate-700/60 bg-slate-900/20 p-4">
                <h4 className="text-sm font-semibold text-sky-300">CNN</h4>

                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Extracts spatial and visual features from hospital layouts.
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/60 bg-slate-900/20 p-4">
                <h4 className="text-sm font-semibold text-emerald-300">
                  Graphormer
                </h4>

                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Understands relationships between hospital departments,
                  rooms, and connected spaces.
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/60 bg-slate-900/20 p-4">
                <h4 className="text-sm font-semibold text-sky-300">GAN</h4>

                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Generates realistic and optimized hospital floor layouts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;