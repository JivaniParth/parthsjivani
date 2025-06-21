export default function Education() {
  return (
    <>
      <div
        className="container flex degree"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "40px",
          marginBottom: "40px",
          padding: "40px 50px",
        }}
      >
        <div className="photo" style={{ margin: "25px", padding: "25px" }}>
          <img src="/college.png" alt="SSEC" />
        </div>
        <div
          className="degreedetails"
          style={{ margin: "25px", padding: "25px" }}
        >
          <h5>Bachelor's Degree done in</h5>
          <h1>Shantilal Shah Engineering College</h1>
          <h3>Bachelor of Engineering in Information Technology</h3>
          <ul>
            <li>
              I have studied core subjects like DBMS, Data Structures, Machine
              Learning, Computer Vision, Advanced Web Development, Networking,
              etc in this course.
            </li>
            <li>I have secured 7.49 CGPA in this course.</li>
          </ul>
        </div>
      </div>
      <div
        className="container flex school"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "40px",
          marginBottom: "40px",
          padding: "40px 50px",
        }}
      >
        <div
          className="schooldetails"
          style={{ margin: "25px", padding: "25px" }}
        >
          <h5>Secondary and Higher Secondary School done in</h5>
          <h1>Advait Vidhyaniketan, Bharuch</h1>
          <h4>
            With 70% in 12<sup>th</sup> {"("}Science{")"} and 82.33% in 10
            <sup>th</sup>.
          </h4>
        </div>
        <div
          className="photo"
          style={{ width: "71%", margin: "25px", padding: "25px" }}
        >
          <img
            src="/logo-Advait-768x197.png"
            alt="Advait Vidhyaniketan"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </>
  );
}
