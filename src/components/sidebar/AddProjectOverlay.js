import React, { useState, useContext } from 'react'
import LogAndRoiServices from '../../services/LogAndRoiServices';
import AuthContext from '../../contexts/AuthContext';
import { Modal } from 'react-bootstrap';
import { SelectedProjectContext } from '../../contexts/SelectedProjectContext';

const AddProjectOverlay = ({ 
  showAddOverlay, 
  setShowAddOverlay,
  projectHasBeenCreated, 
  setProjectHasBeenCreated 
  }) => {
    const { currentUser } = useContext(AuthContext);
    const { setSelectedProject } = useContext(SelectedProjectContext);
    
    const [project, setProject] = useState('');
    const [costPerHour, setCostPerHour] = useState(0);
    

    const createProject = () => {
      const projectData = {
        projectName: project,
        costPerHour: costPerHour
      }
      LogAndRoiServices.createProject(projectData, currentUser)
        .then((project) => {
          setProject('');
          setCostPerHour(0);
          console.log(`The project ${project} was created`);
        })
        .catch(error => console.log(error))
    }


    return (
      showAddOverlay && (
        <Modal 
          dialogClassName='add-project-modal'
          size='lg'
          centered
          show={showAddOverlay}
          onHide={() => setShowAddOverlay(!showAddOverlay)}
        >
          <Modal.Header>
            <Modal.Title id='contained-modal-title-vcenter'>
              Create new project
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <p className='mb-1'>Project name</p>
          <input 
            className='add-project-input mb-3'
            label='Add a name to your project'
            placeholder='Name'
            type='text'
            value={project}
            onChange={event => setProject(event.target.value)}
          />
          <p className='mb-1'>Cost per hour (€)</p>
          <input 
            className='add-cost-input mb-3'
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
            onClick={() => {
              createProject();
              setShowAddOverlay(!showAddOverlay);
              setProjectHasBeenCreated(!projectHasBeenCreated);
              setSelectedProject(project._id);
              }}
            >
              Create project
            </button>
            <button
              className='cancel-project-button btn btn-secondary'
              type='button'
              onClick={() => setShowAddOverlay(!showAddOverlay)}
            >
              Cancel
            </button>
          </Modal.Footer>
        </Modal>
      )
    )
  }

export default AddProjectOverlay;