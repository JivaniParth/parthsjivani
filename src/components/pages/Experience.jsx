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
    <>
      <div className="container">
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
            <img src="/ishi_technolabs_logo.png" alt="Ishi Technolabs" />
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
            <h5>Junior ReactJS Developer at</h5>
            <Link
              to="https://ishitechnolabs.com/"
              target="_blank"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <motion.h1
                whileHover={{ color: "#007bff", x: 10 }}
                transition={{ duration: 0.3 }}
              >
                Ishi Technolabs
              </motion.h1>
            </Link>
            <h4>Nov 2024 to July 2025</h4>
            <ul>
              <li>
                Developed and maintained 25+ React.js frontend components for
                production web applications serving 10,000+ active users
              </li>
              <li>
                Refactored 20+ React components to improve performance by 15-20%,
                readability, and long-term maintainability
              </li>
              <li>
                Implemented responsive UI layouts using modern HTML5, CSS, and
                JavaScript (ES6+), reducing mobile layout issues by 30%
              </li>
              <li>
                Integrated frontend components with REST APIs in collaboration
                with backend developers, reducing API integration time by 25%
              </li>
              <li>
                Fixed 50+ cross-browser UI bugs and performance regressions in live
                environments, improving overall user experience
              </li>
              <li>
                Worked within Git-based workflows, pull requests, and team code
                reviews, maintaining 95%+ code review approval rate
              </li>
            </ul>
          </motion.div>
        </motion.div>
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
            <h3>From Jan 2024 to Aug 2024</h3>
            <ul>
              <li>
                Built and shipped production-grade React.js components used in
                client-facing web applications
              </li>
              <li>
                Improved UI load performance by 20–30% through component
                refactoring, optimized state handling, and reduced unnecessary
                re-renders
              </li>
              <li>
                Designed and implemented Redux and Context API state structures
                to manage complex UI flows and reduce prop drilling
              </li>
              <li>
                Collaborated with designers and backend developers to translate
                business requirements into scalable frontend solutions
              </li>
              <li>
                Resolved high-priority UI bugs and regressions, improving UX
                stability post-release
              </li>
              <li>
                Worked within an established React codebase using Hooks, React
                Router, npm, and ES6+ standards
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
            <img src="/goldenmace_it_solutions_logo.png" alt="Goldenmace IT Solutions" />
          </motion.div>
        </motion.div>
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
            <img src="/ishi_technolabs_logo.png" alt="Ishi Technolabs" />
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
            <h5>Web Development Intern at</h5>
            <Link
              to="https://ishitechnolabs.com/"
              target="_blank"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <motion.h1
                whileHover={{ color: "#007bff", x: 10 }}
                transition={{ duration: 0.3 }}
              >
                Ishi Technolabs
              </motion.h1>
            </Link>
            <h4>June 2023 to July 2023</h4>
            <ul>
              <li>
                Built responsive web pages using HTML, CSS, and JavaScript
              </li>
              <li>
                Assisted in developing and modifying React-based UI components
              </li>
              <li>
                Debugged layout, styling, and interaction issues across browsers
                and devices
              </li>
              <li>
                Used Git workflows and task tracking to deliver features on
                deadlines
              </li>
              <li>
                Strengthened frontend fundamentals and clean coding practices in
                a professional setting
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
