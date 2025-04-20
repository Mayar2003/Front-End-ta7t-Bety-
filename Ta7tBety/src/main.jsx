import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { Provider } from 'react-redux'
import  Store  from './Store'
import App from './App.jsx'
import React from 'react'



createRoot(document.getElementById('root')).render(

  <React.StrictMode>
  <Provider store={Store}>
    <App />
  </Provider>
  </React.StrictMode>

  

    // <Provider Store={Store}>
  // <StrictMode>
  //   <BrowserRouter>
  //   <App /> 
  //   </BrowserRouter>
  // </StrictMode>
    // </Provider>
)
