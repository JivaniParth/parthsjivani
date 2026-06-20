import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Home.css";

/* ── Animation variants ── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.88, x: -40 },
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.85, ease: "easeOut" } },
};

const skillIconVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, delay: i * 0.07, ease: "backOut" },
  }),
};

/* ── Tech icons data ── */
const techIcons = [
  {
    label: "HTML5",
    color: "rgb(227, 79, 38)",
    path: "M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438zm7.031 9.75l-.232-2.718l10.059.003l.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426l-2.91.804l-2.955-.81l-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443l.744-8.157z",
    viewBox: "0 0 24 24",
  },
  {
    label: "CSS3",
    color: "rgb(21, 114, 182)",
    path: "M275 0h1505l-266 1333l-804 267l-698-267l71-356h297l-29 147l422 161l486-161l68-339H119l58-297h1209l38-191H216z",
    viewBox: "0 0 1792 1600",
  },
  {
    label: "JavaScript",
    color: "rgb(247, 223, 30)",
    bg: "#000",
    path: "M0 0h24v24H0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873c-.736-.345-1.554-.585-1.797-1.14c-.091-.33-.105-.51-.046-.705c.15-.646.915-.84 1.515-.66c.39.12.75.42.976.9c1.034-.676 1.034-.676 1.755-1.125c-.27-.42-.404-.601-.586-.78c-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005c-1.14 1.291-.811 3.541.569 4.471c1.365 1.02 3.361 1.244 3.616 2.205c.24 1.17-.87 1.545-1.966 1.41c-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109c1.74 1.756 6.09 1.666 6.871-1.004c.029-.09.24-.705.074-1.65zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805c0 1.232.063 2.363-.138 2.711c-.33.689-1.18.601-1.566.48c-.396-.196-.597-.466-.83-.855c-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517c.855.51 2.004.675 3.207.405c.783-.226 1.458-.691 1.811-1.411c.51-.93.402-2.07.397-3.346c.012-2.054 0-4.109 0-6.179z",
    viewBox: "0 0 24 24",
  },
  {
    label: "React",
    color: "rgb(97, 218, 251)",
    path: "M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236a2.236 2.236 0 0 1-2.236-2.236a2.236 2.236 0 0 1 2.235-2.236a2.236 2.236 0 0 1 2.236 2.236m2.648-10.69c-1.346 0-3.107.96-4.888 2.622c-1.78-1.653-3.542-2.602-4.887-2.602c-.41 0-.783.093-1.106.278c-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03c-.704 3.113-.39 5.588.988 6.38c.32.187.69.275 1.102.275c1.345 0 3.107-.96 4.888-2.624c1.78 1.654 3.542 2.603 4.887 2.603c.41 0 .783-.09 1.106-.275c1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032c.704-3.11.39-5.587-.988-6.38a2.17 2.17 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127c.666.382.955 1.835.73 3.704c-.054.46-.142.945-.25 1.44a23.5 23.5 0 0 0-3.107-.534A24 24 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28c-.686.72-1.37 1.537-2.02 2.442a23 23 0 0 0-3.113.538a15 15 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707c.19-.09.4-.127.563-.132zm4.882 3.05q.684.704 1.36 1.564c-.44-.02-.89-.034-1.345-.034q-.691-.001-1.36.034c.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093q.61.874 1.183 1.86q.557.961 1.018 1.946c-.308.655-.646 1.31-1.013 1.95c-.38.66-.773 1.288-1.18 1.87a25.6 25.6 0 0 1-4.412.005a27 27 0 0 1-1.183-1.86q-.557-.961-1.018-1.946a25 25 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25 25 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16q-.336.585-.635 1.174c-.265-.656-.49-1.31-.676-1.947c.64-.15 1.315-.283 2.015-.386zm7.26 0q1.044.153 2.006.387c-.18.632-.405 1.282-.66 1.933a26 26 0 0 0-1.345-2.32zm3.063.675q.727.226 1.375.498c1.732.74 2.852 1.708 2.852 2.476c-.005.768-1.125 1.74-2.857 2.475c-.42.18-.88.342-1.355.493a24 24 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23 23 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5c-1.732-.737-2.852-1.706-2.852-2.474s1.12-1.742 2.852-2.476c.42-.18.88-.342 1.356-.494m11.678 4.28c.265.657.49 1.312.676 1.948c-.64.157-1.316.29-2.016.39a26 26 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175q.345.586.705 1.143a22 22 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423c.23 1.868-.054 3.32-.714 3.708c-.147.09-.338.128-.563.128c-1.012 0-2.514-.807-4.11-2.28c.686-.72 1.37-1.536 2.02-2.44c1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532c.66.905 1.345 1.727 2.035 2.446c-1.595 1.483-3.092 2.295-4.11 2.295a1.2 1.2 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703c.054-.46.142-.944.25-1.438zm4.56.64q.661.032 1.345.034q.691.001 1.36-.034c-.44.572-.895 1.095-1.345 1.565q-.684-.706-1.36-1.565",
    viewBox: "0 0 24 24",
  },
  {
    label: "Redux",
    color: "#764ABC",
    path: "M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z",
    viewBox: "0 -6 256 256",
  },
  {
    label: "Node.js",
    color: "#539E43",
    path: "M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505 7.155-2.385 8.48-2.915 15.9-7.156.796-.53 1.856-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.217c1.06-.53 1.59-1.590 1.59-2.914V83.08c0-1.325-.53-2.385-1.59-2.915l-105.74-60.953c-1.06-.53-2.385-.53-3.18 0L20.405 80.166c-1.06.53-1.59 1.855-1.59 2.915v122.17c0 1.06.53 2.385 1.59 2.915l28.887 16.695c15.636 7.95 25.44-1.325 25.44-10.6V93.68c0-1.59 1.326-3.18 3.181-3.18h13.516c1.59 0 3.18 1.326 3.18 3.18v120.58c0 20.936-11.396 33.126-31.272 33.126-6.095 0-10.865 0-24.38-6.625l-27.827-15.9C4.24 220.885 0 213.465 0 205.515V83.346C0 75.396 4.24 67.976 11.13 64L116.87 2.783c6.625-3.71 15.635-3.71 22.26 0L244.87 64C251.76 67.975 256 75.395 256 83.346v122.17c0 7.95-4.24 15.37-11.13 19.345L139.13 286.08c-3.445 1.59-7.42 2.385-11.13 2.385zm32.596-84.009c-46.377 0-55.917-21.2-55.917-39.221 0-1.59 1.325-3.18 3.18-3.18h13.78c1.59 0 2.916 1.06 2.916 2.65 2.12 14.045 8.215 20.936 36.306 20.936 22.26 0 31.802-5.035 31.802-16.96 0-6.891-2.65-11.926-37.367-15.372-28.886-2.915-46.907-9.275-46.907-32.33 0-21.467 18.02-34.187 48.232-34.187 33.921 0 50.617 11.66 52.737 37.101 0 .795-.265 1.59-.795 2.385-.53.53-1.325 1.06-2.12 1.06h-13.78c-1.326 0-2.65-1.06-2.916-2.385-3.18-14.575-11.395-19.345-33.126-19.345-24.38 0-27.296 8.48-27.296 14.84 0 7.686 3.445 10.07 36.306 14.31 32.597 4.24 47.967 10.336 47.967 33.127-.265 23.321-19.345 36.571-53.002 36.571z",
    viewBox: "0 0 256 289",
  },
  {
    label: "MongoDB",
    color: "#47A248",
    isText: true,
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* ── HERO ── */}
      <div className="container">
        <section className="hero-section content">
          <motion.div
            className="hero-inner"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Photo */}
            <motion.div className="hero-photo-wrapper" variants={imageVariants}>
              <motion.img
                src="/parthjivani.jpg"
                alt="Parth Jivani"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Text */}
            <div className="hero-text">
              <motion.div variants={itemVariants}>
                <span className="hero-role-badge">M.Tech · Full Stack Developer · AI Researcher</span>
              </motion.div>

              <motion.h1 className="hero-greeting" variants={itemVariants}>
                Namaste!
              </motion.h1>

              <motion.span className="hero-name" variants={itemVariants}>
                I&apos;m Parth Jivani
              </motion.span>

              <motion.p className="hero-role" variants={itemVariants}>
                <b>Full-Stack Developer</b>&nbsp;— always learning new technologies.
              </motion.p>

              <motion.div className="cta-buttons" variants={itemVariants}>
                <motion.button
                  type="button"
                  id="hero-contact-btn"
                  onClick={() => navigate("/contact-me")}
                  className="btn btn-primary-cta"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                >
                  Contact Me
                </motion.button>
                <motion.button
                  type="button"
                  id="hero-work-btn"
                  onClick={() => navigate("/projects")}
                  className="btn btn-secondary-cta"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                >
                  View My Work
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </div>

      {/* ── WHAT I DO ── */}
      <div className="container">
        <section className="what-i-do-section">
          <motion.div
            className="section-heading-wrapper"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Expertise</span>
            <h2>Here&apos;s what I do</h2>
          </motion.div>

          <motion.div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "clamp(2rem, 5vw, 4rem)",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {/* Skills Icon Grid */}
            <motion.div style={{ flex: "1 1 320px" }}>
              <motion.h3
                style={{
                  textAlign: "center",
                  marginBottom: "2rem",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Web Developing
              </motion.h3>

              <div className="skills-icon-grid">
                {techIcons.map((icon, i) => (
                  <motion.div
                    key={icon.label}
                    className="skill-icon-item"
                    custom={i}
                    variants={skillIconVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -6 }}
                  >
                    {icon.isText ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill={icon.color}
                      >
                        <path d="M17.193 9.555c-1.264-3.928-4.288-5.967-8.428-5.967C4.278 3.588 1.43 6.41 1.43 10.003c0 3.604 2.716 5.967 7.375 5.967 3.52 0 6.39-1.44 7.676-4.235-.636 2.914-3.11 4.715-7.676 4.715-5.24 0-8.644-3.002-8.644-8.15C.161 3.184 4.228 0 9.765 0c5.21 0 8.748 2.99 7.428 9.555zM14.164 3.58c3.293.607 4.89 2.968 4.89 5.914 0 3.77-2.605 5.95-6.396 5.95-2.49 0-4.574-.978-5.774-2.713 1.02 2.1 3.324 3.45 6.44 3.45 3.947 0 6.396-2.262 6.396-6.278 0-3.228-1.918-5.74-5.556-6.323z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox={icon.viewBox}
                        style={{
                          color: icon.color,
                          backgroundColor: icon.bg || "transparent",
                        }}
                        fill="currentColor"
                        aria-label={icon.label}
                      >
                        <path d={icon.path} />
                      </svg>
                    )}
                    <span className="skill-icon-label">{icon.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Illustration */}
            <motion.div
              className="hero-illustration code-illustration-wrap"
              style={{ flex: "1 1 300px" }}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <svg
                viewBox="0 0 800 600"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: "100%", height: "auto" }}
              >
                <defs>
                  <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#020617" />
                    <stop offset="100%" stopColor="#0f3460" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Background — transparent so page bg shows */}
                <rect width="800" height="600" fill="transparent" />

                {/* Laptop outer chassis — always dark */}
                <rect x="150" y="320" width="500" height="260" rx="14" fill="#1a1f2e" />
                <rect x="162" y="332" width="476" height="220" rx="6" fill="url(#screenGrad)" />
                {/* Screen glow border */}
                <rect x="162" y="332" width="476" height="220" rx="6"
                  fill="none" stroke="#00c8d7" strokeWidth="1" strokeOpacity="0.35" />

                {/* Code on screen */}
                <text x="185" y="360" fill="#00c8d7" fontFamily="monospace" fontSize="13" filter="url(#glow)">{'<App className="portfolio">'}</text>
                <text x="205" y="385" fill="#e6edf3" fontFamily="monospace" fontSize="13">{'  <Header />'}</text>
                <text x="205" y="408" fill="#79c0ff" fontFamily="monospace" fontSize="13">{'  <Publications />'}</text>
                <text x="205" y="431" fill="#e6edf3" fontFamily="monospace" fontSize="13">{'  <Projects />'}</text>
                <text x="205" y="454" fill="#e6edf3" fontFamily="monospace" fontSize="13">{'  <Footer />'}</text>
                <text x="185" y="477" fill="#00c8d7" fontFamily="monospace" fontSize="13" filter="url(#glow)">{'</App>'}</text>
                {/* Blinking cursor */}
                <rect x="185" y="360" width="8" height="130" fill="#00c8d7" opacity="0.6">
                  <animate attributeName="opacity" values="0.6;0.1;0.6" dur="1.2s" repeatCount="indefinite" />
                </rect>

                {/* Title — dark in light mode, light in dark mode */}
                <text x="400" y="80" fill="currentColor" fontFamily="Poppins, Arial" fontSize="28"
                  fontWeight="bold" textAnchor="middle" className="svg-title-text">Full Stack Development</text>
                <text x="400" y="110" fill="#7c6af7" fontFamily="Arial" fontSize="16" textAnchor="middle">
                  Frontend · Backend · Database
                </text>

                {/* Floating tech badge pills */}
                {[
                  { x: 95, y: 220, label: "React", color: "#61DAFB" },
                  { x: 655, y: 200, label: "Node.js", color: "#539E43" },
                  { x: 95, y: 380, label: "MongoDB", color: "#47A248" },
                  { x: 655, y: 360, label: "Express", color: "#7c6af7" },
                  { x: 355, y: 155, label: "REST API", color: "#00c8d7" },
                ].map(({ x, y, label, color }) => (
                  <g key={label} transform={`translate(${x}, ${y})`}>
                    <rect x="-30" y="-14" width="80" height="28" rx="14"
                      fill={color + "22"} stroke={color} strokeWidth="1" strokeOpacity="0.6" />
                    <text x="10" y="5" fill={color} fontFamily="monospace" fontSize="11"
                      textAnchor="middle" fontWeight="600">{label}</text>
                  </g>
                ))}
              </svg>
            </motion.div>

          </motion.div>
        </section>
      </div>
    </>
  );
}
