import React from 'react';
import Navbar from './components/Navbar';
import ScrollToTopButton from './components/ScrollToTopButton';

import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Published from './sections/Publications';
import Education from './sections/Education';
import Certificate from './sections/Certificate';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

// Import your profile image here
import profilePic from './sections/skj_photo.jpg';  // adjust path if needed

export default function App() {
  return (
    <div className="min-h-screen relative">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6">
        {/* Pass profileImageUrl prop to Hero */}
        <Hero profileImageUrl={profilePic} />

        <About />
        <Skills />
        <Projects />
        <Experience />
        <Published />
        <Education />
        <Certificate />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Tool */}
      <ScrollToTopButton />
    </div>
  );
}


