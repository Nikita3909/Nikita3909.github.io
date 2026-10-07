import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { 
  ArrowUpRight, 
  Layers, 
  ExternalLink, 
  Maximize2, 
  Sparkles, 
  AlertCircle,
  Cpu,
  TrendingUp,
  Image as ImageIcon
} from 'lucide-react';
import { ProjectChartFallback } from './ProjectChartFallback';

interface ProjectsSectionProps {
  onOpenProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenProject }) => {
  const { featuredProjects } = PORTFOLIO_DATA;
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const filterTabs = ['All', 'Data Science', 'Management', 'Sales', 'Production', 'Operations'];

  const filteredProjects = activeFilter === 'All'
    ? featuredProjects
    : featuredProjects.filter((p) => p.category === activeFilter);

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
              <span>02</span>
              <span aria-hidden="true">/</span>
              <span>Selected Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight text-balance">
              Featured Systems & Deployed Dashboards
            </h2>
            <p className="mt-2 text-slate-400 text-sm max-w-xl text-balance">
              Flagship work first: an AI procurement agent, live management dashboards, two ML projects with open code, a full CRM and AI automations.
            </p>
          </div>

          {/* Interactive Filter Tabs / Segmented Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-slate-900/80 border border-white/10 backdrop-blur-md">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                  activeFilter === tab
                    ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {tab}
                {tab === 'All' ? ` (${featuredProjects.length})` : ''}
              </button>
            ))}
          </div>
        </div>

        {/* Bento-Style Grid of Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => {
            const isLarge = idx === 0 || idx === 1; // Top two featured cards give Bento visual weight
            const hasValidImage = project.image && !failedImages[project.id];

            return (
              <div
                key={project.id}
                onClick={() => onOpenProject(project)}
                className={`glass-card rounded-2xl overflow-hidden cursor-pointer group flex flex-col justify-between border border-white/10 hover:border-cyan-500/50 hover:-translate-y-1 transition-all duration-300 relative ${
                  isLarge && filteredProjects.length > 2 ? 'lg:col-span-1' : ''
                }`}
              >
                {/* Screenshot / Interactive Chart Area */}
                <div className="relative w-full h-48 sm:h-52 bg-slate-950 overflow-hidden border-b border-white/10">
                  {hasValidImage ? (
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      referrerPolicy="no-referrer"
                      onError={() => handleImageError(project.id)}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <ProjectChartFallback chartType={project.chartType} title={project.title} />
                  )}

                  {/* Dark gradient overlay at bottom for smooth contrast transition */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Department unboxed tag top left */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-900/90 border border-white/10 backdrop-blur-md text-[11px] font-mono font-medium text-cyan-300">
                    {project.department}
                  </div>

                  {/* Expand icon top right */}
                  <div className="absolute top-3 right-3 p-1.5 rounded-md bg-slate-900/90 border border-white/10 text-slate-400 group-hover:text-cyan-300 group-hover:border-cyan-500/40 transition-colors">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </h3>

                    {/* Problem · Built · Result editorial blocks */}
                    <div className="mt-3 space-y-2 text-xs">
                      <div>
                        <span className="font-mono text-rose-400 font-semibold uppercase tracking-wider text-[10px]">
                          Problem:
                        </span>
                        <p className="text-slate-300 mt-0.5 line-clamp-2 leading-relaxed">
                          {project.problem}
                        </p>
                      </div>

                      <div>
                        <span className="font-mono text-cyan-400 font-semibold uppercase tracking-wider text-[10px]">
                          Built:
                        </span>
                        <p className="text-slate-300 mt-0.5 line-clamp-2 leading-relaxed">
                          {project.whatBuilt}
                        </p>
                      </div>

                      <div>
                        <span className="font-mono text-emerald-400 font-semibold uppercase tracking-wider text-[10px]">
                          Result:
                        </span>
                        <p className="text-emerald-300/90 font-medium mt-0.5 line-clamp-2 leading-relaxed">
                          {project.result}
                        </p>
                      </div>
                    </div>
                  </div>

                  {(project.demoUrl || project.codeUrl) && (
                    <div className="flex gap-2">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 text-xs font-bold hover:opacity-90 transition-opacity"
                        >
                          ▶ Open Live Demo
                        </a>
                      )}
                      {project.codeUrl && (
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-cyan-400/60 text-cyan-300 text-xs font-bold hover:bg-cyan-400/10 transition-colors"
                        >
                          {'</>'} View Code
                        </a>
                      )}
                    </div>
                  )}

                  {/* Tech Chips */}
                  <div className="pt-3 border-t border-white/10 flex flex-wrap items-center gap-1.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/80 text-slate-400 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
