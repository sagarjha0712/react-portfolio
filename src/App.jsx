import React from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import FadeInSection from './components/FadeInSection';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Header />

        <FadeInSection>
          <Education />
        </FadeInSection>

        <FadeInSection>
          <Skills />
        </FadeInSection>
        
        <FadeInSection>
          <Projects />
        </FadeInSection>
      </div>
    </>
  );
}

export default App;