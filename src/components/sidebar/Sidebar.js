import React, { useState } from "react";
import ProjectsList from "./ProjectsList";
import "../sidebar/sidebar.css";
import UserInfo from "./UserInfo";
import AddProjectOverlay from "./AddProjectOverlay";
import add from "../../../src/assets/images/Add icon.svg";

const Sidebar = () => {

  const [showAddOverlay, setShowAddOverlay] = useState(false);
  const [projectHasBeenCreated, setProjectHasBeenCreated] = useState(false);

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
        />
        <UserInfo />
      </nav>
    </div>
  );
};

export default Sidebar;
