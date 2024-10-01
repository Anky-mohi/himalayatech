import React from 'react';
import { motion } from 'framer-motion';
import './ProjectsSection.css'; // Custom styles

const projects = [
  {
    title: "E-commerce Platform",
    description: "A scalable e-commerce platform that serves millions of users.",
    imageUrl: "/Screenshot (31).png",
    status: "Completed",
  },
  {
    title: "AI Analytics Dashboard",
    description: "An AI-powered dashboard for real-time analytics and insights.",
    imageUrl: "/Screenshot (64).png",
    status: "In Progress",
  },
  {
    title: "Mobile Banking App",
    description: "A secure and intuitive mobile banking app.",
    imageUrl: "/Screenshot (65).png",
    status: "Completed",
  },{
  title: "Mobile Banking App",
  description: "A secure and intuitive mobile banking app.",
  imageUrl: "/Screenshot (65).png",
  status: "Completed",
},
{
    title: "Mobile Banking App",
    description: "A secure and intuitive mobile banking app.",
    imageUrl: "/Screenshot (65).png",
    status: "Completed",
  },
  {
    title: "Mobile Banking App",
    description: "A secure and intuitive mobile banking app.",
    imageUrl: "/Screenshot (65).png",
    status: "Completed",
  },
  {
    title: "Mobile Banking App",
    description: "A secure and intuitive mobile banking app.",
    imageUrl: "/Screenshot (26).png",
    status: "Completed",
  },
  {
    title: "Mobile Banking App",
    description: "A secure and intuitive mobile banking app.",
    imageUrl: "/Screenshot (65).png",
    status: "Completed",
  }
];

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">Our Latest Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
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
          </motion.div>
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
