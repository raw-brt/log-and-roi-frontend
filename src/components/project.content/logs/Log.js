import React, { useState, useContext } from "react";
import LogTimer from "./LogTimer";
import { SelectedLogContext } from '../../../contexts/SelectedLogContext';
import dollar from "../../../assets/images/dollar.png";
import trashIcon from '../../../assets/images/Trash button.svg';

const Log = ({ 
    identifier, 
    title, 
    date,
    cost,
    duration,
    showDeleteLogOverlay,
    setShowDeleteLogOverlay
  }) => {

    // Used contexts
    const { setSelectedLog } = useContext(SelectedLogContext);

    // State variables
    const [logDuration, setLogDuration] = useState(0);
    const [stoppedLog, setStoppedLog] = useState(false);

  return (
    <div className="log flex-row justify-content-between align-items-center">
      <p className="log-title">{title}</p>
      <p className="log-date">{date}</p>
      <div className="log-cost d-flex align-items-center">
        <img
          src={dollar}
          alt="dollar"
          className="mr-1"
          style={{ maxWidth: "1.75rem" }}
        />
          {`${cost} €`}
      </div>
      <LogTimer className='log-timer' initialDuration= {duration} setLogDuration={setLogDuration} identifier={identifier} cost={cost}stoppedLog={stoppedLog} setStoppedLog={setStoppedLog} />
      <div className='log-delete'>
        <img
          src={trashIcon}
          alt='delete'
          className='log-delete-icon mr-1'
          onClick={() => {
            setSelectedLog(identifier._id);
            setShowDeleteLogOverlay(!showDeleteLogOverlay);
          }}
        />
      </div>
    </div>
  );
};

export default Log;
