import React, { useContext, useEffect, useState } from 'react';
import Log from './Log';
import AddLogOverlay from './AddLogOverlay'
import { SelectedProjectContext } from '../../../contexts/SelectedProjectContext';
import { SelectedLogContext } from '../../../contexts/';
import LogAndRoiServices from '../../../services/LogAndRoiServices';
import add from '../../../assets/images/Add icon white.svg';
import DeleteLogOverlay from './DeleteLogOverlay';

const LogList = () => {
  const { selectedProject } = useContext(SelectedProjectContext);
  const { selectedLog, setSelectedLog } = useContext(SelectedLogContext);

  const [logs, setLogs] = useState([]);
  const [showAddLogOverlay, setShowAddLogOverlay] = useState(false);
  const [showDeleteLogOverlay, setShowDeleteLogOverlay] = useState(false);
  const [deletedLog, setDeletedLog] = useState(false);

  useEffect(() => {
    LogAndRoiServices.getLogs(selectedProject)
      .then((logs) => {
        setLogs(logs);
      })
      .catch(error => console.log(error))
  }, [selectedProject, showAddLogOverlay, deletedLog]);

  return(
    <div className="log-list flex-column">
      <div className="log-list-header d-flex justify-content-between">
        <h3>Logs</h3>
        <img
          src={add}
          alt='add-button'
          className='add-log-button'
          role='button'
          onClick={() => {
            setShowAddLogOverlay(!showAddLogOverlay)
          }}
        />
      </div>
      <div className="log-list row">
        <ul className="logs">
          {logs && (
            logs.map((log, index) => (
              <Log key={log._id} identifier={log} title={log.logName} date={log.createdAt.slice(0, 10)} />
            ))
          )}
          <Log title="Wireframes" date="01/02/2020"/>
          <Log title="Mockups" date="02/02/2020"/>
          <Log title="API design" date="04/02/2020"/>
          <Log title="Front architecture" date="07/02/2020"/>
        </ul>
      </div>
      <AddLogOverlay
        showAddLogOverlay={showAddLogOverlay}
        setShowAddLogOverlay={setShowAddLogOverlay}
      />
      <DeleteLogOverlay 
        showDeleteLogOverlay={showDeleteLogOverlay}
        setShowDeleteLogOverlay={setShowDeleteLogOverlay}
        deletedLog={deletedLog}
        setDeletedLog={setDeletedLog}
      />
    </div>
  );
};

export default LogList;