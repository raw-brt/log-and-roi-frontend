import React, { useState, useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { SelectedProjectContext } from '../../../contexts/SelectedProjectContext';
import LogAndRoiServices from '../../../services/LogAndRoiServices';

const AddLogOverlay = ({ showAddLogOverlay, setShowAddLogOverlay }) => {
  const { selectedProject } = useContext(SelectedProjectContext);

  const [log, setLog] = useState('');

  const createLog = () => {
    const logData = {
      logName: log
    }
    
    LogAndRoiServices.createLog(logData, selectedProject)
      .then(log => console.log(`The log ${log.logName} has been created`))
      .then(() => setLog(''))
      .catch(error => console.log(error))
  }

  return (
    showAddLogOverlay && (
      <Modal
        dialogClassName='add-log-modal'
        size='lg'
        centered
        show={showAddLogOverlay}
      >
        <Modal.Header>
          <Modal.Title id='contained-modal-title-vcenter'>
            Add new log
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>
            Add a name to your log
            <br/>
            <input 
              className='add-log-input'
              label='Add a name to your log'
              placeholder='I.E. Mockups'
              type='text'
              value={log}
              onChange={event => setLog(event.target.value)}
            />
          </label>
        </Modal.Body>
        <Modal.Footer>
          <button
            className='add-log-button btn btn-primary'
            type='button'
            onClick={() => {
              createLog();
              setShowAddLogOverlay(!showAddLogOverlay);
            }}
          >
            Create new log
          </button>
          <button
            className='cancel-log-button btn btn-secondary'
            type='button'
            onClick={() => setShowAddLogOverlay(!showAddLogOverlay)}
          >
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
    )
  )
}

export default AddLogOverlay;