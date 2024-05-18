import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import App_State from './context/App_State.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <App_State>
    <App />
  </App_State>,
)
