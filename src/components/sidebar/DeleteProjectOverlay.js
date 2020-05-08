import React, { useState, useEffect, useContext } from "react";
import { Modal } from "react-bootstrap";
import { SelectedProjectContext } from "../../contexts/SelectedProjectContext";

const DeleteProjectOverlay = ({ 
  showDeleteOverlay, 
  setShowDeleteOverlay, 
  deleteProject,
  projectHasBeenDeleted,
  setProjectHasBeenDeleted
    }) => {
  
      const { selectedProject } = useContext(SelectedProjectContext);
      const [isProjectDeleted, setIsProjectDeleted] = useState(false);

      useEffect(() => {
        if (isProjectDeleted === true) {
          setShowDeleteOverlay(!showDeleteOverlay)
          setProjectHasBeenDeleted(!projectHasBeenDeleted)
        };
      }, [isProjectDeleted])

  return (
    showDeleteOverlay && (
      <Modal
        dialogClassName="delete-project-modal"
        size="lg"
        centered
        show={showDeleteOverlay}
        onHide={() => setShowDeleteOverlay(!showDeleteOverlay)}
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Delete Project
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>`Are you sure you want to delete the project with the id ${selectedProject}?`</h5>
        </Modal.Body>
        <Modal.Footer>
          {
            isProjectDeleted === false 
              ? 
                <>
                  <button
                    className="delete-project-button btn btn-primary"
                    type="button"
                    onClick={() => {
                      deleteProject(selectedProject)
                      setIsProjectDeleted(!isProjectDeleted)
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
                  </>
              :
                <>
                  <button>Go home
                    
                  </button>
                </>
          }
        </Modal.Footer>
      </Modal>
    )
  );
};
export default DeleteProjectOverlay;
