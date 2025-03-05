import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import SignInComp from './Components/SignInComp'
import Footer from './Components/Footer'

function SignIn() {
  const [count, setCount] = useState(0)

  return (
    <>
     <SignInComp></SignInComp>
    </>
  )
}

export default SignIn;
