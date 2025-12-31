import { motion } from "framer-motion";
import "../styles/About.css";

// ExpressIcon component
const ExpressIcon = () => {
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

export default function About() {
  // Skills data organized by categories
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        {
          name: "React",
          icon: "fab fa-react",
          color: "#61DAFB",
          description: "Components, hooks, state management",
        },
        {
          name: "HTML5",
          icon: "fab fa-html5",
          color: "#E44D26",
          description: "Semantic markup, forms, multimedia elements",
        },
        {
          name: "CSS3",
          icon: "fab fa-css3-alt",
          color: "#264DE4",
          description: "Styling, animations, responsive design",
        },
        {
          name: "Bootstrap",
          icon: "fab fa-bootstrap",
          color: "#7952B3",
          description: "Responsive layouts, components, utilities",
        },
        {
          name: "JavaScript",
          icon: "fab fa-js",
          color: "#F7DF1E",
          description: "ES6+, DOM manipulation, async programming",
        },
        {
          name: "Responsive Design",
          icon: "fas fa-mobile-alt",
          color: "#38B2AC",
          description: "Mobile-first approach, media queries",
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
          description: "JavaScript runtime, event-driven, non-blocking I/O",
        },
        {
          name: "Express",
          icon: null,
          color: "#000000",
          description: "Minimalist web framework for Node.js, routing, middleware",
          customIcon: ExpressIcon,
        },
        {
          name: "SQL",
          icon: "fas fa-database",
          color: "#4479A1",
          description: "Queries, database design, data manipulation",
        },
      ],
    },
    {
      title: "Tools & Soft Skills",
      skills: [
        {
          name: "Microsoft Word",
          icon: "fas fa-file-word",
          color: "#2b579a",
          description: "Document creation, formatting, collaboration",
        },
        {
          name: "Microsoft Excel",
          icon: "fas fa-file-excel",
          color: "#217346",
          description: "Data analysis, formulas, pivot tables",
        },
        {
          name: "Microsoft PowerPoint",
          icon: "fas fa-file-powerpoint",
          color: "#d24726",
          description: "Presentations, slides, visual storytelling",
        },
        {
          name: "Problem Solving",
          icon: "fas fa-lightbulb",
          color: "#FFA500",
          description: "Analytical thinking, debugging, creative solutions",
        },
        {
          name: "Agile Methodology",
          icon: "fas fa-sync-alt",
          color: "#00CED1",
          description: "Sprint planning, daily standups, iterative development",
        },
        {
          name: "Collaboration",
          icon: "fas fa-users",
          color: "#9370DB",
          description: "Team communication, code reviews, pair programming",
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
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-5">
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
                  <div className="col-md-3 col-sm-6 mb-4" key={index}>
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
                        <motion.h5 className="card-title">{skill.name}</motion.h5>
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
                  I have studied core subjects like ADBMS, Advanced Data
                  Structure, Data Science using Python Programming, Basics of
                  Internet of Things, Advanced Computer Networks, etc in this
                  course.
                </li>
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
                  I have studied core subjects like DBMS, Data Structure, Basics
                  of Artificial Intelligence, Web Development, Computer Networks,
                  etc in this course.
                </li>
                <li>I have secured 7.49 CGPA in this course.</li>
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
                70% in 12<sup>th</sup> Science (Mathematics) • 82.33% in 10<sup>th</sup>
              </h5>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
