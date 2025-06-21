import { useState } from "react";
import "../styles/Contactme.css";

function SocialIcon({ url, children }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon"
    >
      {children}
    </a>
  );
}

export default function Contactme() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, contactNo, subject, message } = formData;

    const toEmail = "parthjivani1504@email.com";

    const mailtoLink = `mailto:${toEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nContact No: ${contactNo}\nEmail: ${email}\n\n${message}`
    )}`;

    window.open(mailtoLink, "_blank");

    setForm({
      name: "",
      email: "",
      contactNo: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <div className="container">
        <div
          className="flex content"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div
            className="photo"
            style={{
              width: "50%",
              margin: "20px",
            }}
          >
            <img
              src="/laptop-with-program-code.jpg"
              alt="Parth Jivani"
              style={{ width: "100%", borderRadius: "50px" }}
            />
          </div>
          <div className="name" style={{ margin: "20px" }}>
            <h1 style={{ fontSize: "4rem" }}>Namaste! 🙏</h1>
            <h2>
              I'm{" "}
              <span
                style={{
                  fontSize: "2.7rem",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                }}
              >
                Parth Jivani
              </span>
              .
            </h2>
            <p style={{ fontSize: "20px" }}>
              You can contact me at the places mentioned below.
              <br /> I will try to get back to you as fast as I can.
            </p>
            <div
              className="softwareSkillsIcon"
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <SocialIcon url="https://linkedin.com/in/parthsjivani">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45px"
                  height="45px"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fill="#0A66C2"
                    d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"
                  />
                </svg>
              </SocialIcon>
              <SocialIcon url="mailto:parthjivani1504@gmail.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40px"
                  height="40px"
                  viewBox="0 0 31 29"
                  fill="none"
                >
                  <path
                    d="M2 11.9556C2 8.47078 2 6.7284 2.67818 5.39739C3.27473 4.22661 4.22661 3.27473 5.39739 2.67818C6.7284 2 8.47078 2 11.9556 2H20.0444C23.5292 2 25.2716 2 26.6026 2.67818C27.7734 3.27473 28.7253 4.22661 29.3218 5.39739C30 6.7284 30 8.47078 30 11.9556V20.0444C30 23.5292 30 25.2716 29.3218 26.6026C28.7253 27.7734 27.7734 28.7253 26.6026 29.3218C25.2716 30 23.5292 30 20.0444 30H11.9556C8.47078 30 6.7284 30 5.39739 29.3218C4.22661 28.7253 3.27473 27.7734 2.67818 26.6026C2 25.2716 2 23.5292 2 20.0444V11.9556Z"
                    fill="white"
                  />
                  <path
                    d="M22.0515 8.52295L16.0644 13.1954L9.94043 8.52295V8.52421L9.94783 8.53053V15.0732L15.9954 19.8466L22.0515 15.2575V8.52295Z"
                    fill="#EA4335"
                  />
                  <path
                    d="M23.6231 7.38639L22.0508 8.52292V15.2575L26.9983 11.459V9.17074C26.9983 9.17074 26.3978 5.90258 23.6231 7.38639Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M22.0508 15.2575V23.9924H25.8428C25.8428 23.9924 26.9219 23.8813 26.9995 22.6513V11.459L22.0508 15.2575Z"
                    fill="#34A853"
                  />
                  <path
                    d="M9.94811 24.0001V15.0732L9.94043 15.0669L9.94811 24.0001Z"
                    fill="#C5221F"
                  />
                  <path
                    d="M9.94014 8.52404L8.37646 7.39382C5.60179 5.91001 5 9.17692 5 9.17692V11.4651L9.94014 15.0667V8.52404Z"
                    fill="#C5221F"
                  />
                  <path
                    d="M9.94043 8.52441V15.0671L9.94811 15.0734V8.53073L9.94043 8.52441Z"
                    fill="#C5221F"
                  />
                  <path
                    d="M5 11.4668V22.6591C5.07646 23.8904 6.15673 24.0003 6.15673 24.0003H9.94877L9.94014 15.0671L5 11.4668Z"
                    fill="#4285F4"
                  />
                </svg>
              </SocialIcon>
              <SocialIcon url="https://wa.me/919712579779">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="WhatsApp"
                  role="img"
                  height="40px"
                  width="40px"
                  viewBox="0 0 512 512"
                >
                  <rect width="512" height="512" rx="15%" fill="#25d366" />
                  <path
                    fill="#25d366"
                    stroke="#ffffff"
                    stroke-width="26"
                    d="M123 393l14-65a138 138 0 1150 47z"
                  />
                  <path
                    fill="#ffffff"
                    d="M308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18"
                  />
                </svg>
              </SocialIcon>
            </div>
            <div
              className="my-resume"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <SocialIcon url="../parth-jivani-resume.pdf">
                <button
                  type="button"
                  class="btn btn-info"
                  style={{ padding: "10px", margin: "10px", fontWeight: "600" }}
                >
                  My Resume
                </button>
              </SocialIcon>
            </div>
          </div>
        </div>
        <div className="contact-form" style={{ marginTop: "20px" }}>
          <h3>Contact Me</h3>
          <form class="row g-2" onSubmit={handleSubmit}>
            <div class="col-md-4">
              <label for="inputName" class="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div class="col-md-4">
              <label for="inputEmail" class="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div class="col-md-4">
              <label for="inputContactNo" class="form-label">
                Contact No
              </label>
              <input
                type="tel"
                className="form-control"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
              />
            </div>
            <div class="col-md-12">
              <label for="inputSubject" class="form-label">
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="col-12">
              <label for="inputMessage" class="form-label">
                Message
              </label>
              <textarea
                class="form-control"
                rows="3"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
