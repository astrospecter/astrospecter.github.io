import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render( // this is where the entrypoint is being rendered into the webpage
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
