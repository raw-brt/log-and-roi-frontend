import React, { useState, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import '../user/userStyles.css';
import LogAndRoiServices from '../../services/LogAndRoiServices';
import AuthContext from '../../contexts/AuthContext';
import { Redirect } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const [currentUser, setCurrentUser] = useState(null);
  const [validateUser, setValidateUser] = useState(false)
  // const [error, setError] = useState(null);
  const { setUser } = useContext(AuthContext); 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCurrentUser({ ...currentUser, [name]: value })
  }

  const onSubmit = () => {
    LogAndRoiServices.login(currentUser)
      .then(user => {
        if (user) {
          setUser(user)
          setValidateUser(true)
        } else {
          console.log('User not found')
        }
      })
      .catch(error => console.log(error))
  }

  if (validateUser) return <Redirect to="/"/>

  return (
    
    <form className="form-signin" >
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input className="form-control" onChange={handleChange} type="text" placeholder="Email adress" name="email" ref={register({required: true, min: 6})} />
      <label for="inputPassword" class="sr-only">Password</label>
      <input className="form-control" onChange={handleChange} type="password" placeholder="Password" name="password" ref={register({required: true})} />
      <button className="btn btn-lg btn-primary btn-block" onClick={handleSubmit(onSubmit)} type="submit">Sign in</button>
      <p class="mt-5 mb-3 text-muted">© 2017-2019</p>
    </form>
  );
}

export default Login;