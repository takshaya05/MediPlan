import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="relative flex min-h-screen items-center overflow-hidden px-4 pb-10 pt-28 sm:px-6 sm:pt-28 md:px-10 md:pt-24">
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-sky-400/10 blur-[100px]" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-emerald-400/10 blur-[110px]" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-300/10 blur-[100px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-center">
        <section className="grid w-full items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
          <div className="flex justify-center">
            <div className="relative flex h-56 w-56 items-center justify-center sm:h-72 sm:w-72 md:h-80 md:w-80">
              <div className="absolute inset-4 rounded-full border border-sky-300/30 bg-slate-900/20 backdrop-blur-sm" />

              <div className="absolute inset-10 rounded-full border border-emerald-300/25" />

              <div className="absolute inset-16 rounded-full bg-linear-to-br from-sky-400/15 to-emerald-400/15 blur-2xl" />

              <img
                src="/MediPlan.png"
                alt="MediPlan Logo"
                className="relative z-10 h-36 w-36 object-contain drop-shadow-[0_10px_30px_rgba(91,155,213,0.45)] sm:h-48 sm:w-48 md:h-56 md:w-56"
              />
            </div>
          </div>

          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-xs font-semibold tracking-wide text-sky-300 backdrop-blur-md">
              <Sparkles size={14} />
              AI-Powered Hospital Planning
            </span>

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              MediPlan
            </h1>

            <h2 className="mt-3 max-w-xl text-lg font-semibold text-sky-300 sm:text-xl md:text-2xl">
              Intelligent Hospital Floor Planning System
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
              A smart hospital planning platform designed to simplify
              healthcare infrastructure planning by creating efficient,
              organized, and optimized hospital floor layouts based on
              planning requirements.
            </p>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
              Plan spaces, organize hospital departments, visualize layouts,
              and make better planning decisions through an intelligent and
              user-friendly system.
            </p>

            <Link
              to="/dashboard"
              className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-sky-500 to-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-950/30 transition duration-300 hover:-translate-y-1 hover:from-sky-400 hover:to-emerald-400 hover:shadow-xl"
            >
              Explore Now

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;