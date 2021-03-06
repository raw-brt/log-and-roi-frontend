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
    setShowDeleteLogOverlay,
    timerStopped,
    setTimerStopped,
    updatedTimer,
    setUpdatedTimer
  }) => {

    // Used contexts
    const { setSelectedLog } = useContext(SelectedLogContext);

    // State variables
    const [logDuration, setLogDuration] = useState(0);
    const [stoppedLog, setStoppedLog] = useState(false);

  return (
    <>
      <li key={identifier._id}>
        <div className="log d-flex">
          <div className='log-name'>
            <p className="log-title">{title}</p>
            <p className="log-date">{date}</p>
          </div>
          <div className='log-options'>
            <div className="log-cost d-flex align-items-center">
              <img
                src={dollar}
                alt="dollar"
                className="mr-1"
                style={{ maxWidth: "1.75rem" }}
              />
                {`${cost} €`}
            </div>
            <LogTimer 
              className='log-timer' 
              initialDuration= {duration} 
              setLogDuration={setLogDuration} 
              identifier={identifier} 
              stoppedLog={stoppedLog} 
              setStoppedLog={setStoppedLog} 
              setTimerStopped={setTimerStopped} 
              timerStopped={timerStopped}
              updatedTimer={updatedTimer}
              setUpdatedTimer={setUpdatedTimer} 
            />
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
        </div>
      </li>
    </>
  );
};

export default Log;
