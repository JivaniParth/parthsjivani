import { motion } from "framer-motion";
import PropTypes from "prop-types";
import "../styles/Footer.css";

export default function Footer({ darkMode }) {
  return (
    <div className="footer-container">
      <motion.footer
        className={`footer ${darkMode ? "dark-footer" : ""}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="footer-content">
          <motion.span
            className={`footer-text ${darkMode ? "dark-footer" : ""}`}
            whileHover={{ color: "#007bff" }}
            transition={{ duration: 0.3 }}
          >
            Made by <span className="footer-author">Parth Jivani</span>
          </motion.span>
        </div>
      </motion.footer>
    </div>
  );
}

Footer.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};
