import React from 'react';
import { Terminal, GraduationCap, Calendar, Award, Building2 } from 'lucide-react';
import { portfolio } from '../data/portfolio';

export default function Education() {
  const { education } = portfolio;

  return (
    <section id="education" className="py-24 relative overflow-hidden border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/40 border border-blue-800/50 text-xs font-mono text-cyan-400 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>05. EDUCATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Academic Background
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl">
            Computer science coursework and university education foundations.
          </p>
        </div>

        {/* Education Timeline / Cards */}
        <div className="max-w-3xl space-y-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#0d142d] to-[#080d21] border border-slate-800 hover:border-blue-500/40 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-cyan-400 font-mono">
                      {edu.branch}
                    </p>
                  </div>
                </div>

                {edu.status && (
                  <span className="self-start sm:self-auto px-3 py-1 rounded-full text-xs font-mono bg-blue-950/80 text-cyan-300 border border-blue-800/60">
                    {edu.status}
                  </span>
                )}
              </div>

              {/* Details & Info fields */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs font-mono">
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <span className="text-slate-500 block mb-1 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                    Institution
                  </span>
                  <span className="text-slate-200 font-semibold block">
                    {edu.institution}
                  </span>
                  {edu.location && (
                    <span className="text-[10px] text-slate-400 mt-0.5 block">
                      {edu.location}
                    </span>
                  )}
                </div>

                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <span className="text-slate-500 block mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    Duration / Period
                  </span>
                  <span className="text-slate-200 font-semibold block">
                    {edu.graduationYear}
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <span className="text-slate-500 block mb-1 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-emerald-400" />
                    Academic Score
                  </span>
                  <span className="text-cyan-300 font-bold block">
                    {edu.cgpa}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] text-slate-500 font-mono">
                Relevant Studies: Data Structures, Analysis of Algorithms, Operating Systems, Database Management Systems, Computer Networks.
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
