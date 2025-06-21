import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/pages/Header.jsx";
import Footer from "./components/pages/Footer.jsx";
import "./App.css";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      <Header darkMode={darkMode} />
      <Outlet />
      <Footer darkMode={darkMode} />

      <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "🔅" : "🌙"}
      </button>
    </>
  );
}
