import React from "react";
import LogTimer from "./LogTimer";
import dollar from "../../../assets/images/dollar.png";

const Log = (props) => {
  return (
    <div className="log flex-row">
      <p className="log-title">{props.title}</p>
      <p className="log-date">{props.date}</p>
      <div className="d-flex align-items-center">
        <p className="log-date">
          <img
            src={dollar}
            alt="dollar"
            className="mr-1"
            style={{ maxWidth: "1.75rem" }}
          />
          dinerito
        </p>
      </div>
      <LogTimer />
    </div>
  );
};

export default Log;
