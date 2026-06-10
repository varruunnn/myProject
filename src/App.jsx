import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { contactLinks } from "./components/contactLinks";
import { skills } from "./components/skills";
import { projects } from "./components/projects";
import { experiences } from "./components/experiences";
import {
  GithubIcon,
  MailIcon,
  UserIcon,
  Code2Icon,
  BriefcaseIcon,
  GraduationCapIcon,
  ArrowUpRightIcon,
  SunIcon,
  MoonIcon,
} from "lucide-react";

/* ─── helpers ─── */
const Tag = ({ children }) => <span className="tag">{children}</span>;

const LazyImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="lazy-wrap">
      {!loaded && <div className="lazy-placeholder" />}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`lazy-img ${loaded ? "loaded" : ""}`}
      />
    </div>
  );
};

/* ─── theme toggle button ─── */
const ThemeToggle = ({ dark, onToggle }) => (
  <button
    className="theme-toggle"
    onClick={onToggle}
    aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    title={dark ? "Light mode" : "Dark mode"}
  >
    <motion.div
      key={dark ? "moon" : "sun"}
      initial={{ rotate: -30, opacity: 0, scale: 0.7 }}
      animate={{ rotate: 0, opacity: 1, scale: 1 }}
      exit={{ rotate: 30, opacity: 0, scale: 0.7 }}
      transition={{ duration: 0.2 }}
    >
      {dark ? <SunIcon size={16} /> : <MoonIcon size={16} />}
    </motion.div>
  </button>
);

/* ─── main ─── */
const Portfolio = () => {
  const [active, setActive] = useState("about");
  const [dark, setDark] = useState(true);
  const mainRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [active]);

  // Persist theme preference
  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved) setDark(saved === "dark");
  }, []);
  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem("portfolio-theme", next ? "dark" : "light");
  };

  const nav = [
    { id: "about",      label: "About",   icon: UserIcon },
    { id: "experience", label: "Work",    icon: BriefcaseIcon },
    { id: "projects",   label: "Projects",icon: Code2Icon },
    { id: "contact",    label: "Contact", icon: MailIcon },
  ];

  const handleContact = (href, label) => {
    if (label === "Email") {
      window.location.href = href;
    } else {
      window.open(href, "_blank", "noopener noreferrer");
    }
  };

  // CSS variable tokens driven by dark/light
  const tokens = dark
    ? {
        "--bg":          "#0d0d0d",
        "--bg-nav":      "rgba(13,13,13,0.88)",
        "--surface":     "rgba(255,255,255,0.03)",
        "--border":      "rgba(255,255,255,0.09)",
        "--border-hover":"rgba(255,255,255,0.22)",
        "--text-primary":"#f0f0f0",
        "--text-body":   "#c4c4c4",
        "--text-muted":  "#8a8a8a",
        "--text-subtle": "#555",
        "--btn-primary-bg":    "#f0f0f0",
        "--btn-primary-color": "#0d0d0d",
        "--btn-primary-hover": "#d4d4d4",
        "--toggle-bg":   "rgba(255,255,255,0.08)",
        "--toggle-color":"#c4c4c4",
        "--placeholder": "#181818",
        "--hero-name":   "#ffffff",
      }
    : {
        "--bg":          "#f5f5f3",
        "--bg-nav":      "rgba(245,245,243,0.90)",
        "--surface":     "rgba(0,0,0,0.03)",
        "--border":      "rgba(0,0,0,0.09)",
        "--border-hover":"rgba(0,0,0,0.22)",
        "--text-primary":"#111111",
        "--text-body":   "#3a3a3a",
        "--text-muted":  "#666666",
        "--text-subtle": "#aaaaaa",
        "--btn-primary-bg":    "#111111",
        "--btn-primary-color": "#f5f5f3",
        "--btn-primary-hover": "#333333",
        "--toggle-bg":   "rgba(0,0,0,0.07)",
        "--toggle-color":"#444444",
        "--placeholder": "#e8e8e5",
        "--hero-name":   "#0d0d0d",
      };

  const cssVarString = Object.entries(tokens)
    .map(([k, v]) => `${k}: ${v};`)
    .join(" ");

  return (
    <>
      <style>{`
        :root { ${cssVarString} }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }

        body {
          background: var(--bg);
          color: var(--text-body);
          font-family: 'Inter', 'SF Pro Text', system-ui, -apple-system, sans-serif;
          -webkit-font-smoothing: antialiased;
          line-height: 1.65;
          transition: background 0.25s ease, color 0.25s ease;
        }

        /* ── layout ── */
        .shell { max-width: 680px; margin: 0 auto; padding: 0 24px; }

        /* ── nav ── */
        .nav-bar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          background: var(--bg-nav);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--border);
          transition: background 0.25s ease, border-color 0.25s ease;
        }
        .nav-inner {
          max-width: 680px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          height: 56px;
          gap: 2px;
        }
        .nav-spacer { flex: 1; }
        .nav-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 13px;
          border: none;
          border-radius: 8px;
          background: transparent;
          color: var(--text-muted);
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: color .15s, background .15s;
          letter-spacing: 0.01em;
          white-space: nowrap;
        }
        .nav-btn:hover {
          color: var(--text-primary);
          background: var(--surface);
        }
        .nav-btn.active {
          color: var(--text-primary);
          background: var(--surface);
          font-weight: 600;
        }

        /* ── theme toggle ── */
        .theme-toggle {
          margin-left: 8px;
          width: 34px;
          height: 34px;
          border-radius: 8px;
          border: 1px solid var(--border);
          background: var(--toggle-bg);
          color: var(--toggle-color);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
          transition: background .15s, border-color .15s, color .15s;
        }
        .theme-toggle:hover {
          background: var(--surface);
          border-color: var(--border-hover);
          color: var(--text-primary);
        }

        /* ── main ── */
        .main { padding-top: 72px; }
        .section { padding: 52px 0 80px; }

        /* ── hero ── */
        .hero-name {
          font-size: clamp(30px, 5vw, 42px);
          font-weight: 700;
          letter-spacing: -0.03em;
          color: var(--hero-name);
          line-height: 1.12;
          margin-bottom: 12px;
          transition: color 0.25s;
        }
        .hero-role {
          font-size: 14px;
          color: var(--text-muted);
          margin-bottom: 22px;
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }
        .hero-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #22c55e;
          display: inline-block;
          box-shadow: 0 0 6px #22c55e;
          animation: blink 2.4s ease-in-out infinite;
          flex-shrink: 0;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
        .hero-sep { color: var(--border-hover); }
        .hero-link {
          color: var(--text-muted);
          text-decoration: none;
          transition: color .15s;
        }
        .hero-link:hover { color: var(--text-primary); }
        .hero-bio {
          font-size: 15px;
          color: var(--text-body);
          line-height: 1.78;
          margin-bottom: 32px;
          max-width: 560px;
        }
        .hero-actions { display: flex; gap: 10px; flex-wrap: wrap; }
        .btn-primary {
          padding: 9px 22px;
          background: var(--btn-primary-bg);
          color: var(--btn-primary-color);
          border: none;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          transition: background .15s, transform .12s;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .btn-primary:hover { background: var(--btn-primary-hover); transform: translateY(-1px); }
        .btn-ghost {
          padding: 9px 22px;
          background: transparent;
          color: var(--text-muted);
          border: 1px solid var(--border);
          border-radius: 8px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: border-color .15s, color .15s, transform .12s;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .btn-ghost:hover { border-color: var(--border-hover); color: var(--text-primary); transform: translateY(-1px); }

        /* ── section labels ── */
        .section-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: var(--text-subtle);
          margin-bottom: 28px;
          transition: color 0.25s;
        }

        /* ── education ── */
        .edu-block {
          padding: 22px 0;
          border-top: 1px solid var(--border);
          transition: border-color 0.25s;
        }
        .edu-block:last-child { border-bottom: 1px solid var(--border); }
        .edu-degree { font-size: 15px; font-weight: 600; color: var(--text-primary); margin-bottom: 4px; }
        .edu-school { font-size: 14px; color: var(--text-muted); margin-bottom: 2px; }
        .edu-years { font-size: 13px; color: var(--text-subtle); }
        .edu-note { font-size: 13px; color: var(--text-muted); margin-top: 8px; line-height: 1.65; }

        /* ── skills ── */
        .skills-section { margin-top: 52px; }
        .skill-group { margin-bottom: 32px; }
        .skill-group-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-subtle);
          margin-bottom: 14px;
        }
        .skill-grid { display: flex; flex-wrap: wrap; gap: 8px; }
        .skill-item {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 7px 13px;
          border: 1px solid var(--border);
          border-radius: 7px;
          font-size: 13px;
          color: var(--text-body);
          background: var(--surface);
          transition: border-color .15s, color .15s, background .15s;
          cursor: default;
        }
        .skill-item:hover {
          border-color: var(--border-hover);
          color: var(--text-primary);
        }
        .skill-icon { display: flex; align-items: center; flex-shrink: 0; }
        .skill-icon svg, .skill-icon * {
          width: 15px !important; height: 15px !important; font-size: 15px !important;
        }

        /* ── experience ── */
        .exp-list { display: flex; flex-direction: column; }
        .exp-item {
          padding: 28px 0;
          border-top: 1px solid var(--border);
          transition: border-color 0.25s;
        }
        .exp-item:last-child { border-bottom: 1px solid var(--border); }
        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 4px;
        }
        .exp-title { font-size: 15px; font-weight: 600; color: var(--text-primary); }
        .exp-company { font-size: 13px; color: var(--text-muted); margin-top: 3px; }
        .exp-period {
          font-size: 12px;
          color: var(--text-subtle);
          white-space: nowrap;
          padding-top: 3px;
          flex-shrink: 0;
        }
        .exp-desc {
          font-size: 13.5px;
          color: var(--text-body);
          line-height: 1.78;
          margin-top: 12px;
          white-space: pre-line;
        }
        .exp-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 14px; }
        .exp-links { display: flex; gap: 14px; margin-top: 12px; flex-wrap: wrap; }
        .exp-link {
          font-size: 12px;
          color: var(--text-muted);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 4px;
          transition: color .15s;
        }
        .exp-link:hover { color: var(--text-primary); }

        /* ── tags ── */
        .tag {
          font-size: 11px;
          padding: 3px 9px;
          border-radius: 5px;
          background: var(--surface);
          border: 1px solid var(--border);
          color: var(--text-muted);
          font-weight: 500;
          transition: background .2s, border-color .2s, color .2s;
        }

        /* ── projects ── */
        .proj-list { display: flex; flex-direction: column; }
        .proj-item {
          padding: 28px 0;
          border-top: 1px solid var(--border);
          transition: border-color 0.25s;
        }
        .proj-item:last-child { border-bottom: 1px solid var(--border); }
        .proj-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 8px;
        }
        .proj-name { font-size: 15px; font-weight: 600; color: var(--text-primary); }
        .proj-btns { display: flex; gap: 7px; flex-shrink: 0; }
        .proj-link-btn {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 5px 12px;
          border: 1px solid var(--border);
          border-radius: 6px;
          font-size: 12px;
          font-weight: 500;
          color: var(--text-muted);
          background: var(--surface);
          text-decoration: none;
          transition: border-color .15s, color .15s;
          white-space: nowrap;
        }
        .proj-link-btn:hover { border-color: var(--border-hover); color: var(--text-primary); }
        .proj-desc {
          font-size: 13.5px;
          color: var(--text-body);
          line-height: 1.72;
          margin-bottom: 12px;
        }
        .proj-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 14px; }

        /* ── lazy image ── */
        .lazy-wrap { position: relative; width: 100%; margin-top: 14px; border-radius: 8px; overflow: hidden; }
        .lazy-placeholder { width: 100%; padding-top: 52%; background: var(--placeholder); transition: background 0.25s; }
        .lazy-img {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 8px;
          opacity: 0;
          transition: opacity .45s ease;
          border: 1px solid var(--border);
        }
        .lazy-img.loaded { opacity: 1; }

        /* ── contact ── */
        .contact-list { display: flex; flex-direction: column; }
        .contact-item {
          padding: 18px 0;
          border-top: 1px solid var(--border);
          transition: border-color 0.25s;
        }
        .contact-item:last-child { border-bottom: 1px solid var(--border); }
        .contact-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          text-align: left;
          transition: opacity .15s;
        }
        .contact-btn:hover { opacity: 0.7; }
        .contact-left { display: flex; align-items: center; gap: 14px; }
        .contact-icon {
          width: 36px; height: 36px;
          border-radius: 8px;
          background: var(--surface);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          flex-shrink: 0;
          transition: background .2s, border-color .2s;
        }
        .contact-label { font-size: 14px; font-weight: 500; color: var(--text-primary); }
        .contact-user { font-size: 12px; color: var(--text-muted); margin-top: 1px; }
        .contact-arrow { color: var(--text-subtle); }
        .contact-note {
          font-size: 12px;
          color: var(--text-subtle);
          text-align: center;
          margin-top: 32px;
        }

        /* ── responsive ── */
        @media (max-width: 480px) {
          .shell { padding: 0 18px; }
          .nav-inner { padding: 0 16px; gap: 0; }
          .nav-btn { padding: 5px 9px; font-size: 12px; }
          .exp-header { flex-direction: column; gap: 3px; }
          .proj-header { flex-direction: column; gap: 8px; }
          .proj-btns { flex-direction: row; }
        }

        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
      `}</style>

      {/* ── NAV ── */}
      <header className="nav-bar">
        <div className="nav-inner">
          {nav.map((n) => (
            <button
              key={n.id}
              className={`nav-btn ${active === n.id ? "active" : ""}`}
              onClick={() => setActive(n.id)}
            >
              <n.icon size={14} />
              {n.label}
            </button>
          ))}
          <div className="nav-spacer" />
          <AnimatePresence mode="wait">
            <ThemeToggle dark={dark} onToggle={toggleTheme} />
          </AnimatePresence>
        </div>
      </header>

      {/* ── MAIN ── */}
      <main className="main" ref={mainRef}>
        <div className="shell">
          <AnimatePresence mode="wait">

            {/* ── ABOUT ── */}
            {active === "about" && (
              <motion.div key="about"
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <section className="section">
                  <h1 className="hero-name">Varun Choudhary</h1>
                  <div className="hero-role">
                    <span className="hero-dot" />
                    <span>Available for opportunities</span>
                    <span className="hero-sep">·</span>
                    <a href="https://hashnode.com/@varuunnn" target="_blank" rel="noopener noreferrer" className="hero-link">Blog</a>
                    <span className="hero-sep">·</span>
                    <a href="https://leetcode.com/u/vaarrrruuuunnnnn/" target="_blank" rel="noopener noreferrer" className="hero-link">LeetCode</a>
                  </div>
                  <p className="hero-bio">
                    Full Stack Engineer focused on scalable backend systems, real-time applications, and developer tooling. Currently exploring Rust, Web3, and distributed systems.
                  </p>
                  <div className="hero-actions">
                    <a href="/resume.pdf" target="_blank" className="btn-primary">
                      Resume <ArrowUpRightIcon size={13} />
                    </a>
                    <button className="btn-ghost" onClick={() => setActive("contact")}>
                      Get in touch
                    </button>
                  </div>

                  {/* Education */}
                  <div style={{ marginTop: 60 }}>
                    <p className="section-label">Education</p>
                    <div className="edu-block">
                      <p className="edu-degree">B.Tech · Electronics &amp; Communication</p>
                      <p className="edu-school">Netaji Subhas Institute of Technology, New Delhi</p>
                      <p className="edu-years">2023 – 2027</p>
                      <p className="edu-note">Active in college hackathons and tech events. Self-taught in web development through projects and open-source contributions.</p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="skills-section">
                    <p className="section-label">Skills</p>
                    {skills.map((group, gi) => (
                      <div className="skill-group" key={gi}>
                        <p className="skill-group-label">{group.category}</p>
                        <div className="skill-grid">
                          {group.items.map((skill, si) => (
                            <motion.div key={si} className="skill-item"
                              whileHover={{ y: -2 }} transition={{ duration: 0.12 }}
                            >
                              <span className="skill-icon">{skill.icon}</span>
                              {skill.name}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </motion.div>
            )}

            {/* ── EXPERIENCE ── */}
            {active === "experience" && (
              <motion.div key="experience"
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <section className="section">
                  <p className="section-label">Work &amp; Open Source</p>
                  <div className="exp-list">
                    {experiences.map((exp, i) => (
                      <motion.div key={i} className="exp-item"
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.06, duration: 0.2 }}
                      >
                        <div className="exp-header">
                          <div>
                            <p className="exp-title">{exp.title}</p>
                            <p className="exp-company">{exp.company}</p>
                          </div>
                          <p className="exp-period">{exp.period}</p>
                        </div>
                        <p className="exp-desc">{exp.description}</p>
                        <div className="exp-tags">
                          {exp.technologies.map((t, ti) => <Tag key={ti}>{t}</Tag>)}
                        </div>
                        {exp.links && exp.links.length > 0 && (
                          <div className="exp-links">
                            {exp.links.map((link, li) => (
                              <a key={li} href={link.url} target="_blank" rel="noopener noreferrer" className="exp-link">
                                {link.label} <ArrowUpRightIcon size={11} />
                              </a>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </section>
              </motion.div>
            )}

            {/* ── PROJECTS ── */}
            {active === "projects" && (
              <motion.div key="projects"
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <section className="section">
                  <p className="section-label">Projects</p>
                  <div className="proj-list">
                    {projects.map((proj, i) => (
                      <motion.div key={i} className="proj-item"
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.2 }}
                      >
                        <div className="proj-header">
                          <p className="proj-name">{proj.name}</p>
                          <div className="proj-btns">
                            {proj.demoLink && proj.demoLink !== proj.githubLink && (
                              <a href={proj.demoLink} target="_blank" rel="noopener noreferrer" className="proj-link-btn">
                                Demo <ArrowUpRightIcon size={11} />
                              </a>
                            )}
                            <a href={proj.githubLink} target="_blank" rel="noopener noreferrer" className="proj-link-btn">
                              <GithubIcon size={12} /> Code
                            </a>
                          </div>
                        </div>
                        <p className="proj-desc">{proj.description}</p>
                        <div className="proj-tags">
                          {proj.technologies.map((t, ti) => <Tag key={ti}>{t}</Tag>)}
                        </div>
                        <LazyImage src={proj.img} alt={proj.name} />
                      </motion.div>
                    ))}
                  </div>
                </section>
              </motion.div>
            )}

            {/* ── CONTACT ── */}
            {active === "contact" && (
              <motion.div key="contact"
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <section className="section">
                  <p className="section-label">Contact</p>
                  <p style={{ fontSize: 15, color: "var(--text-body)", marginBottom: 32, lineHeight: 1.75 }}>
                    Open to full-time roles, freelance, and interesting collaborations. Best way to reach me is email.
                  </p>
                  <div className="contact-list">
                    {contactLinks.map((c, i) => (
                      <motion.div key={i} className="contact-item"
                        initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.07 }}
                      >
                        <button className="contact-btn" onClick={() => handleContact(c.href, c.label)}>
                          <div className="contact-left">
                            <div className="contact-icon"><c.icon size={16} /></div>
                            <div>
                              <p className="contact-label">{c.label}</p>
                              <p className="contact-user">{c.username}</p>
                            </div>
                          </div>
                          <ArrowUpRightIcon size={15} className="contact-arrow" />
                        </button>
                      </motion.div>
                    ))}
                  </div>
                  <p className="contact-note">Open to remote opportunities worldwide</p>
                </section>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </main>
    </>
  );
};

export default Portfolio;