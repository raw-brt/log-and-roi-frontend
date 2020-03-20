import React, { useState } from 'react';
import List from './List'
import '../sidebar/sidebar.css'
import UserInfo from './UserInfo';
import add from '../../../src/assets/images/Add icon.svg'

const Sidebar = ({ className }) => {
  const [showAddOverlay, setShowAddOverlay] = useState(false)

  return(
    <div className={className}>
      <nav id="sidebar">
        <div className="sidebar-header d-flex justify-content-between">
          <h3 id="header-title">Projects</h3>
          <img 
            src={add} 
            alt="add-btn" 
            className="add-project-btn"
            />
        </div>
        <List />
        <UserInfo />
      </nav>
    </div>
  )
}

export default Sidebar;