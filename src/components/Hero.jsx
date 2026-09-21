import React from 'react';
import { Mail, ArrowRight, Sparkles, Terminal, Code2, CheckCircle2, Download } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolio } from '../data/portfolio';

export default function Hero() {
  const { personal } = portfolio;

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-cyan-500/10 blur-[130px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/70 text-xs text-slate-300 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-[11px] text-cyan-300 font-medium">
                {personal.status}
              </span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">{personal.name}</span>
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-slate-300 font-mono tracking-wide">
                {personal.role}
              </p>
            </div>

            {/* Core Recruiter Pitch */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {personal.bio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={personal.resumeUrl}
                download="Bittu_Kumar_Resume.png"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-cyan-950/70 hover:bg-cyan-900/60 text-cyan-300 hover:text-cyan-200 border border-cyan-700/60 hover:border-cyan-500 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-md shadow-cyan-950/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                title="Download Bittu Kumar's Resume"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-slate-600 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <span>Let's Connect</span>
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </button>
            </div>

            {/* Social & Contact Direct Links */}
            <div className="flex items-center gap-3 pt-3">
              <span className="text-xs text-slate-400 font-mono uppercase tracking-wider mr-1">Connect:</span>
              
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 hover:-translate-y-0.5 transition-all duration-200"
                aria-label="Bittu Kumar GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 hover:-translate-y-0.5 transition-all duration-200"
                aria-label="Bittu Kumar LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 hover:-translate-y-0.5 transition-all duration-200"
                aria-label="Send Email to Bittu Kumar"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Sleek Developer Terminal / Code Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0a0f24] border border-slate-800/90 shadow-2xl p-5 sm:p-6 backdrop-blur-xl">
              
              {/* Terminal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>bittu@workstation:~</span>
                </div>
                <div className="w-8" />
              </div>

              {/* Terminal Content */}
              <div className="font-mono text-xs sm:text-sm space-y-3.5">
                <div>
                  <span className="text-cyan-400">$ </span>
                  <span className="text-slate-200">whoami</span>
                  <div className="text-slate-400 pl-3 mt-1">
                    Bittu Kumar — Aspiring Software Developer & Problem Solver
                  </div>
                </div>

                <div>
                  <span className="text-cyan-400">$ </span>
                  <span className="text-slate-200">cat developer_focus.json</span>
                  <div className="bg-black/40 rounded-lg p-3 mt-1 text-slate-300 border border-slate-800/60 leading-relaxed overflow-x-auto">
                    <pre className="text-[11px] sm:text-xs text-slate-300">
{`{
  "focus": [
    "Data Structures & Algorithms",
    "Systematic Problem Solving",
    "Modern Web & Backend Systems",
    "Continuous Improvement"
  ],
  "languages": ["C++", "Python", "JavaScript", "SQL"],
  "mindset": "building practical, reliable software"
}`}
                    </pre>
                  </div>
                </div>

                {/* Developer Activity Indicators */}
                <div className="pt-2 space-y-2 border-t border-slate-800/60 text-xs">
                  <div className="flex items-center gap-2 text-cyan-300">
                    <span className="text-cyan-400">&gt;</span>
                    <span>solving problems consistently</span>
                  </div>
                  <div className="flex items-center gap-2 text-indigo-300">
                    <span className="text-indigo-400">&gt;</span>
                    <span>building practical projects</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-300">
                    <span className="text-emerald-400">&gt;</span>
                    <span>learning & refining core concepts</span>
                  </div>
                </div>

              </div>

              {/* Corner Ambient Sparkle */}
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
