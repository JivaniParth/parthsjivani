import { motion } from "framer-motion";
import "../styles/Myskills.css";

const ExpressIcon = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="64"
        height="64"
        style={{ display: "block", margin: "0 auto" }}
      >
        <path d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z" />
      </svg>
    </>
  );
};

const MySkills = () => {
  const skills = [
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
      name: "JavaScript",
      icon: "fab fa-js",
      color: "#F7DF1E",
      description: "ES6+, DOM manipulation, async programming",
    },
    {
      name: "Bootstrap",
      icon: "fab fa-bootstrap",
      color: "#7952B3",
      description: "Responsive layouts, components, utilities",
    },
    {
      name: "React",
      icon: "fab fa-react",
      color: "#61DAFB",
      description: "Components, hooks, state management",
    },
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
    {
      name: "Responsive Design",
      icon: "fas fa-mobile-alt",
      color: "#38B2AC",
      description: "Mobile-first approach, media queries",
    },
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
  ];

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

  return (
    <div className="container py-5">
      <motion.div
        className="text-center mb-5 skills-content"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h1 variants={itemVariants}>My Skills</motion.h1>
        <motion.p className="lead" variants={itemVariants}>
          Technologies and tools I work with
        </motion.p>
      </motion.div>

      <motion.div
        className="row"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {skills.map((skill, index) => (
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
                  <div
                    style={{ marginBottom: "12px" }}
                    >
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
  );
};

export default MySkills;
