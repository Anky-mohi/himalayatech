// Portfolio.js
import React from 'react';
import styled from 'styled-components';

const portfolioData = [
  {
    image: '/br/outlet.png',
    link: 'https://outletgaucha.com.br/',
  },
  {
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/br/insurance.png',
    link: 'https://cuidebemseguros.com.br/',
  },  {
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/br/dulce.png',
    link: 'https://dulcefina.com.pe/',
  },  {
    title: 'Project 2',
    description: '/br/Screenshot 2024-01-13 120527.png',
    image: '/br/innova.png',
    link: 'https://innovaconsulting.com/',
  },  {
    title: 'Project 2',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/br/ecosta.png',
    link: 'https://ecostatech.com/',
  },  {
    title: 'Project 2',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/br/arthur.png',
    link: 'https://www.arthursjewelers.com/',
  },  {
    title: 'Project 2',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/br/purmo.png',
    link: 'https://purmotion.net/',
  },  {
    title: 'Project 2',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/br/vacation.png',
    link: 'https://www.absbythebay.com/',
  },  {
    title: 'Project 2',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/br/bluesound.png',
    link: 'https://www.bluesound.com/',
  },
  // Add more projects as needed
];

const PortfolioSection = styled.section`
  text-align: center;

`;

const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const ProjectCard = styled.div`
  max-width: 300px;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom: 1px solid #ddd;
  }

  .project-details {
    padding: 15px;
  }

  h3 {
    margin-bottom: 10px;
  }

  p {
    color: #ff914c;
  }

  a {
    color: #ff914c;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Portfolio = () => {
  return (
    <PortfolioSection>
      <ProjectContainer>
        {portfolioData.map((project, index) => (
          <ProjectCard key={index}>
            <img src={project.image} alt={project.title} />
            <div className="project-details">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </ProjectCard>
        ))}
      </ProjectContainer>
    </PortfolioSection>
  );
};

export default Portfolio;
