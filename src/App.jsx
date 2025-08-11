import { useState } from 'react'
import viteLogo from '/vite.svg'
import './index.css'
import Header from './components/Header'
import Hero from './sections/Hero'
import Stats from './components/Stats'
import Services from './sections/Services'
import Plans from './sections/Plans'
import Projects from './sections/Projects'
import projectsData from './data/projects'
import ProjectDetail from './components/ProjectDetail'
import Team from './sections/Team'
import Contact from './sections/Contact'
import Footer from './components/Footer'


function App() {

  const [currentView, setCurrentView] = useState('projects'); // 'projects' or 'detail'
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectSelect = (project) => {
    console.log("App Selected project:", project);
    setSelectedProject(project);
    setCurrentView('detail');
    scrollTo(0, 0);
  };

  const handleBackToProjects = () => {
    setCurrentView('projects');
    setSelectedProject(null);
  };

  const handleDemo = (project) => {
    window.open(project.demoUrl, '_blank');
  };

  return (
    <>


        <div className="min-h-screen bg-[#EFF7FF]">
      {currentView === 'projects' && (
        <>
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Plans />
        <Projects 
          projects={projectsData}
          onProjectSelect={handleProjectSelect}
          onProjectDemo={handleDemo}
        />
        <Team />
        <Contact />
        <Footer />
          </>
      )}
      
      {currentView === 'detail' && (
        <ProjectDetail 
          project={selectedProject}
          onBack={handleBackToProjects}
          onDemo={handleDemo}
        />
      )}
    </div>
     

    </>
  )
}

export default App
