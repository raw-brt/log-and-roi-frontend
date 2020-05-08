import React, { useState, useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { SelectedProjectContext } from '../../../contexts/SelectedProjectContext';
import LogAndRoiServices from '../../../services/LogAndRoiServices';

const EditProjectOverlay = ({ 
  showEditProjectOverlay,
  setShowEditProjectOverlay,
  setProjectHasBeenEdited 
}) => {
  const { selectedProject, setSelectedProjectCostPerHour } = useContext(SelectedProjectContext);

  const [projectName, setProjectName] = useState('');
  const [projectCost, setProjectCost] = useState(0);
  const [projectProfit, setProjectProfit] = useState(0);

  // Include here a first render get to populate form

  const updateProject = () => {
    const projectData = {
      projectName: projectName,
      costPerHour: projectCost,
      profit: projectProfit
    }

    LogAndRoiServices.updateProject(projectData, selectedProject)
      .then(project => {
        setSelectedProjectCostPerHour(projectCost);
        console.log(`The project ${project} has been updated`);
      })
      .catch((error) => console.log(error))
  }

  return(
    showEditProjectOverlay && (
      <Modal
        dialogClassName='edit-project-modal'
        size='lg'
        centered
        show={showEditProjectOverlay}
        onHide={() => setShowEditProjectOverlay(!showEditProjectOverlay)}
      >
        <Modal.Header>
          <Modal.Title id='contained-modal-title-vcenter'>
            Edit Project
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            className='edit-project-input'
            label='Project name'
            placeholder='Project name'
            type='text'
            value={projectName}
            onChange={event => setProjectName(event.target.value)}
          />
          <input
            className='edit-cost-input'
            label='Project cost per hour'
            placeholder='Cost per hour'
            type='text'
            value={projectCost}
            onChange={event => setProjectCost(event.target.value)}
          />
          <input
            className='edit-profit-input'
            label='Project profit'
            placeholder='Profit / Projected profit'
            type='text'
            value={projectProfit}
            onChange={event => setProjectProfit(event.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <button
            className='edit-project-button btn btn-primary'
            type='button'
            onClick={() => {
              updateProject();
              setShowEditProjectOverlay(!showEditProjectOverlay);
              setProjectHasBeenEdited(projectName);
            }}
          >
            Confirm changes
          </button>
          <button
            className='cancel-edit-project-button btn btn-secondary'
            type='button'
            onClick={() => setShowEditProjectOverlay(!showEditProjectOverlay)}
          >
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
    )
  )
}

export default EditProjectOverlay;