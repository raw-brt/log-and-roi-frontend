import React from 'react';
import ProjectFinancials from './project.financials/ProjectFinancials';
import LogList from './logs/LogList';

const ProjectContents = () => {
  return(
    <div className="project-contents">
      <ProjectFinancials />
      <LogList />
    </div>
  )
}

export default ProjectContents;