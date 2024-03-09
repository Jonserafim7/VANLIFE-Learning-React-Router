import React, {useState, useEffect} from 'react'
import './App.scss'
import '/src/server.js'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import VansDetail from './pages/VansDetail'


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

  // state variable to store the van data fetched from the mock server
  const [vansData, setVansData] = useState([])

  // function to fetch the van data from the mock server
  const fetchVansData = async () => {
    try {
      const response = await fetch('/api/vans')
      const data = await response.json()
      setVansData(data.vans)
    } catch (error) {
      console.error('Error fetching van data', error)
    }
  }

  // fetch the van data when the component mounts
  useEffect(() => {
    fetchVansData()
  }, [])

  // function to return the appropriate van type class based on the van type
  const vanTypeClasses = (van) => {
    if (van.type === 'simple') {
      return 'simple';
    }
    else if (van.type === 'luxury') {
      return 'luxury';
    }
    else if (van.type === 'rugged') {
      return 'rugged';
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route 
              path="/vans" 
              element={
                <Vans 
                  vansData={vansData} 
                  vanTypeClasses={vanTypeClasses}/>
              } 
            />
            <Route 
              path="/vans/:id"
              /* URL parameters:
                - the colon in the path indicates that the id is a URL parameter;
                - a url parameter is a variable part of the URL;
                - the value of the URL parameter is available in the component
                  that is rendered when the URL matches the path;
                - in this case, the value of the id URL parameter is
                  available in the VansDetail component;
                - useParams is a hook that returns an object of key/value pairs
                  of URL parameters;
                - the key is the name of the URL parameter specified in the route:
                    <Route path="/vans/:id ...rest of the route...";
                - the value is the value of the URL parameter specified 
                  in the Vans page:
                    <Link to={`/vans/${van.id}`} ...rest of the link...;
              */
              element={
                <VansDetail 
                  vansData={vansData} 
                  vanTypeClasses={vanTypeClasses}
                />
              } 
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
