import React from 'react';
import { ArrowUp, Cpu, Heart, Code2 } from 'lucide-react';
import { Github } from './BrandIcons';

const FOOTER_NAV = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Arsenal', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Milestones', href: '#milestones' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#07090D] border-t border-white/8 pt-16 pb-12 overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#00D9FF]/40 to-transparent" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#00D9FF]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/8">
          
          {/* Col 1: Brand & Philosophy */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#111722] border border-[#00D9FF]/40 flex items-center justify-center text-[#00D9FF]">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="font-space font-bold tracking-wider text-lg text-[#F4F7FB]">
                GOKUL R
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#8C99AA] font-sans max-w-sm leading-relaxed">
              Building at the intersection of hardware, software and intelligence.
              Electronics and Communication Engineering student at Rathinam Technical Campus.
            </p>

            <div className="inline-flex items-center gap-2 text-[10px] font-mono text-[#00D9FF] px-2.5 py-1 rounded bg-[#00D9FF]/8 border border-[#00D9FF]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D9FF] animate-pulse" />
              <span>ANTIGRAVITY // ZERO RUNTIME BLOAT</span>
            </div>
          </div>

          {/* Col 2: Navigation Map */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-mono text-xs text-[#F4F7FB] uppercase tracking-wider font-semibold">
              NAVIGATION MATRIX
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              {FOOTER_NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-[#8C99AA] hover:text-[#00D9FF] transition-colors py-1 flex items-center gap-1.5"
                >
                  <span className="text-[#00D9FF]/60 text-[10px]">›</span>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Direct Connect & Back-to-Top */}
          <div className="md:col-span-3 space-y-4 md:text-right flex flex-col justify-between">
            <div>
              <h4 className="font-mono text-xs text-[#F4F7FB] uppercase tracking-wider font-semibold mb-2">
                REPOSITORY
              </h4>
              <a
                href="https://github.com/rgokulgokul2007-lgtm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#111722] hover:bg-[#151D29] border border-white/10 hover:border-[#00D9FF]/40 text-xs font-mono text-[#F4F7FB] transition-all"
              >
                <Github className="w-3.5 h-3.5 text-[#00D9FF]" />
                <span>github/rgokul</span>
              </a>
            </div>

            <div>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#151D29] hover:bg-[#00D9FF] text-[#F4F7FB] hover:text-[#07090D] border border-white/10 text-xs font-mono tracking-wider transition-all duration-300"
                aria-label="Back to top"
              >
                <span>TOP OF MATRIX</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8C99AA]">
          <div className="text-center sm:text-left">
            © {currentYear} GOKUL R. ALL SYSTEMS VERIFIED.
          </div>

          <div className="text-center tracking-widest text-[11px] text-[#00D9FF] font-semibold">
            DESIGNED WITH CURIOSITY. ENGINEERED WITH PURPOSE.
          </div>
        </div>

      </div>
    </footer>
  );
}
