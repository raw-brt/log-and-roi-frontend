import React from 'react';
import List from './List'
import '../sidebar/sidebar.css'
import UserInfo from './UserInfo';

const Sidebar = props => {
  return(
    <div className={props.className}>
      <nav id="sidebar">
        <div className="sidebar-header"><h3 id="projects">Projects</h3></div>
        <List />
        <UserInfo />
      </nav>
    </div>
  )
}

export default Sidebar;