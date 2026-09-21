import React, { useState, useEffect } from 'react';
import { Terminal, ShieldCheck, Award, Database, ExternalLink, CheckCircle2, Eye, X, ZoomIn } from 'lucide-react';
import { portfolio } from '../data/portfolio';

const iconMap = {
  ShieldCheck: ShieldCheck,
  Award: Award,
  Database: Database,
};

export default function Certifications() {
  const { certifications } = portfolio;
  const [selectedCert, setSelectedCert] = useState(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden border-t border-slate-800/60 bg-[#070b1e]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/40 border border-blue-800/50 text-xs font-mono text-cyan-400 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>06. CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Verified Certifications
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl">
            Formal technical certifications validating core language proficiency, algorithms, and database systems expertise.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, idx) => {
            const IconComponent = iconMap[cert.icon] || Award;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl bg-gradient-to-b from-[#0d1530] to-[#080e24] border border-slate-800 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Certificate Thumbnail Preview if available */}
                {cert.image && (
                  <div
                    onClick={() => setSelectedCert(cert)}
                    className="relative h-36 w-full bg-slate-950/80 overflow-hidden cursor-pointer group/thumb border-b border-slate-800/80"
                  >
                    <img
                      src={cert.image}
                      alt={`${cert.name} certificate`}
                      className="w-full h-full object-cover object-top opacity-85 group-hover/thumb:opacity-100 group-hover/thumb:scale-105 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1530] via-transparent to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/thumb:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/90 text-slate-950 text-xs font-bold shadow-lg">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Preview Certificate</span>
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-cyan-600/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                        <IconComponent className="w-5 h-5" />
                      </div>

                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-mono bg-emerald-950/70 text-emerald-300 border border-emerald-800/60">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Verified</span>
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                      {cert.name}
                    </h3>
                    
                    <p className="mt-1 text-xs font-semibold text-cyan-400/90">
                      {cert.organization}
                    </p>

                    <p className="mt-3 text-xs font-mono text-slate-400">
                      {cert.date}
                    </p>
                  </div>

                  {/* Actions Bar */}
                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2 text-xs font-mono">
                    {cert.image && (
                      <button
                        type="button"
                        onClick={() => setSelectedCert(cert)}
                        className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-cyan-300 border border-blue-500/40 transition-colors font-medium cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Certificate</span>
                      </button>
                    )}

                    {cert.verificationUrl && (
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 text-slate-400 hover:text-cyan-300 transition-colors text-[11px]"
                      >
                        <span>Verify at onwingspan.com</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* High-Resolution Certificate Modal / Lightbox */}
      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedCert.name} Certificate Preview`}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0d142d] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800 bg-slate-900/90">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    {selectedCert.name}
                  </h3>
                  <p className="text-xs text-cyan-400 font-mono">
                    {selectedCert.organization} &bull; {selectedCert.date}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                aria-label="Close certificate preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Certificate Image Body */}
            <div className="p-4 sm:p-6 overflow-y-auto flex items-center justify-center bg-slate-950/60">
              <img
                src={selectedCert.image}
                alt={`${selectedCert.name} full certificate`}
                className="max-h-[65vh] w-auto rounded-lg shadow-xl border border-slate-800 object-contain"
              />
            </div>

            {/* Modal Footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-slate-900/90 border-t border-slate-800 text-xs font-mono">
              <span className="text-slate-400">
                Awarded to: <strong className="text-white">Bittu Kumar</strong>
              </span>

              {selectedCert.verificationUrl && (
                <a
                  href={selectedCert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/30 transition-colors"
                >
                  <span>Verify Authenticity</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
