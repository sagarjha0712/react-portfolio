import React from 'react';
import Header from './components/Header'; // We are importing our Header component
import Education from './components/Education';
import Skills from './components/Skills';       // <-- 1. Import Skills
import Projects from './components/Projects';   // <-- 2. Import Projects

function App() {
  return (
    <div>
      <Header /> {/* This is how you use a component! */}
      <Education />
      <Skills />       {/* <-- 3. Use Skills component */}
      <Projects />     {/* <-- 4. Use Projects component */}
    </div>
  );
}

export default App;