import React from 'react';
import ListElement from './ListElement';
import '../sidebar/sidebar.css'

const dummyProjects = ["Ethereum ebook", "Cybertruck", "iPhone App", "Log and ROI 2.0"];

const ProjectsList = () => {
  return(
    <ul className="project-list col">
      { 
        dummyProjects.map((project, index) => 
        <ListElement key={index} projectName={project} />) 
      }
    </ul>
  )
}

export default ProjectsList;