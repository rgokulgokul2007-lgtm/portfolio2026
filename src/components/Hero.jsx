import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Cpu, Terminal, Sparkles, Orbit, ShieldCheck, ChevronRight } from 'lucide-react';
import ParticleScene from './ParticleScene';

export default function Hero() {
  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSkills = (e) => {
    e.preventDefault();
    const el = document.getElementById('skills');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* 3D Particle & Microchip Canvas Background */}
      <ParticleScene />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Technical Narrative & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* System Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#111722]/90 border border-white/10 text-xs font-mono text-[#8C99AA] backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D9FF] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D9FF]" />
              </span>
              <span className="text-[#00D9FF] font-semibold tracking-wider">HARDWARE / SOFTWARE / AI</span>
              <span className="text-white/20">|</span>
              <span className="text-[11px] text-[#8C99AA]">RATHINAM CAMPUS</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-space text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F4F7FB] leading-[1.08]">
              Engineering{' '}
              <span className="bg-gradient-to-r from-[#00D9FF] via-[#80E5FF] to-white bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,217,255,0.3)]">
                beyond boundaries.
              </span>
            </h1>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-lg text-[#8C99AA] max-w-2xl font-sans leading-relaxed">
              Bridging hardware systems with modern software development and local AI execution. 
              Engineering resilient full-stack platforms, low-latency firmware, and on-device intelligent systems.
            </p>

            {/* Technical Badges Row */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              {[
                { label: 'EMBEDDED SYSTEMS', icon: Cpu },
                { label: 'FULL-STACK DEVELOPMENT', icon: Terminal },
                { label: 'ARTIFICIAL INTELLIGENCE', icon: Sparkles },
              ].map((badge, idx) => {
                const IconComponent = badge.icon;
                return (
                  <motion.div
                    key={badge.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#111722]/80 border border-white/6 text-[11px] font-mono text-[#80E5FF] tracking-wider"
                  >
                    <IconComponent className="w-3.5 h-3.5 text-[#00D9FF]" />
                    <span>{badge.label}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#contact"
                onClick={scrollToContact}
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#00D9FF] text-[#07090D] font-mono font-semibold text-xs tracking-wider transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,217,255,0.45)] hover:bg-[#80E5FF] active:scale-95"
              >
                <span>Initialize Project</span>
                <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="#skills"
                onClick={scrollToSkills}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#111722]/80 border border-white/12 text-[#F4F7FB] font-mono text-xs tracking-wider hover:border-[#00D9FF]/40 hover:bg-[#151D29] hover:text-[#00D9FF] transition-all duration-300 active:scale-95"
              >
                <span>View Arsenal</span>
                <span className="text-[#00D9FF] font-bold">›</span>
              </a>
            </div>

            {/* Live Metrics Footnote */}
            <div className="pt-4 flex items-center gap-6 text-[11px] font-mono text-[#8C99AA]/80 border-t border-white/6">
              <div>
                <span className="text-[#F4F7FB] font-semibold">ZERO-G</span> SIMULATION ACTIVE
              </div>
              <div>•</div>
              <div>
                <span className="text-[#00D9FF] font-semibold">100%</span> PROCEDURAL 3D
              </div>
              <div className="hidden sm:block">•</div>
              <div className="hidden sm:block">
                LOCAL LLM <span className="text-[#80E5FF]">QWEN2.5</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Floating Antigravity Portrait Container */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            
            {/* Outer Orbit Rings for zero-g aerospace aesthetic */}
            <div className="absolute w-[360px] sm:w-[440px] h-[360px] sm:h-[440px] rounded-full border border-[#00D9FF]/15 animate-orbit pointer-events-none">
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#00D9FF] shadow-[0_0_8px_#00D9FF]" />
            </div>
            <div className="absolute w-[420px] sm:w-[500px] h-[420px] sm:h-[500px] rounded-full border border-white/5 animate-orbit-reverse pointer-events-none">
              <span className="absolute bottom-0 right-1/4 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#80E5FF] shadow-[0_0_6px_#80E5FF]" />
            </div>

            {/* Antigravity Bobbing + Rotating Portrait Container */}
            <motion.div
              animate={{
                y: [0, -14, 0],
                rotateZ: [-0.5, 0.7, -0.5],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative z-10 w-full max-w-[340px] sm:max-w-[390px]"
            >
              {/* Soft Cyan Rim Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#00D9FF]/20 via-transparent to-[#80E5FF]/20 blur-xl opacity-75" />

              {/* Elegant Graphite Frame */}
              <div className="relative rounded-2xl bg-[#111722] p-2.5 border border-white/12 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-md">
                
                {/* Frame Header Bar */}
                <div className="flex items-center justify-between px-3 py-2 border-b border-white/8 mb-2 text-[10px] font-mono text-[#8C99AA]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#00D9FF]" />
                    <span className="tracking-wider text-[#F4F7FB]">ENGINEER_ID // GOKUL_R</span>
                  </div>
                  <span className="text-[#00D9FF]">PORTRAIT.WEBP</span>
                </div>

                {/* Portrait Photograph (Authentic Studio Photo of Gokul) */}
                <div className="relative overflow-hidden rounded-xl aspect-[16/10] sm:aspect-[16/11] bg-[#07090D] border border-white/6">
                  <img
                    src="/assets/hero.webp"
                    alt="Gokul R - Hardware & Software Engineer"
                    className="w-full h-full object-cover object-center filter contrast-[1.03] brightness-[0.98]"
                    loading="eager"
                  />
                  {/* Subtle technical corner marks */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#00D9FF]/80" />
                  <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#00D9FF]/80" />
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#00D9FF]/80" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#00D9FF]/80" />
                  
                  {/* Scanline overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00D9FF]/3 to-transparent opacity-40 pointer-events-none" />
                </div>

                {/* Frame Footer status */}
                <div className="mt-2.5 flex items-center justify-between px-2 text-[10px] font-mono text-[#8C99AA]">
                  <span>LATENCY: 14MS</span>
                  <span className="text-[#00D9FF] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00D9FF] animate-ping" />
                    FIRST-PRINCIPLES READY
                  </span>
                </div>
              </div>

              {/* Floating Technical Card 1: System Status */}
              <motion.div
                animate={{
                  y: [0, 8, 0],
                  x: [0, 3, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
                className="absolute -top-6 -left-6 sm:-left-8 px-3.5 py-2 rounded-xl bg-[#151D29]/95 border border-[#00D9FF]/30 shadow-xl backdrop-blur-md"
              >
                <div className="text-[9px] font-mono text-[#8C99AA] uppercase tracking-wider">
                  SYSTEM STATUS
                </div>
                <div className="text-xs font-mono font-bold text-[#00D9FF] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#00D9FF] animate-pulse" />
                  ONLINE
                </div>
              </motion.div>

              {/* Floating Technical Card 2: Domain */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  x: [0, -4, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
                className="absolute -bottom-6 -right-4 sm:-right-6 px-3.5 py-2.5 rounded-xl bg-[#151D29]/95 border border-white/15 shadow-xl backdrop-blur-md"
              >
                <div className="text-[9px] font-mono text-[#8C99AA] uppercase tracking-wider">
                  DOMAIN
                </div>
                <div className="text-xs font-mono font-bold text-[#F4F7FB]">
                  ECE / SOFTWARE / AI
                </div>
              </motion.div>

              {/* Floating Technical Card 3: Focus (Positioned middle-left, clear of subject's face) */}
              <motion.div
                animate={{
                  y: [0, 6, 0],
                  x: [0, -3, 0],
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1.5,
                }}
                className="absolute top-1/2 -left-6 sm:-left-12 -translate-y-1/2 px-3.5 py-2 rounded-xl bg-[#111722]/95 border border-[#80E5FF]/30 shadow-xl backdrop-blur-md z-20"
              >
                <div className="text-[9px] font-mono text-[#8C99AA] uppercase tracking-wider">
                  FOCUS
                </div>
                <div className="text-[11px] font-mono font-semibold text-[#80E5FF] whitespace-nowrap">
                  BUILDING REAL SOLUTIONS
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono text-[#8C99AA] tracking-widest uppercase">DISCOVER</span>
        <ArrowDown className="w-3.5 h-3.5 text-[#00D9FF] animate-bounce" />
      </div>
    </section>
  );
}
