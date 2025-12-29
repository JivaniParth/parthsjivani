import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/pages/Header.jsx";
import Footer from "./components/pages/Footer.jsx";
import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

export default function App() {
  const location = useLocation();

  // Always enforce dark mode
  useLayoutEffect(() => {
    document.body.classList.add("dark");
    document.documentElement.classList.add("dark");
  }, []);

  // Force scroll-to-top on route change before paint
  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    // Reset all potential scroll containers just in case
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location.pathname]);

  return (
    <>
      <Header darkMode />
      <Outlet />
      <Footer darkMode />
    </>
  );
}
