import React, { useEffect } from 'react'; // Change this line
import Typed from 'typed.js';             // Add this line
import profilePhoto from '../assets/Profile Photo.png';
import './Header.css';

function Header() {
  useEffect(() => {
    // Options for the typing animation
    const options = {
      strings: [
        'Information Technology Student',
        'Aspiring Software Engineer',
        'Lifelong Learner',
        'Problem Solver'
      ],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1500,
      loop: true,
    };

    // Create a new Typed instance
    const typed = new Typed('#typing-subtitle', options);

    // Cleanup function to destroy Typed instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []); // The empty array ensures this effect runs only once

  return (
    <header className="resume-header" id="home">
        {/* We will add the image and icons back later */}
        <img src={profilePhoto} alt="Profile" className="profile-picture" />
        <h1>SAGAR JHA</h1>
        <p id="typing-subtitle" className="subtitle"></p>
        <div className="social-links">
            <a href="https://github.com/sagarjha0712" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> GitHub
            </a>
            <a href="https://www.linkedin.com/in/sagar-jha-49710a371/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i> LinkedIn
            </a>
        </div>
    </header>
  );
}

export default Header;