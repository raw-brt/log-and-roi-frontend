import React from "react";
import LogTimer from "./LogTimer";
import dollar from "../../../assets/images/dollar.png";

const Log = (props) => {
  return (
    <div className="log flex-row justify-content-between align-items-center">
      <p className="log-title">{props.title}</p>
      <p className="log-date">{props.date}</p>
      <div className="log-cost d-flex align-items-center">
        <img
          src={dollar}
          alt="dollar"
          className="mr-1"
          style={{ maxWidth: "1.75rem" }}
        />
          Coste
      </div>
      <LogTimer className='log-timer'/>
    </div>
  );
};

export default Log;
