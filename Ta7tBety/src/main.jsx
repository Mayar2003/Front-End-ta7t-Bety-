<<<<<<< HEAD
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import React from "react";
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { Provider } from 'react-redux'
import  Store  from './Store'
import App from './App.jsx'
import React from 'react'




createRoot(document.getElementById('root')).render(
>>>>>>> 3d22011 (updated Project)

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
