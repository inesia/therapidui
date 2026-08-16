import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutTechStack } from './components/AboutTechStack';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { ContactModal } from './components/ContactModal';
import type { Project } from './data/portfolioData';

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Lock body scroll when modals are open
  React.useEffect(() => {
    if (selectedProject || isResumeOpen || isContactOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject, isResumeOpen, isContactOpen]);

  return (
    <div className="min-h-screen bg-[#FCFCFC] text-slate-900 font-sans selection:bg-accent-teal/20 selection:text-accent-teal flex flex-col relative overflow-x-hidden">
      {/* Soft Top Gradient for aesthetics */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-slate-100/50 to-transparent pointer-events-none -z-10" />

      <Navbar 
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />
      
      <main className="flex-1 w-full flex flex-col items-center">
        <Hero 
          onOpenResume={() => setIsResumeOpen(true)}
          onExploreWork={() => {
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
        <AboutTechStack />
        <FeaturedProjects onSelectProject={setSelectedProject} />
      </main>

      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Modals */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
      <ResumeModal 
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

export default App;
