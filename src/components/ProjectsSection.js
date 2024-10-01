import React from 'react';
import { motion } from 'framer-motion';
import './ProjectsSection.css'; // Custom styles

const projects = [
  {
    title: " Multivendor marketplace",
    description: "A scalable e-commerce platform that serves millions of users.",
    imageUrl: "/Screenshot (64).png",
    status: "Completed",
    link: "https://brasiltarot.com.br/",
  },
  {
    title: "Binary trading plateform",
    description: "trading website for all traders that want to trade forex, crypto., all assets",
    imageUrl: "/Screenshot (31).png",
    status: "In Progress",
    link: "https://4xctrader.live/",
  },
  {
    title: "Landing page dynamic",
    description: "this is dynamic landing page functionality with react js , node js ",
    imageUrl: "/Screenshot (65).png",
    status: "Completed",
    link: "https://www.especialistalimpanome.com.br/",
  },
  {
    title: "Cuidebemseguros Insurance website",
    description: "Real Estate.",
    imageUrl: "/br/insurance.png",
    status: "Completed",
    link: "https://cuidebemseguros.com.br/",
  },
  {
    title: "INNOVA Consulting Group",
    description: "IT & Softwares",
    imageUrl: "/br/innova.png",
    status: "Completed",
    link: "https://innovaconsulting.com/",
  },{
    title: "Purmo HealthCare",
    description: "Health & Fitness",
    imageUrl: "/br/purmo.png",
    status: "Completed",
    link: "https://purmotion.net/",
  },
  {
    title: "vitrinebrasil",
    description: "Retail & Ecommerce",
    imageUrl: "/Screenshot 2024-03-05 201711.png",
    status: "Completed",
    link: "https://vitrinebrasil.online/",
  },
  {
    title: "Steel in the air",
    description: "Finance & construction.",
    imageUrl: "/steel-in-the-air1.jpg",
    status: "Completed",
    link: "https://www.steelintheair.com/",
  },
  // Add other projects...
];

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">Our Latest Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.a
            className="project-link"
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            <div className="project-card">
              <div className="project-image-container">
                <img src={project.imageUrl} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <span className={`project-status ${project.status === 'In Progress' ? 'in-progress' : 'completed'}`}>
                    {project.status}
                  </span>
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Explore Portfolio Button */}
      <motion.div
        className="explore-portfolio-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <a href="/portfolio" className="explore-portfolio-btn">
          Explore Our Portfolio
        </a>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
