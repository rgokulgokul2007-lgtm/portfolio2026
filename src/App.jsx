import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#07090D] text-[#F4F7FB] selection:bg-[#00D9FF]/20 selection:text-[#00D9FF] relative overflow-x-hidden">
      {/* Top Fixed Navigation */}
      <Navbar />

      {/* Main Single Page Portfolio Sections */}
      <main id="main-content" className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>

      {/* Global Terminal Footer */}
      <Footer />
    </div>
  );
}
