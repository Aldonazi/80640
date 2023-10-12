import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import MiFieldStet from './Mifieldset.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <MiFieldStet titulo = "datos personales" txt1="nombre" txt2="Password"/>
  </React.StrictMode>,
)
