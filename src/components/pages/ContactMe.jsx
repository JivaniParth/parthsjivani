import { useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { parsePhoneNumberWithError, isValidPhoneNumber } from "libphonenumber-js";
import "../styles/ContactMe.css";

emailjs.init("5Zbp-yAz0vv5X7lKq");

/* ── Contact info card items ── */
const CONTACT_ITEMS = [
  {
    id: "email",
    label: "Email",
    value: "parthjivani1504@gmail.com",
    href: "mailto:parthjivani1504@gmail.com",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/parthsjivani",
    href: "https://linkedin.com/in/parthsjivani",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/JivaniParth",
    href: "https://github.com/JivaniParth",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "+91 97125 79779",
    href: "https://wa.me/919712579779",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
];

/* ── Social chip component ── */
function SocialChip({ item }) {
  return (
    <motion.a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="contact-info-chip"
      whileHover={{ x: 4 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <span className="chip-icon">{item.icon}</span>
      <div className="chip-text">
        <span className="chip-label">{item.label}</span>
        <span className="chip-value">{item.value}</span>
      </div>
      <svg className="chip-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
      </svg>
    </motion.a>
  );
}
SocialChip.propTypes = { item: PropTypes.object.isRequired };

/* ── Validation helpers (unchanged) ── */
const countryNames = { US:"United States", IN:"India", GB:"United Kingdom", CA:"Canada", AU:"Australia", DE:"Germany", FR:"France", IT:"Italy", ES:"Spain", JP:"Japan", CN:"China", BR:"Brazil", MX:"Mexico", RU:"Russia" };

function validatePhoneNumber(value, phoneCountry) {
  if (!value || value.trim() === "") return "";
  const phoneWithPlus = value.startsWith("+") ? value : `+${value}`;
  try {
    if (!isValidPhoneNumber(phoneWithPlus)) {
      const countryName = countryNames[phoneCountry.toUpperCase()] || phoneCountry.toUpperCase();
      return `Invalid phone number for ${countryName}`;
    }
    const phoneNumber = parsePhoneNumberWithError(phoneWithPlus);
    if (!phoneNumber?.isValid()) return "Please enter a complete phone number";
    return "";
  } catch (error) {
    return `Please enter a valid phone number ${error.message || ""}`;
  }
}

function validateField(name, value, phoneCountry) {
  const trimmed = value.trim();
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  switch (name) {
    case "name":
      if (!trimmed) return "Name is required";
      if (trimmed.length < 2) return "Name must be at least 2 characters";
      return /^[a-zA-Z\s'-]+$/.test(trimmed) ? "" : "Name can only contain letters, spaces, hyphens, and apostrophes";
    case "email":
      if (!trimmed) return "Email is required";
      return emailRegex.test(trimmed) ? "" : "Please enter a valid email address";
    case "contactNo":
      return validatePhoneNumber(value, phoneCountry);
    case "subject":
      if (!trimmed) return "Subject is required";
      if (trimmed.length < 3) return "Subject must be at least 3 characters";
      if (trimmed.length > 100) return "Subject cannot exceed 100 characters";
      return "";
    case "message":
      if (!trimmed) return "Message is required";
      if (trimmed.length < 10) return "Message must be at least 10 characters";
      if (trimmed.length > 1000) return "Message cannot exceed 1000 characters";
      return "";
    default: return "";
  }
}

/* ═══════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════ */
export default function ContactMe() {
  const [formData, setFormData] = useState({ name: "", email: "", contactNo: "", subject: "", message: "" });
  const [phoneCountry, setPhoneCountry] = useState("us");
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null | "success" | "error"
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const filtered = name === "name" ? value.replace(/[^a-zA-Z\s'-]/g, "") : value;
    setFormData((p) => ({ ...p, [name]: filtered }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: validateField(name, filtered, phoneCountry) }));
  };

  const handlePhoneChange = (value, country) => {
    setFormData((p) => ({ ...p, contactNo: value }));
    setPhoneCountry(country.countryCode);
    if (errors.contactNo) setErrors((p) => ({ ...p, contactNo: validateField("contactNo", value, country.countryCode) }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((p) => ({ ...p, [name]: validateField(name, value, phoneCountry) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = Object.fromEntries(
      Object.entries(formData).map(([k, v]) => [k, validateField(k, v, phoneCountry)]).filter(([, v]) => v)
    );
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);
    setSubmitStatus(null);
    try {
      const result = await emailjs.send("service_sej79et", "template_rlpxrqs", {
        name: formData.name,
        email: formData.email,
        contact_number: formData.contactNo,
        title: formData.subject,
        message: formData.message,
        time: new Date().toLocaleString(),
      });
      if (result.status === 200) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", contactNo: "", subject: "", message: "" });
        setErrors({});
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const hasErrors = Object.values(errors).some(Boolean);

  return (
    <div className="contact-page">
      <div className="container contact-container">

        {/* ── Page Header ── */}
        <motion.div
          className="contact-page-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Get In Touch</span>
          <h1 className="contact-title">Let&apos;s work together</h1>
          <p className="contact-subtitle">
            Whether you have a project in mind, a question, or just want to say hi —
            I&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* ── Two-column layout ── */}
        <div className="contact-grid">

          {/* LEFT — Info panel */}
          <motion.aside
            className="contact-info-panel"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {/* Avatar / intro */}
            <div className="contact-avatar-row">
              <div className="contact-avatar">
                <img src="/parthjivani.jpg" alt="Parth Jivani" />
              </div>
              <div>
                <p className="contact-avatar-name">Parth Jivani</p>
                <p className="contact-avatar-role">Full Stack Developer · AI Researcher</p>
              </div>
            </div>

            <p className="contact-info-tagline">
              I&apos;m currently open to freelance projects, full-time opportunities, and research collaborations. Response time is usually within 24 hours.
            </p>

            {/* Contact chips */}
            <div className="contact-chips-list">
              {CONTACT_ITEMS.map((item) => (
                <SocialChip key={item.id} item={item} />
              ))}
            </div>

            {/* Resume button */}
            <motion.a
              href="/Parth Jivani MERN Stack Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-download-btn"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="12" y1="18" x2="12" y2="12"/>
                <line x1="9" y1="15" x2="15" y2="15"/>
              </svg>
              Download Resume (PDF)
            </motion.a>
          </motion.aside>

          {/* RIGHT — Contact form */}
          <motion.div
            className="contact-form-panel"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <h2 className="form-panel-title">Send a Message</h2>
            <p className="form-panel-sub">Fill in the form below and I&apos;ll get back to you as soon as possible.</p>

            <form className="contact-form-grid" onSubmit={handleSubmit} noValidate>

              {/* Row 1: Name + Email */}
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label-styled" htmlFor="c-name">Full Name *</label>
                  <motion.input
                    id="c-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="John Doe"
                    className={`form-input ${errors.name ? "input-error" : ""}`}
                    whileFocus={{ borderColor: "var(--accent-teal)", boxShadow: "0 0 0 3px rgba(0,200,215,0.12)" }}
                  />
                  {errors.name && <p className="field-error">⚠ {errors.name}</p>}
                </div>
                <div className="form-group">
                  <label className="form-label-styled" htmlFor="c-email">Email Address *</label>
                  <motion.input
                    id="c-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="john@example.com"
                    className={`form-input ${errors.email ? "input-error" : ""}`}
                    whileFocus={{ borderColor: "var(--accent-teal)", boxShadow: "0 0 0 3px rgba(0,200,215,0.12)" }}
                  />
                  {errors.email && <p className="field-error">⚠ {errors.email}</p>}
                </div>
              </div>

              {/* Row 2: Phone + Subject */}
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label-styled">Phone Number</label>
                  <div className={`phone-wrapper ${errors.contactNo ? "input-error" : ""}`}>
                    <PhoneInput
                      country="in"
                      value={formData.contactNo}
                      onChange={handlePhoneChange}
                      onBlur={() => handleBlur({ target: { name: "contactNo", value: formData.contactNo } })}
                      enableSearch
                      searchPlaceholder="Search country..."
                      inputProps={{ name: "contactNo" }}
                      containerClass="tel-container"
                      inputClass="tel-input"
                      buttonClass="tel-button"
                      dropdownClass="tel-dropdown"
                    />
                  </div>
                  {errors.contactNo && <p className="field-error">⚠ {errors.contactNo}</p>}
                </div>
                <div className="form-group">
                  <label className="form-label-styled" htmlFor="c-subject">Subject *</label>
                  <motion.input
                    id="c-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Project collaboration..."
                    className={`form-input ${errors.subject ? "input-error" : ""}`}
                    whileFocus={{ borderColor: "var(--accent-teal)", boxShadow: "0 0 0 3px rgba(0,200,215,0.12)" }}
                  />
                  {errors.subject && <p className="field-error">⚠ {errors.subject}</p>}
                </div>
              </div>

              {/* Message */}
              <div className="form-group form-group-full">
                <label className="form-label-styled" htmlFor="c-message">Message *</label>
                <motion.textarea
                  id="c-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={5}
                  placeholder="Tell me about your project, idea, or question..."
                  className={`form-input form-textarea ${errors.message ? "input-error" : ""}`}
                  whileFocus={{ borderColor: "var(--accent-teal)", boxShadow: "0 0 0 3px rgba(0,200,215,0.12)" }}
                />
                <div className="char-count">{formData.message.length}/1000</div>
                {errors.message && <p className="field-error">⚠ {errors.message}</p>}
              </div>

              {/* Status message */}
              <AnimatePresence>
                {submitStatus && (
                  <motion.div
                    className={`submit-status ${submitStatus}`}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    {submitStatus === "success"
                      ? "✅ Message sent successfully! I'll get back to you soon."
                      : "❌ Failed to send message. Please try again or email me directly."}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit */}
              <motion.button
                type="submit"
                className="send-btn"
                disabled={loading || hasErrors}
                whileHover={!loading && !hasErrors ? { scale: 1.03 } : {}}
                whileTap={!loading && !hasErrors ? { scale: 0.97 } : {}}
              >
                {loading ? (
                  <>
                    <span className="btn-spinner" />
                    Sending...
                  </>
                ) : (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                    Send Message
                  </>
                )}
              </motion.button>

            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
