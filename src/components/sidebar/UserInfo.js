import React, { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';

const UserInfo = () => {
  const { currentUser } = useContext(AuthContext);
  
  return(
    <div className="user-info">
      <h5 className="username">{currentUser.username}</h5>
      <p className="user-mail">{currentUser.email}</p>
      {/* <img src="" className="user-settings" alt="User settings"></img> */}
    </div>
  )
}

export default UserInfo;