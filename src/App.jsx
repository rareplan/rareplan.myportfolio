import { useState } from "react";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app">

      {/* NAV */}
      <div className="nav">
        <span onClick={() => setPage("home")} className={page === "home" ? "active" : ""}>Home</span>
        <span onClick={() => setPage("about")} className={page === "about" ? "active" : ""}>About</span>
        <span onClick={() => setPage("experience")} className={page === "experience" ? "active" : ""}>Experience</span>
        <span onClick={() => setPage("skills")} className={page === "skills" ? "active" : ""}>Skills</span>
        <span onClick={() => setPage("projects")} className={page === "projects" ? "active" : ""}>Projects</span>
        <span onClick={() => setPage("cert")} className={page === "cert" ? "active" : ""}>Certifications</span>
        <span onClick={() => setPage("contact")} className={page === "contact" ? "active" : ""}>Contact</span>
      </div>

      {/* HOME */}
      {page === "home" && (
        <div className="container">
          <h1>Ron Arnold Replan</h1>
          <p className="blue">UI/UX Designer & Front-End Developer</p>
          <p className="gray">
            Building user-friendly systems and modern web interfaces.
          </p>
        </div>
      )}

      {/* ABOUT */}
      {page === "about" && (
        <div className="container">
          <h2>About Me</h2>
          <p className="gray">
            UI/UX Designer and Developer experienced in React, Figma, HTML, CSS, JS.
          </p>
        </div>
      )}

      {/* EXPERIENCE */}
      {page === "experience" && (
        <div className="container">
          <h2>Experience</h2>

          <div className="card">
            <b>QCredit Corp</b>
            <p>Graphic Designer & Marketing Officer (2024 - Present)</p>
          </div>

          <div className="card">
            <b>Accenture</b>
            <p>Data Analyst (2022 - 2023)</p>
          </div>

          <div className="card">
            <b>FDS Asya</b>
            <p>Developer I (2021 - 2022)</p>
          </div>
        </div>
      )}

      {/* SKILLS */}
      {page === "skills" && (
        <div className="container">
          <h2>Skills</h2>
          <ul className="gray">
            <li>UI/UX Design</li>
            <li>Frontend Development</li>
            <li>Automation Tools</li>
          </ul>
        </div>
      )}

      {/* PROJECTS */}
      {page === "projects" && (
        <div className="container">
          <h2>Projects</h2>

          <div className="card">
            <b>Loan Management UI</b>
            <p>UI system for loan processing workflow</p>
          </div>

          <div className="card">
            <b>Chatbot Automation</b>
            <p>Automated customer engagement system</p>
          </div>

          <div className="card">
            <b>Marketing Designs</b>
            <p>Social media campaigns and branding</p>
          </div>
        </div>
      )}

      {/* CERTIFICATIONS */}
      {page === "cert" && (
        <div className="container">
          <h2>Certifications</h2>
          <ul className="gray">
            <li>UI/UX Beginner</li>
            <li>Full Stack Developer</li>
            <li>Azure Fundamentals</li>
          </ul>
        </div>
      )}

      {/* CONTACT */}
      {page === "contact" && (
        <div className="container">
          <h2>Contact</h2>
          <p>Email: rareplan1@gmail.com</p>
          <p>Phone: 09756825216</p>
        </div>
      )}

    </div>
  );
}