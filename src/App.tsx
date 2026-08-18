/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WorkflowSteps } from './components/WorkflowSteps';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { WhyUsSection } from './components/WhyUsSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { CustomizeDrawer } from './components/CustomizeDrawer';
import { personaPresets, vertexDigitalData } from './data/defaultPortfolio';
import { PersonaPresetKey, PortfolioData } from './types';
import { LanguageProvider } from './context/LanguageContext';

const STORAGE_KEY_DATA = 'vertex_digital_portfolio_custom_data_v3';
const STORAGE_KEY_PRESET = 'vertex_digital_portfolio_selected_preset_v3';

function PortfolioApp() {
  const [currentPresetId, setCurrentPresetId] = useState<PersonaPresetKey>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_PRESET);
    if (saved && personaPresets.some(p => p.id === saved)) {
      return saved as PersonaPresetKey;
    }
    return 'fullstack';
  });

  const [portfolioData, setPortfolioData] = useState<PortfolioData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_DATA);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error("Failed to parse saved portfolio data", e);
    }
    return vertexDigitalData;
  });

  const [resumeOpen, setResumeOpen] = useState(false);
  const [customizerOpen, setCustomizerOpen] = useState(false);
  const [activeSkillFilter, setActiveSkillFilter] = useState<string | null>(null);

  // Sync preset switch
  const handleSelectPreset = (presetId: PersonaPresetKey) => {
    setCurrentPresetId(presetId);
    localStorage.setItem(STORAGE_KEY_PRESET, presetId);
    const preset = personaPresets.find(p => p.id === presetId);
    if (preset) {
      setPortfolioData(preset.data);
      localStorage.setItem(STORAGE_KEY_DATA, JSON.stringify(preset.data));
    }
  };

  // Save custom edits
  const handleSaveData = (newData: PortfolioData) => {
    setPortfolioData(newData);
    localStorage.setItem(STORAGE_KEY_DATA, JSON.stringify(newData));
  };

  // Reset to original preset defaults
  const handleResetToDefault = () => {
    const preset = personaPresets.find(p => p.id === currentPresetId) || personaPresets[0];
    setPortfolioData(preset.data);
    localStorage.setItem(STORAGE_KEY_DATA, JSON.stringify(preset.data));
  };

  // Skill click to filter projects
  const handleSelectSkillForFilter = (skillName: string) => {
    setActiveSkillFilter(skillName);
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle uploaded video for a project
  const handleUpdateProjectVideo = (projectId: string, videoUrl: string, fileName: string) => {
    setPortfolioData((prev) => {
      const updatedProjects = prev.projects.map((proj) => {
        if (proj.id === projectId) {
          return {
            ...proj,
            videoUrl,
            videoDuration: 'REC',
            isScreenRecording: true
          };
        }
        return proj;
      });
      const updatedData = { ...prev, projects: updatedProjects };
      try {
        localStorage.setItem(STORAGE_KEY_DATA, JSON.stringify(updatedData));
      } catch (e) {
        console.warn("Could not persist blob URL to localStorage", e);
      }
      return updatedData;
    });
  };

  return (
    <div className="min-h-screen bg-[#020203] text-zinc-100 selection:bg-white selection:text-black flex flex-col font-sans relative overflow-x-hidden">
      
      {/* Immersive Ambient Blur Lights */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-100px] right-[-100px] w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-[-150px] left-[-50px] w-[650px] h-[650px] bg-purple-600/10 rounded-full blur-[160px]" />
        <div className="absolute top-[25%] left-[5%] w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-[65%] right-[8%] w-[480px] h-[480px] bg-indigo-600/8 rounded-full blur-[150px]" />
      </div>
      
      {/* Navigation Header */}
      <Navbar
        profile={portfolioData.profile}
        onOpenCustomizer={() => setCustomizerOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
        onResetToDefault={handleResetToDefault}
      />

      {/* Main Content Sections */}
      <main className="flex-1 relative z-10">
        {/* 1. Hero Showcase */}
        <HeroSection
          profile={portfolioData.profile}
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* 2. Step Workflow: View Demos -> Choose Design -> Request Website */}
        <WorkflowSteps />

        {/* 3. Services Section */}
        <ServicesSection />

        {/* 4. Portfolio Projects (Websites with Screen Recording Videos, Commercial Posters, Branding) */}
        <ProjectsSection
          projects={portfolioData.projects}
          activeSkillFilter={activeSkillFilter}
          onClearSkillFilter={() => setActiveSkillFilter(null)}
          onUpdateProjectVideo={handleUpdateProjectVideo}
        />

        {/* 5. Why Choose Vertex Digital */}
        <WhyUsSection />

        {/* 6. About Studio Profile */}
        <AboutSection />

        {/* 7. Skills & Tech Stack */}
        <SkillsSection
          skills={portfolioData.skills}
          onSelectSkillForFilter={handleSelectSkillForFilter}
        />

        {/* 8. Contact & Website Request Form */}
        <ContactSection
          profile={portfolioData.profile}
        />
      </main>

      {/* Footer */}
      <Footer
        profile={portfolioData.profile}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Full Resume / CV Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
        data={portfolioData}
      />

      {/* Live Customizer Drawer */}
      <CustomizeDrawer
        isOpen={customizerOpen}
        onClose={() => setCustomizerOpen(false)}
        data={portfolioData}
        onSaveData={handleSaveData}
        onReset={handleResetToDefault}
      />

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioApp />
    </LanguageProvider>
  );
}
