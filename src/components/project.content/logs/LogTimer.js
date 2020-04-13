import React from 'react';
import Timer from 'react-compound-timer'
import clock from '../../../assets/images/clock-regular.svg'
import { FaPlay, FaPause, FaStop, FaRedoAlt, FaTrashAlt } from 'react-icons/fa'
import dollar from '../../../assets/images/dollar.png'
import playIcon from '../../../assets/images/play.svg';
import pauseIcon from '../../../assets/images/pause.svg';
import stopIcon from '../../../assets/images/stop.svg';
import resetIcon from '../../../assets/images/reset.svg';

const LogTimer = () => {
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
          <div className="d-flex justify-content-around" style={{ minWidth: '330px' }}>
            <img src={playIcon} className="custom-btn" alt='play' onClick={start}></img>
            <img src={pauseIcon} className="custom-btn" alt='pause' onClick={pause}></img>
            <img src={stopIcon} className="custom-btn" alt='stop' onClick={stop}></img>
            <img src={resetIcon} className="custom-btn" alt='reset' onClick={reset}></img>
          </div>
        </React.Fragment>
    )}
</Timer>
  )
}

export default LogTimer;