import "../styles/Myskills.css";

const MySkills = () => {
  const skills = [
    {
      name: "HTML5",
      icon: "fab fa-html5",
      color: "#E44D26",
      description: "Semantic markup, forms, multimedia elements",
    },
    {
      name: "CSS3",
      icon: "fab fa-css3-alt",
      color: "#264DE4",
      description: "Styling, animations, responsive design",
    },
    {
      name: "JavaScript",
      icon: "fab fa-js",
      color: "#F7DF1E",
      description: "ES6+, DOM manipulation, async programming",
    },
    {
      name: "Bootstrap",
      icon: "fab fa-bootstrap",
      color: "#7952B3",
      description: "Responsive layouts, components, utilities",
    },
    {
      name: "React",
      icon: "fab fa-react",
      color: "#61DAFB",
      description: "Components, hooks, state management",
    },
    {
      name: "Node.js",
      icon: "fab fa-node-js",
      color: "#339933",
      description: "JavaScript runtime, event-driven, non-blocking I/O",
    },
    {
      name: "Express",
      icon: "fas fa-server",
      color: "#000000",
      description: "Minimalist web framework for Node.js, routing, middleware",
    },

    {
      name: "SQL",
      icon: "fas fa-database",
      color: "#c226ff",
      description: "Queries, database design, data manipulation",
    },
    {
      name: "Responsive Design",
      icon: "fas fa-mobile-alt",
      color: "#38B2AC",
      description: "Mobile-first approach, media queries",
    },
    {
      name: "Microsoft Word",
      icon: "fas fa-file-word",
      color: "#2b579a",
      description: "Document creation, formatting, collaboration",
    },
    {
      name: "Microsoft Excel",
      icon: "fas fa-file-excel",
      color: "#217346",
      description: "Data analysis, formulas, pivot tables",
    },
    {
      name: "Microsoft PowerPoint",
      icon: "fas fa-file-powerpoint",
      color: "#d24726",
      description: "Presentations, slides, visual storytelling",
    },
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-5 content">
        <h1>My Skills</h1>
        <p className="lead">Technologies and tools I work with</p>
      </div>

      <div className="row">
        {skills.map((skill, index) => (
          <div className="col-md-3 col-sm-6 mb-4" key={index}>
            <div
              className="card h-100 border-0 shadow-sm text-center p-4 hover-card"
              style={{ transition: "transform 0.3s" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-10px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <div className="card-body">
                <i
                  className={`${skill.icon} fa-3x mb-3`}
                  style={{ color: skill.color }}
                ></i>
                <h5 className="card-title">{skill.name}</h5>
                <p className="card-text small text-muted">
                  {skill.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
