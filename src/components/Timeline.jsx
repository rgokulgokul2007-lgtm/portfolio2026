import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, BookmarkCheck, Atom, Cpu, Trophy, BookOpen, Sparkles } from 'lucide-react';
import { milestones } from '../data/milestones';

const ICON_MAP = {
  'ibm-qiskit': Atom,
  'codealpha-iot': Cpu,
  'hackathon-neuramorphix': Trophy,
  'hackathon-global-innovation': Trophy,
  'nptel-python': BookOpen,
  'nptel-iot': Cpu,
};

export default function Timeline() {
  return (
    <section id="milestones" className="relative py-28 bg-[#0B0F16] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] rounded-full bg-[#00D9FF]/4 blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-dots-pattern opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 border-b border-white/8 pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00D9FF] tracking-widest uppercase mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>Section // 04</span>
              <span className="text-white/20">—</span>
              <span className="text-[#8C99AA]">RECOGNITION & TRACK RECORD</span>
            </div>
            <h2 className="font-space text-3xl sm:text-4xl md:text-5xl font-bold text-[#F4F7FB] tracking-tight">
              Milestones & Recognition.
            </h2>
          </div>
          <div className="text-xs font-mono text-[#8C99AA] md:text-right">
            <span>CHRONOLOGICAL VERIFICATION</span>
            <div className="text-[#00D9FF]">QUANTUM • IOT • HACKATHONS • NPTEL</div>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Glowing Cyan Center Line (Left-aligned on mobile, centered on md+) */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#00D9FF] via-[#00D9FF]/40 to-transparent shadow-[0_0_12px_rgba(0,217,255,0.4)]" />

          <div className="space-y-12">
            {milestones.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const Icon = ICON_MAP[item.id] || BookmarkCheck;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Marker Node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-4 w-8 h-8 rounded-full bg-[#111722] border-2 border-[#00D9FF] flex items-center justify-center z-20 shadow-[0_0_15px_rgba(0,217,255,0.6)]">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#00D9FF] animate-pulse" />
                  </div>

                  {/* Empty Spacer on opposite side for desktop symmetry */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Milestone Content Card */}
                  <div
                    className={`pl-14 md:pl-0 w-full md:w-1/2 ${
                      isEven ? 'md:pr-12' : 'md:pl-12'
                    }`}
                  >
                    <div className="group relative rounded-2xl bg-[#111722]/90 border border-white/8 hover:border-[#00D9FF]/40 p-6 transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,217,255,0.08)] backdrop-blur-sm">
                      
                      {/* Card Header */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#00D9FF]" />
                          <span className="font-mono text-[11px] font-bold text-[#00D9FF] tracking-wider uppercase">
                            {item.period}
                          </span>
                        </div>
                        <span className="font-mono text-[10px] text-[#8C99AA] px-2 py-0.5 rounded bg-white/5 uppercase">
                          {item.category}
                        </span>
                      </div>

                      {/* Title & Role */}
                      <div className="flex items-start gap-3 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-[#151D29] border border-white/8 flex items-center justify-center text-[#80E5FF] shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="font-space font-bold text-lg text-[#F4F7FB] group-hover:text-[#00D9FF] transition-colors">
                            {item.title}
                          </h3>
                          <div className="font-mono text-xs text-[#80E5FF] font-medium">
                            {item.role}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#8C99AA] font-sans leading-relaxed mt-3">
                        {item.description}
                      </p>

                      {/* Tag */}
                      <div className="mt-4 pt-3 border-t border-white/6 flex items-center justify-between text-[11px] font-mono">
                        <span className="text-[#8C99AA]">TAGGED:</span>
                        <span className="text-[#00D9FF] px-2 py-0.5 rounded bg-[#00D9FF]/10 border border-[#00D9FF]/20">
                          {item.tag}
                        </span>
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
