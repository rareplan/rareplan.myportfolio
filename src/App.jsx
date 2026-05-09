import { useState, useEffect, useRef } from "react";
import "./App.css";
import ui2 from "./image/ui2.png";
// ── DATA ──────────────────────────────────────────────
const NAV_LINKS = ["home","skills", "experience", "projects", "certs", "my design", "contact"];

const SKILLS = [
  {
    icon: "🎨",
    category: "Design & UI/UX",
    tags: ["Figma", "Canva", "Adobe Photoshop", "Jitter Motion", "Affinity"],
  },
  {
    icon: "💻",
    category: "Front-End Development",
    tags: ["HTML5", "CSS3", "JavaScript", "React JS", "Golang"],
  },
  {
    icon: "🛠️",
    category: "Tools & Technologies",
    tags: ["GitHub", "Google Data Studio", "ManyChat", "Make (Integromat)", "PostgreSQL"],
  },
];

const EXPERIENCES = [
  {
    role: "Graphic Designer & Marketing Officer",
    company: "QCredit Corp.",
    period: "Mar 2024 – Present",
     image: "/src/exp4.png",
    items: [
      "Designed promotional creatives for Facebook, TikTok, and YouTube campaigns",
      'Created engaging video content for "Kwentong QCredit" customer stories',
      "Produced social media graphics and UI layouts using Figma and Photoshop",
      "Developed animated visuals using Jitter to improve ad engagement",
      "Collaborated with marketing team to deliver customer-focused campaigns",
    ],
  },
  {
    role: "Data Analyst",
    company: "Accenture, Inc.",
    period: "Aug 2022 – Sept 2023",
    items: [
      "Processed and analyzed transactional data to support business operations",
      "Identified patterns and insights for process improvement",
      "Resolved data-related issues through debugging and analysis",
      "Ensured accurate and timely release of processed data",
    ],
  },
  {
    role: "Developer I",
    company: "FDS Asya Philippines Inc.",
    period: "Feb 2021 – Mar 2022",
    items: [
      "Designed and developed UI for Whitelist Webtool using HTML, CSS, JavaScript",
      "Integrated automation workflows using Integromat (Make)",
      "Developed chatbot system and monitored performance data",
      "Built interactive dashboards using Google Data Studio",
      "Managed database scripts using PostgreSQL",
    ],
  },
  {
    role: "OJT – IT Support / Multimedia Assistant",
    company: "Laguna State Polytechnic University",
    period: "Sept 2019 – Dec 2019",
    items: [
      "Assisted in network installation and system setup",
      "Designed event materials and multimedia presentations",
      "Organized and managed alumni records and documents",
    ],
  },
];

const PROJECTS = [
  {
    num: "01",
    title: "Loan Webtool UI Redesign",
    desc: "Redesigned an internal loan management interface focused on better usability and streamlined workflow for end users.",
    tools: ["Figma", "HTML", "CSS", "JavaScript"],
  },
  {
    num: "02",
    title: "Chatbot Automation System",
    desc: "Built a fully automated chatbot system using ManyChat integrated with Make (Integromat) for seamless multi-step workflow automation.",
    tools: ["ManyChat", "Make", "Integromat"],
  },
  {
    num: "03",
    title: "Marketing Creative Campaigns",
    desc: "Created social media ads, promotional videos, and visual content for QCredit Corp. across Facebook, TikTok, and YouTube platforms.",
    tools: ["Canva", "Photoshop", "Jitter", "Affinity", "Figma"],
  },
];

const CERTS = [
  { icon: "🏆", name: "UI/UX Beginners", issuer: "Simplilearn · 2025" },
  { icon: "🏆", name: "Full Stack Developer Course", issuer: "Simplilearn · 2025" },
  { icon: "☁️", name: "Introduction to Azure Services", issuer: "Microsoft / Simplilearn · 2025" },
  { icon: "🎨", name: "Canva for Beginners", issuer: "Simplilearn · 2025" },
  { icon: "🇵🇭", name: "Philippines Design Fest", issuer: "2025" },
  { icon: "🤖", name: "Website UI/UX Designing using ChatGPT", issuer: "2026" },
];

const MARQUEE_ITEMS = [
  "Figma","React JS","HTML & CSS","JavaScript","Golang","PostgreSQL",
  "ManyChat","Photoshop","Canva","Make Automation","Google Data Studio","Jitter Motion",
];

const CONTACT_LINKS = [
  { icon: "✉️", label: "Email", value: "rareplan1@gmail.com", href: "mailto:rareplan1@gmail.com" },
  { icon: "📱", label: "Phone", value: "0975-682-5216", href: "tel:09756825216" },
  { icon: "🎨", label: "Behance", value: "behance.net/familyreplan", href: "https://www.behance.net/familyreplan" },
  { icon: "💾", label: "GitHub", value: "github.com/rareplan", href: "https://github.com/rareplan" },
  { icon: "🌐", label: "Portfolio", value: "myportfolio-rareplan.onrender.com", href: "https://myportfolio-rareplan.onrender.com" },
];

// ── MY DESIGN DATA ─────────────────────────────────────
// 🖼️ Ilagay ang iyong images sa: public/designs/mvl/, public/designs/socmed/, public/designs/lenscraft/
const CASE_STUDIES = [
  {
    id: "mvl",
    num: "01",
    tag: "UI/UX Design",
    title: "MVL App",
    subtitle: "Streamlining Micro-Loans for Market Vendors",
    color: "#7c5cfc",
    role: "Lead UI/UX Designer",
    tools: ["Figma"],
    // 🖼️ 5 images — palitan ng iyong actual filenames
    images: [
  ui2,
],
    overview: "Market vendors often face financial gaps but find traditional banking processes slow or intimidating. They need a fast, reliable, and accessible way to manage micro-loans while working in a fast-paced environment.",
    goal: "To design a mobile-first solution that simplifies the loan application process and provides a clear, real-time view of financial status.",
    solution: "The MVL app focuses on a minimalist and functional approach. It minimizes the cognitive load for users who may be multitasking or are not tech-savvy by using high-contrast elements and a straightforward navigation flow.",
    highlights: [
      { icon: "👁️", label: "Visual Hierarchy", text: "Large font sizes for monetary values ensure readability even in bright, outdoor market settings." },
      { icon: "🎨", label: "Color Palette", text: "Deep blues and purples convey professionalism and security, while vibrant greens guide the user toward key actions." },
      { icon: "🔄", label: "Interactivity", text: "Logical flow from registration to the dashboard — the user never feels lost in the app." },
    ],
    principles: ["Consistency — unified button style and typography throughout", "Accessibility — high contrast for users in different lighting conditions", "Feedback — clear visual cues showing how one screen leads to another"],
  },
  {
    id: "socmed",
    num: "02",
    tag: "Product Design",
    title: "SocMed",
    subtitle: "Empowering Content Creators through Intuitive Management",
    color: "#00d9ff",
    role: "UI/UX Designer",
    tools: ["Figma", "React", "Styled Components"],
    images: [
      "/designs/socmed/socmed-1.jpg",
      "/designs/socmed/socmed-2.jpg",
      "/designs/socmed/socmed-3.jpg",
      "/designs/socmed/socmed-4.jpg",
      "/designs/socmed/socmed-5.jpg",
    ],
    overview: "Many social media management tools are cluttered and overwhelming for new creators. Users need a platform that feels creative yet professional and data-driven.",

goal: 'Create a "minimalist-vibrant" interface that uses soft gradients to reduce cognitive load while maintaining a creative energy for content creators.',

solution: "A split-screen onboarding layout paired with a card-based dashboard. One side focuses on the task (form), while the other reinforces the brand value — keeping users motivated throughout.",

highlights: [
  { icon: "🎨", label: "Color Theory", text: "Teal for stability and calm, Coral/Soft Orange for energy and action — guiding the user's eye to CTAs." },
  { icon: "📊", label: "Data Dashboard", text: "Card-based layout lets users distinguish Follower Growth, Weekly Revenue, and Recent Posts at a glance." },
  { icon: "🧭", label: "Navigation", text: "Clean vertical sidebar lets users switch contexts without losing their place in the workflow." },
],

principles: [
  "Engaging onboarding with split-screen layout",
  "Semi-transparent chart fills matching the airy UI feel",
  "Modular information architecture using cards"
],
},
{
  id: "lenscraft",
  num: "03",
  tag: "Landing Page",
  title: "LensCraft",
  subtitle: "An Educational Landing Page for Photography Enthusiasts",
  color: "#ff6b6b",
  role: "UI/UX Designer & Researcher",
  tools: ["Figma"],

  images: [
    "/designs/lenscraft/lenscraft-1.jpg",
    "/designs/lenscraft/lenscraft-2.jpg",
    "/designs/lenscraft/lenscraft-3.jpg",
    "/designs/lenscraft/lenscraft-4.jpg",
    "/designs/lenscraft/lenscraft-5.jpg",
  ],

  overview: "Photography can be intimidating for beginners due to technical jargon (ISO, sensor sizes, etc.). The challenge was organizing a large amount of educational content without making the page feel like a boring textbook.",

  goal: "Create a visually immersive experience that simplifies technical photography concepts into an easy-to-digest single-page layout.",

  solution: "Used F-pattern and Z-pattern layout to guide users from the high-impact hero image down to specific technical details, connecting gear to creative results through a Featured Photographers section.",

  highlights: [
    {
      icon: "🏗️",
      label: "Information Architecture",
      text: "F-pattern and Z-pattern layouts guide users naturally from the hero section down to technical details."
    },
    {
      icon: "🌑",
      label: "Dark Mode Aesthetic",
      text: "Deep blues and teals mimic the feeling of a darkroom or premium camera body — sophisticated and professional."
    },
    {
      icon: "🖼️",
      label: "Visual Elements",
      text: "High-quality product shots with star ratings give it a familiar e-commerce feel, lowering the learning curve."
    },
  ],

  principles: [
    "Card-based info for scannable content",
    "Direct CTA turning education into lead generation",
    "Micro-copy making photography feel accessible to everyone"
  ],
},
];

// ── HOOKS ─────────────────────────────────────────────
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

// ── NAVBAR ────────────────────────────────────────────
function Navbar({ scrolled, menuOpen, setMenuOpen }) {
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [setMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <a href="#home" className="nav-logo" onClick={() => setMenuOpen(false)}>RAR</a>
        <ul className="nav-links-desktop">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a href={`#${link.replace(" ", "-")}`}>{link}</a>
            </li>
          ))}
        </ul>
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-drawer ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        <ul className="mobile-nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a href={`#${link.replace(" ", "-")}`} onClick={() => setMenuOpen(false)}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {menuOpen && <div className="mobile-backdrop" onClick={() => setMenuOpen(false)} />}
    </>
  );
}

// ── HERO ──────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-tag">Available for opportunities</div>
          <h1 className="hero-name">
            Ron Arnold<br />
            <span className="accent-word">Replan.</span>
          </h1>
          <p className="hero-role">UI/UX Designer & Front-End Developer</p>
          <p className="hero-desc">
            Crafting user-friendly web interfaces, digital marketing creatives, and
            interactive systems. Passionate about usability, visual design, and
            performance-driven development.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View My Work ↓</a>
            <a href="#contact" className="btn btn-outline">Get In Touch</a>
          </div>
          <div className="hero-social">
            <a href="https://www.behance.net/familyreplan" target="_blank" rel="noreferrer" className="social-link"><span>Be</span> Behance</a>
            <a href="https://github.com/rareplan" target="_blank" rel="noreferrer" className="social-link"><span>GH</span> GitHub</a>
            <a href="https://myportfolio-rareplan.onrender.com" target="_blank" rel="noreferrer" className="social-link"><span>🌐</span> Portfolio</a>
          </div>
          <div className="stats-row">
            {[["4+","years exp."],["3","companies"],["6","certifications"],["10+","tools mastered"]].map(([num, label]) => (
              <div className="stat-item" key={label}>
                <div className="stat-num">{num}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-avatar">
          <div className="avatar-ring">
            <div className="avatar-inner">
              {/* Palitan ng <img src="/your-photo.jpg" alt="Ron" /> */}
              <span className="avatar-initials">RAR</span>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  );
}

// ── MARQUEE ───────────────────────────────────────────
function Marquee() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div className="marquee-item" key={i}>
            {item} <span className="marquee-dot" />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── SHARED ────────────────────────────────────────────
function SectionHeader({ label, title }) {
  return (
    <div className="section-header">
      <div className="section-label">{label}</div>
      <h2 className="section-title" dangerouslySetInnerHTML={{ __html: title }} />
    </div>
  );
}

// ── SKILLS ────────────────────────────────────────────
function SkillCard({ icon, category, tags }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`skill-card ${visible ? "visible" : ""}`}>
      <div className="skill-icon">{icon}</div>
      <div className="skill-category">{category}</div>
      <div className="skill-tags">
        {tags.map((t) => <span key={t} className="skill-tag">{t}</span>)}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="wrapper">
        <SectionHeader label="What I do" title="Skills &amp;<br/>Technologies" />
        <div className="skills-grid">
          {SKILLS.map((s) => <SkillCard key={s.category} {...s} />)}
        </div>
      </div>
    </section>
  );
}

// ── EXPERIENCE ────────────────────────────────────────
function TimelineItem({ role, company, period, items, delay ,src}) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`timeline-item ${visible ? "visible" : ""}`} style={{ transitionDelay: `${delay}s` }}>
      <div className="timeline-dot" />
      
      <div className="timeline-card">

  {src && (
    <img
      src={src}
      alt={company}
      className="timeline-logo"
    />
  )}

        <div className="timeline-header">
          <div className="timeline-role">{role}</div>
          <div className="timeline-period">{period}</div>
        </div>
        <div className="timeline-company">{company}</div>
        <ul className="timeline-list">
          {items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="wrapper">
        <SectionHeader label="Career path" title="Work<br/>Experience" />
        <div className="timeline">
          {EXPERIENCES.map((exp, i) => (
            <TimelineItem key={exp.company} {...exp} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── PROJECTS ──────────────────────────────────────────
function ProjectCard({ num, title, desc, tools, delay }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`project-card ${visible ? "visible" : ""}`} style={{ transitionDelay: `${delay}s` }}>
      <div className="project-num">{num}</div>
      <div className="project-title">{title}</div>
      <p className="project-desc">{desc}</p>
      <div className="project-tools">
        {tools.map((t) => <span key={t} className="tool-chip">{t}</span>)}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="wrapper">
        <SectionHeader label="Selected works" title="Projects" />
        <div className="projects-grid">
          {PROJECTS.map((p, i) => <ProjectCard key={p.num} {...p} delay={i * 0.1} />)}
        </div>
      </div>
    </section>
  );
}

// ── CERTS ─────────────────────────────────────────────
function CertItem({ icon, name, issuer, delay }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`cert-item ${visible ? "visible" : ""}`} style={{ transitionDelay: `${delay}s` }}>
      <div className="cert-icon">{icon}</div>
      <div>
        <div className="cert-name">{name}</div>
        <div className="cert-issuer">{issuer}</div>
      </div>
    </div>
  );
}

function Certs() {
  const [eduRef, eduVisible] = useReveal();
  return (
    <section className="certs-section" id="certs">
      <div className="wrapper">
        <SectionHeader label="Credentials" title="Certifications &amp;<br/>Education" />
        <div ref={eduRef} className={`education-card ${eduVisible ? "visible" : ""}`}>
          <div className="edu-icon">🎓</div>
          <div>
            <div className="edu-degree">Bachelor of Science in Information Technology</div>
            <div className="edu-school">Laguna State Polytechnic University – San Pablo City</div>
          </div>
        </div>
        <div className="certs-grid">
          {CERTS.map((c, i) => <CertItem key={c.name} {...c} delay={i * 0.07} />)}
        </div>
      </div>
    </section>
  );
}

// ── MY DESIGN — IMAGE GALLERY (5 images per case study) ──
function ImageGallery({ images, color, title }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const total = images.length;

  const prev = () => setActive((c) => (c - 1 + total) % total);
  const next = () => setActive((c) => (c + 1) % total);

  // Keyboard nav for lightbox
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") setLightbox(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, active]);

  return (
    <div className="gallery-wrap">
      {/* Main image */}
      <div className="gallery-main" style={{ "--g-color": color }}>
        {images.map((src, i) => (
          <div key={i} className={`gallery-slide ${i === active ? "active" : ""}`}>
            <img
              src={src}
              alt={`${title} screen ${i + 1}`}
              className="gallery-img"
              draggable={false}
              onClick={() => setLightbox(true)}
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <div className="gallery-placeholder" style={{ display: "none" }}>
              <span style={{ fontSize: "2.5rem" }}>🖼️</span>
              <p>Image {i + 1}<br /><span style={{ fontSize: "0.7rem", opacity: 0.5 }}>{src}</span></p>
            </div>
          </div>
        ))}

        {/* Arrows on main */}
        <button className="gallery-arrow gallery-arrow-left" onClick={prev}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <button className="gallery-arrow gallery-arrow-right" onClick={next}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
        </button>

        {/* Counter badge */}
        <div className="gallery-badge" style={{ background: color }}>
          {active + 1}/{total}
        </div>

        {/* Expand hint */}
        <div className="gallery-expand-hint">click to expand</div>
      </div>

      {/* Thumbnails row */}
      <div className="gallery-thumbs">
        {images.map((src, i) => (
          <button
            key={i}
            className={`gallery-thumb ${i === active ? "active" : ""}`}
            style={{ "--g-color": color }}
            onClick={() => setActive(i)}
          >
            <img
              src={src}
              alt={`thumb ${i + 1}`}
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentElement.classList.add("thumb-placeholder");
                e.target.parentElement.textContent = i + 1;
              }}
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(false)}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <img src={images[active]} alt={`${title} ${active + 1}`} className="lightbox-img" />
            <button className="lightbox-close" onClick={() => setLightbox(false)}>✕</button>
            <button className="lightbox-prev" onClick={prev}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <button className="lightbox-next" onClick={next}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
            <div className="lightbox-counter" style={{ color }}>{active + 1} / {total}</div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── MY DESIGN — CASE STUDY CARD ───────────────────────
function CaseStudyCard({ cs, delay }) {
  const [ref, visible] = useReveal();
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      ref={ref}
      className={`cs-card ${visible ? "visible" : ""}`}
      style={{ "--cs-color": cs.color, transitionDelay: `${delay}s` }}
    >
      {/* Color top bar */}
      <div className="cs-bar" />

      {/* Header */}
      <div className="cs-head">
        <div className="cs-meta">
          <span className="cs-num">{cs.num}</span>
          <span className="cs-tag" style={{ color: cs.color, background: `${cs.color}15`, border: `1px solid ${cs.color}30` }}>
            {cs.tag}
          </span>
        </div>
        <h3 className="cs-title">{cs.title}</h3>
        <p className="cs-subtitle">{cs.subtitle}</p>
      </div>

      {/* Image Gallery — 5 images */}
      <ImageGallery images={cs.images} color={cs.color} title={cs.title} />

      {/* Overview always visible */}
      <div className="cs-section">
        <div className="cs-section-label">
          <span>📋</span> Overview
        </div>
        <p className="cs-text">{cs.overview}</p>
      </div>

      <div className="cs-section">
        <div className="cs-section-label">
          <span>🎯</span> Goal
        </div>
        <p className="cs-text">{cs.goal}</p>
      </div>

      {/* Expandable content */}
      <div className={`cs-expandable ${expanded ? "open" : ""}`}>
        <div className="cs-section">
          <div className="cs-section-label"><span>💡</span> Solution</div>
          <p className="cs-text">{cs.solution}</p>
        </div>

        <div className="cs-section">
          <div className="cs-section-label"><span>✨</span> Design Highlights</div>
          <div className="cs-highlights">
            {cs.highlights.map((h, i) => (
              <div key={i} className="cs-highlight-item">
                <span className="cs-highlight-icon">{h.icon}</span>
                <div>
                  <div className="cs-highlight-label" style={{ color: cs.color }}>{h.label}</div>
                  <p className="cs-text">{h.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cs-section">
          <div className="cs-section-label"><span>📐</span> UX Principles Applied</div>
          <ul className="cs-principles">
            {cs.principles.map((p, i) => (
              <li key={i} style={{ "--cs-color": cs.color }}>{p}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer: tools + toggle */}
      <div className="cs-footer">
        <div className="cs-tools">
          <span className="cs-tools-label">Tools:</span>
          {cs.tools.map((t) => (
            <span key={t} className="cs-chip" style={{ color: cs.color, background: `${cs.color}12`, borderColor: `${cs.color}30` }}>
              {t}
            </span>
          ))}
          <span className="cs-chip" style={{ color: cs.color, background: `${cs.color}12`, borderColor: `${cs.color}30` }}>
            {cs.role}
          </span>
        </div>
        <button className="cs-toggle" style={{ color: cs.color }} onClick={() => setExpanded((o) => !o)}>
          {expanded ? "Show Less ↑" : "Read Full Case Study ↓"}
        </button>
      </div>
    </div>
  );
}

// ── MY DESIGN SECTION ─────────────────────────────────
function MyDesign() {
  const [headerRef, headerVisible] = useReveal();
  return (
    <section className="mydesign-section" id="my-design">
      <div className="wrapper">
        <div ref={headerRef} className={`mydesign-header ${headerVisible ? "hv" : ""}`}>
          <div className="section-label">Creative work</div>
          <h2 className="section-title">
            My Design <span className="accent-word">Showcase</span>
          </h2>
          <p className="mydesign-sub">
            A collection of UI/UX and graphic design work — each with 5 screens and a full case study.
          </p>
        </div>

        <div className="cs-grid">
          {CASE_STUDIES.map((cs, i) => (
            <CaseStudyCard key={cs.id} cs={cs} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CONTACT ───────────────────────────────────────────
function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="wrapper">
        <div className="contact-inner">
          <div>
            <div className="section-label">Let's work together</div>
            <h2 className="contact-headline">
              Got a<br />project?<br /><span>Let's talk.</span>
            </h2>
            <p className="contact-desc">
              Open to freelance projects, full-time opportunities, and creative collaborations. Feel free to reach out!
            </p>
          </div>
          <div className="contact-links">
            {CONTACT_LINKS.map(({ icon, label, value, href }) => (
              <a key={label} href={href} className="contact-link-item"
                target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                <div className="contact-link-icon">{icon}</div>
                <div>
                  <div className="contact-link-label">{label}</div>
                  <div className="contact-link-value">{value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── FOOTER ────────────────────────────────────────────
function Footer() {
  return (
    <footer>
      <p>© 2026 Ron Arnold B. Replan · UI/UX Designer & Front-End Developer · Built with ♥ in the Philippines</p>
    </footer>
  );
}

// ── APP ───────────────────────────────────────────────
export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <Navbar scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero/>
      <Marquee />
      <Skills />
      <Experience />
      <Projects />
      <Certs />
      <MyDesign />
      <Contact />
      <Footer />
    </>
  );
}