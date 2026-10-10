import { gmailLink } from "./shared";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="section-shell footer-main">
        <div>
          <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
          <h2>Let&apos;s build something<br /><span>meaningful.</span></h2>
        </div>
        <a className="button button-primary" href={gmailLink} target="_blank" rel="noreferrer">Email me <span>↗</span></a>
      </div>
      <div className="section-shell footer-bottom">
        <span>© {new Date().getFullYear()} Nicole Franz Dizon</span>
        <span>Built with React JS <b>●</b> Tailwind CSS</span>
        <a href="#about">Back to top ↑</a>
      </div>
    </footer>
  );
}
