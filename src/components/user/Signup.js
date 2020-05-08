import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import '../user/userStyles.css';
import LogAndRoiServices from '../../services/LogAndRoiServices';
import AuthContext from '../../contexts/AuthContext';
import { Redirect } from 'react-router-dom';
import logo from '../../assets/images/logo_vertical.svg';

const Signup = () => {
  const { setUser } = useContext(AuthContext); 

  const { register, handleSubmit } = useForm();
  const [currentUser, setCurrentUser] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCurrentUser({ ...currentUser, [name]: value })
  }

  const onSubmit = () => {
    LogAndRoiServices.register(currentUser)
      .then(user => {
        if (user) {
          setUser(user)
        } else {
          console.log('User not found')
        }
      })
      .catch(error => console.log(error))

      return <Redirect to='/login' />
    }

  return (
    
    <div className='login-form d-flex justify-content-center align-items-center m-auto text-center'>
      <form className="form-signin col-8" >
        <img src={logo} alt='Log and ROI logo' className='mb-4'/>
        <h1 className="h3 mb-3 font-weight-normal text-center">Signup</h1>
        <label htmlFor="inputEmail" className="sr-only">Email address</label>
        <input className="form-control" onChange={handleChange} type="email" placeholder="Email adress" name="email" ref={register({required: true, min: 6})} />
        <label htmlFor="inputUsername" className="sr-only">Username</label>
        {/* <input className="form-control" onChange={handleChange} type="username" placeholder="Username" name="username" ref={register({required: true})} /> */}
        <label htmlFor="inputPassword" className="sr-only" type='password'>Password</label>
        <input className="form-control" onChange={handleChange} type="password" placeholder="Password" name="password" ref={register({required: true})} />
        <div className='login-buttons d-flex row mt-4 justify-content-center'>
        <a href='https://logandroi.com'><button className='login-back-button mr-2'>Go back</button></a>
          <button className="login-button ml-2" type="submit" onClick={handleSubmit(onSubmit)}>Sign up</button>
        </div>
        <p className="mt-5 mb-3 text-muted">© 2020</p>
      </form>
    </div>
  );
}

export default Signup;