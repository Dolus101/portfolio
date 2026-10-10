import { useState } from "react";
import omnibook from "../assets/OmniBook.png";
import ims from "../assets/IMSandDA.png";
import scholship from "../assets/scholarship.png";
import { SectionHeading, ProjectCard, Lightbox } from "../Components/shared";

const webProjects = [
  {
    title: "OmniBook",
    description: "A comprehensive book management application.",
    image: omnibook,
    tags: ["PHP", "Javascript", "MySQL"],
    link: "https://library.servbase.site",
  },
  {
    title: "IMS",
    description: "Inventory management system for handling large datasets.",
    image: ims,
    tags: ["PHP", "Javascript", "MySQL"],
    link: "COMING SOON",
  },
  {
    title: "Scholarship",
    description: "A platform for managing and distributing scholarship opportunities.",
    image: scholship,
    tags: ["PHP", "Javascript", "MySQL"],
    link: "https://scholarship.servbase.site/",
  },
];

export default function Web() {
  const [zoomedImage, setZoomedImage] = useState(null);

  return (
    <section className="section-shell section-block" id="web-projects">
      <SectionHeading eyebrow="SELECTED WORK / 01" title="Web projects." description="Click a screenshot to zoom in." />
      <div className="project-grid">
        {webProjects.map((p) => (
          <ProjectCard key={p.title} project={p} kicker="WEB APPLICATION" onZoom={setZoomedImage} />
        ))}
      </div>
      <Lightbox src={zoomedImage} onClose={() => setZoomedImage(null)} />
    </section>
  );
}
