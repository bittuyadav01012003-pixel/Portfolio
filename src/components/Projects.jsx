import React from 'react';
import { Terminal, FolderGit2 } from 'lucide-react';
import { portfolio } from '../data/portfolio';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const { projects } = portfolio;

  return (
    <section id="projects" className="py-24 relative overflow-hidden border-t border-slate-800/60 bg-[#070b1e]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/40 border border-blue-800/50 text-xs font-mono text-cyan-400 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>04. FEATURED PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Practical Software Engineering
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl">
            Real systems and algorithmic platforms designed with modern languages, modular architectures, and clean code.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
