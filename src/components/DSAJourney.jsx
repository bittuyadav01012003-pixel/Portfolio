import React, { useState } from 'react';
import { 
  Terminal, 
  LayoutGrid, 
  FileText, 
  ArrowDownUp, 
  Search, 
  Repeat, 
  Link2, 
  Layers, 
  AlignHorizontalJustifyStart, 
  GitBranch, 
  Network, 
  Zap,
  Code,
  Award,
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { portfolio } from '../data/portfolio';

const iconMap = {
  LayoutGrid: LayoutGrid,
  FileText: FileText,
  ArrowDownUp: ArrowDownUp,
  Search: Search,
  Repeat: Repeat,
  Link2: Link2,
  Layers: Layers,
  AlignHorizontalJustifyStart: AlignHorizontalJustifyStart,
  GitBranch: GitBranch,
  Network: Network,
  Zap: Zap,
  Code: Code,
  Award: Award,
  Terminal: Terminal,
};

export default function DSAJourney() {
  const { dsa } = portfolio;
  const [selectedTopic, setSelectedTopic] = useState(dsa.topics[0]);

  return (
    <section id="dsa" className="py-24 relative overflow-hidden border-t border-slate-800/60">
      {/* Background ambient glow */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/40 border border-blue-800/50 text-xs font-mono text-cyan-400 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>03. PROBLEM SOLVING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {dsa.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl">
            {dsa.subtitle}
          </p>
        </div>

        {/* Coding Stats & Profile Bar (Recruiter Verified) */}
        <div className="mb-14 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-slate-900/95 via-[#0d1633] to-slate-900/95 border border-slate-800 shadow-xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-4 space-y-1.5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-cyan-950/70 text-cyan-300 border border-cyan-800/60 text-[11px] font-mono">
                <Award className="w-3 h-3" />
                <span>Verified Competitive Coding</span>
              </div>
              <h3 className="text-lg font-bold text-white">
                CodeChef Profile: <span className="text-cyan-400 font-mono">@{dsa.codingStats.username}</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Active problem solver participating in competitive programming contests and refining algorithmic logic.
              </p>
            </div>

            {/* Verified Stats Badges */}
            <div className="lg:col-span-5 grid grid-cols-3 gap-3 font-mono">
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                <span className="text-[10px] text-slate-400 block mb-1">CodeChef Rating</span>
                <span className="text-sm font-bold text-cyan-300 block">
                  {dsa.codingStats.contestRating}
                </span>
                <span className="text-[10px] text-emerald-400">Highest: 829</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                <span className="text-[10px] text-slate-400 block mb-1">Global Rank</span>
                <span className="text-sm font-bold text-indigo-300 block">
                  {dsa.codingStats.globalRank}
                </span>
                <span className="text-[10px] text-slate-500">Worldwide</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                <span className="text-[10px] text-slate-400 block mb-1">Country Rank</span>
                <span className="text-sm font-bold text-cyan-300 block">
                  {dsa.codingStats.countryRank}
                </span>
                <span className="text-[10px] text-slate-500">India</span>
              </div>
            </div>

            {/* Platform Links / Actions */}
            <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col items-stretch lg:items-end justify-center gap-2">
              <a
                href={dsa.platforms[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-md shadow-blue-600/30 transition-all duration-200"
              >
                <Award className="w-3.5 h-3.5 text-cyan-300" />
                <span>View CodeChef Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <div className="flex items-center justify-center lg:justify-end gap-2 text-[11px] font-mono text-slate-500 pt-1">
                <span>LeetCode &amp; Codeforces: Upcoming</span>
              </div>
            </div>

          </div>
        </div>

        {/* Conceptual Progression Roadmap */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400">
              Interactive Algorithmic Roadmap ({dsa.topics.length} Foundational Topics)
            </h3>
            <span className="text-xs text-slate-400 hidden sm:inline-block">
              Click any topic card to inspect key patterns
            </span>
          </div>

          {/* Topics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {dsa.topics.map((topic, idx) => {
              const IconComponent = iconMap[topic.icon] || LayoutGrid;
              const isSelected = selectedTopic?.id === topic.id;

              return (
                <div
                  key={topic.id}
                  onClick={() => setSelectedTopic(topic)}
                  className={`group relative p-5 rounded-2xl cursor-pointer transition-all duration-200 text-left border ${
                    isSelected
                      ? 'bg-gradient-to-b from-[#0f1b3d] to-[#09112a] border-cyan-500/60 shadow-lg shadow-cyan-500/10 scale-[1.02]'
                      : 'bg-slate-900/60 hover:bg-slate-900 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                          isSelected
                            ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                            : 'bg-slate-800 text-slate-300 group-hover:text-cyan-400 group-hover:bg-slate-700'
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono text-slate-400">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    )}
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {topic.name}
                  </h4>
                  <p className="mt-1.5 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {topic.desc}
                  </p>

                  <div className="mt-3 flex items-center gap-1 text-[11px] font-mono text-cyan-400/80 group-hover:text-cyan-300">
                    <span>Inspect</span>
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selected Topic Details Drawer / Focus Card */}
          {selectedTopic && (
            <div className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-[#0d1633] via-slate-900 to-[#0d1633] border border-cyan-500/30 shadow-xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      {selectedTopic.name} Core Patterns & Paradigms
                    </h4>
                    <p className="text-xs text-slate-400">
                      {selectedTopic.desc}
                    </p>
                  </div>
                </div>
                <div className="text-xs font-mono text-cyan-300 bg-cyan-950/60 px-3 py-1.5 rounded-lg border border-cyan-800/60 self-start md:self-auto">
                  Topic ID: #{selectedTopic.id}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400 mr-2">Key Techniques:</span>
                {selectedTopic.concepts.map((concept, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-md bg-slate-800/90 text-xs font-medium text-slate-200 border border-slate-700/80"
                  >
                    {concept}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
