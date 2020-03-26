import React, { useState } from 'react';
import List from './List'
import '../sidebar/sidebar.css'
import AuthContext from '../../contexts/AuthContext';
import UserInfo from './UserInfo';
import AddProjectOverlay from './AddProjectOverlay';
import add from '../../../src/assets/images/Add icon.svg'

const Sidebar = ({ activeProject, setActiveProject }) => {
  const [showAddOverlay, setShowAddOverlay] = useState(false);

  return(
    <div className="sidebar-wrapper">
      <nav id="sidebar">
        <div className="sidebar-header d-flex justify-content-between">
          <h3 id="header-title">Projects</h3>
          <img 
            src={add} 
            alt="add-btn" 
            className="add-project-btn"
            role='button'
            onClick={() => {
              setShowAddOverlay(!showAddOverlay);
            }}
            />
        </div>
        <AddProjectOverlay
          showAddOverlay={showAddOverlay}
          setShowAddOverlay={setShowAddOverlay}
        />
        <List activeProject={activeProject} setActiveProject={setActiveProject} />
        <UserInfo />
      </nav>
    </div>
  )
}

export default Sidebar;