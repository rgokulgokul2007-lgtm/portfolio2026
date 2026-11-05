import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Cpu, ArrowUpRight } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Arsenal', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Milestones', href: '#milestones' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Determine active section based on scroll position
      const scrollY = window.scrollY + 180;
      for (const item of NAV_ITEMS) {
        const id = item.href.substring(1);
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07090D]/85 backdrop-blur-md border-b border-white/8 py-3.5 shadow-2xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="group flex items-center gap-3 text-left focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-[#111722] border border-white/10 group-hover:border-[#00D9FF]/50 transition-colors">
            <Cpu className="w-5 h-5 text-[#00D9FF] transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#00D9FF] animate-ping" />
            <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#00D9FF]" />
          </div>
          <div>
            <div className="font-space font-bold tracking-wider text-base text-[#F4F7FB] flex items-center gap-1.5">
              <span>GOKUL R</span>
              <span className="text-[10px] text-[#00D9FF] font-mono px-1.5 py-0.5 rounded bg-[#00D9FF]/10 border border-[#00D9FF]/20">
                v2.0
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-mono tracking-widest text-[#8C99AA]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D9FF]" />
              <span>ENGINEERING / INNOVATION</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-[#111722]/80 border border-white/8 backdrop-blur-md">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-mono tracking-wide transition-all duration-200 ${
                  isActive
                    ? 'text-[#07090D] font-semibold bg-[#00D9FF] shadow-[0_0_15px_rgba(0,217,255,0.4)]'
                    : 'text-[#8C99AA] hover:text-[#F4F7FB] hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Header Right Action */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://github.com/rgokulgokul2007-lgtm"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-[#8C99AA] hover:text-[#00D9FF] px-3 py-1.5 rounded-lg border border-white/8 hover:border-[#00D9FF]/30 transition-all"
          >
            <Terminal className="w-3.5 h-3.5 text-[#00D9FF]" />
            <span>github/rgokul</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center p-2 rounded-lg bg-[#111722] border border-white/10 text-[#F4F7FB] hover:text-[#00D9FF] focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-[#07090D]/95 border-b border-white/10 backdrop-blur-xl px-6 py-6 transition-all duration-300">
          <div className="flex flex-col gap-2">
            <div className="text-[11px] font-mono text-[#00D9FF] tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00D9FF] animate-pulse" />
              SYSTEM NAVIGATION
            </div>
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-mono tracking-wider transition-all ${
                    isActive
                      ? 'bg-[#00D9FF]/15 text-[#00D9FF] border border-[#00D9FF]/30 font-medium'
                      : 'text-[#8C99AA] hover:text-[#F4F7FB] hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-white/30">{item.href}</span>
                </a>
              );
            })}
            <div className="pt-4 mt-2 border-t border-white/8">
              <a
                href="https://github.com/rgokulgokul2007-lgtm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#111722] border border-white/10 text-xs font-mono text-[#F4F7FB] hover:border-[#00D9FF]/40"
              >
                <Terminal className="w-4 h-4 text-[#00D9FF]" />
                <span>github.com/rgokulgokul2007-lgtm</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#00D9FF]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
