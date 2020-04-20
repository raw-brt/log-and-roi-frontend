import React, { useEffect, useContext, useState } from 'react';
import KpiCard from './KpiCard';
import { SelectedProjectContext }  from '../../../contexts/SelectedProjectContext';
import LogAndRoiServices from '../../../services/LogAndRoiServices';

const ProjectFinancials = () => {
  const { selectedProject, selectedProjectName } = useContext(SelectedProjectContext);
  
  // Cambiar contexto de proyecto a objeto proyecto para sacar los valores correspondientes y no el ID
  const [profit, setProfit] = useState(0);

  const roi = -100
  const color =  roi > 0 ? '#34C759' : "#FE2360"

  return(
      <div className='project-financials flex-column'>
        <div className='project-financials-header row'>
          <h3>{selectedProjectName}</h3>
        </div>
        <div className='project-financial-cards row'>
          <div className="profit-cost-column col-sm">
            <KpiCard className="card profit" value="22.978€" title="Profit"/>
            <KpiCard className="card roi" value="510%" title="ROI" style={{ backgroundColor: color}}/>
          </div>
          <div className="roi-column col-sm">
            <KpiCard className="card time" value="545 hours" title="Time invested"/>
            <KpiCard className="card cost" value="4.500€" title="Project cost"/>
          </div>
      </div>
    </div>
  )
}

export default ProjectFinancials;