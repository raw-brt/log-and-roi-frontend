import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import '../user/userStyles.css';
import LogAndRoiServices from '../../services/LogAndRoiServices';
import AuthContext from '../../contexts/AuthContext';
import { SelectedProjectContext } from '../../contexts/SelectedProjectContext';
import { Redirect } from 'react-router-dom';

const Login = () => {
  const { setUser } = useContext(AuthContext); 
  const { setSelectedProject } = useContext(SelectedProjectContext);

  const { register, handleSubmit } = useForm();
  const [currentUser, setCurrentUser] = useState(null);
  const [validateUser, setValidateUser] = useState(false)

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

      LogAndRoiServices.getProjects(currentUser)
        .then(projects => {
          console.log(projects)
          setSelectedProject(projects[0]._id)
        })
        .catch(error => console.log(error))
  }

  if (validateUser) return <Redirect to="/"/>

  return (
    
    <form className="form-signin" >
      <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label htmlFor="inputEmail" className="sr-only">Email address</label>
      <input className="form-control" onChange={handleChange} type="text" placeholder="Email adress" name="email" ref={register({required: true, min: 6})} />
      <label htmlFor="inputPassword" className="sr-only">Password</label>
      <input className="form-control" onChange={handleChange} type="password" placeholder="Password" name="password" ref={register({required: true})} />
      <button className="btn btn-lg btn-primary btn-block" onClick={handleSubmit(onSubmit)} type="submit">Sign in</button>
      <p className="mt-5 mb-3 text-muted">© 2017-2019</p>
    </form>
  );
}

export default Login;