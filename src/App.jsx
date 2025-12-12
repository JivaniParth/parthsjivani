import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/pages/Header.jsx";
import Footer from "./components/pages/Footer.jsx";
import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") !== "light"
  );
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header darkMode={darkMode} />
      <Outlet />
      <Footer darkMode={darkMode} />

      <motion.button
        className="toggle-btn"
        onClick={() => setDarkMode(!darkMode)}
        whileHover={{ scale: 1.1, rotate: 20 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {darkMode ? "🔅" : "🌙"}
      </motion.button>
    </>
  );
}
