import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AboutUs from './AboutUs.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Header/> */}
    {/* <App />  */}
    <AboutUs/>

  </StrictMode>
)
