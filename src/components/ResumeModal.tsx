import React, { useRef, useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  X, 
  Download, 
  Printer, 
  Copy, 
  Check, 
  Mail, 
  MapPin, 
  Briefcase, 
  CheckCircle2, 
  Sparkles,
  Github,
  Linkedin
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { profile, experiences, skillsData } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `
NIKITA SHAM GURAV
AI Data Science Analyst
Email: ${profile.email} | GitHub: ${profile.github} | Location: ${profile.location}

PROFESSIONAL SUMMARY
${profile.bio}

CORE SKILLS
- Data Science & Analytics: Python, Pandas, SQL, Time-Series Forecasting, RFM Customer Segmentation, EDA, Plotly
- Development: JavaScript, TypeScript, React, Node.js, Express, FastAPI, Streamlit, HTML/CSS
- Automation & Deployment: Google Apps Script, Google Sheets API, SQLite, MongoDB, Git, Render

PROFESSIONAL EXPERIENCE
${experiences.map(e => `
${e.role} | ${e.department} | ${e.organization} (${e.period})
${e.summary}
Key Deliverables:
${e.achievements.map(a => `• ${a}`).join('\n')}
Tools: ${e.keyTools.join(', ')}
`).join('\n')}

FLAGSHIP SYSTEMS BUILT (36 Total Across 6 Departments):
1. Sales Intelligence & Forecasting (Data Science - Python, Pandas, Streamlit)
2. CEO Command Center (Management - Node.js, Express, Render)
3. Production Pulse (Production - React, TypeScript, Vite)
4. Sales Reconciliation (Data Science - Python, SQLite)
5. Factory Capacity Assessment (Data Science - Python, FastAPI, Apps Script)
6. O2D Tracking System (Operations - Node.js, SQLite, Apps Script)
7. Sales Management Suite & CRM (Sales - Node.js, Apps Script)
8. Admin Task Tracker & FMS (Operations - React, MongoDB, Apps Script)
`.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with actions */}
        <div className="px-5 py-3.5 bg-slate-950 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-cyan-400">
              RESUME · NIKITA SHAM GURAV
            </span>
            <span className="text-slate-600" aria-hidden="true">·</span>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">
              ATS-Optimized Printable Format
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 font-mono transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Text' : 'Copy Plain Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-400 to-emerald-400 hover:opacity-90 text-xs text-slate-950 font-bold font-mono transition-opacity"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              aria-label="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content (Light aesthetic inside container for authentic document feel) */}
        <div className="max-h-[82vh] overflow-y-auto p-6 sm:p-10 bg-slate-900 text-slate-100 font-sans" ref={resumeRef}>
          <div className="max-w-3xl mx-auto space-y-7">
            
            {/* Header info */}
            <div className="border-b border-white/10 pb-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-100">
                  Nikita Sham Gurav
                </h1>
                <p className="text-sm font-semibold text-cyan-400 mt-1 font-mono">
                  AI Data Science Analyst
                </p>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs text-slate-400 mt-2 font-mono">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-rose-400" /> {profile.location}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Mail className="w-3 h-3 text-cyan-400" /> {profile.email}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Github className="w-3 h-3 text-indigo-400" /> github.com/Nikita3909
                  </span>
                </div>
              </div>

              <div className="text-right hidden sm:block p-3 rounded-xl bg-slate-950/70 border border-white/10 text-xs font-mono">
                <p className="text-cyan-400 font-bold">36 Business Systems</p>
                <p className="text-slate-400">6 Departments</p>
                <p className="text-emerald-400">MSc Data Science · CGPA 9.61</p>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                Professional Profile
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {profile.bio}
              </p>
            </div>

            {/* Experience */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-white/10 pb-1">
                Work Experience
              </h2>
              
              {experiences.map((exp) => (
                <div key={exp.role} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-slate-100">
                        {exp.role} — <span className="text-slate-300 font-normal">{exp.organization}</span>
                      </h3>
                      <p className="text-xs text-cyan-400 font-mono">
                        {exp.department}
                      </p>
                    </div>
                    <span className="text-xs text-slate-400 font-mono mt-0.5 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300">
                    {exp.summary}
                  </p>

                  <ul className="space-y-1.5 pt-1">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="text-cyan-400 mt-0.5">•</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-[11px] font-mono text-slate-400 pt-1">
                    <span className="text-slate-300 font-semibold">Technologies:</span> {exp.keyTools.join(', ')}
                  </p>
                </div>
              ))}
            </div>

            {/* Key Technical Systems */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-white/10 pb-1">
                Selected Production Deployments
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 space-y-1">
                  <p className="font-bold text-slate-200">Sales Intelligence & Forecasting</p>
                  <p className="text-slate-400 text-[11px]">Holt-Winters sales forecasting, RFM segmentation & AI sales assistant.</p>
                  <p className="font-mono text-cyan-400 text-[10px]">Python, Pandas, Plotly, Streamlit</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 space-y-1">
                  <p className="font-bold text-slate-200">CEO Command Center</p>
                  <p className="text-slate-400 text-[11px]">Live department scoring, attention ranking & alerts for 7 departments.</p>
                  <p className="font-mono text-cyan-400 text-[10px]">Node.js, Express, Sheets API, Render</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 space-y-1">
                  <p className="font-bold text-slate-200">Production Pulse</p>
                  <p className="text-slate-400 text-[11px]">Daily plan vs actual, machine details, labour and shift handover.</p>
                  <p className="font-mono text-cyan-400 text-[10px]">React, TypeScript, Vite</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 space-y-1">
                  <p className="font-bold text-slate-200">Sales Reconciliation Engine</p>
                  <p className="text-slate-400 text-[11px]">Tally export vs dispatch data matching, flagging qty & amount mismatches.</p>
                  <p className="font-mono text-cyan-400 text-[10px]">Python, SQLite, Sheets API</p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-white/10 pb-1">
                Technical Skills
              </h2>
              <div className="space-y-2 text-xs">
                <div>
                  <span className="font-semibold text-slate-200">Data Science & Analytics:</span>
                  <span className="text-slate-300 ml-2">Python, Pandas, NumPy, SQL, Time-Series Forecasting, RFM Segmentation, EDA, Plotly, Streamlit, AI Assistants</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-200">Development:</span>
                  <span className="text-slate-300 ml-2">JavaScript, TypeScript, React, Node.js, Express, FastAPI, HTML5, Tailwind CSS</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-200">Automation & Cloud:</span>
                  <span className="text-slate-300 ml-2">Google Apps Script, Google Sheets API, SQLite, MongoDB, Git & GitHub, Render</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
