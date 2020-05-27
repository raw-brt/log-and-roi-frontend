import React, { useState, useContext } from 'react';
import { Modal } from 'react-bootstrap';
import LogAndRoiServices from '../../services/LogAndRoiServices';
import AuthContext from '../../contexts/AuthContext';

const EditUserOverlay = ({ showEditOverlay, setShowEditOverlay }) => {
  const { currentUser } = useContext(AuthContext);

  const [newEmail, setNewEmail] = useState(null);
  const [newPassword, setNewPassword] = useState(null);
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState(null);

  return (
    <Modal
      dialogClassName='edit-user-modal'
      size='lg'
      centered
      show={showEditOverlay}
      onHide={() => setShowEditOverlay(!showEditOverlay)}
    >
      <Modal.Header>
        <Modal.Title id='contained-modal-title-vcenter'>
          Edit user information
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='mb-1'>User Email</p>
        <input
          className='edit-email-input mb-3'
          label='Email'
          placeholder={currentUser.email}
          type='text'
          value={newEmail}
          onChange={event => setNewEmail(event.target.value)}
        />
        <p className='mb-1'>Password</p>
        <input 
          className='edit-password-input mb-3'
          label='New password'
          placeholder='Enter new password'
          type='password'
          value={newPassword}
          onChange={event => setNewPassword(event.target.value)}
        />
        <p className='mb-1'>Confirm new Password</p>
        <input 
          className='confirm-password-input mb-3'
          label='Confirm new Password'
          placeholder='Confirm new password'
          type='password'
          value={newPasswordConfirmation}
          onChange={event => setNewPasswordConfirmation(event.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
        <button 
          className='edit-user-button btn btn-primary'
          type='button'
          onClick={() => console.log('Modal triggered')}
        >
          Save changes
        </button>
        <button
          className='cancel-edit-button btn btn-secondary'
          type='button'
          onClick={() => setShowEditOverlay(!showEditOverlay)}
        >
          Cancel
        </button>
      </Modal.Footer>
    </Modal>
  )
}

export default EditUserOverlay;