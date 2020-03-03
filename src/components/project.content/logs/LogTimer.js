import React from 'react';
import Timer from 'react-compound-timer'
import clock from '../../../assets/images/clock-regular.svg'
import dollar from '../../../assets/images/dollar.png'

const LogTimer = () => {
  return (
    <Timer
      formatValue={(value) => `${(value < 10 ? `0${value}` : value)}`}
      initialTime={0}
      startImmediately={false}
      onStart={() => console.log('onStart')}
      onResume={() => console.log('onResume')}
      onPause={() => console.log('onPause')}
      onStop={() => console.log('onStop')}
      onReset={() => console.log('onReset')}
>
    {({ start, resume, pause, stop, reset }) => (
        <React.Fragment>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <img src={clock} alt="clock" className="pr-2" style={{ width: '1.75rem' }}/><Timer.Hours />:<Timer.Minutes />:<Timer.Seconds /> 
              
            
            </div>
            
          </div>
          <div className="d-flex justify-content-around" style={{ minWidth: '330px' }}>
            <button className="custom-btn" onClick={start}>Start</button>
            <button className="custom-btn" onClick={pause}>Pause</button>
            <button className="custom-btn" onClick={resume}>Resume</button>
            <button className="custom-btn" onClick={stop}>Stop</button>
            <button className="custom-btn" onClick={reset}>Reset</button>
          </div>
        </React.Fragment>
    )}
</Timer>
  )
}

export default LogTimer;