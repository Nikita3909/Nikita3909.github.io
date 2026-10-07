import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  Terminal, 
  Code2, 
  CloudLightning, 
  Search, 
  CheckCircle2, 
  Sparkles,
  Zap
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const { skillsData } = PORTFOLIO_DATA;
  const [skillSearch, setSkillSearch] = useState('');

  const categoryIcons = [
    <Terminal className="w-5 h-5 text-cyan-400" />,
    <Code2 className="w-5 h-5 text-indigo-400" />,
    <CloudLightning className="w-5 h-5 text-emerald-400" />
  ];

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
              <span>06</span>
              <span aria-hidden="true">/</span>
              <span>Technical Competencies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight text-balance">
              Core Skills & Engineering Stack
            </h2>
            <p className="mt-2 text-slate-400 text-sm max-w-xl text-balance">
              Full-spectrum toolkit bridging exploratory data science, modern frontend web apps, and automated zero-maintenance deployment.
            </p>
          </div>

          {/* Quick Skill Filter Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter skill or framework..."
              value={skillSearch}
              onChange={(e) => setSkillSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-900/90 border border-white/10 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
          </div>
        </div>

        {/* 3 Large Categorized Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {skillsData.map((category, idx) => {
            const filteredSkills = category.skills.filter(s => 
              s.name.toLowerCase().includes(skillSearch.toLowerCase())
            );

            return (
              <div
                key={category.title}
                className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-900/90 border border-white/10">
                      {categoryIcons[idx]}
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      {category.skills.length} Capabilities
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-100">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills Chips / List */}
                  <div className="mt-6 space-y-3">
                    {filteredSkills.map((skill) => (
                      <div key={skill.name} className="group/item">
                        <div className="flex items-center justify-between text-xs text-slate-200 mb-1">
                          <span className="font-medium group-hover/item:text-cyan-300 transition-colors">
                            {skill.name}
                          </span>
                          <span className="font-mono text-slate-400 text-[11px]">
                            {skill.level}%
                          </span>
                        </div>
                        {/* Progress Bar */}
                        <div className="w-full h-1.5 rounded-full bg-slate-900 overflow-hidden">
                          <div 
                            className={`h-full rounded-full transition-all duration-500 ${
                              idx === 0 
                                ? 'bg-gradient-to-r from-cyan-500 to-teal-400' 
                                : idx === 1 
                                ? 'bg-gradient-to-r from-indigo-500 to-cyan-400' 
                                : 'bg-gradient-to-r from-emerald-500 to-cyan-400'
                            }`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}

                    {filteredSkills.length === 0 && (
                      <p className="text-xs text-slate-500 py-4 text-center">
                        No matches in this category
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>PRODUCTION TESTED</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> VERIFIED
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
