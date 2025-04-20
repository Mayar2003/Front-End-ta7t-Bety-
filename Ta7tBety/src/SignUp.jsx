import { useState } from 'react'
import './App.css'
import SignUpComp from './Components/SignUpComp'
import { useSelector , useDispatch } from 'react-redux';
// import { authStart , authFailure , authSuccess } from './Features/auth/authSlice'
import { signupUser } from './Features/auth/authSlice'
;

function SignUp() {
  const dispatch = useDispatch();
  const [loading , error] = useSelector((state) => state.auth);
  const [formData , setFormData] = useState({username : '' , email : '' , password : ''});

  const handleChange = (e) => {
    setForm({...form , [e.target.name] : e.target.value});
  };

  const handleSubmit = async(e) =>{
    e.preventDefault();
    dispatch(signupUser(form));
    // try {
    //   const data = await SignUpUser(formData);
    //   dispatch(authSuccess(data.token));
    //   localStorage.setItem('token', data.token);
    // }
    // catch (err) {
    //   dispatch(authFailure(err.message));
    // }
  }
  // const [count, setCount] = useState(0)

  return (
    <>
     <SignUpComp></SignUpComp>
    </>
  )
}

export default SignUp;
