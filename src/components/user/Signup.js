// import React, { useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import '../user/userStyles';

// const Signup = () => {
//   const { register, handleSubmit, errors } = useForm();
//   const onSubmit = data => console.log(data);
//   console.log(errors);

//   return (
//     <form >
//       <input type="text" placeholder="Username" name="Username" ref={register({required: true, min: 6, maxLength: 80})} />
//       <input type="text" placeholder="Email" name="Email" ref={register({required: true})} />
//       <input type="text" placeholder="Password" name="Password" ref={register({required: true, min: 8})} />
//       <input type="submit" />
//     </form>
//   );
// }

// export default Signup;