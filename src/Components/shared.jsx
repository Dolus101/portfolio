const myEmail = "nicoledizon115@gmail.com";
const subject = encodeURIComponent("Project Inquiry / Collaboration");
const body = encodeURIComponent("Hi Nicole,\n\nI saw your portfolio and wanted to reach out regarding...");

export const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${myEmail}&su=${subject}&body=${body}`;

export function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

export function Tags({ tags }) {
  return (
    <div className="tags">
      {tags.map((tag) => (
        <span className="tag" key={tag}>{tag}</span>
      ))}
    </div>
  );
}

export function ProjectCard({ project, kicker, onZoom }) {
  const { title, description, image, tags, link } = project;
  const hasLink = link && link !== "#";

  return (
    <article className="project-card">
      <div className="project-image-wrap" onClick={() => onZoom(image)}>
        <img src={image} alt={title} className="project-image" />
      </div>
      <div className="project-content">
        <p className="card-kicker">{kicker}</p>
        <h3>{title}</h3>
        <p className="card-description">{description}</p>
        <Tags tags={tags} />
        {hasLink &&
          (link === "COMING SOON" ? (
            <span className="project-link project-link-off">Coming soon</span>
          ) : (
            <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">
              Visit site <span>↗</span>
            </a>
          ))}
      </div>
    </article>
  );
}

export function Lightbox({ src, onClose }) {
  if (!src) return null;
  return (
    <div className="lightbox" onClick={onClose}>
      <img src={src} alt="Zoomed view" />
      <button className="lightbox-close" onClick={onClose} aria-label="Close">&times;</button>
    </div>
  );
}
