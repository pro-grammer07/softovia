// ProjectDetail.jsx
import React from 'react';
import { ArrowLeft, ExternalLink, Calendar, User, Clock } from 'lucide-react';

const ProjectDetail = ({ 
  project, 
  onBack,
  onDemo 
}) => {
  
  const handleBack = () => {
    if (onBack) {
      onBack();
    }
  };

  const handleDemo = () => {
    if (onDemo) {
      onDemo(project);
    } else {
      window.open(project.demoUrl, '_blank');
    }
  };

  const handleGetInTouch = () => {
    if (onBack) {
      onBack();
    }
    setTimeout(() => {
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.hash = '#contact';
      }
    }, 100);
  };

  const handleViewMoreProjects = () => {
    if (onBack) {
      onBack();
    }
    setTimeout(() => {
      const projectsSection = document.querySelector('#projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.hash = '#projects';
      }
    }, 100);
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h2>
          <button 
            onClick={handleBack}
            className="text-blue-500 hover:text-blue-600 font-medium"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-blue-100 border-b">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
          <button
            onClick={handleBack}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors cursor-pointer hover:underline"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Project Info */}
            <div>
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {project.title}
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleDemo}
                  className="flex items-center justify-center bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View Live Demo
                </button>
                
                <div className="flex items-center text-gray-500">
                  <Calendar className="w-5 h-5 mr-2" />
                  {project.year}
                </div>
              </div>
            </div>

            {/* Project Main Image */}
            <div>
              <img 
                src={project.gallery?.[0] || project.gallery} 
                alt={project.title} 
                className="w-full h-auto rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-18 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Project Overview */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
              <div className="prose prose-lg text-gray-600 max-w-none">
                {project.detailedDescription.split('\n').map((paragraph, index) => (
                  paragraph.trim() && (
                    <p key={index} className="mb-4">
                      {paragraph.trim()}
                    </p>
                  )
                ))}
              </div>
            </section>

            {/* Screenshots */}
            {project.gallery && project.gallery.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Screenshots</h2>
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4">
                  {project.gallery.map((img, index) => (
                    <img 
                      key={index}
                      src={img} 
                      alt={`${project.title} screenshot ${index + 1}`} 
                      className="w-full h-auto object-cover rounded-lg shadow"
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Challenges */}
            {project.challenges && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Challenges</h2>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Results */}
            {project.results && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Results</h2>
                <ul className="space-y-3">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">{result}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Info */}
            <div className="bg-blue-100 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Project Info</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <User className="w-5 h-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Client</p>
                    <p className="font-medium text-gray-900">{project.client}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-medium text-gray-900">{project.duration}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Year</p>
                    <p className="font-medium text-gray-900">{project.year}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-blue-100 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-white text-gray-700 px-3 py-1 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-blue-600 rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2">Interested in similar work?</h3>
              <p className="text-blue-100 text-sm mb-4">Let's discuss your project requirements.</p>
              <button 
                onClick={handleGetInTouch}
                className="w-full bg-white border-2 border-white text-blue-600 py-2 px-4 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
                    {/* View More Projects Button */}
            <div className="pt-8 flex justify-center">
              <button
                onClick={handleViewMoreProjects}
                className="bg-blue-600 border-2 text-white px-15 py-3 rounded-lg hover:bg-white hover:border-blue-600 hover:text-blue-600 transition-colors font-medium cursor-pointer"
              >
                View More Projects
              </button>
            </div>
      </div>
      
    </div>
  );
};

export default ProjectDetail;
