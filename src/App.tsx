import React from 'react';
import './styles/global.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Hero } from './sections/Hero';
import { BrandStatement } from './sections/BrandStatement';
import { AICapability } from './sections/AICapability';
import { SelectedCases } from './sections/SelectedCases';
import { BeforeAfter } from './sections/BeforeAfter';
import { CareerJourney } from './sections/CareerJourney';
import { SkillsTools } from './sections/SkillsTools';
import { InsightArchive } from './sections/InsightArchive';
import { Contact } from './sections/Contact';

export const App: React.FC = () => {
  return (
    <div className="app-layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flexGrow: 1 }}>
        <Hero />
        <BrandStatement />
        <AICapability />
        <SelectedCases />
        <BeforeAfter />
        <CareerJourney />
        <SkillsTools />
        <InsightArchive />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
