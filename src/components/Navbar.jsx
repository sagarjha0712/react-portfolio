import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    // in Navbar.jsx
<nav className="navbar">
    <a href="#home">Home</a> {/* <-- Add this line */}
    <a href="#education">Education</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
</nav>
  );
}

export default Navbar;