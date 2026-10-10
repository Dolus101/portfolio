import { gmailLink } from "./shared";

export default function Navbar() {
  return (
    <header className="site-header">
      <a className="brand" href="#about" aria-label="Back to top">
        <span className="brand-mark">&lt;/&gt;</span>
        <span>Nicole Franz Dizon</span>
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        <a href="#about">About me</a>
        <a href="#web-projects">Web projects</a>
        <a href="#mobile-projects">Mobile projects</a>
        <a href="#writeups">Writeups</a>
        <a href="#certificates">Certificates</a>
      </nav>

      <div className="header-right">
        <a className="header-social" href="https://www.linkedin.com/in/nicole-franz-dizon-20a028252/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="header-social" href="https://github.com/Dolus101" target="_blank" rel="noreferrer">GitHub</a>
        <a className="header-cta" href={gmailLink} target="_blank" rel="noreferrer">Let&apos;s talk <span>↗</span></a>
      </div>
    </header>
  );
}
