import React, { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import AuthContext from '../../contexts/AuthContext';
import SelectedProjectProvider, { SelectedProjectContext } from '../../contexts/SelectedProjectContext';
import LogAndRoiServices from '../../services/LogAndRoiServices';


const DeleteProjectOverlay = ({ showDeleteOverlay, setShowDeleteOverlay, setProjectHasBeenDeleted }) => {
  const { currentUser } = useContext(AuthContext);
  const { selectedProject, setSelectedProject } = useContext(SelectedProjectContext);

  const deleteProject = (projectId) => {
    LogAndRoiServices.deleteProject(projectId)
      .then(project => (console.log(`${project} has been deleted`)))
      .catch(error => console.log('Something went wrong while deleting project'))
  } 

  return(
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
              deleteProject(selectedProject._id);
              setShowDeleteOverlay(!showDeleteOverlay);
              setProjectHasBeenDeleted(selectedProject);
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