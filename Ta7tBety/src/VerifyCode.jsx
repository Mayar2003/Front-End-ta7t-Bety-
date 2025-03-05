import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VerifyCodeComp from './Components/VerifyCodeComp'

function VerifyCode() {
  const [count, setCount] = useState(0)

  return (
    <>
   <VerifyCodeComp></VerifyCodeComp>
    </>
  )
}

export default VerifyCode;
