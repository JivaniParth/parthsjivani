import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Education from "./components/pages/Education.jsx";
import Home from "./components/pages/Home.jsx";
import Experience from "./components/pages/Experience.jsx";
import Contactme from "./components/pages/ContactMe.jsx";
import Myskills from "./components/pages/Myskills.jsx";
import NotFound from "./components/pages/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/education", element: <Education /> },
      { path: "/experience", element: <Experience /> },
      { path: "/my-skills", element: <Myskills /> },
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
