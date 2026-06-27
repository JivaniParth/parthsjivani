import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import "../styles/Header.css";

/* ── Sun icon ── */
const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

/* ── Moon icon ── */
const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

export default function Header({ darkMode, toggleDarkMode }) {
  const location = useLocation();
  const { pathname } = location;
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection — trigger pill shape after 80px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-locked");
    } else {
      document.body.classList.remove("menu-locked");
    }
    return () => document.body.classList.remove("menu-locked");
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => setMenuOpen(false), [pathname]);

  const NavLink = ({ to, label }) => (
    <motion.div
      style={{ width: "100%" }}
      whileHover={{ scale: 1.05, y: -1 }}
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
    <div className={`header-wrapper ${scrolled ? "pill-mode" : ""} ${menuOpen ? "menu-open" : ""}`}>
      <header className={`header ${menuOpen ? "menu-open" : ""} ${scrolled ? "scrolled" : ""}`}>
        <div className="header-top-bar">
          {/* Logo */}
          <Link to="/" className="logo-link" style={{ textDecoration: "none" }} aria-label="Parth Jivani - Home">
            <motion.div
              className="logo-container"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 500, damping: 15 }}
            >
              <svg width="36" height="36" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
                <defs>
                  <linearGradient id="psjGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--accent-teal)" />
                    <stop offset="100%" stopColor="var(--accent-violet)" />
                  </linearGradient>
                </defs>
                {/* Code Bracket "<" */}
                <path d="M 40 60 L 15 100 L 40 140" fill="none" stroke="var(--accent-teal)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                {/* Code Bracket ">" */}
                <path d="M 170 60 L 195 100 L 170 140" fill="none" stroke="var(--accent-violet)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                
                {/* PSJ Original Monogram */}
                <g fill="none" stroke="url(#psjGrad)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
                  {/* P */}
                  <path d="M60 50 V150 M60 50 H95 Q120 50 120 80 Q120 110 95 110 H60"/>
                  {/* S */}
                  <path d="M90 60 H120 Q135 60 135 80 Q135 100 120 100 H100 Q85 100 85 120 Q85 140 100 140 H130"/>
                  {/* J */}
                  <path d="M150 50 V125 Q150 150 125 150"/>
                </g>

                {/* Neural Nodes */}
                <circle cx="120" cy="100" r="4" fill="var(--accent-teal)"/>
                <circle cx="100" cy="140" r="4" fill="var(--accent-violet)"/>
                <circle cx="15" cy="100" r="4" fill="var(--accent-teal)"/>
                <circle cx="195" cy="100" r="4" fill="var(--accent-violet)"/>
              </svg>
              <span className="logo-text">parthsjivani</span>
            </motion.div>
          </Link>

          {/* Right side controls */}
          <div className="header-controls">
            {/* Dark/Light toggle */}
            <motion.button
              className="theme-toggle"
              onClick={toggleDarkMode}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title={darkMode ? "Light mode" : "Dark mode"}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={darkMode ? "moon" : "sun"}
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  {darkMode ? <SunIcon /> : <MoonIcon />}
                </motion.span>
              </AnimatePresence>
            </motion.button>

            {/* Hamburger */}
            <button
              className="hamburger"
              aria-label="Toggle navigation"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className={`bar ${menuOpen ? "open" : ""}`}></span>
              <span className={`bar ${menuOpen ? "open" : ""}`}></span>
              <span className={`bar ${menuOpen ? "open" : ""}`}></span>
            </button>
          </div>
        </div>

        {/* Desktop Nav */}
        <ul className={`nav ${menuOpen ? "nav-open" : ""}`}>
          <li className="nav-item"><NavLink to="/" label="Home" /></li>
          <li className="nav-item"><NavLink to="/about" label="About" /></li>
          <li className="nav-item"><NavLink to="/experience" label="Experience" /></li>
          <li className="nav-item"><NavLink to="/projects" label="Projects" /></li>
          <li className="nav-item"><NavLink to="/contact-me" label="Contact Me" /></li>
        </ul>
      </header>
    </div>
  );
}

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};
