import React, { useState, useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { SelectedProjectContext } from '../../contexts/SelectedProjectContext';
import LogAndRoiServices from '../../services/LogAndRoiServices';


const DeleteProjectOverlay = ({ showDeleteOverlay, setShowDeleteOverlay, setProjectHasBeenDeleted }) => {
  const { selectedProject } = useContext(SelectedProjectContext);
  
  const deleteProject = (projectId) => {
    LogAndRoiServices.deleteProject(projectId)
      .then(() => (console.log(`The project with this ${projectId} has been deleted`)))
      .catch(error => console.log(`Something went wrong while deleting project -> ${error}`))
  } 

  return (
    showDeleteOverlay && (
      <Modal
        dialogClassName='delete-project-modal'
        size='lg'
        centered
        show={showDeleteOverlay}
      >
        <Modal.Header>
          <Modal.Title id='contained-modal-title-vcenter'>
            Delete Project
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Are you sure you want to delete the project?</h4>
        </Modal.Body>
        <Modal.Footer>
          <button
            className='delete-project-button btn btn-primary'
            type='button'
            onClick={() => {
              setProjectHasBeenDeleted(selectedProject._id);
              deleteProject(selectedProject._id);
              setShowDeleteOverlay(!showDeleteOverlay);
            }}
          >Delete project</button>
          <button
            className='delete-project-cancel btn btn-secondary'
            type='button'
            onClick={() => setShowDeleteOverlay(!showDeleteOverlay)}
          >Cancel</button>
        </Modal.Footer>
      </Modal>
    )
  )
}
export default DeleteProjectOverlay;