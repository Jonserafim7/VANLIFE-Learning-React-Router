import React, {useState, useEffect} from 'react'
import './App.scss'
import '/src/server.js'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Vans from './pages/Vans/Vans'

/*
  Browser router
    BrowserRouter is a context provider that makes the routing-related information available to all the components in the application. 
    It is used to wrap the entire application so that the routing information is available to all the components in the application.

  Routes
    Routes is a component that is used to define the routes in the application.
    It is a declarative way to define the routes in the application.

    Route
    Route is a component that is used to define the route in the application.
    It is used to define the mapping between the URL and the component that needs to be rendered when the URL matches the path.
*/

export default function App() {

  const [vansData, setVansData] = useState([])

  const fetchVansData = async () => {
    try {
      const response = await fetch('/api/vans')
      const data = await response.json()
      console.log('data', data.vans)
      setVansData(data.vans)
    } catch (error) {
      console.error('Error fetching van data', error)
    }
  }

  useEffect(() => {
    fetchVansData()
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans fetchVansData={fetchVansData}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
