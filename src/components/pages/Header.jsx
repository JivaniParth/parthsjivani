import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";

export default function Header({ darkMode }) {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="container">
      <header className={`header ${darkMode ? "dark-header" : ""}`}>
        <h2 className={`logo-text ${darkMode ? "dark-header-logo" : ""}`}>
          {" "}
          parthsjivani{" "}
        </h2>

        <ul className="nav">
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link ${pathname === "/" ? "active" : ""}`}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/education"
              className={`nav-link ${
                pathname === "/education" ? "active" : ""
              }`}
            >
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/experience"
              className={`nav-link ${
                pathname === "/experience" ? "active" : ""
              }`}
            >
              Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/my-skills"
              className={`nav-link ${
                pathname === "/my-skills" ? "active" : ""
              }`}
            >
              My Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact-me"
              className={`nav-link ${
                pathname === "/contact-me" ? "active" : ""
              }`}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
