import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { ParticleBackground } from './components/ParticleBackground';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative bg-slate-950 selection:bg-cyan-500/30">
      <ParticleBackground />
      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer className="py-8 text-center text-slate-600 text-sm relative z-10 bg-slate-950">
        <p>&copy; {new Date().getFullYear()} Serkan Kaya tarafından geliştirildi.</p>
      </footer>
    </div>
  );
};

export default App;