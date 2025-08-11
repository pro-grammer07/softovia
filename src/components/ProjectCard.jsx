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
      console.log("project card onLearnMore:", project);
    }
  };

  const handleDemo = () => {
    if (onDemo) {
      onDemo(project);
    } else {
      window.open(project.demoUrl, '_blank');
    }
  };

  const displayImage = project.gallery?.[0] || project.image;

  return (
    <div className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden hover:scale-105 ${className}`}>
      {/* Mobile: column-reverse so image is last, Desktop: row so image is on right */}
      <div className="flex flex-col-reverse lg:flex-row gap-6">
        
        {/* Left Content Section */}
        <div className="flex flex-col justify-between flex-1">
          <div>
            {/* Category */}
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

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <button
              onClick={handleLearnMore}
              className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors group cursor-pointer hover:underline"
            >
              Learn More
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={handleDemo}
              className="flex items-center border-2 border-white bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-600 hover:border-blue-600 transition-colors text-sm font-medium cursor-pointer"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Demo
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex items-center justify-center flex-shrink-0 w-full lg:w-1/2">
          <img
            src={displayImage}
            alt={project.title}
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
