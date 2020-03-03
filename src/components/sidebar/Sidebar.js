import React from 'react';
import List from './List'
import '../sidebar/sidebar.css'
import UserInfo from './UserInfo';
import add from '../../../src/assets/images/Add icon.svg'

const Sidebar = props => {
  return(
    <div className={props.className}>
      <nav id="sidebar">
        <div className="sidebar-header d-flex justify-content-between">
          <h3 id="header-title">Projects</h3>
          <img src={add} alt="add-btn" className="add-project-btn"></img>
        </div>
        <List />
        <UserInfo />
      </nav>
    </div>
  )
}

export default Sidebar;