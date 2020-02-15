import React from 'react';
import List from './List'
import '../sidebar/sidebar.css'

const Sidebar = () => {
  return(
    <div className="sidebar-wrapper">
      <nav id="sidebar">
        
        <div className="sidebar-header">
          <h3 id="projects">Projects</h3>
        </div>

        <List />

      </nav>
    </div>
  )
}


export default Sidebar;