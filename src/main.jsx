import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// A virtual DOM is created to render the application to the root.
// The virtual DOM is a lightweight copy of the actual DOM.
// It is used to : optimize the rendering process, update the DOM efficiently
// and improve the performance of the application.
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
// The ReactDOM.createRoot() method is used to create a root for the application.
// The root is the top-level component of the application.
// It is used to render the application to the DOM.
// The render() method is used to render the application to the root.
