import React, { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import ProjectContents from '../project.content/ProjectContents';

const Home = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="home">
      <Sidebar 
        className="sidebar-wrapper col-sm-3" 
        activeProject={activeProject} 
        setActiveProject={setActiveProject} />
      <ProjectContents className="project-contents col-sm-9" />
    </div>
  )
}

export default Home;