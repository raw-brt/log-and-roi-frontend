import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import '../user/userStyles.css';
import LogAndRoiServices from '../../services/LogAndRoiServices';
import AuthContext from '../../contexts/AuthContext';
import { SelectedProjectContext } from '../../contexts/SelectedProjectContext';
import { Redirect } from 'react-router-dom';
import logo from '../../assets/images/logo_vertical.svg';

const Login = () => {
  const { setUser } = useContext(AuthContext); 
  const { setSelectedProject } = useContext(SelectedProjectContext);

  const { register, handleSubmit } = useForm();
  const [currentUser, setCurrentUser] = useState(null);
  const [validatedUser, setValidatedUser] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCurrentUser({ ...currentUser, [name]: value })
  }

  const onSubmit = () => {
    LogAndRoiServices.login(currentUser)
      .then(user => {
        if (user) {
          setUser(user)
          setValidatedUser(true)
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

  if (validatedUser) return <Redirect to='/' />

  return (
    // currentUser === null || currentUser.validated === false
    //   ? 
    //     alert('Your user account is not validated yet. Check your email inbox to confirm your email address.')

    //   : 
        <div className='login-form d-flex justify-content-center align-items-center m-auto text-center'>
          <form className="form-signin col-8" >

            {/* Logo and title */}
            <img src={logo} alt='Log and ROI logo' className='mb-4'/>
            <h1 className="h3 mb-3 font-weight-normal text-center">Login</h1>

            {/* Inputs */}
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input className="form-control" onChange={handleChange} type="email" placeholder="Email adress" name="email" ref={register({required: true, min: 6})} />
            <label htmlFor="inputPassword" className="sr-only" type='password'>Password</label>
            <input className="form-control" onChange={handleChange} type="password" placeholder="Password" name="password" ref={register({required: true})} />

            {/* Buttons */}
            <div className='login-buttons d-flex row mt-4 justify-content-center'>
              <button className='login-back-button mr-2'>Go back</button>
              <button className="login-button ml-2" onClick={handleSubmit(onSubmit)} type="submit">Sign in</button>
            </div>
            <p className="mt-5 mb-3 text-muted">© 2020</p>
          </form>
        </div>
  );
}

export default Login;