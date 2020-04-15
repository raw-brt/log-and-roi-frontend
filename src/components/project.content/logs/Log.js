import React from "react";
import LogTimer from "./LogTimer";
import dollar from "../../../assets/images/dollar.png";
import trashIcon from '../../../assets/images/Trash button.svg';

const Log = ({ identifier, title, date, deleteLog }) => {

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
          Coste
      </div>
      <div className='log-delete'>
        <img
          src={trashIcon}
          alt='delete'
          className='mr-1'
          style={{ maxWidth: "1.75rem" }}
          onClick={() => {
            deleteLog(identifier)
            console.log(`The log with the ${identifier} has been deleted`)
            }
          }
        ></img>
      </div>
      <LogTimer className='log-timer'/>
    </div>
  );
};

export default Log;
