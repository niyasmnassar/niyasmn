import { useEffect, useRef, useState } from "react";

const data = {
  name: "Niyas M N",
  title: "Senior Frontend Developer",
  location: "Trivandrum, Kerala",
  email: "niyasmn786@gmail.com",
  phone: "+91 97461 50416",
  linkedin: "linkedin.com/in/niyasmnassar",
  github: "github.com/niyasmnassar",
  summary:
    "Results-driven Senior Frontend Developer with 13+ years of experience designing and delivering high-performance, scalable web applications across global industries. Expert in React.js, Angular, TypeScript, and Redux with hands-on proficiency in Webpack, Vite, GSAP animations, and Figma design handoff.",
  stats: [
    { value: "13+", label: "Years Experience" },
    { value: "10+", label: "Enterprise Projects" },
    { value: "80+", label: "Countries Reached" },
    { value: "6+", label: "Companies Served" },
  ],
  skills: [
    { name: "React.js", level: 95 },
    { name: "Angular", level: 88 },
    { name: "TypeScript", level: 90 },
    { name: "JavaScript ES6+", level: 96 },
    { name: "GSAP", level: 85 },
    { name: "Redux", level: 87 },
    { name: "HTML5 & CSS3", level: 98 },
    { name: "Tailwind CSS", level: 88 },
    { name: "Webpack / Vite", level: 82 },
    { name: "Figma", level: 80 },
  ],
  experience: [
    {
      role: "Senior UI Developer",
      company: "Spericorn Technologies",
      period: "Jun 2022 – Present",
      desc: "Leading frontend development of 10+ enterprise apps. Delivered Nestlé's regional brand websites across 80+ countries.",
    },
    {
      role: "UI Consultant",
      company: "Growthplug",
      period: "Mar 2021 – Mar 2022",
      desc: "Engineered responsive web applications and facilitated UI/UX workshops for multiple client projects.",
    },
    {
      role: "UI Designer",
      company: "Bharathi Information Technology",
      period: "Jan 2018 – Feb 2021",
      desc: "Designed and developed intuitive interfaces. Conducted structured user research for iterative improvements.",
    },
    {
      role: "Senior UI Developer",
      company: "Thampy Digital Software",
      period: "Feb 2015 – Oct 2017",
      desc: "Built responsive layouts and prototypes. Translated business requirements into functional UI components.",
    },
    {
      role: "Senior UI Developer",
      company: "Artemas Technologies",
      period: "Jul 2014 – Feb 2015",
      desc: "Developed client-facing UIs with cross-browser compatible, responsive techniques.",
    },
    {
      role: "Sr. Web Designer",
      company: "Yatnam Technologies",
      period: "Nov 2011 – May 2014",
      desc: "Designed and maintained web apps using HTML, CSS, JS, Joomla, Magento, and WordPress.",
    },
  ],
  projects: [
    {
      name: "Nestlé International Websites",
      tag: "HTML/CSS · JS",
      url: "https://www.nestle.com",
      desc: "Brand websites for Nido & Nespresso spanning 80+ countries with full localisation.",
    },
    {
      name: "Spericorn ERP",
      tag: "React · Redux",
      url: "https://erp.spericorn.com",
      desc: "Internal ERP with project management, HR, resource allocation and reporting modules.",
    },
    {
      name: "Navratan Gemstones",
      tag: "React · GSAP",
      url: "https://navratan-dev.spericorn.com",
      desc: "Luxury e-commerce platform with cinematic GSAP scroll animations and premium UX.",
    },
    {
      name: "Spericorn Corporate",
      tag: "Angular · TS",
      url: "https://www.spericorn.com",
      desc: "Global corporate website for a tech company with US, Dubai, and India delivery units.",
    },
    {
      name: "Sitike Counseling",
      tag: "WordPress",
      url: "https://sitike.org",
      desc: "Accessible, empathetic UI for a US-based substance abuse treatment non-profit.",
    },
    {
      name: "Kollect Live",
      tag: "WordPress",
      url: "https://www.kollect.live",
      desc: "Dynamic frontend for a live-streaming collectibles community platform.",
    },
  ],
};

export default function Portfolio() {
  const heroRef = useRef(null);
  const heroTextRef = useRef(null);
  const heroBgRef = useRef(null);
  const statsRef = useRef([]);
  const skillsRef = useRef([]);
  const expRef = useRef([]);
  const projRef = useRef([]);
  const sectionTitlesRef = useRef([]);
  const gsapReady = useRef(false);
  const [downloading, setDownloading] = useState(false);

  const handleDownloadCV = async () => {
    setDownloading(true);
    try {
      // Fetch the original uploaded CV file and trigger download
      const response = await fetch("/Niyas_MN_Senior_Frontend_Developer_CV.docx");
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Niyas_MN_Senior_Frontend_Developer_CV.docx";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      // fallback: open in new tab
      window.open("/Niyas_MN_Senior_Frontend_Developer_CV.docx", "_blank");
    } finally {
      setTimeout(() => setDownloading(false), 1500);
    }
  };

  useEffect(() => {
    let gsap, ScrollTrigger;

    const init = async () => {
      // Load GSAP and ScrollTrigger from CDN
      await new Promise((resolve) => {
        const s1 = document.createElement("script");
        s1.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
        s1.onload = resolve;
        document.head.appendChild(s1);
      });
      await new Promise((resolve) => {
        const s2 = document.createElement("script");
        s2.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js";
        s2.onload = resolve;
        document.head.appendChild(s2);
      });

      gsap = window.gsap;
      ScrollTrigger = window.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);
      gsapReady.current = true;

      // ── Hero parallax: background drifts slower than content ──
      if (heroBgRef.current) {
        gsap.to(heroBgRef.current, {
          y: 180,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Hero text rises slightly as you scroll past
      if (heroTextRef.current) {
        gsap.to(heroTextRef.current, {
          y: -80,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "40% top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // ── Hero entrance animation ──
      const heroChildren = heroTextRef.current?.querySelectorAll(".hero-anim");
      if (heroChildren?.length) {
        gsap.from(heroChildren, {
          y: 60,
          opacity: 0,
          stagger: 0.12,
          duration: 1.1,
          ease: "power3.out",
        });
      }

      // ── Stats counter + parallax ──
      statsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          delay: i * 0.1,
        });
        // subtle parallax on each card
        gsap.to(el, {
          y: -20,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      });

      // ── Section title reveal ──
      sectionTitlesRef.current.forEach((el) => {
        if (!el) return;
        gsap.from(el, {
          x: -50,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      // ── Skill bars animate in ──
      skillsRef.current.forEach((el, i) => {
        if (!el) return;
        const bar = el.querySelector(".skill-fill");
        const pct = el.dataset.level;
        if (bar) {
          gsap.from(bar, {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 90%" },
            delay: i * 0.06,
          });
        }
        gsap.from(el, {
          x: -30,
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
          delay: i * 0.06,
        });
      });

      // ── Experience cards stagger + slide ──
      expRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.from(el, {
          x: i % 2 === 0 ? -60 : 60,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 87%" },
        });
        // depth parallax
        gsap.to(el, {
          y: -15,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          },
        });
      });

      // ── Project cards scale in ──
      projRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.from(el, {
          scale: 0.88,
          opacity: 0,
          duration: 0.75,
          ease: "back.out(1.3)",
          scrollTrigger: { trigger: el, start: "top 88%" },
          delay: (i % 3) * 0.08,
        });
        gsap.to(el, {
          y: -25,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.8,
          },
        });
      });
    };

    init();

    return () => {
      if (window.ScrollTrigger) window.ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const addToRef = (ref) => (el) => {
    if (el && !ref.current.includes(el)) ref.current.push(el);
  };

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: "#080808", color: "#e4ddd3", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&family=Syne:wght@400;500;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #080808; }
        ::-webkit-scrollbar-thumb { background: #b8a88a; border-radius: 2px; }

        .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 200; display: flex; justify-content: space-between; align-items: center; padding: 20px 48px; background: rgba(8,8,8,0.7); backdrop-filter: blur(12px); border-bottom: 0.5px solid rgba(184,168,138,0.1); }
        .nav-logo { font-family: 'Cormorant Garamond', serif; font-size: 22px; font-weight: 600; color: #b8a88a; letter-spacing: 0.05em; }
        .nav-links { display: flex; gap: 32px; }
        .nav-links a { font-family: 'Syne', sans-serif; font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: #666; text-decoration: none; transition: color 0.2s; }
        .nav-links a:hover { color: #b8a88a; }

        .hero { position: relative; height: 100vh; display: flex; align-items: center; overflow: hidden; }
        .hero-bg { position: absolute; inset: -20%; background: radial-gradient(ellipse 70% 60% at 60% 50%, rgba(184,168,138,0.07) 0%, transparent 70%), radial-gradient(ellipse 40% 50% at 20% 80%, rgba(100,80,60,0.08) 0%, transparent 60%); }
        .hero-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(184,168,138,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(184,168,138,0.04) 1px, transparent 1px); background-size: 80px 80px; }
        .hero-num { position: absolute; right: 48px; bottom: 80px; font-family: 'Cormorant Garamond', serif; font-size: 180px; font-weight: 300; color: rgba(184,168,138,0.04); line-height: 1; user-select: none; }
        .hero-content { position: relative; z-index: 2; padding: 0 10%; max-width: 900px; }
        .hero-eyebrow { font-family: 'Syne', sans-serif; font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; color: #b8a88a; margin-bottom: 24px; }
        .hero-name { font-family: 'Cormorant Garamond', serif; font-size: clamp(56px, 8vw, 110px); font-weight: 600; line-height: 0.92; color: #e4ddd3; margin-bottom: 8px; }
        .hero-name em { font-style: italic; font-weight: 300; color: #b8a88a; }
        .hero-title { font-family: 'Syne', sans-serif; font-size: 14px; letter-spacing: 0.12em; text-transform: uppercase; color: #555; margin-top: 20px; margin-bottom: 36px; }
        .hero-line { width: 60px; height: 1px; background: #b8a88a; margin: 28px 0; }
        .hero-summary { font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 300; line-height: 1.7; color: #9a9083; max-width: 560px; }
        .hero-cta { margin-top: 40px; display: flex; gap: 20px; flex-wrap: wrap; }
        .btn-gold { font-family: 'Syne', sans-serif; font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; padding: 14px 30px; border: 0.5px solid #b8a88a; color: #b8a88a; background: transparent; cursor: pointer; text-decoration: none; display: inline-block; transition: background 0.25s, color 0.25s; }
        .btn-gold:hover { background: #b8a88a; color: #080808; }
        .btn-ghost { font-family: 'Syne', sans-serif; font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; padding: 14px 30px; border: 0.5px solid #333; color: #666; background: transparent; cursor: pointer; text-decoration: none; display: inline-block; transition: border-color 0.25s, color 0.25s; }
        .btn-ghost:hover { border-color: #b8a88a; color: #b8a88a; }

        section { padding: 120px 10%; }
        .sec-label { font-family: 'Syne', sans-serif; font-size: 10px; letter-spacing: 0.26em; text-transform: uppercase; color: #b8a88a; margin-bottom: 12px; }
        .sec-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(36px, 5vw, 60px); font-weight: 600; line-height: 1.05; color: #e4ddd3; margin-bottom: 60px; }
        .sec-title em { font-style: italic; font-weight: 300; color: #b8a88a; }
        .divider { width: 100%; height: 0.5px; background: rgba(184,168,138,0.12); margin-bottom: 80px; }

        .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 1px; background: rgba(184,168,138,0.08); border: 0.5px solid rgba(184,168,138,0.08); }
        .stat-card { padding: 40px 28px; background: #080808; text-align: left; }
        .stat-val { font-family: 'Cormorant Garamond', serif; font-size: 56px; font-weight: 600; color: #b8a88a; line-height: 1; margin-bottom: 8px; }
        .stat-label { font-family: 'Syne', sans-serif; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: #555; }

        .skills-list { display: flex; flex-direction: column; gap: 20px; max-width: 640px; }
        .skill-row { }
        .skill-meta { display: flex; justify-content: space-between; margin-bottom: 8px; }
        .skill-name { font-family: 'Syne', sans-serif; font-size: 12px; letter-spacing: 0.1em; color: #c0b9b0; }
        .skill-pct { font-family: 'Cormorant Garamond', serif; font-size: 14px; color: #b8a88a; }
        .skill-track { height: 1px; background: rgba(184,168,138,0.1); position: relative; overflow: hidden; }
        .skill-fill { position: absolute; left: 0; top: 0; height: 100%; background: linear-gradient(90deg, #b8a88a, #d4c9b0); transform-origin: left; }

        .exp-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; background: rgba(184,168,138,0.06); }
        .exp-card { background: #080808; padding: 36px 32px; border: 0.5px solid transparent; transition: border-color 0.3s; }
        .exp-card:hover { border-color: rgba(184,168,138,0.2); }
        .exp-period { font-family: 'Syne', sans-serif; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: #b8a88a; margin-bottom: 10px; }
        .exp-role { font-family: 'Cormorant Garamond', serif; font-size: 22px; font-weight: 600; color: #e4ddd3; margin-bottom: 4px; }
        .exp-company { font-family: 'Syne', sans-serif; font-size: 11px; letter-spacing: 0.1em; color: #666; margin-bottom: 16px; }
        .exp-desc { font-family: 'Cormorant Garamond', serif; font-size: 16px; font-weight: 300; line-height: 1.65; color: #7a736c; }

        .proj-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; background: rgba(184,168,138,0.06); }
        .proj-card { background: #080808; padding: 36px 32px; border: 0.5px solid transparent; transition: border-color 0.3s, background 0.3s; cursor: pointer; text-decoration: none; display: block; color: inherit; }
        .proj-card:hover { border-color: rgba(184,168,138,0.25); background: #0f0f0d; }
        .proj-tag { font-family: 'Syne', sans-serif; font-size: 9px; letter-spacing: 0.18em; text-transform: uppercase; color: #b8a88a; border: 0.5px solid rgba(184,168,138,0.25); display: inline-block; padding: 4px 10px; margin-bottom: 16px; }
        .proj-name { font-family: 'Cormorant Garamond', serif; font-size: 22px; font-weight: 600; color: #e4ddd3; margin-bottom: 12px; line-height: 1.2; }
        .proj-desc { font-family: 'Cormorant Garamond', serif; font-size: 16px; font-weight: 300; line-height: 1.6; color: #7a736c; }
        .proj-arrow { font-family: 'Syne', sans-serif; font-size: 10px; color: #b8a88a; letter-spacing: 0.12em; margin-top: 20px; opacity: 0; transition: opacity 0.25s; }
        .proj-card:hover .proj-arrow { opacity: 1; }

        .btn-download { font-family: 'Syne', sans-serif; font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; padding: 14px 30px; border: none; color: #080808; background: #b8a88a; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; transition: opacity 0.2s, transform 0.2s; }
        .btn-download:hover { opacity: 0.88; }
        .btn-download:active { transform: scale(0.97); }
        .btn-download:disabled { opacity: 0.5; cursor: default; }
        .dl-icon { width: 13px; height: 13px; display: inline-block; position: relative; }
        @keyframes dlBounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(3px)} }
        .btn-download:not(:disabled) .dl-icon { animation: dlBounce 1.2s ease-in-out infinite; }
        .nav-dl { font-family: 'Syne', sans-serif; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; padding: 8px 18px; border: 0.5px solid #b8a88a; color: #b8a88a; background: transparent; cursor: pointer; transition: background 0.2s, color 0.2s; display: flex; align-items: center; gap: 6px; }
        .nav-dl:hover { background: #b8a88a; color: #080808; }
        .footer { border-top: 0.5px solid rgba(184,168,138,0.1); padding: 32px 10%; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; background: #080808; }
        .footer-name { font-family: 'Cormorant Garamond', serif; font-size: 18px; color: #b8a88a; }
        .footer-info { font-family: 'Syne', sans-serif; font-size: 11px; color: #555; letter-spacing: 0.1em; }

        @media (max-width: 900px) {
          .proj-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 700px) {
          .nav { padding: 16px 24px; }
          .nav-links { display: none; }
          section { padding: 80px 24px; }
          .hero-content { padding: 0 24px; }
          .hero-num { display: none; }
          .exp-grid { grid-template-columns: 1fr; }
          .proj-grid { grid-template-columns: 1fr; }
          .footer { flex-direction: column; align-items: flex-start; gap: 10px; padding: 28px 24px; }
        }
      `}</style>

      {/* NAV */}
      <nav className="nav">
        <span className="nav-logo">NMN</span>
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <div className="nav-links">
            {["About", "Skills", "Experience", "Projects"].map((n) => (
              <a key={n} href={`#${n.toLowerCase()}`}>{n}</a>
            ))}
          </div>
          <button className="nav-dl" onClick={handleDownloadCV} disabled={downloading}>
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M6 1v7M3 5l3 3 3-3M1 10h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
            {downloading ? "Downloading…" : "Download CV"}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" ref={heroRef} id="about">
        <div className="hero-bg" ref={heroBgRef} />
        <div className="hero-grid" />
        <div className="hero-num">13</div>
        <div className="hero-content" ref={heroTextRef}>
          <p className="hero-eyebrow hero-anim">Portfolio · Trivandrum, India</p>
          <h1 className="hero-name">
            <div className="hero-anim">Niyas</div>
            <div className="hero-anim"><em>M N</em></div>
          </h1>
          <p className="hero-title hero-anim">Senior Frontend Developer</p>
          <div className="hero-line hero-anim" />
          <p className="hero-summary hero-anim">
            13+ years crafting high-performance web applications for global brands — from Nestlé's international markets to enterprise ERP systems. Expert in React, Angular, GSAP & TypeScript.
          </p>
          <div className="hero-cta hero-anim">
            <a className="btn-gold" href={`mailto:${data.email}`}>Get in Touch</a>
            <button className="btn-download" onClick={handleDownloadCV} disabled={downloading}>
              <svg className="dl-icon" viewBox="0 0 12 12" fill="none"><path d="M6 1v7M3 5l3 3 3-3M1 10h10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
              {downloading ? "Downloading…" : "Download CV"}
            </button>
            <a className="btn-ghost" href={`https://${data.github}`} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: "0 10% 120px" }}>
        <div className="stats-grid">
          {data.stats.map((s, i) => (
            <div className="stat-card" key={s.label} ref={(el) => { statsRef.current[i] = el; }}>
              <div className="stat-val">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ padding: "0 10% 120px" }}>
        <div className="divider" />
        <p className="sec-label" ref={(el) => { sectionTitlesRef.current[0] = el; }}>Core Expertise</p>
        <h2 className="sec-title" ref={(el) => { sectionTitlesRef.current[1] = el; }}>Technical <em>Skills</em></h2>
        <div className="skills-list">
          {data.skills.map((s, i) => (
            <div
              className="skill-row"
              key={s.name}
              data-level={s.level}
              ref={(el) => { skillsRef.current[i] = el; }}
            >
              <div className="skill-meta">
                <span className="skill-name">{s.name}</span>
                <span className="skill-pct">{s.level}%</span>
              </div>
              <div className="skill-track">
                <div className="skill-fill" style={{ width: `${s.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" style={{ padding: "0 10% 120px" }}>
        <div className="divider" />
        <p className="sec-label" ref={(el) => { sectionTitlesRef.current[2] = el; }}>Career Journey</p>
        <h2 className="sec-title" ref={(el) => { sectionTitlesRef.current[3] = el; }}>Work <em>Experience</em></h2>
        <div className="exp-grid">
          {data.experience.map((e, i) => (
            <div
              className="exp-card"
              key={e.role + e.company}
              ref={(el) => { expRef.current[i] = el; }}
            >
              <p className="exp-period">{e.period}</p>
              <h3 className="exp-role">{e.role}</h3>
              <p className="exp-company">{e.company}</p>
              <p className="exp-desc">{e.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: "0 10% 120px" }}>
        <div className="divider" />
        <p className="sec-label" ref={(el) => { sectionTitlesRef.current[4] = el; }}>Selected Work</p>
        <h2 className="sec-title" ref={(el) => { sectionTitlesRef.current[5] = el; }}>Featured <em>Projects</em></h2>
        <div className="proj-grid">
          {data.projects.map((p, i) => (
            <a
              className="proj-card"
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              ref={(el) => { projRef.current[i] = el; }}
            >
              <div className="proj-tag">{p.tag}</div>
              <h3 className="proj-name">{p.name}</h3>
              <p className="proj-desc">{p.desc}</p>
              <p className="proj-arrow">View Project ↗</p>
            </a>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <span className="footer-name">Niyas M N</span>
        <span className="footer-info">{data.email} &nbsp;·&nbsp; {data.phone}</span>
        <span className="footer-info">
          <a href={`https://${data.linkedin}`} target="_blank" rel="noopener noreferrer" style={{ color: "#b8a88a", textDecoration: "none" }}>LinkedIn</a>
          &nbsp;·&nbsp;
          <a href={`https://${data.github}`} target="_blank" rel="noopener noreferrer" style={{ color: "#b8a88a", textDecoration: "none" }}>GitHub</a>
          &nbsp;·&nbsp;
          <span onClick={handleDownloadCV} style={{ color: "#b8a88a", cursor: "pointer", textDecoration: "none" }}>Download CV ↓</span>
        </span>
      </footer>
    </div>
  );
}
