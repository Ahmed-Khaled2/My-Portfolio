import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const css = `
  :root {
  --bg: ${darkMode ? '#0a0f1f' : '#f5f6fa'};
  --panel: ${darkMode ? 'rgba(255,255,255,0.09)' : 'rgba(0,0,0,0.09)'};
  --muted: ${darkMode ? '#fff' : '#555'};
  --primary: ${darkMode ? '#fff' : '#1a1a1a'};
  --accent1: #ff6ec4;
  --accent2: #7873f5;
  --hero-gradient: ${darkMode ? 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(120,115,245,0.08) 100%)' : 'linear-gradient(135deg, rgba(255,110,196,0.08) 0%, rgba(120,115,245,0.08) 100%)'};
  }
  html, body, #root {
    background: var(--bg);
    color: var(--primary);
  }
  .card {
    background: var(--panel);
    color: var(--primary);
    border-radius: 14px;
    box-shadow: 0 4px 24px 0 rgba(120,115,245,0.08), 0 1.5px 8px 0 rgba(120,115,245,0.10);
    transition: box-shadow 0.2s, transform 0.2s;
  }
  .card:hover {
    box-shadow: 0 8px 32px 0 rgba(120,115,245,0.16), 0 3px 16px 0 rgba(120,115,245,0.18);
    transform: translateY(-2px) scale(1.01);
  }
  .muted {
    color: var(--muted);
  }
  .header {
    background: ${darkMode ? 'linear-gradient(180deg, #070a17 0%, #14173a 100%)' : 'linear-gradient(180deg, #e0e2f0 0%, #c1c4e3 100%)'};
    color: ${darkMode ? '#fff' : '#1a1a1a'};
  }
  .btn-primary {
    background: linear-gradient(90deg, var(--accent1), var(--accent2));
    color: #fff;
    border: none;
  }
  .btn-ghost {
    background: transparent;
    border: 1.5px solid var(--accent2);
    color: var(--primary);
  }

  * { box-sizing: border-box; }
  html, body, #root {
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    min-height: 100vh;
    width: 100vw;
  }

  /* App container */
  .app-wrap {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 100vw;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  flex: 1;
  padding-top: 64px;
  }

  /* Header */
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 1000;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 12px 20px;
    background: linear-gradient(180deg, rgba(10,15,31,0.6), rgba(10,15,31,0.45));
    backdrop-filter: blur(6px);
    border-bottom: 1px solid rgba(255,255,255,0.03);
    transition: background 0.2s, box-shadow 0.2s;
    box-shadow: 0 2px 12px rgba(10,15,31,0.10);
  }

  .logo {
    font-weight: 700;
    font-size: 1.05rem;
    letter-spacing: 0.2px;
    color: ${darkMode ? '#fff' : '#1a1a1a'};
  }

  .logo button {
    background: none;
    border: none;
    color: white;
    text-decoration: none;
    font-weight: 700;
    font-size: 1.05rem;
    letter-spacing: 0.2px;
    cursor: pointer;
    border-radius: 6px;
    padding: 2px 8px;
    display: inline-block;
    background-image: linear-gradient(90deg, var(--accent1), var(--accent2));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    transition: 'color 0.2s, box-shadow 0.2s, transform 0.2s, background 0.2s';
  }
  .logo button:hover {
    color: #fff;
    -webkit-text-fill-color: #fff;
    text-fill-color: #fff;
    background: var(--accent1);
    box-shadow: 0 4px 18px 0 rgba(255,110,196,0.22), 0 1.5px 8px 0 rgba(255,110,196,0.18);
    transform: translateY(-2px) scale(1.08);
    z-index: 1;
  }

  nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
  }

  nav a {
    color: ${darkMode ? 'var(--muted)' : '#1a1a1a'};
    text-decoration: none;
    font-weight: 600;
    font-size: 0.95rem;
    padding: 6px 8px;
    border-radius: 6px;
  }

  nav a:hover {
    color: var(--accent1);
    background: rgba(255,255,255,0.02);
  }

  /* Hero */
  .hero {
  padding: 32px 2vw 28px;
  text-align: center;
  background: var(--hero-gradient);
  border: 1.5px solid var(--accent2);
  border-radius: 16px;
  box-shadow: 0 8px 32px 0 rgba(10,15,31,0.28), 0 1.5px 8px 0 rgba(120,115,245,0.12);
  max-width: 900px;
  width: 100%;
  margin: 3vh auto 2vh auto;
  transition: box-shadow 0.2s;
  will-change: box-shadow;
  color: unset;
}

  .hero-inner { max-width: 980px; margin: 0 auto; }
  .profile-img {
    width: 240px;
    height: 320px;
    min-width: 180px;
    min-height: 220px;
    max-width: 320px;
    max-height: 400px;
    border-radius: 16px;
    background: linear-gradient(135deg, #ff6ec4 0%, #7873f5 100%), rgba(10,15,31,0.12);
    box-shadow: 0 2px 12px rgba(10,15,31,0.18);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin-left: 8px;
    position: relative;
  }
  .profile-img img {
    border-radius: 16px;
    width: 100%;
    height: 100%;
    object-fit: contain;
    background: none;
    padding: 0;
    box-shadow: none;
    display: block;
    margin: auto;
  }
  @media (max-width: 900px) {
    .hero {
      padding: 24px 2vw 18px;
      border-radius: 12px;
      max-width: 95vw;
    }
    .hero-inner {
      max-width: 95vw;
    }
    .profile-img {
      width: 160px;
      height: 220px;
    }
  }
  @media (max-width: 600px) {
    .hero {
      padding: 12px 1vw 10px;
      border-radius: 8px;
      max-width: 99vw;
    }
    .hero-inner {
      max-width: 98vw;
    }
    .profile-img {
      width: 100px;
      height: 120px;
    }
  }

  .gradient-text {
    font-size: clamp(28px, 6vw, 44px);
    font-weight: 800;
    line-height: 1;
    background: linear-gradient(90deg, var(--accent1), var(--accent2));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0 0 8px 0;
  }

  .hero h2 {
    color: ${darkMode ? '#cfe3ff' : '#5551a1'};
    font-weight: 600;
    font-size: 1.15rem;
    margin: 0;
  }
  .hero p { max-width: 760px; margin: 25px auto 0; color: var(--muted); }

  .cta-row { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; margin-top: 18px; }

  .btn { padding: 10px 16px; border-radius: 10px; text-decoration: none; font-weight: 700; display: inline-block; }
  .btn-primary { background: linear-gradient(90deg, var(--accent1), var(--accent2)); color: #fff; }
  .btn-ghost { background: transparent; border: 1.5px solid var(--accent2); color: var(--muted); }

  .btn-primary:hover, .btn-ghost:hover {
    box-shadow: 0 4px 18px 0 rgba(255,110,196,0.22), 0 1.5px 8px 0 rgba(255,110,196,0.18);
    transform: translateY(-2px) scale(1.04);
    border-color: var(--accent1);
    color: #fff;
    transition: box-shadow 0.2s, transform 0.2s, border-color 0.2s, color 0.2s;
    z-index: 1;
  }

  /* Social icons row */
  .socials { margin-top: 15px; display: flex; gap: 12px; justify-content: center; }
  .socials a { display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 8px; background: none; color: #fff; text-decoration: none; border: 1.5px solid var(--accent2); }
  .socials svg { width: 18px; height: 18px; }
  .socials a:hover {
    box-shadow: 0 4px 18px 0 rgba(255,110,196,0.22), 0 1.5px 8px 0 rgba(255,110,196,0.18);
    transform: translateY(-2px) scale(1.08);
    border: 2px solid var(--accent1);
    color: #fff;
    background: var(--panel);
    transition: box-shadow 0.2s, transform 0.2s, border-color 0.2s, background 0.2s, color 0.2s;
    z-index: 1;
  }

  /* Sections */
  .section {
  padding: 28px 0 24px 0;
  border-top: 1px solid rgba(230, 37, 37, 0.02);
}
  .inner { max-width: 980px; margin: 0 auto; }
  .section h2 {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 18px;
    letter-spacing: 0.5px;
    background: linear-gradient(90deg, var(--accent1), var(--accent2), var(--accent1));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 200%;
    animation: accent-gradient-move 1.5s linear infinite alternate;
  }
  .muted { color: var(--muted); }

  /* Two-column responsive grid */
  .grid-2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px; }
  .card { background: var(--panel); padding: 16px; border-radius: 10px; }
  .project { background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); padding: 14px; border-radius: 8px; margin-bottom: 12px; }

  ul.clean { padding-left: 18px; }
  ul.inline { display: flex; flex-wrap: wrap; gap: 10px; list-style: none; padding: 0; margin: 0; }
  ul.inline li {
  background: none;
  padding: 6px 10px;
  border-radius: 8px;
}

  footer { padding: 18px 20px; text-align: center; color: var(--muted); }

  /* Responsive tweaks */
  @media (max-width: 880px) {
    .hero { padding: 42px 16px; }
    .section { padding: 32px 16px; }
    nav { gap: 8px; }
    .gradient-text { font-size: clamp(24px, 8vw, 36px); }
  }

  @media (max-width: 480px) {
    .cta-row { gap: 8px; }
    .socials a { width: 36px; height: 36px; }
    nav a { font-size: 0.9rem; padding: 6px; }
  }

  /* Offset anchor scroll for section titles */
  section[id] {
    scroll-margin-top: 30px;
  }

  @keyframes accent-gradient-move {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
}
@keyframes accent-gradient-move-btn {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
}
.section h2, .gradient-text {
  background: linear-gradient(90deg, var(--accent1), var(--accent2), var(--accent1));
  background-size: 200% 200%;
  animation: accent-gradient-move 1.5s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
.btn-primary {
  background: linear-gradient(90deg, var(--accent1), var(--accent2), var(--accent1));
  color: #fff;
  border: none;
  background-size: 200% 200%;
  animation: accent-gradient-move-btn 1.5s linear infinite;
}

  `;

  return (
    <div className="app-wrap">
      <style>{css}</style>

      <header className="header">
        <div className="logo">
          <button
            onClick={e => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              e.currentTarget.blur();
            }}
            style={{
              background: 'none',
              border: 'none',
              color: darkMode ? '#fff' : '#1a1a1a',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '1.05rem',
              letterSpacing: '0.2px',
              cursor: 'pointer',
              borderRadius: '6px',
              padding: '2px 8px',
              display: 'inline-block',
              backgroundImage: 'linear-gradient(90deg, var(--accent1), var(--accent2))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              transition: 'color 0.2s, box-shadow 0.2s, transform 0.2s, background 0.2s',
              outline: 'none',
            }}
            onMouseOver={e => {
              e.currentTarget.style.WebkitTextFillColor = 'transparent';
              e.currentTarget.style.textFillColor = 'transparent';
              e.currentTarget.style.backgroundImage = 'linear-gradient(90deg, var(--accent1), var(--accent2))';
              e.currentTarget.style.boxShadow = '0 4px 18px 0 rgba(255,110,196,0.22), 0 1.5px 8px 0 rgba(255,110,196,0.18)';
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.08)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.WebkitTextFillColor = 'transparent';
              e.currentTarget.style.textFillColor = 'transparent';
              e.currentTarget.style.backgroundImage = 'linear-gradient(90deg, var(--accent1), var(--accent2))';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'none';
            }}
          >
            Ahmed Khaled
          </button>
        </div>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#achievements">Achievements</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
          <button
            style={{
              marginLeft: '8px',
              background: 'linear-gradient(90deg, var(--accent1), var(--accent2))',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              padding: '6px 16px',
              fontWeight: '600',
              fontSize: '0.95rem',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(10,15,31,0.10)',
              transition: 'box-shadow 0.2s, transform 0.2s',
              outline: 'none',
            }}
            onClick={e => {
              setDarkMode && setDarkMode(prev => !prev);
              e.currentTarget.blur();
            }}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>
      </header>

      <div id="top"></div>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-inner" style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <div style={{flex: 1, minWidth: 0}}>
            <h1 id="hero-title" className="gradient-text">Ahmed Khaled</h1>
            <h2 style={{color: darkMode ? '#cfe3ff' : '#5551a1', fontWeight: 600, fontSize: '1.15rem', margin: 0}}>
              Data Engineer & Analyst
            </h2>
            <p style={{color: darkMode ? 'var(--muted)' : '#1a1a1a', fontSize: '1.08rem', margin: '25px auto 0', maxWidth: 760}}>
              Hello there! I love building efficient data pipelines and ensuring top-tier quality. My goal is to deliver scalable and elegant solutions according to your unique needs. Let's get in touch!
            </p>

            <div className="cta-row">
              <a className="btn btn-primary" href="#projects" style={{color: darkMode ? '#fff' : '#1a1a1a'}}>
                View Projects
              </a>
              <a className="btn btn-ghost" href="#contact" style={{color: darkMode ? 'var(--muted)' : '#1a1a1a', borderColor: 'var(--accent2)'}}>
                Get in touch
              </a>
              <a className="btn btn-ghost" href="/Ahmed Khaled.pdf" target="_blank" rel="noreferrer" style={{color: darkMode ? 'var(--muted)' : '#1a1a1a', borderColor: 'var(--accent2)'}}>
                Download CV
              </a>
            </div>

            <div className="socials" aria-hidden>
              <a href="mailto:ahmed.khaled.ff01@gmail.com" title="Email">
                <i className="fas fa-envelope" style={{fontSize: '22px', color: darkMode ? '#fff' : '#111'}}></i>
              </a>
              <a href="https://linkedin.com/in/dev-ahmed-khaled" title="LinkedIn" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin" style={{fontSize: '22px', color: darkMode ? '#fff' : '#111'}}></i>
              </a>
              <a href="https://github.com/Ahmed-Khaled2" title="GitHub" target="_blank" rel="noreferrer">
                <i className="fab fa-github" style={{fontSize: '22px', color: darkMode ? '#fff' : '#111'}}></i>
              </a>
            </div>
          </div>
          <div className="profile-img">
            <img src="/Hero Profile.png" alt="Profile" />
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="inner">
          <h2>About Me</h2>
          <div className="card">
            <p>
              Ever since I discovered problem-solving and stepped into the world of competitive programming, I was fascinated.
            </p>
            <p>
              After solving my first problem, I thought that was it just find the correct answer. Or so I thought. Over time, I began to understand the importance of code performance, and that’s when I knew I was hooked. That curiosity grew into a passion for optimizing code and applying problem-solving skills to my day-to-day work, which naturally led me to data engineering.
            </p>
            <p>
              Today, I thrive on building high-performance pipelines, ensuring top-tier quality, and tackling algorithmic challenges that others might shy away from. My background in competitive programming has sharpened my ability to design solutions that are both scalable and efficient.
            </p>
            <p>
              For me, every project is like a puzzle something I enjoy solving while making sure every piece fits perfectly. I also excel in tailoring each project uniquely to your needs.
            </p>
          </div>
        </div>
      </section>

      <section id="education" className="section">
        <div className="inner">
          <h2>Education & Experience</h2>
          <div className="card" style={{padding: '28px 20px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '22px', justifyContent: 'flex-start', flexWrap: 'wrap', marginBottom: '24px'}}>
              <div style={{background: 'white', borderRadius: '13px', padding: '10px', boxShadow: '0 2px 8px rgba(10,15,31,0.10)'}}>
                <img src="/The British University in Egypt.png" alt="British University in Egypt Logo" style={{height: '76px', width: 'auto', display: 'block'}} />
              </div>
              <div style={{background: 'white', borderRadius: '12px', padding: '10px', boxShadow: '0 2px 8px rgba(10,15,31,0.10)'}}>
                <img src="/London South Bank University.png" alt="London South Bank University Logo" style={{height: '76px', width: 'auto', display: 'block'}} />
              </div>
              <div style={{background: 'white', borderRadius: '12px', padding: '10px', boxShadow: '0 2px 8px rgba(10,15,31,0.10)'}}>
                <img src="/Digital Egypt Pioneers Initiative.png" alt="Digital Egypt Pioneers Initiative Logo" style={{height: '76px', width: 'auto', display: 'block'}} />
              </div>
              <div style={{background: 'white', borderRadius: '12px', padding: '10px', boxShadow: '0 2px 8px rgba(10,15,31,0.10)'}}>
                <img src="/Elevvo.png" alt="Elevvo Pathways Logo" style={{height: '76px', width: 'auto', display: 'block'}} />
              </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '0px'}}>
              <div>
                <div style={{fontWeight: 'bold', fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '8px'}}>
                  The British University in Egypt <span style={{color: 'var(--primary)', fontWeight: 'bold', fontSize: '1.3rem'}}>|</span> London South Bank University
                </div>
                <ul style={{color: 'var(--primary)', fontSize: '1rem'}}>
                  <li>BSc in Informatics and Computer Science — Artificial Intelligence</li>
                  <li>Dual-degree program combining British and Egyptian curricula.</li>
                  <li>Excellent GPA: 4.0 — ranked 5th in class.</li>
                </ul>
              </div>
              <div>
                <div style={{fontWeight: 'bold', fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '8px'}}>Digital Egypt Pioneers Initiative</div>
                <ul style={{color: 'var(--primary)', fontSize: '1rem'}}>
                  <li>Completed a 6-months specialized training in Microsoft Azure Data Engineering.</li>
                  <li>Learned ETL processes, data warehousing, and building scalable data pipelines.</li>
                </ul>
              </div>
              <div>
                <div style={{fontWeight: 'bold', fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '8px'}}>Elevvo Pathways</div>
                <ul style={{color: 'var(--primary)', fontSize: '1rem'}}>
                  <li>Trained in data cleaning, visualization, and statistical analysis.</li>
                  <li>Completed projects turning raw data into actionable reports and dashboards.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="inner">
          <h2>Skills</h2>
          <div className="card">
            <ul className="inline">
              <li>Python</li>
              <li>Pandas</li>
              <li>NumPy</li>
              <li>MatplotLib</li>
              <li>Seaborn</li>
              <li>SQL</li>
              <li>PyTorch</li>
              <li>OpenCV</li>
              <li>YOLO</li>
              <li>Web Scraping</li>
              <li>ETL / ELT</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="inner grid-2">
          <div>
            <h2>Work Experience</h2>
            <div className="card">
              <h3>Microsoft Data Engineer — DEPI</h3>
              <p className="muted">June 2025 – present | Hybrid</p>
              <ul className="clean">
                <li>Built a strong foundation in data engineering concepts, including pipelines and lifecycle management.</li>
                <li>Manipulated real-world data for analysis and automation using Python, NumPy, and Pandas.</li>
                <li>Grew professional communication and presentation skills through career development activities.</li>
              </ul>
            </div>
          </div>

          <div>
            <h2>&nbsp;</h2>
            <div className="card">
              <h3>Data Analysis Intern — Elevvo Pathways</h3>
              <p className="muted">July 2025 – Present | Remote</p>
              <ul className="clean">
                <li>Performed EDA, data cleaning, and RFM analysis to generate marketing insights.</li>
                <li>Used SQL for complex queries and built dashboards using Excel and visualizations.</li>
                <li>Applied web scraping with BeautifulSoup and Selenium to analyze job posting trends.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="inner">
          <h2>Offered Services</h2>
          <div className="grid-2">
            <div className="card">
              <h4>Data Engineering</h4>
              <p className="muted">Pipeline design, ETL, data lifecycle, SQL.</p>
            </div>
            <div className="card">
              <h4>Data Analysis & Visualization</h4>
              <p className="muted">EDA, dashboards, reporting, insights.</p>
            </div>
            <div className="card">
              <h4>AI & Computer Vision</h4>
              <p className="muted">Model training, YOLO detection, OpenCV pipelines.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="inner">
          <h2>Projects</h2>
          <div className="grid-2">
            <div className="card">
              <h4>Data Science & Visualization — Spotify</h4>
              <p className="muted">Python, pandas, matplotlib, seaborn, web-scraping</p>
              <p>Conducted a comprehensive analysis of a Spotify streaming dataset to uncover key factors influencing track rankings. Cleaned and enriched the dataset with additional web-scraped data, and created visualizations to generate actionable insights and answer research questions.</p>
              <a href="https://github.com/Ahmed-Khaled2/Streaming-Platforms-Dataset-Analysis" target="_blank" rel="noreferrer" className="btn btn-ghost"
                style={{ marginTop: '8px', fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <i className="fab fa-github"></i> GitHub
              </a>
            </div>
            <div className="card">
              <h4>Automatic Vehicle License Plate Blurring</h4>
              <p className="muted">YOLOv11n, PyTorch, OpenCV, CUDA</p>
              <p>Trained YOLO models (v8/v10/v11) and selected YOLOv11n after evaluation on precision/recall/mAP.</p>
              <p>Applied Gaussian blur anonymization and real-time video processing for deployment scenarios.</p>
              <a href="https://github.com/Ahmed-Khaled2/Automatic-License-Plate-Blurring-Egypt" target="_blank" rel="noreferrer" className="btn btn-ghost"
                style={{ marginTop: '8px', fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <i className="fab fa-github"></i> GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="achievements" className="section">
        <div className="inner">
          <h2>Achievements & Activities</h2>
          <div className="card">
            <ul className="clean">
              <li>ECPC Finalist, Alexandria - August 2025</li>
              <li>Educational visit to WE Telecom Data Center — March 2025</li>
              <li>Active member of ACM club; strong Codeforces activity — InterstellarGuo</li>
              <li>GPA: 4.0 — Ranked 5th</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="testimonials" className="section">
        <div className="inner">
          <h2>Testimonials</h2>
          <div className="card">
            <p className="muted">Example</p>
            <p>“Coming soon...” — N/A</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="inner grid-2">
          <div>
            <h2>Contact</h2>
            <div className="card">
              <p><strong>Email:</strong> <a href="mailto:ahmed.khaled.ff01@gmail.com">ahmed.khaled.ff01@gmail.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+201098929981">+20 109 892 9981</a></p>
              <p><strong>Location:</strong> New Cairo, Egypt</p>
            </div>
          </div>

          <div>
            <h2>Let’s work together</h2>
            <div className="card">
              <p className="muted">Available for internships and freelance projects in data engineering, analysis, and AI.</p>
              <p>If you have a project or opportunity, please reach out via email or LinkedIn.</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>Thank you for visiting — © {new Date().getFullYear()} Ahmed Khaled</p>
      </footer>
    </div>
  );
}