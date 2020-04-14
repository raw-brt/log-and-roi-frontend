import React from 'react';
import Timer from 'react-compound-timer'
import clock from '../../../assets/images/clock-regular.svg'
import playIcon from '../../../assets/images/play.svg';
import pauseIcon from '../../../assets/images/pause.svg';
import stopIcon from '../../../assets/images/stop.svg';
import resetIcon from '../../../assets/images/reset.svg';
import trashIcon from '../../../assets/images/Trash button.svg';
import LogAndRoiServices from '../../../services/LogAndRoiServices';

const LogTimer = () => {

  // const deleteLog = () => {
  //   LogAndRoiServices
  // }

  return (
    <Timer
      formatValue={(value) => `${(value < 10 ? `0${value}` : value)}`}
      initialTime={0}
      startImmediately={false}
      onStart={() => console.log('onStart')}
      onPause={() => console.log('onPause')}
      onStop={() => console.log('onStop')}
      onReset={() => console.log('onReset')}
>
    {({ start, pause, stop, reset }) => (
        <React.Fragment>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <img src={clock} alt="clock" className="pr-2" style={{ width: '1.75rem' }}/><Timer.Hours />:<Timer.Minutes />:<Timer.Seconds /> 
            </div>
          </div>
          <div className="d-flex justify-content-between" style={{ minWidth: '9rem' }}>
            <img src={playIcon} className="control-btn" alt='play' role='button' onClick={start}></img>
            <img src={pauseIcon} className="control-btn" alt='pause' role='button' onClick={pause}></img>
            <img src={stopIcon} className="control-btn" alt='stop' role='button' onClick={stop}></img>
            <img src={resetIcon} className="control-btn" alt='reset' role='button' onClick={reset}></img>
            <img src={trashIcon} className="control-btn" alt='delete' role='button' onClick={console.log('Add delete function here')}></img>
          </div>
        </React.Fragment>
    )}
</Timer>
  )
}

export default LogTimer;