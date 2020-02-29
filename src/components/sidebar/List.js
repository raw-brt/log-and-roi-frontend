import React, { useState, useEffect, useContext } from 'react';
import ListElement from './ListElement';
import '../sidebar/sidebar.css'
import LogAndRoiServices from '../../services/LogAndRoiServices';
import AuthContext from '../../contexts/AuthContext';

const ProjectsList = () => {
  const value = useContext(AuthContext);
  const [projects, setProjects] = useState([]);


  useEffect(() => {
    LogAndRoiServices.getProjects(value.currentUser)
      .then(projects => {
        setProjects(projects)
      })
      .catch(error => console.log(error))
  });

  return(
    <ul className="project-list col">
      { 
        projects.map((project, index) => 
        <ListElement key={index} projectName={project} />) 
      }
    </ul>
  )
}

export default ProjectsList;