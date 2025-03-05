import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import SignUpComp from './Components/SignUpComp'
import Footer from './Components/Footer'

function SignUp() {
  const [count, setCount] = useState(0)

  return (
    <>
     <SignUpComp></SignUpComp>
    </>
  )
}

export default SignUp;
