import { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "../styles/ContactMe.css";

// Initialize EmailJS
emailjs.init("5Zbp-yAz0vv5X7lKq");

function SocialIcon({ url, children }) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon"
      whileHover={{ scale: 1.15, y: -5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {children}
    </motion.a>
  );
}

SocialIcon.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default function Contactme() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [errors, setErrors] = useState({});

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: -50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const formVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.3 },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: i * 0.1 },
    }),
    focus: {
      boxShadow: "0 0 20px rgba(0,123,255,0.5)",
      transition: { duration: 0.3 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.6 },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  const validateField = (name, value) => {
    const trimmed = value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    switch (name) {
      case "name":
        return trimmed ? "" : "Name is required.";
      case "email":
        return emailRegex.test(trimmed) ? "" : "Enter a valid email address (e.g., name@example.com).";
      case "contactNo": {
        const digits = trimmed.replace(/\D/g, "");
        if (!digits) return "Phone number is required.";
        if (digits.length < 7 || digits.length > 15) {
          return "Use 7-15 digits. Include country code if needed.";
        }
        return "";
      }
      case "subject":
        return trimmed ? "" : "Subject is required.";
      case "message":
        return trimmed.length >= 10 ? "" : "Message should be at least 10 characters.";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value, { ...formData, [name]: value });
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = Object.keys(formData).reduce((acc, key) => {
      const err = validateField(key, formData[key], formData);
      if (err) acc[key] = err;
      return acc;
    }, {});

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setSubmitMessage("❌ Please fix the highlighted fields.");
      return;
    }

    setLoading(true);
    setSubmitMessage("");

    try {
      // Send email using EmailJS
      const result = await emailjs.send("service_sej79et", "template_rlpxrqs", {
        name: formData.name,
        email: formData.email,
        contact_number: formData.contactNo,
        title: formData.subject,
        message: formData.message,
        time: new Date().toLocaleString(),
      });

      if (result.status === 200) {
        setSubmitMessage("✅ Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          contactNo: "",
          subject: "",
          message: "",
        });
        setErrors({});
        // Clear message after 3 seconds
        setTimeout(() => setSubmitMessage(""), 3000);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitMessage("❌ Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container">
        <motion.div
          className="flex contact-me-content"
          style={{ display: "flex", alignItems: "center" }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="photo"
            style={{
              width: "50%",
              margin: "clamp(0.5rem, 3vw, 2rem)",
            }}
            variants={imageVariants}
          >
            <motion.img
              src="/laptop-with-program-code.jpg"
              alt="Parth Jivani"
              style={{ width: "100%", borderRadius: "50px" }}
              whileHover="hover"
            />
          </motion.div>
          <motion.div className="name">
            <motion.h1 style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }} variants={itemVariants}>
              Namaste! 🙏
            </motion.h1>
            <motion.h2 variants={itemVariants}>
              I&apos;m{" "}
              <span
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 2.7rem)",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                }}
              >
                Parth Jivani
              </span>
              .
            </motion.h2>
            <motion.p style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }} variants={itemVariants}>
              You can contact me at the places mentioned below.
              <br /> I will try to get back to you as fast as I can.
            </motion.p>
            <motion.div
              className="softwareSkillsIcon"
              style={{ display: "flex", justifyContent: "space-evenly" }}
              variants={itemVariants}
            >
              <SocialIcon url="https://linkedin.com/in/parthsjivani">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 72 72"
                >
                  <rect width="72" height="72" rx="4" fill="#0077B5" />
                  <path
                    d="M13.139 27.848h9.623V58.81h-9.623V27.848zm4.813-15.391c3.077 0 5.577 2.5 5.577 5.577 0 3.08-2.5 5.581-5.577 5.581a5.58 5.58 0 1 1 0-11.158zm10.846 15.39h9.23v4.231h.128c1.283-2.434 4.424-5 9.105-5 9.744 0 11.544 6.413 11.544 14.75V58.81h-9.617V43.753c0-3.59-.066-8.209-5-8.209-5.007 0-5.778 3.911-5.778 7.947V58.81h-9.612V27.848z"
                    fill="#fff"
                  />
                </svg>
              </SocialIcon>
              <SocialIcon url="https://github.com/JivaniParth">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 98 96"
                >
                  <rect width="98" height="96" rx="8" fill="#24292F" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M49 18C32.431 18 19 31.431 19 48c0 13.237 8.588 24.462 20.488 28.426 1.497.276 2.047-.65 2.047-1.442 0-.71-.026-2.594-.041-5.091-8.341 1.813-10.102-4.02-10.102-4.02-1.362-3.458-3.326-4.38-3.326-4.38-2.72-1.859.206-1.821.206-1.821 3.007.212 4.589 3.086 4.589 3.086 2.672 4.578 7.01 3.254 8.72 2.488.272-1.934 1.046-3.255 1.902-4.003-6.653-.756-13.645-3.326-13.645-14.802 0-3.269 1.169-5.94 3.086-8.034-.31-.756-1.338-3.802.293-7.928 0 0 2.516-.806 8.238 3.07a28.53 28.53 0 0 1 7.5-1.008c2.545.012 5.11.343 7.5 1.008 5.716-3.876 8.229-3.07 8.229-3.07 1.634 4.126.605 7.172.296 7.928 1.92 2.094 3.083 4.765 3.083 8.034 0 11.502-7.004 14.038-13.676 14.778 1.074.927 2.032 2.753 2.032 5.546 0 4.003-.036 7.228-.036 8.21 0 .798.538 1.732 2.058 1.44C70.422 72.452 79 61.235 79 48c0-16.569-13.431-30-30-30z"
                    fill="#fff"
                  />
                </svg>
              </SocialIcon>
              <SocialIcon url="mailto:parthjivani1504@gmail.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 48 48"
                >
                  <rect width="48" height="48" rx="8" fill="#fff" />
                  <path
                    fill="#4caf50"
                    d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
                  />
                  <path
                    fill="#1e88e5"
                    d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
                  />
                  <polygon
                    fill="#e53935"
                    points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
                  />
                  <path
                    fill="#c62828"
                    d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
                  />
                  <path
                    fill="#fbc02d"
                    d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
                  />
                </svg>
              </SocialIcon>
              <SocialIcon url="https://wa.me/919712579779">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 45 45"
                >
                  <rect
                    x="0"
                    y="0"
                    width="45"
                    height="45"
                    rx="8"
                    ry="8"
                    fill="#25d366"
                  />
                  <g transform="translate(8.5, 8.5) scale(1.75)">
                    <path
                      fill="#ffffff"
                      d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
                    />
                  </g>
                </svg>
              </SocialIcon>
            </motion.div>
            <motion.div
              className="my-resume"
              style={{ display: "flex", justifyContent: "center" }}
              variants={itemVariants}
            >
              <SocialIcon url="../parth-jivani-resume.pdf">
                <motion.button
                  type="button"
                  className="btn btn-info resumeButton"
                  style={{ 
                    padding: "clamp(10px, 2vw, 15px) clamp(15px, 4vw, 30px)",
                    margin: "clamp(0.5rem, 2vw, 1.5rem) clamp(0.5rem, 2vw, 1rem)",
                    fontWeight: "600",
                    fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  My Resume
                </motion.button>
              </SocialIcon>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className="contact-form"
          style={{ marginTop: "clamp(1rem, 3vw, 2rem)" }}
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3>Contact Me</h3>
          <form className="row g-2" onSubmit={handleSubmit}>
            <motion.div
              className="col-md-4"
              custom={0}
              variants={inputVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <label htmlFor="inputName" className="form-label">
                Name
              </label>
              <motion.input
                type="text"
                className={`form-control ${errors.name ? "has-error" : ""}`}
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                whileFocus="focus"
                variants={inputVariants}
              />
              {errors.name && <p className="error-text">{errors.name}</p>}
            </motion.div>
            <motion.div
              className="col-md-4"
              custom={1}
              variants={inputVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <label htmlFor="inputEmail" className="form-label">
                Email
              </label>
              <motion.input
                type="email"
                className={`form-control ${errors.email ? "has-error" : ""}`}
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                whileFocus="focus"
                variants={inputVariants}
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </motion.div>
            <motion.div
              className="col-md-4"
              custom={2}
              variants={inputVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <label htmlFor="inputContactNo" className="form-label">
                Phone Number
              </label>
              <motion.input
                type="tel"
                className={`form-control ${errors.contactNo ? "has-error" : ""}`}
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Include country code, e.g., +1 9876543210"
                whileFocus="focus"
                variants={inputVariants}
              />
              {errors.contactNo && <p className="error-text">{errors.contactNo}</p>}
            </motion.div>
            <motion.div
              className="col-md-12"
              custom={3}
              variants={inputVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <label htmlFor="inputSubject" className="form-label">
                Subject
              </label>
              <motion.input
                type="text"
                className={`form-control ${errors.subject ? "has-error" : ""}`}
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                whileFocus="focus"
                variants={inputVariants}
              />
              {errors.subject && <p className="error-text">{errors.subject}</p>}
            </motion.div>
            <motion.div
              className="col-12"
              custom={4}
              variants={inputVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <label htmlFor="inputMessage" className="form-label">
                Message
              </label>
              <motion.textarea
                className="form-control"
                rows="3"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                whileFocus="focus"
                variants={inputVariants}
              />
              {errors.message && <p className="error-text">{errors.message}</p>}
            </motion.div>
            {submitMessage && (
              <motion.div
                className="col-12"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  style={{
                    padding: "12px 16px",
                    borderRadius: "8px",
                    backgroundColor: submitMessage.includes("✅")
                      ? "#d4edda"
                      : "#f8d7da",
                    color: submitMessage.includes("✅") ? "#155724" : "#721c24",
                    border: `1px solid ${
                      submitMessage.includes("✅") ? "#c3e6cb" : "#f5c6cb"
                    }`,
                  }}
                >
                  {submitMessage}
                </div>
              </motion.div>
            )}
            <motion.div
              className="col-12"
              variants={buttonVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.button
                type="submit"
                className="btn btn-primary"
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </>
  );
}
