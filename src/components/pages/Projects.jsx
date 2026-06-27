import { motion } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/Projects.css";

/* ======================================================
   PUBLICATION CARD COMPONENT
   ====================================================== */
const PublicationCard = () => (
  <motion.div
    className="pub-card"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    whileHover={{ y: -6, transition: { duration: 0.3 } }}
  >
    {/* Header badge */}
    <div className="pub-card-header">
      <span className="pub-type-badge">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z"/>
        </svg>
        Research Paper
      </span>
      <span className="pub-date-badge">Publication date: Jun 15, 2026</span>
    </div>

    {/* Title */}
    <h3 className="pub-title">
      An Ethical AI Architectural Framework for Resilient Healthcare Supply
      Chains: Integrating AI and Inventory Analytics for Community Based
      Equitable Access
    </h3>

    {/* Journal / Publisher */}
    <div className="pub-meta">
      <div className="pub-meta-row">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        </svg>
        <span>
          <strong>Law, Ethics and Policy in Healthcare</strong>
          &nbsp;— Navrachana University, Vadodara
        </span>
      </div>

      <div className="pub-meta-row">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
        </svg>
        <span>ISBN: <strong>978-81-971455-6-8</strong></span>
      </div>

      <div className="pub-meta-row">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
        <span>
          Edited by Dr. Sujatha Patil, Dr. Chandrika Tewatia Raj &amp; Ms. Nidhi Jain
        </span>
      </div>

      <div className="pub-meta-row">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
        </svg>
        <span>Pages <strong>263–278</strong></span>
      </div>
    </div>

    {/* Description */}
    <p className="pub-description">
      Research paper published in the peer-reviewed proceedings of the
      conference <em>Law, Ethics and Policy in Healthcare</em> (ISBN: 978-81-971455-6-8),
      edited by Dr. Sujatha Patil, Dr. Chandrika Tewatia Raj, and Ms. Nidhi Jain.
      The paper proposes an ethical AI architectural framework for building
      resilient and equitable healthcare supply chains, integrating AI-driven
      inventory analytics to promote community-based equitable access.
    </p>

    {/* Authors */}
    <div className="pub-authors">
      <span className="pub-authors-label">Authors</span>
      <div className="pub-author-chips">
        <a
          href="https://www.linkedin.com/in/parthsjivani/"
          target="_blank"
          rel="noopener noreferrer"
          className="pub-author-chip self"
          title="Parth Jivani — LinkedIn"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: "4px", verticalAlign: "middle" }}>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
          </svg>
          Parth Jivani
        </a>
        <a
          href="https://www.linkedin.com/in/dr-yogesh-r-chaudhari-a08691345/"
          target="_blank"
          rel="noopener noreferrer"
          className="pub-author-chip"
          title="Dr. Yogesh Chaudhari — LinkedIn"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: "4px", verticalAlign: "middle" }}>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
          </svg>
          Dr. Yogesh Chaudhari
        </a>
      </div>
    </div>

    {/* Actions */}
    <div className="pub-actions">
      <a
        href="/Law, Ethics and Policy in Healthcare.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="pub-btn pub-btn-primary"
        title="Open conference proceedings PDF"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
        Read Paper (PDF)
      </a>
      <a
        href="https://www.linkedin.com/in/parthsjivani/"
        target="_blank"
        rel="noopener noreferrer"
        className="pub-btn pub-btn-secondary"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
        </svg>
        View on LinkedIn
      </a>
    </div>
  </motion.div>
);

/* ======================================================
   PROJECT CARD COMPONENT
   ====================================================== */
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
      {isFeatured && <span className="featured-badge">⭐ Featured</span>}
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        {/* Tech Stack Badges */}
        <div className="tech-stack">
          {project.techStack.map((tech) => (
            <span key={tech} className="tech-badge">{tech}</span>
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
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
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
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              Case Study
            </a>
          )}

          <div className="demo-btn-wrapper">
            {project.apkLink ? (
              <a
                href={project.apkLink}
                download
                className="project-btn demo-btn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download APK
              </a>
            ) : (
              <button
                className={`project-btn demo-btn ${project.isDeployed ? "" : "disabled"}`}
                disabled={!project.isDeployed}
                onMouseEnter={() => project.isDeployed && setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                onFocus={() => project.isDeployed && setShowTooltip(true)}
                onBlur={() => setShowTooltip(false)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setShowTooltip(false);
                  if ((e.key === "Enter" || e.key === " ") && project.isDeployed) {
                    e.preventDefault();
                    setShowTooltip((s) => !s);
                  }
                }}
                onClick={() => {
                  if (project.isDeployed && project.liveDemoLink) {
                    window.open(project.liveDemoLink, "_blank", "noopener,noreferrer");
                  }
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Live Demo
              </button>
            )}
          </div>
          {showTooltip && !project.isDeployed && (
            <span className="tooltip">Not deployed (GitHub only)</span>
          )}
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
    apkLink: PropTypes.string,
    isDeployed: PropTypes.bool.isRequired,
  }).isRequired,
  isFeatured: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
};

/* ======================================================
   MAIN PROJECTS PAGE
   ====================================================== */
export default function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "BookHaven — Full-Stack Library Management System",
      description:
        "Full-stack MERN application built for academic research and system design exploration. Implemented authentication workflows, role-based access control, RESTful APIs, and MongoDB-based data modeling for scalable bookstore and library management operations.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Authentication", "REST APIs", "Tailwind CSS"],
      githubRepo: "https://github.com/JivaniParth/online-book-store",
      caseStudyLink: "https://github.com/JivaniParth/BookHaven-System-Design-Study",
      liveDemoLink: null,
      apkLink: null,
      isFeatured: false,
      isDeployed: false,
    },
    {
      id: 5,
      title: "Hisab & Expense Tracker — Android Native App",
      description:
        "A feature-rich native Android application for personal finance management. Features Jetpack Compose UI, Room database for offline-first local storage, and Supabase backend with Row-Level Security (RLS) for cloud synchronization.",
      techStack: ["Kotlin", "Jetpack Compose", "Android Room", "Supabase", "REST API", "Coroutines"],
      githubRepo: "https://github.com/JivaniParth/Hisab-and-Expense-Tracker",
      caseStudyLink: null,
      liveDemoLink: null,
      apkLink: "/hisab-tracker.apk",
      isFeatured: true,
      isDeployed: true,
    },
    {
      id: 2,
      title: "BookHaven — Relational vs NoSQL Backend Comparison",
      description:
        "Comparative backend architecture study implementing the same application using Flask + MySQL and Node.js + MongoDB to analyze schema design tradeoffs, scalability considerations, and developer workflow differences.",
      techStack: ["React.js", "Python", "Flask", "MySQL", "Node.js", "MongoDB", "JWT Authentication", "Tailwind CSS"],
      githubRepo: "https://github.com/JivaniParth/online-book-store-mongodb",
      caseStudyLink: null,
      liveDemoLink: null,
      isFeatured: false,
      isDeployed: false,
    },
    {
      id: 3,
      title: "Aradhya Gems — MERN E-commerce Platform",
      description:
        "Developed and deployed a full-stack MERN e-commerce platform for a jewelry business client featuring JWT authentication, role-based access control, inventory management, wishlist, cart functionality, and order tracking. Frontend deployed on Vercel, backend hosted on Render, and database managed using MongoDB Atlas.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "MongoDB Atlas", "JWT Authentication", "REST APIs", "Tailwind CSS", "Vercel", "Render"],
      githubRepo: "https://github.com/JivaniParth/aradhya-gems",
      caseStudyLink: null,
      liveDemoLink: "https://aradhyagems.in/",
      isFeatured: false,
      isDeployed: true,
    },
    {
      id: 4,
      title: "Madhay Construction — Corporate Frontend Website",
      description:
        "Developed a responsive corporate website frontend using React.js and Tailwind CSS with focus on clean UI structure, SEO-friendly architecture, and mobile-first design principles. Project structure and frontend skeleton completed for client requirements.",
      techStack: ["React.js", "Tailwind CSS", "Responsive Design", "SEO Optimization"],
      githubRepo: "https://github.com/JivaniParth/madhay-construction",
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

      {/* ── Page Header ── */}
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">Portfolio</span>
        <h1>Projects &amp; Research</h1>
        <p className="subtitle">
          Published research, engineering case studies, and full-stack applications
        </p>
      </motion.div>

      {/* ══════════════════════════════════════
          PUBLICATIONS SECTION
          ══════════════════════════════════════ */}
      <motion.div
        className="publications-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <div className="pub-section-header">
          <h2 className="section-title pub-section-title">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ verticalAlign: "middle", marginRight: "0.5rem" }}>
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
            </svg>
            Publications
          </h2>
          <p className="pub-section-desc">
            Peer-reviewed research published in academic conference proceedings
          </p>
        </div>

        <PublicationCard />
      </motion.div>

      {/* Divider */}
      <div className="section-divider">
        <span>Engineering Projects</span>
      </div>

      {/* ══════════════════════════════════════
          FEATURED PROJECT
          ══════════════════════════════════════ */}
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

      {/* ══════════════════════════════════════
          OTHER PROJECTS
          ══════════════════════════════════════ */}
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
