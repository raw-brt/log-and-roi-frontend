import React from 'react';
import KpiCard from './KpiCard';

const ProjectFinancials = () => {
  return(
    <div className="project-financials">
      <KpiCard className="profit" value="22.978€" />
      <KpiCard className="cost" value="4.500€" />
      <KpiCard className="roi" value="510%" />
    </div>
  )
}

export default ProjectFinancials;