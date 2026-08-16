import React, { useState } from 'react';

function Writeups() {
  const [selectedImg, setSelectedImg] = useState(null);

  // Your Medium write-up data array
  const articles = [
    {
      title: 'How I earned $100, Open Redirect',
      description: 'A detailed walkthrough of how I discovered and responsibly disclosed an Open Redirect vulnerability, earning a $100 bounty.',
      mediumUrl: 'https://gembie.medium.com/how-i-earn-100-open-redirect-cfc93cf01213',
      tags: ['Vulnerability', 'Open Redirect'],
    },
    {
      title: '$500, Open Redirect leads to XSS',
      description: 'An in-depth exploration of how an Open Redirect vulnerability can be exploited to achieve Cross-Site Scripting (XSS), resulting in a $500 bounty.',
      mediumUrl: 'https://gembie.medium.com/500-open-redirect-leads-to-xss-f4c23ddaaac0',
      tags: ['Vulnerability', 'Open redirect', 'XSS'],
    },
    {
      title: 'Reset Password Poisoning via Host Header Injection',
      description: 'A technical write-up on how Host Header Injection can be exploited to perform Reset Password Poisoning, highlighting the security implications and mitigation strategies.',
      mediumUrl: 'https://gembie.medium.com/hi-everyone-its-nicole-franz-dizon-i-have-a-report-which-is-reset-password-poisoning-via-host-934f7e9b1bdc',
      tags: ['Vulnerability', 'Host Header Injection'],
    }
  ];

  // Your Cybersecurity Certificates Data updated with actual details
  const certificates = [
    {
      title: 'Certified Network Security Practitioner (CNSP)',
      issuer: 'PentestingExams.com',
      image: '/src/assets/certs/CNSP.png', 
    },
    {
      title: 'Certified LLM Security Expert (CLLMSE)',
      issuer: 'Red Team Leaders',
      image: '/src/assets/certs/CLLMSE.jpg',
    },
    {
      title: 'Certified API Security Practitioner (CAP)',
      issuer: 'PentestingExams.com',
      image: '/src/assets/certs/CAP.png',
    },
    {
      title: 'Certified Azure Penetration Tester (CAPen)',
      issuer: 'PentestingExams.com',
      image: '/src/assets/certs/CAPen.jpg',
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Container with teal-950 background */}
      <div id="writeups" className="w-full min-h-screen bg-teal-950 px-4 py-16 text-slate-100 flex flex-col justify-center">
        <div className="max-w-6xl mx-auto w-full space-y-20">
          
          {/* Section 1: Write-ups Header */}
          <div>
            <div className="mb-12 text-center md:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center justify-center md:justify-start gap-2">
                <span>✍️</span> Technical Write-ups & Research
              </h2>
              <p className="text-teal-200/70 text-sm md:text-base">
                Deep dives, vulnerability research, and technical walkthroughs published on Medium.
              </p>
            </div>

            {/* Write-ups Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <div 
                  key={index} 
                  className="group flex flex-col justify-between bg-teal-900/40 border border-teal-800/60 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/50 hover:shadow-[0_4px_20px_rgba(45,212,191,0.15)]"
                >
                  <div>
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="px-2.5 py-1 text-xs font-semibold rounded-md border bg-teal-500/10 text-teal-300 border-teal-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-2 transition-colors duration-200 group-hover:text-teal-300">
                      {article.title}
                    </h3>

                    {/* Description */}
                    <p className="text-teal-100/70 text-sm leading-relaxed mb-6">
                      {article.description}
                    </p>
                  </div>

                  {/* Action Link */}
                  <a 
                    href={article.mediumUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-teal-400 hover:text-teal-300 group/link"
                  >
                    Read full write-up 
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 ml-1 transform transition-transform duration-200 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Cybersecurity Certificates PNG Showcase */}
          <div>
            <div className="mb-12 text-center md:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center justify-center md:justify-start gap-2">
                <span>📜</span> Cybersecurity Certifications
              </h2>
              <p className="text-teal-200/70 text-sm md:text-base">
                Verified certifications and training credentials.
              </p>
            </div>

            {/* PNG Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImg(cert.image)}
                  className="group cursor-pointer flex flex-col justify-between overflow-hidden rounded-xl border border-teal-800/60 bg-teal-900/30 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/60 hover:shadow-[0_4px_20px_rgba(45,212,191,0.2)]"
                >
                  <div className="aspect-[16/10] w-full overflow-hidden rounded-lg bg-teal-950/80 p-1 border border-teal-800/40 flex items-center justify-center">
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3 px-1 pb-1">
                    <span className="text-[10px] font-semibold text-teal-400/80 uppercase tracking-wider block mb-0.5">
                      {cert.issuer}
                    </span>
                    <h3 className="text-xs font-bold text-teal-100 group-hover:text-teal-300 transition-colors duration-200 line-clamp-2">
                      {cert.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Fullscreen Image Preview Modal */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative max-w-4xl w-full bg-teal-950 border border-teal-800 rounded-xl p-3 shadow-2xl">
            <button 
              onClick={() => setSelectedImg(null)}
              className="absolute -top-10 right-0 text-slate-300 hover:text-white text-sm font-semibold"
            >
              Close ✕
            </button>
            <img 
              src={selectedImg} 
              alt="Certificate Full View" 
              className="w-full h-auto rounded-lg object-contain max-h-[85vh]"
            />
          </div>
        </div>
      )}

      <footer className="w-full py-6 text-center text-sm text-slate-400 bg-teal-950 border-t border-teal-900/80">
        <p>&copy; {currentYear} Built with React JS & Tailwind CSS. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Writeups;