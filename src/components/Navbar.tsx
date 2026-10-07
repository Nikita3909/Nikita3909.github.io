import React, { useState, useEffect } from 'react';
import { Moon, Sun, FileText, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, onToggleTheme, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-slate-950/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-white/10 dark:border-white/10 shadow-lg shadow-black/20'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark */}
        <a 
          href="#" 
          className="group flex items-center gap-2.5 text-slate-100 dark:text-slate-100 font-bold text-lg tracking-tight hover:opacity-90 transition-opacity"
        >
          <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 via-cyan-400 to-emerald-400 p-[1.5px] flex items-center justify-center shadow-sm shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <span className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center text-xs font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-300">
              NG
            </span>
          </span>
          <span className="text-slate-100 dark:text-slate-100 group-hover:text-cyan-300 transition-colors">
            Nikita Gurav
          </span>
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300 dark:text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="hover:text-cyan-400 transition-colors whitespace-nowrap py-1 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Zone 3: Actions (Resume CTA + Theme Toggle + Mobile Toggle) */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle color theme"
            className="p-2 rounded-lg text-slate-300 hover:text-cyan-300 bg-slate-900/60 dark:bg-slate-900/60 border border-white/10 dark:border-white/10 hover:border-cyan-500/40 transition-all duration-200"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-300" />
            ) : (
              <Moon className="w-4 h-4 text-cyan-400" />
            )}
          </button>

          {/* Primary Action Button: Download / View Resume */}
          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 rounded-lg shadow-sm shadow-cyan-500/25 transition-all duration-200 hover:shadow-cyan-500/40 hover:-translate-y-0.5 whitespace-nowrap"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Download Resume</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white bg-slate-900/60 border border-white/10"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 px-4 py-4 bg-slate-950/95 border-b border-white/10 backdrop-blur-xl animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-cyan-300 hover:bg-slate-900/60 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-lg shadow-sm"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
