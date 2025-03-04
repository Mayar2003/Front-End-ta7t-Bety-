import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import ProfileSectionOne from './Components/ProfileSectionOne'
import ProfileMainSection from './Components/ProfileMainSection'

function Profile() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header></Header>
     <ProfileSectionOne></ProfileSectionOne>
     <ProfileMainSection></ProfileMainSection>
     <Footer></Footer>

    </>
  )
}

export default Profile;
