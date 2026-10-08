import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  Building2, 
  MapPin, 
  Clock, 
  Compass, 
  Layers, 
  Briefcase, 
  Sparkles, 
  CheckCircle,
  ExternalLink,
  Code
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;

  const quickFacts = [
    { label: 'Role', value: profile.role, icon: <Briefcase className="w-4 h-4 text-cyan-400" /> },
    { label: 'Department', value: profile.department, icon: <Sparkles className="w-4 h-4 text-indigo-400" /> },
    { label: 'Education', value: profile.education, icon: <Sparkles className="w-4 h-4 text-cyan-300" /> },
    { label: 'Experience', value: '1.5+ years + 2 internships', icon: <Clock className="w-4 h-4 text-emerald-400" /> },
    { label: 'Focus', value: profile.focus, icon: <Compass className="w-4 h-4 text-teal-300" /> },
    { label: 'Current domain', value: profile.industry, icon: <Building2 className="w-4 h-4 text-amber-400" /> },
    { label: 'Location', value: profile.location, icon: <MapPin className="w-4 h-4 text-rose-400" /> }
  ];

  const pillarCards = [
    {
      title: 'End-to-End Ownership',
      desc: 'Requirements, front end, back end, data, AI and deployment — I build and support the whole thing.'
    },
    {
      title: 'Shipped to Real Users',
      desc: 'Everything here is used daily by sales, finance, production and management teams — not tutorial projects.'
    },
    {
      title: 'Automation Mindset',
      desc: 'Replacing repetitive manual work with scheduled jobs, APIs, webhooks and AI agents.'
    }
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
            <span>01</span>
            <span aria-hidden="true">/</span>
            <span>Background & Domain Focus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight text-balance">
            From data to decisions — with ML and AI.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story Text (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-5 border border-white/10">
              <p className="text-lg sm:text-xl font-medium text-slate-100 leading-relaxed text-balance">
                {profile.bio}
              </p>

              <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {pillarCards.map((pillar) => (
                  <div key={pillar.title} className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-1.5">
                    <h3 className="text-sm font-semibold text-cyan-300">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Department Coverage Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-950/60 via-slate-900/80 to-slate-950/90 border border-indigo-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-mono text-indigo-300">SYSTEM ARCHITECTURE SCOPE</p>
                <p className="text-sm font-semibold text-slate-200 mt-0.5">
                  6 Core Divisions: Sales · Production · Purchase · Order-to-Delivery · Stock · Admin
                </p>
              </div>
              <a 
                href="#projects" 
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 font-mono whitespace-nowrap"
              >
                <span>View All 36 Systems</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Side Info Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 relative overflow-hidden">
              <div 
                className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" 
                aria-hidden="true" 
              />

              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <h3 className="text-base font-bold text-slate-100">
                    {profile.name}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mt-0.5">
                    Professional Profile Card
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 p-[1.5px] flex items-center justify-center">
                  <span className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-xs font-black text-cyan-300">
                    {profile.initials}
                  </span>
                </div>
              </div>

              {/* Specification List */}
              <div className="divide-y divide-white/5 my-2">
                {quickFacts.map((fact) => (
                  <div key={fact.label} className="py-3 flex items-center justify-between text-xs sm:text-sm">
                    <span className="flex items-center gap-2.5 text-slate-400 font-medium">
                      {fact.icon}
                      <span>{fact.label}</span>
                    </span>
                    <span className="font-semibold text-slate-200 text-right">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Quick links to profiles */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3 text-xs font-mono">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 text-center transition-all flex items-center justify-center gap-1.5"
                >
                  <Code className="w-3.5 h-3.5" />
                  <span>GitHub Profile</span>
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex-1 py-2 px-3 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-center transition-all flex items-center justify-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
