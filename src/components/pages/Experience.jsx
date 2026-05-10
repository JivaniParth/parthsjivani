import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Experience.css";

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
};

export default function Experience() {
  return (
    <div className="container">

      {/* Freelance Experience */}
      <motion.div
        className="flex school"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "clamp(5rem, 4vw, 3rem)",
          marginBottom: "clamp(1rem, 4vw, 3rem)",
          padding: "clamp(1rem, 3vw, 2.5rem)",
        }}
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="photo exp-photo-1"
          style={{
            margin: "clamp(0.5rem, 2vw, 1.5rem)",
            padding: "clamp(0.5rem, 2vw, 1.5rem)",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img src="/freelance_logo.png" alt="Freelance Developer" />
        </motion.div>

        <motion.div
          className="schooldetails"
          style={{
            margin: "clamp(0.5rem, 2vw, 1.5rem)",
            padding: "clamp(0.5rem, 2vw, 1.5rem)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h5>Freelance MERN Stack Developer</h5>

          <motion.h1
            whileHover={{ color: "#007bff", x: 10 }}
            transition={{ duration: 0.3 }}
          >
            Self-Employed
          </motion.h1>

          <h4>Nov 2024 – Present</h4>

          <ul>
            <li>
              Developed frontend and full-stack web applications using React.js,
              Node.js, Express.js, and MongoDB.
            </li>

            <li>
              Built and deployed the “Aradhya Gems” MERN e-commerce platform
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
        </motion.div>
      </motion.div>

      {/* Internship */}
      <motion.div
        className="container flex degree"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "clamp(1rem, 4vw, 3rem)",
          marginBottom: "clamp(1rem, 4vw, 3rem)",
          padding: "clamp(1rem, 3vw, 2.5rem)",
        }}
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="degreedetails"
          style={{
            margin: "clamp(0.5rem, 2vw, 1.5rem)",
            padding: "clamp(0.5rem, 2vw, 1.5rem)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h5>Frontend Developer Intern at</h5>

          <Link
            to="https://goldenmace.com/"
            target="_blank"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <motion.h1
              whileHover={{ color: "#007bff", x: 10 }}
              transition={{ duration: 0.3 }}
            >
              Goldenmace IT Solutions
            </motion.h1>
          </Link>

          <h3>Jan 2024 – Aug 2024</h3>

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
        </motion.div>

        <motion.div
          className="photo exp-photo-2"
          style={{
            margin: "clamp(0.5rem, 2vw, 1.5rem)",
            padding: "clamp(0.5rem, 2vw, 1.5rem)",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/goldenmace_it_solutions_logo.png"
            alt="Goldenmace IT Solutions"
          />
        </motion.div>
      </motion.div>

    </div>
  );
}
