import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import ServicesSectionOne from './Components/ServicesSectionOne'
import ServicesCategories from './Components/ServicesCategories'
import Footer from './Components/Footer'

function Services() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header></Header> 
     <ServicesSectionOne />
     <ServicesCategories />
     <Footer></Footer>

    </>
  )
}

export default Services;
