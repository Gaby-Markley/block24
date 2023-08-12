import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


// i observe thatt there are components being imported, as well as there being a reactDOM object where we are creating a root to get the elementid in the document under root, and then rendering. 

