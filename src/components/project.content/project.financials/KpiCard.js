import React from 'react';

const KpiCard = props => {
  return(
    <div className="card">
      <h5 className="card-value">{props.value}</h5>
    </div>
  )
}

export default KpiCard;