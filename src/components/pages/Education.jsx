import { motion } from "framer-motion";
import "../styles/Education.css";

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
};

export default function Education() {
  return (
    <>
      <div className="container">
        <motion.div
          className="container flex masters-degree"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
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
            className="photo degree-photo-1"
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
            <img src="/new-nuv.png" alt="NUV" />
          </motion.div>
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
            <h5>Pursuing Master&apos;s Degree from</h5>
            <h1>Navrachana University</h1>
            <h3>Master of Technology in Computer Science and Engineering</h3>
            <h5>August 2025 to Present</h5>
            <ul>
              <li>
                I have studied core subjects like ADBMS, Advanced Data
                Structure, Data Science using Python Programming, Basics of
                Internet of Things, Advanced Computer Networks, etc in this
                course.
              </li>
              <li>I have secured 8.86 CGPA in this course.</li>
            </ul>
          </motion.div>
        </motion.div>
        <motion.div
          className="container flex degree"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
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
            <h5>Bachelor&apos;s Degree done in</h5>
            <h1>Shantilal Shah Engineering College</h1>
            <h3>Bachelor of Engineering in Information Technology</h3>
            <h5>August 2020 to May 2024</h5>
            <ul>
              <li>
                I have studied core subjects like DBMS, Data Structure, Basics
                of Artificial Intelligence, Web Development, Computer Networks,
                etc in this course.
              </li>
              <li>I have secured 7.49 CGPA in this course.</li>
            </ul>
          </motion.div>
          <motion.div
            className="photo degree-photo-2"
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
            <img src="/college.png" alt="SSEC" />
          </motion.div>
        </motion.div>
        <motion.div
          className="container flex school"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
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
            className="photo degree-photo-3"
            style={{
              width: "71%",
              margin: "clamp(0.5rem, 2vw, 1.5rem)",
              padding: "clamp(0.5rem, 2vw, 1.5rem)",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="/logo-Advait-768x197.png"
              alt="Advait Vidhyaniketan"
              style={{ width: "100%" }}
            />
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
            <h5>Secondary and Higher Secondary School done in</h5>
            <h1>Advait Vidhyaniketan, Bharuch</h1>
            <h5>Secondary Edu.: June 2016 to March 2018</h5>
            <h5>Higher Sec. Edu.: June 2018 to March 2020</h5>
            <h4>
              With 70% in 12<sup>th</sup> {"("}Science{")"} and 82.33% in 10
              <sup>th</sup>.
            </h4>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
