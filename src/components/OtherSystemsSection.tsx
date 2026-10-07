import React, { useState } from 'react';
import { PORTFOLIO_DATA, OtherSystem } from '../data/portfolioData';
import { 
  Search, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  PackageCheck,
  Coins,
  Factory,
  FolderKanban
} from 'lucide-react';

export const OtherSystemsSection: React.FC = () => {
  const { otherSystems } = PORTFOLIO_DATA;
  const [selectedGroup, setSelectedGroup] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSystemModal, setActiveSystemModal] = useState<OtherSystem | null>(null);

  const groups = ['All', 'Stock & Purchase', 'Sales & Finance', 'Production', 'Operations'];

  const filteredSystems = otherSystems.filter((sys) => {
    const matchesGroup = selectedGroup === 'All' || sys.group === selectedGroup;
    const matchesSearch = 
      sys.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sys.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sys.impact.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sys.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesGroup && matchesSearch;
  });

  const getGroupIcon = (group: string) => {
    switch (group) {
      case 'Stock & Purchase':
        return <PackageCheck className="w-4 h-4 text-cyan-400" />;
      case 'Sales & Finance':
        return <Coins className="w-4 h-4 text-emerald-400" />;
      case 'Production':
        return <Factory className="w-4 h-4 text-indigo-400" />;
      default:
        return <FolderKanban className="w-4 h-4 text-teal-300" />;
    }
  };

  return (
    <section className="py-20 relative z-10 border-t border-white/10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
              <span>03</span>
              <span aria-hidden="true">/</span>
              <span>Full Portfolio Scope</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight text-balance">
              {otherSystems.length} More Systems I Built
            </h2>
            <p className="mt-2 text-slate-400 text-sm max-w-xl text-balance">
              Complementing the 10 flagship solutions: specialized operational tools, financial reconciliations, and factory automation pipelines across 6 departments.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search systems, tech, or impact..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-900/90 border border-white/10 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
          </div>
        </div>

        {/* Group Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {groups.map((group) => (
            <button
              key={group}
              onClick={() => setSelectedGroup(group)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
                selectedGroup === group
                  ? 'bg-slate-800 text-cyan-300 border border-cyan-500/40 font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60 border border-transparent'
              }`}
            >
              {group !== 'All' && getGroupIcon(group)}
              <span>{group}</span>
              <span className="text-[10px] font-mono text-slate-500">
                ({group === 'All' ? otherSystems.length : otherSystems.filter(s => s.group === group).length})
              </span>
            </button>
          ))}
        </div>

        {/* Compact 3-Column List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSystems.map((sys) => (
            <div
              key={sys.id}
              onClick={() => setActiveSystemModal(sys)}
              className="glass-card rounded-xl p-4 sm:p-5 flex flex-col justify-between border border-white/10 hover:border-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-400">
                    {getGroupIcon(sys.group)}
                    <span>{sys.group}</span>
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">LIVE</span>
                </div>

                <h3 className="text-sm sm:text-base font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
                  {sys.title}
                </h3>

                <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                  {sys.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10">
                <div className="flex items-center gap-1.5 text-emerald-400 text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate text-[11px] font-medium">{sys.impact}</span>
                </div>

                <div className="flex flex-wrap gap-1 mt-2.5">
                  {sys.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {filteredSystems.length === 0 && (
          <div className="py-12 text-center text-slate-400 text-sm">
            No systems found matching &quot;{searchQuery}&quot;. Try clearing the search query or changing filters.
          </div>
        )}

      </div>

      {/* Mini Details Dialog if clicked */}
      {activeSystemModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
          onClick={() => setActiveSystemModal(null)}
        >
          <div 
            className="w-full max-w-lg bg-slate-900 border border-white/15 rounded-2xl p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                {getGroupIcon(activeSystemModal.group)}
                {activeSystemModal.group}
              </span>
              <button
                onClick={() => setActiveSystemModal(null)}
                className="text-slate-400 hover:text-white text-xs font-mono"
              >
                ✕ Close
              </button>
            </div>

            <h3 className="text-lg font-bold text-slate-100">
              {activeSystemModal.title}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              {activeSystemModal.description}
            </p>

            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300">
              <span className="font-semibold block font-mono text-[10px] uppercase text-emerald-400 mb-0.5">
                Operational Outcome:
              </span>
              {activeSystemModal.impact}
            </div>

            <div className="pt-2">
              <span className="text-xs text-slate-400 font-mono block mb-1.5">Technologies Used:</span>
              <div className="flex flex-wrap gap-1.5">
                {activeSystemModal.tech.map((t) => (
                  <span key={t} className="px-2 py-1 text-xs font-mono rounded bg-slate-800 text-cyan-300 border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
