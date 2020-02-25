import React from 'react';

const KpiCard = props => {
  return(
    <div className={props.className}>
      <h6 className="card-title">{props.title}</h6>
      <h5 className="card-value">{props.value}</h5>
    </div>
  )
}

export default KpiCard;