import React from 'react';
import './Projects.css';

// ===== PROJECT DATA =====
const projectData = [
  {
    id: 1,
    // image: 'path/to/image.png', // We will add the image in a moment
    title: 'Portfolio Website (React Version)',
    description: 'A modern, responsive portfolio built from the ground up using React and Vite. This project demonstrates component-based architecture, modern JavaScript (ES6), and CSS modules for styling.',
    tech: ['React', 'Vite', 'CSS3', 'JavaScript'],
    liveUrl: 'https://sagarjha-portfolio.netlify.app', // Replace with your actual live URL
    codeUrl: 'https://github.com/sagarjha0712/react-portfolio' // Replace with your actual GitHub repo URL
  },
  // When you have a second project, you can add another object here like this:
  // {
  //   id: 2,
  //   title: 'My Next Cool Project',
  //   ...
  // }
];

function Projects() {
  // Replace the existing return statement with this one
return (
    <section>
        <h2>PROJECTS</h2>
        <div className="projects-container">
            {projectData.map((project) => (
                <div className="project-card" key={project.id}>
                    {/* <img src={project.image} alt={`${project.title} screenshot`} className="project-image" /> */}
                    <div className="project-info">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="project-tech">
                            {project.tech.map((t, index) => (
                                <span key={index}>{t}</span>
                            ))}
                        </div>
                        <div className="project-links">
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">View Live</a>
                            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">View Code</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
);
}

export default Projects;