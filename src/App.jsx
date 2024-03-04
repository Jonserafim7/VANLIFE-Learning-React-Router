import React from 'react'
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'

/*Browser router
    BrowserRouter is a context provider that makes the routing-related information available to all the components in the application. 
    It is used to wrap the entire application so that the routing information is available to all the components in the application.
*/

/* Routes
    Routes is a component that is used to define the routes in the application.
    It is a declarative way to define the routes in the application.
*/

/* Route
    Route is a component that is used to define the route in the application.
    It is used to define the mapping between the URL and the component that needs to be rendered when the URL matches the path.
*/

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
