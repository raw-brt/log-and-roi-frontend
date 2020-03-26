import React from 'react';
import Log from './Log';

const LogList = () => {
  return(
    <div className="log-list flex-column">
      <div className="log-list-header row">
        <h3>Logs</h3>
      </div>
      <div className="log-list row">
        <ul className="logs">
          <Log title="Wireframes" date="01/02/2020"/>
          <Log title="Mockups" date="02/02/2020"/>
          <Log title="API design" date="04/02/2020"/>
          <Log title="Front architecture" date="07/02/2020"/>
        </ul>
      </div>
    </div>
  )
}

export default LogList;