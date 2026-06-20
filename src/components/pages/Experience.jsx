import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Experience.css";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Experience() {
  return (
    <div className="container experience-page">

      {/* Page Header */}
      <motion.div
        className="experience-page-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">Career</span>
        <h1>Work Experience</h1>
        <p>Professional roles and responsibilities I&apos;ve held</p>
      </motion.div>

      {/* ── Freelance (active role) ── */}
      <motion.div
        className="exp-card active-role"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="exp-logo">
          <img src="/freelance-logo.png" alt="Freelance Developer" />
        </div>

        <div className="exp-details">
          <span className="exp-badge freelance">● Currently Active</span>
          <h5>Freelance MERN Stack Developer</h5>

          <h1>Self-Employed</h1>

          <h4>Nov 2024 – Present</h4>

          <ul>
            <li>
              Developed frontend and full-stack web applications using React.js,
              Node.js, Express.js, and MongoDB.
            </li>
            <li>
              Built and deployed the &ldquo;Aradhya Gems&rdquo; MERN e-commerce platform
              with JWT authentication, role-based access control, inventory
              management, cart functionality, and order workflows.
            </li>
            <li>
              Deployed frontend applications using Vercel and backend services
              using Render with MongoDB Atlas integration.
            </li>
            <li>
              Developed responsive UI components using React.js, JavaScript,
              Tailwind CSS, and REST API integrations.
            </li>
            <li>
              Worked on frontend implementation for client-based business
              websites and portfolio projects.
            </li>
            <li>
              Used Git and GitHub workflows for version control and project
              management.
            </li>
          </ul>
        </div>
      </motion.div>

      {/* ── Internship ── */}
      <motion.div
        className="exp-card"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="exp-logo">
          <img src="/goldenmace_it_solutions_logo.png" alt="Goldenmace IT Solutions" />
        </div>

        <div className="exp-details">
          <span className="exp-badge internship">Internship</span>
          <h5>Frontend Developer Intern at</h5>

          <h1>
            <Link to="https://goldenmace.com/" target="_blank">
              Goldenmace IT Solutions
            </Link>
          </h1>

          <h4>Jan 2024 – Aug 2024</h4>

          <ul>
            <li>
              Developed responsive React.js components and frontend interfaces
              for client-facing web applications.
            </li>
            <li>
              Worked with Redux and Context API for scalable frontend state
              management.
            </li>
            <li>
              Integrated REST APIs and assisted in frontend performance
              optimization.
            </li>
            <li>
              Collaborated with developers using Git/GitHub workflows and Agile
              development practices.
            </li>
            <li>
              Worked within React.js codebases using Hooks, React Router, npm,
              and ES6+ standards.
            </li>
          </ul>
        </div>
      </motion.div>

    </div>
  );
}
