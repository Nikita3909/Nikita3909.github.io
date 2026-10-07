import React, { useEffect, useState } from 'react';
import { Project } from '../data/portfolioData';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Layers, 
  Cpu, 
  ArrowRight,
  TrendingUp,
  Code2,
  Image as ImageIcon,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { ProjectChartFallback } from './ProjectChartFallback';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (p: Project) => void;
  allProjects: Project[];
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ 
  project, 
  onClose, 
  onSelectProject,
  allProjects 
}) => {
  const [imageError, setImageError] = useState(false);
  const [viewMode, setViewMode] = useState<'image' | 'chart'>('image');

  useEffect(() => {
    setImageError(false);
    setViewMode('image');
  }, [project?.id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (!project) return;
      const currentIndex = allProjects.findIndex(p => p.id === project.id);
      if (e.key === 'ArrowRight' && currentIndex < allProjects.length - 1) {
        onSelectProject(allProjects[currentIndex + 1]);
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        onSelectProject(allProjects[currentIndex - 1]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, project, allProjects, onSelectProject]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex(p => p.id === project.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < allProjects.length - 1;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="px-5 py-4 bg-slate-950/90 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-cyan-400">
              {project.department}
            </span>
            <span className="text-slate-600" aria-hidden="true">·</span>
            <span className="text-xs text-slate-400 font-mono">
              System #{currentIndex + 1} of {allProjects.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Toggle */}
            <div className="flex items-center p-0.5 rounded-lg bg-slate-900 border border-white/10 text-xs">
              <button
                onClick={() => setViewMode('image')}
                className={`px-2.5 py-1 rounded-md flex items-center gap-1.5 transition-colors ${
                  viewMode === 'image' ? 'bg-cyan-500/20 text-cyan-300 font-medium' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Screenshot</span>
              </button>
              <button
                onClick={() => setViewMode('chart')}
                className={`px-2.5 py-1 rounded-md flex items-center gap-1.5 transition-colors ${
                  viewMode === 'chart' ? 'bg-cyan-500/20 text-cyan-300 font-medium' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Live Telemetry</span>
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-850 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="max-h-[80vh] overflow-y-auto">
          {/* Visual Showcase Pane */}
          <div className="relative w-full aspect-[16/9] sm:h-72 bg-slate-950 border-b border-white/10 overflow-hidden">
            {viewMode === 'image' && !imageError ? (
              <img
                src={project.image}
                alt={`${project.title} dashboard UI`}
                referrerPolicy="no-referrer"
                onError={() => setImageError(true)}
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <ProjectChartFallback chartType={project.chartType} title={project.title} />
            )}
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Title & Tech */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
                {project.title}
              </h2>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {project.tech.map((t) => (
                  <span 
                    key={t} 
                    className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-800 text-cyan-300 border border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Problem vs Built vs Result Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-950/70 border border-rose-500/20 space-y-1.5">
                <span className="text-[11px] font-mono text-rose-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" /> Problem
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-cyan-500/20 space-y-1.5">
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5" /> What I Built
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.whatBuilt}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-emerald-500/20 space-y-1.5">
                <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5" /> Result & Impact
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.result}
                </p>
              </div>
            </div>

            {/* Measurable KPIs Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-slate-950/90 border border-white/10">
              {project.metrics.map((m) => (
                <div key={m.label} className="p-2.5 rounded-lg bg-slate-900/60 border border-white/5">
                  <p className="text-[11px] text-slate-400">{m.label}</p>
                  <p className="text-xl font-bold font-mono text-slate-100 mt-0.5">{m.value}</p>
                  {m.trend && (
                    <span className="text-[10px] text-cyan-400 font-mono">{m.trend}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Architecture Highlights */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-mono">
                Key Technical Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Production Deliverables */}
            <div className="p-4 rounded-xl bg-slate-950/50 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div>
                <span className="font-semibold text-slate-200">Production Deliverables:</span>
                <span className="text-slate-400 ml-2">{project.deliverables.join(' · ')}</span>
              </div>
              <span className="text-emerald-400 font-mono font-medium whitespace-nowrap">
                Fully Deployed & Live
              </span>
            </div>

          </div>
        </div>

        {/* Modal Footer with Previous / Next Controls */}
        <div className="px-6 py-4 bg-slate-950/90 border-t border-white/10 flex items-center justify-between text-xs font-mono">
          <button
            onClick={() => hasPrev && onSelectProject(allProjects[currentIndex - 1])}
            disabled={!hasPrev}
            className={`flex items-center gap-1.5 transition-colors ${
              hasPrev ? 'text-slate-300 hover:text-cyan-400' : 'text-slate-600 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous Project</span>
          </button>

          <span className="text-slate-500 hidden sm:inline">
            Press ESC to close · Arrow keys to navigate
          </span>

          <button
            onClick={() => hasNext && onSelectProject(allProjects[currentIndex + 1])}
            disabled={!hasNext}
            className={`flex items-center gap-1.5 transition-colors ${
              hasNext ? 'text-slate-300 hover:text-cyan-400' : 'text-slate-600 cursor-not-allowed'
            }`}
          >
            <span>Next Project</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
