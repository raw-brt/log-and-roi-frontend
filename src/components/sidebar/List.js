import React, { useState, useEffect, useContext } from 'react';
import ListElement from './ListElement';
import '../sidebar/sidebar.css'
import LogAndRoiServices from '../../services/LogAndRoiServices';
import AuthContext from '../../contexts/AuthContext';

const ProjectsList = () => {
  const { currentUser } = useContext(AuthContext);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    LogAndRoiServices.getProjects(currentUser)
      .then(projects => {
        setProjects(projects)
      })
      .catch(error => console.log(error))
  },[currentUser]);

  return(
    <ul className="project-list col">
      { 
        projects.map((project, index) => 
        <ListElement key={index} projectName={project.projectName} />) 
      }
    </ul>
  )
}

export default ProjectsList;