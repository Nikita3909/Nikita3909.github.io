import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, CheckCircle2, ChevronRight, Award } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const { experiences } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-24 relative z-10 border-t border-white/10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
            <span>05</span>
            <span aria-hidden="true">/</span>
            <span>Career & Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight text-balance">
            Professional Experience Timeline
          </h2>
          <p className="mt-2 text-slate-400 text-sm max-w-xl text-balance">
            From data analyst internships to building AI agents, full-stack apps and ML models that teams use every day.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={exp.role} className="relative group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:scale-125 transition-transform">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 m-auto mt-0.5" />
              </div>

              {/* Experience Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 group-hover:border-cyan-500/40 transition-all duration-300 space-y-5">
                
                {/* Period & Department Tag */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="font-semibold">{exp.period}</span>
                    <span className="text-slate-600" aria-hidden="true">·</span>
                    <span className="text-slate-400">{exp.department}</span>
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-900 border border-white/10 text-slate-300">
                    {exp.organization}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                    {exp.summary}
                  </p>
                </div>

                {/* Accomplishments Bullets */}
                <div className="space-y-2.5">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block font-semibold">
                    Key Deliverables & Business Impact:
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {exp.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Tools Used */}
                <div className="pt-3 border-t border-white/10 flex flex-wrap items-center gap-1.5">
                  <span className="text-xs text-slate-400 font-mono mr-1">Technologies:</span>
                  {exp.keyTools.map((tool) => (
                    <span
                      key={tool}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-cyan-300 border border-white/5"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
