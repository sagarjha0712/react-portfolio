import React from 'react';
import { useInView } from 'react-intersection-observer';

function FadeInSection(props) {
  const { ref, inView } = useInView({
    triggerOnce: true, // The animation will only happen once
    threshold: 0.1,    // E.g., trigger when 10% of the element is visible
  });

  return (
    <div
      className={`fade-in-section ${inView ? 'is-visible' : ''}`}
      ref={ref}
    >
      {props.children}
    </div>
  );
}

export default FadeInSection;