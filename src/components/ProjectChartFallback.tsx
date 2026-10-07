import React from 'react';
import { 
  TrendingUp, 
  Activity, 
  CheckCircle2, 
  AlertTriangle, 
  Layers, 
  Clock, 
  ShieldCheck, 
  FileCheck, 
  Users, 
  BarChart3, 
  Cpu, 
  ArrowRight
} from 'lucide-react';

interface ProjectChartFallbackProps {
  chartType: string;
  title: string;
}

export const ProjectChartFallback: React.FC<ProjectChartFallbackProps> = ({ chartType, title }) => {
  switch (chartType) {
    case 'reconcile':
      return (
        <div className="w-full h-full p-4 flex flex-col justify-between bg-slate-900/90 text-xs font-mono">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <span className="text-slate-300 font-semibold flex items-center gap-1.5">
              <FileCheck className="w-3.5 h-3.5 text-cyan-400" /> Tally vs Dispatch Diff Engine
            </span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
              SAMPLE DATA
            </span>
          </div>
          <div className="space-y-1.5 my-2">
            <div className="flex items-center justify-between p-1.5 rounded bg-slate-950/60 border border-white/5 text-[11px]">
              <span className="text-slate-400">Inv #TL-8492 · Raw Polymer</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Qty & Rate Matched
              </span>
            </div>
            <div className="flex items-center justify-between p-1.5 rounded bg-amber-500/10 border border-amber-500/30 text-[11px]">
              <span className="text-amber-200">Inv #TL-8501 · Masterbatch Blue</span>
              <span className="text-amber-300 flex items-center gap-1 font-semibold">
                <AlertTriangle className="w-3 h-3" /> Qty Var: +25 Kg
              </span>
            </div>
            <div className="flex items-center justify-between p-1.5 rounded bg-slate-950/60 border border-white/5 text-[11px]">
              <span className="text-slate-400">Inv #TL-8515 · High-Density Film</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Rate Matched
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center text-[10px] text-slate-400 pt-1 border-t border-white/10">
            <span>Automated Daily Reconciliation</span>
            <span className="text-cyan-400">Audit Trail: Verified</span>
          </div>
        </div>
      );

    case 'capacity':
      return (
        <div className="w-full h-full p-4 flex flex-col justify-between bg-slate-900/90 text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <span className="font-semibold text-slate-200 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-indigo-400" /> 12-Step Capacity Assessment
            </span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono">
              28 LINES
            </span>
          </div>
          <div className="space-y-2 my-2">
            {[
              { name: 'Rated Capacity', val: '100%', fill: 'w-full bg-slate-700' },
              { name: 'Effective Capacity', val: '86.4%', fill: 'w-[86%] bg-indigo-500' },
              { name: 'Actual Output', val: '82.1%', fill: 'w-[82%] bg-gradient-to-r from-indigo-500 to-cyan-400' }
            ].map((bar) => (
              <div key={bar.name} className="space-y-1">
                <div className="flex justify-between text-[10px] text-slate-300">
                  <span>{bar.name}</span>
                  <span className="font-mono text-cyan-300">{bar.val}</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${bar.fill}`} />
                </div>
              </div>
            ))}
          </div>
          <div className="p-1.5 rounded bg-slate-950/60 border border-white/5 flex items-center justify-between text-[10px]">
            <span className="text-slate-400">Primary Bottleneck:</span>
            <span className="text-amber-400 font-semibold font-mono">Cooling Bay Set-up (#Line 4)</span>
          </div>
        </div>
      );

    case 'sales':
      return (
        <div className="w-full h-full p-4 flex flex-col justify-between bg-slate-900/90 text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <span className="font-semibold text-slate-200 flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" /> Sales Rep MIS & Gross Margin
            </span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
              SAMPLE DATA
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 my-2 text-center">
            <div className="p-2 rounded bg-slate-950/60 border border-white/5">
              <p className="text-[10px] text-slate-400">Pipeline Total</p>
              <p className="text-sm font-bold text-slate-100 font-mono">₹4.8 Cr</p>
            </div>
            <div className="p-2 rounded bg-slate-950/60 border border-white/5">
              <p className="text-[10px] text-slate-400">Avg Margin</p>
              <p className="text-sm font-bold text-emerald-400 font-mono">24.2%</p>
            </div>
            <div className="p-2 rounded bg-slate-950/60 border border-white/5">
              <p className="text-[10px] text-slate-400">Closed MTD</p>
              <p className="text-sm font-bold text-cyan-400 font-mono">32 Deals</p>
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-white/10 pt-1.5">
            <span>Rep Leaderboard (sample)</span>
            <span className="text-emerald-400 font-mono">Target Pacing: 104%</span>
          </div>
        </div>
      );

    case 'crm':
      return (
        <div className="w-full h-full p-4 flex flex-col justify-between bg-slate-900/90 text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <span className="font-semibold text-slate-200 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-cyan-400" /> Lead Cadence & Account Revive
            </span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono">
              SAMPLE DATA
            </span>
          </div>
          <div className="grid grid-cols-4 gap-1.5 my-2">
            {[
              { stage: 'Inbound', count: '48', color: 'border-slate-700 text-slate-300' },
              { stage: 'Follow-up 1', count: '24', color: 'border-cyan-500/30 text-cyan-300' },
              { stage: 'Follow-up 2', count: '14', color: 'border-indigo-500/30 text-indigo-300' },
              { stage: 'Won / Deal', count: '12', color: 'border-emerald-500/30 text-emerald-300 bg-emerald-500/10' }
            ].map((col) => (
              <div key={col.stage} className={`p-1.5 rounded bg-slate-950/60 border ${col.color} text-center`}>
                <p className="text-[9px] text-slate-400 truncate">{col.stage}</p>
                <p className="text-sm font-bold font-mono mt-0.5">{col.count}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-white/10 pt-1">
            <span>Old Customer Follow-ups (sample)</span>
            <span className="text-cyan-400 font-mono">Zero Dropped Leads</span>
          </div>
        </div>
      );

    case 'tasks':
      return (
        <div className="w-full h-full p-4 flex flex-col justify-between bg-slate-900/90 text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <span className="font-semibold text-slate-200 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-indigo-400" /> Admin FMS & Task Matrix
            </span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
              SAMPLE DATA
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 my-2 text-center">
            <div className="p-2 rounded bg-rose-500/10 border border-rose-500/20">
              <p className="text-[10px] text-rose-300">Overdue</p>
              <p className="text-sm font-bold text-rose-400 font-mono">1 Task</p>
            </div>
            <div className="p-2 rounded bg-amber-500/10 border border-amber-500/20">
              <p className="text-[10px] text-amber-300">Due Today</p>
              <p className="text-sm font-bold text-amber-400 font-mono">8 Tasks</p>
            </div>
            <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/20">
              <p className="text-[10px] text-emerald-300">Completed</p>
              <p className="text-sm font-bold text-emerald-400 font-mono">42 Done</p>
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-white/10 pt-1">
            <span>Task Status by Member (sample)</span>
            <span className="text-indigo-400 font-mono">Avg SLA: 4.8 hrs</span>
          </div>
        </div>
      );

    case 'wfh':
      return (
        <div className="w-full h-full p-4 flex flex-col justify-between bg-slate-900/90 text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <span className="font-semibold text-slate-200 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-cyan-400" /> WFH Active Minutes Agent
            </span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono">
              AGENT SYNCED
            </span>
          </div>
          <div className="my-2 space-y-1.5">
            <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono">
              <span>ACTIVE TIME (SAMPLE)</span>
              <span className="text-slate-500">IDLE: 0.8 HRS</span>
            </div>
            <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden flex">
              <div className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400" style={{ width: '85%' }} />
              <div className="h-full bg-slate-700" style={{ width: '15%' }} />
            </div>
            <div className="flex justify-between text-[10px] text-slate-400 pt-1">
              <span>09:00 AM Login</span>
              <span className="text-emerald-400">100% Timesheet Compliance</span>
              <span>06:30 PM Logout</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-white/10 pt-1">
            <span>Vercel Ingest Serverless API</span>
            <span className="text-cyan-400 font-mono">&lt; 25 MB RAM Footprint</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-full p-4 flex flex-col justify-between bg-slate-900/90 text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <span className="font-semibold text-slate-200">{title}</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono">
              LIVE SYSTEM
            </span>
          </div>
          <div className="flex items-center justify-center my-4">
            <BarChart3 className="w-10 h-10 text-cyan-400/40" />
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-white/10 pt-1">
            <span>Automated Pipeline</span>
            <span className="text-emerald-400">Production Ready</span>
          </div>
        </div>
      );
  }
};
