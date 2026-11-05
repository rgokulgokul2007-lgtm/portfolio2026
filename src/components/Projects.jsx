import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, MapPin, Users, Video, Radio, Layers, ArrowUpRight, Cpu, Play } from 'lucide-react';
import { Github, Youtube } from './BrandIcons';
import { projects } from '../data/projects';

// Custom high-tech SVG Schematics for each project preview
function ProjectVisualSchema({ id }) {
  if (id === 'ralca') {
    return (
      <div className="relative w-full h-48 sm:h-56 bg-[#07090D] rounded-xl overflow-hidden border border-white/8 flex items-center justify-center p-4">
        {/* Dynamic Radar & Coordinate grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="absolute w-44 h-44 rounded-full border border-[#00D9FF]/20 animate-ping opacity-25" />
        <div className="absolute w-32 h-32 rounded-full border border-[#00D9FF]/30" />
        <div className="absolute w-16 h-16 rounded-full border border-[#80E5FF]/40" />

        {/* Nodes and routing lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="25%" y1="65%" x2="50%" y2="45%" stroke="#00D9FF" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="50%" y1="45%" x2="75%" y2="35%" stroke="#00D9FF" strokeWidth="2" />
          <line x1="50%" y1="45%" x2="60%" y2="75%" stroke="#80E5FF" strokeWidth="1.5" strokeDasharray="3 3" />
        </svg>

        {/* Emergency Node Points */}
        <div className="absolute left-[25%] top-[65%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 bg-[#111722] px-2 py-1 rounded border border-white/10 text-[9px] font-mono text-[#8C99AA]">
          <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
          INCIDENT_04
        </div>

        <div className="absolute left-[50%] top-[45%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 bg-[#00D9FF]/15 px-2.5 py-1.5 rounded-lg border border-[#00D9FF]/40 text-[10px] font-mono text-[#00D9FF] shadow-lg">
          <MapPin className="w-3.5 h-3.5 text-[#00D9FF]" />
          AGENCY_DISPATCH_HUB
        </div>

        <div className="absolute left-[75%] top-[35%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 bg-[#111722] px-2 py-1 rounded border border-[#80E5FF]/30 text-[9px] font-mono text-[#80E5FF]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#80E5FF]" />
          RESPONDER_UNIT_B
        </div>

        {/* Bottom Bar Info */}
        <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[9px] font-mono text-[#8C99AA]">
          <span>LEAFLET.JS GIS ENGINE</span>
          <span className="text-[#00D9FF]">FIREBASE REALTIME FEED</span>
        </div>
      </div>
    );
  }

  if (id === 'sahakar-seva') {
    return (
      <div className="relative w-full h-48 sm:h-56 bg-[#07090D] rounded-xl overflow-hidden border border-white/8 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />

        {/* Multi-tier schematic diagram */}
        <div className="relative z-10 w-full max-w-sm space-y-2.5">
          {/* Tier 1 */}
          <div className="flex items-center justify-between p-2 rounded-lg bg-[#111722] border border-[#00D9FF]/30">
            <div className="flex items-center gap-2">
              <span className="px-1.5 py-0.5 rounded bg-[#00D9FF]/20 text-[9px] font-mono text-[#00D9FF] font-semibold">
                TIER 1
              </span>
              <span className="text-xs font-mono text-[#F4F7FB]">Gig Worker Community Pool</span>
            </div>
            <Users className="w-3.5 h-3.5 text-[#00D9FF]" />
          </div>

          {/* Connection Bridge */}
          <div className="flex justify-center">
            <div className="w-0.5 h-3 bg-gradient-to-b from-[#00D9FF] to-[#80E5FF]" />
          </div>

          {/* Tier 2 */}
          <div className="flex items-center justify-between p-2 rounded-lg bg-[#151D29] border border-white/10">
            <div className="flex items-center gap-2">
              <span className="px-1.5 py-0.5 rounded bg-[#80E5FF]/20 text-[9px] font-mono text-[#80E5FF] font-semibold">
                TIER 2
              </span>
              <span className="text-xs font-mono text-[#F4F7FB]">Cooperative Governance & Fair Payouts</span>
            </div>
            <span className="text-[10px] font-mono text-[#80E5FF]">ZERO BROKER</span>
          </div>
        </div>

        <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[9px] font-mono text-[#8C99AA]">
          <span>DECENTRALIZED COOP LOGIC</span>
          <span className="text-[#80E5FF]">BLUE-COLLAR EMPOWERMENT</span>
        </div>
      </div>
    );
  }

  // Time Mudinchu
  return (
    <div className="relative w-full h-48 sm:h-56 bg-[#07090D] rounded-xl overflow-hidden border border-white/8 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-dots-pattern opacity-30" />

      {/* Multimodal Storytelling Audio Waveform & AI prompt visual */}
      <div className="relative z-10 flex flex-col items-center gap-3 w-full">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#111722] border border-red-500/30 text-[10px] font-mono text-red-400">
          <Youtube className="w-3.5 h-3.5 text-red-400" />
          <span>YOUTUBE // AI STORY PIPELINE</span>
        </div>

        {/* Audio / Waveform Visualizer */}
        <div className="flex items-center gap-1.5 h-10">
          {[40, 75, 25, 90, 60, 100, 45, 80, 30, 95, 50, 70, 85, 35, 60].map((h, i) => (
            <div
              key={i}
              className="w-1.5 rounded-full bg-gradient-to-t from-[#00D9FF] to-[#80E5FF]"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>

        <div className="text-[11px] font-mono text-[#8C99AA] text-center">
          Plot Formulation → Local LLM → Script → Multimodal Assets
        </div>
      </div>

      <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[9px] font-mono text-[#8C99AA]">
        <span>@TIMEMUDINCHU</span>
        <span className="text-[#00D9FF]">GENERATIVE STORY ENGINE</span>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 bg-[#07090D] overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-[#00D9FF]/4 blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/8 pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00D9FF] tracking-widest uppercase mb-2">
              <Radio className="w-3.5 h-3.5" />
              <span>Section // 03</span>
              <span className="text-white/20">—</span>
              <span className="text-[#8C99AA]">ENGINEERED SOLUTIONS</span>
            </div>
            <h2 className="font-space text-3xl sm:text-4xl md:text-5xl font-bold text-[#F4F7FB] tracking-tight">
              Selected Engineering Works.
            </h2>
          </div>
          <div className="text-xs font-mono text-[#8C99AA] md:text-right">
            <span>REAL-WORLD DEPLOYMENTS</span>
            <div className="text-[#00D9FF]">OPEN SOURCE & PUBLIC REPOSITORIES</div>
          </div>
        </div>

        {/* Project Cards (Stacked / Floating Cards) */}
        <div className="space-y-12">
          {projects.map((project, idx) => {
            const isGithub = project.linkType === 'github';
            const Icon = isGithub ? Github : Youtube;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className="group relative rounded-3xl bg-[#111722]/80 border border-white/8 hover:border-[#00D9FF]/40 transition-all duration-500 overflow-hidden shadow-2xl backdrop-blur-md"
              >
                {/* Glow bar */}
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#00D9FF]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column: Details & Narrative */}
                  <div className="lg:col-span-7 space-y-5 text-left">
                    
                    {/* Project Top Metadata */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#00D9FF] px-2.5 py-1 rounded bg-[#00D9FF]/10 border border-[#00D9FF]/20">
                        PROJECT // {project.number}
                      </span>
                      <span className="font-mono text-[11px] text-[#8C99AA] tracking-wider uppercase">
                        {project.category}
                      </span>
                      <span className="text-white/20 hidden sm:inline">•</span>
                      <span className="hidden sm:inline font-mono text-[10px] text-[#80E5FF]">
                        {project.blueprint}
                      </span>
                    </div>

                    {/* Project Title & Subtitle */}
                    <div>
                      <h3 className="font-space text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F4F7FB] group-hover:text-[#00D9FF] transition-colors">
                        {project.title}
                      </h3>
                      <p className="font-mono text-xs sm:text-sm text-[#80E5FF] mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-[#8C99AA] font-sans leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Features List */}
                    <div className="space-y-1.5 pt-1">
                      <div className="text-[11px] font-mono text-[#F4F7FB] uppercase tracking-wider font-semibold">
                        Core Architecture Features:
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-[#8C99AA]">
                        {project.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <span className="text-[#00D9FF] mt-0.5">›</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-[#07090D] border border-white/8 text-[11px] font-mono text-[#8C99AA] group-hover:border-[#00D9FF]/25 group-hover:text-[#F4F7FB] transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Link */}
                    <div className="pt-3">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-[#151D29] hover:bg-[#00D9FF] text-[#F4F7FB] hover:text-[#07090D] font-mono text-xs font-semibold tracking-wider border border-white/10 hover:border-[#00D9FF] transition-all duration-300 shadow-md active:scale-95"
                      >
                        <Icon className="w-4 h-4" />
                        <span>{project.linkText}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Visual Schema / Interactive Mock HUD */}
                  <div className="lg:col-span-5">
                    <ProjectVisualSchema id={project.id} />
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
