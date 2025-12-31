import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "../styles/Header.css";

export default function Header({ darkMode }) {
  const location = useLocation();
  const { pathname } = location;
  const [menuOpen, setMenuOpen] = useState(false);

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

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

  NavLink.propTypes = {
    to: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  };

  return (
    <div className="container">
      <header className={`header ${darkMode ? "dark-header" : ""} ${menuOpen ? "menu-open" : ""}`}>
        <Link to="/" style={{ textDecoration: "none" }} aria-label="Parth Jivani - Home">
          <motion.div
            className="logo-container"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 500, damping: 15 }}
          >
            <img
              src="/logo-psj.svg"
              alt="Parth Jivani logo"
              style={{ display: "block", width: "40px", height: "40px" }}
            />
            <span
              className={`logo-text ${darkMode ? "dark-header-logo" : ""}`}
              style={{
                marginLeft: "12px",
                fontSize: "1.4rem",
                fontWeight: "600",
              }}
            >
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
            <NavLink to="/about" label="About" />
          </li>
          <li className="nav-item">
            <NavLink to="/experience" label="Experience" />
          </li>
          <li className="nav-item">
            <NavLink to="/projects" label="Projects" />
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
