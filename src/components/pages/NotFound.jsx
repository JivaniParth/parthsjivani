import "../styles/NotFound.css";
import React from "react";

export default function NotFound() {
  return (
    <>
      <div className="not-found-container">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">Page Not Found</p>
        <a href="/" className="not-found-link">
          Go Back to Home
        </a>
      </div>
    </>
  );
}
