import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./canva.css";
import burger from "../canva/burger.png";
import id from "../canva/id.png";
import camera from "../canva/camera.png";
import faq from "../canva/faq.png";
import event from "../canva/event.png";
import ppt from "../canva/ppt.png";
import menu from "../canva/menu.png";
import yt from "../canva/yt.png";

const CANVA_IMAGES = [
  { src: camera, title: "Photography Services", tag: "Social Media", color: "#7c5cfc", link: "https://canva.link/xjphwjkoxymhz8s" },
  { src: event,  title: "Event Flyer",          tag: "Print",        color: "#00d9ff", link: "https://canva.link/s7f3ouiui3bdfa5" },
  { src: ppt,    title: "Presentation Deck",    tag: "Slides",       color: "#ff6b6b", link: "https://canva.link/5kkb5l4pmmpqg3p" },
  { src: yt,     title: "YouTube Thumbnail",    tag: "Digital",      color: "#ffd166", link: "https://canva.link/sjda4g16t550345" },
  { src: menu,   title: "Menu Food",            tag: "Food Ads",     color: "#5c94fc", link: "https://canva.link/dogdqefwbofo03z" },
  { src: faq,    title: "Frequently Asked Questions", tag: "FAQ Poster", color: "#fd0202", link: "https://canva.link/khzhj7vrfdlif5f" },
  { src: burger, title: "Burger Promo",         tag: "Banners",      color: "#06d6a0", link: "https://canva.link/z8f1k0adrg31qo6" },
  { src: id,     title: "Event ID",             tag: "ID",           color: "#067fd6", link: "https://canva.link/1fmiuietgpo72ad" },
];

const TAGS = ["All", ...Array.from(new Set(CANVA_IMAGES.map((i) => i.tag)))];

export default function CanvaPage() {
  const navigate = useNavigate();
  const [activeTag, setActiveTag] = useState("All");

  const filtered =
    activeTag === "All"
      ? CANVA_IMAGES
      : CANVA_IMAGES.filter((i) => i.tag === activeTag);

  const handleCardClick = (item) => {
    if (item.link) {
      window.open(item.link, "_blank", "noreferrer");
    }
  };

  return (
    <div className="gallery-page">

      {/* Navbar */}
      <nav className="gallery-nav">
        <button className="gallery-back" onClick={() => navigate(-1)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back
        </button>
        <a href="/" className="gallery-logo">R.A.</a>
        <div className="gallery-nav-tag">Canva Designs</div>
      </nav>

      {/* Hero */}
      <header className="gallery-hero">
        <div className="gallery-hero-glow" style={{ "--g": "#ff0c0c" }} />
        <div className="gallery-hero-inner">
          <div className="gallery-pill">Canva Portfolio</div>

          {/* Font override here is backup only — primary fix is in CSS with !important */}
          <h1
            className="gallery-title"
            style={{ fontFamily: "'Syne', sans-serif", fontSize: "4rem" }}>
            Creative <span style={{ color: "#7c5cfc" }}>Designs</span>
          </h1>

          <p className="gallery-subtitle">
            A collection of social media creatives, presentations, flyers, and brand materials
            made with Canva.
          </p>
        </div>
      </header>

      {/* Filter Tags */}
      <div className="gallery-filters">
        {TAGS.map((tag) => (
          <button
            key={tag}
            className={`gallery-filter-btn ${activeTag === tag ? "active" : ""}`}
            style={{ "--accent": "#7c5cfc" }}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="gallery-grid">
        {filtered.map((item, i) => (
          <div
            key={i}
            className="gallery-card"
            style={{
              animationDelay: `${i * 0.07}s`,
              cursor: item.link ? "pointer" : "default",
            }}
            onClick={() => handleCardClick(item)}
          >
            {item.src ? (
              <img src={item.src} alt={item.title} className="gallery-card-img" />
            ) : (
              <div className="gallery-card-placeholder" style={{ "--c": item.color }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="3" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                <span>Add Image</span>
              </div>
            )}
            <div className="gallery-card-info">
              <span
                className="gallery-card-tag"
                style={{ color: item.color, background: `${item.color}18` }}
              >
                {item.tag}
              </span>
              <div className="gallery-card-title">
                {item.title}
                {item.link && (
                  <span style={{ fontSize: "11px", opacity: 0.5, marginLeft: "6px" }}>↗</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="gallery-footer">
        <p>© 2026 Ron Arnold B. Replan · Canva Designs</p>
      </footer>

    </div>
  );
}