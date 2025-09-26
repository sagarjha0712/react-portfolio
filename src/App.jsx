import React from 'react';
import FadeInSection from './components/FadeInSection';
import Header from './components/Header'; // We are importing our Header component
import Education from './components/Education';
import Skills from './components/Skills';       // <-- 1. Import Skills
import Projects from './components/Projects';   // 
import Navbar from './components/Navbar'; // <-- 1. Import it<-- 2. Import Projects

function App() {
  return (
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
  );
}

export default App;