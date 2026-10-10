import { useState } from "react";
import CNSP from "../assets/CNSP.png";
import CLLMSE from "../assets/CLLMSE.jpg";
import CAP from "../assets/CAP.png";
import CAPen from "../assets/CAPen.jpg";
import { SectionHeading, Tags, Lightbox } from "../Components/shared";

const articles = [
  {
    title: "How I earned $100, Open Redirect",
    description: "A detailed walkthrough of how I discovered and responsibly disclosed an Open Redirect vulnerability, earning a $100 bounty.",
    mediumUrl: "https://gembie.medium.com/how-i-earn-100-open-redirect-cfc93cf01213",
    tags: ["Vulnerability", "Open Redirect"],
  },
  {
    title: "$500, Open Redirect leads to XSS",
    description: "An in-depth exploration of how an Open Redirect vulnerability can be exploited to achieve Cross-Site Scripting (XSS), resulting in a $500 bounty.",
    mediumUrl: "https://gembie.medium.com/500-open-redirect-leads-to-xss-f4c23ddaaac0",
    tags: ["Vulnerability", "Open redirect", "XSS"],
  },
  {
    title: "Reset Password Poisoning via Host Header Injection",
    description: "A technical write-up on how Host Header Injection can be exploited to perform Reset Password Poisoning, highlighting the security implications and mitigation strategies.",
    mediumUrl: "https://gembie.medium.com/hi-everyone-its-nicole-franz-dizon-i-have-a-report-which-is-reset-password-poisoning-via-host-934f7e9b1bdc",
    tags: ["Vulnerability", "Host Header Injection"],
  },
];

const certificates = [
  { title: "Certified Network Security Practitioner", issuer: "PentestingExams.com", image: CNSP, tags: ["CNSP", "Network Security"] },
  { title: "Certified LLM Security Expert", issuer: "Red Team Leaders", image: CLLMSE, tags: ["CLLMSE", "AI Security"] },
  { title: "Certified AppSec Practitioner", issuer: "PentestingExams.com", image: CAP, tags: ["CAP", "Web Security"] },
  { title: "Certified AppSec Penetration", issuer: "PentestingExams.com", image: CAPen, tags: ["CAPen", "Web Security"] },
];

export default function Writeups() {
  const [zoomedImage, setZoomedImage] = useState(null);

  return (
    <>
      <section className="section-shell section-block" id="writeups">
        <SectionHeading eyebrow="KNOWLEDGE SHARING / 03" title="Technical write-ups and research." description="Deep dives, vulnerability research, and technical walkthroughs published on Medium." />
        <div className="project-grid">
          {articles.map((a) => (
            <article className="article-card" key={a.mediumUrl}>
              <div>
                <Tags tags={a.tags} />
                <h3>{a.title}</h3>
                <p className="card-description">{a.description}</p>
              </div>
              <a className="text-link" href={a.mediumUrl} target="_blank" rel="noopener noreferrer">Read full write-up <span>↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="certificate-section" id="certificates">
        <div className="section-shell section-block">
          <SectionHeading eyebrow="PROFESSIONAL DEVELOPMENT / 04" title="Cybersecurity certifications." description="Verified certifications and training credentials. Click to zoom." />
          <div className="certificate-grid">
            {certificates.map((cert) => (
              <article className="certificate-card" key={cert.title}>
                <div className="certificate-preview" onClick={() => setZoomedImage(cert.image)}>
                  <img src={cert.image} alt={cert.title} />
                </div>
                <div className="certificate-details">
                  <Tags tags={cert.tags} />
                  <h3>{cert.title}</h3>
                  <p className="card-description">{cert.issuer}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Lightbox src={zoomedImage} onClose={() => setZoomedImage(null)} />
    </>
  );
}
