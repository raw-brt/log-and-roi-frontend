import React, { useContext } from "react";
import { Modal } from "react-bootstrap";
import { SelectedProjectContext } from "../../contexts/SelectedProjectContext";

const DeleteProjectOverlay = ({ 
  showDeleteOverlay, 
  setShowDeleteOverlay, 
  projectHasBeenDeleted, 
  setProjectHasBeenDeleted, 
  deleteProject
    }) => {
  
      const { selectedProject } = useContext(SelectedProjectContext);

  return (
    showDeleteOverlay && (
      <Modal
        dialogClassName="delete-project-modal"
        size="lg"
        centered
        show={showDeleteOverlay}
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Delete Project
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>`Are you sure you want to delete the project with the id ${selectedProject}?`</h4>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="delete-project-button btn btn-primary"
            type="button"
            onClick={() => {
              deleteProject(selectedProject);
            }}
          >
            Delete project
          </button>
          <button
            className="delete-project-cancel btn btn-secondary"
            type="button"
            onClick={() => setShowDeleteOverlay(!showDeleteOverlay)}
          >
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
    )
  );
};
export default DeleteProjectOverlay;
