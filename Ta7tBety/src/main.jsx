import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AboutUs from './AboutUs.jsx'
import HelpCenter from './HelpCenter.jsx'
import Profile from './Profile.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App /> 
    {/* <Profile></Profile> */}
    </BrowserRouter>
  </StrictMode>
)
