import React, { useState, useContext } from "react";
import ProjectsList from "./ProjectsList";
import UserInfo from "./UserInfo";
import AddProjectOverlay from "./AddProjectOverlay";
import add from "../../../src/assets/images/Add icon.svg";
import { NavBarContext } from '../../contexts/NavBarContext';

const Sidebar = () => {
  const {isSidebarDropped} = useContext(NavBarContext);

  const [showAddOverlay, setShowAddOverlay] = useState(false);
  const [projectHasBeenCreated, setProjectHasBeenCreated] = useState(false);

  let isResponsive = window.innerWidth < 1150; 

  return (
    <div className={
      isSidebarDropped && isResponsive
        ? "sidebar-wrapper-dropped"
        : "sidebar-wrapper"
      }>
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
          projectHasBeenCreated={projectHasBeenCreated}
          setProjectHasBeenCreated={setProjectHasBeenCreated}
        />
        <ProjectsList
          projectHasBeenCreated={projectHasBeenCreated}
          showAddOverlay={showAddOverlay}
        />
        <UserInfo />
      </nav>
    </div>
  );
};

export default Sidebar;
