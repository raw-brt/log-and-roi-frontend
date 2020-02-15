import React from 'react';
import '../sidebar/sidebar.css'

const ListElement = props => {
  return(
    <li key={props.key} className="list-group-item">{props.projectName}</li>
  )
}

export default ListElement;