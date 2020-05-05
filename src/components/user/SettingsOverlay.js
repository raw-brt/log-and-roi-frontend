import React, { useState, useContext } from 'react';
import { Modal } from 'react-bootstrap';
import AuthContext from '../../contexts/AuthContext';

const SettingsOverlay = ({ showSettingsOverlay, setShowSettingsOverlay }) => {
  const { currentUser } = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <Modal
      dialogClassName='user-settings-modal'
      size='lg'
      centered
      show={showSettingsOverlay}
    >
      <Modal.Header>
        <Modal.Title id='contained-modal-title-vcenter'>
          Settings
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          className='username-input'
          label='Username'
          placeholder={currentUser.username}
          type='text'
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
         <input
          className='email-input'
          label='Email'
          placeholder={currentUser.email}
          type='text'
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
          <input
            className='password-input'
            label='Password'
            placeholder='Password'
            type='text'
            value={password}
            onChange={event => setPassword(event.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
        <button
          className='confirm-changes-button btn btn-primary'
          type='button'
        >
          Confirm changes
        </button>
        <button
          className='close-settings-button btn btn-secondary'
          type='button'
          onClick={setShowSettingsOverlay(!showSettingsOverlay)}
        >
          Close
        </button>
        <button
          className='logout btn btn-warning'
          type='button'
        >
          Logout
        </button>
      </Modal.Footer>
    </Modal>
  )
}

export default SettingsOverlay;