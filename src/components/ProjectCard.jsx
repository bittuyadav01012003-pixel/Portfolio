import React from 'react';
import { ExternalLink, Calendar, Code, CheckCircle, Terminal, Layers } from 'lucide-react';
import { Github } from './Icons';

export default function ProjectCard({ project, index }) {
  // Generate a distinct developer-themed visual theme based on the index / tech stack
  const visualThemes = [
    {
      gradient: 'from-blue-600/20 via-indigo-600/10 to-transparent',
      accent: 'border-blue-500/40 text-blue-400',
      badge: 'bg-blue-950/60 text-blue-300 border-blue-800/60',
      type: 'AI & Backend Systems'
    },
    {
      gradient: 'from-cyan-600/20 via-teal-600/10 to-transparent',
      accent: 'border-cyan-500/40 text-cyan-400',
      badge: 'bg-cyan-950/60 text-cyan-300 border-cyan-800/60',
      type: 'Algorithms & Navigation'
    },
    {
      gradient: 'from-purple-600/20 via-indigo-600/10 to-transparent',
      accent: 'border-purple-500/40 text-purple-400',
      badge: 'bg-purple-950/60 text-purple-300 border-purple-800/60',
      type: 'Systems & Full Stack'
    }
  ];

  const theme = visualThemes[index % visualThemes.length];

  return (
    <div className="group relative rounded-2xl bg-gradient-to-b from-[#0d142b] to-[#080d21] border border-slate-800 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      
      {/* Top Graphic Header / Developer Visual */}
      <div className={`relative h-44 bg-gradient-to-br ${theme.gradient} border-b border-slate-800/80 p-5 flex flex-col justify-between overflow-hidden`}>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        
        <div className="relative z-10 flex items-center justify-between">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono border ${theme.badge}`}>
            <Terminal className="w-3 h-3" />
            <span>{theme.type}</span>
          </span>

          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>{project.date}</span>
          </div>
        </div>

        {/* Minimal Terminal Mockup in Header */}
        <div className="relative z-10 bg-black/50 border border-slate-800/80 rounded-xl p-3 backdrop-blur-sm group-hover:border-slate-700 transition-colors">
          <div className="flex items-center gap-1.5 mb-1.5">
            <div className="w-2 h-2 rounded-full bg-red-500/80" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
            <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
            <span className="text-[10px] font-mono text-slate-500 ml-2">sys.project_{project.id}.exec</span>
          </div>
          <p className="text-xs font-mono text-slate-200 truncate">
            &gt; build --target {project.title.split(' ')[0].toLowerCase()}
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>
          <p className="mt-1 text-xs font-mono text-cyan-400/90">
            {project.subtitle}
          </p>

          <p className="mt-4 text-sm text-slate-300 leading-relaxed">
            {project.description}
          </p>

          {/* Key Bullet Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mt-4 space-y-2 pt-3 border-t border-slate-800/80">
              {project.highlights.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Tech Badges & Actions */}
        <div className="space-y-5 pt-4 border-t border-slate-800/80">
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900/90 text-slate-300 border border-slate-800"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 hover:border-cyan-500/50 transition-all duration-200"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github className="w-3.5 h-3.5 text-cyan-400" />
                <span>Code Repository</span>
              </a>
            )}

            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-sm transition-all duration-200"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono text-slate-500 bg-slate-950/60 border border-slate-800/60">
                <span>Demo: Coming Soon</span>
              </span>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
