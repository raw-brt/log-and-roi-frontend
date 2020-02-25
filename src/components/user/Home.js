import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import ProjectContents from '../project.content/ProjectContents';

const Home = () => {
  return (
    <div className="home">
      <Sidebar className="sidebar-wrapper col-sm-3"/>
      <ProjectContents className="project-contents col-sm-9" />
    </div>
  )
}

export default Home;