import React, { useState, useEffect, useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { SelectedLogContext } from '../../../contexts/SelectedLogContext';

const DeleteLogOverlay = ({ 
  showDeleteLogOverlay, 
  setShowDeleteLogOverlay,
  deleteLog,
  logHasBeenDeleted,
  setLogHasBeenDeleted
 }) => {
  const { selectedLog } = useContext(SelectedLogContext);

  const [isLogDeleted, setIsLogDeleted] = useState(false);

  useEffect(() => {
    if (isLogDeleted === true) {
      setShowDeleteLogOverlay(!showDeleteLogOverlay)
      setLogHasBeenDeleted(!logHasBeenDeleted)
    };
  }, [isLogDeleted]);

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
              deleteLog(selectedLog);
              // setShowDeleteLogOverlay(!showDeleteLogOverlay);
              setIsLogDeleted(!isLogDeleted);
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
