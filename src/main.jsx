import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
//import './index.css'
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from "react-ga4";
ReactGA.initialize("G-0W9VMKMX1E");

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
    <Routes/>
    </BrowserRouter>
  </React.StrictMode>,
)

