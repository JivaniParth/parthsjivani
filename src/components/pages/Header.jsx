import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useState } from "react";
import "../styles/Header.css";

export default function Header({ darkMode }) {
  const location = useLocation();
  const { pathname } = location;
  const [menuOpen, setMenuOpen] = useState(false);

  const NavLink = ({ to, label }) => (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      onClick={() => setMenuOpen(false)}
    >
      <Link to={to} className={`nav-link ${pathname === to ? "active" : ""}`}>
        {label}
      </Link>
    </motion.div>
  );

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
              width="40"
              height="40"
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
              <rect x="8" y="8" width="84" height="84" rx="18" fill="url(#logoGradient)" stroke={darkMode ? "#ffffff" : "#007bff"} strokeWidth="2" />
              <text x="50" y="62" fontFamily="'Poppins', sans-serif" fontSize="45" fontWeight="700" fill="#ffffff" textAnchor="middle">PJ</text>
            </svg>
            <span className={`logo-text ${darkMode ? "dark-header-logo" : ""}`} style={{ marginLeft: "12px", fontSize: "1.4rem", fontWeight: "600" }}>
              parthsjivani
            </span>
          </motion.div>
        </Link>

        <button
          className="hamburger"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        </button>

        <ul className={`nav ${menuOpen ? "nav-open" : ""}`}>
          <li className="nav-item">
            <NavLink to="/" label="Home" />
          </li>
          <li className="nav-item">
            <NavLink to="/education" label="Education" />
          </li>
          <li className="nav-item">
            <NavLink to="/experience" label="Experience" />
          </li>
          <li className="nav-item">
            <NavLink to="/my-skills" label="My Skills" />
          </li>
          <li className="nav-item">
            <NavLink to="/contact-me" label="Contact Me" />
          </li>
        </ul>
      </header>
    </div>
  );
}

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};
