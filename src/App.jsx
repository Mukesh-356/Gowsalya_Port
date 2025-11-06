import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LoadingAnimation from './components/Loading/LoadingAnimation';
import Navbar from './components/Layout/Navbar';
import CustomCursor from './components/Layout/CustomCursor';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects';
import Resume from './components/Sections/Resume';
import Contact from './components/Sections/Contact';
import AudioPlayer from './components/AudioPlayer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
      
      // Initialize GSAP animations after loading
      gsap.to('body', {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out'
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Show loading animation while loading
  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="App bg-black min-h-screen font-sans overflow-x-hidden">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="relative">
        <section id="home">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="resume">
          <Resume />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Audio Player - Fixed position */}
      <AudioPlayer />

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-gray-800 bg-gray-900">
        <div className="container mx-auto px-6">
          <p className="text-sm md:text-base">
            © 2024 Mukesh A. All rights reserved. | Full Stack Developer
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Crafted with React, Tailwind CSS & GSAP
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;