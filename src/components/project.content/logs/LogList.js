import React from 'react';
import Log from './Log';

const LogList = () => {
  return(
    <ul className="log-list">
      <Log title="Wireframes" date="01/02/2020"/>
      <Log title="Mockups" date="02/02/2020"/>
      <Log title="API design" date="04/02/2020"/>
      <Log title="Front architecture" date="07/02/2020"/>
    </ul>
  )
}

export default LogList;