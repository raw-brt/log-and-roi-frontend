import React, { useState, useEffect, useContext } from 'react'
import LogAndRoiServices from '../../services/LogAndRoiServices';
import AuthContext from '../../contexts/AuthContext';

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
        console.log(project)
      })
      .catch(error => console.log(error))
  }

  return(
    showAddOverlay && (
      <div className='add-project-overlay'>
        <div className='add-project-overlay-header'>
          <h3 className='add-project-overlay-title'>Add new project</h3>
          <span
            className='add-project-overlay-cancel'
            label='Cancel add project'
            role='button'
            onClick={() => {
              setShowAddOverlay(!showAddOverlay);
            }}
          >
            X
          </span>
        </div>
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
        <div className='add-project-overlay-buttons'>
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
        </div>
      </div>
    )
  )
}

export default AddProjectOverlay;