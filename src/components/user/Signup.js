import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../user/userStyles.css';
import LogAndRoiServices from '../../services/LogAndRoiServices';
import logo from '../../assets/images/logo_vertical.svg';
import ReCAPTCHA from 'react-google-recaptcha';

const EMAIL_PATTERN = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const recaptchaRef = React.createRef();
const CAPTCHA_KEY = '6LcAKvYUAAAAACUo7NxouxtUzjwxoFRxKN4Dc0bI';


const Signup = () => {
  const { register, handleSubmit, errors } = useForm();
  const [newUser, setNewUser] = useState({});
  const [userHasBeenCreated, setUserHasBeenCreated] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value })
  }

  const onSubmit = () => {
    // Summon invisible captcha!
    // recaptchaRef.current.execute();

    LogAndRoiServices.register(newUser)
      .then(user => {
        console.log(`User with email -> ${user.email} was created successfully`)
        alert('A confirmation email has been sent to the email provided. Please, click the link in it to confirm your account and be able to login')
        setUserHasBeenCreated(!userHasBeenCreated);
      })
      .catch(error => {
        setErrorMessage(error.message)
        console.log(`Something went wrong ${error}`)
      })
    }

  //  if (userHasBeenCreated) return <Redirect to='/login' />

  return (
    errorMessage ? (
      <div className='login-form d-flex justify-content-center align-items-center m-auto text-center'>
      <form className="form-signin col-8" >
        {/* <ReCAPTCHA 
          ref={recaptchaRef}
          size='invisible'
          sitekey={CAPTCHA_KEY}
        /> */}

        {/* Logo and title*/}

        <img src={logo} alt='Log and ROI logo' className='mb-4'/>
        <h1 className="h3 mb-3 font-weight-normal text-center">Signup</h1>
        <h3 className="h3 mb-3 font-weight-normal text-center email-registered-error">Email already registered. Please, try again with a different one</h3>

        <label htmlFor="inputEmail" className="sr-only">Email address</label>
        <input 
          className="form-control" 
          onChange={handleChange} 
          type="email" 
          placeholder="Email adress" 
          name="email" 
          ref={register({required: true, pattern: EMAIL_PATTERN})} />
        {errors.email && <span>This field is required</span>}

        {/* Input for password address */}

        <label htmlFor="inputPassword" className="sr-only" type='password'>Password</label>
        <input 
          className="form-control" 
          onChange={handleChange} 
          type="password" 
          placeholder="Password" 
          name="password" 
          ref={register({required: true, minLength: {value: 6, message: "Password should have 6 characters at least" }})} />
        {errors.password && <span>This field is required and should have 6 characters at least</span>}

        {/* Buttons */}

        <div className='login-buttons d-flex row mt-4 justify-content-center'>
          <a href='https://logandroi.com'>
            <button className='login-back-button mr-2'>Go back</button>
          </a>
            <button className="login-button ml-2" type="submit" onClick={handleSubmit(onSubmit)}>Sign up</button>
        </div>
        <p className="mt-5 mb-3 text-muted">© 2020</p>
      </form>
  </div>
        )
      : (
          <div className='login-form d-flex justify-content-center align-items-center m-auto text-center'>
            <form className="form-signin col-8" >
              {/* <ReCAPTCHA 
                ref={recaptchaRef}
                size='invisible'
                sitekey={CAPTCHA_KEY}
              /> */}

              {/* Logo and title*/}

              <img src={logo} alt='Log and ROI logo' className='mb-4'/>
              <h1 className="h3 mb-3 font-weight-normal text-center">Signup</h1>

              <label htmlFor="inputEmail" className="sr-only">Email address</label>
              <input 
                className="form-control" 
                onChange={handleChange} 
                type="email" 
                placeholder="Email adress" 
                name="email" 
                ref={register({required: true, pattern: EMAIL_PATTERN})} />
              {errors.email && <span>This field is required</span>}

              {/* Input for password address */}

              <label htmlFor="inputPassword" className="sr-only" type='password'>Password</label>
              <input 
                className="form-control" 
                onChange={handleChange} 
                type="password" 
                placeholder="Password" 
                name="password" 
                ref={register({required: true, minLength: {value: 6, message: "Password should have 6 characters at least" }})} />
              {errors.password && <span>This field is required and should have 6 characters at least</span>}

              {/* Buttons */}

              <div className='login-buttons d-flex row mt-4 justify-content-center'>
                <a href='https://logandroi.com'>
                  <button className='login-back-button mr-2'>Go back</button>
                </a>
                  <button className="login-button ml-2" type="submit" onClick={handleSubmit(onSubmit)}>Sign up</button>
              </div>
              <p className="mt-5 mb-3 text-muted">© 2020</p>
            </form>
        </div>
      )
  );
        
    
    
    
}

export default Signup;