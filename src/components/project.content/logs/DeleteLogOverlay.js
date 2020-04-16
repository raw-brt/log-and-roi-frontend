import React, { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import LogAndRoiServices from '../../../services/LogAndRoiServices';
import { SelectedLogContext } from '../../../contexts/SelectedLogContext';

const DeleteLogOverlay = ({ 
  showDeleteLogOverlay, 
  setShowDeleteLogOverlay,
  deletedLog,
  setDeletedLog
 }) => {
  const { selectedLog } = useContext(SelectedLogContext);

  const deleteLog = (logId) => {
    LogAndRoiServices.deleteLog(logId)
      .then(logId => `The log with the id ${logId} was deleted`)
      .catch(error => `Something went wrong when trying to delete the log with the id ${logId} -> ${error}`)
  };

  return (
    showDeleteLogOverlay && (
      <Modal
        dialogClassName='delete-log-modal'
        size='lg'
        centered
        show={showDeleteLogOverlay}
      >
        <Modal.Header>
          <Modal.Title id='contained-modal-title-vcenter'>
            Delete Log
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Are you sure you want to delete this log?</h4>
        </Modal.Body>
        <Modal.Footer>
          <button
            className='delete-log-button btn btn-primary'
            type='button'
            onClick={() => {
              deleteLog(selectedLog._id);
              setShowDeleteLogOverlay(!showDeleteLogOverlay);
              console.log(`The log with this identifier -> ${selectedLog._id} has been deleted`);
              setDeletedLog(!deletedLog);
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
