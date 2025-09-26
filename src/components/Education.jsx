import React from 'react';
import './Education.css';

function Education() {
  return (
    <section>
        <h2>EDUCATION</h2>
        
        <div className="entry">
            <h3>Bachelor of Engineering, Information Technology</h3>
            <p>Thakur College of Engineering and Technology</p>
            <p><em>09/2025 – 2029 | Mumbai, India</em></p>
        </div>

        <div className="entry">
            <h3>Senior Secondary (HSC)</h3>
            <p>Thakur Vidya Mandir High School & Jr. College, Mumbai</p>
            <p><strong>Grade:</strong> 75.83%</p>
        </div>

        <div className="entry">
            <h3>Secondary (SSC)</h3>
            <p>M.K.N. Bhatia High School & Jr. College, Mumbai</p>
            <p><strong>Grade:</strong> 86.80%</p>
        </div>
    </section>
  );
}

export default Education;