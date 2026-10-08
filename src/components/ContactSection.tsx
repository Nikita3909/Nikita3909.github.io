import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Copy, 
  Check, 
  Send, 
  Sparkles, 
  ExternalLink,
  MessageSquare
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'AI Engineer',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    const subject = `${formData.role} — message from ${formData.name || formData.email}`;
    const body = `${formData.message}\n\nFrom: ${formData.name} (${formData.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-white/10 bg-slate-950/60">
      {/* Background glow blob */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-t from-cyan-500/10 via-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Big Gradient Call To Action Card */}
        <div className="rounded-3xl glass-panel p-8 sm:p-12 lg:p-16 border border-cyan-500/30 text-center relative overflow-hidden mb-16">
          <div 
            className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" 
            aria-hidden="true" 
          />
          <div 
            className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" 
            aria-hidden="true" 
          />

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for New Roles & High-Impact Projects</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-100 tracking-tight text-balance">
              Let's work together.
            </h2>

            <p className="text-lg sm:text-xl text-slate-300 font-medium text-balance">
              Open to <span className="text-cyan-300 font-semibold">AI Engineer</span>,{' '}
              <span className="text-emerald-300 font-semibold">Data Scientist</span>,{' '}
              <span className="text-indigo-300 font-semibold">Data Analyst</span> and{' '}
              <span className="text-teal-300 font-semibold">Machine Learning Engineer</span> roles at IT and product companies.
            </p>

            <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto text-balance">
              Ready to help your engineering & management team transform messy spreadsheets into live executive telemetry, predictive models, and automated reporting pipelines.
            </p>

            {/* Quick Link Buttons Row */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                <span>Email Nikita</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/40 rounded-xl transition-all"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Email Address'}</span>
              </button>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-200 hover:text-cyan-300 bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/40 rounded-xl transition-all"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-200 hover:text-cyan-300 bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/40 rounded-xl transition-all"
              >
                <Github className="w-4 h-4 text-indigo-400" />
                <span>GitHub (Nikita3909)</span>
              </a>
            </div>

          </div>
        </div>

        {/* Interactive Direct Message Form */}
        <div className="max-w-2xl mx-auto glass-card rounded-2xl p-6 sm:p-8 border border-white/10">
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-100">
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              <span>Send a Direct Message</span>
            </div>
            <span className="text-xs font-mono text-slate-400">{profile.email}</span>
          </div>

          {formSubmitted ? (
            <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                <Check className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-emerald-300">
                Email draft opened
              </h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                Thank you, {formData.name || 'there'}. Your message has opened in your email app — press Send there to reach Nikita at {profile.email}.
              </p>
              <button
                onClick={() => {
                  setFormSubmitted(false);
                  setFormData({ name: '', email: '', role: 'AI Engineer', message: '' });
                }}
                className="text-xs text-cyan-400 font-mono underline hover:text-cyan-300"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. rahul@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                  Opportunity or Role
                </label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-cyan-500/60 transition-colors"
                >
                  <option value="AI Engineer">AI Engineer Role</option>
                  <option value="Data Scientist">Data Scientist Role</option>
                  <option value="Data Analyst">Data Analyst Role</option>
                  <option value="Machine Learning Engineer">Machine Learning Engineer Role</option>
                  <option value="Consulting / Automation Project">Consulting / Automation Project</option>
                  <option value="General Enquiry">General Enquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                  Message Details
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Share a brief overview of your team, company, or the business challenge you'd like to solve..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 text-slate-950 font-semibold text-xs flex items-center justify-center gap-2 hover:opacity-95 transition-opacity shadow-md shadow-cyan-500/20"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send via Email</span>
              </button>
            </form>
          )}

        </div>

      </div>
    </section>
  );
};
