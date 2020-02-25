import React from 'react';
import Timer from 'react-compound-timer'

const LogTimer = () => {
  return (
    <Timer
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
          <div>
            <Timer.Days /> days
            <Timer.Hours /> hours
            <Timer.Minutes /> minutes
            <Timer.Seconds /> seconds
          </div>
          <br />
          <div>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={resume}>Resume</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
          </div>
        </React.Fragment>
    )}
</Timer>
  )
}

export default LogTimer;