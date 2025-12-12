import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import "../styles/Header.css";

export default function Header({ darkMode }) {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="container">
      <header className={`header ${darkMode ? "dark-header" : ""}`}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <motion.div
            className="logo-container"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: "block" }}
            >
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#007bff", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#0056b3", stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <rect
                x="5"
                y="5"
                width="90"
                height="90"
                rx="20"
                fill="url(#logoGradient)"
                stroke={darkMode ? "#ffffff" : "#007bff"}
                strokeWidth="2"
              />
              <text
                x="50"
                y="62"
                fontFamily="'Poppins', sans-serif"
                fontSize="45"
                fontWeight="700"
                fill="#ffffff"
                textAnchor="middle"
              >
                PSJ
              </text>
            </svg>
            <span
              className={`logo-text ${darkMode ? "dark-header-logo" : ""}`}
              style={{ marginLeft: "12px", fontSize: "1.5rem", fontWeight: "600" }}
            >
              parthsjivani
            </span>
          </motion.div>
        </Link>

        <ul className="nav">
          <li className="nav-item">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                to="/"
                className={`nav-link ${pathname === "/" ? "active" : ""}`}
              >
                Home
              </Link>
            </motion.div>
          </li>
          <li className="nav-item">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                to="/education"
                className={`nav-link ${
                  pathname === "/education" ? "active" : ""
                }`}
              >
                Education
              </Link>
            </motion.div>
          </li>
          <li className="nav-item">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                to="/experience"
                className={`nav-link ${
                  pathname === "/experience" ? "active" : ""
                }`}
              >
                Experience
              </Link>
            </motion.div>
          </li>
          <li className="nav-item">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                to="/my-skills"
                className={`nav-link ${
                  pathname === "/my-skills" ? "active" : ""
                }`}
              >
                My Skills
              </Link>
            </motion.div>
          </li>
          <li className="nav-item">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                to="/contact-me"
                className={`nav-link ${
                  pathname === "/contact-me" ? "active" : ""
                }`}
              >
                Contact Me
              </Link>
            </motion.div>
          </li>
        </ul>
      </header>
    </div>
  );
}

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};
