import { motion } from "framer-motion";
import { useState } from "react";
import "../styles/Projects.css";

export default function Projects() {
  // Skeleton project data - user will add real details later
  const projectsData = [
    {
      id: 1,
      title: "Project One",
      description: "A brief description of the first project showcasing its key features and purpose.",
      techStack: ["React", "Node.js", "MongoDB", "Express"],
      imageURL: "https://via.placeholder.com/400x300",
      githubLink: "https://github.com",
      liveDemoLink: "https://example.com"
    },
    {
      id: 2,
      title: "Project Two",
      description: "A brief description of the second project highlighting its main functionality.",
      techStack: ["JavaScript", "CSS", "HTML", "Firebase"],
      imageURL: "https://via.placeholder.com/400x300",
      githubLink: "https://github.com",
      liveDemoLink: "https://example.com"
    },
    {
      id: 3,
      title: "Project Three",
      description: "A brief description of the third project explaining the problem it solves.",
      techStack: ["Python", "Django", "PostgreSQL"],
      imageURL: "https://via.placeholder.com/400x300",
      githubLink: "https://github.com",
      liveDemoLink: "https://example.com"
    },
    {
      id: 4,
      title: "Project Four",
      description: "A brief description of the fourth project demonstrating technical skills.",
      techStack: ["Vue.js", "TypeScript", "Tailwind"],
      imageURL: "https://via.placeholder.com/400x300",
      githubLink: "https://github.com",
      liveDemoLink: "https://example.com"
    }
  ];

  const [hoveredProject, setHoveredProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="container projects-container">
      {/* Page Title */}
      <motion.div
        className="cardTitle"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>My Projects</h1>
        <p className="subtitle">Explore my recent work and side projects</p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            variants={cardVariants}
            whileHover="hover"
            custom={cardHoverVariants}
            onHoverStart={() => setHoveredProject(project.id)}
            onHoverEnd={() => setHoveredProject(null)}
          >
            {/* Project Image with Hover Overlay */}
            <div className="project-image-container">
              <img
                src={project.imageURL}
                alt={project.title}
                className="project-image"
              />
              <motion.div
                className="project-overlay"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hoveredProject === project.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="overlay-buttons">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="overlay-btn github-btn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    View GitHub
                  </a>
                  <a
                    href={project.liveDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="overlay-btn demo-btn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Project Details */}
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              {/* Tech Stack Badges */}
              <div className="tech-stack">
                {project.techStack.map((tech, index) => (
                  <motion.span
                    key={index}
                    className="tech-badge"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
