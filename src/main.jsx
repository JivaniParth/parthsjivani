import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/pages/About.jsx";
import Home from "./components/pages/Home.jsx";
import Experience from "./components/pages/Experience.jsx";
import Projects from "./components/pages/Projects.jsx";
import Contactme from "./components/pages/ContactMe.jsx";
import NotFound from "./components/pages/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/experience", element: <Experience /> },
      { path: "/projects", element: <Projects /> },
      { path: "/contact-me", element: <Contactme /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
