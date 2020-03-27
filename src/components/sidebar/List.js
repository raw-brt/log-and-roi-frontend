import React, { useState, useEffect, useContext } from 'react';
import '../sidebar/sidebar.css'
import LogAndRoiServices from '../../services/LogAndRoiServices';
import AuthContext from '../../contexts/AuthContext';
import {SelectedProjectContext}  from '../../contexts/SelectedProjectContext';

const ProjectsList = ({ activeProject, setActiveProject }) => {
  const { currentUser } = useContext(AuthContext);
  const { selectedProject, setSelectedProject } = useContext(SelectedProjectContext);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    LogAndRoiServices.getProjects(currentUser)
      .then(projects => {
        console.log(projects)
        console.log(currentUser)
        setProjects(projects)
      })
      .catch(error => console.log(error))
  },[currentUser]);

  return(
    <ul className="project-list col">
      { 
        projects.map(project =>
          <li 
            key={project._id}
            className={activeProject 
              ? 'project-active' 
              : 'project-inactive'}
            role='button' 
            onClick={() => {
              setActiveProject(!activeProject);
            }} 
            >
            {activeProject 
              ? <span className='bullet-selected'>◉ </span> 
              : <span className='bullet-not-selected'>◎ </span>}
              {project.projectName}
          </li>
        ) 
      }
    </ul>
  )
}

export default ProjectsList;