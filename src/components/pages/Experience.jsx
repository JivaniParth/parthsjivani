import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
            marginTop: "40px",
            marginBottom: "40px",
            padding: "40px 70px",
          }}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="schooldetails"
            style={{ margin: "25px", padding: "25px" }}
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
          <motion.div
            className="photo"
            style={{ margin: "25px", padding: "25px" }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img src="/ishitechnolabs.png" alt="Ishi Technolabs" />
          </motion.div>
        </motion.div>
        <motion.div
          className="container flex degree"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "40px",
            marginBottom: "40px",
            padding: "40px 70px",
          }}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="photo"
            style={{ margin: "25px", padding: "25px" }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src="/goldenmace.png" alt="Goldenmace IT Solutions" />
          </motion.div>
          <motion.div
            className="degreedetails"
            style={{ margin: "25px", padding: "25px" }}
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
        </motion.div>
      </div>
    </>
  );
}
