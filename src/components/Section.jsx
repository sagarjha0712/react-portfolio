import React from 'react';
import './Section.css'; // We'll create this next

function Section({ children, id }) {
  return (
    <section className="section-container" id={id}>
      {children}
    </section>
  );
}

export default Section;