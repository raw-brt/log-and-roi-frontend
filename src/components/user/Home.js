import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import ProjectContents from '../project.content/ProjectContents';

const Home = () => {
  
  return (
    <div className="home d-flex">
      <Sidebar />
      <ProjectContents />
    </div>
  )
}

export default Home;