<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Blue Proton Initiative</title>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,700&display=swap" rel="stylesheet">
<style>
  :root {
    --blue: #1a6fd4;
    --blue-light: #3b82f6;
    --text: #0a0a0a;
    --muted: #6b7280;
    --border: #e5e7eb;
    --bg: #ffffff;
    --section-pad: 120px;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'DM Sans', sans-serif;
    background: var(--bg);
    color: var(--text);
    overflow-x: hidden;
  }

  /* ── NAV ── */
  nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 48px;
    background: rgba(255,255,255,0.92);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid transparent;
    transition: border-color 0.3s;
  }
  nav.scrolled { border-bottom-color: var(--border); }

  .nav-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 600;
    font-size: 15px;
    letter-spacing: -0.3px;
    color: var(--text);
    text-decoration: none;
  }

  .nav-logo svg {
    width: 28px; height: 28px;
    color: var(--blue);
    flex-shrink: 0;
  }

  .nav-links {
    display: flex;
    gap: 36px;
    list-style: none;
  }

  .nav-links a {
    font-size: 14px;
    font-weight: 400;
    color: var(--muted);
    text-decoration: none;
    letter-spacing: 0.2px;
    transition: color 0.2s;
  }
  .nav-links a:hover { color: var(--text); }

  /* ── HERO ── */
  #home {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 100px 48px 60px;
    position: relative;
    background: radial-gradient(ellipse at 50% 30%, rgba(26,111,212,0.05) 0%, transparent 65%);
  }

  .atom-wrapper {
    margin-bottom: 40px;
    position: relative;
  }

  /* SVG atom logo — redrawn in code to match BPI style */
  .atom-svg {
    width: 80px; height: 80px;
    transition: transform 0.1s linear;
  }

  h1 {
    font-family: 'DM Sans', sans-serif;
    font-size: clamp(3.5rem, 9vw, 8rem);
    font-weight: 700;
    letter-spacing: -3px;
    line-height: 1;
    margin-bottom: 24px;
  }

  .hero-sub {
    font-size: 18px;
    color: var(--muted);
    font-weight: 300;
    line-height: 1.6;
    margin-bottom: 8px;
  }

  .hero-motto {
    font-size: 14px;
    color: var(--blue);
    font-style: italic;
    margin-top: 16px;
    letter-spacing: 0.3px;
  }

  .scroll-hint {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    color: var(--muted);
    font-size: 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
    animation: bounce 2s ease-in-out infinite;
  }

  .scroll-hint::after {
    content: '';
    width: 1px;
    height: 40px;
    background: linear-gradient(to bottom, var(--muted), transparent);
  }

  @keyframes bounce {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(6px); }
  }

  /* ── SECTIONS COMMON ── */
  section {
    padding: var(--section-pad) 48px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .section-label {
    font-size: 11px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 32px;
    font-weight: 500;
  }

  .section-headline {
    font-size: clamp(2rem, 4vw, 3.2rem);
    font-weight: 700;
    letter-spacing: -1.5px;
    line-height: 1.1;
    margin-bottom: 32px;
  }

  .section-divider {
    width: 100%;
    height: 1px;
    background: var(--border);
    margin: 0;
  }

  /* ── ABOUT ── */
  #about .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    margin-top: 48px;
    align-items: start;
  }

  .about-body {
    font-size: 17px;
    line-height: 1.8;
    color: #374151;
    font-weight: 300;
  }

  .about-pillars {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .pillar {
    display: flex;
    gap: 20px;
    align-items: flex-start;
  }

  .pillar-icon {
    width: 36px; height: 36px;
    color: var(--blue);
    flex-shrink: 0;
    margin-top: 2px;
  }

  .pillar h3 {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 6px;
    letter-spacing: -0.3px;
  }

  .pillar p {
    font-size: 14px;
    color: var(--muted);
    line-height: 1.6;
    font-weight: 300;
  }

  /* ── PROJECTS ── */
  #projects {
    background: #fafafa;
    max-width: 100%;
    padding: var(--section-pad) 0;
  }

  #projects .inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 48px;
  }

  .project-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    background: white;
    border: 1px solid var(--border);
    border-radius: 16px;
    overflow: hidden;
    margin-top: 48px;
  }

  .project-content {
    padding: 56px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .status-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    border: 1px solid var(--blue);
    border-radius: 4px;
    padding: 4px 10px;
    font-size: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--blue);
    font-weight: 600;
    width: fit-content;
    margin-bottom: 24px;
  }

  .status-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--blue);
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }

  .project-title {
    font-size: clamp(1.8rem, 3vw, 2.6rem);
    font-weight: 700;
    letter-spacing: -1px;
    line-height: 1.1;
    margin-bottom: 20px;
  }

  .project-desc {
    font-size: 15px;
    color: var(--muted);
    line-height: 1.7;
    font-weight: 300;
    margin-bottom: 36px;
  }

  .project-tags {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .tag {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: var(--muted);
    padding: 6px 12px;
    background: #f3f4f6;
    border-radius: 999px;
    font-weight: 400;
  }

  .tag svg { width: 12px; height: 12px; }

  .project-visual {
    background: linear-gradient(135deg, #f0f6ff 0%, #e8f0fe 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 48px;
    position: relative;
    overflow: hidden;
  }

  .node-card {
    background: white;
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 24px;
    width: 100%;
    max-width: 260px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.06);
  }

  .node-title {
    font-size: 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 16px;
    font-weight: 500;
  }

  .node-bar {
    height: 2px;
    background: #e5e7eb;
    border-radius: 1px;
    margin-bottom: 8px;
    position: relative;
    overflow: hidden;
  }

  .node-bar::before {
    content: '';
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--blue);
    top: -3px;
    animation: slide 3s ease-in-out infinite;
  }

  @keyframes slide {
    0% { left: 0; }
    100% { left: calc(100% - 8px); }
  }

  .node-meta {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  .node-meta-item { font-size: 11px; color: var(--muted); }
  .node-meta-item strong { display: block; font-size: 12px; color: var(--text); font-weight: 600; margin-top: 2px; }

  /* ── TEAM ── */
  #team .team-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2px;
    margin-top: 48px;
  }

  .team-member {
    padding: 36px 28px;
    border: 1px solid var(--border);
    border-radius: 12px;
    transition: background 0.2s, transform 0.2s;
    cursor: default;
  }

  .team-member:hover {
    background: #fafafa;
    transform: translateY(-2px);
  }

  .member-role {
    font-size: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--blue);
    font-weight: 600;
    margin-bottom: 12px;
  }

  .member-name {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -0.5px;
    margin-bottom: 12px;
    line-height: 1.2;
  }

  .member-desc {
    font-size: 13px;
    color: var(--muted);
    line-height: 1.6;
    font-weight: 300;
  }

  /* ── CONTACT ── */
  #contact {
    text-align: center;
    padding: var(--section-pad) 48px;
    background: var(--text);
    color: white;
    max-width: 100%;
  }

  #contact .inner {
    max-width: 700px;
    margin: 0 auto;
  }

  #contact .section-label { color: rgba(255,255,255,0.4); }

  #contact .section-headline { color: white; }

  .contact-links {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 40px;
  }

  .contact-link {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 14px 24px;
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 8px;
    color: white;
    text-decoration: none;
    font-size: 14px;
    font-weight: 400;
    transition: background 0.2s, border-color 0.2s;
    letter-spacing: 0.2px;
  }

  .contact-link:hover {
    background: rgba(255,255,255,0.08);
    border-color: rgba(255,255,255,0.3);
  }

  .contact-link svg { width: 16px; height: 16px; }

  /* ── FOOTER ── */
  footer {
    background: var(--text);
    color: rgba(255,255,255,0.3);
    padding: 24px 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    border-top: 1px solid rgba(255,255,255,0.06);
    max-width: 100%;
  }

  footer span { letter-spacing: 0.5px; }

  /* ── FADE IN ON SCROLL ── */
  .reveal {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }

  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    nav { padding: 16px 24px; }
    section { padding: 80px 24px; }
    #about .about-grid { grid-template-columns: 1fr; gap: 40px; }
    .project-card { grid-template-columns: 1fr; }
    .project-visual { min-height: 200px; }
    #team .team-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
    footer { flex-direction: column; gap: 8px; text-align: center; }
  }

  @media (max-width: 600px) {
    h1 { letter-spacing: -2px; }
    #team .team-grid { grid-template-columns: 1fr; }
    .nav-links { display: none; }
  }
</style>
</head>
<body>

<!-- NAV -->
<nav id="navbar">
  <a href="#home" class="nav-logo">
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.5">
      <ellipse cx="14" cy="14" rx="12" ry="5" transform="rotate(0 14 14)"/>
      <ellipse cx="14" cy="14" rx="12" ry="5" transform="rotate(60 14 14)"/>
      <ellipse cx="14" cy="14" rx="12" ry="5" transform="rotate(120 14 14)"/>
      <circle cx="14" cy="14" r="2" fill="currentColor" stroke="none"/>
    </svg>
    Blue Proton
  </a>
  <ul class="nav-links">
    <li><a href="#about">About</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#team">Team</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>

<!-- HERO -->
<div id="home">
  <div class="atom-wrapper">
    <svg class="atom-svg" id="atomLogo" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="40" cy="40" rx="36" ry="14" stroke="#1a6fd4" stroke-width="1.8"/>
      <ellipse cx="40" cy="40" rx="36" ry="14" stroke="#1a6fd4" stroke-width="1.8" transform="rotate(60 40 40)"/>
      <ellipse cx="40" cy="40" rx="36" ry="14" stroke="#1a6fd4" stroke-width="1.8" transform="rotate(120 40 40)"/>
      <circle cx="40" cy="40" r="6" fill="white" stroke="#1a6fd4" stroke-width="1.8"/>
      <text x="40" y="44" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="6" font-weight="700" fill="#1a6fd4">BPI</text>
      <!-- orbiting dot -->
      <circle id="orbitDot" cx="76" cy="40" r="3.5" fill="#1a6fd4"/>
    </svg>
  </div>

  <h1>Blue Proton</h1>
  <p class="hero-sub">A student-led STEM research group.</p>
  <p class="hero-sub">We build real things from scratch.</p>
  <p class="hero-motto">"dreams never freeze, neither at -70°C"</p>

  <div class="scroll-hint">scroll</div>
</div>

<div class="section-divider"></div>

<!-- ABOUT -->
<section id="about">
  <p class="section-label reveal">Who we are</p>
  <h2 class="section-headline reveal">We are a collective of high school<br>researchers pushing the boundaries<br>of independent STEM exploration.</h2>
  <div class="about-grid">
    <p class="about-body reveal">
      Blue Proton Initiative is an informal group of three 17-year-olds from Forlì, Italy, united by a shared passion for science and engineering. Founded by Pietro Maria Piazza, the initiative grew from a single idea into a structured research group working on real-world problems across AI, embedded systems, CAD design, and beyond.<br><br>
      We do not wait to be ready. We build, learn, and iterate — while still in high school.
    </p>
    <div class="about-pillars reveal">
      <div class="pillar">
        <svg class="pillar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"/>
        </svg>
        <div>
          <h3>AI & Neural Networks</h3>
          <p>Custom architectures for edge computing, focused on real-world applicability without cloud reliance. Expanding into biomedics, biology, and open-source research.</p>
        </div>
      </div>
      <div class="pillar">
        <svg class="pillar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"/>
        </svg>
        <div>
          <h3>Engineering & CAD</h3>
          <p>From structural design to embedded systems, bridging abstract research and physical hardware. Everything is designed and built in-house.</p>
        </div>
      </div>
      <div class="pillar">
        <svg class="pillar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
        </svg>
        <div>
          <h3>Software & Security</h3>
          <p>Proprietary software developed entirely in-house, with a strong focus on efficiency, reliability, and cybersecurity.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="section-divider"></div>

<!-- PROJECTS -->
<section id="projects" style="max-width:100%;padding:var(--section-pad) 0;">
  <div class="inner">
    <p class="section-label reveal">Featured Research</p>
    <h2 class="section-headline reveal">What we're building.</h2>

    <div class="project-card reveal">
      <div class="project-content">
        <div>
          <div class="status-badge">
            <div class="status-dot"></div>
            Status: In Progress
          </div>
          <h3 class="project-title">Edge Vision for<br>Livestock Health</h3>
          <p class="project-desc">An on-device computer vision system for real-time cattle identification, counting, and illness recognition. Running custom YOLO models on Arduino UNO Q hardware with zero cloud dependency.</p>
        </div>
        <div class="project-tags">
          <span class="tag">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            No Cloud Dependency
          </span>
          <span class="tag">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/></svg>
            Real-time Inference
          </span>
          <span class="tag">Arduino UNO Q</span>
          <span class="tag">YOLO V8</span>
        </div>
      </div>
      <div class="project-visual">
        <div class="node-card">
          <div class="node-title">NODE_ALPHA</div>
          <div class="node-bar"></div>
          <div style="font-size:11px;color:#9ca3af;text-align:right;margin-bottom:16px;">0.012s</div>
          <div style="height:1px;background:#f3f4f6;margin-bottom:16px;"></div>
          <div class="node-meta">
            <div class="node-meta-item">
              INFERENCE
              <strong>YOLO_V8</strong>
            </div>
            <div class="node-meta-item" style="text-align:right;">
              HARDWARE
              <strong>Arduino Q</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="section-divider"></div>

<!-- TEAM -->
<section id="team">
  <p class="section-label reveal">The team</p>
  <h2 class="section-headline reveal">A team of 17-year-old students from<br>Italy, redefining what independent<br>research looks like.</h2>

  <div class="team-grid">
    <div class="team-member reveal">
      <p class="member-role">Original Founder</p>
      <h3 class="member-name">Pietro Maria<br>Piazza</h3>
      <p class="member-desc">Research & Software Engineering. The architect behind the vision and core technical systems.</p>
    </div>
    <div class="team-member reveal" style="transition-delay:0.1s">
      <p class="member-role">Co-Founder</p>
      <h3 class="member-name">Davide<br>Santucci</h3>
      <p class="member-desc">Research & CAD Design. Translating complex requirements into precise physical and digital structures.</p>
    </div>
    <div class="team-member reveal" style="transition-delay:0.2s">
      <p class="member-role">Co-Founder</p>
      <h3 class="member-name">Alessandro<br>Nesci</h3>
      <p class="member-desc">Research & AI Training. Specializing in neural network optimization and dataset curation.</p>
    </div>
    <div class="team-member reveal" style="transition-delay:0.3s">
      <p class="member-role">Coder & Cybersecurity</p>
      <h3 class="member-name">Matteo<br>Angiolillo</h3>
      <p class="member-desc">Software development and cybersecurity. Keeping our systems fast, reliable, and secure.</p>
    </div>
  </div>
</section>

<div class="section-divider"></div>

<!-- CONTACT -->
<section id="contact" style="padding:var(--section-pad) 48px;">
  <div class="inner" style="max-width:700px;margin:0 auto;text-align:center;">
    <p class="section-label reveal" style="color:rgba(255,255,255,0.4)">Get in touch</p>
    <h2 class="section-headline reveal" style="color:white;">Want to work<br>with us?</h2>
    <p class="reveal" style="color:rgba(255,255,255,0.5);font-size:16px;font-weight:300;line-height:1.7;margin-top:16px;">
      We are always open to collaborations, partnerships, and conversations with people who share our drive.
    </p>
    <div class="contact-links reveal">
      <a href="https://www.instagram.com/blueproton_initiative" target="_blank" class="contact-link">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
        </svg>
        Instagram
      </a>
      <a href="mailto:blueprotoninitiative@gmail.com" class="contact-link">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
        </svg>
        blueprotoninitiative@gmail.com
      </a>
      <a href="https://www.youtube.com" target="_blank" class="contact-link">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"/>
          <path d="M19.5 12c0 7.5-7.5 9-7.5 9S4.5 19.5 4.5 12c0-7.5 7.5-9 7.5-9s7.5 1.5 7.5 9z"/>
        </svg>
        YouTube
      </a>
    </div>
  </div>
</section>

<footer>
  <span>© 2026 BLUE PROTON</span>
  <span>DREAMS NEVER FREEZE.</span>
</footer>

<script>
  // NAV scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });

  // Atom: rotate on scroll, fade out
  const atom = document.getElementById('atomLogo');
  const atomWrapper = document.querySelector('.atom-wrapper');
  let angle = 0;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroHeight = window.innerHeight;

    // Rotate
    angle = scrollY * 0.4;
    atom.style.transform = `rotate(${angle}deg)`;

    // Fade + move down
    const progress = Math.min(scrollY / (heroHeight * 0.5), 1);
    atomWrapper.style.opacity = 1 - progress;
    atomWrapper.style.transform = `translateY(${progress * 60}px)`;
  });

  // Reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => observer.observe(el));

  // Orbiting dot animation on atom
  const orbitDot = document.getElementById('orbitDot');
  let orbitAngle = 0;
  function animateOrbit() {
    orbitAngle += 0.015;
    const cx = 40 + 36 * Math.cos(orbitAngle);
    const cy = 40 + 14 * Math.sin(orbitAngle);
    orbitDot.setAttribute('cx', cx);
    orbitDot.setAttribute('cy', cy);
    requestAnimationFrame(animateOrbit);
  }
  animateOrbit();
</script>
</body>
</html>
