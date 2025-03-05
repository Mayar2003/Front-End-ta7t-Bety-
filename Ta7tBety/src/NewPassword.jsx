import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewPasswordComp from './Components/NewPasswordComp'

function NewPassword() {
  const [count, setCount] = useState(0)

  return (
    <>
   <NewPasswordComp></NewPasswordComp>

    </>
  )
}

export default NewPassword;
