import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code2, Bot, Layers, Compass, CheckCircle2 } from 'lucide-react';

const PILLARS = [
  {
    number: '01',
    category: 'HARDWARE',
    icon: Cpu,
    title: 'Embedded Circuits & Silicon',
    description: 'Understanding circuits, microcontrollers, and embedded systems from low-level register abstractions to physical PCB traces.',
    spec: 'SPICE Simulation • VHDL • IoT Telemetry',
  },
  {
    number: '02',
    category: 'SOFTWARE',
    icon: Code2,
    title: 'Full-Stack Architecture',
    description: 'Building responsive applications, real-time event systems, and scalable digital platforms with modern engineering standards.',
    spec: 'React • Node.js • Mobile Apps • GIS Mapping',
  },
  {
    number: '03',
    category: 'INTELLIGENCE',
    icon: Bot,
    title: 'Edge AI & Local Inference',
    description: 'Exploring local AI execution, offline quantized language models, and deterministic automation without cloud latency.',
    spec: 'Ollama • Qwen2.5-Coder • Prompt Pipelines',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-[#07090D] overflow-hidden">
      {/* Background Coordinate Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-[#00D9FF]/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/8 pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00D9FF] tracking-widest uppercase mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Section // 01</span>
              <span className="text-white/20">—</span>
              <span className="text-[#8C99AA]">ENGINEERING PHILOSOPHY</span>
            </div>
            <h2 className="font-space text-3xl sm:text-4xl md:text-5xl font-bold text-[#F4F7FB] tracking-tight">
              Beyond the Circuit.
            </h2>
          </div>
          <div className="text-xs font-mono text-[#8C99AA] md:text-right">
            <span>FIRST-PRINCIPLES TROUBLESHOOTING</span>
            <div className="text-[#00D9FF]">RATHINAM TECHNICAL CAMPUS // ECE</div>
          </div>
        </div>

        {/* Narrative & Lab Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Main Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 text-[#8C99AA] text-base sm:text-lg leading-relaxed font-sans"
          >
            <p>
              I'm <span className="text-[#F4F7FB] font-medium">Gokul R</span>, an{' '}
              <span className="text-[#00D9FF]">Electronics and Communication Engineering</span> student at{' '}
              <span className="text-[#F4F7FB]">Rathinam Technical Campus</span>.
            </p>
            <p>
              I am a pragmatic engineer interested in connecting hardware, software, and intelligent systems.
              I enjoy building real-world applications, exploring embedded technologies, and solving engineering problems through first-principles troubleshooting.
            </p>
            <div className="p-4 rounded-xl bg-[#111722]/80 border-l-2 border-[#00D9FF] text-[#F4F7FB] text-sm sm:text-base italic font-serif">
              “My approach is simple: understand the system, identify the problem, and build something that works.”
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-3 rounded-lg bg-[#0B0F16] border border-white/6">
                <div className="text-[10px] font-mono text-[#8C99AA]">INSTITUTION</div>
                <div className="text-xs font-mono font-semibold text-[#F4F7FB] mt-0.5">Rathinam Tech</div>
              </div>
              <div className="p-3 rounded-lg bg-[#0B0F16] border border-white/6">
                <div className="text-[10px] font-mono text-[#8C99AA]">MAJOR</div>
                <div className="text-xs font-mono font-semibold text-[#00D9FF] mt-0.5">ECE B.E.</div>
              </div>
              <div className="p-3 rounded-lg bg-[#0B0F16] border border-white/6">
                <div className="text-[10px] font-mono text-[#8C99AA]">MINDSET</div>
                <div className="text-xs font-mono font-semibold text-[#80E5FF] mt-0.5">Pragmatic Builder</div>
              </div>
            </div>
          </motion.div>

          {/* Authentic Lab Workbench Preview Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="relative group rounded-2xl bg-[#111722] p-3 border border-white/10 hover:border-[#00D9FF]/40 transition-all duration-300 shadow-xl overflow-hidden">
              <div className="flex items-center justify-between text-[10px] font-mono text-[#8C99AA] mb-2 px-1">
                <span className="flex items-center gap-1.5 text-[#00D9FF]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D9FF] animate-pulse" />
                  BENCH_TELEMETRY // LAB_STATION
                </span>
                <span>OSCILLOSCOPE & SIGNAL TEST</span>
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-video bg-[#07090D] border border-white/6">
                <img
                  src="/assets/lab.webp"
                  alt="Gokul R Hardware Prototyping Laboratory Workbench"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090D]/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white/90">
                  <span className="text-[#00D9FF] font-semibold">Embedded Systems & IoT Lab</span>
                  <span className="text-xs text-[#8C99AA]">Real-world circuits</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* 3 Compact Information Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="relative p-6 rounded-2xl bg-[#111722]/80 border border-white/8 hover:border-[#00D9FF]/35 transition-all duration-300 group hover:-translate-y-1.5 backdrop-blur-sm"
              >
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#00D9FF]/5 rounded-bl-full pointer-events-none group-hover:bg-[#00D9FF]/10 transition-colors" />

                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#00D9FF] tracking-widest font-semibold">
                    {pillar.number} // {pillar.category}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#151D29] border border-white/10 flex items-center justify-center text-[#00D9FF] group-hover:border-[#00D9FF]/50 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-space font-bold text-lg text-[#F4F7FB] mb-2 group-hover:text-[#00D9FF] transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#8C99AA] leading-relaxed mb-4">
                  {pillar.description}
                </p>

                <div className="pt-3 border-t border-white/6 flex items-center gap-1.5 text-[11px] font-mono text-[#80E5FF]">
                  <CheckCircle2 className="w-3 h-3 text-[#00D9FF] shrink-0" />
                  <span className="truncate">{pillar.spec}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
