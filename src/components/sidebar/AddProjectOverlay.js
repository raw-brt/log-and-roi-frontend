import React, { useState, useEffect } from 'react'
import LogAndRoiServices from '../../services/LogAndRoiServices';

const AddProjectOverlay = ({ showAddOverlay, setShowAddOverlay }) => {
  const [project, setProject] = useState('');

  const createProject = () => {
    console.log('call create project service here!')
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
          type='text'
          value={project}
          onChange={event => setProject(event.target.value)}
        />
        <div className='add-project-overlay-buttons'>
          <button 
            className='add-project-button'
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
            className='cancel-project-button'
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