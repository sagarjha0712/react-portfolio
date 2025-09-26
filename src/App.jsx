import React from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import FadeInSection from './components/FadeInSection';
import Navbar from './components/Navbar';
import useMousePosition from './hooks/useMousePosition'; // Import the hook
import Section from './components/Section';

function App() {
  const { x, y } = useMousePosition();
  const dotStyle = {
    position: 'fixed',
    top: y,
    left: x,
    // ... more styles for the dot in the CSS file
  };

  return (
    <>
      <Navbar />
      <div className="cursor-glow" style={{ top: y, left: x }} />
      <Section id="home">
      <Header />
      </Section>

      <FadeInSection>
        <Section id="education">
          <Education />
        </Section>
      </FadeInSection>

      <FadeInSection>
        <Section id="skills">
          <Skills />
        </Section>
      </FadeInSection>
      
      <FadeInSection>
        <Section id="projects">
          <Projects />
        </Section>
      </FadeInSection>
    </>
  );
}

export default App;