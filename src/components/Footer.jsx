import { Mail, Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="mx-auto my-3 w-[calc(100%-20px)] max-w-6xl rounded-2xl border border-slate-700/70 bg-[#16283a]/90 shadow-2xl shadow-slate-950/30 backdrop-blur-2xl md:my-4 md:w-[calc(100%-32px)]">
      <div className="flex min-h-16 items-center justify-between gap-5 px-4 sm:px-5">
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-bold tracking-[1.8px] text-slate-100 sm:text-base">
            MEDIPLAN
          </span>

          <span className="font-mono text-[9px] tracking-wide text-slate-400">
            Intelligent Hospital Planning
          </span>
        </div>

        <div className="hidden font-mono text-[9px] text-slate-400 sm:block">
          © {new Date().getFullYear()} MediPlan. All Rights Reserved.
        </div>

        <div className="flex items-center gap-3 font-mono text-[9px]">
          <a
            href="mailto:mediplan@mail.com"
            className="flex items-center gap-1 text-slate-400 hover:text-sky-300"
          >
            <Mail size={13} className="text-sky-400" />
            <span className="hidden lg:inline">mediplan@mail.com</span>
          </a>

          <a
            href="tel:+91XXXXXXXXXX"
            className="flex items-center gap-1 text-slate-400 hover:text-emerald-300"
          >
            <Phone size={13} className="text-emerald-400" />
            <span className="hidden lg:inline">+91 XXXXX XXXXX</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;