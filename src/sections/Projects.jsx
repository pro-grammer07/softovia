// Projects.jsx
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects';
import SectionWrapper from '../hoc';
import { Section } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = ({ 
  projects = projectsData,
  title = "Our Work",
  subtitle = "Lorem ipsum dolor sit amet",
  onProjectSelect,
  onProjectDemo,
  className = ""
}) => {

  const handleLearnMore = (project) => {
    if (onProjectSelect) {
        console.log("project handlelearn more:", project);
        console.log("onProjectSelect:", onProjectSelect);
        onProjectSelect(project);
    }
  };

  const handleDemo = (project) => {
    if (onProjectDemo) {
      onProjectDemo(project);
    }
  };

  return (
    <section className={`py-16 px-4 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-blue-500 font-medium mb-2">
            {title}
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            {subtitle}
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onLearnMore={handleLearnMore}
              onDemo={handleDemo}
              className={index % 2 === 1 ? 'lg:flex-row-reverse' : ''}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Projects, "projects");