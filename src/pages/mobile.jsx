import React, { useState } from 'react';
import OmniMobile from '../assets/OmniMobile.jpg';
import Flexi from '../assets/Flexi.jpg';

function Mobile() {
  const [zoomedImage, setZoomedImage] = useState(null);

  const mobileProjects = [
    {
      title: 'OmniBook Mobile',
      description: 'OmniBook mobile is for student to browse and borrow books from library.',
      image: OmniMobile,
      tags: ['Mobile UI', 'Student Portals']
    },
    {
      title: 'Flexi',
      description: "Flexi is for student that is usse for sign in or sign out when there's an event.",
      image: Flexi,
      tags: ['Event Track', 'Utilities']
    }
  ];

  return (
    <div id="mobile-projects" className="w-full bg-white px-6 py-16 text-slate-800 flex items-center scroll-mt-20">
      <div className="max-w-6xl mx-auto w-full">
        
        <h2 className="text-2xl font-bold text-black mb-8 text-center md:text-left">Mobile Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mobileProjects.map((project, index) => (
            <div key={index} className="project bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                {/* Added cursor-zoom-in and onClick handler */}
                <div 
                  className="w-full h-40 bg-gray-50 rounded overflow-hidden flex items-center justify-center p-2 border border-slate-100 cursor-zoom-in group"
                  onClick={() => setZoomedImage(project.image)}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200" 
                  />
                </div>
                
                <div className="flex flex-wrap gap-1.5 mt-4 mb-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-0.5 text-[10px] font-bold rounded bg-slate-100 text-slate-600 tracking-wider uppercase">
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-xl font-bold text-black mb-1">{project.title}</h2>
                <p className="text-slate-600 text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Zoom Overlay */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setZoomedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center">
            <img 
              src={zoomedImage} 
              alt="Zoomed project view" 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
            <button 
              className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl font-bold bg-black/40 w-10 h-10 rounded-full flex items-center justify-center"
              onClick={() => setZoomedImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Mobile;