import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import { gmailLink } from "../Components/shared";
import Web from "./web";
import Mobile from "./mobile";
import Writeups from "./writeups";

const skills = ["PHP", "Laravel", "MySQL", "JavaScript", "HTML5", "CSS3", "React", "React Native", "Git", "Linux", "Web Security & Analysis"];

const terminalLines = [
  { type: "cmd", text: "whoami" },
  { type: "out", text: "full-stack dev + security researcher" },
  { type: "cmd", text: "stack --list", gap: true },
  { type: "out", text: "php · laravel · mysql · javascript · react" },
  { type: "cmd", text: "bounty --list", gap: true },
  { type: "ok", text: "✓ open redirect       $100" },
  { type: "ok", text: "✓ open redirect → xss $500" },
  { type: "ok", text: "✓ host header inj.    reported" },
];

function Home() {
  return (
    <>
      <Navbar />

      <section className="hero section-shell" id="about">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</p>
          <h1>Building for the web.<br /><span>Thinking about security.</span></h1>
          <p className="hero-subtitle">Nicole Franz Dizon · Web Developer | Cybersecurity Enthusiast</p>
          <p className="hero-description">
            Full-Stack Web Developer passionate about building secure, responsive, and scalable web applications.
            I enjoy solving complex problems and writing clean, maintainable code using PHP, Laravel, MySQL, and JavaScript.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={gmailLink} target="_blank" rel="noopener noreferrer">Get in touch <span>↗</span></a>
            <a className="button button-secondary" href="/resume.pdf" target="_blank" rel="noopener noreferrer">View resume</a>
          </div>
          <div className="social-links">
            <a href="https://github.com/Dolus101" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/nicole-franz-dizon-20a028252/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://gembie.medium.com" target="_blank" rel="noreferrer">Medium ↗</a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Terminal card">
          <div className="terminal">
            <div className="terminal-bar">
              <span className="t-dot" /><span className="t-dot" /><span className="t-dot t-dot-accent" />
              <span className="terminal-title">nicole@portfolio ~</span>
            </div>
            <div className="terminal-body">
              {terminalLines.map((line, i) => (
                <div key={i} className={line.gap ? "t-gap" : ""}>
                  {line.type === "cmd" && <span><b>$</b> {line.text}</span>}
                  {line.type === "out" && <span className="t-muted">{line.text}</span>}
                  {line.type === "ok" && <span className="t-ok">{line.text}</span>}
                </div>
              ))}
              <div className="t-gap"><b>$</b> <span className="t-cursor" /></div>
            </div>
          </div>
          <div className="floating-note note-top"><span>01 /</span> Build with purpose</div>
          <div className="floating-note note-bottom"><span>02 /</span> Secure by design</div>
        </div>
      </section>

      <section className="intro-strip">
        <div className="section-shell intro-grid">
          <p>MY FOCUS</p>
          <span>Full-stack development</span>
          <span>Mobile applications</span>
          <span>Cybersecurity research</span>
        </div>
      </section>

      <Web />
      <Mobile />

      <section className="toolkit-section" id="skills">
        <div className="section-shell toolkit-layout">
          <div className="toolkit-intro">
            <p className="toolkit-eyebrow">TOOLKIT / 02</p>
            <h2>Technologies I work with.</h2>
            <p className="toolkit-desc">
              Tools, frameworks, and core technical skills leveraged across full-stack web development and cybersecurity experiments.
            </p>
          </div>
          <div className="toolkit-grid">
            {skills.map((skill, i) => {
              const isLast = i === skills.length - 1;
              const wide = isLast && skills.length % 2 === 1;
              return (
                <div className={`toolkit-item${wide ? " toolkit-item-wide" : ""}`} key={skill}>
                  <span className="toolkit-index">{String(i + 1).padStart(2, "0")}</span>
                  <span className="toolkit-name">{skill}</span>
                  <span className="toolkit-arrow">↗</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Writeups />
      <Footer />
    </>
  );
}

export default Home;