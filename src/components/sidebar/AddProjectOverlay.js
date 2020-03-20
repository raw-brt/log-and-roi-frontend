import React, { useState } from 'react'

const AddProjectOverlay = ({ showAddOverlay, setShowAddOverlay }) => {
  const [project, setProject] = useState(null);

  const createProject = () => {
    console.log('call create project service here!')
  }

  return(
    showAddOverlay && (
      <div className='add-project-overlay'>
        <h3 className='add-project-overlay-title'>Add new project</h3>
        <span
          className='add-project-overlay-cancel'
          label='Cancel add project'
        >
          X
        </span>
        <input 
          className='add-project'
          label='Add a name to your project'
          type='text'
          value={project}
          onChange={event => setProject(event.target.value)}
        />
        <button 
          className='add-project-button'
          type='button'
          onClick={() => 
            showAddOverlay
              ? createProject() && setShowAddOverlay(false)
              : createProject()
          }
        />
      </div>
    )
  )
}

export default AddProjectOverlay;