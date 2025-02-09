import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import AboutUsSectionOne from './Components/AboutUsSectionOne'
import AboutUsSectionTwo from './Components/AboutUsSectionTwo'
import PositiveReviews from './Components/PositiveReviews'
import BestProviders from './Components/BestProviders'


function AboutUs() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header></Header>
     <AboutUsSectionOne></AboutUsSectionOne>
     <AboutUsSectionTwo></AboutUsSectionTwo>
     <PositiveReviews></PositiveReviews>
     <BestProviders></BestProviders>
     <Footer></Footer>

      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default AboutUs
