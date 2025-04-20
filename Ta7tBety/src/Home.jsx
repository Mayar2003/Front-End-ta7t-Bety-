import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import HomeSectionOne from './Components/HomeSectionOne'
import HomeSectionTwo from './Components/HomeSectionTwo'
import Footer from './Components/Footer'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header></Header> 
     <HomeSectionOne></HomeSectionOne>
     <HomeSectionTwo></HomeSectionTwo>
     <Footer></Footer>

    </>
  )
}

export default Home;
