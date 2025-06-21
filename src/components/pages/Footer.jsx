import { Link } from "react-router-dom";
import "../styles/Footer.css";

export default function Footer({ darkMode }) {
  return (
    <div className="footer-container">
      <footer className={`footer ${darkMode ? "dark-footer" : ""}`}>
        <div className="footer-content">
          <Link to="/" className="footer-link">
            <span className={`footer-text ${darkMode ? "dark-footer" : ""}`}>
              Made by <span className="footer-author">Parth Jivani</span>
            </span>
          </Link>
        </div>
      </footer>
    </div>
  );
}
