import { motion } from "framer-motion";
import "../styles/About.css";

// ExpressIcon component
export const ExpressIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="64"
      height="64"
      style={{ display: "block", margin: "0 auto" }}
    >
      <path d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z" />
    </svg>
  );
};

export const TailwindIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="64"
      height="64"
      style={{ display: "block", margin: "0 auto" }}
    >
      <path
        fill="#38BDF8"
        d="M24 12c-6.4 0-10.4 3.2-12 9.6 2.4-3.2 5.2-4.4 8.4-3.6 1.8.4 3 1.6 4.4 3.2 2.2 2.4 4.8 5.2 11.2 5.2 6.4 0 10.4-3.2 12-9.6-2.4 3.2-5.2 4.4-8.4 3.6-1.8-.4-3-1.6-4.4-3.2C33 14.8 30.4 12 24 12zm-12 14.4C5.6 26.4 1.6 29.6 0 36c2.4-3.2 5.2-4.4 8.4-3.6 1.8.4 3 1.6 4.4 3.2 2.2 2.4 4.8 5.2 11.2 5.2 6.4 0 10.4-3.2 12-9.6-2.4 3.2-5.2 4.4-8.4 3.6-1.8-.4-3-1.6-4.4-3.2-2.2-2.4-4.8-5.2-11.2-5.2z"
      />
    </svg>
  );
};

export const ReduxIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="64"
      height="64"
      style={{ display: "block", margin: "0 auto" }}
    >
      <path
        fill="#764ABC"
        d="M21.6 21.8c.7 0 1.3.6 1.3 1.3s-.6 1.3-1.3 1.3-1.3-.6-1.3-1.3.6-1.3 1.3-1.3zm-11.2 0c.7 0 1.3.6 1.3 1.3s-.6 1.3-1.3 1.3S9 23.8 9 23.1s.6-1.3 1.4-1.3zm5.6-11.6c4.5 0 8.2 2.2 8.2 5s-3.7 5-8.2 5-8.2-2.2-8.2-5 3.7-5 8.2-5zm0 1.5c-3.5 0-6.4 1.5-6.4 3.5s2.9 3.5 6.4 3.5 6.4-1.5 6.4-3.5-2.9-3.5-6.4-3.5z"
      />
    </svg>
  );
};

export const VercelIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 76 65"
      width="64"
      height="64"
      style={{ display: "block", margin: "0 auto" }}
    >
      <path
        fill="#ffffff"
        d="M37.59 0L75.18 65H0L37.59 0z"
      />
    </svg>
  );
};

export const RenderIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="64"
      height="64"
      style={{ display: "block", margin: "0 auto" }}
    >
      <path
        fill="#46E3B7"
        d="M10 8h12c8 0 14 6 14 14s-6 14-14 14H10V8zm8 8v16h4c4.4 0 8-3.6 8-8s-3.6-8-8-8h-4z"
      />
    </svg>
  );
};

export default function About() {
  // Skills data organized by categories
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        {
          name: "React.js",
          icon: "fab fa-react",
          color: "#61DAFB",
          description:
            "Component-based architecture, hooks, reusable UI systems, state management",
        },
        {
          name: "JavaScript",
          icon: "fab fa-js",
          color: "#F7DF1E",
          description:
            "ES6+, asynchronous programming, API integration, DOM manipulation",
        },
        {
          name: "HTML5",
          icon: "fab fa-html5",
          color: "#E44D26",
          description:
            "Semantic structure, accessibility-focused frontend development",
        },
        {
          name: "CSS3",
          icon: "fab fa-css3-alt",
          color: "#264DE4",
          description:
            "Responsive layouts, animations, modern UI styling techniques",
        },
        {
          name: "Tailwind CSS",
          icon: null,
          color: "#38BDF8",
          description:
            "Utility-first styling, responsive UI development, scalable design systems",
          customIcon: TailwindIcon,
        },
        {
          name: "Redux",
          icon: null,
          color: "#764ABC",
          description:
            "Centralized state management for scalable React applications",
          customIcon: ReduxIcon,
        },
      ],
    },

    {
      title: "Backend & Databases",
      skills: [
        {
          name: "Node.js",
          icon: "fab fa-node-js",
          color: "#339933",
          description: "Backend development, REST APIs, server-side JavaScript",
        },
        {
          name: "Express.js",
          icon: null,
          color: "#000000",
          description:
            "REST API routing, middleware handling, backend architecture",
          customIcon: ExpressIcon,
        },
        {
          name: "MongoDB",
          icon: "fas fa-database",
          color: "#47A248",
          description:
            "NoSQL database modeling, CRUD operations, MongoDB Atlas integration",
        },
        {
          name: "JWT Authentication",
          icon: "fas fa-user-shield",
          color: "#FF6B35",
          description:
            "Authentication workflows, protected routes, role-based access control",
        },
      ],
    },

    {
      title: "Deployment & Tools",
      skills: [
        {
          name: "Git & GitHub",
          icon: "fab fa-github",
          color: "#ffffff",
          description:
            "Version control, collaborative workflows, repository management",
        },
        {
          name: "Vercel",
          icon: null,
          color: "#ffffff",
          description:
            "Frontend deployment and production hosting for React applications",
          customIcon: VercelIcon,
        },
        {
          name: "Render",
          icon: null,
          color: "#46E3B7",
          description: "Backend deployment and cloud-hosted API services",
          customIcon: RenderIcon,
        },
        {
          name: "Responsive Design",
          icon: "fas fa-mobile-alt",
          color: "#38B2AC",
          description:
            "Mobile-first development and cross-device compatibility",
        },
        {
          name: "REST APIs",
          icon: "fas fa-network-wired",
          color: "#00BFFF",
          description:
            "API integration, backend communication, scalable data handling",
        },
        {
          name: "Agile Development",
          icon: "fas fa-sync-alt",
          color: "#00CED1",
          description:
            "Iterative workflows, collaboration, sprint-based development",
        },
      ],
    },
  ];

  // Framer Motion variants for skills
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.08 },
    }),
    hover: {
      y: -10,
      boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
      transition: { duration: 0.3 },
    },
  };

  // Framer Motion variants for education
  const educationItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="about-page">
      {/* Skills Section */}
      <div className="skills-section">
        <div className="container py-5">
          <motion.div
            className="text-center mb-5 skills-content"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h1 variants={itemVariants}>My Skills</motion.h1>
            <motion.p className="lead" variants={itemVariants}>
              Technologies and tools I work with
            </motion.p>
          </motion.div>

          {/* Render skills by category */}
          {skillCategories.map((category) => (
            <div key={category.title} className="mb-5">
              <motion.h3
                className="text-center mb-4 skill-category-title"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {category.title}
              </motion.h3>
              <motion.div
                className="row"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {category.skills.map((skill, index) => (
                  <div
                    className="col-md-3 col-sm-6 mb-4"
                    key={`${category.title}-${skill.name}`}
                  >
                    <motion.div
                      custom={index}
                      variants={cardVariants}
                      whileHover="hover"
                      className="card h-100 border-0 shadow-sm text-center p-4 hover-card"
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      <div className="card-body">
                        {skill.customIcon ? (
                          <div style={{ marginBottom: "12px" }}>
                            <skill.customIcon />
                          </div>
                        ) : (
                          <i
                            className={`${skill.icon} fa-3x mb-3`}
                            style={{ color: skill.color }}
                          ></i>
                        )}
                        <motion.h5 className="card-title">
                          {skill.name}
                        </motion.h5>
                        <motion.p className="card-text small text-muted">
                          {skill.description}
                        </motion.p>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="education-section">
        <div className="container">
          <motion.div
            className="text-center mb-5 education-content"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              className="section-title"
              variants={educationItemVariants}
            >
              Education
            </motion.h2>
            <motion.p className="lead" variants={educationItemVariants}>
              Qualifications I have achieved
            </motion.p>
          </motion.div>

          {/* Master's Degree */}
          <motion.div
            className="container flex masters-degree"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "clamp(5rem, 4vw, 3rem)",
              marginBottom: "clamp(1rem, 4vw, 3rem)",
              padding: "clamp(1rem, 3vw, 2.5rem)",
            }}
            variants={educationItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="photo degree-photo-1"
              style={{
                margin: "clamp(0.5rem, 2vw, 1.5rem)",
                padding: "clamp(0.5rem, 2vw, 1.5rem)",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img src="/new-nuv.png" alt="NUV" />
            </motion.div>
            <motion.div
              className="degreedetails"
              style={{
                margin: "clamp(0.5rem, 2vw, 1.5rem)",
                padding: "clamp(0.5rem, 2vw, 1.5rem)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h5>Pursuing Master&apos;s Degree from</h5>
              <h1>Navrachana University</h1>
              <h3>Master of Technology in Computer Science and Engineering</h3>
              <h5>August 2025 to Present</h5>
              <ul>
                <li>
                  Pursuing M.Tech in Computer Science and Engineering with focus
                  on scalable systems, advanced data structures, backend
                  architecture, and full-stack application development.
                </li>
                <li>
                  Currently exploring system design concepts, database
                  optimization, and scalable MERN stack application workflows.
                </li>
                <li>Current CGPA: 8.86</li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Bachelor's Degree */}
          <motion.div
            className="container flex degree"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "clamp(1rem, 4vw, 3rem)",
              marginBottom: "clamp(1rem, 4vw, 3rem)",
              padding: "clamp(1rem, 3vw, 2.5rem)",
            }}
            variants={educationItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="degreedetails"
              style={{
                margin: "clamp(0.5rem, 2vw, 1.5rem)",
                padding: "clamp(0.5rem, 2vw, 1.5rem)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h5>Bachelor&apos;s Degree done from</h5>
              <h1>Shantilal Shah Engineering College</h1>
              <h3>Bachelor of Engineering in Information Technology</h3>
              <h5>August 2020 to May 2024</h5>
              <ul>
                <li>
                  Studied core computer science subjects including DBMS, Data
                  Structures, Computer Networks, Web Development, and Artificial
                  Intelligence fundamentals.
                </li>
                <li>
                  Built foundational frontend and full-stack development skills
                  through academic and self-driven projects.
                </li>
                <li>Graduated with 7.49 CGPA.</li>
              </ul>
            </motion.div>
            <motion.div
              className="photo degree-photo-2"
              style={{
                margin: "clamp(0.5rem, 2vw, 1.5rem)",
                padding: "clamp(0.5rem, 2vw, 1.5rem)",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img src="/college.png" alt="SSEC" />
            </motion.div>
          </motion.div>

          {/* School - Simplified */}
          <motion.div
            className="container flex school"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "clamp(1rem, 4vw, 3rem)",
              marginBottom: "clamp(1rem, 4vw, 3rem)",
              padding: "clamp(1rem, 3vw, 2rem)",
              opacity: 0.85,
            }}
            variants={educationItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="schooldetails"
              style={{
                margin: "clamp(0.5rem, 2vw, 1rem)",
                padding: "clamp(0.5rem, 2vw, 1rem)",
                textAlign: "center",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h5>Secondary and Higher Secondary School</h5>
              <h3>Advait Vidhyaniketan</h3>
              <h5 style={{ fontSize: "0.95rem", opacity: 0.8 }}>
                70% in 12<sup>th</sup> Science (Mathematics) • 82.33% in 10{" "}
                <sup>th</sup>
              </h5>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
