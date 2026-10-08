import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Sparkles, 
  BarChart2, 
  TrendingUp, 
  Layers, 
  CheckCircle2, 
  Zap,
  ChevronRight
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { InteractiveMockup } from './InteractiveMockup';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { profile } = PORTFOLIO_DATA;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [mockupTab, setMockupTab] = useState<'forecast' | 'scorecard' | 'pulse'>('forecast');

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % profile.rotatingRoles.length);
        setIsFading(false);
      }, 250);
    }, 2800);
    return () => clearInterval(interval);
  }, [profile.rotatingRoles.length]);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 overflow-hidden flex items-center bg-grid-pattern">
      {/* Soft glowing background gradient blobs */}
      <div 
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/3 right-1/4 translate-x-1/3 -translate-y-1/3 w-[30rem] h-[30rem] bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 right-1/3 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Rotating Badge, Subtext, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs font-medium shadow-sm backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>{profile.heroBadge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-slate-100 tracking-tight leading-[1.15] text-balance">
              Hi, I'm Nikita Gurav.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-400">
                I build AI agents, full-stack apps & ML models.
              </span>
            </h1>

            {/* Rotating text pills/tickers */}
            <div className="mt-4 flex items-center gap-2 text-sm sm:text-base font-medium text-slate-300 h-8">
              <span className="text-slate-400 text-xs sm:text-sm">Specializing in:</span>
              <div className="relative inline-block overflow-hidden py-1">
                <span 
                  className={`inline-block font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-300 transition-all duration-300 transform ${
                    isFading ? '-translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
                  }`}
                >
                  {profile.rotatingRoles[currentRoleIndex]}
                </span>
              </div>
              <span className="text-slate-500" aria-hidden="true">·</span>
              <span className="text-xs text-slate-400 hidden sm:inline">8 live demos · 2 ML projects</span>
            </div>

            {/* Subtext */}
            <p className="mt-5 text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl text-balance">
              {profile.heroSubtext}
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={scrollToProjects}
                className="group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 rounded-xl shadow-lg shadow-cyan-500/20 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-200 hover:text-white bg-slate-900/70 hover:bg-slate-800/80 border border-white/10 hover:border-cyan-500/40 rounded-xl transition-all duration-200 backdrop-blur-md"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Quick trust metrics row */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>AI Agents &amp; RAG</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Full-Stack React + Node</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                <span>ML with Proper Validation</span>
              </div>
            </div>

          </div>

          {/* Right Column: Floating Animated Dashboard Mockup */}
          <div className="lg:col-span-5 relative">
            
            {/* Ambient backlight glow */}
            <div 
              className="absolute -inset-2 bg-gradient-to-r from-indigo-500/30 via-cyan-500/30 to-emerald-500/30 rounded-3xl blur-2xl opacity-60" 
              aria-hidden="true" 
            />

            {/* The Main Floating Code Dashboard Container */}
            <div className="relative animate-float rounded-2xl glass-panel shadow-2xl overflow-hidden border border-white/15">
              
              {/* Dashboard top window header */}
              <div className="px-4 py-3 bg-slate-900/90 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 font-medium">
                    dashboard-preview
                  </span>
                </div>

                {/* Switch mock view tabs */}
                <div className="flex items-center gap-1 bg-slate-950/70 p-1 rounded-lg border border-white/5">
                  <button
                    onClick={() => setMockupTab('forecast')}
                    className={`px-2 py-0.5 text-[10px] font-medium rounded transition-colors ${
                      mockupTab === 'forecast' 
                        ? 'bg-cyan-500/20 text-cyan-300 font-semibold' 
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Forecasting
                  </button>
                  <button
                    onClick={() => setMockupTab('scorecard')}
                    className={`px-2 py-0.5 text-[10px] font-medium rounded transition-colors ${
                      mockupTab === 'scorecard' 
                        ? 'bg-cyan-500/20 text-cyan-300 font-semibold' 
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Executive
                  </button>
                  <button
                    onClick={() => setMockupTab('pulse')}
                    className={`px-2 py-0.5 text-[10px] font-medium rounded transition-colors ${
                      mockupTab === 'pulse' 
                        ? 'bg-cyan-500/20 text-cyan-300 font-semibold' 
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Production
                  </button>
                </div>
              </div>

              {/* Render dynamic code-driven visualization */}
              <div className="min-h-[320px] bg-slate-950/70">
                <InteractiveMockup type={mockupTab} />
              </div>

              {/* Bottom status strip */}
              <div className="px-4 py-2.5 bg-slate-950/90 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="font-mono text-slate-300">Illustration · sample numbers</span>
                </div>
                <span className="text-cyan-400 font-mono text-[10px]">Sample data</span>
              </div>

            </div>

            {/* Floating Mini Badge 1 (Top Left Overhang) */}
            <div className="hidden sm:flex absolute -top-4 -left-6 px-3 py-2 rounded-xl bg-slate-900/90 border border-cyan-500/40 shadow-xl backdrop-blur-md items-center gap-2.5 animate-bounce [animation-duration:4s]">
              <div className="w-7 h-7 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 leading-none">Automated Pipeline</p>
                <p className="text-xs font-bold text-slate-100 font-mono mt-0.5">8 Live Demos</p>
              </div>
            </div>

            {/* Floating Mini Badge 2 (Bottom Right Overhang) */}
            <div className="hidden sm:flex absolute -bottom-4 -right-4 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-emerald-500/40 shadow-xl backdrop-blur-md items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 leading-none">Management Visibility</p>
                <p className="text-xs font-bold text-emerald-300 font-mono mt-0.5">Single-Screen View</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
