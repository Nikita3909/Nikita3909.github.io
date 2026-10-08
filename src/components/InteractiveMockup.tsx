import React, { useState } from 'react';
import { 
  TrendingUp, 
  Activity, 
  CheckCircle2, 
  AlertCircle, 
  Database, 
  Layers, 
  ShieldCheck, 
  ArrowUpRight,
  Maximize2
} from 'lucide-react';

interface InteractiveMockupProps {
  type?: 'hero' | 'forecast' | 'scorecard' | 'pulse' | 'reconcile' | 'capacity' | 'o2d' | 'sales' | 'crm' | 'tasks';
  interactive?: boolean;
}

export const InteractiveMockup: React.FC<InteractiveMockupProps> = ({ 
  type = 'hero',
  interactive = true 
}) => {
  const [activeTab, setActiveTab] = useState<'revenue' | 'production' | 'health'>('revenue');
  const [selectedPoint, setSelectedPoint] = useState<number | null>(4);

  // Data series for interactive hero
  const revenuePoints = [
    { month: 'May', actual: 42, forecast: 40 },
    { month: 'Jun', actual: 48, forecast: 46 },
    { month: 'Jul', actual: 55, forecast: 53 },
    { month: 'Aug', actual: 61, forecast: 62 },
    { month: 'Sep', actual: 74, forecast: 70 },
    { month: 'Oct', actual: 82, forecast: 79 },
    { month: 'Nov', actual: 89, forecast: 86 }
  ];

  const hourlyOutput = [
    { hour: '09:00', plan: 120, actual: 128 },
    { hour: '11:00', plan: 140, actual: 138 },
    { hour: '13:00', plan: 130, actual: 135 },
    { hour: '15:00', plan: 150, actual: 154 },
    { hour: '17:00', plan: 145, actual: 149 },
    { hour: '19:00', plan: 110, actual: 112 }
  ];

  const departmentScores = [
    { name: 'Sales & BD', score: 94, status: 'Optimal', color: 'emerald' },
    { name: 'Production', score: 91, status: 'Active', color: 'cyan' },
    { name: 'Stock & RM', score: 88, status: 'Normal', color: 'indigo' },
    { name: 'Order to Delivery', score: 96, status: 'Ahead', color: 'emerald' },
    { name: 'Purchase', score: 85, status: 'Review', color: 'amber' }
  ];

  if (type === 'forecast' || (type === 'hero' && activeTab === 'revenue')) {
    return (
      <div className="w-full h-full flex flex-col justify-between p-4 sm:p-5 text-xs select-none">
        {/* Top header bar */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10 dark:border-white/10 border-slate-200">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-semibold text-slate-100 dark:text-slate-100 text-slate-900 tracking-wide">
              Holt-Winters Sales Forecast
            </span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono">
              SAMPLE DATA
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-slate-400 font-mono">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-cyan-400" /> Actual
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400" /> Projected
            </span>
          </div>
        </div>

        {/* KPI Mini Row */}
        <div className="grid grid-cols-3 gap-2 my-3">
          <div className="p-2.5 rounded-lg bg-slate-900/60 border border-white/5">
            <p className="text-[10px] text-slate-400">Quarterly Target</p>
            <p className="text-sm font-semibold text-slate-100 font-mono mt-0.5">₹8.42 Cr</p>
            <span className="text-[10px] text-emerald-400 font-medium">+14.2% YoY</span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-900/60 border border-white/5">
            <p className="text-[10px] text-slate-400">RFM Champions</p>
            <p className="text-sm font-semibold text-cyan-400 font-mono mt-0.5">384 Accts</p>
            <span className="text-[10px] text-cyan-300 font-medium">62% Volume</span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-900/60 border border-white/5">
            <p className="text-[10px] text-slate-400">Churn Risk Flagged</p>
            <p className="text-sm font-semibold text-amber-400 font-mono mt-0.5">14 Accts</p>
            <span className="text-[10px] text-slate-400">Auto-Alerted</span>
          </div>
        </div>

        {/* SVG Curve Chart */}
        <div className="relative h-32 w-full mt-1">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 360 110" preserveAspectRatio="none">
            <defs>
              <linearGradient id="cyanGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            {/* Grid lines */}
            <line x1="0" y1="20" x2="360" y2="20" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
            <line x1="0" y1="55" x2="360" y2="55" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
            <line x1="0" y1="90" x2="360" y2="90" stroke="rgba(255,255,255,0.06)" />

            {/* Area fill */}
            <path
              d="M 10 95 Q 60 80, 110 65 T 210 40 T 310 18 L 350 15 L 350 100 L 10 100 Z"
              fill="url(#cyanGrad)"
            />

            {/* Actual line (cyan) */}
            <path
              d="M 10 95 Q 60 80, 110 65 T 210 40 T 310 18 L 350 15"
              fill="none"
              stroke="#06b6d4"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Forecast dashed line (emerald) */}
            <path
              d="M 210 40 T 310 22 L 350 18"
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
              strokeDasharray="4 4"
            />

            {/* Interactive Data dots */}
            {revenuePoints.map((pt, idx) => {
              const cx = 20 + idx * 52;
              const cy = 95 - (pt.actual - 35) * 1.35;
              const isSelected = selectedPoint === idx;
              return (
                <g key={pt.month} className="cursor-pointer" onClick={() => setSelectedPoint(idx)}>
                  <circle
                    cx={cx}
                    cy={cy}
                    r={isSelected ? 5 : 3.5}
                    fill={isSelected ? '#38bdf8' : '#06b6d4'}
                    stroke="#0f172a"
                    strokeWidth="2"
                    className="transition-all duration-200"
                  />
                  {isSelected && (
                    <circle cx={cx} cy={cy} r="8" fill="none" stroke="#38bdf8" strokeWidth="1" opacity="0.6" />
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        {/* Bottom labels */}
        <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono pt-1">
          {revenuePoints.map((pt, idx) => (
            <span 
              key={pt.month} 
              className={`cursor-pointer transition-colors ${selectedPoint === idx ? 'text-cyan-300 font-bold' : ''}`}
              onClick={() => setSelectedPoint(idx)}
            >
              {pt.month}
            </span>
          ))}
        </div>
      </div>
    );
  }

  if (type === 'scorecard' || (type === 'hero' && activeTab === 'health')) {
    return (
      <div className="w-full h-full flex flex-col justify-between p-4 sm:p-5 text-xs select-none">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="font-semibold text-slate-100">Executive CEO Radar</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
              7/7 DEPARTMENTS LIVE
            </span>
          </div>
          <span className="text-[10px] text-slate-400 font-mono">SYNC: 14s AGO</span>
        </div>

        <div className="space-y-2.5 my-3">
          {departmentScores.map((dept) => (
            <div key={dept.name} className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-white/5">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${
                  dept.color === 'emerald' ? 'bg-emerald-400' :
                  dept.color === 'cyan' ? 'bg-cyan-400' :
                  dept.color === 'indigo' ? 'bg-indigo-400' : 'bg-amber-400'
                }`} />
                <span className="text-slate-200 font-medium text-[11px]">{dept.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-20 bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${
                      dept.color === 'emerald' ? 'bg-emerald-400' :
                      dept.color === 'cyan' ? 'bg-cyan-400' :
                      dept.color === 'indigo' ? 'bg-indigo-400' : 'bg-amber-400'
                    }`}
                    style={{ width: `${dept.score}%` }}
                  />
                </div>
                <span className="font-mono text-slate-100 font-semibold w-8 text-right text-[11px]">{dept.score}%</span>
              </div>
            </div>
          ))}
        </div>

        <div className="p-2.5 rounded-lg bg-indigo-950/40 border border-indigo-500/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-[11px] text-slate-300">Purchase pending review: 2 import bills</span>
          </div>
          <span className="text-[10px] text-cyan-400 font-mono cursor-pointer hover:underline">Drill down →</span>
        </div>
      </div>
    );
  }

  // Production Pulse View
  return (
    <div className="w-full h-full flex flex-col justify-between p-4 sm:p-5 text-xs select-none">
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-cyan-400" />
          <span className="font-semibold text-slate-100">Production Pulse Real-Time</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono">
          SHIFT A · SAMPLE DATA
        </span>
      </div>

      {/* Hourly Output Bar Chart */}
      <div className="my-3">
        <div className="flex items-center justify-between text-[10px] text-slate-400 mb-2">
          <span>HOURLY OUTPUT (PCS)</span>
          <span className="text-cyan-400 font-mono">PLAN VS ACTUAL</span>
        </div>
        <div className="grid grid-cols-6 gap-2 items-end h-28 pt-4">
          {hourlyOutput.map((item) => (
            <div key={item.hour} className="flex flex-col items-center gap-1.5 h-full justify-end">
              <span className="text-[9px] font-mono text-cyan-300">{item.actual}</span>
              <div className="w-full flex items-end justify-center gap-1 h-20">
                {/* Plan Bar */}
                <div 
                  className="w-2.5 bg-slate-700 rounded-t"
                  style={{ height: `${(item.plan / 160) * 100}%` }}
                  title={`Plan: ${item.plan}`}
                />
                {/* Actual Bar */}
                <div 
                  className="w-2.5 bg-gradient-to-t from-cyan-500 to-emerald-400 rounded-t shadow-sm shadow-cyan-500/30"
                  style={{ height: `${(item.actual / 160) * 100}%` }}
                  title={`Actual: ${item.actual}`}
                />
              </div>
              <span className="text-[9px] text-slate-400 font-mono">{item.hour}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Machine Matrix */}
      <div className="grid grid-cols-4 gap-1.5 pt-2 border-t border-white/10">
        {['Line 1: Extruder', 'Line 2: Molding', 'Line 3: Cutting', 'Line 4: Packing'].map((line, i) => (
          <div key={line} className="p-1.5 rounded bg-slate-900/60 border border-white/5 text-center">
            <div className="flex items-center justify-center gap-1">
              <span className={`w-1.5 h-1.5 rounded-full ${i === 2 ? 'bg-amber-400 animate-ping' : 'bg-emerald-400'}`} />
              <span className="text-[9px] text-slate-300 truncate">{line.split(':')[0]}</span>
            </div>
            <p className="text-[9px] font-mono text-slate-400 mt-0.5">{i === 2 ? 'Tooling' : 'Running'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
