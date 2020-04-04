import React, { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';

const UserInfo = () => {
  const { currentUser } = useContext(AuthContext);
  
  return(
    <div className="user-info">
      <h5 className="username">{currentUser.username}</h5>
      <p className="user-mail">{currentUser.email}</p>
    </div>
  )
}

export default UserInfo;