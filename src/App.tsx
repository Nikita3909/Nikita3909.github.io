/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsSection } from './components/StatsSection';
import { TechMarquee } from './components/TechMarquee';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { OtherSystemsSection } from './components/OtherSystemsSection';
import { HowIWorkSection } from './components/HowIWorkSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { PORTFOLIO_DATA, Project } from './data/portfolioData';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  useEffect(() => {
    // Check saved theme preference or default to dark
    const savedTheme = localStorage.getItem('nikita_portfolio_theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }, []);

  const handleToggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
        localStorage.setItem('nikita_portfolio_theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        localStorage.setItem('nikita_portfolio_theme', 'light');
      }
      return next;
    });
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'} selection:bg-cyan-500/30 selection:text-cyan-200 transition-colors duration-300 relative`}>
      {/* Top sticky navigation bar */}
      <Navbar 
        isDark={isDark} 
        onToggleTheme={handleToggleTheme} 
        onOpenResume={() => window.open('/Nikita_Gurav_Resume.pdf', '_blank', 'noopener')} 
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenResume={() => window.open('/Nikita_Gurav_Resume.pdf', '_blank', 'noopener')} />

        {/* 2. Key Quantified Stats */}
        <StatsSection />

        {/* 3. Tech Logo Marquee */}
        <TechMarquee />

        {/* 4. About Nikita & Domain Focus */}
        <AboutSection />

        {/* 5. 10 Featured Flagship Projects */}
        <ProjectsSection onOpenProject={(proj) => setSelectedProject(proj)} />

        {/* 6. Other systems */}
        <OtherSystemsSection />

        {/* 7. How I Work: 5-Step Methodology */}
        <HowIWorkSection />

        {/* 8. Professional Experience Timeline */}
        <ExperienceSection />

        {/* 9. Skills & Engineering Capabilities */}
        <SkillsSection />

        {/* 10. Contact & Opportunities */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fullscreen Interactive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
        allProjects={PORTFOLIO_DATA.featuredProjects}
      />

      {/* ATS-Optimized Printable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
