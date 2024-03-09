import React, {useState, createContext, useEffect} from 'react'
import './App.scss'
import '/src/server.js'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import VansDetail from './pages/VansDetail'

export const AppContext = createContext()

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

    <AppContext.Provider value={{vansData, vanTypeClasses}}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/vans" element={<Vans />} />
              <Route path="/vans/:id" element={<VansDetail />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </AppContext.Provider>
  )
}
