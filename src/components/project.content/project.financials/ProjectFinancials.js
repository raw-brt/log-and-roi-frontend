import React, { useEffect, useContext, useState } from 'react';
import KpiCard from './KpiCard';
import editProject from '../../../assets/images/Edit project.svg';
import { SelectedProjectContext }  from '../../../contexts/SelectedProjectContext';
import LogAndRoiServices from '../../../services/LogAndRoiServices';
import EditProjectOverlay from './EditProjectOverlay';

const ProjectFinancials = () => {
  const { selectedProject, selectedProjectName, selectedProjectProfit } = useContext(SelectedProjectContext);
  
  const [projectCost, setProjectCost] = useState(0);
  const [projectDuration, setProjectDuration] = useState(0);
  const [showEditProjectOverlay, setShowEditProjectOverlay] = useState(false);
  const [projectHasBeenEdited, setProjectHasBeenEdited] = useState(null);

  const roi = -100
  const color =  roi > 0 ? '#34C759' : "#FE2360"

  const handleDurationInHours = duration => (duration / (1000 * 60 * 60)).toFixed(2);
  const durationInHours = handleDurationInHours(projectDuration);

  const handleRoi = (profit, cost) => Math.floor(((profit - cost) / cost) * 100);
  const actualRoi = handleRoi(10, projectCost); 

  const actualCost = projectCost.toFixed(2);

  useEffect(() => {
    LogAndRoiServices.getLogs(selectedProject)
      .then((logs) => {
        if (selectedProject === null) {
          console.log('First render in financials')
        } else if (logs.length > 1) {
          const costArray = logs.map(element => element.cost);
          const durationArray = logs.map(element => element.duration);
          setProjectCost(costArray.reduce((total, element) => total + element));
          setProjectDuration(durationArray.reduce((total, element) => total + element));
          console.log(`Project cost is ${projectCost} and project duration is ${projectDuration}`)
        } else {
          console.log('There are no logs yet for this project');
        }
      })
      .catch(error => console.log(error))
  }, [selectedProject, projectCost, projectDuration, projectHasBeenEdited]);

  return(
      <div className='project-financials flex-column'>
        <div className='project-financials-header row d-flex justify-content-between'>
          <h3>{selectedProjectName}</h3>
          <img
            src={editProject}
            className='edit-project-icon'
            alt='Edit project icon'
            role='button'
            onClick={() => setShowEditProjectOverlay(!showEditProjectOverlay)}
          />
        </div>
        <div className='project-financial-cards row'>
          <div className="profit-cost-column col-sm">
            <KpiCard className="card profit" value={`${selectedProjectProfit} €`} title="Profit"/>
            <KpiCard className="card roi" value={`${actualRoi} %`} title="ROI" style={{ backgroundColor: color}}/>
          </div>
          <div className="roi-column col-sm">
            <KpiCard className="card time" value={`${durationInHours} hours`} title="Time invested"/>
            <KpiCard className="card cost" value={`${actualCost} €`} title="Project cost"/>
          </div>
      </div>
      <EditProjectOverlay
        showEditProjectOverlay={showEditProjectOverlay}
        setShowEditProjectOverlay={setShowEditProjectOverlay}
        setProjectHasBeenEdited={setProjectHasBeenEdited}
      />
    </div>
  )
}

export default ProjectFinancials;