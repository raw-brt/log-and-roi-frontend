import React, { useContext } from 'react';
import './projectcontents.css'
import { SelectedProjectContext } from '../../contexts/SelectedProjectContext';
import ProjectFinancials from './project.financials/ProjectFinancials';
import LogList from './logs/LogList';

const ProjectContents = () => {
  const { areThereProjects } = useContext(SelectedProjectContext);
  return (
    areThereProjects 
    ? (
      <div className='project-contents col-sm-7 d-flex flex-column m-auto'>
        <ProjectFinancials />
        <LogList />
      </div>
    )
    : (
      <div className='project-contents no-projects-message col-sm-7 flex-column'>
        <h4>You have no projects yet. Click '+' to add a new one!</h4>
      </div>
    )
  )
}

export default ProjectContents;