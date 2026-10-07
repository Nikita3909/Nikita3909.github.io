import React, { useState, useEffect, useRef } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Layers, Network, Calendar, Wrench } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const { stats } = PORTFOLIO_DATA;
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const statIcons = [
    <Layers className="w-5 h-5 text-cyan-400" />,
    <Network className="w-5 h-5 text-indigo-400" />,
    <Calendar className="w-5 h-5 text-emerald-400" />,
    <Wrench className="w-5 h-5 text-teal-300" />
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1800;
          const startTimestamp = performance.now();

          const step = (timestamp: number) => {
            const elapsed = timestamp - startTimestamp;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const ease = 1 - Math.pow(1 - progress, 3);

            const nextCounts = stats.map((item) => Math.floor(ease * item.value));
            setCounts(nextCounts);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCounts(stats.map((item) => item.value));
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, stats]);

  return (
    <section ref={sectionRef} className="py-14 relative z-10 border-y border-white/10 dark:border-white/10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item, index) => (
            <div
              key={item.label}
              className="glass-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-xl bg-slate-900/80 border border-white/10 group-hover:scale-110 transition-transform">
                  {statIcons[index]}
                </div>
                <span className="text-[11px] font-mono text-slate-400">0{index + 1}</span>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-100 font-mono tracking-tight tabular-nums flex items-baseline">
                  <span>{counts[index]}</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 ml-0.5">
                    {item.suffix}
                  </span>
                </div>
                <h2 className="text-sm sm:text-base font-semibold text-slate-200 mt-2">
                  {item.label}
                </h2>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
