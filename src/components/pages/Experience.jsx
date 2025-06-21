import { Link } from "react-router-dom";

export default function Experience() {
  return (
    <>
      <div className="container">
        <div
          className="flex school"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "40px",
            marginBottom: "40px",
            padding: "40px 70px",
          }}
        >
          <div
            className="schooldetails"
            style={{ margin: "25px", padding: "25px" }}
          >
            <h5>Junior ReactJS Developer in</h5>
            <Link
              to="https://ishitechnolabs.com/"
              target="_blank"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h1>Ishi Technolabs</h1>
            </Link>
            <h4>Nov 2024 to Present</h4>
            <p>
              Responsible for building and maintaining scalable React
              applications. Collaborating with cross-functional teams to develop
              high-quality UI/UX solutions while optimizing performance and user
              experience.
            </p>
          </div>
          <div className="photo" style={{ margin: "25px", padding: "25px" }}>
            <img src="/ishitechnolabs.png" alt="Ishi Technolabs" />
          </div>
        </div>
        <div
          className="container flex degree"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "40px",
            marginBottom: "40px",
            padding: "40px 70px",
          }}
        >
          <div className="photo" style={{ margin: "25px", padding: "25px" }}>
            <img src="/goldenmace.png" alt="Goldenmace IT Solutions" />
          </div>
          <div
            className="degreedetails"
            style={{ margin: "25px", padding: "25px" }}
          >
            <h5>ReactJS Intern in</h5>
            <Link
              to="https://goldenmace.com/"
              target="_blank"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h1>Goldenmace IT Solutions</h1>
            </Link>
            <h3>From Jan 2024 to Aug 2024</h3>
            <p>
              Gained hands-on experience in developing dynamic web applications
              using ReactJS. Worked on real-world projects, enhancing skills in
              front-end development, state management, and API integration.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
