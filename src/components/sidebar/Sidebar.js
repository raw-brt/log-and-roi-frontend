import React, { useState, useEffect, useContext } from "react";
import ProjectsList from "./ProjectsList";
import "../sidebar/sidebar.css";
import UserInfo from "./UserInfo";
import AddProjectOverlay from "./AddProjectOverlay";
import add from "../../../src/assets/images/Add icon.svg";
import AuthContext from '../../contexts/AuthContext';
import { SelectedProjectContext } from '../../contexts/SelectedProjectContext';
import LogAndRoiServices from '../../services/LogAndRoiServices';

const Sidebar = () => {
  const { currentUser } = useContext(AuthContext);
  const { 
    setSelectedProject,
    setSelectedProjectName,
    setSelectedProjectCostPerHour,
    setSelectedProjectProfit 
  } = useContext(SelectedProjectContext);

  const [showAddOverlay, setShowAddOverlay] = useState(false);
  const [projectHasBeenCreated, setProjectHasBeenCreated] = useState(null);
  const [projectHasBeenDeleted, setProjectHasBeenDeleted] = useState(null);
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    LogAndRoiServices.getProjects(currentUser)
      .then((projects) => {
        setProjectsList(projects)
        setSelectedProject(projects[0]._id)
        setSelectedProjectName(projects[0].projectName)
        setSelectedProjectCostPerHour(projects[0].costPerHour)
        setSelectedProjectProfit(projects[0].profit)
      })
  }, []);
  
  useEffect(() => {
    LogAndRoiServices.getProjects(currentUser)
      .then((projects) => {
        setProjectsList(projects)
        setSelectedProject(projects[0]._id)
        setSelectedProjectName(projects[0].projectName)
        setSelectedProjectCostPerHour(projects[0].costPerHour)
        setSelectedProjectProfit(projects[0].profit)
      })
  }, [projectHasBeenCreated, projectHasBeenDeleted]);


  return (
    <div className="sidebar-wrapper">
      <nav id="sidebar">
        <div className="sidebar-header d-flex justify-content-between">
          <h3 id="header-title">Projects</h3>
          <img
            src={add}
            alt="add-button"
            className="add-project-btn"
            role="button"
            onClick={() => {
              setShowAddOverlay(!showAddOverlay);
            }}
          />
        </div>
        <AddProjectOverlay
          showAddOverlay={showAddOverlay}
          setShowAddOverlay={setShowAddOverlay}
          setProjectHasBeenCreated={setProjectHasBeenCreated}
        />
        <ProjectsList
          projectHasBeenCreated={projectHasBeenCreated}
          setProjectHasBeenDeleted={setProjectHasBeenDeleted}
          projectsList={projectsList}
        />
        <UserInfo />
      </nav>
    </div>
  );
};

export default Sidebar;
