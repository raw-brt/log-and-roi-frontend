import React, { useContext } from 'react';
import './projectcontents.css'
import { SelectedProjectContext } from '../../contexts/SelectedProjectContext';
import ProjectFinancials from './project.financials/ProjectFinancials';
import LogList from './logs/LogList';
import ResponsiveNavbar from '../misc/ResponsiveNavbar';

const ProjectContents = () => {
  const { areThereProjects } = useContext(SelectedProjectContext);

  return (
    areThereProjects 
    ? (
      <div className='project-contents d-flex flex-column mx-auto'>
        <ResponsiveNavbar />
        <ProjectFinancials />
        <LogList />
      </div>
    )
    : (
      <>
        <ResponsiveNavbar />
        <div className='project-contents no-projects-message flex-column d-flex justify-content-center'>
        <h4>You have no projects yet. Click '+' to add a new one!</h4>
      </div>
      </>
    )
  )
}

export default ProjectContents;