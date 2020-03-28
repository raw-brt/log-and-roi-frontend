import React, { useState, useContext } from 'react'
import LogAndRoiServices from '../../services/LogAndRoiServices';
import AuthContext from '../../contexts/AuthContext';
import { Modal } from 'react-bootstrap';

const AddProjectOverlay = ({ showAddOverlay, setShowAddOverlay }) => {
  const [project, setProject] = useState('');
  const [costPerHour, setCostPerHour] = useState(0);
  
  const { currentUser } = useContext(AuthContext);

  const createProject = () => {
    const projectData = {
      projectName: project,
      costPerHour: costPerHour
    }
    // console.log('call create project service here!')
    LogAndRoiServices.createProject(projectData, currentUser)
      .then(project => {
        console.log(`The project ${project} was created`);
      })
      .catch(error => console.log(error))
  }

  return(
    showAddOverlay && (
      <Modal 
        dialogClassName='add-project-modal'
        size='lg'
        centered
        show={showAddOverlay}
      >
        <Modal.Header>
          <Modal.Title id='contained-modal-title-vcenter'>
            Create new project
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <input 
          className='add-project'
          label='Add a name to your project'
          placeholder='Name'
          type='text'
          value={project}
          onChange={event => setProject(event.target.value)}
        />
        <input 
          className='add-cost'
          label='Add a cost-per-hour rate for your project'
          placeholder='Cost per hour'
          type='text'
          value={costPerHour}
          onChange={event => setCostPerHour(event.target.value)}
        />
        </Modal.Body>
        <Modal.Footer>
        <button 
          className='add-project-button btn btn-primary'
          type='button'
          onClick={() => 
            showAddOverlay
              ? createProject() && setShowAddOverlay(!showAddOverlay)
              : createProject()
            }
          >
            Create project
          </button>
          <button
            className='cancel-project-button btn btn-secondary'
            type='button'
            onClick={() => {
              setShowAddOverlay(!showAddOverlay);
              }}
            >
              Cancel
            </button>
        </Modal.Footer>
      </Modal>
    )
  )

  

}

export default AddProjectOverlay;