import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import SignInComp from './Components/SignInComp'
import Footer from './Components/Footer'

function SignIn() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header></Header>
     <SignInComp></SignInComp>
     <Footer></Footer>

    </>
  )
}

export default SignIn;
