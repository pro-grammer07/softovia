// ProjectCard.jsx
import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const ProjectCard = ({ 
  project, 
  onLearnMore,
  onDemo,
  className = "" 
}) => {
  
  const handleLearnMore = () => {
    if (onLearnMore) {
      onLearnMore(project);
    }
  };

  const handleDemo = () => {
    if (onDemo) {
      onDemo(project);
    } else {
      // Default behavior - open demo in new tab
      window.open(project.demoUrl, '_blank');
    }
  };

  return (
    <div className={`bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden ${className}`}>
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Content Section */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            {/* Category Badge */}
            {project.category && (
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
            )}
            
            {/* Title */}
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4 leading-tight">
              {project.title}
            </h3>
            
            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Technologies */}
            {project.technologies && (
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleLearnMore}
              className="flex items-center text-blue-500 hover:text-blue-600 font-medium transition-colors group"
            >
              Learn More
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={handleDemo}
              className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Demo
            </button>
          </div>
        </div>
        
        {/* Image Section */}
        <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 p-8 flex items-center justify-center min-h-[300px] lg:min-h-[400px]">
          {/* Placeholder for project image */}
          <div className="relative w-full h-full max-w-md">
            {/* Browser mockup frame */}
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-300">
              {/* Browser header */}
              <div className="bg-gray-100 px-4 py-3 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white rounded px-3 py-1 text-xs text-gray-500 text-center">
                    {project.client || 'demo.example.com'}
                  </div>
                </div>
              </div>
              
              {/* Content area */}
              <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 p-6 relative overflow-hidden">
                {/* You can replace this with actual project image */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover rounded"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback content when image fails to load */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center" style={{display: 'none'}}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-200 rounded-lg mb-4 mx-auto flex items-center justify-center">
                      <ExternalLink className="w-8 h-8 text-blue-500" />
                    </div>
                    <p className="text-sm font-medium text-gray-600">Project Preview</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements for visual appeal */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-80"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-pink-400 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;