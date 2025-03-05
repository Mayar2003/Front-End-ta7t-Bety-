import { useState } from 'react'
import { Routes , Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Home from './Home'
import AboutUs from './AboutUs'
import HelpCenter from './HelpCenter'
import Profile from './Profile'
import SignIn from './SignIn'
import SignUp from './SignUp'
import VerifyCode from './VerifyCode'
import NewPassword from './NewPassword'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/AboutUS' element={<AboutUs />}></Route>
      <Route path='/HelpCenter' element={<HelpCenter />}></Route>
      <Route path='/Profile' element={<Profile />}></Route>
      <Route path='/Signin' element={<SignIn />}></Route>
      <Route path='/Signup' element={<SignUp />}></Route>
      <Route path='/VerifyCode' element={<VerifyCode />}></Route>
     </Routes>
    </>
  )
}

export default App;
