import React, { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import ProjectContents from '../project.content/ProjectContents';

const Home = ({ activeProjectValue = null }) => {
  const [activeProject, setActiveProject] = useState(activeProjectValue);

  return (
    <div className="home">
      <Sidebar className="sidebar-wrapper col-sm-3" activeProject={activeProject} setActiveProject={setActiveProject} />
      <ProjectContents className="project-contents col-sm-9" />
    </div>
  )
}

export default Home;