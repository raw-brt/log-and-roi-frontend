import React from 'react';
import LogTimer from './LogTimer';

const Log = props => {
  return(
  <li className="log">
    <p className="log-title">{props.title}</p>
    <p className="log-date">{props.date}</p>
    <LogTimer />
  </li>
  )
}

export default Log;