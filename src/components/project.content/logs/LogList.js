import React, { useContext, useEffect, useState } from 'react';
import Log from './Log';
import { SelectedProjectContext } from '../../../contexts/SelectedProjectContext';
import LogAndRoiServices from '../../../services/LogAndRoiServices';
import add from '../../../assets/images/Add icon white.svg';

const LogList = () => {
  const { selectedProject } = useContext(SelectedProjectContext)
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    LogAndRoiServices.getLogs(selectedProject)
      .then((logs) => {
        setLogs(logs)
      })
      .catch(error => console.log(error))
  }, [selectedProject])

  return(
    <div className="log-list flex-column">
      <div className="log-list-header d-flex justify-content-between">
        <h3>Logs</h3>
        <img
          src={add}
          alt='add-button'
          className='add-log-button'
          role='button'
        />
      </div>
      <div className="log-list row">
        <ul className="logs">
          {logs && (
            logs.map((log) => (
              // <li key={log._id}>
                <Log title={log.logName} date={log.createdAt.slice(0, 10)} />
              // </li>
            ))
          )}
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