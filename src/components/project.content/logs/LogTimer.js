import React, { useState, useEffect, useContext } from 'react';
import Timer from 'react-compound-timer'
import { SelectedProjectContext } from '../../../contexts/SelectedProjectContext';
import LogAndRoiServices from '../../../services/LogAndRoiServices';
import clock from '../../../assets/images/clock-regular.svg'
import playIcon from '../../../assets/images/play.svg';
import pauseIcon from '../../../assets/images/pause.svg';
import stopIcon from '../../../assets/images/stop.svg';

const LogTimer = ({ setLogDuration, initialDuration, identifier, stoppedLog, setStoppedLog, setTimerStopped, timerStopped }) => {
  // Context variables import
  const { selectedProjectCostPerHour } = useContext(SelectedProjectContext);

  // Component state
  const [timerValue, setTimerValue] = useState(initialDuration);
  const [timerHasStopped, setTimerHasStopped] = useState(false);

  // Helper to calculate timer cost
  const calculateCost = (duration, costPerHour) => {
    const logCost = ((duration / (1000 * 60 * 60)) % 24) * costPerHour;
    return logCost.toFixed(2);
  } 

  // Helper to update log properties in DB
  const handleUpdateLog = () => {

    if (timerValue > 0) {
      const timerCost = calculateCost(timerValue, selectedProjectCostPerHour);
      const logData = {
        cost: timerCost,
        duration: timerValue
      }
      
      LogAndRoiServices.updateLog(logData, identifier._id)
        .then(log => `The log with the id -> ${log._id} has been updated`)
        .catch(error => `Something when wrong -> ${error}`)

        setTimerStopped(!timerStopped);
    }
  }

  // Effect to update the timer counter
  useEffect(() => {
      setLogDuration(timerValue);
  }, [timerValue]);

  // Effect to manage the timer cost value and persist it
  useEffect(() => {
    if (timerHasStopped === true) {
      handleUpdateLog();
      console.log(`log updated`)
    } else {
      console.log(`Handleupdatelog useeffect has run but the function was not executed`)
    }
  }, [timerHasStopped]);

  return (
    <Timer
      formatValue={(value) => `${(value < 10 ? `0${value}` : value)}`}
      initialTime={initialDuration}
      startImmediately={false}
      onStart={() => console.log('onStart')}
      onPause={() => console.log('onPause')}
      onStop={() => console.log('onStop')}
>
    {({ start, pause, stop, getTime }) => 
      ( 
        <>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <img src={clock} alt="clock" className="pr-2" style={{ width: '1.75rem' }}/><Timer.Hours />:<Timer.Minutes />:<Timer.Seconds /> 
            </div>
          </div>
          <div className="d-flex justify-content-between" style={{ minWidth: '6rem' }}>
            <img src={playIcon} className="control-btn" alt='play' role='button' onClick={
              () => {
                setTimerHasStopped(false);
                console.log(timerHasStopped)
                start();
              }
              }></img>
            <img src={pauseIcon} className="control-btn" alt='pause' role='button' onClick={pause}></img>
            <img src={stopIcon} className="control-btn" alt='stop' role='button' onClick={
              () => {
                const actualTime = getTime();
                setTimerValue(actualTime);
                setStoppedLog(!stoppedLog);
                setTimerHasStopped(true);
                stop();
              }
              }></img>
          </div>
        </>
    )}
</Timer>
  )
}

export default LogTimer;