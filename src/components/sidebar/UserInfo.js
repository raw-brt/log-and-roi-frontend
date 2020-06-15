import React, { useState, useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import settings from '../../assets/images/user_settings.svg';
import LogAndRoiServices from '../../services/LogAndRoiServices';
import { Redirect } from 'react-router-dom';
import EditUserOverlay from './EditUserOverlay';

const UserInfo = () => {
  const { currentUser } = useContext(AuthContext);

  const [loggedOut, setLoggedOut] = useState(false);
  const [showEditOverlay, setShowEditOverlay] = useState(false);

  const updateUser = (updatedUserData) => {
    LogAndRoiServices.updateUser(currentUser.id, updatedUserData)
      .then(() => {
        console.log('User updated');
        setShowEditOverlay(!showEditOverlay);
      })
      .catch(error => `Something went wrong ${error}`)
  }
  
  const handleLogout = () => {
    LogAndRoiServices.logout()
      .then(() => {
        console.log(`Logout successful. Bye!`);
        setLoggedOut(!loggedOut);
      })
      .catch((error) => console.log(`Something went wrong -> ${error}`))
  }
  
  const handleDeleteUser = userId => {
    LogAndRoiServices.deleteUser(userId)
      .then(user => {
        console.log(`The user with the id ${user._id} was successfully deleted`)
        setLoggedOut(!loggedOut);
      })
      .catch(error => `Something went wrong -> ${error}`)
  }

  if (loggedOut) return <Redirect to='/login' />
  
  return (
    <div className="user-info d-flex row justify-content-between">
      <div className="user-data col">
        <h6 className="username">{currentUser.email}</h6>
      </div>
      <div className="user-settings btn-group col d-flex justify-content-end align-top">
        <img 
          src={settings}
          className='user-edit-icon'
          alt='Edit user'
          role='button'
          onClick={() => setShowEditOverlay(!showEditOverlay)}
        />
        <EditUserOverlay
          showEditOverlay={showEditOverlay}
          setShowEditOverlay={setShowEditOverlay}
          updateUser={updateUser}
          handleLogout={handleLogout}
          handleDeleteUser={handleDeleteUser}
        />
      </div>
    </div>
  )
}

export default UserInfo;