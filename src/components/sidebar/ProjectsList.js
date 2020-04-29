import React, { useState, useEffect, useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import "../sidebar/sidebar.css";
import { SelectedProjectContext } from "../../contexts/SelectedProjectContext";
import DeleteProjectOverlay from "./DeleteProjectOverlay";

const ProjectsList = ({ setProjectHasBeenDeleted, projectsList }) => {
  const { selectedProject, 
          setSelectedProject, 
          setSelectedProjectName, 
          setSelectedProjectCostPerHour,
          setSelectedProjectProfit 
        } = useContext(SelectedProjectContext);

  const [activeItem, setActiveItem] = useState(selectedProject);
  const [showDeleteOverlay, setShowDeleteOverlay] = useState(false);

  useEffect(() => {
    setActiveItem(selectedProject);
  }, [selectedProject]);

  return (
    <>
      <ul className="project-list col">
        {projectsList.map((project) => (
          <li
            key={project._id}
            className={
              activeItem === project._id ? "project-active" : "project-inactive"
            }
            role="button"
            onClick={() => {
              setActiveItem(project._id);
              setSelectedProject(project._id);
              setSelectedProjectName(project.projectName);
              setSelectedProjectCostPerHour(project.costPerHour);
              setSelectedProjectProfit(project.profit);
              console.log(selectedProject, project.costPerHour)
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
      <DeleteProjectOverlay
        showDeleteOverlay={showDeleteOverlay}
        setShowDeleteOverlay={setShowDeleteOverlay}
        setProjectHasBeenDeleted={setProjectHasBeenDeleted}
      />
    </>
  );
};

export default ProjectsList;
