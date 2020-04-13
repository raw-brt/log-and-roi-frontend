import React, { useState, useEffect, useContext, Fragment } from "react";
import { FaTrashAlt } from "react-icons/fa";
import "../sidebar/sidebar.css";
import LogAndRoiServices from "../../services/LogAndRoiServices";
import AuthContext from "../../contexts/AuthContext";
import { SelectedProjectContext } from "../../contexts/SelectedProjectContext";
import DeleteProjectOverlay from "./DeleteProjectOverlay";

const ProjectsList = ({ projectHasBeenCreated, setProjectHasBeenDeleted }) => {
  const { currentUser } = useContext(AuthContext);
  const { selectedProject, setSelectedProject } = useContext(
    SelectedProjectContext
  );

  const [projects, setProjects] = useState([]);
  const [activeItem, setActiveItem] = useState(selectedProject);
  const [showDeleteOverlay, setShowDeleteOverlay] = useState(false);

  useEffect(() => {
    LogAndRoiServices.getProjects(currentUser)
      .then((projects) => {
        if (selectedProject === null || selectedProject === undefined) {
          setSelectedProject(projects[0]._id)
          setActiveItem(projects[0]._id)
          console.log(selectedProject, activeItem)
        }
        setProjects(projects);
      })
      .catch((error) => console.log(error));
    console.log(`Selected -> ${selectedProject} ; Active -> ${activeItem}`);
  }, [showDeleteOverlay]);

  return (
    <>
      <DeleteProjectOverlay
        showDeleteOverlay={showDeleteOverlay}
        setShowDeleteOverlay={setShowDeleteOverlay}
        setProjectHasBeenDeleted={setProjectHasBeenDeleted}
      />
      <ul className="project-list col">
        {projects.map((project) => (
          <li
            key={project._id}
            className={
              activeItem === project._id ? "project-active" : "project-inactive"
            }
            role="button"
            onClick={() => {
              setActiveItem(project._id);
              setSelectedProject(project._id);
              console.log(selectedProject)
            }}
          >
            <div className="selector-plus-name">
              {activeItem === project._id ? (
                <span className="bullet-selected">◉ </span>
              ) : (
                <span className="bullet-not-selected">◎ </span>
              )}
              {project.projectName}
            </div>
            <span
              className="delete-icon"
              role="button"
              onClick={() => setShowDeleteOverlay(!showDeleteOverlay)}
            >
              <FaTrashAlt />
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProjectsList;
