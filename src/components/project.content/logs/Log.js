import React, { useState, useContext, useEffect } from "react";
import LogTimer from "./LogTimer";
import { SelectedLogContext } from '../../../contexts/SelectedLogContext';
import { SelectedProjectContext } from '../../../contexts/SelectedProjectContext';
import LogAndRoiServices from '../../../services/LogAndRoiServices';
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
    const { selectedLog, setSelectedLog } = useContext(SelectedLogContext);
    const { selectedProjectCostPerHour } = useContext(SelectedProjectContext);

    // State variables
    const [logDuration, setLogDuration] = useState(0);
    const [stoppedLog, setStoppedLog] = useState(false);

    // Component Helpers
    // const handleCalculateCost = (duration, costPerHour) => {
    //   const logCost = ((duration / (1000 * 60 * 60)) % 24) * costPerHour;
    //   return logCost.toFixed(2);
    // } 

    // const actualLogCost = handleCalculateCost(logDuration, selectedProjectCostPerHour);

    // Lifecycle management
    // useEffect(() => {
    //   LogAndRoiServices.getLogDetail(identifier._id)
    //     .then((log) => {
    //       setLogDetail(log);
    //       console.log(logDetail)
    //     })
    //     .catch((error) => `Something went wrong. Error -> ${error}`)
    // }, []);

    // useEffect(() => {
    //   const logData = {
    //     cost: actualLogCost,
    //     duration: logDuration
    //   }

    //   console.log(logData)
    //   console.log(stoppedLog)
    //   console.log(logDetail)

    //   LogAndRoiServices.updateLog(logData, identifier._id)
    //     .then(log => `The log with the id -> ${log._id} has been updated`)
    //     .catch(error => `Something when wrong -> ${error}`)
    // }, [stoppedLog]);

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
      <div className='log-delete'>
        <img
          src={trashIcon}
          alt='delete'
          className='log-delete-icon mr-1'
          onClick={() => {
            console.log(identifier._id)
            setSelectedLog(identifier._id);
            setShowDeleteLogOverlay(!showDeleteLogOverlay);
          }}
        ></img>
      </div>
      <LogTimer className='log-timer' initialDuration= {duration} setLogDuration={setLogDuration} identifier={identifier} cost={cost} stoppedLog={stoppedLog} setStoppedLog={setStoppedLog}/>
    </div>
  );
};

export default Log;
