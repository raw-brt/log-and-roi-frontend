import React from 'react';
import KpiCard from './KpiCard';

const ProjectFinancials = () => {
  // Inject ROI here
  const roi = -100
  const color =  roi > 0 ? '#34C759' : "#FE2360"
  return(
      <div className='project-financials flex-column'>
        <div className='project-financials-header row'>
          <h3>Project name</h3>
        </div>
        <div className='project-financial-cards row'>
          <div className="profit-cost-column col-sm">
            <KpiCard className="card profit" value="22.978€" title="Profit"/>
            <KpiCard className="card cost" value="4.500€" title="Time invested"/>
          </div>
          <div className="roi-column col-sm">
            <KpiCard className="card roi" value="510%" title="ROI"
              style={{ backgroundColor: color}}/>
          </div>
      </div>
    </div>
  )
}

export default ProjectFinancials;