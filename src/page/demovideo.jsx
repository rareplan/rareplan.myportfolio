import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./demovideo.css";
import video from "../image/video.mp4";
import busybee from "../image/busybee.mp4";

// ── CASE STUDY DATA (palitan ang text kung may gusto kang baguhin) ──
const CASE_STUDY = {

  tag: "UI/UX Design & Prototype",

  title: "Music App UI Prototype",

  subtitle: "A UI design and prototype walkthrough for a modern music app",

  color: "#7c5cfc",

  role: "UI/UX Designer",

  tools: ["Figma"],

  overview:
    "A short demo video showcasing the process and final prototype of a music app UI design. The project focuses on creating a clean and modern opening experience, starting from the login screen and continuing into the app interface.",

  goal:
    "Design a visually engaging music app interface and demonstrate how the UI works through an interactive prototype, giving viewers a quick look at both the design and user flow.",

  solution:
    "I designed the music app starting with a simple login and opening screen, then connected the screens into an interactive Figma prototype. The demo video shows the UI in motion, highlighting the transitions, navigation, and overall user experience of the app.",

  highlights: [

    { icon: "🎵", label: "Music App UI", text: "A clean and modern interface designed around the visual experience of discovering and enjoying music." },

    { icon: "🔐", label: "Login Experience", text: "A simple opening and login screen creates a clear starting point for users before entering the music app." },

    { icon: "▶️", label: "Interactive Prototype", text: "Figma interactions and transitions demonstrate how users move through the app and experience the designed interface." },

  ],

  principles: [

    "Simplicity — keep the login and opening experience clean and easy to understand",

    "Visual Hierarchy — use typography, spacing, and imagery to guide users through the interface",

    "Interaction — connect screens with smooth prototype transitions to make the UI feel like a real app",

  ],

};

const CASE_STUDY_2 = {
  tag: "Web Design & Dashboard Prototype",

  title: "Task Monitoring Dashboard",

  subtitle: "A dashboard prototype for monitoring schedules, tasks, and progress",

  color: "#22c55e",

  role: "UI/UX Designer & Front-End Developer",

  tools: ["Figma", "React", "CSS"],

  overview:
    "A dashboard web prototype designed to help users monitor schedules, manage tasks, and quickly understand the current status of ongoing work.",

  goal:
    "Create a clear and organized dashboard where users can easily view schedules, check task progress, and identify which tasks are completed, ongoing, or pending.",

  solution:
    "I designed a modern dashboard interface with clear sections for schedules, tasks, and status tracking. The prototype focuses on visual hierarchy, simple navigation, and easy-to-understand status indicators.",

  highlights: [
    {
      icon: "📊",
      label: "Dashboard UI",
      text: "A clean dashboard layout that organizes schedules and tasks in one place."
    },

    {
      icon: "📅",
      label: "Schedule Monitoring",
      text: "Users can quickly view upcoming schedules and monitor planned activities."
    },

    {
      icon: "✅",
      label: "Task Status",
      text: "Visual status indicators make it easy to identify completed, ongoing, and pending tasks."
    },

    {
      icon: "✨",
      label: "Text Motion",
      text: "Motion elements help make the dashboard presentation more engaging and dynamic."
    }
  ],

  principles: [
    "Clarity — organize information so users can quickly understand the dashboard",

    "Visual Hierarchy — prioritize important schedules, tasks, and statuses",

    "Consistency — use consistent layouts, spacing, and status indicators throughout the interface"
  ]
};

export default function DemoVideoPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cs = CASE_STUDY;

  return (
    <div className="demo-video-page">
      {/* Navbar */}
      <nav className="demo-video-nav">
        <button className="demo-video-back" onClick={() => navigate(-1)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back
        </button>
        <Link to="/" className="demo-video-logo">R.A.</Link>
        <div className="demo-video-nav-tag">Demo Video</div>
      </nav>

      {/* Hero */}
      <header className="demo-video-hero">
        <div className="demo-video-hero-glow" />
        <div className="demo-video-hero-inner">
          <div className="demo-video-pill">Demo Video</div>
          <h1 className="demo-video-title">
            Demo <span className="demo-video-accent">Video</span>
          </h1>
          <p className="demo-video-subtitle">
            A demo video showcasing my skills and experience as a web developer.
          </p>
        </div>
      </header>

      {/* Video */}
      <div className="demo-video-container">
        <video controls preload="metadata">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>


      {/* Case Study */}
      <section className="dv-cs" style={{ "--cs-color": cs.color }}>
        <div className="dv-cs-bar" />

        <div className="dv-cs-head">
          <span className="dv-cs-tag">{cs.tag}</span>
          <h2 className="dv-cs-title">{cs.title}</h2>
          <p className="dv-cs-subtitle">{cs.subtitle}</p>
        </div>

        <div className="dv-cs-section">
          <div className="dv-cs-label"><span>📋</span> Overview</div>
          <p className="dv-cs-text">{cs.overview}</p>
        </div>

        <div className="dv-cs-section">
          <div className="dv-cs-label"><span>🎯</span> Goal</div>
          <p className="dv-cs-text">{cs.goal}</p>
        </div>

        <div className="dv-cs-section">
          <div className="dv-cs-label"><span>💡</span> Solution</div>
          <p className="dv-cs-text">{cs.solution}</p>
        </div>

        <div className="dv-cs-section">
          <div className="dv-cs-label"><span>✨</span> Design Highlights</div>
          <div className="dv-cs-highlights">
            {cs.highlights.map((h) => (
              <div key={h.label} className="dv-cs-highlight">
                <span className="dv-cs-highlight-icon">{h.icon}</span>
                <div>
                  <div className="dv-cs-highlight-label">{h.label}</div>
                  <p className="dv-cs-text">{h.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dv-cs-section">
          <div className="dv-cs-label"><span>📐</span> UX Principles Applied</div>
          <ul className="dv-cs-principles">
            {cs.principles.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </div>

        <div className="dv-cs-footer">
          <span className="dv-cs-tools-label">Tools:</span>
          {cs.tools.map((t) => <span key={t} className="dv-cs-chip">{t}</span>)}
          <span className="dv-cs-chip">{cs.role}</span>
        </div>
      </section>



     {/* Second Video */}
<div className="demo-video-container">
  <video controls preload="metadata">
    <source src={busybee} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

{/* Second Case Study */}
<section
  className="dv-cs"
  style={{ "--cs-color": CASE_STUDY_2.color }}
>
  <div className="dv-cs-bar" />

  <div className="dv-cs-head">
    <span className="dv-cs-tag">{CASE_STUDY_2.tag}</span>

    <h2 className="dv-cs-title">
      {CASE_STUDY_2.title}
    </h2>

    <p className="dv-cs-subtitle">
      {CASE_STUDY_2.subtitle}
    </p>
  </div>

  <div className="dv-cs-section">
    <div className="dv-cs-label">
      <span>📋</span> Overview
    </div>

    <p className="dv-cs-text">
      {CASE_STUDY_2.overview}
    </p>
  </div>

  <div className="dv-cs-section">
    <div className="dv-cs-label">
      <span>🎯</span> Goal
    </div>

    <p className="dv-cs-text">
      {CASE_STUDY_2.goal}
    </p>
  </div>

  <div className="dv-cs-section">
    <div className="dv-cs-label">
      <span>💡</span> Solution
    </div>

    <p className="dv-cs-text">
      {CASE_STUDY_2.solution}
    </p>
  </div>

  <div className="dv-cs-section">
    <div className="dv-cs-label">
      <span>✨</span> Design Highlights
    </div>

    <div className="dv-cs-highlights">
      {CASE_STUDY_2.highlights.map((h) => (
        <div key={h.label} className="dv-cs-highlight">
          <span className="dv-cs-highlight-icon">
            {h.icon}
          </span>

          <div>
            <div className="dv-cs-highlight-label">
              {h.label}
            </div>

            <p className="dv-cs-text">
              {h.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>

  <div className="dv-cs-section">
    <div className="dv-cs-label">
      <span>📐</span> UX Principles Applied
    </div>

    <ul className="dv-cs-principles">
      {CASE_STUDY_2.principles.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </ul>
  </div>

  <div className="dv-cs-footer">
    <span className="dv-cs-tools-label">
      Tools:
    </span>

    {CASE_STUDY_2.tools.map((t) => (
      <span key={t} className="dv-cs-chip">
        {t}
      </span>
    ))}

    <span className="dv-cs-chip">
      {CASE_STUDY_2.role}
    </span>
  </div>
</section>
      

      <footer className="demo-video-footer">
        © 2026 Ron Arnold B. Replan · UI/UX Designer & Front-End Developer
      </footer>
    </div>
  );
}