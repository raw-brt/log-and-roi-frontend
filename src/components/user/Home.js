import React, { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import ProjectContents from '../project.content/ProjectContents';

const Home = () => {
  const [activeProject, setActiveProject] = useState(null);
  console.log(activeProject)
  
  return (
    <div className="home d-flex">
      <Sidebar  
        activeProject={activeProject} 
        setActiveProject={setActiveProject} />
      <ProjectContents />
    </div>
  )
}

export default Home;