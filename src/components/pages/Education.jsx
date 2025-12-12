import { motion } from "framer-motion";

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
      <motion.div
        className="container flex degree"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "40px",
          marginBottom: "40px",
          padding: "40px 50px",
        }}
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="degreedetails"
          style={{ margin: "25px", padding: "25px" }}
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
              I have studied core subjects like ADBMS, Advanced Data Structure, Data Science using Python Programming, Basics of
              Internet of Things, Advanced Computer Networks, etc
              in this course.
            </li>
            <li>I have secured 8.86 CGPA in this course.</li>
          </ul>
        </motion.div>
        <motion.div
          className="photo"
          style={{ margin: "25px", padding: "25px" }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src="/new-nuv.png" alt="NUV" />
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
          padding: "40px 50px",
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
          <img src="/college.png" alt="SSEC" />
        </motion.div>
        <motion.div
          className="degreedetails"
          style={{ margin: "25px", padding: "25px" }}
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
              I have studied core subjects like DBMS, Data Structure, Basics of
              Artificial Intelligence, Web Development, Computer Networks, etc
              in this course.
            </li>
            <li>I have secured 7.49 CGPA in this course.</li>
          </ul>
        </motion.div>
      </motion.div>
      <motion.div
        className="container flex school"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "40px",
          marginBottom: "40px",
          padding: "40px 50px",
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
          <h5>Secondary and Higher Secondary School done in</h5>
          <h1>Advait Vidhyaniketan, Bharuch</h1>
          <h5>Secondary Edu.: June 2016 to March 2018</h5>
          <h5>Higher Sec. Edu.: June 2018 to March 2020</h5>
          <h4>
            With 70% in 12<sup>th</sup> {"("}Science{")"} and 82.33% in 10
            <sup>th</sup>.
          </h4>
        </motion.div>
        <motion.div
          className="photo"
          style={{ width: "71%", margin: "25px", padding: "25px" }}
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
      </motion.div>
    </>
  );
}
