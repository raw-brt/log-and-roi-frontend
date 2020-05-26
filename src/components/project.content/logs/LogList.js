import React, { useContext, useEffect, useState } from 'react';
import Log from './Log';
import AddLogOverlay from './AddLogOverlay'
import { SelectedProjectContext } from '../../../contexts/SelectedProjectContext';
import { SelectedLogContext } from '../../../contexts/SelectedLogContext';
import LogAndRoiServices from '../../../services/LogAndRoiServices';
import add from '../../../assets/images/Add icon white.svg';
import DeleteLogOverlay from './DeleteLogOverlay';

const LogList = () => {
  const { selectedProject } = useContext(SelectedProjectContext);
  const { selectedLog } = useContext(SelectedLogContext);

  const [logs, setLogs] = useState([]);
  const [showAddLogOverlay, setShowAddLogOverlay] = useState(false);
  const [showDeleteLogOverlay, setShowDeleteLogOverlay] = useState(false);
  const [timerStopped, setTimerStopped] = useState(false);
  const [logHasBeenDeleted, setLogHasBeenDeleted] = useState(false);

  const deleteLog = (logId) => {
    if (logId === selectedLog) {
      LogAndRoiServices.deleteLog(logId)
      .then(() => console.log(`The log with the id ${logId} was deleted`))
      .catch(error => `Something went wrong when trying to delete the log with the id ${logId} -> ${error}`)
    }
  };

  useEffect(() => {
      LogAndRoiServices.getLogs(selectedProject)
        .then((logs) => {
          setLogs(logs);
          console.log('Log list re-rendered after deleting one log')
        })
        .catch(error => console.log(error))
  }, [selectedProject, showAddLogOverlay, timerStopped, logHasBeenDeleted]);


  return(
    logs.length > 0 ? (
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
              logs.map((log) => (
                <Log 
                  key={log._id} 
                  identifier={log} 
                  title={log.logName} 
                  date={log.createdAt.slice(0, 10)}
                  cost={log.cost}
                  duration={log.duration}
                  showDeleteLogOverlay={showDeleteLogOverlay}
                  setShowDeleteLogOverlay={setShowDeleteLogOverlay}
                  setTimerStopped={setTimerStopped}
                  timerStopped={timerStopped}
                />
              ))
            )}
          </ul>
        </div>
        <AddLogOverlay
          showAddLogOverlay={showAddLogOverlay}
          setShowAddLogOverlay={setShowAddLogOverlay}
        />
        <DeleteLogOverlay
          deleteLog={deleteLog} 
          logHasBeenDeleted={logHasBeenDeleted}
          setLogHasBeenDeleted={setLogHasBeenDeleted}
          showDeleteLogOverlay={showDeleteLogOverlay}
          setShowDeleteLogOverlay={setShowDeleteLogOverlay}
        />
      </div>
    )
    : (
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
          <li className='log-empty'>Click '+' to create a new log</li>
        </ul>
      </div>
      <AddLogOverlay
        showAddLogOverlay={showAddLogOverlay}
        setShowAddLogOverlay={setShowAddLogOverlay}
      />
    </div>
    )
  );
};

export default LogList;