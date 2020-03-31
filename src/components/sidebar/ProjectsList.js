import React, { useState, useEffect, useContext } from 'react';
import '../sidebar/sidebar.css'
import LogAndRoiServices from '../../services/LogAndRoiServices';
import AuthContext from '../../contexts/AuthContext';
import { SelectedProjectContext }  from '../../contexts/SelectedProjectContext';

const ProjectsList = ({ projectHasBeenCreated }) => {
  const { currentUser } = useContext(AuthContext);
  const { selectedProject, setSelectedProject } = useContext(SelectedProjectContext);
  const [projects, setProjects] = useState([]);
  const [activeItem, setActiveItem] = useState(selectedProject);

  useEffect(() => {
    LogAndRoiServices.getProjects(currentUser)
      .then(projects => {
        setProjects(projects)
        setActiveItem(projects[0]._id)
      })
      .catch(error => console.log(error))
  },[currentUser, projectHasBeenCreated]);

  return(
    <ul className="project-list col">
      { 
        projects.map(project =>
          <li 
            key={project._id}
            className={
              activeItem === project._id
                ? 'project-active' 
                : 'project-inactive'
            }
            role='button' 
            onClick={() => {
              setActiveItem(project._id);
              setSelectedProject(project._id)
            }} 
            >
            {activeItem === project._id
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