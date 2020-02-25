import React from 'react';
import { useForm } from 'react-hook-form';

function Login() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Username" name="Username" ref={register({required: true, min: 6, maxLength: 80})} />
      <input type="text" placeholder="Email" name="Email" ref={register({required: true})} />
      <input type="submit" />
    </form>
  );
}

export default Login;