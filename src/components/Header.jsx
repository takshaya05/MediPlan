import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
  ];

  const goTo = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <header className="fixed left-1/2 top-3 z-50 w-[calc(100%-20px)] max-w-6xl -translate-x-1/2 rounded-2xl border border-slate-700/70 bg-[#16283a]/90 shadow-2xl shadow-slate-950/30 backdrop-blur-2xl md:top-4 md:w-[calc(100%-32px)]">
      <div className="flex min-h-16 items-center justify-between px-4 sm:px-5">
        <button
          onClick={() => goTo("/")}
          className="flex items-center gap-2.5"
        >
          <img
            src="/MediPlan.png"
            alt="MediPlan"
            className="h-10 w-10 rounded-xl object-contain"
          />

          <div className="flex flex-col gap-0.5 text-left">
            <span className="text-sm font-bold tracking-[1.8px] text-slate-100 sm:text-base">
              MEDIPLAN
            </span>

            <span className="font-mono text-[9px] tracking-wide text-slate-400 max-[420px]:hidden">
              Intelligent Hospital Planning
            </span>
          </div>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map(({ name, path }) => (
            <button
              key={path}
              onClick={() => goTo(path)}
              className={`relative rounded-lg px-4 py-2.5 text-[13px] font-semibold transition-all after:absolute after:bottom-1 after:left-1/2 after:h-0.5 after:-translate-x-1/2 after:rounded-full after:bg-linear-to-r after:from-sky-400 after:to-emerald-400 after:transition-all ${
                pathname === path
                  ? "bg-sky-400/10 text-sky-300 after:w-6"
                  : "text-slate-300 after:w-0 hover:bg-slate-700/50 hover:text-sky-300 hover:after:w-6"
              }`}
            >
              {name}
            </button>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-600 bg-slate-800/70 text-sky-300 md:hidden"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-700/70 px-4 py-3 md:hidden">
          {links.map(({ name, path }) => (
            <button
              key={path}
              onClick={() => goTo(path)}
              className={`block w-full rounded-lg px-4 py-2.5 text-left text-sm font-semibold ${
                pathname === path
                  ? "bg-sky-400/10 text-sky-300"
                  : "text-slate-300 hover:bg-slate-700/50 hover:text-emerald-300"
              }`}
            >
              {name}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;