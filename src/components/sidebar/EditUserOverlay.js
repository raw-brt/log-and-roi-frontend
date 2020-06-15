import React, { useState, useContext } from 'react';
import { Modal } from 'react-bootstrap';
import AuthContext from '../../contexts/AuthContext';

const EMAIL_PATTERN = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const EditUserOverlay = ({ 
    showEditOverlay, 
    setShowEditOverlay, 
    updateUser ,
    handleLogout,
    handleDeleteUser
  }) => {
  
  const { currentUser } = useContext(AuthContext);

  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('');

  const handleUpdateUser = () => {
    const updatedUserData = {
      email: newEmail,
      password: newPassword
    }
    
    if (newEmail === '' || newPassword === '' || newPasswordConfirmation === '') {
      alert('Some of the values you entered are not valid. Check them and try again, please.')
      } else if (newPassword !== newPasswordConfirmation) {
      alert('Password and password confirmation don\'t match. Please, try again')
      } else {
        if (window.confirm(`Are you sure you want to update your user account?`) === true) {
          updateUser(updatedUserData)
          }
        }
  
  }

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
          // pattern={`${EMAIL_PATTERN}`}
          pattern={EMAIL_PATTERN}
          title='You must input a valid email'
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
        <div>
          <button
            className='logout-button btn btn-secondary'
            type='button'
            onClick={() => handleLogout()}
          >
            Logout
          </button>
          <button
            className='delete-user-button btn btn-warning ml-3'
            type='button'
            onClick={() => {
                if (window.confirm(`Are you sure you want to delete your user account?.This can not be undone`)) {
                  handleDeleteUser(currentUser._id)
                  }
                }
              }
          >
            Delete account
          </button>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          className='cancel-edit-button btn btn-secondary'
          type='button'
          onClick={() => setShowEditOverlay(!showEditOverlay)}
        >
          Cancel
        </button>
        <button 
          className='edit-user-button btn btn-primary'
          type='button'
          onClick={() => handleUpdateUser()}
        >
          Save changes
        </button>
      </Modal.Footer>
    </Modal>
  )
}

export default EditUserOverlay;