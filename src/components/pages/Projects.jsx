import { motion } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/Projects.css";

// Reusable ProjectCard Component
const ProjectCard = ({ project, isFeatured, index }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: index * 0.1 },
    },
  };

  return (
    <motion.div
      className={`project-card ${isFeatured ? "featured-card" : ""}`}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        {/* Tech Stack Badges */}
        <div className="tech-stack">
          {project.techStack.map((tech, techIndex) => (
            <span key={techIndex} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="project-actions">
          <a
            href={project.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn github-btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Source Code
          </a>

          {project.caseStudyLink && (
            <a
              href={project.caseStudyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn case-study-btn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              Case Study
            </a>
          )}

          <div
            className="demo-btn-wrapper"
            onMouseEnter={() => !project.isDeployed && setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <button
              className={`project-btn demo-btn ${
                !project.isDeployed ? "disabled" : ""
              }`}
              disabled={!project.isDeployed}
              onClick={() => {
                if (project.isDeployed && project.liveDemoLink) {
                  window.open(
                    project.liveDemoLink,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
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
            </button>
            {showTooltip && !project.isDeployed && (
              <span className="tooltip">Not deployed (GitHub only)</span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
    githubRepo: PropTypes.string.isRequired,
    caseStudyLink: PropTypes.string,
    liveDemoLink: PropTypes.string,
    isDeployed: PropTypes.bool.isRequired,
  }).isRequired,
  isFeatured: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
};

export default function Projects() {
  // Project data with proper structure for engineering case studies
  const projectsData = [
    {
      id: 1,
      title: "BookHaven — Full-Stack Architecture Case Study",
      description:
        "End-to-end library management system exploring authentication workflows, role-based access control, RESTful API design, and MongoDB data modeling for e-commerce applications.",
      techStack: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT Authentication",
        "REST APIs",
        "Tailwind CSS",
      ],
      githubRepo: "https://github.com/JivaniParth/online-book-store-mongodb",
      caseStudyLink:
        "https://github.com/JivaniParth/BookHaven-System-Design-Study",
      liveDemoLink: null,
      isFeatured: true,
      isDeployed: false,
    },
    {
      id: 2,
      title: "BookHaven — Relational vs NoSQL Backend Comparison",
      description:
        "Parallel backend implementations comparing Flask + MySQL against Node.js + MongoDB for the same application, exploring schema design tradeoffs and developer experience.",
      techStack: [
        "React",
        "Python",
        "Flask",
        "MySQL",
        "JWT Authentication",
        "Tailwind CSS",
      ],
      githubRepo: "https://github.com/JivaniParth/online-book-store",
      caseStudyLink: null,
      liveDemoLink: null,
      isFeatured: false,
      isDeployed: false,
    },
  ];

  const featuredProject = projectsData.find((p) => p.isFeatured);
  const otherProjects = projectsData.filter((p) => !p.isFeatured);

  return (
    <div className="container projects-container">
      {/* Page Title */}
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Engineering Projects</h1>
        <p className="subtitle">
          Documented case studies with full source code and architecture
          insights
        </p>
        <p className="projects-note">
          Projects are documented case studies. Full source code and setup
          instructions are available on GitHub.
        </p>
      </motion.div>

      {/* Featured Project Section */}
      {featuredProject && (
        <motion.div
          className="featured-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="section-title">Featured Project</h2>
          <ProjectCard project={featuredProject} isFeatured={true} index={0} />
        </motion.div>
      )}

      {/* Other Projects Section */}
      {otherProjects.length > 0 && (
        <motion.div
          className="other-projects-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="section-title">Additional Projects</h2>
          <div className="projects-grid">
            {otherProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                isFeatured={false}
                index={index + 1}
              />
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
