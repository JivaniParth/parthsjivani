import Education from "./Education.jsx";
import MySkills from "./Myskills.jsx";
import "../styles/About.css";

export default function About() {
  return (
    <div className="about-page">
      <div className="education-section">
        <Education />
      </div>
      <div className="skills-section">
        <MySkills />
      </div>
    </div>
  );
}
