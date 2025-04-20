import { useState } from 'react'
import './App.css'
import React from 'react';
import SignInComp from './Components/SignInComp'
import { useSelector , useDispatch } from 'react-redux';
// import { authStart , authFailure , authSuccess } from './Features/auth/authSlice'
import { loginUser } from './Features/auth/authSlice'
// import { Login} from './Features/auth/authSlice';

function SignIn() {
  const dispatch = useDispatch();
  const {loading , error , token} = useSelector((state) => state.auth);
  const [formData , setFormData] = useState({email : '' , password : ''});
  // const [count, setCount] = useState(0)

  // const [email , setEmail] = useState('');
  // const [password , setPassword] = useState('');
  // const {loading , error }  = useSelector((state) => state.auth);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", formData); // 👈 check if this logs

    dispatch(loginUser(formData));
  };

  // const handleChange = async (e) =>{
  //   e.preventDefault();
  //   dispatch(authStart());

  //   try {
  //     const data = await loginUser(formData);
  //     dispatch(authSuccess(data.token));
  //     localStorage.setItem('token', data.token);

  // }
  // catch (err) {
  //   dispatch(authFailure(err.response?.data?.message || 'Login failed'));
  // }
  // };


  return (
    <>
     <SignInComp
     formData={formData}
     setFormData={setFormData}
     handleSubmit={handleSubmit}
     loading={loading}
     error={error} 
     ></SignInComp>
    </>
  )
}

export default SignIn;
