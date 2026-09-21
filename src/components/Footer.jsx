import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolio } from '../data/portfolio';

export default function Footer() {
  const { personal } = portfolio;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#030612] py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Rights */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <span className="text-sm font-bold text-white tracking-tight">
              {personal.name}
            </span>
            <p className="text-xs text-slate-500 font-mono">
              &copy; 2026 {personal.name}. All Rights Reserved.
            </p>
          </div>

          {/* Center: Built with tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400">
            <span>Built with</span>
            <span className="text-cyan-400 font-semibold">React</span>
            <span>&amp;</span>
            <span className="text-indigo-400 font-semibold">Tailwind CSS</span>
          </div>

          {/* Socials & Scroll to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-cyan-300 transition-colors"
              aria-label="Bittu Kumar GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-blue-400 transition-colors"
              aria-label="Bittu Kumar LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-cyan-300 transition-colors"
              aria-label="Email Bittu Kumar"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors ml-2"
              title="Scroll to top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
