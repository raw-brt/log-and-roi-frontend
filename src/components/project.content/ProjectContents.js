import React from 'react';
import './projectcontents.css'
import ProjectFinancials from './project.financials/ProjectFinancials';
import LogList from './logs/LogList';

const ProjectContents = () => {
  return(
    <div className='project-contents col-sm-7 d-flex flex-column m-auto'>
      <ProjectFinancials />
      <LogList />
    </div>
  )
}

export default ProjectContents;