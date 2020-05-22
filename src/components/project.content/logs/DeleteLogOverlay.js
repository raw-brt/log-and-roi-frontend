import React, { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import LogAndRoiServices from '../../../services/LogAndRoiServices';
import { SelectedLogContext } from '../../../contexts/SelectedLogContext';

const DeleteLogOverlay = ({ 
  showDeleteLogOverlay, 
  setShowDeleteLogOverlay,
 }) => {
  const { selectedLog } = useContext(SelectedLogContext);

  const deleteLog = (logId) => {
    LogAndRoiServices.deleteLog(logId)
      .then(logId => {
        console.log(`The log with the id ${logId} was deleted`)
      })
      .catch(error => `Something went wrong when trying to delete the log with the id ${logId} -> ${error}`)
  };

  return (
    showDeleteLogOverlay && (
      <Modal
        dialogClassName='delete-log-modal'
        size='lg'
        centered
        show={showDeleteLogOverlay}
        onHide={() => setShowDeleteLogOverlay(!showDeleteLogOverlay)}
      >
        <Modal.Header>
          <Modal.Title id='contained-modal-title-vcenter'>
            Delete Log
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Are you sure you want to delete this log?</h5>
        </Modal.Body>
        <Modal.Footer>
          <button
            className='delete-log-button btn btn-primary'
            type='button'
            onClick={() => {
              console.log(selectedLog)
              setShowDeleteLogOverlay(!showDeleteLogOverlay);
              deleteLog(selectedLog);
              console.log(`The log with this identifier -> ${selectedLog} has been deleted`);
            }}
          >
            Delete log
          </button>
          <button
            className='delete-log-cancel btn btn-secondary'
            type='button'
            onClick={() => setShowDeleteLogOverlay(!showDeleteLogOverlay)}
          >
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
    )
  );
};

export default DeleteLogOverlay;
