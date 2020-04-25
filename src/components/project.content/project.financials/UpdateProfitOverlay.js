import React, { useState, useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { SelectedProjectContext } from '../../../contexts/SelectedProjectContext';
import LogAndRoiServices from '../../../services/LogAndRoiServices';

const UpdateProfitOverlay = ({ 
  showUpdateProfitOverlay,
  setShowUpdateProfitOverlay,
  profitHasBeenUpdated,
  setProfitHasBeenUpdated 
}) => {
  const { selectedProject } = useContext(SelectedProjectContext);
  const [profit, setProfit] = useState(0);

  const updateProject = () => {
    const projectData = {
      profit: profit
    }
    
    LogAndRoiServices.updateProject(projectData, selectedProject)
      .then(() => console.log(`The profit of ${selectedProject} was updated`))
      .catch(error => console.log(`Something went wrong: ${error}`))
  };

  return(
    showUpdateProfitOverlay && (
      <Modal
        dialogClassName='update-profit-modal'
        size='lg'
        centered
        show={showUpdateProfitOverlay}
      >
        <Modal.Header>
          <Modal.Title id='contained-modal-title-vcenter'>
            Update Profit
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            className='update-profit-input'
            label='Add a profit/projected profit for your project'
            placeholder='Profit'
            type='text'
            value={profit}
            onChange={event => setProfit(event.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <button
            className='update-profit-button btn btn-primary'
            type='button'
            onClick={() => {
              updateProject();
              setShowUpdateProfitOverlay(!showUpdateProfitOverlay);
              setProfitHasBeenUpdated(!profitHasBeenUpdated);
            }}
          >
            Update profit
          </button>
          <button
            className='cancel-project-button btn btn-secondary'
            type='button'
            onClick={() => setShowUpdateProfitOverlay(!showUpdateProfitOverlay)}
          >
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
    )
  )
}

export default UpdateProfitOverlay;