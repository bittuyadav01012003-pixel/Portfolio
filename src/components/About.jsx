import React from 'react';
import { Code2, Layers, GraduationCap, Cpu, Terminal, CheckCircle } from 'lucide-react';
import { portfolio } from '../data/portfolio';

const iconMap = {
  Code2: Code2,
  Layers: Layers,
  GraduationCap: GraduationCap,
  Cpu: Cpu,
};

export default function About() {
  const { about } = portfolio;

  return (
    <section id="about" className="py-24 relative overflow-hidden border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/40 border border-blue-800/50 text-xs font-mono text-cyan-400 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>01. ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Engineering & Problem Solving Mindset
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl">
            {about.headline}
          </p>
        </div>

        {/* Two-column layout: Narrative + Engineering Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Narrative Column */}
          <div className="lg:col-span-6 space-y-6 text-slate-300 leading-relaxed text-base">
            {about.paragraphs.map((p, idx) => (
              <p key={idx} className="border-l-2 border-slate-800 pl-4 py-1 hover:border-cyan-500/60 transition-colors duration-200">
                {p}
              </p>
            ))}

            {/* Core Values Summary */}
            <div className="pt-4 grid grid-cols-2 gap-3 font-mono text-xs text-slate-300">
              <div className="flex items-center gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Clean Architecture</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>DSA Foundations</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Practical Systems</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Fast Learner</span>
              </div>
            </div>
          </div>

          {/* Pillars Cards Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {about.pillars.map((pillar, idx) => {
              const IconComponent = iconMap[pillar.icon] || Code2;
              return (
                <div
                  key={idx}
                  className="group relative p-6 rounded-2xl bg-gradient-to-b from-[#0d142a] to-[#090d1f] border border-slate-800 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:text-cyan-300 group-hover:border-cyan-500/50 transition-all duration-200 mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
