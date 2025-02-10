import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import HelpCenterSectionOne from './Components/HelpCenterSectionOne'
import HelpCenterContactUs from './HelpCenterContactUs'
import HelpCenterFAQ from './HelpCenterFAQ'



function AboutUs() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header></Header>
     <HelpCenterSectionOne></HelpCenterSectionOne>
     <HelpCenterContactUs></HelpCenterContactUs>
     <HelpCenterFAQ></HelpCenterFAQ>
     <Footer></Footer>
    </>
  )
}

export default AboutUs
