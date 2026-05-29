
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../page/qcredit.css";
import mvl     from "../qcredit/mvl.png";
import faq     from "../qcredit/faq.png";
import holiday from "../qcredit/holiday.png";
import hiring  from "../qcredit/hiring.png";
import cares   from "../qcredit/cares.png";
import trend   from "../qcredit/trend.png";
import ins     from "../qcredit/ins.png";
import qc      from "../qcredit/qc.png";


const AD_IMAGES = [
  { src: qc,    title: "Relatable Ad Poster",    category: "Services",          color: "#7c5cfc", link: "https://www.canva.com/your-link" },
  { src: ins,     title: "Inspirational Quotes",  category: "Promotional",        color: "#00d9ff", link: "https://www.canva.com/your-link" },
  { src: mvl,     title: "Market Vendor Loan",    category: "Poster Campaign",    color: "#7c5cfc", link: "https://www.canva.com/your-link" },
  { src: cares,   title: "QCredit Cares",         category: "Consumer Awareness", color: "#00d9ff", link: "https://www.canva.com/your-link" },
  { src: faq,     title: "FAQ Customer Service",  category: "Consumer Support",   color: "#ff6b6b", link: "https://www.canva.com/your-link" },
  { src: hiring,  title: "Hiring Poster",         category: "Employment",         color: "#ffd166", link: "https://www.canva.com/your-link" },
  { src: holiday, title: "Holiday Advisory",      category: "Announcement",       color: "#06d6a0", link: "https://www.canva.com/your-link" },
  { src: trend,   title: "Poster Trend",          category: "Trending",           color: "#ff6b6b", link: "https://www.canva.com/your-link" },
 
];

const REELS = [
  {
    title: "Market Vendor Loan Ads",
    platform: "YouTube",
    embedUrl: "https://www.youtube.com/embed/iElhYS-lo0k?si=ZWit8700pRr34MqQ",
    desc: "Alamin ang mga Benepisyo ng Market Vendor Loan Ngayon!",
  },
  {
    title: "QCredit Reels - MVL",
    platform: "Facebook",
    embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F879183654909225%2F&show_text=false&width=267&t=0",
    desc: "Dagdag puhunan para sa mas maunlad na negosyo. Mag-apply sa Market Vendor Loan.",
  },
  {
    title: "QCredit Tips",
    platform: "TikTok",
    embedUrl: "https://www.tiktok.com/embed/v2/7470041621426343186",
    desc: "Gawing wais ang paggamit ng loan! Tuklasin ang 3 paraan para mas maging epektibo sa Negosyo.",
  },
  {
    title: "Qwentong QCredit: Mark Martinez",
    platform: "YouTube",
    embedUrl: "https://www.youtube.com/embed/mxEtIxDie8I?si=HmknrH59_iHxgoJI",
    desc: "Sa Qwentong QCredit, kilalanin si Mark Martinez, isang negosyanteng nagtagumpay sa kabila ng lahat ng pagsubok.",
  },
  {
    title: "QCredit Reels - Summer Feel",
    platform: "Facebook",
    embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F842086638262915%2F&show_text=false&width=267&t=0",
    desc: "Summer rush na! Dagdag puhunan, dagdag kita para sa market vendors!",
  },
  {
    title: "QCredit Brand Story",
    platform: "TikTok",
    embedUrl: "https://www.tiktok.com/embed/v2/7527231352937155847",
    desc: "Ang kwento ng QCredit at kung paano nila tinutulungan ang mga vendors.",
  },
];

const AD_CATEGORIES = ["All", ...Array.from(new Set(AD_IMAGES.map((i) => i.category)))];

function getPlatformConfig(platform) {
  const map = {
    YouTube:  { color: "#FF0000", label: "YouTube",  icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
    Facebook: { color: "#1877F2", label: "Facebook", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
    TikTok:   { color: "#69C9D0", label: "TikTok",   icon: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" },
  };
  return map[platform] || { color: "#7c5cfc", label: platform, icon: "" };
}

function PlaceholderCard({ color }) {
  return (
    <div className="qc-placeholder" style={{ "--c": color }}>
      <div className="qc-placeholder-icon">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      </div>
      <span>Add Image</span>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// IMAGE MODAL — natural size, centered, no distortion
// ═══════════════════════════════════════════════════════
function ImageModal({ item, items, currentIndex, onClose, onNav }) {
  if (!item) return null;

  const total = items?.length ?? 0;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape")                  onClose();
      if (e.key === "ArrowRight" && onNav)     onNav(1);
      if (e.key === "ArrowLeft"  && onNav)     onNav(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onNav]);

  return (
    <div className="qc-modal-backdrop" onClick={onClose}>

      {/* Prev arrow */}
      {onNav && total > 1 && (
        <button
          className="qc-modal-nav qc-modal-nav-left"
          onClick={(e) => { e.stopPropagation(); onNav(-1); }}
          aria-label="Previous"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      )}

      {/* Next arrow */}
      {onNav && total > 1 && (
        <button
          className="qc-modal-nav qc-modal-nav-right"
          onClick={(e) => { e.stopPropagation(); onNav(1); }}
          aria-label="Next"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      )}

      {/* Modal box */}
      <div className="qc-modal-box" onClick={(e) => e.stopPropagation()}>

        {/* Close */}
        <button className="qc-modal-close" onClick={onClose}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6"  y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Image — respects original proportions, no fixed aspect-ratio box */}
        <div className="qc-modal-img-wrap">
          {item.src ? (
            <img
              src={item.src}
              alt={item.title}
              className="qc-modal-img"
            />
          ) : (
            <div className="qc-modal-placeholder" style={{ "--c": item.color }}>
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.9">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <span>No image yet</span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="qc-modal-info">
          <span
            className="qc-modal-category"
            style={{ color: item.color, background: `${item.color}20`, borderColor: `${item.color}30` }}
          >
            {item.category}
          </span>
          <div className="qc-modal-title">{item.title}</div>
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="qc-modal-canva-btn"
              style={{ background: item.color }}
            >
              Open in Canva ↗
            </a>
          )}
        </div>
      </div>

      {/* Counter */}
      {total > 1 && (
        <div className="qc-modal-counter">
          {currentIndex + 1} / {total}
        </div>
      )}
    </div>
  );
}

// ── REEL CARD ──────────────────────────────────────────
function ReelCard({ reel, index }) {
  const [play, setPlay] = useState(false);
  const config = getPlatformConfig(reel.platform);

  const getEmbedUrl = (url) =>
    reel.platform === "YouTube"
      ? url + (url.includes("?") ? "&" : "?") + "autoplay=1&rel=0"
      : url;

  return (
    <div className="qc-reel-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div
        className="qc-reel-platform"
        style={{ background: `${config.color}15`, color: config.color, borderColor: `${config.color}30` }}
      >
        {config.icon && (
          <svg width="13" height="13" viewBox="0 0 24 24" fill={config.color}>
            <path d={config.icon} />
          </svg>
        )}
        {config.label}
      </div>

      <div className="qc-reel-frame">
        {!play ? (
          <div className="qc-reel-thumb" onClick={() => setPlay(true)}>
            <div className="qc-play-ring" style={{ borderColor: `${config.color}40` }}>
              <div className="qc-play-btn" style={{ background: config.color }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
            </div>
            <div className="qc-reel-overlay-text">Click to play on {config.label}</div>
          </div>
        ) : (
          <iframe
            src={getEmbedUrl(reel.embedUrl)}
            className="qc-reel-iframe"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
            title={reel.title}
          />
        )}
      </div>

      <div className="qc-reel-info">
        <div className="qc-reel-title">{reel.title}</div>
        <p className="qc-reel-desc">{reel.desc}</p>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════
export default function QCreditAdsPage() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSection,  setActiveSection]  = useState("ads");
  const [selectedIndex,  setSelectedIndex]  = useState(null);

  const filtered =
    activeCategory === "All"
      ? AD_IMAGES
      : AD_IMAGES.filter((i) => i.category === activeCategory);

  const selectedItem = selectedIndex !== null ? filtered[selectedIndex] : null;

  const handleNav = (dir) =>
    setSelectedIndex((prev) => (prev + dir + filtered.length) % filtered.length);

  return (
    <div className="qc-page">
      <div className="qc-orb qc-orb-1" />
      <div className="qc-orb qc-orb-2" />

      {/* Navbar */}
      <nav className="qc-nav">
        <button className="qc-back" onClick={() => navigate(-1)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back
        </button>
        <a href="/" className="qc-logo">R.A.</a>
        <div className="qc-nav-badge">QCredit Ads</div>
      </nav>

      {/* Hero */}
      <header className="qc-hero">
        <div className="qc-hero-label">Marketing Portfolio</div>
        <h1 className="qc-hero-title">
          QCredit <span className="qc-accent">Creative</span><br />Campaigns
        </h1>
        <p className="qc-hero-sub">
          Social media ads, promotional graphics, and video content produced for
          QCredit Corp. across Facebook, TikTok, and YouTube.
        </p>
        <div className="qc-stats">
          {[["3+","Platforms"],["50+","Creatives"],["2024–","Present"]].map(([num, label]) => (
            <div className="qc-stat" key={label}>
              <div className="qc-stat-num">{num}</div>
              <div className="qc-stat-label">{label}</div>
            </div>
          ))}
        </div>
      </header>

      {/* Section Toggle */}
      <div className="qc-section-toggle">
        <button className={`qc-toggle-btn ${activeSection === "ads" ? "active" : ""}`} onClick={() => setActiveSection("ads")}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
          </svg>
          Ad Graphics
        </button>
        <button className={`qc-toggle-btn ${activeSection === "reels" ? "active" : ""}`} onClick={() => setActiveSection("reels")}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
          Reels &amp; Videos
        </button>
      </div>

      {/* Ad Graphics */}
      {activeSection === "ads" && (
        <div className="qc-ads-section">
          <div className="qc-filters">
            {AD_CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`qc-filter-btn ${activeCategory === cat ? "active" : ""}`}
                onClick={() => { setActiveCategory(cat); setSelectedIndex(null); }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="qc-masonry">
            {filtered.map((item, i) => (
              <div
                key={i}
                className="qc-card"
                style={{ animationDelay: `${i * 0.07}s`, cursor: "pointer" }}
                onClick={() => setSelectedIndex(i)}
              >
                {item.src ? (
                  <img src={item.src} alt={item.title} className="qc-card-img" draggable={false} />
                ) : (
                  <PlaceholderCard color={item.color} />
                )}
                <div className="qc-card-overlay">
                  <span
                    className="qc-card-category"
                    style={{ color: item.color, background: `${item.color}20`, borderColor: `${item.color}30` }}
                  >
                    {item.category}
                  </span>
                  <div className="qc-card-title">{item.title}</div>
                  <div className="qc-card-open">View ↗</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Reels */}
      {activeSection === "reels" && (
        <div className="qc-reels-section">
          <div className="qc-reels-header">
            <p className="qc-reels-note">
              Video content produced for QCredit Corp. — customer stories, promos, and brand campaigns.
            </p>
          </div>
          <div className="qc-reels-grid">
            {REELS.map((reel, i) => (
              <ReelCard key={i} reel={reel} index={i} />
            ))}
          </div>
        </div>
      )}

      {/* Modal */}
      {selectedItem && (
        <ImageModal
          item={selectedItem}
          items={filtered}
          currentIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onNav={handleNav}
        />
      )}

      <footer className="qc-footer">
        <p>© 2026 Ron Arnold B. Replan · QCredit Corp. Creative Work</p>
      </footer>
    </div>
  );
}