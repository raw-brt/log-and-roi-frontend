import React, { useState, useEffect, useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import "../sidebar/sidebar.css";
import AuthContext from '../../contexts/AuthContext';
import { SelectedProjectContext } from "../../contexts/SelectedProjectContext";
import DeleteProjectOverlay from "./DeleteProjectOverlay";
import LogAndRoiServices from '../../services/LogAndRoiServices';

const ProjectsList = ({ projectHasBeenCreated }) => {
  // Contexts import

  const { currentUser } = useContext(AuthContext);
  const { selectedProject, 
          setSelectedProject, 
          setSelectedProjectName, 
          setSelectedProjectCostPerHour,
          setSelectedProjectProfit 
        } = useContext(SelectedProjectContext);

  // State variables

  const [projectsList, setProjectsList] = useState([]);
  const [activeItem, setActiveItem] = useState(selectedProject);
  const [showDeleteOverlay, setShowDeleteOverlay] = useState(false);
  const [projectHasBeenDeleted, setProjectHasBeenDeleted] = useState(false);

  // Methods

  const deleteProject = (projectId) => {
    LogAndRoiServices.deleteProject(projectId)
      .then(() => console.log(`The project with this ${projectId} has been deleted`))
      .catch((error) => console.log(`Something went wrong while deleting project -> ${error}`));
  };

  // Component lifecycle

  useEffect(() => {
    LogAndRoiServices.getProjects(currentUser)
      .then((projects) => {
        setProjectsList(projects);
        setSelectedProject(projects[0]._id);
        setSelectedProjectName(projects[0].projectName);
        setSelectedProjectCostPerHour(projects[0].costPerHour);
        setSelectedProjectProfit(projects[0].profit);
        console.log(`PL first render`)
      })
  }, []);

  // useEffect(() => {
  //   LogAndRoiServices.getProjects(currentUser)
  //     .then((projects) => {
  //       setProjectsList(projects);
  //       setSelectedProject(projects[0]._id);
  //       setSelectedProjectName(projects[0].projectName);
  //       setSelectedProjectCostPerHour(projects[0].costPerHour);
  //       setSelectedProjectProfit(projects[0].profit);
  //       console.log(`PL render when project created`)
  //     })
  // }, [projectHasBeenCreated]);

  // useEffect(() => {
  //   setActiveItem(selectedProject);
  //   console.log(`PL updated. AItem is -> ${activeItem} and SP is ${selectedProject}`)
  // }, [selectedProject, activeItem]);

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
              onClick={() => {
                setShowDeleteOverlay(!showDeleteOverlay);
              }}
            >
              <FaTrashAlt />
            </span>
            <DeleteProjectOverlay
              showDeleteOverlay={showDeleteOverlay}
              setShowDeleteOverlay={setShowDeleteOverlay}
              projectHasBeenDeleted={projectHasBeenDeleted}
              setProjectHasBeenDeleted={setProjectHasBeenDeleted}
              deleteProject={deleteProject}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProjectsList;
