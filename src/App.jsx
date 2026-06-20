import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/pages/Header.jsx";
import Footer from "./components/pages/Footer.jsx";
import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import { useLayoutEffect, useState, useEffect } from "react";

export default function App() {
  const location = useLocation();

  // ── Dark/Light mode — persisted in localStorage ──
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    // Force Dark Mode as the absolute default
    return true;
  });

  // Apply theme class to <html>
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      root.classList.remove("light");
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // ── Scroll restore ──
  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    requestAnimationFrame(scrollToTop);
  }, [location.pathname]);

  return (
    <>
      <Header darkMode={darkMode} toggleDarkMode={() => setDarkMode((d) => !d)} />
      <Outlet />
      <Footer darkMode={darkMode} />
    </>
  );
}
