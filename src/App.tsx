import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PortfolioSection } from './components/PortfolioSection';
import { ServicesSection } from './components/ServicesSection';
import { SoftwareSkills } from './components/SoftwareSkills';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { CustomProjectEditorModal } from './components/CustomProjectEditorModal';
import { INITIAL_PROJECTS } from './data/portfolioData';
import { Project } from './types';

const STORAGE_KEY = 'ridex_portfolio_projects_v13';

const sanitizeProjects = (items: Project[]): Project[] => {
  return items.map((p) => {
    if (p.videoUrl && (p.videoUrl.includes('commondatastorage.googleapis.com') || p.videoUrl.includes('gtv-videos-bucket'))) {
      return {
        ...p,
        videoUrl: p.aspectRatio === '9:16' ? '/videos/reel_english.mp4' : '/videos/reel_trailer.mp4',
      };
    }
    return p;
  });
};

export default function App() {
  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0 && parsed[0].driveUrl) {
          const sanitized = sanitizeProjects(parsed);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(sanitized));
          return sanitized;
        }
      }
    } catch (e) {
      console.warn('Failed to parse saved projects', e);
    }
    return INITIAL_PROJECTS;
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  const handleSaveProjects = (updated: Project[]) => {
    setProjects(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to persist projects', e);
    }
  };

  const handleResetProjects = () => {
    setProjects(INITIAL_PROJECTS);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 flex flex-col font-sans selection:bg-purple-600 selection:text-white">
      {/* Navigation */}
      <Navbar
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />

      <main className="flex-1">
        {/* Hero with interactive Showreel player and Premiere Pro timeline aesthetic */}
        <Hero />

        {/* Portfolio Showcase grid (Reels, SaaS, Blender, YouTube) */}
        <PortfolioSection
          projects={projects}
          onSelectProject={(p) => setSelectedProject(p)}
        />

        {/* Services & Offerings (with individual pricing explanation) */}
        <ServicesSection />

        {/* 7 Years Experience, Tools (Ae, Pr, Blender) and Pipeline */}
        <SoftwareSkills />

        {/* Testimonials & Blogger Proof */}
        <ReviewsSection />
      </main>

      {/* Footer & Contacts */}
      <Footer />

      {/* Interactive Project Detail & Video Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Custom Project & Video Links Editor */}
      <CustomProjectEditorModal
        isOpen={isCustomizerOpen}
        projects={projects}
        onSave={handleSaveProjects}
        onResetToDefaults={handleResetProjects}
        onClose={() => setIsCustomizerOpen(false)}
      />
    </div>
  );
}
