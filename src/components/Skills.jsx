import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Cpu, Bot, Check, Sparkles, Filter, Database } from 'lucide-react';
import { skillCategories } from '../data/skills';

const ICON_MAP = {
  languages: Code,
  'web-apps': Terminal,
  hardware: Cpu,
  ai: Bot,
};

export default function Skills() {
  const [selectedTag, setSelectedTag] = useState('ALL');

  const allTags = ['ALL', 'LANGUAGES', 'WEB & APP', 'HARDWARE', 'AI'];

  const filterCategory = (catId) => {
    if (selectedTag === 'ALL') return true;
    if (selectedTag === 'LANGUAGES' && catId === 'languages') return true;
    if (selectedTag === 'WEB & APP' && catId === 'web-apps') return true;
    if (selectedTag === 'HARDWARE' && catId === 'hardware') return true;
    if (selectedTag === 'AI' && catId === 'ai') return true;
    return false;
  };

  return (
    <section id="skills" className="relative py-28 bg-[#0B0F16] overflow-hidden">
      {/* Ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-[#00D9FF]/4 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-[#80E5FF]/4 blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-dots-pattern opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/8 pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00D9FF] tracking-widest uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Section // 02</span>
              <span className="text-white/20">—</span>
              <span className="text-[#8C99AA]">CAPABILITIES MATRIX</span>
            </div>
            <h2 className="font-space text-3xl sm:text-4xl md:text-5xl font-bold text-[#F4F7FB] tracking-tight">
              Technical Arsenal.
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#111722] border border-white/8">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 rounded-lg text-[11px] font-mono tracking-wider transition-all ${
                  selectedTag === tag
                    ? 'bg-[#00D9FF] text-[#07090D] font-bold shadow-[0_0_12px_rgba(0,217,255,0.4)]'
                    : 'text-[#8C99AA] hover:text-[#F4F7FB] hover:bg-white/5'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {skillCategories.map((category, idx) => {
            const isVisible = filterCategory(category.id);
            if (!isVisible) return null;

            const Icon = ICON_MAP[category.id] || Terminal;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`${category.colSpan} relative rounded-2xl bg-[#111722]/90 border border-white/8 hover:border-[#00D9FF]/40 p-6 sm:p-7 transition-all duration-300 hover:shadow-[0_15px_35px_rgba(0,217,255,0.08)] group backdrop-blur-sm flex flex-col justify-between`}
              >
                {/* Top Bar of Bento Card */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-[#151D29] border border-white/10 flex items-center justify-center text-[#00D9FF] group-hover:border-[#00D9FF]/50 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-[#00D9FF] tracking-wider block">
                          MODULE {category.number} // {category.badge}
                        </span>
                        <h3 className="font-space font-bold text-xl text-[#F4F7FB] group-hover:text-[#00D9FF] transition-colors">
                          {category.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#8C99AA] leading-relaxed mb-6 font-sans">
                    {category.description}
                  </p>
                </div>

                {/* Skills Items Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 border-t border-white/6">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-xl bg-[#0B0F16]/90 border border-white/6 hover:border-[#00D9FF]/30 transition-all group/item hover:bg-[#151D29]"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-semibold text-[#F4F7FB] group-hover/item:text-[#00D9FF] transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-[#8C99AA] group-hover/item:text-[#80E5FF] group-hover/item:bg-[#00D9FF]/10 transition-colors">
                          {skill.tag}
                        </span>
                      </div>
                      <div className="text-[10px] font-mono text-[#8C99AA] mt-1 truncate">
                        {skill.level}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Subtle corner grid decorator */}
                <div className="absolute top-3 right-3 text-[9px] font-mono text-white/15 pointer-events-none">
                  [SYS_{category.number}]
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* First-Principles Troubleshooting Note */}
        <div className="mt-12 p-4 rounded-xl bg-[#111722]/50 border border-white/6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#8C99AA]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00D9FF]" />
            <span>RIGOROUS METHODOLOGY: Understand schematic → Isolate boundary → Verify root cause.</span>
          </div>
          <div className="text-[#80E5FF]">
            ZERO VENDOR LOCK-IN • LOCAL FIRST
          </div>
        </div>

      </div>
    </section>
  );
}
