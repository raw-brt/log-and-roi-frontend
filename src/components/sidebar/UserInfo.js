import React, { useState, useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import logout  from '../../assets/images/logout.svg';
import trash from '../../assets/images/trash.svg';
import edit from '../../assets/images/edit.svg';
import LogAndRoiServices from '../../services/LogAndRoiServices';
import { Redirect } from 'react-router-dom';
import EditUserOverlay from './EditUserOverlay';

const UserInfo = () => {
  const { currentUser } = useContext(AuthContext);

  const [loggedOut, setLoggedOut] = useState(false);
  const [showEditOverlay, setShowEditOverlay] = useState(false);

  const updateUser = (updatedUserData) => {
    LogAndRoiServices.updateUser(currentUser._id, updatedUserData)
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
      <div className="user-settings btn-group col d-flex justify-content-around align-top">
        <img 
          src={logout}
          className='user-logout-icon'
          alt='Logout'
          role='button'
          onClick={() => {
            handleLogout()
            }
          }
        />
        <img 
          src={edit}
          className='user-edit-icon'
          alt='Edit user'
          role='button'
          onClick={() => {
            setShowEditOverlay(!showEditOverlay);
          }}
        />
        <img 
          src={trash}
          className='user-delete-icon'
          alt='Delete user'
          role='button'
          onClick={() => {
            if (window.confirm(`Are you sure you want to delete your user account?.This can not be undone ${currentUser._id}`) === true) {
              handleDeleteUser(currentUser._id)
              }
            }
          }
        />
        <EditUserOverlay
          showEditOverlay={showEditOverlay}
          setShowEditOverlay={setShowEditOverlay}
          updateUser={updateUser}
        />
      </div>
    </div>
  )
}

export default UserInfo;