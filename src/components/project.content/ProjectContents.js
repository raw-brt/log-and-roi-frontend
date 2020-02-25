import React from 'react';
import './projectcontents.css'
import ProjectFinancials from './project.financials/ProjectFinancials';
import LogList from './logs/LogList';

const ProjectContents = props => {
  return(
    <div className={props.className}>
      <ProjectFinancials />
      <LogList />
    </div>
  )
}

export default ProjectContents;