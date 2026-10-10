import { useState } from "react";
import OmniMobile from "../assets/OmniMobile.jpg";
import Flexi from "../assets/Flexi.jpg";
import { ProjectCard, Lightbox } from "../Components/shared";

const mobileProjects = [
  {
    title: "OmniBook Mobile",
    description: "OmniBook mobile is for student to browse and borrow books from library.",
    image: OmniMobile,
    tags: ["Mobile UI", "Student Portals"],
  },
  {
    title: "Flexi",
    description: "Flexi is for student that is used for sign in or sign out when there's an event.",
    image: Flexi,
    tags: ["Event Track", "Utilities"],
  },
];

export default function Mobile() {
  const [zoomedImage, setZoomedImage] = useState(null);

  return (
    <section className="section-shell mobile-section" id="mobile-projects">
      <div className="mobile-heading">
        <div>
          <p className="eyebrow">MOBILE DEVELOPMENT</p>
          <h3>Small screens. Useful experiences.</h3>
        </div>
        <span className="muted-label">02 PROJECTS</span>
      </div>
      <div className="project-grid">
        {mobileProjects.map((p) => (
          <ProjectCard key={p.title} project={p} kicker="MOBILE APPLICATION" onZoom={setZoomedImage} />
        ))}
      </div>
      <Lightbox src={zoomedImage} onClose={() => setZoomedImage(null)} />
    </section>
  );
}
