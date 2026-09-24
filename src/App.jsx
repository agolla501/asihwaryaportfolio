import { useEffect, useState } from 'react'
import { caseStudies, experience, impactMetrics, skillGroups } from './data.js'

const ArrowUpRight = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
)

const DownloadIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18">
    <path d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14" />
  </svg>
)

const MailIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18">
    <path d="M3 6h18v12H3zM3 7l9 7 9-7" />
  </svg>
)

const SunIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="19" height="19">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
  </svg>
)

const MoonIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="19" height="19">
    <path d="M20.3 15.3A9 9 0 0 1 8.7 3.7 9 9 0 1 0 20.3 15.3Z" />
  </svg>
)

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Aishwarya Golla home" onClick={closeMenu}>
          <span className="brand-mark">AG</span>
          <span className="brand-name">Aishwarya Golla</span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
          <span className="sr-only">Toggle navigation</span>
        </button>

        <nav id="site-nav" className={menuOpen ? 'nav open' : 'nav'} aria-label="Primary navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <button
          className="theme-button"
          type="button"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
      </header>

      <main id="main">
        <section className="hero section" id="top">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="status-dot" /> AI Engineer · St. Louis, MO</p>
            <h1>
              Building AI systems that move from
              <span> model to measurable impact.</span>
            </h1>
            <p className="hero-summary">
              I design production-grade agentic AI, RAG, document intelligence, and MLOps
              platforms for high-stakes healthcare, insurance, and payment environments.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#work">Explore my work <ArrowUpRight /></a>
              <a className="button secondary" href="./Aishwarya_Golla_AI_Engineer_Resume.docx" download>
                Download résumé <DownloadIcon />
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="orbit orbit-one"><span>RAG</span></div>
            <div className="orbit orbit-two"><span>MLOps</span></div>
            <div className="orbit orbit-three"><span>MCP</span></div>
            <div className="core">
              <div className="core-ring" />
              <strong>AI</strong>
              <small>systems</small>
            </div>
            <div className="signal-card signal-top">
              <span>faithfulness</span>
              <strong>93%</strong>
            </div>
            <div className="signal-card signal-bottom">
              <span>p90 latency</span>
              <strong>−60%</strong>
            </div>
          </div>

          <div className="metrics-grid" aria-label="Selected impact metrics">
            {impactMetrics.map((metric) => (
              <div className="metric" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="about section" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 · About</p>
            <h2>Engineering reliable intelligence for real-world decisions.</h2>
          </div>
          <div className="about-copy">
            <p>
              My work sits at the intersection of applied AI and strong software engineering.
              I build systems that can retrieve the right context, reason through multi-step
              workflows, call trusted tools, and remain observable after deployment.
            </p>
            <p>
              Across my recent roles, I have developed HIPAA-aligned clinical AI platforms,
              automated document pipelines, optimized LLM inference, and operated more than
              100 production machine-learning models at high transaction volumes.
            </p>
            <div className="principles">
              <span>Secure by design</span>
              <span>Measured in production</span>
              <span>Human-centered automation</span>
            </div>
          </div>
        </section>

        <section className="work section" id="work">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">02 · Selected work</p>
              <h2>Systems built for scale, safety, and speed.</h2>
            </div>
            <p>Case studies drawn from my professional experience.</p>
          </div>

          <div className="case-grid">
            {caseStudies.map((item) => (
              <article className="case-card" key={item.number}>
                <div className="case-topline">
                  <span>{item.number}</span>
                  <span>{item.label}</span>
                </div>
                <p className="case-context">{item.context}</p>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <div className="outcome"><span>Impact</span>{item.outcome}</div>
                <ul className="tool-list" aria-label={`${item.title} technologies`}>
                  {item.tools.map((tool) => <li key={tool}>{tool}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="experience section" id="experience">
          <div className="section-heading">
            <p className="eyebrow">03 · Experience</p>
            <h2>From model development to production ownership.</h2>
          </div>

          <div className="timeline">
            {experience.map((job, index) => (
              <article className="timeline-item" key={`${job.company}-${job.dates}`}>
                <div className="timeline-marker"><span>{String(index + 1).padStart(2, '0')}</span></div>
                <div className="timeline-meta">
                  <p>{job.dates}</p>
                  <p>{job.location}</p>
                </div>
                <div className="timeline-body">
                  <p>{job.company}</p>
                  <h3>{job.role}</h3>
                  <p>{job.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skills section" id="skills">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">04 · Technical toolkit</p>
              <h2>Deep AI capability, grounded in engineering.</h2>
            </div>
            <p>Technologies used across deployed systems and data platforms.</p>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-group" key={group.title}>
                <div className="skill-index">0{index + 1}</div>
                <h3>{group.title}</h3>
                <ul>
                  {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="education section" id="education">
          <div>
            <p className="eyebrow">05 · Education</p>
            <h2>University of Memphis</h2>
            <p>Master of Science in Management Information Systems</p>
          </div>
          <div className="education-meta">
            <span>Memphis, TN</span>
            <span>2024 — 2025</span>
          </div>
        </section>

        <section className="contact section" id="contact">
          <p className="eyebrow">Let’s build something useful</p>
          <h2>Have an AI challenge that needs to work in production?</h2>
          <p>
            I’m open to conversations about AI engineering, agentic systems, applied machine
            learning, and MLOps opportunities.
          </p>
          <div className="contact-actions">
            <a className="button primary" href="mailto:agolla501@gmail.com">
              Start a conversation <MailIcon />
            </a>
            <a className="text-link" href="./Aishwarya_Golla_AI_Engineer_Resume.docx" download>
              Download résumé <DownloadIcon />
            </a>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand" href="#top" aria-label="Back to top">
          <span className="brand-mark">AG</span>
        </a>
        <p>© {new Date().getFullYear()} Aishwarya Golla</p>
        <p>AI Engineer · St. Louis, MO</p>
      </footer>
    </div>
  )
}

export default App
