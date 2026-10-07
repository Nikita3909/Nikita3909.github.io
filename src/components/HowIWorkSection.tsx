import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  Search, 
  Database, 
  TrendingUp, 
  LayoutDashboard, 
  Rocket, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export const HowIWorkSection: React.FC = () => {
  const { workSteps } = PORTFOLIO_DATA;
  const [activeStep, setActiveStep] = useState<number>(0);

  const stepIcons = [
    <Search className="w-5 h-5" />,
    <Database className="w-5 h-5" />,
    <TrendingUp className="w-5 h-5" />,
    <LayoutDashboard className="w-5 h-5" />,
    <Rocket className="w-5 h-5" />
  ];

  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
            <span>04</span>
            <span aria-hidden="true">/</span>
            <span>Methodology & Lifecycle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight text-balance">
            How I Build End-to-End Data Systems
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base text-balance">
            A battle-tested 5-phase engineering lifecycle transforming ambiguous operational bottlenecks into live, zero-touch business applications.
          </p>
        </div>

        {/* 5 Steps Interactive Progression Bar */}
        <div className="relative mb-12">
          {/* Connecting line (Desktop) */}
          <div 
            className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 -translate-y-1/2 z-0 opacity-30" 
            aria-hidden="true" 
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {workSteps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`text-left p-5 rounded-2xl glass-card transition-all duration-300 relative group flex flex-col justify-between ${
                    isActive 
                      ? 'border-cyan-400/80 bg-slate-900/90 shadow-lg shadow-cyan-500/10 scale-105' 
                      : 'hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div 
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isActive
                          ? 'bg-gradient-to-tr from-cyan-400 to-emerald-400 text-slate-950 font-bold shadow-md'
                          : 'bg-slate-900 text-slate-400 group-hover:text-cyan-400 border border-white/10'
                      }`}
                    >
                      {stepIcons[idx]}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-cyan-400 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <div>
                    <h3 className={`text-sm font-bold transition-colors ${isActive ? 'text-cyan-300' : 'text-slate-200'}`}>
                      {step.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                      {step.subtitle}
                    </p>
                  </div>

                  {isActive && (
                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-cyan-400" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Step Deep Dive Card */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-cyan-500/30 bg-slate-900/60 relative overflow-hidden">
          <div 
            className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" 
            aria-hidden="true" 
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 font-mono text-xs font-bold">
                  STEP {workSteps[activeStep].number}
                </span>
                <span className="text-sm font-mono text-slate-400">
                  {workSteps[activeStep].subtitle}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-100">
                {workSteps[activeStep].title}
              </h3>

              <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
                {workSteps[activeStep].description}
              </p>
            </div>

            <div className="lg:col-span-4 p-5 rounded-xl bg-slate-950/70 border border-white/10 space-y-3">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block font-semibold">
                Core Toolset & Techniques:
              </span>
              <div className="space-y-2">
                {workSteps[activeStep].tools.map((tool) => (
                  <div key={tool} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
