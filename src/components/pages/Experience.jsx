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
            className="photo exp-photo-1"
            style={{ 
              margin: "clamp(0.5rem, 2vw, 1.5rem)", 
              padding: "clamp(0.5rem, 2vw, 1.5rem)" 
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img src="/ishitechnolabs.png" alt="Ishi Technolabs" />
          </motion.div>
          <motion.div
            className="schooldetails"
            style={{ 
              margin: "clamp(0.5rem, 2vw, 1.5rem)", 
              padding: "clamp(0.5rem, 2vw, 1.5rem)" 
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h5>Junior ReactJS Developer in</h5>
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
            <p>
              Responsible for building and maintaining scalable React
              applications. Collaborating with cross-functional teams to develop
              high-quality UI/UX solutions while optimizing performance and user
              experience.
            </p>
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
              padding: "clamp(0.5rem, 2vw, 1.5rem)" 
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h5>ReactJS Intern in</h5>
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
            <p>
              Gained hands-on experience in developing dynamic web applications
              using ReactJS. Worked on real-world projects, enhancing skills in
              front-end development, state management, and API integration.
            </p>
          </motion.div>
          <motion.div
            className="photo exp-photo-2"
            style={{ 
              margin: "clamp(0.5rem, 2vw, 1.5rem)", 
              padding: "clamp(0.5rem, 2vw, 1.5rem)" 
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src="/goldenmace.png" alt="Goldenmace IT Solutions" />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
