import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  Code2, 
  Database, 
  Terminal, 
  Cpu, 
  Globe, 
  Server, 
  Workflow, 
  GitBranch, 
  Cloud 
} from 'lucide-react';

export const TechMarquee: React.FC = () => {
  const { marqueeTech } = PORTFOLIO_DATA;

  // Duplicate items for infinite seamless scroll
  const duplicatedTech = [...marqueeTech, ...marqueeTech];

  const getTechIcon = (category: string) => {
    switch (category) {
      case 'Data Science':
      case 'Data Analysis':
        return <Terminal className="w-3.5 h-3.5 text-cyan-400" />;
      case 'Database':
      case 'NoSQL':
        return <Database className="w-3.5 h-3.5 text-indigo-400" />;
      case 'Visualization':
        return <Cpu className="w-3.5 h-3.5 text-emerald-400" />;
      case 'Frontend':
        return <Globe className="w-3.5 h-3.5 text-sky-400" />;
      case 'Backend':
      case 'Backend / AI':
        return <Server className="w-3.5 h-3.5 text-violet-400" />;
      case 'Automation':
      case 'Integration':
        return <Workflow className="w-3.5 h-3.5 text-amber-400" />;
      case 'DevOps':
        return <GitBranch className="w-3.5 h-3.5 text-rose-400" />;
      default:
        return <Cloud className="w-3.5 h-3.5 text-teal-400" />;
    }
  };

  return (
    <section className="py-8 relative overflow-hidden bg-slate-950/60 border-b border-white/10 select-none">
      {/* Left and right fade gradient scrims */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10 pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent z-10 pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="flex items-center">
        <div className="animate-marquee flex items-center gap-4 sm:gap-6 py-2">
          {duplicatedTech.map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-white/10 hover:border-cyan-500/40 transition-all duration-200 cursor-default group shrink-0 shadow-sm"
            >
              <div className="p-1 rounded-md bg-slate-950/60 border border-white/5 group-hover:scale-110 transition-transform">
                {getTechIcon(tech.category)}
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors whitespace-nowrap">
                {tech.name}
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-tight group-hover:text-slate-300 transition-colors">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
