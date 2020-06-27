import React, { useEffect, useContext, useState } from 'react';
import KpiCard from './KpiCard';
import editProject from '../../../assets/images/Edit project.svg';
import { SelectedProjectContext }  from '../../../contexts/SelectedProjectContext';
import LogAndRoiServices from '../../../services/LogAndRoiServices';
import EditProjectOverlay from './EditProjectOverlay';

const ProjectFinancials = ({ updatedTimer, updatedProject, setUpdatedProject }) => {
  const { selectedProject,
          selectedProjectName, 
          selectedProjectProfit, 
          modifiedData } = useContext(SelectedProjectContext);
  
  const [projectCost, setProjectCost] = useState(0);
  const [projectDuration, setProjectDuration] = useState(0);
  const [showEditProjectOverlay, setShowEditProjectOverlay] = useState(false);
  const [projectHasBeenEdited, setProjectHasBeenEdited] = useState(null);
  const [projectRoi, setProjectRoi] = useState(0);

  const handleDurationInHours = duration => (duration / (1000 * 60 * 60)).toFixed(2);
  const durationInHours = handleDurationInHours(projectDuration);

  const handleRoi = (profit, cost) => Math.floor(((profit - cost) / cost) * 100);
  const color =  projectRoi > 0 ? '#34C759' : "#FE2360"

  const actualCost = projectCost.toFixed(2);

  useEffect(() => {
    LogAndRoiServices.getLogs(selectedProject)
      .then((logs) => {
        if (selectedProject === null) {
          console.log('No selected project, so I can\'t calculate things');
        } else if (logs.length > 1) {
          const costArray = logs.map(element => element.cost);
          const durationArray = logs.map(element => element.duration);
          const actualRoi = handleRoi(selectedProjectProfit, projectCost); 
          setProjectCost(costArray.reduce((total, element) => total + element));
          setProjectDuration(durationArray.reduce((total, element) => total + element));
          setProjectRoi(actualRoi);
        } else {
          console.log('There are no logs yet for this project');
        }
      })
      .catch(error => console.log(error))
  }, [selectedProject, projectCost, projectDuration, projectHasBeenEdited, modifiedData, updatedTimer]);

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
        <div className='project-financial-cards'>
          <div className="profit-cost-column col-sm">
            <KpiCard 
              className="card profit" 
              value={ 
                selectedProjectProfit !== undefined
                 ? `${selectedProjectProfit} €`
                 :  `0 €`
                } 
              title="Profit"
              />
            <KpiCard 
              className="card roi" 
              value={
                projectRoi === Infinity || isNaN(projectRoi) === true
                  ? `0 %`
                  : `${projectRoi} %`
              } 
              title="ROI" style={{ backgroundColor: color}}/>
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
        updatedProject={updatedProject}
        setUpdatedProject={setUpdatedProject}
      />
    </div>
  )
}

export default ProjectFinancials;