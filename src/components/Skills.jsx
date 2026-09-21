import React from 'react';
import { Code, Terminal, Cpu, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { portfolio } from '../data/portfolio';

export default function Skills() {
  const { skills } = portfolio;

  return (
    <section id="skills" className="py-24 relative overflow-hidden border-t border-slate-800/60 bg-[#070b1e]/50">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/40 border border-blue-800/50 text-xs font-mono text-cyan-400 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>02. TECHNICAL SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Core Competencies & Technologies
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl">
            A solid toolkit spanning programming languages, foundational computer science subjects, and developer tools.
          </p>
        </div>

        {/* 4 Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* 1. Programming Languages */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#0d1530] to-[#090e24] border border-slate-800 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Code className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white tracking-wide">
                  Languages
                </h3>
              </div>

              <div className="space-y-2.5">
                {skills.languages.map((lang, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 transition-colors"
                  >
                    <span className="font-semibold text-sm text-slate-200">
                      {lang.name}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {lang.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-400 font-mono">
              Syntax, logic & algorithmic problem solving
            </div>
          </div>

          {/* 2. Core Computer Science */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#0d1530] to-[#090e24] border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white tracking-wide">
                  Core Computer Science
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.core.map((topic, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900/90 border border-slate-800 text-slate-300 hover:border-indigo-500/40 hover:text-white transition-colors"
                  >
                    <CheckCircle2 className="w-3 h-3 text-indigo-400 shrink-0" />
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-400 font-mono">
              Underlying computing foundations
            </div>
          </div>

          {/* 3. Tools & Platforms */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#0d1530] to-[#090e24] border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white tracking-wide">
                  Tools & Platforms
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {skills.tools.map((tool, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center p-3 rounded-lg bg-slate-900/80 border border-slate-800/80 text-xs font-mono font-medium text-slate-200 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-400 font-mono">
              Productive developer environment
            </div>
          </div>

          {/* 4. Soft Skills */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#0d1530] to-[#090e24] border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white tracking-wide">
                  Soft Skills
                </h3>
              </div>

              <div className="space-y-2.5">
                {skills.softSkills.map((soft, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/80 border border-slate-800/80 text-sm font-medium text-slate-200 hover:border-emerald-500/40 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>{soft}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-400 font-mono">
              Team collaboration & problem approach
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
