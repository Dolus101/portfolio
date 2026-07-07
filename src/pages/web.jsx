import React, { useState } from 'react';
import omnibook from '../assets/OmniBook.png';
import ims from '../assets/IMSandDA.png';
import scholship from '../assets/scholarship.png';

function Web() {
  // Track which image is currently zoomed in (null means closed)
  const [zoomedImage, setZoomedImage] = useState(null);

  const webProjects = [
    {
      title: 'OmniBook',
      description: 'A comprehensive book management application.',
      image: omnibook,
      tags: ['PHP', 'Javascript', 'MySQL']
    },
    {
      title: 'IMS',
      description: 'Inventory management system for handling large datasets.',
      image: ims,
      tags: ['PHP', 'Javascript', 'MySQL']
    },
    {
      title: 'Scholarship',
      description: 'A platform for managing and distributing scholarship opportunities.',
      image: scholship,
      tags: ['PHP', 'Javascript', 'MySQL']

    }
  ];

  return (
    <div id="web-projects" className="w-full bg-white px-6 py-16 text-slate-800 flex items-center scroll-mt-20">
      <div className="max-w-6xl mx-auto w-full">
        
        <h2 className="text-2xl font-bold text-black mb-8 text-center md:text-left">Web Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webProjects.map((project, index) => (
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
          className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 cursor-zoom-out animate-fadeIn"
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

export default Web;