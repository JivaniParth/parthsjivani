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
      width="3em"
      height="3em"
      viewBox="0 -6 256 256"
      preserveAspectRatio="xMidYMid"
    >
      <path
        d="M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z"
        fill="#764ABC"
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
      <path fill="#ffffff" d="M37.59 0L75.18 65H0L37.59 0z" />
    </svg>
  );
};

export const RenderIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24"
    width="64"
    height="64"
    style={{ display: "block", margin: "0 auto" }}
    >
      <path fill="#ffffff" d="M18.263.007c-3.121-.147-5.744 2.109-6.192 5.082-.018.138-.045.272-.067.405-.696 3.703-3.936 6.507-7.827 6.507a7.9 7.9 0 0 1-3.825-.979.202.202 0 0 0-.302.178V24H12v-8.999c0-1.656 1.338-3 2.987-3h2.988c3.382 0 6.103-2.817 5.97-6.244-.12-3.084-2.61-5.603-5.682-5.75" />
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
            <motion.h2 className="section-title" variants={educationItemVariants}>
              Education
            </motion.h2>
            <motion.p className="lead" variants={educationItemVariants}>
              Qualifications I have achieved
            </motion.p>
          </motion.div>

          {/* Timeline */}
          <div className="education-timeline">

            {/* Master's Degree */}
            <motion.div
              className="edu-card"
              variants={educationItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="edu-logo">
                <motion.img
                  src="/new-nuv.png"
                  alt="Navrachana University"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="edu-details">
                <h5>Pursuing Master&apos;s Degree from</h5>
                <h1>Navrachana University</h1>
                <h3>Master of Technology in Computer Science and Engineering</h3>
                <h5 className="date">August 2025 - Present</h5>
                <ul>
                  <li>
                    Pursuing M.Tech in CSE with focus on scalable systems, advanced data
                    structures, backend architecture, and full-stack application development.
                  </li>
                  <li>
                    Currently exploring system design concepts, database optimization, and
                    scalable MERN stack application workflows.
                  </li>
                  <li>Current CGPA: <strong style={{ color: "var(--accent-teal)" }}>8.72</strong></li>
                </ul>
              </div>
            </motion.div>

            {/* Bachelor's Degree */}
            <motion.div
              className="edu-card"
              variants={educationItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="edu-logo">
                <motion.img
                  src="/college.png"
                  alt="Shantilal Shah Engineering College"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="edu-details">
                <h5>Bachelor&apos;s Degree from</h5>
                <h1>Shantilal Shah Engineering College</h1>
                <h3>Bachelor of Engineering in Information Technology</h3>
                <h5 className="date">August 2020 - May 2024</h5>
                <ul>
                  <li>
                    Studied core computer science subjects including DBMS, Data Structures,
                    Computer Networks, Web Development, and AI fundamentals.
                  </li>
                  <li>
                    Built foundational frontend and full-stack development skills through
                    academic and self-driven projects.
                  </li>
                  <li>Graduated with CGPA: <strong style={{ color: "var(--accent-violet)" }}>7.49</strong></li>
                </ul>
              </div>
            </motion.div>

            {/* School */}
            <motion.div
              className="edu-card"
              variants={educationItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="edu-details" style={{ textAlign: "center", width: "100%" }}>
                <h5>Secondary &amp; Higher Secondary School</h5>
                <h1>Advait Vidhyaniketan</h1>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "0.5rem" }}>
                  70% in 12<sup>th</sup> Science (Mathematics) &nbsp;•&nbsp; 82.33% in 10<sup>th</sup>
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}
