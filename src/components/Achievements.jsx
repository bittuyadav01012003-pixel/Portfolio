import React from 'react';
import { Terminal, Trophy, Sparkles, PlusCircle } from 'lucide-react';
import { portfolio } from '../data/portfolio';

export default function Achievements() {
  const { achievements } = portfolio;
  const hasItems = achievements?.items && achievements.items.length > 0;

  return (
    <section id="achievements" className="py-20 relative overflow-hidden border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/40 border border-blue-800/50 text-xs font-mono text-cyan-400 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>07. ACHIEVEMENTS & MILESTONES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Milestones & Recognitions
          </h2>
        </div>

        {/* Minimal Recruiter-Honest Card or Extensible Items */}
        {hasItems ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.items.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Trophy className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-sm text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900/80 via-[#0d1530]/60 to-slate-900/80 border border-slate-800/80 backdrop-blur-sm max-w-2xl">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-white">
                  Continuous Progress
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {achievements.placeholderText}
                </p>
                <div className="pt-2 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <PlusCircle className="w-3.5 h-3.5 text-cyan-500/70" />
                  <span>Configurable anytime in <code className="text-slate-300">src/data/portfolio.js</code></span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
